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
>　&lt;div v-bind:title='test'>

<br>

# v-if 判断语句 v-else
>   &lt;div v-if="type === 'A'">    \
 　A \
&lt;/div>   \
&lt;div v-else-if="type === 'B'">   \
 　B \
&lt;/div>   \
&lt;div v-else-if="type === 'C'">   \
 　C \
&lt;/div>   \
&lt;div v-else> \
 　Not A/B/C \
&lt;/div>

>   var app3 = new Vue({    \
    　　el: '#app-3',   \
    　　data: { \
 　 　 　type: 'A'  \
    　　}   \
    })

<br>

# v-for 绑定数组数据
> &lt;div id="app-4">   \
  　&lt;ol>   \
  　　&lt;li v-for="todo in todos">   \
  　　　{{ todo.text }}   \
  　　&lt;/li>    \
 　&lt;/ol>  \
&lt;/div>

>　var app4 = new Vue({ \
　　el: '#app-4', \
　　data: {   \
　　　todos: [    \
　　　　{ text: '学习 JavaScript' },  \
　　　　{ text: '学习 Vue' }, \
　　　　{ text: '整个牛项目' }    \
　　　]   \
　　} \
})

在控制台里，输入 app4.todos.push({ text: '新项目' })，你会发现列表最后添加了一个新项目。

<br>

# v-on 添加事件监听
> &lt;div id="app-5">    \
　&lt;p>{{ message }}&lt;/p>    \
　&lt;button v-on:click="reverseMessage">逆转消息&lt;/button>   \
　&lt;button @click="reverseMessage">逆转消息写法2&lt;/button>  \
　&lt;button v-on:click="say('hi')">Say hi</button> \
　&lt;button v-on:click="warn('Form cannot be submitted yet.', $event)">Say hi</button> \
&lt;/div>

>var app5 = new Vue({   \
　el: '#app-5', \
　data: {   \
　　message: 'Hello Vue.js!'    \
　},    \
　methods: {    \
　　reverseMessage: function () {   \
　　　this.message = this.message.split('').reverse().join('')  \
　　},   \
　　say: function (message) {   \
　　　　alert(message);    \
　　}   \
　　warn: function (message, event) {   \
　　　　// 现在我们可以访问原生事件对象 \
　　　　if (event) event.preventDefault()   \
　　　　　　alert(message)  \
　　} \
　} \
})

* ### 事件修饰符
>&lt;!-- 阻止单击事件继续传播 -->   \
&lt;a v-on:click.stop="doThis">&lt;/a>    \
<br>
&lt;!-- 提交事件不再重载页面 -->    \
&lt;form v-on:submit.prevent="onSubmit">&lt;/form>  \
<br>
&lt;!-- 修饰符可以串联 -->  \
&lt;a v-on:click.stop.prevent="doThat">&lt;/a>  \
<br>
&lt;!-- 只有修饰符 -->  \
&lt;form v-on:submit.prevent>&lt;/form> \
<br>
&lt;!-- 添加事件监听器时使用事件捕获模式 -->    \
&lt;!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->    \
&lt;div v-on:click.capture="doThis">...&lt;/div>    \
<br>
&lt;!-- 只当在 event.target 是当前元素自身时触发处理函数 -->    \
&lt;!-- 即事件不是从内部元素触发的 -->  \
&lt;div v-on:click.self="doThat">...&lt;/div>   \
<br>
&lt;!-- 点击事件将只会触发一次 --> \
&lt;a v-on:click.once="doThis">&lt;/a>    \

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

>&lt;!-- Alt + C -->    \
&lt;input @keyup.alt.67="clear">    \
&lt;!-- Ctrl + Click -->    \
&lt;div @click.ctrl="doSomething">Do something&lt;/div>

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
> // 可以使用 `v-on:keyup.f1`   \
Vue.config.keyCodes.f1 = 112

<br>

