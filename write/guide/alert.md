# 自定义告警/通知

gophercron `中心服务`与`边缘agent` 的配置文件均提供了 `report_addr` 配置项，该配置项允许用户提供一个自定义的 api 来接收 gophercron 的一些事件，其中包括的任务执行过程中的`warning` 与 `error`

POST 方式，发送请求

## 鉴权

中心与边缘在请求时会在 header 中的 Authorization 字段携带上`中心服务`/`边缘agent`的`jwt`实现鉴权，api 实现方可以通过 public_key 进行解密鉴权

## 数据结构

请求的通用数据结构(Body)为

```json
{
    "type": "{warning type}",
    "data": json-data
}
```

### json-data

#### 系统层面告警

```json
{
  "type": "system",
  "data": {
    "endpoint": "告警服务的ip",
    "type": "center-service / agent", // 告警服务类型
    "message": "告警内容"
  }
}
```

#### 任务层面告警

```json
{
  "type": "task",
  "data": {
    "agent_ip": "告警来源ip",
    "task_name": "任务名称",
    "task_id": "任务id",
    "project_title": "项目标题",
    "project_id": "项目id",
    "message": "告警内容"
  }
}
```

#### Workflow 层面告警

```json
{
  "type": "workflow",
  "data": {
    "service_ip": "告警来源ip",
    "workflow_id": "workflow任务id",
    "workflow_title": "workflow任务标题",
    "message": "告警内容"
  }
}
```
