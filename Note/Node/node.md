# 查看版本
> $npm -v

<br>

#升级版本
1. 官方安装
    > npm install npm -g

2. 使用淘宝镜像安装
    > cnpm install npm -g 

<br>

# 使用 npm 命令安装模块
> $ npm install &lt;Module Name>

以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:
> $ npm install express

安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
>var express = require('express');

<br>

# 全局安装
> npm install express -g   # 全局安装

1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
2. 可以直接在命令行里使用。

<br>

# 本地安装
> npm install express

1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
2. 可以通过 require() 来引入本地安装的包。

<br>

# 查看所有全局安装的模块
> npm list -g

<br>

# Package.json 属性说明
* name - 包名。

* version - 包的版本号。

* description - 包的描述。

* homepage - 包的官网 url 。

* author - 包的作者姓名。

* contributors - 包的其他贡献者姓名。

* dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

* repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。

* main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

* keywords - 关键字

<br>

# 卸载模块
> npm uninstall express

<br>

# 更新模块
> npm update express

<br>

# 搜索模块
> npm search express

<br>

# 创建模块
创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
> npm init

使用默认值创建
> npm init -y

在 Node.js 中，创建一个模块非常简单，如下我们创建一个 main.js 文件，代码如下:
>var hello = require('./hello');\
hello.world();

以上实例中，代码 require('./hello') 引入了当前目录下的 hello.js 文件（./ 为当前目录，node.js 默认后缀为 js）。

Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

接下来我们就来创建 hello.js 文件，代码如下：
>exports.world = function() {\
  console.log('Hello World');\
}

在以上示例中，hello.js 通过 exports 对象把 world 作为模块的访问接口，在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。

有时候我们只是想把一个对象封装到模块中，格式如下：
>module.exports = function() {\
  // ...\
}

例如:
>//hello.js \
function Hello() { \
    var name; \
    this.setName = function(thyName) { \
        name = thyName; \
    }; \
    this.sayHello = function() { \
        console.log('Hello ' + name); \
    }; \
}; \
module.exports = Hello;

这样就可以直接获得这个对象了：
> //main.js \
var Hello = require('./hello'); \
hello = new Hello(); \
hello.setName('BYVoid'); \
hello.sayHello(); 

模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

<br>

# util.inherits 对象的原型继承
> util.inherits(constructor, superConstructor);

constructor将继承superConstructor的原型

<br>

# util.inspect 将任意对象转换 为字符串
> util.inspect(object,[showHidden],[depth],[colors])

<br>

# util.isArray(object) 判断是否为数组
> util.isArray(new Array);  //true \
util.isArray({});  //false

<br>

# util.isRegExp(object) 判断是否为正则表达式
> util.isRegExp(new RegExp('another regexp'));  //true  \
util.isRegExp({}); //false

<br>

# util.isDate(object) 是否为日期
> util.isDate(new Date());  // true

<br>

# util.isError(object) 是否是一个错误对象
> util.isError(new Error()); // true

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

# 安装 Express
> npm install express --save

<br>

# Request 对象
1. req.app：当callback为外部文件时，用req.app访问express的实例
1. req.baseUrl：获取路由当前安装的URL路径
1. req.body / req.cookies：获得「请求主体」/ Cookies
1. req.fresh / req.stale：判断请求是否还「新鲜」
1. req.hostname / req.ip：获取主机名和IP地址
1. req.originalUrl：获取原始请求URL
1. req.params：获取路由的parameters
1. req.path：获取请求路径
1. req.protocol：获取协议类型
1. req.query：获取URL的查询参数串
1. req.route：获取当前匹配的路由
1. req.subdomains：获取子域名
1. req.accepts()：检查可接受的请求的文档类型
1. req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
1. req.get()：获取指定的HTTP请求头
1. req.is()：判断请求头Content-Type的MIME类型

<br>

# Response 对象
1. res.app：同req.app一样
1. res.append()：追加指定HTTP头
1. res.set()在res.append()后将重置之前设置的头
1. res.cookie(name，value [，option])：设置Cookie
1. opition: domain / expires / httpOnly / maxAge / path / secure / signed
1. res.clearCookie()：清除Cookie
1. res.download()：传送指定路径的文件
1. res.get()：返回指定的HTTP头
1. res.json()：传送JSON响应
1. res.jsonp()：传送JSONP响应
1. res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
1. res.redirect()：设置响应的Location HTTP头，并且设置状态码302
1. res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生1. next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
1. res.send()：传送HTTP响应
1. res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
1. res.set()：设置HTTP头，传入object可以一次设置多个头
1. res.status()：设置HTTP状态码
1. res.type()：设置Content-Type的MIME类型