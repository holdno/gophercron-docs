# WebHook

![webhook管理入口](/webhook管理入口.jpg)

![webhook管理入口](/webhook管理界面.jpg)

## 钩子类型 (type:task-result)

| 钩子类型         | 类型值       | 解释                                       |
| ---------------- | ------------ | ------------------------------------------ |
| 任务执行结束钩子 | task-result  | 任务执行完成后调用，无论成功或失败都会调用 |
| 任务执行失败钩子 | task-failure | 任务执行失败后调用                         |

### 请求方式

POST

### Header

| 字段          | 类型   | 注释                      |
| ------------- | ------ | ------------------------- |
| Authorization | string | 项目 token(project token) |

### 请求体

请求使用 [cloudevents](https://github.com/cloudevents/sdk-go) 进行封装

```go
event := cloudevents.NewEvent()
event.SetID(utils.GetStrID()) // 随机id
event.SetSubject({webhook-type}) // webhook钩子类型
event.SetData(cloudevents.ApplicationJSON, body)
event.SetSource(fmt.Sprintf("gophercron-center-%s", {中心服务所在ip})) // gopehrcron-center-{中心服务所在ip}
event.SetType(eventType) // succeeded / failure
event.SetTime(time.Unix(res.EndTime, 0))
```

cloudevents 中 data 见下表

| 字段       | 类型   | 注释                       |
| ---------- | ------ | -------------------------- |
| task_id    | string | 任务 id                    |
| project_id | int64  | 项目 id                    |
| command    | string | 任务命令                   |
| start_time | int64  | 任务开始时间 unix 时间戳   |
| end_time   | int64  | 任务结束时间 unix 时间戳   |
| result     | string | 任务 stdout                |
| error      | string | 失败信息(空则表示成功)     |
| client_ip  | string | 边缘 agent ip              |
| tmp_id     | string | 任务执行 id                |
| operator   | string | 操作人，系统自动调用时为空 |
