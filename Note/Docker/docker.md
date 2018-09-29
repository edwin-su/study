

# Docker 组件(c/s)
* Docker Client : Docker的客户端
* Docker Server : Docker daemon的主要组成部分，接收用户通过Docker Client发送的请求，并按照相应的路由规则实现路由分发。
* Docker镜像 : Docker镜像运行之后变成容器 (docker run)
* Docker Registry : Registry是Docker镜像的中央存储仓库(push/pull)


# Dockerfile:
* FROM : 设置基础（父）镜像的路径(docker hub上pull下来或者是由自己制作)
* MAINTAINER : 维护者（该dockerfile由谁来维护）
* ENV : 设置环境变量，可以设置多个环境变量
* COPY : 复制文件到container里面，将本地文件复制到container里面
* ADD : 复制文件到container里面，比copy指令多两个功能
    * 1.文件是一个web server上的，则可以直接写web url
    * 2.拷贝压缩文件时，顺便直接解压
* RUN : 执行指令串
* EXPOSE : 暴露某个端口使宿主机去映射
* ENTRYPOINT : 每次conatiner启动的时候都会执行的命令，只有最后一条生效

# Docker常用命令：
> docker build -t registry_url/namespace/csphere/centos:7.1 .
* docker build
    * 使一个dockerfile生成一个docker镜像
* -t
    * 给镜像起个名字
    
    * 命名规则    registry_url/namespace/name:version_number(如果没有写verison_number，则默认为lastest)
        * 例:
            registry_url/namespace/csphere/centos:7.1
     .
    * 如果dockerfile在当前目录下，则用.代替，如果不在，则注明其相对路径

## 2. 查看镜像 docker images
查看当前docker中的镜像
> docker images

## 3. 删除容器 docker rm
删除一个或多少容器
> docker rm [OPTIONS] CONTAINER [CONTAINER...]
##### OPTIONS说明：
* -f :通过SIGKILL信号强制删除一个运行中的容器
* -l :移除容器间的网络连接，而非容器本身
* -v :-v 删除与容器关联的卷

## 4. 删除镜像 docker rmi
删除一个或多个镜像

## 5. 给镜像打标签 docker tag
给image加repository和tag
> docker tag 973ed9042bef repositoryname:tagname

## 6. 查看容器ip地址 docker inspect -f '{{.NetworkSettings.IPAddress}}' [container name]
查看某个container的 内部ip
> docker inspect -f '{{.NetworkSettings.IPAddress}}' nginx

## 7. 启动容器 docker run -p 宿主端口:docker端口 -t [repository]:[tag]
将docker的某个端口映射到宿主机的某个端口
> docker run -p 7799:11600 -t edwin:edwin

## 8. 映射主机和容器的文件路径 docker run -v 宿主机目录:docker目录
将宿主机的某个文件夹映射到docker container中的某个目录
> docker run -v E:/prod/:/opt/sc-cm/webapps/certs/

## 9. 导出镜像 docker save -o 宿主机路径 repositoryname:tagname
将某个镜像导出
> docker save -o /home/user/images/ubuntu_14.04.tar ubuntu:14.04

## 10. 载入镜像 docker load --input 宿主机镜像绝对路径
导入某个镜像
> docker load --input ubuntu_14.04.tar