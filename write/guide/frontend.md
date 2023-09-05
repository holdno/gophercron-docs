# 可视化界面

## 默认

默认情况下，gophercron 项目目录中的 dist 文件已经包含了最新的前端界面，直接通过服务端地址/admin 即可访问

## 定制

官方配套的前端项目地址为 [gopherCronFE](https://github.com/holdno/gopherCronFe)，可自行 clone 项目，在根目录创建.env.production 配置文件

配置中心服务的 API 地址 `VITE_API_V1_BASE_URL` 与即时通知服务的 websocket 地址 `VITE_API_V1_WS_URL`

```shell
VITE_API_V1_BASE_URL=http://localhost:6306/api/v1
VITE_API_V1_WS_URL=ws://localhost:6306/api/v1/ws
```

执行 `/scripts/build.sh` 完成前端项目的构建，并自行完成部署，即可实现前后端分离的部署方案

::: warning

即时通知服务主要实现用户在界面中操作任务执行时，能够第一时间感知到任务完成的状态(基于 websocket 实现状态更新，而没有使用前端轮询的方式实现任务状态变更)  
未配置 `VITE_API_V1_WS_URL` 时，不影响整个定时任务系统的正常运转，仅影响用户在界面操作执行任务时，任务状态的变更可能需要通过刷新浏览器，或来回切换项目实现，低频的界面使用场景完全可以不实现即时通讯服务。

同时作者提供即时通讯服务的 SaaS 服务接入

:::

## 功能

### 项目管理

项目管理员及系统超级管理员(admin)有用项目管理权限，通过项目名称后 ··· 选项进入管理菜单，在此可以查看项目 token 以及对项目成员的管理

![项目管理入口](/项目管理入口.png)
