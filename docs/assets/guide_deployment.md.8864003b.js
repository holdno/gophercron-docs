import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.419948d5.js";const l="/在线节点示例.png",q=JSON.parse('{"title":"部署","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment.md","filePath":"guide/deployment.md"}'),o={name:"guide/deployment.md"},e=p(`<h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h1><h2 id="中心服务" tabindex="-1">中心服务 <a class="header-anchor" href="#中心服务" aria-label="Permalink to &quot;中心服务&quot;">​</a></h2><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">log_level = </span><span style="color:#9ECBFF;">&quot;debug&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 日志级别 debug info error</span></span>
<span class="line"><span style="color:#E1E4E8;">log_path = </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 日志输出目录，留空则默认输出到stdout</span></span>
<span class="line"><span style="color:#E1E4E8;">report_addr = </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 告警信息推送地址，业务可以实现对应接口，实现自定义告警通知</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">deploy</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#6A737D;"># 当前的环境:dev、release</span></span>
<span class="line"><span style="color:#E1E4E8;">environment = </span><span style="color:#9ECBFF;">&quot;release&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 对外提供的端口</span></span>
<span class="line"><span style="color:#E1E4E8;">host = </span><span style="color:#9ECBFF;">&quot;0.0.0.0:6306&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># proxy_host = &quot;0.0.0.0:6307&quot; # 若需要夸网络环境部署，则需要开启proxy端口，与micro.region_proxy配置相对应</span></span>
<span class="line"><span style="color:#6A737D;"># 数据库操作超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">timeout = </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 秒为单位</span></span>
<span class="line"><span style="color:#6A737D;"># 前端文件路径</span></span>
<span class="line"><span style="color:#E1E4E8;">view_path = </span><span style="color:#9ECBFF;">&quot;./view&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">publish</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;"># 任务状态实时推送，主要结合V2界面使用，任务状态会即时刷新</span></span>
<span class="line"><span style="color:#E1E4E8;">enable = </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">endpoint = </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 实现了推送协议的地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">micro</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">region = </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 无特殊调整建议固定</span></span>
<span class="line"><span style="color:#E1E4E8;">org_id = </span><span style="color:#9ECBFF;">&quot;gophercron&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 用户服务注册与发现，agent与center需配置相同才互相可见</span></span>
<span class="line"><span style="color:#6A737D;"># [micro.region_proxy] # 解决中心间夸网络环境调用问题，夸网路环境：无法直接通过服务发现拿到endpoint的IP地址进行调用，例如物理机与k8s pod间就属于不同网络环境</span></span>
<span class="line"><span style="color:#6A737D;"># otherregion = &quot;other region service endpoint&quot; # 该域名需要解析到部署在 otherregion 的中心服务下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># etcd</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">etcd</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">service = [</span><span style="color:#9ECBFF;">&quot;0.0.0.0:2379&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">username = </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">password = </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">dialtimeout = </span><span style="color:#79B8FF;">5000</span></span>
<span class="line"><span style="color:#6A737D;"># etcd kv存储的key前缀 用来与其他业务做区分</span></span>
<span class="line"><span style="color:#E1E4E8;">prefix = </span><span style="color:#9ECBFF;">&quot;/gopher_cron&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">mysql</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">service=</span><span style="color:#9ECBFF;">&quot;0.0.0.0:3306&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">username=</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">password=</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">database=</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">auto_create=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 是否自动建表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># jwt用来做api的身份校验</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">jwt</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#6A737D;"># 部署时建议替换</span></span>
<span class="line"><span style="color:#E1E4E8;">private_key = </span><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">-----BEGIN PRIVATE KEY-----</span></span>
<span class="line"><span style="color:#9ECBFF;">MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMzza7z4KGRHB2k3</span></span>
<span class="line"><span style="color:#9ECBFF;">FvMnKmKjTFv6N3BYt3kNFwovRxTwWUIPp8kf5i4xMxJ/1ElqpBIirSkqHJ8c8dad</span></span>
<span class="line"><span style="color:#9ECBFF;">NLAuq52TOYa18qy6nD2uk+QXblv1Q4cveHQo91dpCCPzroPNzjzck9yq5GUmysQ6</span></span>
<span class="line"><span style="color:#9ECBFF;">F+ljW8K3parT/+8zv0kEUFWgnfWbAgMBAAECgYBd4h/3R2IRVWwyqVas+cLzvkQr</span></span>
<span class="line"><span style="color:#9ECBFF;">WfptT2Z0YCeutauFDviER3GfsyoY/NadYcsX+m7AE/xof+7ugC7UFd1d23MnAL4V</span></span>
<span class="line"><span style="color:#9ECBFF;">8gDtD3YpIT8A+4lMV3EDmmhPxdbTTNMMK29rbMxeiaawTAyaF6B/ywTzwPOkPXuX</span></span>
<span class="line"><span style="color:#9ECBFF;">wDR47br2TjavM0/yMQJBAOb/ayLx6Qe86P1zNMzX948+s0E+hlixwDNhH5Glagox</span></span>
<span class="line"><span style="color:#9ECBFF;">22NOvN3/5gA2cqBJOg9xLxGLbfGLqFn0gcKOfFMguvkCQQDjIkjwZVGOgFS4+MH2</span></span>
<span class="line"><span style="color:#9ECBFF;">MJOVJ7RTFrNs5+ho/iH6MVwJc6SGMhDlklWWHLxm0N6sK9FnJ6hsxlFAnbGhRbZk</span></span>
<span class="line"><span style="color:#9ECBFF;">ReYzAkEAqDHcaaJpAfhcUYdcL7clC4kk7mG/Yr9yajbSzLL75hZtXv7K6H5Wk1sR</span></span>
<span class="line"><span style="color:#9ECBFF;">1YHcI7hPBGBYmmMNHwq4nNgw0DppyQJAW+BsfMGfQfNrUf9eBkYUDMuox8tw/Oa6</span></span>
<span class="line"><span style="color:#9ECBFF;">Pm4+NERvJGug65+o8hRFhplNJJHs4NxAsmd6W7XE/ExNpBzc8KbNvQJAOhi61BCp</span></span>
<span class="line"><span style="color:#9ECBFF;">McN8bX27y5HRVwi45GWtfH5GyEWlsCrLMkXB43JeY+uukQ5tYRxFr5jwB0Ml0Gx1</span></span>
<span class="line"><span style="color:#9ECBFF;">0eb2zriCpjbd/w==</span></span>
<span class="line"><span style="color:#9ECBFF;">-----END PRIVATE KEY-----</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">public_key = </span><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">-----BEGIN PUBLIC KEY-----</span></span>
<span class="line"><span style="color:#9ECBFF;">MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM82u8+ChkRwdpNxbzJypio0xb</span></span>
<span class="line"><span style="color:#9ECBFF;">+jdwWLd5DRcKL0cU8FlCD6fJH+YuMTMSf9RJaqQSIq0pKhyfHPHWnTSwLqudkzmG</span></span>
<span class="line"><span style="color:#9ECBFF;">tfKsupw9rpPkF25b9UOHL3h0KPdXaQgj866Dzc483JPcquRlJsrEOhfpY1vCt6Wq</span></span>
<span class="line"><span style="color:#9ECBFF;">0//vM79JBFBVoJ31mwIDAQAB</span></span>
<span class="line"><span style="color:#9ECBFF;">-----END PUBLIC KEY-----</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">exp = </span><span style="color:#79B8FF;">168</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># token 有效期(小时)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">oidc</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;"># oidc协议登录，授权后转为gophercron自身的登录模式，所以当前版本oidc退出登录不会影响gophercron</span></span>
<span class="line"><span style="color:#E1E4E8;">client_id = </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">client_secret = </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">endpoint = </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">redirect_url = </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">scopes = [</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">user_name_key = </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 可以在 claims 中拿到用户昵称的 key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">log_level = </span><span style="color:#032F62;">&quot;debug&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 日志级别 debug info error</span></span>
<span class="line"><span style="color:#24292E;">log_path = </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 日志输出目录，留空则默认输出到stdout</span></span>
<span class="line"><span style="color:#24292E;">report_addr = </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 告警信息推送地址，业务可以实现对应接口，实现自定义告警通知</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">deploy</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;"># 当前的环境:dev、release</span></span>
<span class="line"><span style="color:#24292E;">environment = </span><span style="color:#032F62;">&quot;release&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 对外提供的端口</span></span>
<span class="line"><span style="color:#24292E;">host = </span><span style="color:#032F62;">&quot;0.0.0.0:6306&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># proxy_host = &quot;0.0.0.0:6307&quot; # 若需要夸网络环境部署，则需要开启proxy端口，与micro.region_proxy配置相对应</span></span>
<span class="line"><span style="color:#6A737D;"># 数据库操作超时时间</span></span>
<span class="line"><span style="color:#24292E;">timeout = </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 秒为单位</span></span>
<span class="line"><span style="color:#6A737D;"># 前端文件路径</span></span>
<span class="line"><span style="color:#24292E;">view_path = </span><span style="color:#032F62;">&quot;./view&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">publish</span><span style="color:#24292E;">] </span><span style="color:#6A737D;"># 任务状态实时推送，主要结合V2界面使用，任务状态会即时刷新</span></span>
<span class="line"><span style="color:#24292E;">enable = </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">endpoint = </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 实现了推送协议的地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">micro</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">region = </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 无特殊调整建议固定</span></span>
<span class="line"><span style="color:#24292E;">org_id = </span><span style="color:#032F62;">&quot;gophercron&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 用户服务注册与发现，agent与center需配置相同才互相可见</span></span>
<span class="line"><span style="color:#6A737D;"># [micro.region_proxy] # 解决中心间夸网络环境调用问题，夸网路环境：无法直接通过服务发现拿到endpoint的IP地址进行调用，例如物理机与k8s pod间就属于不同网络环境</span></span>
<span class="line"><span style="color:#6A737D;"># otherregion = &quot;other region service endpoint&quot; # 该域名需要解析到部署在 otherregion 的中心服务下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># etcd</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">etcd</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">service = [</span><span style="color:#032F62;">&quot;0.0.0.0:2379&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">username = </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">password = </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">dialtimeout = </span><span style="color:#005CC5;">5000</span></span>
<span class="line"><span style="color:#6A737D;"># etcd kv存储的key前缀 用来与其他业务做区分</span></span>
<span class="line"><span style="color:#24292E;">prefix = </span><span style="color:#032F62;">&quot;/gopher_cron&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">mysql</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">service=</span><span style="color:#032F62;">&quot;0.0.0.0:3306&quot;</span></span>
<span class="line"><span style="color:#24292E;">username=</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">password=</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">database=</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">auto_create=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 是否自动建表</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># jwt用来做api的身份校验</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">jwt</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;"># 部署时建议替换</span></span>
<span class="line"><span style="color:#24292E;">private_key = </span><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">-----BEGIN PRIVATE KEY-----</span></span>
<span class="line"><span style="color:#032F62;">MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMzza7z4KGRHB2k3</span></span>
<span class="line"><span style="color:#032F62;">FvMnKmKjTFv6N3BYt3kNFwovRxTwWUIPp8kf5i4xMxJ/1ElqpBIirSkqHJ8c8dad</span></span>
<span class="line"><span style="color:#032F62;">NLAuq52TOYa18qy6nD2uk+QXblv1Q4cveHQo91dpCCPzroPNzjzck9yq5GUmysQ6</span></span>
<span class="line"><span style="color:#032F62;">F+ljW8K3parT/+8zv0kEUFWgnfWbAgMBAAECgYBd4h/3R2IRVWwyqVas+cLzvkQr</span></span>
<span class="line"><span style="color:#032F62;">WfptT2Z0YCeutauFDviER3GfsyoY/NadYcsX+m7AE/xof+7ugC7UFd1d23MnAL4V</span></span>
<span class="line"><span style="color:#032F62;">8gDtD3YpIT8A+4lMV3EDmmhPxdbTTNMMK29rbMxeiaawTAyaF6B/ywTzwPOkPXuX</span></span>
<span class="line"><span style="color:#032F62;">wDR47br2TjavM0/yMQJBAOb/ayLx6Qe86P1zNMzX948+s0E+hlixwDNhH5Glagox</span></span>
<span class="line"><span style="color:#032F62;">22NOvN3/5gA2cqBJOg9xLxGLbfGLqFn0gcKOfFMguvkCQQDjIkjwZVGOgFS4+MH2</span></span>
<span class="line"><span style="color:#032F62;">MJOVJ7RTFrNs5+ho/iH6MVwJc6SGMhDlklWWHLxm0N6sK9FnJ6hsxlFAnbGhRbZk</span></span>
<span class="line"><span style="color:#032F62;">ReYzAkEAqDHcaaJpAfhcUYdcL7clC4kk7mG/Yr9yajbSzLL75hZtXv7K6H5Wk1sR</span></span>
<span class="line"><span style="color:#032F62;">1YHcI7hPBGBYmmMNHwq4nNgw0DppyQJAW+BsfMGfQfNrUf9eBkYUDMuox8tw/Oa6</span></span>
<span class="line"><span style="color:#032F62;">Pm4+NERvJGug65+o8hRFhplNJJHs4NxAsmd6W7XE/ExNpBzc8KbNvQJAOhi61BCp</span></span>
<span class="line"><span style="color:#032F62;">McN8bX27y5HRVwi45GWtfH5GyEWlsCrLMkXB43JeY+uukQ5tYRxFr5jwB0Ml0Gx1</span></span>
<span class="line"><span style="color:#032F62;">0eb2zriCpjbd/w==</span></span>
<span class="line"><span style="color:#032F62;">-----END PRIVATE KEY-----</span></span>
<span class="line"><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">public_key = </span><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">-----BEGIN PUBLIC KEY-----</span></span>
<span class="line"><span style="color:#032F62;">MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM82u8+ChkRwdpNxbzJypio0xb</span></span>
<span class="line"><span style="color:#032F62;">+jdwWLd5DRcKL0cU8FlCD6fJH+YuMTMSf9RJaqQSIq0pKhyfHPHWnTSwLqudkzmG</span></span>
<span class="line"><span style="color:#032F62;">tfKsupw9rpPkF25b9UOHL3h0KPdXaQgj866Dzc483JPcquRlJsrEOhfpY1vCt6Wq</span></span>
<span class="line"><span style="color:#032F62;">0//vM79JBFBVoJ31mwIDAQAB</span></span>
<span class="line"><span style="color:#032F62;">-----END PUBLIC KEY-----</span></span>
<span class="line"><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">exp = </span><span style="color:#005CC5;">168</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># token 有效期(小时)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">oidc</span><span style="color:#24292E;">] </span><span style="color:#6A737D;"># oidc协议登录，授权后转为gophercron自身的登录模式，所以当前版本oidc退出登录不会影响gophercron</span></span>
<span class="line"><span style="color:#24292E;">client_id = </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">client_secret = </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">endpoint = </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">redirect_url = </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">scopes = [</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">user_name_key = </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 可以在 claims 中拿到用户昵称的 key</span></span></code></pre></div><h4 id="多数据中心部署" tabindex="-1">多数据中心部署 <a class="header-anchor" href="#多数据中心部署" aria-label="Permalink to &quot;多数据中心部署&quot;">​</a></h4><p>gophercron 作为高可用的定时任务管理系统，提供跨网络环境的部署姿势，支持多<code>数据中心</code>部署容灾</p><p>gophercron 内置 region 概念，同名 region 即被视为同一<code>数据中心</code>，在<code>中心服务</code>配置中，开启 <code>deploy.proxy_host</code> 与 <code>micro.region_proxy</code> 两项配置即可实现<code>跨数据中心部署</code></p><ul><li><p>deploy.proxy_host<br> 该配置项表示当前<code>中心服务</code>的 proxy 服务监听的地址(端口)信息，每个数据中心的中心服务需要单独配置 proxy 域名解析到 proxy 服务地址上，并将 proxy 域名信息配置在其他<code>中心服务</code>的 <code>micro.region_proxy</code> 配置下</p></li><li><p>micro.region_proxy<br> 该配置表示<code>中心服务</code>跨数据中心的部署信息，key value 的形式配置每个<code>数据中心</code>(region)对应的 proxy 服务的地址</p></li></ul><p>实现设计见 <a href="/guide/micro.html#region">Region</a></p><h3 id="启动命令" tabindex="-1">启动命令 <a class="header-anchor" href="#启动命令" aria-label="Permalink to &quot;启动命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gophercron</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{your</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">path}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gophercron</span><span style="color:#24292E;"> </span><span style="color:#032F62;">service</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{your</span><span style="color:#24292E;"> </span><span style="color:#032F62;">service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">path}</span></span></code></pre></div><p>管理员初始账号密码为 admin 123456</p><p>部署后可通过 <code>{endpoint}/admin</code> 访问图形界面，前后端分离的部署方式请参考 <a href="/guide/frontend.html">可视化界面</a></p><h2 id="边缘-agent" tabindex="-1">边缘 agent <a class="header-anchor" href="#边缘-agent" aria-label="Permalink to &quot;边缘 agent&quot;">​</a></h2><h3 id="配置文件-1" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件-1" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">address = </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 人工配置agent注册地址，否则自动获取网卡地址</span></span>
<span class="line"><span style="color:#E1E4E8;">log_level = </span><span style="color:#9ECBFF;">&quot;debug&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 日志级别 debug info error</span></span>
<span class="line"><span style="color:#E1E4E8;">log_path = </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 日志数据路径</span></span>
<span class="line"><span style="color:#E1E4E8;">shell = </span><span style="color:#9ECBFF;">&quot;/bin/bash&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 执行命令行的工具，根据自身机器情况而定</span></span>
<span class="line"><span style="color:#E1E4E8;">report_addr = </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 告警信息推送地址，业务可以实现对应接口，实现自定义告警通知</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">timeout = </span><span style="color:#79B8FF;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">micro</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">region = </span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 网络维度，确保当前有同region的中心服务存在</span></span>
<span class="line"><span style="color:#E1E4E8;">org_id = </span><span style="color:#9ECBFF;">&quot;gophercron&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 需要与中心服务相同，用于服务发现</span></span>
<span class="line"><span style="color:#E1E4E8;">weight = </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 该 agent 在中心调度任务时的权重，预定义好的定时任务目前不受该权重影响</span></span>
<span class="line"><span style="color:#E1E4E8;">endpoint = </span><span style="color:#9ECBFF;">&quot;localhost:6306&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 中心服务的地址，域名也请带上端口号(HA等则仅需带上80 / 443端口号)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#6A737D;"># public_key 需要与中心服务的private_key相匹配，中心请求时会带上由private_key签发的jwt，边缘agent需要能够使用该public_key完成解密</span></span>
<span class="line"><span style="color:#E1E4E8;">public_key = </span><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">-----BEGIN PUBLIC KEY-----</span></span>
<span class="line"><span style="color:#9ECBFF;">MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM82u8+ChkRwdpNxbzJypio0xb</span></span>
<span class="line"><span style="color:#9ECBFF;">+jdwWLd5DRcKL0cU8FlCD6fJH+YuMTMSf9RJaqQSIq0pKhyfHPHWnTSwLqudkzmG</span></span>
<span class="line"><span style="color:#9ECBFF;">tfKsupw9rpPkF25b9UOHL3h0KPdXaQgj866Dzc483JPcquRlJsrEOhfpY1vCt6Wq</span></span>
<span class="line"><span style="color:#9ECBFF;">0//vM79JBFBVoJ31mwIDAQAB</span></span>
<span class="line"><span style="color:#9ECBFF;">-----END PUBLIC KEY-----</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[[</span><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">projects</span><span style="color:#E1E4E8;">]]</span></span>
<span class="line"><span style="color:#E1E4E8;">pid = </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># project id</span></span>
<span class="line"><span style="color:#E1E4E8;">token = </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 先启动中心服务，创建项目，通过项目管理获取项目token，配置在此，agent在启动时会使用该token与中心服务进行鉴权</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">address = </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 人工配置agent注册地址，否则自动获取网卡地址</span></span>
<span class="line"><span style="color:#24292E;">log_level = </span><span style="color:#032F62;">&quot;debug&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 日志级别 debug info error</span></span>
<span class="line"><span style="color:#24292E;">log_path = </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 日志数据路径</span></span>
<span class="line"><span style="color:#24292E;">shell = </span><span style="color:#032F62;">&quot;/bin/bash&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 执行命令行的工具，根据自身机器情况而定</span></span>
<span class="line"><span style="color:#24292E;">report_addr = </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 告警信息推送地址，业务可以实现对应接口，实现自定义告警通知</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">timeout = </span><span style="color:#005CC5;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">micro</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">region = </span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 网络维度，确保当前有同region的中心服务存在</span></span>
<span class="line"><span style="color:#24292E;">org_id = </span><span style="color:#032F62;">&quot;gophercron&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 需要与中心服务相同，用于服务发现</span></span>
<span class="line"><span style="color:#24292E;">weight = </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 该 agent 在中心调度任务时的权重，预定义好的定时任务目前不受该权重影响</span></span>
<span class="line"><span style="color:#24292E;">endpoint = </span><span style="color:#032F62;">&quot;localhost:6306&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 中心服务的地址，域名也请带上端口号(HA等则仅需带上80 / 443端口号)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;"># public_key 需要与中心服务的private_key相匹配，中心请求时会带上由private_key签发的jwt，边缘agent需要能够使用该public_key完成解密</span></span>
<span class="line"><span style="color:#24292E;">public_key = </span><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#032F62;">-----BEGIN PUBLIC KEY-----</span></span>
<span class="line"><span style="color:#032F62;">MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM82u8+ChkRwdpNxbzJypio0xb</span></span>
<span class="line"><span style="color:#032F62;">+jdwWLd5DRcKL0cU8FlCD6fJH+YuMTMSf9RJaqQSIq0pKhyfHPHWnTSwLqudkzmG</span></span>
<span class="line"><span style="color:#032F62;">tfKsupw9rpPkF25b9UOHL3h0KPdXaQgj866Dzc483JPcquRlJsrEOhfpY1vCt6Wq</span></span>
<span class="line"><span style="color:#032F62;">0//vM79JBFBVoJ31mwIDAQAB</span></span>
<span class="line"><span style="color:#032F62;">-----END PUBLIC KEY-----</span></span>
<span class="line"><span style="color:#032F62;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[[</span><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">projects</span><span style="color:#24292E;">]]</span></span>
<span class="line"><span style="color:#24292E;">pid = </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># project id</span></span>
<span class="line"><span style="color:#24292E;">token = </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 先启动中心服务，创建项目，通过项目管理获取项目token，配置在此，agent在启动时会使用该token与中心服务进行鉴权</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如何获取项目 pid 与 token 见 <a href="/guide/frontend.html#项目管理">项目管理</a></p></div><h3 id="启动命令-1" tabindex="-1">启动命令 <a class="header-anchor" href="#启动命令-1" aria-label="Permalink to &quot;启动命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">gophercron</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{your</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">path}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">gophercron</span><span style="color:#24292E;"> </span><span style="color:#032F62;">client</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{your</span><span style="color:#24292E;"> </span><span style="color:#032F62;">client</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">path}</span></span></code></pre></div><p>启动后通过服务日志观察服务是否注册成功，若成功，则可以在可视化界面中看到对应在线节点</p><p><img src="`+l+'" alt="在线节点示例"></p>',21),c=[e];function t(r,y,E,i,F,u){return n(),a("div",null,c)}const h=s(o,[["render",t]]);export{q as __pageData,h as default};