# v-model 实现表单输入和应用状态之间的双向绑定
* ### input
    >&lt;div id="app-6">   \
    　&lt;p>{{ message }}&lt;/p>  \
    　&lt;input v-model="message"> \
    &lt;/div>

    >var app6 = new Vue({   \
    　el: '#app-6', \
    　data: {   \
    　　message: 'Hello Vue!'   \
    　} \
    })

    * .lazy \
    在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：
        > &lt;!-- 在“change”时而非“input”时更新 --> \
          &lt;input v-model.lazy="msg" >
    * .number   \
    如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。
        > &lt;input v-model.number="age" type="number">
    * .trim \
    如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：    
        > &lt;input v-model.trim="msg">

* ### checked
    1. >&lt;input type="checkbox" id="checkbox" v-model="checked">  \
        &lt;label for="checkbox">{{ checked }}&lt;/label>
    2. >&lt;div id='example-3'> \
        &lt;input type="checkbox" id="jack" value="Jack" v-model="checkedNames">    \
        &lt;label for="jack">Jack&lt;/label>    \
        &lt;input type="checkbox" id="john" value="John" v-model="checkedNames">    \
        &lt;label for="john">John&lt;/label>    \
        &lt;input type="checkbox" id="mike" value="Mike" v-model="checkedNames">    \
        &lt;label for="mike">Mike&lt;/label>    \
        &lt;br> \
        &lt;span>Checked names: {{ checkedNames }}&lt;/span>    \
        &lt;/div>   \
        \
        new Vue({   \
        　el: '#example-3', \
        　data: {   \
        　　checkedNames: []    \
        　} \
        })

* ### radio
>&lt;div id="example-4">    \
　&lt;input type="radio" id="one" value="One" v-model="picked"> \
　&lt;label for="one">One&lt;/label>    \
　&lt;br>   \
　&lt;input type="radio" id="two" value="Two" v-model="picked"> \
　&lt;label for="two">Two&lt;/label>    \
　&lt;br>   \
　&lt;span>Picked: {{ picked }}&lt;/span>   \
&lt;/div>   \
    
* ### select
>&lt;select v-model="selected"> \
　&lt;option v-for="option in options" v-bind:value="option.value"> \
　　{{ option.text }}   \
　&lt;/option>  \
&lt;/select>    \
&lt;span>Selected: {{ selected }}&lt;/span> \

>new Vue({
　el: '...',    \
　data: {   \
　　selected: 'A',  \
　　options: [  \
　　　{ text: 'One', value: 'A' },  \
　　　{ text: 'Two', value: 'B' },  \
　　　{ text: 'Three', value: 'C' } \
　　]   \
　} \
})

<br>

# Vue.component 组件
>&lt;div id="app-7">    \
　&lt;ol>   \
　　&lt;!-- 现在我们为每个 todo-item 提供 todo 对象todo 对象是变量，即其内容可以是动态的。我们也需要为每个组件提供一个“key” --> \
　　&lt;todo-item   \
　　　v-for="item in groceryList"   \
　　　v-bind:todo="item"    \
　　　v-bind:key="item.id"> \
　　&lt;/todo-item> \
　&lt;/ol>  \
&lt;/div>

>Vue.component('todo-item', {   \
　props: ['todo'],  \
　template: '&lt;li>{{ todo.text }}&lt;/li>'  \
})  \
var app7 = new Vue({    \
　el: '#app-7', \
　data: {   \
　　groceryList: [  \
　　　{ id: 0, text: '蔬菜' },  \
　　　{ id: 1, text: '奶酪' },  \
　　　{ id: 2, text: '随便其它什么人吃的东西' } \
　　]   \
　} \
})

注册仅在其作用域中可用的组件：
> var Child = { \
　template: '<div>A custom component!</div>'    \
}   \
new Vue({   \
　// ...    \
　components: { \
　　// <my-component> 将只在父组件模板中可用    \
　　'my-component': Child   \
　} \
})

components中的data是必须的
> &lt;div id="example-2">   \
　&lt;simple-counter>&lt;/simple-counter>   \
　&lt;simple-counter>&lt;/simple-counter>   \
　&lt;simple-counter>&lt;/simple-counter>   \
&lt;/div>

