# Release Note

## v2.4.3

2023-09-17

### 中心服务

- 修复创建 webhook 的 store 实现问题，没有指定表名
- 调整 webhook 接口相关请求参数，types -> type

#### 升级 SQL

```sql
ALTER TABLE `gc_webhook` DROP COLUMN `secret`;
```

## v2.4.2

2023-09-15

### 中心服务

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
