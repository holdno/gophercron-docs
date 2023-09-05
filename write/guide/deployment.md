# 部署

## 中心服务

### 配置文件

```toml
log_level = "debug" # 日志级别 debug info error
log_path = "" # 日志输出目录，留空则默认输出到stdout
report_addr = "" # 告警信息推送地址，业务可以实现对应接口，实现自定义告警通知

[deploy]
# 当前的环境:dev、release
environment = "release"
# 对外提供的端口
host = "0.0.0.0:6306"
# proxy_host = "0.0.0.0:6307" # 若需要夸网络环境部署，则需要开启proxy端口，与micro.region_proxy配置相对应
# 数据库操作超时时间
timeout = 5  # 秒为单位
# 前端文件路径
view_path = "./view"

[publish] # 任务状态实时推送，主要结合V2界面使用，任务状态会即时刷新
enable = false
endpoint = "" # 实现了推送协议的地址

[micro]
region = "center" # 无特殊调整建议固定
org_id = "gophercron"  # 无特殊调整建议固定，为日后多租户feature做前提
# [micro.region_proxy] # 解决中心间夸网络环境调用问题，夸网路环境：无法直接通过服务发现拿到endpoint的IP地址进行调用，例如物理机与k8s pod间就属于不同网络环境
# otherregion = "other region service endpoint" # 该域名需要解析到部署在 otherregion 的中心服务下

# etcd
[etcd]
service = ["0.0.0.0:2379"]
username = ""
password = ""
dialtimeout = 5000
# etcd kv存储的key前缀 用来与其他业务做区分
prefix = "/gopher_cron"

[mysql]
service="0.0.0.0:3306"
username=""
password=""
database=""
auto_create=true # 是否自动建表

# jwt用来做api的身份校验
[jwt]
# 部署时建议替换
private_key = """
-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMzza7z4KGRHB2k3
FvMnKmKjTFv6N3BYt3kNFwovRxTwWUIPp8kf5i4xMxJ/1ElqpBIirSkqHJ8c8dad
NLAuq52TOYa18qy6nD2uk+QXblv1Q4cveHQo91dpCCPzroPNzjzck9yq5GUmysQ6
F+ljW8K3parT/+8zv0kEUFWgnfWbAgMBAAECgYBd4h/3R2IRVWwyqVas+cLzvkQr
WfptT2Z0YCeutauFDviER3GfsyoY/NadYcsX+m7AE/xof+7ugC7UFd1d23MnAL4V
8gDtD3YpIT8A+4lMV3EDmmhPxdbTTNMMK29rbMxeiaawTAyaF6B/ywTzwPOkPXuX
wDR47br2TjavM0/yMQJBAOb/ayLx6Qe86P1zNMzX948+s0E+hlixwDNhH5Glagox
22NOvN3/5gA2cqBJOg9xLxGLbfGLqFn0gcKOfFMguvkCQQDjIkjwZVGOgFS4+MH2
MJOVJ7RTFrNs5+ho/iH6MVwJc6SGMhDlklWWHLxm0N6sK9FnJ6hsxlFAnbGhRbZk
ReYzAkEAqDHcaaJpAfhcUYdcL7clC4kk7mG/Yr9yajbSzLL75hZtXv7K6H5Wk1sR
1YHcI7hPBGBYmmMNHwq4nNgw0DppyQJAW+BsfMGfQfNrUf9eBkYUDMuox8tw/Oa6
Pm4+NERvJGug65+o8hRFhplNJJHs4NxAsmd6W7XE/ExNpBzc8KbNvQJAOhi61BCp
McN8bX27y5HRVwi45GWtfH5GyEWlsCrLMkXB43JeY+uukQ5tYRxFr5jwB0Ml0Gx1
0eb2zriCpjbd/w==
-----END PRIVATE KEY-----
"""

public_key = """
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM82u8+ChkRwdpNxbzJypio0xb
+jdwWLd5DRcKL0cU8FlCD6fJH+YuMTMSf9RJaqQSIq0pKhyfHPHWnTSwLqudkzmG
tfKsupw9rpPkF25b9UOHL3h0KPdXaQgj866Dzc483JPcquRlJsrEOhfpY1vCt6Wq
0//vM79JBFBVoJ31mwIDAQAB
-----END PUBLIC KEY-----
"""
exp = 168  # token 有效期(小时)

[oidc] # oidc协议登录，授权后转为gophercron自身的登录模式，所以当前版本oidc退出登录不会影响gophercron
client_id = ""
client_secret = ""
endpoint = ""
redirect_url = ""
scopes = [""]
user_name_key = "" # 可以在 claims 中拿到用户昵称的 key
```

