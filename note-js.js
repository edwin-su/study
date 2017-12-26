标识符: 变量、函数、属性的名字，或者函数的参数  
ECMAScript标识符采用驼峰大小写格式，也就是第一个字母小写，剩下的每个单词的
首字母大写



要在整个脚本中启用严格模式，可以在顶部添加如下代码 "use strict";
	在函数内部的上方包含这条编译指示，也可以指定函数在严格模式下执行 
	function doSomething(){
		"use strict";
	}


关键字 :	break 		do 		instanceof 	typeof
	case 		else 		new 		var
	catch 		finally 	return 		void
	continue 	for 		switch		while
	debugger 	function     	this		with 
	default 	if 		throw
	delete 		in 		try

保留字:	abstract 	enum 		int 		short
	boolean 	export 		interface 	static
	byte 		extends 	long 		super
	char 		final 		native 		synchronized
	class 		float 		package 	throws
	const 		goto 		private 	transient
	debugger 	implements 	protected 	volatile
	double 		import 		public
	
	第5版把在非严格模式下运行时的保留字缩减为下列这些
		class 		enum 		extends 	super
	在严格模式下，第5版还对以下保留字施加了限制
		implements 	package 	public
		interface 	private 	static
		let 		protected 	yield


简单数据类型（也称为基本数据类型） :Undefined,Null,Boolean,Number,String
复杂数据类型 :Object



各种类型转换为Boolean规则
数据类型			转换为true的值					转换为false的值
Boolean			true						false
String			任何非空字符串					""(空字符串)
Number			任何非零数字值（包括无穷大） 		0和NaN
Object			任何对象							null
Undefined		n/a								undefined





由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值转换为整数值。显然，如果小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。同样地，如果浮点数值本身表示的就是一个整数（如1.0
），那么该值也会被转换为整数

var floatNum1 = 1.;        // 小数点后面没有数字——解析为1
var floatNum2 = 10.0;      // 整数——解析为10





在默认情况下，ECMASctipt会将那些小数点后面带有6个零以上的浮点数值转换为以e表示法表示的数值（例如，0.0000003
会被转换成3e7）。




NaN与任何值都不相等，包括NaN本身





有3个函数可以把非数值转换为数值：Number()、parseInt()和parseFloat()。第一个函数，即转型函数Number()可以用于任何数据类型，而另两个函数则专门用于把字符串转换成数值
Number()
函数的转换规则如下。
如果是Boolean值，true和false将分别被转换为1和0。
如果是数字值，只是简单的传入和返回。
如果是null值，返回0。
如果是undefined，返回NaN。
如果是字符串，遵循下列规则：
如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即"1"会变成1，"123"会变成123，而"011"会变成11（注意：前导的零被忽略了）；
如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（同样，也会忽略前导零）；
如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整数值；
如果字符串是空的（不包含任何字符），则将其转换为0；
如果字符串中包含除上述格式之外的字符，则将其转换为NaN。





var text = "This is the letter sigma: \u03a3."; 
这个例子中的变量text有28个字符，其中6个字符长的转义序列表示1个字符。任何字符串的长度都可以通过访问其length属性取得，例如：alert(text.length); // 输出28 




在不知道要转换的值是不是null或undefined的情况下，还可以使用转型函数String()，这个函数能够将任何类型的值转换为字符串





Object类型所具有的任何属性和方法也同样存在于更具体的对象中
Object的每个实例都具有下列属性和方法:
	constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是Object()
	hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）
	isPrototypeOf(object)：用于检查传入的对象是否是传入对象的原型（第5章将讨论原型）。
	propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in语句（本章后面将会讨论）来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定。
	toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应
	toString()：返回对象的字符串表示。
	valueOf()：返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。





逻辑与操作可以应用于任何类型的操作数，而不仅仅是布尔值。在有一个操作数不是布尔值的情况
下，逻辑与操作就不一定返回布尔值；此时，它遵循下列规则
	如果第一个操作数是对象，则返回第二个操作数 
	如果第二个操作数是对象，则只有在第一个操作数的求值结果为true的情况下才会返回该对象
	如果两个操作数都是对象，则返回第二个操作数 
	如果有一个操作数是null，则返回null
	如果有一个操作数是NaN，则返回NaN
	如果有一个操作数是undefined，则返回undefined






