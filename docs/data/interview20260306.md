# 20260306面试准备

## 怎么用户LCP响应时间过长问题

- 1.服务器响应慢
HTML 首屏加载慢。
API 接口或 SSR（服务端渲染）数据延迟。

- 2.资源阻塞渲染
CSS、JS 文件阻塞首屏渲染。
大量第三方脚本（广告、统计、社交插件）。

- 3.图片/媒体文件过大
大图未压缩或未使用 WebP/AVIF。
图片尺寸超过显示区域。

- 4.客户端渲染阻塞
大量 JS 运算，阻塞主线程。
SPA 首屏渲染需要下载并执行过多 JS。

- 5.懒加载不合理
首屏关键内容被懒加载。
视口内的内容未优先加载。

2️⃣ 优化策略

- 1服务器端优化
使用 CDN 缓存静态资源。
开启 HTTP/2 或 QUIC 提升并行加载。
优化服务器渲染（SSR）或预渲染（SSG），缩短 TTFB（Time To First Byte）。
数据接口延迟高 → 考虑 缓存、压缩、分页。

- 2. 资源优化

图片优化：
   压缩图片（WebP / AVIF / JPEG 2000）。
   设置 width 和 height 避免布局抖动。
   对首屏图片使用 优先加载 (<link rel="preload">)。
CSS/JS 优化：
   移除未使用的 CSS（Tree-shaking）。
   拆分 JS（Code Splitting）并懒加载非关键脚本。
   将关键 CSS 内联，减少阻塞。
   压缩/合并 JS，开启 Gzip 或 Brotli。
   减少第三方脚本
   延迟加载广告、分析、社交插件。
- 3.客户端渲染优化
    对 SPA 项目，考虑 SSR 或 SSR+CSR 混合，确保首屏 HTML 包含关键内容。
    避免在首屏渲染中执行大量 JS 计算。
    使用 requestIdleCallback 或 Web Worker 做耗时任务。

- 4.优先加载关键内容
确定 LCP 元素（通常是 <img> 或 <h1>）。
对 LCP 元素使用：

## 说一下Vue3的执行流程


## react组件之前怎么🧑通讯

1. 父子通信：通过 props 传递数据。

2. 子父通信：父组件传递回调函数，子组件调用。

3. 兄弟组件通信：通过父组件作为中间层共享状态。

兄弟组件一般通过 父组件中转。ChildA → Parent → ChildB

```js
function Parent() {
  const [msg, setMsg] = useState("")

  return (
    <>
      <ChildA setMsg={setMsg} />
      <ChildB msg={msg} />
    </>
  )
}
```


4. 跨层级通信：使用 Context API。
当组件层级很深时，可以使用 Context API。

```js
const ThemeContext = React.createContext()

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  )
}

function Child() {
  const theme = useContext(ThemeContext)
  return <div>{theme}</div>
}
```


5. 全局状态管理：使用 Redux、Zustand 等状态管理库。


6. Ref 通信：父组件通过 ref 调用子组件方法。

Ref / Imperative Handle,父组件可以通过 ref 调用子组件方法。
```js
const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus() {
      console.log("focus")
    }
  }))
})

function Parent() {
  const ref = useRef()

  return (
    <>
      <Child ref={ref} />
      <button onClick={() => ref.current.focus()}>
        click
      </button>
    </>
  )
}
```

## 什么是链表？

链表（Linked List）是一种线性数据结构，由多个节点（Node）组成，每个节点包含两部分：数据（data）、指向下一个节点的指针（next）


```
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// 创建链表：
const a = new Node("A")
const b = new Node("B")
const c = new Node("C")

a.next = b
b.next = c

console.log(a)

// 结构：
A → B → C

```

- 链表常见类型

```
1: 单链表（Singly Linked List）只有 next。

A → B → C → D

2: 双向链表（Doubly Linked List）, 节点：prev,next

A ⇄ B ⇄ C ⇄ D

3: 循环链表（Circular Linked List）
A → B → C
↑       ↓
└───────┘
```

## 为什么 React Fiber用链表

可以随时暂停遍历, 不依赖递归调用栈, 方便实现可中断渲染

```
App
 ↓ child
Header
 ↓ sibling
Main
 ↓ sibling
Footer
```


## React Fiber 架构

React Fiber 架构是 React 从 v16 开始引入的一套新的协调（reconciliation）架构，主要解决旧架构在大型应用中 渲染阻塞、无法中断、页面卡顿的问题。

