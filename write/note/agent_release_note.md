# Agent Release Note

## v2.4.4

2023-10-07

- 修复 agent 注册连接断开后，重试时没有刷新 token 的问题，在 token 过期后会出现永远无法注册成功的情况

## v2.4.3

2023-09-17

agent 不再需要公网环境，通过启动时服务注册建立的 gRPC Stream 双向流实现与中心服务的通信  
支持 windows 环境，构建需增加 -tags=windows