与ECMAScript中的其他操作符一样，当关系操作符的操作数使用了非数值时，也要进行数据转换或完成某些奇怪的操作。以下就是相应的规则
如果两个操作数都是数值，则执行数值比较。
如果两个操作数都是字符串，则比较两个字符串对应的字符编码值。
如果一个操作数是数值，则将另一个操作数转换为一个数值，然后执行数值比较。
如果一个操作数是对象，则调用这个对象的valueOf()方法，用得到的结果按照前面的规则执行比较。如果对象没有valueOf()方法，则调用toString()方法，并用得到的结果根据前面的规则执行比较。
如果一个操作数是布尔值，则先将其转换为数值，然后再执行比较
var result = "23" < 3; //false 
此时，字符串"23"会被转换成数值23，然后再与3进行比较，因此就会得到合理的结果。在比较数值和字符串时，字符串都会被转换成数值，然后再以数值方式与另一个数值比较
var result = "a" < 3; // false，因为"a"被转换成了NaN 










在转换不同的数据类型时，相等(==)和不相等(!=)操作符遵循下列基本规则： 
如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1；
如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值；
如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法，用得到的基本类型值按照前面的规则进行比较；
这两个操作符在进行比较时则要遵循下列规则。
null和undefined是相等的。
要比较相等性之前，不能将null和undefined转换成其他任何值。
如果有一个操作数是NaN，则相等操作符返回false，而不相等操作符返回true。重要提示：即使两个操作数都是NaN，相等操作符也返回false；因为按照规则，NaN不等于NaN。
如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回true；否则，返回false。






with语句的作用是将代码的作用域设置到一个特定的对象中。
with语句的语法如下：
with (expression) statement; 
定义with语句的目的主要是为了简化多次编写同一个对象的工作，如下面的例子所示：
var qs = location.search.substring(1); 
var hostName = location.hostname; 
var url = location.href; 
上面几行代码都包含location对象。如果使用with语句，可以把上面的代码改写成如下所示：
with(location){ 
var qs = search.substring(1); 
var hostName = hostname; 
var url = href; 
} 
在这个重写后的例子中，使用with语句关联了location对象。这意味着在with语句的代码块内部，每个变量首先被认为是一个局部变量，而如果在局部环境中找不到该变量的定义，就会查询location对象中是否有同名的属性。如果发现了同名属性，则以location对象属性的值作为变量的值。（不建议使用）





switch语句在比较值时使用的是全等操作符，因此不会发生类型转换（例如，字符串"10"不等于数值10）。





实际上，在函数体内可以通过arguments对象来访问这个参数数组，从而获取传递给函数的每一个参数
function doAdd() { 
	if(arguments.length == 1) { 
		alert(arguments[0] + 10); 
	} else if (arguments.length == 2) { 
		alert(arguments[0] + arguments[1]); 
	} 
} 
doAdd(10); //20 
doAdd(30, 20); //50 
另一个与参数相关的重要方面，就是arguments对象可以与命名参数一起使用，如下面的例子所示：
function doAdd(num1, num2) { 
	if(arguments.length == 1) { 
		alert(num1 + 10); 
	} else if (arguments.length == 2) { 
		alert(arguments[0] + num2); 
	} 
} 
关于arguments的行为，还有一点比较有意思。那就是它的值永远与对应命名参数的值保持同步。







在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量（即命名参数，或者用ECMAScript的概念来说，就是
arguments对象中的一个元素）。在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。
function setName(obj) { 
    obj.name = "111"; 
    obj = new Object(); 
    obj.name = "222"; 
} 
var person = new Object(); 
setName(person); 
alert(person.name);





一旦数据不再有用，最好通过将其值设置为null来释放其引用——这个做法叫做解除引用（dereferencing）
不过，解除一个值的引用并不意味着自动回收该值所占用的内存。解除引用的真正作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收。



