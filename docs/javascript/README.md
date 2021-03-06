# javascript基础问题

### 1.let和const 的区别

let声明的变量可以改变,值和类型都可以改变,没有限制
const声明的变量不得改变值

### 2.“==”和”===”的不同
前者会自动转换类型，后者不会

### 3.怎么添加,移除,移动复制,创建,查找节点

```
一:添加,移除,替代,插入
   appendChild()
   removeChild()
	 replaceChild()
   insertBefore()
二: 创建节点
	 createDocumentFragment();
   createElement();
   createTextNode()
三:查找
   getElementsByTagName();
   getElementsByClassName()
   getElementsById()
   getElementByName()查询元素的 name 属性
   querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
   querySelectorAll()方法返回文档中匹配指定 CSS 选择器的所有元素
```


### 4.怎么清空数组
```
一: arrayList = [];//改变所指的对象
二:arrayList.length = 0;//设置length = 0;
三:arrayList.splice(0, arrayList.length);//使用splice()方法
```

### 5.谈一下js中的递归函数,并用递归简单实现阶乘 
```
一:自身调用自身
二: 必须有一个退出条件
function factoria(n) {
		if(n <=1 ) {
			return 1;
		}
		return n * factoria(n-1);
}
console.log(factoria(3));
```

### 6.this是什么,有什么用,它的指向是什么

```
作为对象的方法调用指向这个函数的对象
作为构造函数指向新创建的对象
使用apply和call设置this 
```

### 7.跨域通信有哪些方法,各有什么不同

```
1: JSONP:由于同源策略的限制,xmlHttpRequest只允许请求当前源,script标签没有同源限制,通过动态创建script元素,src指定一个域url,回调函数处理json数据,兼容性好,不支持post

2: 跨域资源共享(Cross-Origin Resource Sharing, CORS): 通过设置Access-control-Allow-Origin 来允许跨域cors,可用ajax请求获取数据

3：服务器代理
```

### 8.浏览器本地存储是怎样的

```
sessionStorage:
 本地存储一个会话中的数据,当页面关闭数据也会随之销毁,不是一种持久化的本地存储
loalStorage
  用于持久化的本地存储,除非主动删除数据,否者数据不会过期
```

### 9.GET和POST的区别

```
GET:一般用于信息获取,使用url传递参数一般限制2000个字符
POST: 一般用于修改服务器中的数据
前者通过地址来传值,后者同个表单来传值
```

### 10.前端性能优化有哪些方法
```
一:减少http请求, ，Sprite图像拼合,合并js文件和css文件
二:使用cdn
三:使用缓存
四:压缩资源
五:样式放在顶部,脚本放在底部
六:减少频繁的dom操作
```

### 11.es6新特性

```
1. let、const
let 定义的变量不会被变量提升，const 定义的常量不能被修改，let 和 const 都是块级作用域
2. import、export
import导入模块、export导出模块
3. class、extends、super
4. arrow functions （箭头函数）
5. template string （模板字符串）
6. destructuring （解构）
7. default 函数默认参数
8. rest arguments （rest参数）
受函数的多余参数，组成一个数组，放在形参的最后
9. Spread Operator （展开运算符）
10：对象字面量简写（省略冒号与 function 关键字）
11. Promise
```

### 12.Js中的堆和栈

```
栈(stack)会自动分配内存空间，会自动释放。堆(heap)动态分配的内存，大小不定也不会自动释放。

基本类型：简单的数据段，存放在栈内存中，占据固定大小的空间。

引用类型：指那些可能由多个值构成的对象，保存在堆内存中,包含引用类型的变量实际上保存的不是变量本身，而是指向该对象的指针。
```

### 13.javascript事件循环

同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数
当指定的事情完成时，Event Table会将这个函数移入Event Queue
当栈中的代码执行完毕，执行栈（call stack）中的任务为空时，就会读取任务队列（Event quene）中的事件，去执行对应的回调
如此循环，形成js的事件循环机制（Event Loop）

```
console.log('script start');

// setTimeout创建一个宏任务
setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

```
`The correct answer: script start, script end, promise1, promise2, setTimeout`
>总结下运行机制：

执行一个宏任务（栈中没有就从事件队列中获取）
执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

### 原型和原型链的定义
原型：每创建一个函数都会有一个prototype属性，这个属性是一个指针，指向一个对象。原型对象是包含特定类型的所有实例共享的属性和方法。原型对象的好处是，可以让所有实例对象共享它所包含的属性和方法。

原型链：原型链是实现继承的主要方法。