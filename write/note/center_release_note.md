# Center Release Note

## v2.4.8

2025-03-13

- 中心增加“Task Docter”,自动检查因 Agent 状态异常导致的任务状态持续性异常的问题，会自动尝试恢复任务状态，使下次任务可以顺利执行。
- 中心兜底任务状态，当出现边缘节点与中心任务调度状态不一致时，通过告警提醒相关同学关注节点状态。
- 优化边缘节点服务注册失败重试逻辑

## v2.4.7

2024-08-08

- 该版本中心会在 agent 上报任务开始执行时预先创建对应任务的日志信息，包括该任务的计划调度时间
- 中心在任务设置运行状态时会匹配同 task 下是否已经存在相同计划时间的调度日志，对边缘异常调度进行兜底

## v2.4.6

2024-04-23

- 增加动态变更权重的功能，权重范围 0-100
  若服务器重启导致边缘 agent 重启，重启后 agent 将会继续使用配置文件中配置的权重，而非中心变更后的权重值。
  - 边缘 agent 更新了基于权重的调度策略，当 agent 权重设置为 0 时会停止调度
- 临时任务增加指定 host 调度功能
- 前端增加任务(含临时任务)复制功能，极大提高任务创建效率

## v2.4.4

2023-10-07

- 调整 agent 注册数监控代码的位置
- 优化 agent 日志输出与采集代码

## v2.4.3

2023-09-17

- 修复创建 webhook 的 store 实现问题，没有指定表名
- 调整 webhook 接口相关请求参数，types -> type

#### 升级 SQL

```sql
ALTER TABLE `gc_webhook` DROP COLUMN `secret`;
```

## v2.4.2

2023-09-15

新增组织概念，组织仅作为项目的"文件夹"，更好的将项目进行归类  
用户无需特殊的邀请动作加入组织，直接赋予用户某个项目的权限时自动获取该组织的普通权限

#### 涉及改动

##### 新增数据表：

- 增加组织表 org
- 增加组织用户关联表 org_relevance

##### 接口变动

- 登录
  - /api/v1/user/login 接口响应数据增加用户拥有权限的组织列表 orgs
- 日志
  - /api/v1/log/recent 接口增加请求参数 oid，表示对应组织信息
  - /api/v1/log/errors 接口增加请求参数 oid，表示对应组织信息
- 项目
  - /api/v1/project/create 接口增加请求参数 oid，表示对应组织信息
    - 验证用户是否属于对应组织
  - /api/v1/project/add_user 项目增加用户接口，若用户之前未加入某组织，但现在加入了某组织的某个项目，则自动加入组织
  - /api/v1/project/list 获取项目列表现在是获取某个组织下的项目列表
- Workflow
  - /api/v1/workflow/create 创建接口增加组织 id
  - /api/v1/workflow/list 获取 workflow 列表现在是获取某个组织下的 workflow 列表
- 新增接口
  - /api/v1/org/create 创建组织接口
  - /api/v1/org/edit 编辑组织信息接口
  - /api/v1/org/delete 删除组织接口
  - /api/v1/org/list 获取用户组织列表接口

##### Sql

```sql
# project表增加oid字段
ALTER TABLE `gc_project` ADD COLUMN `oid` varchar(32) NOT NULL COMMENT '关联组织id';

# 刷新旧项目所属组织为baseorg，即通用组织
update gc_project set oid = 'baseorg' where oid = '';

# 用户项目关联关系表中增加role字段
ALTER TABLE `gc_project_relevance` ADD COLUMN `role` varchar(32) NOT NULL DEFAULT '' COMMENT '用户基于项目的角色';

# 刷新旧项目成员project role
update gc_project_relevance set role = 'manager' where role = '';

# workflow表增加oid字段
ALTER TABLE `gc_workflow` ADD COLUMN `oid` varchar(32) NOT NULL DEFAULT '' COMMENT '关联组织id';

# 刷新旧workflow所属组织为baseorg
update gc_workflow set oid = 'baseorg' where oid = '';

# 新增org组织信息表
CREATE TABLE `gc_org` (
	`id` varchar(32) NOT NULL COMMENT '组织id',
	`title` varchar(32) NOT NULL COMMENT '组织名称',
	`create_time` bigint (20) NOT NULL COMMENT '创建时间',
	PRIMARY KEY (`id`)) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# 新增org_relevance用户组织关系表
CREATE TABLE `gc_org_relevance` (
	`id` bigint (20) NOT NULL AUTO_INCREMENT,
	`uid` bigint (20) NOT NULL COMMENT '关联用户id',
	`oid` varchar(32) NOT NULL COMMENT '关联组织id',
	`role` varchar(32) NOT NULL DEFAULT 'user' COMMENT '项目角色',
	`create_time` bigint (20) NOT NULL COMMENT '创建时间',
	PRIMARY KEY (`id`),
	KEY `uid` (`uid`),
	KEY `oid` (`oid`)) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# 将原用户加入某个组织
INSERT INTO `gc_org_relevance` (`uid`,`oid`,`role`,`create_time`) SELECT `id`, '{组织id}', 'user', UNIX_TIMESTAMP(NOW()) FROM gc_user;
```

## v2.3.0-alpha.1

支持直接通过边缘与中心建立的 stream 调用任务，既内网 agent 也可以实现由人工在中心进行调度执行。