JavaScript
变量可以用来保存两种类型的值：基本类型值和引用类型值。基本类型的值源自以下5种基本数据类型：Undefined、Null、
Boolean、Number和String。基本类型值和引用类型值具有以下特点：
基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；
从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本；
引用类型的值是对象，保存在堆内存中；
包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针；
从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终都指向同一个对象；
确定一个值是哪种基本类型可以使用typeof操作符，而确定一个值是哪种引用类型可以使用instanceof操作符。

所有变量（包括基本类型和引用类型）都存在于一个执行环境（也称为作用域）当中，这个执行环境决定了变量的生命周期，以及哪一部分代码可以访问其中的变量。以下是关于执行环境的几点总结：
执行环境有全局执行环境（也称为全局环境）和函数执行环境之分；
每次进入一个新执行环境，都会创建一个用于搜索变量和函数的作用域链；
函数的局部环境不仅有权访问函数作用域中的变量，而且有权访问其包含（父）环境，乃至全局环境；
全局环境只能访问在全局环境中定义的变量和函数，而不能直接访问局部环境中的任何数据；
变量的执行环境有助于确定应该何时释放内存。JavaScript是一门具有自动垃圾收集机制的编程语言，开发人员不必关心内存分配和回收问题。可以对JavaScript的垃圾收集例程作如下总结。
离开作用域的值将被自动标记为可以回收，因此将在垃圾收集期间被删除。
“标记清除”是目前主流的垃圾收集算法，这种算法的思想是给当前不使用的值加上标记，然后再回收其内存。
另一种垃圾收集算法是“引用计数”，这种算法的思想是跟踪记录所有值被引用的次数。JavaScript引擎目前都不再使用这种算法；但在IE中访问非原生JavaScript对象（如DOM元素）时，这种算法仍然可能会导致问题。
当代码中存在循环引用现象时，“引用计数”算法就会导致问题。
解除变量的引用不仅有助于消除循环引用现象，而且对垃圾收集也有好处。为了确保有效地回收内存，应该及时解除不再使用的全局对象、全局对象属性以及循环引用变量的引用。





var person = {}; //与new Object()相同



创建数组的基本方式有两种。第一种是使用Array构造函数，如下面的代码所示。var colors = new Array(); 
如果预先知道数组要保存的项目数量，也可以给构造函数传递该数量，而该数量会自动变成length属性的值。例如，下面的代码将创建length值为20的数组。var colors = new Array(20); 
也可以向Array构造函数传递数组中应该包含的项。以下代码创建了一个包含3个字符串值的数组：var colors = new Array("red", "blue", "green"); 







数组的length属性很有特点——它不是只读的。因此，通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项。请看下面的例子：
var colors = ["red", "blue", "green"]; // 
创建一个包含3个字符串的数组
colors.length = 2; 
alert(colors[2]); //undefined 




Array.isArray(value) 






数组继承的toLocaleString()、toString()和valueOf()方法，在默认情况下都会以逗号分隔的字符串的形式返回数组项。而如果使用join()方法，则可以使用不同的分隔符来构建这个字符串。join()方法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串。请看下面的例子：
var colors = ["red", "green", "blue"]; 
alert(colors.join(",")); //red,green,blue 
alert(colors.join("||")); //red||green||blue 



ECMAScript为数组专门提供了push()和pop()方法，以便实现类似栈的行为。push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。而pop()方法则从数组末尾移除最后一项，减少数组的length值，然后返回移除的项。请看下面的例子：
var colors = new Array(); // 创建一个数组
var count = colors.push("red", "green"); // 推入两项
alert(count); //2 
count = colors.push("black"); // 推入另一项
alert(count); //3 
var item = colors.pop(); // 取得最后一项
alert(item); //"black" 
alert(colors.length); //2 

