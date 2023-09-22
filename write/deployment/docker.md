# Docker 镜像部署

## 镜像地址

`holdnowby/gophercron:${version}`

## 部署

### 中心服务

```shell
IMAGE="holdnowby/gophercron"
VERSION=$1

docker run -it \
--name gophercron-center \
--rm \
-d \
# 挂载配置文件到容器目录 /gophercron/etc/{config-name}.toml
-v /data/gophercron/etc/service-config-default.toml:/gophercron/etc/service-config.toml \
${IMAGE}:${VERSION} ./gophercron service -c ./etc/service-config.toml
```

### Agent

```shell
IMAGE="holdnowby/gophercron"
VERSION=$1

docker run -it \
--name gophercron-agent \
--rm \
-d \
# 挂载配置文件到容器目录 /gophercron/etc/{config-name}.toml
-v /data/gophercron/etc/client-config-default.toml:/gophercron/etc/client-config.toml \
${IMAGE}:${VERSION} ./gophercron client -c ./etc/client-config.toml
```