在 React 16 之前，React 使用的是：Stack Reconciler，React 更新组件树时会 一次性递归执行完所有 diff。如果组件树很大：就会导致：掉帧

Fiber 的目标是：把一次长任务拆成多个小任务，允许：暂停，恢复，优先级调度

## next路由有哪些

Pages Router（传统路由）：Next.js 13 之前的主要路由方式。

- 1 静态路由：文件名就是路径。

pages/
 ├ index.tsx
 ├ about.tsx
 └ blog/
     └ [id].tsx

- 2 动态路由：通过文件名生成路由。使用 [param]

pages/post/[id].tsx

- 3 catch-all 路由
```
pages/docs/[...slug].tsx

可以匹配：
/docs/a
/docs/a/b
/docs/a/b/c

返回: 
['a','b','c']



```

Pages Router 在大型应用中存在一些架构限制，比如布局复用困难、数据获取方式复杂、以及无法很好支持 React Server Components。

- App Router（新路由）

因此 Next.js 在 13 版本推出了 App Router，它引入了 Server Components、Nested Layout、Streaming Rendering 等能力，使得数据获取更加简单，同时减少客户端 JS 体积，提高页面性能和开发体验。

- 1 支持 Server Components（最大变化重点）

```js
// 不会打包到浏览器, JS 体积更小, 更快
export default async function Page() {
  const data = await fetch("https://api.com/data")

  return <div>{data.title}</div>
}
```

- 2 真正的嵌套路由 + Layout

```
app/
 ├ dashboard/
 │   ├ layout.js
 │   ├ page.js
 │   ├ settings/page.js
 │   └ users/page.js
```

- 3 更简单的数据获取

```js
async function getData() {
  const res = await fetch("https://api.com")
  return res.json()
}
```

- 4 Streaming（渐进渲染）

```
以前页面必须：

数据全部加载完
↓
再返回 HTML

现在：
Header 先渲染
↓
内容慢慢加载
```

- 5 更强的路由能力

| 功能                  | 作用       |
| ------------------- | -------- |
| Layout              | 共享布局     |
| Route Groups        | 路由分组     |
| Parallel Routes     | 并行渲染     |
| Intercepting Routes | Modal 路由 |


| 特性        | Pages Router     | App Router         |                |
| --------- | ---------------- | ------------------ | -------------- |
| 默认组件      | Client Component | Server Component   |                |
| 数据获取      | getStaticProps   | getServerSideProps | 直接 async/await |
| Layout    | 需要手动写            | 内置 layout.tsx      |                |
| Loading   | 手动控制             | loading.tsx        |                |
| Streaming | 不支持              | 支持                 |                |
| 缓存机制      | 较弱               | 内置 fetch cache     |                |



## 什么事MCP
MCP 通常指 Model Context Protocol，是 AI 领域最近很火的一个协议。
MCP 是让 AI 可以像插件一样调用工具、访问数据的一种标准协议。

如：用户输入的文本

AI：无法访问你的数据库

AI：无法读取你的文件

AI：无法调用API

如果想让 AI：

查数据库

读本地文件

调用 GitHub

控制 IDE

开发者必须：

自己写一堆 API glue code

每个 AI 工具都要重新集成一次。

|      | AI Plugin | MCP  |
| ---- | --------- | ---- |
| 标准   | 各家不同      | 统一协议 |
| 连接方式 | API       | 工具协议 |
| 生态   | 分散        | 统一   |


## Cursor,和Claude 有哪些优缺点？
Cursor 是基于 Visual Studio Code 改的，所以开发体验非常完整。

比如可以：

直接改整个项目

AI 自动理解项目结构

自动改多个文件

自动生成代码

- 缺点

有时候改代码太“激进”
Cursor 有时候会：

改很多文件

改错逻辑

破坏代码结构

- Claude 的优缺点

超强代码理解能力

Claude 在代码理解方面非常强。

尤其：

大型代码

架构分析

代码解释

比如你丢 5000 行代码，它依然能理解。

- 缺点

不能直接运行代码

不像 Cursor：

Cursor 可以直接改项目

Claude 只能给代码


## 为什么 React 要从 Stack Reconciler 升级到 Fiber？

Stack Reconciler 是同步递归的，无法中断，导致大组件树渲染时页面卡顿；Fiber 让渲染变成可中断、可调度的任务。

