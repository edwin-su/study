# 三种使用js的方式
### 1. 内部javascript片段
> &lt;script type="text/javascript"><br />
>     alert("helo world");<br />
> &lt;/script>

### 2. 引入外部js文件
> &lt;script type="text/javascript" src="js/aa.js">&lt;/script>

### 3. 在元素的事件或者a标签的href上使用js
> &lt;a href="javascript:alert('hello');">click me&lt;/a><br />
> &lt;p onclick="javascript:alert('hello world')">click me&lt;/p>

<br />

# 如果一行代码太长，想分两行书写，可以在末尾添加\
>   document.writeln("qwewqe\\ <br />
>   wqewqewqe");

<br />

# 强制转换为整数parseInt(字符,几进制)，规则同样适用于parseFloat

> console.log(parseInt("12"));        //12    <br />
> console.log(parseInt("1 2"));        //1   <br />
> console.log(parseInt("10",2));        //2  <br />
> console.log(parseInt("2k"));        //2    <br />
> console.log(parseInt(" 12k"));        //12 <br />
> console.log(parseInt("k2"));        //NaN  <br />
> console.log(parseInt(true));        //NaN  <br />
> console.log(parseInt("true"));        //NaN<br />


Number函数将字符串转换为数值比parseInt函数要严格得多，只要字符中有一个不是数字，就会返回NaN



JS代码的执行顺序是从左到右，所以在+连接的表达式中，遇到字符串型数据之前，所有出现的数值数据（或者可以自动转换为数值类型的数据）仍被作为数值来进行运算。
如果是为了转换为字符，可以在最开始加上一个空字符串""
<script>
    console.log(3%8);       //3
    console.log(-3%8);      //-3
    console.log(3%-8);      //3
    console.log(-3%-8);     //-3

    var i = 3, j = 8;
    console.log(i + j + "3"); //113

    console.log(true + false); //1

    var num = 12.3; 
    console.log(++num);     //13.3  浮点数也支持自增自减

    var num1 = '3b';
    console.log(++num1);    //NaN 字符串不支持自增自减

    var nn = null;
    console.log(++nn);      //1 null支持
</script>


如果switch case后没有break，则后面的case无论是否满足条件都会执行
而且switch比较的是全等===
<script>
    var x = 1;
    switch(x){
        case 1:console.log("11");
        case 2:console.log("222");
    }
</script>



switch case语句的执行效率高于if else if，因为只需要执行一次表达式



<script>
    function calc(num1, num2){
        num1 = num1 || 2;
        num2 = num2 || 3;
        return num1 + num2;
    }
    calc();     //5     可以用类似这样的方法提供默认值
</script>



可变参数的一种实现方式
<script>
    function calc(){
        var sum = 0;
        for(var i = 0; i < arguments.length; i ++){
            sum += arguments[i];
        }

        return sum;
    }

    console.log(calc(1,2,3,3,3));
</script>



通过内置的isFinite()来检测是不是无穷值:是否是有界的（即不是inf）,除了意下3个，其他的都返回true
<script>
    var x = Infinity;       //正无穷
    var y = -Infinity;      //负无穷
    var z = 0/0;
    console.log(isFinite(x));   //false
    console.log(isFinite(y));   //false
    console.log(isFinite(z));   //false
</script>



通过内置的isNaN()来检测是不是NaN



encodeURI
对以下在URI中具有特殊含义的ASCII标点符号，该函数是不会对其进行转义的, / ? : @ & = + $ #


encodeURIComponent
不会对ASCII字母和数字进行编码，也不会对这些ASCII标点符号进行编码 - _ . ! ~ * ' ( )而其他字符就会进行编码


escape
函数可以对字符串进行编码，这样就可以在所有计算机上读取该字符串，该方法不会对ASCII字母和数字进行编码，也不会对下面这些ASCII标点符号进行编码
* @ - _ + . / 其他所有的字符都会被转义，这个函数不能用来编码URI


eval
会将字符串当作javascript代码来执行，它是一种由函数执行的动态代码，比直接执行代码要慢很多


如果将一个Date对象当作参数传递给Number函数，则会返回从1970年1月1日到所传Date对象之间的毫秒数


回调函数优势
可以让我们在不做命名的情况下传递函数，这样可以节省全局变量。
可以将一个函数调用操作委托给另一个函数，可以节省代码。
有助于提升性能。


自调函数优势
使用自调匿名函数不会产生任何全局变量。
函数无法重复执行，适合执行一些一次性的或初始化的任务。
<script>
    (function(){
        alert("hello world");
    })();

    (function(a,b){
        alert(a + b);
    })(3,5);
</script>



对象属性都有以下属性特性：
writable
enumerable
configurable
getter
setter


对象特性：
对象原型prototype
对象的类class
是否可扩展extensible


<script>
    function Person() {
        this.x = 1;
        this.y = 2;
    }
    Person.prototype.z = 3;

    var obj = new Person();

    // 原型链
    // Person的原型对象是 Person.prototype
    // Person.prototype的原型对象是 Object.prototype
    // Object.prototype的原型对象是 null

    //通过in检测对象上是否有某个属性
    console.log("x" in obj);        //true
    console.log("z" in obj);        //true
    console.log("toString" in obj); //true
    console.log("aaa" in obj);      //false

    //如果只想查看对象本身是否有某属性
    obj.hasOwnProperty("x");        //true
    obj.hasOwnProperty("z");        //false

</script>



属性分为数据属性和存储属性

数据属性包含一个数据值的位置，在这个位置可以读取和写入值
以下4个描述行为特性的数据属性
1.writable  表示能否修改属性的值，默认值为true
2.enumerable    表示能否通过for in循环返回属性，代表属性是否可以被枚举，默认值为true
3.configurable  表示是否能通过delete删除属性从而重新定义属性，能否修改属性的特性，能否把属性修改为存储器属性。直接在对象上定义的属性，默认为true
4.value 包含这个属性的数据值，读取属性值的时候，从这个位置读取；写入属性值的时候，把新值保存在这个位置。这个特性值的默认属性为undefined

存储器属性
1.get   获取属性的值
2.set   设置属性的值


propertyIsEnumerable
自己的属性且可枚举的则为true
<script>
    function Person(){}
    Person.prototype.x = 1;
    var p = new Person();
    p.y = 2;
    console.log(p.propertyIsEnumerable("x"));    // false;
    console.log(p.propertyIsEnumerable("y"));    // true;
</script>


Object.defineProperty(obj, prop, descriptor)
obj:需要定义的对象
prop：需要定义或修改的属性名
descriptor:属性定义或修改的描述
如果使用该方法设置属性，则writable,enumerable,configurable如果没被指定，默认都为false

<script>
    var obj = {};
    Object.defineProperty(obj, 'x', {
        value:12,
        //enumerable: false,可以定义多个
    });

    console.log(obj.x);     // 12
    obj.x = 13;
    console.log(obj.x);     // 12
    for(var item in obj){
        console.log(item);
    }                           // nothing
    Object.keys(obj);           // []
   
    Object.defineProperty(obj, 'x', {   //修改之前定义的内容，但由于之前没有设置configurable为true，所以就无法重新修改
        value:14,
    });
    console.log(obj.x);     // 会报错，因为configurable为false

    Object.defineProperty(obj, 'y', {   //修改之前定义的内容，但由于之前没有设置configurable为true，所以就无法重新修改
        get : function(){
            return "hello world";
        }
    });
    console.log(obj.y);    // hello world
</script>


如果属性是不可配置的，但是可以把writable的true变为false，却不可以把writable的false变为true
<script>
    var obj = {};
    Object.defineProperty(obj,"x",{
        value: 1,
        writable : true,
        configurable: false
    })
    console.log(obj.x);
    obj.x  = 2;
    console.log(obj.x);
    Object.defineProperty(obj, "x", {
        writable:false,
    })
    console.log(obj.x);
    obj.x  = 4;
    console.log(obj.x);
</script>

可以通过get/set和变量，对象字面量
<script>
    var obj = {
        name:"edwin",
        age:10,
        get job(){
            return "student";
        },
        set money(val){
            console.log("Can not set" + val);
        }
    };
    console.log(obj.name);
    console.log(obj.sex);   // undefined
    console.log(obj.job);   // student
    obj.money = 15;         // Can not set 15

    var obj1 = {};
    Object.defineProperty(obj1, "y", {
        get:function(){     // 需要冒号
            return "hello";
        }
    })
    console.log(obj1.y);
</script>


可以通过Object.getOwnPropertyDescriptor(obj,"propertyName");来获得属性的描述


通过对象字面量创建的对象，使用Object.prototype作为它的原型
通过new创建的对象使用构造函数的prototype属性作为他们的原型
通过Object.create()创建的对象使用第一个参数（也可以是null）作为他们的原型

检测一个对象是否是另外一个对象的原型（或处于原型链中）
<script>
    var obj1 = {};
    console.log(Object.prototype.isPrototypeOf(obj1));  // true

    function Person(){}
    var p = new Person()
    console.log(Person.prototype.isPrototypeOf(p));     // true

    var obj1 = {name:"edwin"};
    var c = Object.create(obj1);
    console.log(obj1.isPrototypeOf(c));                 // true
</script>


正则表达式
pattern（模式）描述了表达式的模式
常用模式如下：
global      默认为false，搜索在找到第一个匹配位置时会停止，如果想全局搜索，就设为true
ignoreCase  默认为false，是否区分大小写
multiline   默认值false，设置是否多行搜索
lastIndex   默认0，搜索开始的索引位置
source      用于存储正则表达式匹配模式的属性
除了lastIndex以外，其他的在对象创建之后就不能被更改了

modifilers（修饰符）用于指定全局匹配、区分大小写的匹配和多行匹配
常用修饰符如下：
i   执行对大小写不敏感的匹配
g   执行全匹配（查找所有匹配而非在找到第一个匹配后停止）
m   执行多行匹配

test方法用来检测字符串中是否存在正则表达式模式对应的匹配，返回布尔值类型，每次最多查找一个匹配
exec方法将匹配的结果以字符串的形式返回

支持正则表达式的方法match,replace,search,split
<script>
    // 正则表达式的两种使用方式
    var patt = new RegExp(pattern, modifilers);
    var patt = /pattern/modifiers;


    // 例子
    var patt =  new RegExp("javascript");   //忽略大小写 var patt =  new RegExp("javascript"，i);
    var res = patt.test("This is javascript course");
    console.log(res);   // true

    patt = /javascript/;    // 忽略大小写 patt = /javascript/i;
    res = patt.test("This is javascript show time");
    console.log(res);   // true

    res = /[abc]/.test('blue'); // blue中如果出现字母a/b/c，则返回true
    console.log(res);   // true

    res = /[^abc]/.test('blue');    // blue中如果没有出现a/b/c，则返回true
    console.log(res);   // true

    res = /a/ig.test("sdweA");              // 全局忽略大小写查找a  
    res = /[0-9]/.test("this is 1 test");   //是否包含数字
    res = /[a-z].test("asdasdas");  // 是否包含字母
    res = /abc|java|test/.test("This is java");     //是否包含abc/java/test
    res = /./.test("\n");       // .表示除换行符以外的任意字符
    res = /\d/.test("1231");    // 0-9
    res = /\D/.test("1231");    // 除了0-9
    res = /\w/;         // a-zA-Z0-9
    res = /\W/;         // 除了a-zA-Z0-9
    res = /\s/.test("hello wolrd");         // 是否存在空白字符（空格）
    res = /\S/.test("   ");                 // 是否存在非空格字符
    res = /\bg/.test("good");               // 单词是否以字母g开头
    res = /\bd/.test("good");               // 单词是否以字母d结尾
    res = /\Bg/.test("good");               // 单词是否不以字母g开头
    res = /\Bd/.test("good");               // 单词是否不以字母d结尾
    res = /g+/.test("good");               // +代表是否出现一次，这里是g是否出现了至少一次
    res = /g*/.test("good");               // 代表0次，1次或多次g
    res = /g?/.test("good");                //  代表0次或1次g
    res = /g{2}/.test("good");              // 代表至少出现2次g
    res = /g{1，3}/.test("good");            //出现1-3次g
    res = /^g/.test("good");                //整个字符串以g开头
    res = /d$/.test("good");                //整个字符串以d结尾
    res = /o(?=d)/.test("good");            //字母o后紧跟字母d
    res = /o(?!d)/.test("good");            //字母o后不跟字母d

    res = /\d/.exec("sad2ao");                    // 返回第一个匹配的数字2

    "ABC".match(/b/i);                      // 返回匹配的项
    "abca".replace(/a/g,"6")                // 6bc6 
</script>