栈数据结构的访问规则是LIFO（后进先出），而队列数据结构的访问规则是FIFO（First-In-First-Out，先进先出）。队列在列表的末端添加项，从列表的前端移除项。由于push()是向数组末端添加项的方法，因此要模拟队列只需一个从数组前端取得项的方法。实现这一操作的数组方法就是shift()，它能够移除数组中的第一个项并返回该项，同时将数组长度减1。结合使用shift()和push()方法，可以像使用队列一样使用数组。
var colors = new Array(); //创建一个数组
var count = colors.push("red", "green"); //推入两项
alert(count); //2 
count = colors.push("black"); //推入另一项
alert(count); //3 
var item = colors.shift(); //取得第一项
alert(item); //"red" 
alert(colors.length); //2 
ECMAScript还为数组提供了一个unshift()方法。顾名思义，unshift()与shift()的用途相反：它能在数组前端添加任意个项并返回新数组的长度。因此，同时使用unshift()和pop()方法，可以从相反的方向来模拟队列，即在数组的前端添加项，从数组末端移除项，如下面的例子所示。
var colors = new Array(); //创建一个数组
var count = colors.unshift("red", "green"); //推入两项
alert(count); //2 





在默认情况下，sort()方法按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。为了实现排序，sort()方法会调用每个数组项的toString()转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值，sort()方法比较的也是字符串，如下所示。
var values = [0, 1, 5, 10, 15]; 
values.sort(); 
alert(values); //0,1,10,15,5 
可见，即使例子中值的顺序没有问题，但sort()方法也会根据测试字符串的结果改变原来的顺序。因为数值5虽然小于10，但在进行字符串比较时，"10"则位于"5"的前面，于是数组的顺序就被修改了。不用说，这种排序方式在很多情况下都不是最佳方案。因此sort()
方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回0，如果第一个参数应该位于第二个之后则返回一个正数。


如果只想反转数组原来的顺序，使用reverse()方法要更快一些



var colors = ["red", "green", "blue"]; 
var colors2 = colors.concat("yellow", ["black", "brown"]); 
alert(colors); //red,green,blue 
alert(colors2); //red,green,blue,yellow,black,brown 





slice()，它能够基于当前数组中的一或多个项创建一个新数组。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下，slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项，但不包括结束位置的项。注意，slice()方法不会影响原始数组。请看下面的例子。
var colors = ["red", "green", "blue", "yellow", "purple"]; 
var colors2 = colors.slice(1); 
var colors3 = colors.slice(1,4); 
alert(colors2); //green,blue,yellow,purple 
alert(colors3); //green,blue,yellow 




下面我们来介绍splice()方法，这个方法恐怕要算是最强大的数组方法了，它有很多种用法。splice()的主要用途是向数组的中部插入项，但使用这种方法的方式则有如下3种。
删除：可以删除任意数量的项，只需指定2个参数：要删除的第一项的位置和要删除的项数。例如，splice(0,2)会删除数组中的前两项。
插入：可以向指定位置插入任意数量的项，只需提供3个参数：起始位置、
0（要删除的项数）和要插入的项。如果要插入多个项，可以再传入第四、第五，以至任意多个项。例如，splice(2,0,"red","green")会从当前数组的位置2开始插入字符串"red"和"green"。
替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定3个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,"red","green")会删除当前数组位置2的项，然后再从位置2开始插入字符串"red"和"green"。splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项（如果没有删除任何
项，则返回一个空数组）。


ECMAScript 5为数组定义了5个迭代方法。每个方法都接收两个参数：要在每一项上运行的函数和（可选的）运行该函数的作用域对象——影响this的值。传入这些方法中的函数会接收三个参数：数组项的值、该项在数组中的位置和数组对象本身。根据使用的方法不同，这个函数执行后的返回值可能会也可能不会影响方法的返回值。以下是这5个迭代方法的作用。
every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
filter()：对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组。
forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
some()：对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true。
以上方法都不会修改数组中的包含的值。
在这些方法中，最相似的是every()和some()，它们都用于查询数组中的项是否满足某个条件。对every()来说，传入的函数必须对每一项都返回true，这个方法才返回true；否则，它就返回false。而some()方法则是只要传入的函数对数组中的某一项返回true，就会返回true。