React 在 React 16 引入了 Fiber 架构，把递归调用
变成可暂停的任务

|       | Stack Reconciler | Fiber |
| ----- | ---------------- | ----- |
| 渲染方式  | 递归               | 链表    |
| 执行方式  | 同步               | 可中断   |
| 任务拆分  | ❌                | ✅     |
| 优先级调度 | ❌                | ✅     |
| 并发渲染  | ❌                | ✅     |


Stack Reconciler 使用同步递归，一旦开始渲染必须执行完，无法中断，
当组件树很大时会长时间占用主线程，导致页面卡顿。

Fiber 将组件树转换成链表结构，把渲染拆分为可中断的小任务，
并引入调度机制和优先级系统，使 React 可以在浏览器空闲时继续渲染，
从而提升用户体验。


## 说一下这个代码的核心逻辑

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      const { useState, useEffect } = React;

      // The core library code --- // zustand
      const create = (createState) => {
        let state;
        const listeners = new Set();

        const set = (partial) => {
          const nextPartial =
            typeof partial === 'function' ? partial(state) : partial;
          state = { ...state, ...nextPartial };
          listeners.forEach((listener) => listener());
        };
        debugger
        state = createState(set);

        const useStore = () => {
          const [, setState] = useState(0);
          useEffect(() => {
            const forceUpdate = () => setState((c) => c + 1);
            listeners.add(forceUpdate);
            return () => {
              listeners.delete(forceUpdate);
            };
          }, []);
          return state;
        };

        return useStore;
      };

      const useBearStore = create((set) => ({
        bears: 0,
        honey: 10,
        increaseBears: () => set((state) => {
          debugger
          return { bears: state.bears + 1 }
        }),
        increaseHoney: () => set((state) => ({ honey: state.honey + 1 })),
      }));

      function BearCounter() {
        const { bears, increaseBears } = useBearStore('increaseBears');
        console.log('BearCounter re-rendered');
        return (
          <div>
            <h1>Bears: {bears}</h1>
            <button onClick={increaseBears}>Increase Bears</button>
          </div>
        );
      }

      function HoneyPot() {
        const { honey, increaseHoney } = useBearStore();
        console.log('HoneyPot re-rendered');
        return (
          <div>
            <h2>Honey: {honey}</h2>
            <button onClick={increaseHoney}>Increase Honey</button>
          </div>
        );
      }

      function App() {
        console.log('App re-rendered');
        return (
          <div>
            <BearCounter />
            <hr />
            <HoneyPot />
          </div>
        );
      }

      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<App />);
    </script>
  </body>
</html>


```

## 代码题

实现一个 requestScheduler 函数，假设有 10 个请求任务，但为了性能，要求同时执行的任务数不能超过 2 个。当其中一个完成后，自动补位执行下一个，直到全部完成。

```js

async function requestScheduler(requests) {  
  let limit = 2;
  let poolList = []
  for(let i = 0; i < requests.length; i++) {
    const p = request().then(() => {
      // 2. 任务完成后，从执行池中移除自己
      poolList.splice(poolList.indexOf(p), 1);
    });
    poolList.push(pool)

    if(poolList.length >= limit) {
      await Promise.race(poolList)
    }
  }

  await Promise.all(poolList)
}

```

## react的生命周期

```
Mounting（挂载）
Updating（更新）
Unmounting（卸载）

创建组件
↓
Mounting
↓
Updating（可能多次）
↓
Unmounting
```

## 为什么 Hooks 不能写在 if 里面？
React Hooks 不是通过变量名管理 state，而是通过：调用顺序

```js
// React 内部实现类似这样：
let hookIndex = 0

function useState() {
  const state = hooks[hookIndex]
  hookIndex++
}

```

React Hooks 是通过 调用顺序来管理 state 的。
如果 Hooks 写在 if、for 等条件语句中，就可能导致 每次渲染调用顺序不一致。
React 就无法正确匹配对应的 state，从而导致 状态错乱。
所以 React 要求 Hooks 必须写在 组件顶层。

## 为什么 React setState / useState 是异步的？

1. 提高性能
如果每次 setState 都立即更新并重新渲染，会非常慢。

```js
setCount(1)
setCount(2)
setCount(3)

