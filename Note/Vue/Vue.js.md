# 目录结构
* build 项目构建(webpack)相关代码
* config 配置目录，包括端口号等。
* node_modules npm项目加载的依赖块
* src 开发目录
    * assets: 图片
    * components: 目录里面放了一个组件文件
    * APP.vue: 项目入口文件,我们也可以直接将组件写这里

# 在浏览器console中直接输入 Vue对象.属性名 可以查看属性值

<br>

# v-bind:title 鼠标悬停的提示信息tooltip
>
    <div v-bind:title='test'>

<br>

# v-if 判断语句 v-else
>
    <div v-if="type === 'A'">
        A
    </div>
	<div v-else-if="type === 'B'">
        B
	</div>
	<div v-else-if="type === 'C'">
        C
	</div>
	<div v-else>
        A/B/C
	</div>

>
	var app3 = new Vue({
        el: '#app-3',
        data: {
            type: 'A'
        }
    })

<br>

# v-for 绑定数组数据
>
	<div id="app-4">
	    <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
	</div>

>
    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})

在控制台里，输入 app4.todos.push({ text: '新项目' })，你会发现列表最后添加了一个新项目。

<br>

# v-on 添加事件监听
>
    <div id="app-5">
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">逆转消息</button>
        <button @click="reverseMessage">逆转消息写法</button>
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="warn('Form cannot be submitted yet.', $event)">Say hi</button>
    </div>

>
    var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            },
            say: function (message) {
                alert(message);
            }
            warn: function (message, event) {
                // 现在我们可以访问原生事件对象
                if (event) event.preventDefault()
                alert(message)
            }
        }
    })

* ### 事件修饰符
>
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis"></a> 
    <br>
    <!-- 提交事件不再重载页面 --> 
    <form v-on:submit.prevent="onSubmit"></form>
    <br>
    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>
    <br>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <br>
    <!-- 添加事件监听器时使用事件捕获模式 --> 
    <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 --> 
    <div v-on:click.capture="doThis">...</div> 
    <br>
    <!-- 只当在 event.target 是当前元素自身时触发处理函数 --> 
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>
    <br>
    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis"></a> 

使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。

* ### 按键修饰符
    * .enter
    * .tab
    * .delete (捕获“删除”和“退格”键)
    * .esc
    * .space
    * .up
    * .down
    * .left
    * .right
    * .ctrl
    * .alt
    * .shift
    * .meta 
    * .left
    * .right
    * .middle

>
    <!-- Alt + C -->
    <input @keyup.alt.67="clear">
    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
> 
    // 可以使用 `v-on:keyup.f1`
    Vue.config.keyCodes.f1 = 112

<br>

# v-model 实现表单输入和应用状态之间的双向绑定
* ### input
    >
        <div id="app-6">
            <p>{{ message }}</p>
            <input v-model="message">
        </div>

    >
        var app6 = new Vue({
            el: '#app-6',
            data: { 
                message: 'Hello Vue!'
            }
        })

    * .lazy \
    在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：
        >
            <!-- 在“change”时而非“input”时更新 -->
            <input v-model.lazy="msg" >
    * .number 
    如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。
        >
            <input v-model.number="age" type="number">
    * .trim \
    如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：    
        >
            <input v-model.trim="msg">

* ### checked
    1. >
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
    2. >
            <div id='example-3'>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">   
            <label for="jack">Jack</label>   
            <input type="checkbox" id="john" value="John" v-model="checkedNames">   
            <label for="john">John</label>   
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">   
            <label for="mike">Mike</label>   
            <br>
            <span>Checked names: {{ checkedNames }}</span>   
            </div>  
            new Vue({  
                el: '#example-3',
                data: {  
                    checkedNames: []   
                }
            })

* ### radio
>
    <div id="example-4"> 
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label> 
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label> 
        <br>
        <span>Picked: {{ picked }}</span>
    </div>
    
* ### select
>
    <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
        </option>
    </select>
    <span>Selected: {{ selected }}</span>

>
    new Vue({
        el: '...',
        data: {
            selected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    })

<br>

# Vue.component 组件
>
    <div id="app-7">
        <ol>
            <!-- 现在我们为每个 todo-item 提供 todo 对象todo 对象是变量，即其内容可以是动态的。我们也需要为每个组件提供一个“key” -->
            <todo-item
                v-for="item in groceryList"
                v-bind:todo="item"
                v-bind:key="item.id">
            </todo-item>
        </ol>
    </div>

>
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })
    var app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ]
        }
    })

注册仅在其作用域中可用的组件：
>
    var Child = {
        template: '<div>A custom component!</div>'
    }
    new Vue({
    // ...
    components: {
        // <my-component> 将只在父组件模板中可用
        'my-component': Child
    }
})