ECMAScript 5还新增了两个归并数组的方法：reduce()和reduceRight()。这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。其中，reduce()方法从数组的第一项开始，逐个遍历到最后。而reduceRight()则从数组的最后一项开始，向前遍历到第一项。这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。传给reduce()和reduceRight()的函数接收4个参数：前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。使用reduce()方法可以执行求数组中所有值之和的操作，比如：
var values = [1,2,3,4,5]; 
var sum = values.reduce(function(prev, cur, index, array){ 
return prev + cur; 
}); 
alert(sum); //15 




// GMT时间2005年5月5日下午5:55:55 
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55)); 



Date
类型还有一些专门用于将日期格式化为字符串的方法，这些方法如下。
toDateString()——以特定于实现的格式显示星期几、月、日和年；
toTimeString()——以特定于实现的格式显示时、分、秒和时区；
toLocaleDateString()——以特定于地区的格式显示星期几、月、日和年；
toLocaleTimeString()——以特定于实现的格式显示时、分、秒；
toUTCString()——以特定于实现的格式完整的UTC日期。
与toLocaleString()和toString()方法一样，以上这些字符串格式方法的输出也是因浏览器而异的，因此没有哪一个方法能够用来在用户界面中显示一致的日期信息。





ECMAScript通过RegExp类型来支持正则表达式。使用下面类似Perl的语法，就可以创建一个正则表达式。
var expression = /pattern/ flags ; 
其中的模式（pattern）部分可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用。每个正则表达式都可带有一或多个标志（flags），用以标明正则表达式的行为。正则表达式的匹配模式支持下列3个标志。
g：表示全局（global）模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止；
i：表示不区分大小写（case-insensitive）模式，即在确定匹配项时忽略模式与字符串的大小写；
m：表示多行（multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。
因此，一个正则表达式就是一个模式与上述3个标志的组合体。不同组合产生不同结果


/* 
* 匹配字符串中所有"at"的实例
*/ 
var pattern1 = /at/g; 
/* 
* 匹配第一个"bat"或"cat"，不区分大小写
*/ 
var pattern2 = /[bc]at/i; 
/* 
* 匹配所有以"at"结尾的3个字符的组合，不区分大小写
*/ 
var pattern3 = /.at/gi; 
与其他语言中的正则表达式类似，模式中使用的所有元字符都必须转义。正则表达式中的元字符包括：
( [ { \ ^ $ | ) ? * + .]} 
这些元字符在正则表达式中都有一或多种特殊用途，因此如果想要匹配字符串中包含的这些字符，就必须对它们进行转义。下面给出几个例子。
/* 
* 匹配第一个"bat"或"cat"，不区分大小写
*/ 
var pattern1 = /[bc]at/i; 
/* 
* 匹配第一个" [bc]at"，不区分大小写
*/ 
var pattern2 = /\[bc\]at/i; 
/* 
* 匹配所有以"at"结尾的3个字符的组合，不区分大小写
*/ 
var pattern3 = /.at/gi; 
/* 
* 匹配所有".at"，不区分大小写
*/ 
var pattern4 = /\.at/gi; 
在上面的例子中，pattern1匹配第一个"bat"或"cat"，不区分大小写。而要想直接匹配"[bc]at"的话，就需要像定义pattern2一样，对其中的两个方括号进行转义。对于pattern3来说，句点表示位于"at"之前的任意一个可以构成匹配项的字符。但如果想匹配".at"，则必须对句点本身进行转义，如pattern4所示。






