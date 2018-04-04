# tar -xf all.tar
这条命令是解出all.tar包中所有文件，-t是解开的意思

# tar zxvf  aa.gz
分别是四个参数
x : 从 tar 包中把文件提取出来
z : 表示 tar 包是被 gzip 压缩过的，所以解压时需要用 gunzip 解压
v : 显示详细信息
f xxx.tar.gz :  指定被处理的文件是 xxx.tar.gz

# 删除非空目录rm -rf 目录名

# Linux系统下升级Python版本步骤（suse系统）
1. 切换到下载文件的目录中（此目录可以自定义）
    > cd /usr/local/src/
2. 下载Python
    > wget https://www.python.org/ftp/python/3.5.1/Python-3.5.1.tgz
3. 解压下载的文件
    > tar -zxvf Python-3.5.1.tgz
4. 切换到源码包
    > cd Python-3.5.1
5. 配置指定python的安装目录
    > ./configure --prefix=/usr/local/python3
6. 编译和安装python
    > make && make install
7. 备份原有的老版本python
    > mv /usr/bin/python /usr/bin/python2.7.8    
8. 创建软链接指向
    > ln -s /usr/local/python3/bin/python3  /usr/bin/python

# node 
分别指定node和npm路径

# mongodb


# vim编辑器
* :wq
保存文件，退出vi编辑器

* :w
保存文件，但不退出vi编辑器

* :q
退出vi编辑器

* :q!
不保存文件，退出vi编辑器               

* ZZ
保存文件，退出vi编辑器

在 vi 的命令模式下，可以使用复杂的命令。在编辑模式下键入“:”，光标就跳到屏幕最后一行，并在那里显示冒号，此时已进入命令模式。命令模式又称“末行模式”，用户输入的内容均显示在屏幕的最后一行，按回车键，vi 执行命令。


# 在suse下rpm包的安装
1. zypper in   ***.rpm\
可以使用上面的命令进行安装

2. rpm -ivh ***.rpm\
查看这个rpm的依赖关系。



# 安装openssl
https://blog.csdn.net/hanzheng260561728/article/details/53811270

# 安装配置mongodb
http://www.osyunwei.com/archives/7629.html

# 临时设置环境变量 
export PATH=$PATH:/Node/node-v4.4.7-linux-x64/lib/node_modules/pm2/bin

# 查看端口占用
> lsof -i:9999
查看端口号为9999的占用情况

# 杀死进程
> kill -s 9 2418
杀死进程id为2418的进程
