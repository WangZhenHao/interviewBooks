# 20230609面试

## 说一下http状态码

### 2xx
代表请求已成功被服务器接收、理解、并接受

- 200（成功）：请求已成功，请求所希望的响应头或数据体将随此响应返回

### 3xx
表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向

- 301（永久移动）：请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置

### 4xx
代表了客户端看起来可能发生了错误，妨碍了服务器的处理

- 400（错误请求）： 服务器不理解请求的语法
- 401（未授权）： 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
- 403（禁止）： 服务器拒绝请求
- 404（未找到）： 服务器找不到请求的网页

### 5xx
代表了服务器在处理请求的过程中有错误或者异常状态发生

- 500（服务器内部错误）：服务器遇到错误，无法完成请求
- 501（尚未实施）：服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码
- 502（错误网关）： 服务器作为网关或代理，从上游服务器收到无效响应
- 503（服务不可用）： 服务器目前无法使用（由于超载或停机维护）

## 说说你了解的性能优化


### 1. CDN网络加速

### 2. 懒加载和预加载
懒加载也叫做延迟加载、按需加载，指的是在长网页中延迟加载图片数据，是一种较好的网页性能优化的方式

预加载指的是将所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存取资源。

### 3.避免回流与重绘

- 操作DOM时，尽量在低层级的DOM节点进行操作
- 不要使用table布局， 一个小的改动可能会使整个table进行重新布局
- 使用CSS的表达式
- 不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式。
- 使用absolute或者fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素
- 避免频繁操作DOM，可以创建一个文档片段documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中
- 将元素先设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
- 将DOM的多个读操作（或者写操作）放在一起，而不是读写操作穿插着写。这得益于浏览器的渲染队列机制。


导致回流：
- 页面的首次渲染
- 浏览器的窗口大小发生变化
- 元素的内容发生变化
- 元素的尺寸或者位置发生变化
- 元素的字体大小发生变化
- 激活CSS伪类
- 查询某些属性或者调用某些方法
-添加或者删除可见的DOM元素

导致回流
- color、background 相关属性：background-color、background-image 等
- outline 相关属性：outline-color、outline-width 、text-decoration
- border-radius、visibility、box-shadow

### 4.节流与防抖

- 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。

- 函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

### 5. 说一下vite,为什么启动这么快

1. 基于 ES Modules：Vite 利用了 ES Modules 的特性，通过原生的 JavaScript 模块机制进行开发，不需要打包整个应用，而是以原生 ES Module 的形式直接加载模块。这避免了传统打包工具中大量的模块重复打包、解析和编译等过程，从而加快了启动速度。

2. 按需编译：Vite 会根据页面的实际需求，只编译和加载当前页面所需的模块，而不是像传统的打包工具一样将整个应用打包成一个 bundle。这种按需编译的方式可以减少编译和打包的时间，使得启动更加迅速。

3. 缓存：Vite 会在开发过程中缓存已经编译过的模块，当模块发生改动时，只重新编译改动的模块，而不是重新编译整个项目。这种缓存机制有效地减少了不必要的重复编译，提高了开发效率和启动速度。

vite通过启动web服务，将静态资源打包到内存中，然后通过浏览器访问，从而实现了按需编译。


## 说说什么Typescript中的泛型？作用是什么？
```
泛型代表的是泛指某一类型，更像是一个类型变量。由尖括号包裹<T>。
主要作用是创建逻辑可复用的组件。
泛型可以作用在函数、类、接口上。

```

## 说说接口interface和类型别名type的区别？

- type可以定义基本类型别名, 但是interface无法定义
```js
type userName = string
type stuNo = number
```
- type可以使用typeof获取实例类型
```js
let div = document.createElement('div');
type B = typeof div
```

- type可以声明联合类型
```js
type Student = {stuNo: number} | {classId: number}
```

- type可以声明 元组类型
```js
type Data = [number, string];
```

- interface可以声明合并
```js
interface Person { name: string }
interface Person { age: number }
let user: Person = {
    name: "Tolu",
    age: 0,
};

// 这种情况下，如果是type的话，重复使用Person是会报错的：
type Person { name: string };  
// Error: 标识符“Person”重复。ts(2300)
type Person { age: number }
```

- type继承通过&， interface继承通过extends 
```js
// type 继承 interface
type Person{
    name:string
}
type Student = Person & { stuNo: number }

// interface 继承 type
type Person{
    name:string
}
interface Student extends Person { stuNo: number }
```

## 5.TypeScript联合类型
```
联合类型表示取值可以为多种类型中的一种

var muchtype:string|number = "hello";
muchtype = 1;
```