>Vue.component('simple-counter', {   \
　template: '&lt;button v-on:click="counter += 1">{{ counter }}&lt;/button>', \
　// 技术上 data 的确是一个函数了，因此 Vue 不会警告，  \
　// 但是我们却给每个组件实例返回了同一个对象的引用 \
　data: function () {   \
　　return {    \
　　　counter: 0  \
　　}   \
　} \
})  \
new Vue({   \
　el: '#example-2'  \
})

<br>

# 使用$获取实例属性与方法
>var data = { a: 1 }    \
var vm = new Vue({  \
　el: '#example',   \
　data: data    \
})  \
vm.$data === data;　 　　　　// => true;    \
console.log(vm.$data.a); 　 　　// =>1

<br>

# $watch 在属性变化后触发
>var data = { a: 1 }    \
var vm = new Vue({  \
　el: '#example',   \
　data: data,    \
　watch: {  \
　　'a' : function (newValue, oldValue) { \
　　　// 这个回调将在 'vm.a' 改变后调用 \
　　} \
　} \
})  

>var data = { a: 1 }    \
var vm = new Vue({  \
　el: '#example',   \
　data: data    \
})  \
vm.$watch('a', function (newValue, oldValue) {  \
　// 这个回调将在 `vm.a` 改变后调用 \
})

<br>

# v-once一次性赋值，数据改变后不会变化
> &lt;span v-once>这个将不会改变: {{ msg }}&lt;/span>

<br>

# v-html 以html的形式显示
>&lt;p>Using mustaches: {{ rawHtml }}&lt;/p>    \
&lt;p>Using v-html directive: &lt;span v-html="rawHtml">&lt;/span>&lt;/p>

<br>

# v-bind 属性绑定
>&lt;div v-bind:id="dynamicId">&lt;/div>    \
&lt;button v-bind:disabled="isButtonDisabled">Button&lt;/button>    \
&lt;input type="text" v-bind:value="name" />

<br>

# computed
>&lt;div id="example">  \
　&lt;p>Original message: "{{ message }}"&lt;/p>    \
　&lt;p>Computed reversed message: "{{ reversedMessage }}"&lt;/p>   \
&lt;/div>

>var vm = new Vue({
　el: '#example',   \
　data: {   \
　　message: 'Hello'    \
　},    \
　computed: {   \
　　// 计算属性的 getter    \
　　reversedMessage: function () {  \
　　　// 'this' 指向 vm 实例    \
　　　return this.message.split('').reverse().join('')  \
　　}   \
　} \
})

Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。

<br>

# v-bind:class

* > &lt;div class="static"    \
    　v-bind:class="{ active: isActive, 'text-danger': hasError }">  \
    &lt;/div>   \

    >data: {    \
    　isActive: true,   \
    　hasError: false   \
    }

* >&lt;div v-bind:class="[activeClass, errorClass]">&lt;/div>

  >data: {  \
　activeClass: 'active',    \
　errorClass: 'text-danger' \
}

<br>

# v-bind:style
> &lt;div v-bind:style="styleObject">&lt;/div>

>data: {    \
　styleObject: {    \
　　color: 'red',   \
　　fontSize: '13px'    \
　} \
}

<br>

# v-show 
简单地切换元素的 CSS 属性 display。
> &lt;h1 v-show="ok">Hello!&lt;/h1>

<br>

# vue-router 路由
>   const NotFound = { template: '&lt;p>Page not found&lt;/p>' }    \
    const Home = { template: '&lt;p>home page&lt;/p>' }   \
    const About = { template: '&lt;p>about page&lt;/p>' } \
    const routes = {    \
    　'/': Home,    \
    　'/about': About   \
    }   \
    new Vue({   \
    　el: '#app',   \
    　data: {   \
    　　currentRoute: window.location.pathname  \
    　},    \
    　computed: {   \
    　　ViewComponent () {  \
    　　　return routes[this.currentRoute] || NotFound  \
    　　}   \
    　},    \
    　render (h) { return h(this.ViewComponent) }   \
})
