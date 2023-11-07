# 源码部署

## 构建

(目前时间有限，还没实现每次更新自动 build 出各架构下的二进制...，用户可以自行克隆仓库进行构建)

### amd64

可以从镜像中 copy 出二进制文件实现部署

```shell
#!/bin/sh
NAME="gophercron_cp_binary"
VERSION=$1
IMAGE="holdnowby/gophercron"

docker pull ${IMAGE}:${VERSION}

docker run --name ${NAME} -itd --rm ${IMAGE}:${VERSION} /bin/sh

docker cp ${NAME}:/gophercron/gophercron ./gophercron

docker kill ${NAME}
```

## 部署

### 中心服务

```shell
./gophercron service -c {your service config}
```

### Agent

```shell
./gophercron client -c {your client config}
```

### systemd

```shell
echo "[Unit]
Description=GopherCron
After=network.target

[Service]
Type=simple
WorkingDirectory=/usr/local/bin
ExecStart=/usr/bin/sh -c '/usr/local/bin/gophercron {client / service} -c /usr/local/etc/gophercron/{your config name}.toml'
Restart=always" > /etc/systemd/system/gophercron.service
```

```shell
systemctl enable gophercron.service
```

```shell
systemctl start gophercron.service
```