#### 多数据中心部署

gophercron 作为高可用的定时任务管理系统，提供跨网络环境的部署姿势，支持多`数据中心`部署容灾

gophercron 内置 region 概念，同名 region 即被视为同一`数据中心`，在`中心服务`配置中，开启 `deploy.proxy_host` 与 `micro.region_proxy` 两项配置即可实现`跨数据中心部署`

- deploy.proxy_host  
   该配置项表示当前`中心服务`的 proxy 服务监听的地址(端口)信息，每个数据中心的中心服务需要单独配置 proxy 域名解析到 proxy 服务地址上，并将 proxy 域名信息配置在其他`中心服务`的 `micro.region_proxy` 配置下

- micro.region_proxy  
   该配置表示`中心服务`跨数据中心的部署信息，key value 的形式配置每个`数据中心`(region)对应的 proxy 服务的地址

实现设计见 [Region](/guide/micro#region)

### 启动命令

```shell
gophercron service -c {your service config path}
```

管理员初始账号密码为 admin 123456

部署后可通过 `{endpoint}/admin` 访问图形界面，前后端分离的部署方式请参考 [可视化界面](/guide/frontend)

## 边缘 agent

### 配置文件

```toml
address = "" # 人工配置agent注册地址，否则自动获取网卡地址
log_level = "debug" # 日志级别 debug info error
log_path = "" # 日志数据路径
shell = "/bin/bash" # 执行命令行的工具，根据自身机器情况而定
report_addr = "" # 告警信息推送地址，业务可以实现对应接口，实现自定义告警通知

timeout = 5

[micro]
region = "center" # 网络维度，确保当前有同region的中心服务存在
org_id = "gophercron" # 预留字段，目前没有实际作用
weight = 100 # 该 agent 在中心调度任务时的权重，预定义好的定时任务目前不受该权重影响
endpoint = "localhost:6306" # 中心服务的地址，域名也请带上端口号(HA等则仅需带上80 / 443端口号)

[auth]
# public_key 需要与中心服务的private_key相匹配，中心请求时会带上由private_key签发的jwt，边缘agent需要能够使用该public_key完成解密
public_key = """
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM82u8+ChkRwdpNxbzJypio0xb
+jdwWLd5DRcKL0cU8FlCD6fJH+YuMTMSf9RJaqQSIq0pKhyfHPHWnTSwLqudkzmG
tfKsupw9rpPkF25b9UOHL3h0KPdXaQgj866Dzc483JPcquRlJsrEOhfpY1vCt6Wq
0//vM79JBFBVoJ31mwIDAQAB
-----END PUBLIC KEY-----
"""

[[auth.projects]]
pid = 0 # project id
token = "" # 先启动中心服务，创建项目，通过项目管理获取项目token，配置在此，agent在启动时会使用该token与中心服务进行鉴权
```

::: tip
如何获取项目 pid 与 token 见 [项目管理](/guide/frontend#项目管理)
:::

### 启动命令

```shell
gophercron client -c {your client config path}
```

启动后通过服务日志观察服务是否注册成功，若成功，则可以在可视化界面中看到对应在线节点

![在线节点示例](/在线节点示例.png)