如果是同步更新：会触发 3次渲染。所以 React 会先 收集更新，然后一次性执行。
```

React 的 setState / useState 并不是立即更新 state，而是通过 调度机制进行批量更新。
这样可以把多次 state 更新合并成一次渲染，提高性能。同时 React16 之后引入 Fiber 架构，可以根据任务优先级进行调度，避免长时间阻塞 UI。因此 React 采用了这种异步更新策略。

## 1.什么是 React Server Components
组件在服务器运行
结果发送给客户端

好处：
1）减少 JS bundle
2）提升性能
3）更好的数据获取方式

## 2.为什么 RSC 不能使用 useState
Server Component 不会在浏览器执行，而 useState 是浏览器交互状态。


## 3.什么是 Hydration

Hydration 是 React 在服务端渲染中的一个过程。服务器先生成 HTML 返回给浏览器，浏览器展示静态页面。随后客户端加载 React JavaScript，并将 React 组件与已有 DOM 结构绑定，同时注册事件监听器，使页面变成交互式应用。这个过程就叫 Hydration。

|      | Hydration | Re-render |
| ---- | --------- | --------- |
| DOM  | 复用已有 DOM  | 重新生成      |
| 发生时间 | 首次加载      | 状态变化      |
| 目的   | 绑定 React  | 更新 UI     |

## 4. React Streaming 

React Streaming 是 React 18 提供的流式服务端渲染能力，它允许服务器在 HTML 完整生成之前就开始向客户端发送内容。通过 Suspense 机制，React 可以先返回已经准备好的组件，而延迟加载较慢的部分，从而提升首屏加载速度和用户体验。

## 5. React 缓存

```js
同一个请求, 只会请求一次，React 内部做了：request deduplication
await fetch('/api/user')
await fetch('/api/user')
```

- Data Cache（数据缓存）

```js
//  默认cache: force-cache
fetch('/api/posts')

// 关闭缓存
fetch('/api/posts', {
  cache: "no-store"
})
```

- 4 Router Cache（客户端缓存）

```js
用户访问： /proudcts

在返回：/home

再回去：/proudcts

不会重新请求。

```

Next.js 13 引入了多层缓存机制来提升性能，包括 Request Memoization、Data Cache、Full Route Cache 和 Router Cache。React 会自动去重相同的请求，Next.js 默认缓存 fetch 请求数据，同时缓存页面 HTML，并在客户端缓存路由数据。通过 revalidate、cache 和 dynamic 等配置，可以控制缓存策略，实现 SSR、SSG 和 ISR 等不同渲染模式。

# nest.js 面试题

## NestJS 有 6个核心概念：

x| 概念         | 作用      |
| ---------- | ------- |
| Module     | 模块      |
| Controller | 控制器     |
| Service    | 业务逻辑    |
| Provider   | 依赖注入    |
| Middleware | 中间件     |
| Pipe       | 数据转换/校验 |

## 1.怎么写一个装饰器
装饰器本质是一个函数，可以作用在类、方法、属性或参数上。
在 TypeScript 中通常通过 Reflect Metadata 存储元数据。
NestJS 的装饰器例如 @Controller、@Get、@Body 本质上都是在类或方法上挂载 metadata，然后在运行时通过 Reflect.getMetadata 读取并执行对应逻辑。


## 怎么理解NestJS 请求生命周期顺序

```
Middleware
↓
Guard
↓
Interceptor (before)
↓
Pipe
↓
Controller
↓
Service
↓
Interceptor (after)
↓
Response
```

1: 用一个真实请求来理解

/users/123

- 1 Middleware（中间件）

最先执行。

作用：
日志
cors
token解析

```js
function logger(req, res, next) {
  console.log(req.url)
  next()
}
```

- 2 Guard（守卫）

如：权限控制
是否登录
是否管理员
是否有权限访问

```js
@UseGuards(AuthGuard)

核心方法:
canActivate(context: ExecutionContext)

返回:
true  → 继续执行
false → 拒绝访问
```

- 3 Interceptor (before)
拦截器开始执行。

作用：
请求日志
请求缓存
修改 response

```js
@UseInterceptors(LoggingInterceptor)

Interceptor 是 AOP思想。
```

- 4 Pipe（管道）
数据转换 / 参数校验

```js
Pipe 可以：string → number

@Get(':id')
find(@Param('id', ParseIntPipe) id: number)

