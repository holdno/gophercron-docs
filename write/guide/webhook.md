# WebHook

## 任务执行结束钩子

任务执行结束后调用

### 请求方式

POST

### Header

| 字段          | 类型   | 注释       |
| ------------- | ------ | ---------- |
| Authorization | string | 项目 token |

### 请求体

| 字段       | 类型   | 注释                     |
| ---------- | ------ | ------------------------ |
| task_id    | string | 任务 id                  |
| project_id | int64  | 项目 id                  |
| command    | string | 任务命令                 |
| start_time | int64  | 任务开始时间 unix 时间戳 |
| end_time   | int64  | 任务结束时间 unix 时间戳 |
| result     | string | 任务 stdout              |
| error      | string | 失败信息(空则表示成功)   |
| client_ip  | string | 边缘 agent ip            |