var pattern1 = /[bc]at/i; 
/* 
* 匹配第一个" [bc]at"，不区分大小写
*/ 
var pattern2 = /\[bc\]at/i; 
/* 
* 匹配所有以"at"结尾的3个字符的组合，不区分大小写
*/ 
var pattern3 = /.at/gi; 
/* 
* 匹配所有".at"，不区分大小写
*/ 
var pattern4 = /\.at/gi; 
在上面的例子中，pattern1匹配第一个"bat"或"cat"，不区分大小写。而要想直接匹配"[bc]at"的话，就需要像定义pattern2一样，对其中的两个方括号进行转义。对于pattern3来说，句点表示位于"at"之前的任意一个可以构成匹配项的字符。但如果想匹配".at"，则必须对句点本身进行转义，如pattern4所示。
前面举的这些例子都是以字面量形式来定义的正则表达式。另一种创建正则表达式的方式是使用RegExp构造函数，它接收两个参数：一个是要匹配的字符串模式，另一个是可选的标志字符串。可以使用字面量定义的任何表达式，都可以使用构造函数来定义，如下面的例子所示。
/* 
* 匹配第一个"bat"或"cat"，不区分大小写
*/ 
var pattern1 = /[bc]at/i; 
/* 
* 与pattern1相同，只不过是使用构造函数创建的
*/ 
var pattern2 = new RegExp("[bc]at", "i"); 
在此，pattern1和pattern2是两个完全等价的正则表达式。要注意的是，传递给RegExp构造函数的两个参数都是字符串（不能把正则表达式字面量传递给RegExp构造函数）。由于RegExp构造函数的模式参数是字符串，所以在某些情况下要对字符进行双重转义。所有元字符都必须双重转义，那些已经转义过的字符也是如此，例如\n（字符\在字符串中通常被转义为\\，而在正则表达式字符串中就会变成\\\\）。



解析器在向执行环境中加载数据时，对函数声明和函数表达式并非一视同仁。解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真
正被解释执行。



在函数内部，有两个特殊的对象：arguments和this。其中，arguments是一个类数组对象，包含着传入函数中的所有参数。虽然arguments的主要用途是保存函数参数，但这个对象还有一个名叫callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数。请看下面这个非常经典的阶乘函数。
function factorial(num){ 
if (num <=1) { 
return 1; 
} else { 
return num * factorial(num-1) 
} 
} 
定义阶乘函数一般都要用到递归算法；如上面的代码所示，在函数有名字，而且名字以后也不会变的情况下，这样定义没有问题。但问题是这个函数的执行与函数名factorial紧紧耦合在了一起。为了消除这种紧密耦合的现象，可以像下面这样使用arguments.callee
function factorial(num){ 
if (num <=1) { 
return 1; 
} else { 
return num * arguments.callee(num-1) 
} 
} 


函数内部的另一个特殊对象是this，其行为与Java和C#中的this大致类似。换句话说，this引用的是函数据以执行的环境对象——或者也可以说是this值（当在网页的全局作用域中调用函数时，this对象引用的就是window）


函数的名字仅仅是一个包含指针的变量而已。因此，即使是在不同的环境中执行，全局的sayColor()函数与
o.sayColor()指向的仍然是同一个函数。



ECMAScript 5也规范化了另一个函数对象的属性：caller。除了Opera的早期版本不支持，其他浏览器都支持这个ECMAScript 3并没有定义的属性。这个属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为null。例如：
function outer(){ 
inner(); 
} 
function inner(){ 
alert(inner.caller); 
} 
outer(); 
以上代码会导致警告框中显示outer()函数的源代码。因为outer()调用了inter()，所以inner.caller就指向outer()。



ECMAScript中的函数是对象，因此函数也有属性和方法。每个函数都包含两个属性：length和prototyp
。其中，length属性表示函数希望接收的命名参数的个数




对于ECMAScript中的引用类型而言，prototype是保存它们所有实例方法的真正所在。换句话说，诸如toString()和valueOf()等方法实际上都保存在prototype名下，只不过是通过各自对象的实例访问罢了。在创建自定义引用类型以及实现继承时，prototype属性的作用是极为重要的。在ECMAScript 5中，prototype属性是不可枚举的，因此使用for-in无法发现。每个函数都包含两个非继承而来的方法：apply()
和call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值。首先，apply()方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。其中，第二个参数可以是Array的实例，也可以是arguments对象。例如：
function sum(num1, num2){ 
	return num1 + num2; 
} 
function callSum1(num1, num2){ 
	return sum.apply(this, arguments); // 传入arguments对象
} 
function callSum2(num1, num2){ 
	return sum.apply(this, [num1, num2]); // 传入数组
} 
alert(callSum1(10,10)); //20 
alert(callSum2(10,10)); //20 


