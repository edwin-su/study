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
## 1. docker build -t registry_url/namespace/csphere/centos:7.1 .
* docker build
    * 使一个dockerfile生成一个docker镜像
* -t
    * 给镜像起个名字
    * 命名规则    registry_url/namespace/name:version_number(如果没有写verison_number，则默认为lastest)
        * 例:
            registry_url/namespace/csphere/centos:7.1
     .
    * 如果dockerfile在当前目录下，则用.代替，如果不在，则注明其相对路径