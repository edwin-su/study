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
>&lt;div id="app-5">    \
　&lt;p>{{ message }}&lt;/p>    \
　&lt;button v-on:click="reverseMessage">逆转消息&lt;/button>   \
　&lt;button @click="reverseMessage">逆转消息写法2&lt;/button>  \
&lt;/div>

>var app5 = new Vue({   \
　el: '#app-5', \
　data: {   \
　　message: 'Hello Vue.js!'    \
　},    \
　methods: {    \
　　reverseMessage: function () {   \
　　　this.message = this.message.split('').reverse().join('')  \
　　}   \
　} \
})

<br>

# v-model 实现表单输入和应用状态之间的双向绑定
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

<br>

# Vue.component 组件　　v-bind绑定
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