call()方法与apply()方法的作用相同，它们的区别仅在于接收参数的方式不同。对于call()方法而言，第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。换句话说，在使用call()方法时，传递给函数的参数必须逐个列举出来，如下面的例子所示。
function sum(num1, num2){ 
	return num1 + num2; 
} 
function callSum(num1, num2){ 
	return sum.call(this, num1, num2); 
} 
alert(callSum(10,10)); //20 
事实上，传递参数并非apply()和call()真正的用武之地；它们真正强大的地方是能够扩充函数赖以运行的作用域。下面来看一个例子。
window.color = "red"; 
var o = { color: "blue" }; 
function sayColor(){ 
alert(this.color); 
} 
sayColor(); //red 
sayColor.call(this); //red 
sayColor.call(window); //red 
sayColor.call(o); //blue 

使用call()（或apply()）来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系


ECMAScript 5还定义了一个方法：bind()。这个方法会创建一个函数的实例，其this值会被绑定到传给bind()函数的值。例如：
window.color = "red"; 
var o = { color: "blue" }; 
function sayColor(){ 
alert(this.color); 
} 
var objectSayColor = sayColor.bind(o); 
objectSayColor(); //blue 
在这里，sayColor()调用bind()并传入对象o，创建了objectSayColor()函数。object- SayColor()函数的this值等于o，因此即使是在全局作用域中调用这个函数，也会看到"blue"。




为了便于操作基本类型值，ECMAScript还提供了3个特殊的引用类型：Boolean、Number和String。这些类型与本章介绍的其他引用类型相似，但同时也具有与各自的基本类型相应的特殊行为。实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们
能够调用一些方法来操作这些数据。

Object构造函数也会像工厂方法一样，根据传入值的类型返回相应基本包装类型的实例。例如：
var obj = new Object("some text"); 
alert(obj instanceof String); //true 





字符串"hello world"位置1处的字符是"e"，因此调用charAt(1)就返回了"e"。如果你想得到的不是字符而是字符编码，那么就要像下面这样使用charCodeAt()了。
var stringValue = "hello world"; 
alert(stringValue.charCodeAt(1)); //输出"101" 
这个例子输出的是"101"，也就是小写字母"e"的字符编码。



字符串操作方法 
第一个就是concat()，用于将一或多个字符串拼接起来，返回拼接得到的新字符串。

var stringValue = "hello world"; 
alert(stringValue.slice(3)); //"lo world" 
alert(stringValue.substring(3)); //"lo world" 
alert(stringValue.substr(3)); //"lo world" 
alert(stringValue.slice(3, 7)); //"lo w" 
alert(stringValue.substring(3,7)); //"lo w" 
alert(stringValue.substr(3, 7)); //"lo worl" 



String类型定义了几个用于在字符串中匹配模式的方法。第一个方法就是match()，在字符串上调用这个方法，本质上与调用RegExp的exec()方法相同。match()方法只接受一个参数，要么是一个正则表达式，要么是一个RegExp对象。来看下面的例子。
var text = "cat, bat, sat, fat"; 
var pattern = /.at/; //与pattern.exec(text)相同
var matches = text.match(pattern); 
alert(matches.index); //0 
alert(matches[0]); //"cat" 
alert(pattern.lastIndex); //0 


另一个用于查找模式的方法是search()。这个方法的唯一参数与match()方法的参数相同：由字符串或RegExp对象指定的一个正则表达式。search()方法返回字符串中第一个匹配项的索引；如果没有找到匹配项，返回-1。而且，search()方法始终是从字符串开头向后查找模式。看下面的例子。
var text = "cat, bat, sat, fat"; 
var pos = text.search(/at/); 
alert(pos); //1 



localeCompare()方法比较两个字符串，并返回下列值中的一个：
如果字符串在字母表中应该排在字符串参数之前，则返回一个负数（大多数情况下是-1，具体的值要视实现而定）；
如果字符串等于字符串参数，则返回0；
如果字符串在字母表中应该排在字符串参数之后，则返回一个正数（大多数情况下是1，具体的值同样要视实现而定）。





