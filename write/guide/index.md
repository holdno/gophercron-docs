<p align="center"><img width="200" src="http://img.holdno.com/github/holdno/gopher_cron/gopherCronLogo.png" alt="firetower logo"></p>

<h1 align="center">GopherCron</h1>

Golang 开箱即用的分布式 crontab system  
提供响应式 web 管理界面

### 预览

<div style="width:100%; display: flex; margin-bottom: 20px">
    <image src="/dashboard.jpeg"/>
</div>

<div style="width:100%; display: flex">
    <image src="/mobile1.png" style="width: 30%; height: 55%; margin-right: 3%"/>
    <image src="/mobile2.png" style="width: 30%; height: 55%; margin-right: 3%"/>
    <image src="/mobile3.png" style="width: 30%; height: 55%;"/>
</div>

### 监控面板

[Grafana Dashboard 19874](https://grafana.com/grafana/dashboards/19874-gophercron-dashboard/)

<div style="width:100%; display: flex; margin-bottom: 20px">
    <image src="/grafana_dashboard.jpeg"/>
</div>

### 在线交流

[Discord - gophercron](https://discord.gg/HCz6nuS6PD)

### Discussions Now

[关于“为系统增加内置环境变量”的讨论](https://github.com/holdno/gopherCron/discussions/21)

### 依赖

- Etcd # 服务注册与发现
- Mysql # 任务日志存储

### 引用

- [Gin](https://github.com/gin-gonic/gin) 提供 webapi
- [gopherCronFe](https://github.com/holdno/gopherCronFe) 提供可视化管理界面(已将构建后的文件内置于 dist/view 目录下)
- [cronexpr](https://github.com/gorhill/cronexpr) 提供 cron 表达式解析器
- 🍉[水瓜](https://github.com/spacegrower/watermelon) 提供服务注册发现能力

### 项目优势

- 分布式定时任务管理
- 任务流编排
- 响应式前端，移动端也可以轻松管理任务

### 实现功能

- 秒级定时任务
- 任务日志查看
- 随时结束任务进程
- 分布式扩展
- 健康节点检测 (分项目显示对应的健康节点 IP 及节点数)
- workflow 任务编排

### 项目构成

#### 中心服务

- 提供定时任务 api 能力
- 提供任务管理服务端接口
- 提供 workflow 任务流编排能力
- 提供边缘任务状态与结果上报服务（日志默认存储 7 天）
- 提供服务注册与发现能力
- 为边缘节点提供分布式锁服务
- 集成即时通讯能力，任务状态变更感知更及时

#### 边缘 agent

- 接收中心命令执行临时任务
- 实际执行定时任务的服务
  - 自旋实现任务的定时执行，多副本任务通过分布式锁解决执行冲突问题