components中的data是必须的
>
    <div id="example-2">
        <simple-counter></simple-counter>
        <simple-counter></simple-counter>
        <simple-counter></simple-counter>
    </div>

>
    Vue.component('simple-counter', {   
        template: '<button v-on:click="counter += 1">{{ counter }}</button>', \
        // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
        // 但是我们却给每个组件实例返回了同一个对象的引用 \
        data: function () {   
            return {    
                counter: 0
            }   
        }
    })
    new Vue({   
        el: '#example-2'
    })

<br>

# 使用$获取实例属性与方法
>
    var data = { a: 1 }    
    var vm = new Vue({
        el: '#example',   
        data: data    
    })
    vm.$data === data;          // => true;    
    console.log(vm.$data.a);    // =>1

<br>

# $watch 在属性变化后触发
>
    var data = { a: 1 }    
    var vm = new Vue({
        el: '#example',   
        data: data,    
        watch: {
            'a' : function (newValue, oldValue) {
                // 这个回调将在 'vm.a' 改变后调用
            }
        }
    })  

>
    var data = { a: 1 }    
    var vm = new Vue({
        el: '#example',   
        data: data    
    })
    vm.$watch('a', function (newValue, oldValue) {
        // 这个回调将在 `vm.a` 改变后调用
    })

<br>

# computed
>
    <div id="example">
        <p>Original message: "{{ message }}"</p>    
        <p>Computed reversed message: "{{ reversedMessage }}"</p>   
    </div>

>
    var vm = new Vue({
        el: '#example',   
        data: {   
            message: 'Hello'    
        },    
        computed: {   
            // 计算属性的 getter    
            reversedMessage: function () {
                // 'this' 指向 vm 实例    
                return this.message.split('').reverse().join('')
            }   
        }
    })

Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。

<br>

# computed 和 watch的异同
computed 和 watch 都可以观察页面的数据变化。当处理页面的数据变化时，我们有时候很容易滥用watch。 而通常更好的办法是使用computed属性，而不是命令是的watch回调。\
## 例：我们要实现 第三个表单的值 是第一个和第二个的拼接，并且在前俩表单数值变化时，第三个表单数值也在变化
> 
    <div id="myDiv">
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <input type="text" v-model="fullName">
    </div>

* watch:
  >
      new Vue({
        el: '#myDiv',
        data: {
          firstName: 'Foo',
          lastName: 'Bar',
          fullName: 'Foo Bar'
        },
        watch: {
          firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
          },
          lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
          }
        }
      })

  虽然计算属性在大多数情况下是非常适合的，但是在有些情况下我们需要自定义一个watcher，在数据变化时来执行异步操作，这时watch是非常有用的。

* computed:
  >
      new Vue({
          el:"#myDiv",
          data:{
              firstName:"Den",
              lastName:"wang",

          },
          computed:{
              fullName:function(){
                  return  this.firstName  + " " +this.lastName;
              }
          }
      })

  在vue的 模板内（{{}}）是可以写一些简单的js表达式的 ，很便利。但是如果在页面中使用大量或是复杂的表达式去处理数据，对页面的维护会有很大的影响。这个时候就需要用到computed 计算属性来处理复杂的逻辑运算
  1. 优点： \
  在数据未发生变化时，优先读取缓存。computed 计算属性只有在相关的数据发生变化时才会改变要计算的属性，当相关数据没有变化是，它会读取缓存。而不必想 motheds方法 和 watch 方法是的每次都去执行函数。
  2. setter 和 getter方法：（注意在vue中书写时用set 和 get） \
  setter 方法在设置值是触发。 \
  getter 方法在获取值时触发。


<br>

# v-once一次性赋值，数据改变后不会变化
>
    <span v-once>这个将不会改变: {{ msg }}</span>

<br>

# v-html 以html的形式显示
>
    <p>Using mustaches: {{ rawHtml }}</p>    
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

<br>

# v-bind 属性绑定
>
    <div v-bind:id="dynamicId"></div>    
    <button v-bind:disabled="isButtonDisabled">Button</button>    
    <input type="text" v-bind:value="name" />

<br>

# v-bind:class

*   >
        <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">
        </div>   
    >
        data: {    
            isActive: true,   
            hasError: false   
        }

*   >
        <div v-bind:class="[activeClass, errorClass]"></div>

    >
        data: {
            activeClass: 'active',    
            errorClass: 'text-danger'
        }

<br>

# v-bind:style
>
    <div v-bind:style="styleObject"></div>

>
    data: {    
        styleObject: {    
            color: 'red',   
            fontSize: '13px'    
        }
    }

<br>

# v-show 
简单地切换元素的 CSS 属性 display。
>
    <h1 v-show="ok">Hello!</h1>

<br>