ECMA-262对内置对象的定义是：“由ECMAScript实现提供的、不依赖于宿主环境的对象，这些对象在ECMAScript程序执行之前就已经存在了。”意思就是说，开发人员不必显式地实例化内置对象，因为它们已经实例化了。前面我们已经介绍了大多数内置对象，例如Object、Array和String。ECMA-262还定义了两个单体内置对象：Global和Math。


Global对象的encodeURI()和encodeURIComponent()方法可以对URI（Uniform Resource Identifiers，通用资源标识符）进行编码，以便发送给浏览器。有效的URI中不能包含某些字符，例如空格。而这两个URI编码方法就可以对URI进行编码，它们用特殊的UTF-8编码替换所有无效的字符，从而让浏览器能够接受和理解。其中，encodeURI()主要用于整个URI（例如，http://www.wrox.com/illegal value.htm），而encode- URIComponent()主要用于对URI中的某一段（例如前面URI中的illegal value.htm）进行编码。它们的主要区别在于，encodeURI()不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；而encodeURIComponent()则会对它发现的任何非标准字符进行编码。来看下面的例子。
var uri = "http://www.wrox.com/illegal value.htm#start";
//"http://www.wrox.com/illegal%20value.htm#start" 
alert(encodeURI(uri)); 
//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start" 
alert(encodeURIComponent(uri)); 

使用encodeURI()编码后的结果是除了空格之外的其他字符都原封不动，只有空格被替换成了%20。而encodeURIComponent()方法则会使用对应的编码替换所有非字母数字字符。这也正是可以对整个URI使用encodeURI()，而只能对附加在现有URI后面的字符串使用encodeURIComponent()的原因所在。
一般来说，我们使用encodeURIComponent()方法的时候要比使用encodeURI()更多，因为在实践中更常见的是对查询字符串参数而不是对基础URI进行编码。

与encodeURI()和encodeURIComponent()方法对应的两个方法分别是decodeURI()和decodeURIComponent()。其中，decodeURI()只能对使用encodeURI()替换的字符进行解码。例如，它可将
%20替换成一个空格，但不会对%23作任何处理，因为%23表示井字号（#），而井字号不是使用encodeURI()替换的。同样地，decodeURIComponent()能够解码使用encodeURIComponent()编码的所有字符，即它可以解码任何特殊字符的编码。来看下面的例子：
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"; 
//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start 
alert(decodeURI(uri)); 
//http://www.wrox.com/illegal value.htm#start 
alert(decodeURIComponent(uri)); 





eval()方法就像是一个完整的ECMAScript解析器，它只接受一个参数，即要执行的ECMAScript（或JavaScript）字符串。看下面的例子：
eval("alert('hi')"); 
这行代码的作用等价于下面这行代码：
alert("hi"); 
当解析器发现代码中调用eval()方法时，它会将传入的参数当作实际的ECMAScript语句来解析，然后把执行结果插入到原位置。通过eval()执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行的代码具有与该执行环境相同的作用域链。这意味着通过eval()执行的代码可以引用在包含环境中定义的变量，举个例子：
var msg = "hello world"; 
eval("alert(msg)"); //"hello world" 
可见，变量msg是在eval()调用的环境之外定义的，但其中调用的alert()仍然能够显示"hello world"。这是因为上面第二行代码最终被替换成了一行真正的代码。同样地，我们也可以在eval()调用中定义一个函数，然后再在该调用的外部代码中引用这个函数：
eval("function sayHi() { alert('hi'); }"); 
sayHi(); 
显然，函数sayHi()是在eval()内部定义的。但由于对eval()的调用最终会被替换成定义函数的实际代码，因此可以在下一行调用sayHi()。对于变量也一样

在eval()中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在eval()执行的时候创建。严格模式下，在外部访问不到eval()中创建的任何变量或函数，因此前面两个例子都会导致错误。同样，在严格模式下，为eval赋值也会导致错误：
"use strict"; 
eval = "hi"; //causes error 
能够解释代码字符串的能力非常强大，但也非常危险。因此在使用eval()时必须极为谨慎，特别是在用它执行用户输入数据的情况下。否则，可能会有恶意用户输入威胁你的站点或应用程序安全的代码（即所谓的代码注入
）。