```
- 5 Controller（控制器）

真正的路由处理。

负责：

接收请求
调用 service
返回数据

```js
@Get(':id')
getUser(@Param('id') id: number) {
  return this.userService.getUser(id)
}
```

- 6 Service（业务逻辑）
业务逻辑：
查数据库
调用 API
计算逻辑

- 7 Interceptor (after)

Controller 执行完之后。

Interceptor 会继续执行。

作用：

修改返回数据

统一 response 格式

记录接口耗时

```js
{
  "code": 200,
  "data": {}
}
```

- 8 Response（响应）

HTTP 200


## webpack 编译流程

解析入口文件，找到哪些文件需要添加到webpack的依赖中

调用const EntryPlugin = require("webpack/lib/EntryPlugin")的EntryPlugin函数，这个是webpack的内部插件，然后将入口文件添加到依赖中

输出的时候，我们可以控制输入打包的文件名称，大小，输出的路径等

Compiler 是webpack的主要引擎，可以创建一个compilation。Compiler他是继承Tapable类，是为了注册和调用插件。大多数面向用户的插件会首先在Compiler上注册。

Compilation 模块会被 Compiler 用来创建新的 compilation 对象（或新的 build 对象）。 compilation 实例能够访问所有的模块和它们的依赖（大部分是循环依赖）。 它会对应用程序的依赖图中所有模块， 进行字面上的编译(literal compilation)。 在编译阶段，模块会被加载(load)、封存(seal)、优化(optimize)、 分块(chunk)、哈希(hash)和重新创建(restore)。


## 手写Primise原理

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		function MyPromise(excutor) {
			let self = this;
			self.status = 'pending';
			self.resolveCallBackFn = [];
			self.rejectCallBackFn = [];

			function resolveFn(value) {
				setTimeout(() => {
					if(self.status == 'pending') {
						self.status = 'fulfilled'
				    self.value = value;
				    self.resolveCallBackFn.forEach(fn => fn(self.value))
					}
					
				})
				
			}

			function rejectFn(reson) {
				self.status = 'rejected'
				self.reson = reson;
				self.rejectCallBackFn.forEach(fn => fn(self.reson))
			}

			excutor(resolveFn, rejectFn);

		}

		function resolveMyPrimise(x, resolve, reject) {
			if(typeof x === 'object') {
				resolve(x)
			}
			
		}

		MyPromise.prototype.then = function(resolveFn, rejectFn) {
			let promise2,
			    self = this;
			if(self.status == 'pending') {
				promise2 = new MyPromise((resolve, reject) => {
					self.resolveCallBackFn.push((value) => {
						let x  = resolveFn(value);
						resolveMyPrimise(x, resolve, reject)
					})

					self.rejectCallBackFn.push(value => {
						let x = rejectFn(value);
						resolveMyPrimise(x, resolve, reject)
					})


				})
			}

			return promise2
			
		}

		var test = new MyPromise((res, rej) => {
			setTimeout(() => {
				res({name: 'wzh', age: 23})
			}, 1000)
		})

		test.then((res) => {
			res['address'] = 'sz'
			return res;
		}).then(res => {
			res['emial'] = '147@qq,com'
			return res
		}).then(res => {
			console.log(res)
		})

	</script>
</body>
</html>
```


## nextjs 性能优化

- 1. 选择正确的渲染策略

| 渲染方式 | 作用     | 使用场景 |
| ---- | ------ | ------ |
| CSR  | 客户端渲染  | 浏览器渲染页面,动态交互或私有页面 |
| SSR  | 服务端渲染  | 每次请求生成 HTML,实时数据、个性化页面 |
| SSG  | 静态生成   | 构建时生成 HTML,内容静态、不常 |
| ISR  | 增量静态生成 | SSG + 定时刷新 内容偶尔更新 |

其中：基于用户请求触发的重新生成 + 带时间控制的缓存失效。不是后台定时任务
而是请求触发更新

```
缓存过期 + 有用户访问
↓
才触发重新生成

如果：一天没人访问, 页面：不会更新
```

- 2. 代码分割

动态组件加载

```js
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('./Chart'), {
  ssr: false
})

减少首屏 JS
按需加载组件
```

- 3. 缓存优化
Next.js 支持 多层缓存。

```js
1.HTTP Cache:

Cache-Control: s-maxage=60

2: API Cache

fetch(url, {
  next: { revalidate: 60 }
})

```

- 4. 减少 JS 体积
Tree Shaking,删除未使用代码。

- 5. 优化数据请求
瀑布流请求

- 6. CDN 加速

静态资源,可以直接 CDN 缓存。
```
JS
CSS
Image
```