# vue-router 路由
>
    const NotFound = { template: '<p>Page not found</p>' }    
    const Home = { template: '<p>home page</p>' }   
    const About = { template: '<p>about page</p>' }
    const routes = {    
    　'/': Home,    
    　'/about': About   
    }   
    new Vue({   
    　el: '#app',   
    　data: {   
        currentRoute: window.location.pathname
    　},    
    　computed: {   
        ViewComponent () {
        　return routes[this.currentRoute] || NotFound
        }   
    　},    
    　render (h) { return h(this.ViewComponent) }   
    })

<br>

# vue 生命周期
* beforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeDestroy
* destroyed

例：
>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>vue生命周期学习</title>
            <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
        </head>
        <body>
        <div id="app">
            <h1>{{message}}</h1>
        </div>
        </body>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                message: 'Vue的生命周期'
                },
                beforeCreate: function() {
                console.group('------beforeCreate创建前状态------');
                console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
                console.log("%c%s", "color:red","data   : " + this.$data); //undefined
                console.log("%c%s", "color:red","message: " + this.message)
                },
                created: function() {
                console.group('------created创建完毕状态------');
                console.log("%c%s", "color:red","el     : " + this.$el); //undefined
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
                },
                beforeMount: function() {
                console.group('------beforeMount挂载前状态------');
                console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
                console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化   
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化   
                },
                mounted: function() {
                console.group('------mounted 挂载结束状态------');
                console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
                console.log(this.$el);     
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
                },
                beforeUpdate: function () {
                console.group('beforeUpdate 更新前状态===============》');
                console.log("%c%s", "color:red","el     : " + this.$el);
                console.log(this.$el);    
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
                },
                updated: function () {
                console.group('updated 更新完成状态===============》');
                console.log("%c%s", "color:red","el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
                },
                beforeDestroy: function () {
                console.group('beforeDestroy 销毁前状态===============》');
                console.log("%c%s", "color:red","el     : " + this.$el);
                console.log(this.$el);     
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
                },
                destroyed: function () {
                console.group('destroyed 销毁完成状态===============》');
                console.log("%c%s", "color:red","el     : " + this.$el);
                console.log(this.$el);   
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message)
                }
            })
        </script>
    </html>

<br>

# vue手机控件库 cube-ui
## https://didi.github.io/cube-ui/#/zh-CN/docs/introduction

<br>

# vue router
## https://router.vuejs.org/zh-cn/essentials/getting-started.html

* router.push(location, onComplete?, onAbort?) \
    想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。 \
    当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)。
    >
        // 字符串
        router.push('home')
        // 对象
        router.push({ path: 'home' })
        // 命名的路由
        router.push({ name: 'user', params: { userId: 123 }})
        // 带查询参数，变成 /register?plan=private
        router.push({ path: 'register', query: { plan: 'private' }})

    如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：

* router.replace(location, onComplete?, onAbort?) \
跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

<br>

# 命令行工具 (CLI)
Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
> 
    #全局安装 vue-cli
    $ npm install --global vue-cli
    #创建一个基于 webpack 模板的新项目
    $ vue init webpack my-project
    #安装依赖，走你
    $ cd my-project
    $ npm run dev

<br>

# vue组件中的样式属性--scoped
vue组件中的style标签标有scoped属性时表明style里的css样式只适用于当前组件元素 
它是通过使用PostCSS来改变以下内容实现的:
>
    <style scoped>
        .example {
            color: red;
        }
    </style>

    <template>
        <div class="example">hi</div>
    </template>

>
    <style>
        .example[data-v-f3f3eg9] {
            color: red;
        }
    </style>

    <template>
        <div class="example" data-v-f3f3eg9>hi</div>
    </template>

## 关于子组件的根元素
使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，这么设计的目的是父组件可以对子组件根元素进行布局。 
.vue模板中的样式是根据需要按需加载，访问一个页面该组件中的样式就会追加到head标签中，如果父子组件中都对某个子组件根节点元素进行了控制，则父组件里的样式会被后来的覆盖。

## 深选择器
如果想对设置了scoped的子组件里的元素进行控制可以使用’>>>’或者’deep’
>
    <template>
        <div id="app">
            <gHeader></gHeader>
        </div>
    </template>

    <style lang="css" scoped>
        .gHeader /deep/ .name{ //第一种写法
            color:red;
        }
        .gHeader >>> .name{   //二种写法
            color:red;
        }
    </style>

>
    <div class="gHeader">
        <div class="name"></div>
    </div>

一些预处理程序例如sass不能解析>>>属性，这种情况下可以用deep，它是>>>的别名，工作原理相同。

## 动态生成的内容
使用v-html动态创建的DOM内容，不受设置scoped的样式影响，但你依然可以使用深选择器进行控制