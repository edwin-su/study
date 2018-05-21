# 删除非空目录
> rm -rf 目录名

<br>

# 临时设置环境变量 
export PATH=$PATH:/Node/node-v4.4.7-linux-x64/lib/node_modules/pm2/bin

<br>

# 查看端口占用
> lsof -i:9999
> netstat -tunlp|grep 9999
查看端口号为9999的占用情况

<br>

# 杀死进程
> kill -s 9 2418
杀死进程id为2418的进程

<br>

# 查看文件最后15行
> tail -n 15 文件名

<br>

# 查看文件内容less,cat,more
1. cat命令功能用于显示整个文件的内容单独使用没有翻页功能因此经常和more命令搭配使用，cat命令还有就是将数个文件合并成一个文件的功能。
2. more命令功能：让画面在显示满一页时暂停，此时可按空格健继续显示下一个画面，或按Q键停止显示。
3. less命令功能：less命令的用法与more命令类似，也可以用来浏览超过一页的文件。所不同的是less命令除了可以按空格键向下显示文件外，还可以利用上下键来卷动文件。当要结束浏览时，只要在less命令的提示符“：”下按Q键即可

<br>

# 安装nodejs
1. 解压nodejs
2. 配置全局用的NODE_HOME，修改profile文件
	> vi /etc/profile
3. 设置nodejs环境变量，在最后
	>
		#set for nodejs
		export NODE_HOME=/usr/local/nodejs
		export PATH=$NODE_HOME/bin:$PATH
4. :wq保存并退出，编译/etc/profile 使配置生效
	> source /etc/profile
5. 验证是否安装配置成功
	> node -v

<br>

# 安装配置mongodb
1. 解压mongodb
2. 配置全局用的MONGO_HOME，修改profile文件
	> vi /etc/profile
3. 设置mongo环境变量，在最后
	>
		#set for nodejs
		export MONGO_HOME=/usr/local/mongodb
		export PATH=$MONGO_HOME/bin:$PATH
4. :wq保存并退出，编译/etc/profile 使配置生效
	> source /etc/profile
5. 使用mongo命令重启服务 报错…,说是需要安装openssl-1.1.0e.tar.gz该软件

### 参考:
* http://www.osyunwei.com/archives/7629.html
* https://blog.csdn.net/wwww_com/article/details/68484613

<br>

# 安装openssl


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

<br>

# ssh或putty远程访问配置方法
1. 需要关闭防火墙\
在YAST（在图形界面下，依次选择Computer→Control Center→YaST→Firewall）里可以关闭，也可以使用下面命令行的方式，但出于安全的考虑，在实际使用是还是要根据实际情况打开防火墙，应该配置防火墙允许正确的，合法的通讯通过。
选为：
	* Disable Firewall  Automatic Starting
	* Stop Firewall Now
2. 选择"Allowed Services"，在"Service to Allow"中选择"Secure Shell Server"（在Suse11中是"Secure Shell Server"，在Suse10中是“SSH”）, 然后"Add"，然后next，finish。

<br>

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





























