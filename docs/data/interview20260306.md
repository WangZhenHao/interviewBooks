# 20260306面试准备

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