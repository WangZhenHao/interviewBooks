(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{317:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_20240929-面试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20240929-面试"}},[t._v("#")]),t._v(" 20240929 面试")]),t._v(" "),a("h2",{attrs:{id:"react-面试提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-面试提"}},[t._v("#")]),t._v(" react 面试提")]),t._v(" "),a("h3",{attrs:{id:"usecallback-和-usememo-的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usecallback-和-usememo-的使用场景"}},[t._v("#")]),t._v(" useCallback 和 useMemo 的使用场景")]),t._v(" "),a("p",[t._v("useCallback 和 useMemo 可以用来缓存函数和变量，提高性能，减少资源浪费。但并不是所有的函数和变量都需要用这两者来实现，他也有对应的使用场景。")]),t._v(" "),a("ul",[a("li",[t._v("useCallback 可以缓存函数体，在依赖项没有变化时，前后两次渲染时，使用的函数体是一样的。它的使用场景是：")])]),t._v(" "),a("p",[t._v("函数作为其他 hook 的依赖项时（如在 useEffect()中）；\n函数作为 React.memo()（或 shouldComponentUpdate ）中的组件的 props；\n主要是为了避免重新生成的函数，会导致其他 hook 或组件的不必要刷新。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ProductPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" productId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" referrer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" theme "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tell React to cache your function between re-renders...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handleSubmit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("orderDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/product/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" productId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/buy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      referrer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      orderDetails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("productId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" referrer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...so as long as these dependencies don't change...")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ...ShippingForm will receive the same props and can skip re-rendering */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ShippingForm onSubmit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleSubmit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("useMemo 用来缓存函数执行的结果。如每次渲染时都要执行一段很复杂的运算，或者一个变量需要依赖另一个变量的运算结果，就都可以使用 useMemo()。")])]),t._v(" "),a("h3",{attrs:{id:"为什么在本地开发时-组件会渲染两次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么在本地开发时-组件会渲染两次"}},[t._v("#")]),t._v(" 为什么在本地开发时，组件会渲染两次？")]),t._v(" "),a("p",[t._v("在 React.StrictMode 模式下，如果用了 useState,usesMemo,useReducer 之类的 Hook，React 会故意渲染两次，为的就是将一些不容易发现的错误容易暴露出来，同时 React.StrictMode 在正式环境中不会重复渲染。")]),t._v(" "),a("p",[t._v("也就是在测试环境的严格模式下，才会渲染两次。")]),t._v(" "),a("h2",{attrs:{id:"说说浏览器缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说浏览器缓存机制"}},[t._v("#")]),t._v(" 说说浏览器缓存机制")]),t._v(" "),a("h3",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),a("p",[t._v("强缓存允许浏览器直接使用缓存中的资源，而不与服务器进行任何通信，直到缓存过期。浏览器可以通过以下两种HTTP头来控制强缓存：")]),t._v(" "),a("p",[t._v("1、Expires：\n指定资源的过期时间，表示在指定时间点之前，资源可以直接从缓存中获取。格式如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Expires: Wed, 21 Oct 2025 07:28:00 GMT\n")])])]),a("p",[t._v("2、 Cache-Control\n这是现代浏览器最常用的缓存控制头，指定资源在多少秒内有效，使用相对时间（从资源请求的时间开始计时")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Cache-Control: max-age=3600\n")])])]),a("p",[t._v("Expires 和 Cache-Control 两者对比")]),t._v(" "),a("p",[t._v("其实这两者差别不大，区别就在于 Expires 是 http1.0 的产物，Cache-Control 是 http1.1 的产物，两者同时存在的话，Cache-Control 优先级高于 Expires；在某些不支持 HTTP1.1 的环境下，Expires 就会发挥用处。所以 Expires 其实是过时的产物，现阶段它的存在只是一种兼容性的写法。")]),t._v(" "),a("p",[t._v("强缓存判断是否缓存的依据来自于是否超出某个时间或者某个时间段，而不关心服务器端文件是否已经更新，这可能会导致加载文件不是服务器端最新的内容，那我们如何获知服务器端内容是否已经发生了更新呢？此时我们需要用到协商缓存策略。")]),t._v(" "),a("h3",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),a("p",[t._v("协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：")]),t._v(" "),a("p",[t._v("Last-Modified 和 If-Modified-Since：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Last-Modified：当服务器返回资源时，会标记该资源最后一次修改的时间。")])]),t._v(" "),a("li",[a("p",[t._v("ETag 和 If-None-Match：")])])]),t._v(" "),a("h3",{attrs:{id:"cache-control-其他常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-其他常用指令"}},[t._v("#")]),t._v(" Cache-Control 其他常用指令")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("no-cache：表示浏览器每次都必须与服务器协商资源的有效性，不能直接使用缓存资源，但如果服务器确认资源未修改，浏览器仍然可以使用缓存。")])]),t._v(" "),a("li",[a("p",[t._v("no-store：禁止浏览器和中间代理服务器缓存任何内容，所有资源必须每次都从服务器获取")])]),t._v(" "),a("li",[a("p",[t._v("public：允许任何缓存服务器（包括浏览器和中间代理）缓存该资源，通常用于不涉及敏感数据的资源。")])]),t._v(" "),a("li",[a("p",[t._v("private：仅允许浏览器缓存资源，中间代理服务器不能缓存，适用于用户相关的数据。")])])]),t._v(" "),a("h2",{attrs:{id:"讲一讲垃圾回收机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲一讲垃圾回收机制"}},[t._v("#")]),t._v(" 讲一讲垃圾回收机制?")]),t._v(" "),a("p",[t._v("浏览器的垃圾回收机制主要用于管理内存，自动释放不再使用的对象，以防止内存泄漏和优化性能。")]),t._v(" "),a("p",[t._v("引用计数：\n每个对象都有一个引用计数器，当有新的引用指向该对象时，计数器加一；当引用被删除或超出作用域时，计数器减一。当计数器为零时，对象可以被回收。")]),t._v(" "),a("p",[t._v("标记-清除：\n首先，遍历所有活动对象，标记可达的对象。然后，清除未被标记的对象。此方法更有效，但可能导致碎片化。")]),t._v(" "),a("p",[t._v("分代收集：\n现代垃圾回收器通常使用分代收集策略。根据“新生代”对象（生命周期短）和“老生代”对象（生命周期长）进行分离。新生代对象更频繁地被回收，而老生代对象则较少被回收，优化了性能。")]),t._v(" "),a("h2",{attrs:{id:"讲一下事件循环机制-什么是宏任务-什么是微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲一下事件循环机制-什么是宏任务-什么是微任务"}},[t._v("#")]),t._v(" 讲一下事件循环机制，什么是宏任务？什么是微任务？")]),t._v(" "),a("p",[t._v("事件循环机制是JavaScript处理异步操作的核心。它使得单线程环境能够高效地执行任务。")]),t._v(" "),a("p",[t._v("宏任务：\n包括整体代码（主代码）、setTimeout、setInterval、I/O操作（浏览器在与用户、服务器或存储设备之间进行输入和输出的过程。这包括获取网页数据、处理用户输入、存储和读取缓存）等。每当事件循环开始时，它会从宏任务队列中取出一个任务执行。")]),t._v(" "),a("p",[t._v("微任务：\n包括Promise的.then()、process.nextTick()（在Node.js中）等。微任务的优先级高于宏任务，事件循环在执行完当前宏任务后，会立即执行所有微任务，直到微任务队列为空。")]),t._v(" "),a("p",[t._v("工作流程\n事件循环的工作流程是：首先执行一个宏任务，然后检查微任务队列，执行所有微任务，最后再进入下一个宏任务。这样的设计使得微任务可以在宏任务之间进行高优先级的处理，从而实现更流畅的异步编程。")]),t._v(" "),a("h2",{attrs:{id:"面向对象编程和函数式编程的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程和函数式编程的区别"}},[t._v("#")]),t._v(" 面向对象编程和函数式编程的区别？")]),t._v(" "),a("p",[t._v("面向对象编程强调通过对象和类来组织代码，关注数据封装和继承，而函数式编程则侧重于使用纯函数和不可变数据，强调函数的组合和高阶函数")]),t._v(" "),a("p",[t._v("高阶函数（Higher-order Function）是指可以接受一个或多个函数作为参数，并且可以返回一个函数作为结果的函数。在函数式编程中，高阶函数是一个非常重要的概念，它可以帮助我们将代码写得更加简洁、灵活和可复用。")]),t._v(" "),a("h2",{attrs:{id:"讲一下promise和async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲一下promise和async-await"}},[t._v("#")]),t._v(" 讲一下Promise和async/await")]),t._v(" "),a("p",[t._v("Promise和async/await都是JavaScript中处理异步操作的工具。")]),t._v(" "),a("p",[t._v("Promise: Promise是一种表示异步操作最终完成或失败的对象，可以用来处理异步结果。")]),t._v(" "),a("p",[t._v("async/await: async/await是基于Promise的语法糖，使得异步代码更易读、更像同步代码。")]),t._v(" "),a("h2",{attrs:{id:"async是generator的语法糖-那generator又是什么-怎么实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async是generator的语法糖-那generator又是什么-怎么实现的"}},[t._v("#")]),t._v(" async是Generator的语法糖，那Generator又是什么？怎么实现的？")]),t._v(" "),a("h2",{attrs:{id:"讲一下vuex数据是怎么流动的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲一下vuex数据是怎么流动的"}},[t._v("#")]),t._v(" 讲一下Vuex数据是怎么流动的?")]),t._v(" "),a("p",[t._v("Vuex是Vue.js的状态管理库，主要用于管理应用的全局状态。它的数据流动过程通常遵循单向数据流的原则，以下是其基本流程：")]),t._v(" "),a("p",[t._v("1.State（状态）：\nVuex中的状态存储在store的state对象中，是应用的单一数据源。")]),t._v(" "),a("p",[t._v("2.Getters：\nGetters用于从状态中派生出数据，相当于计算属性。组件可以通过store.getters访问。")]),t._v(" "),a("p",[t._v("3.Mutations：\n修改状态的唯一方式是通过mutations。每个mutation都有一个类型和一个处理函数。组件通过store.commit('mutationType', payload)触发mutations。")]),t._v(" "),a("p",[t._v("4.Actions：\nActions可以包含异步操作，使用store.dispatch('actionType', payload)触发。它们可以调用mutations来改变状态，但不直接修改状态。")]),t._v(" "),a("p",[t._v("5.组件：\n组件通过mapState和mapGetters等辅助函数将state和getters映射到组件的计算属性，或者通过this.$store.dispatch触发actions。")]),t._v(" "),a("p",[t._v("总结：\nVuex通过明确的数据流动路径，确保了状态管理的可预测性和可维护性，使得大型应用中的状态管理变得更加高效和清晰。")]),t._v(" "),a("h2",{attrs:{id:"vue2和vue3双向绑定的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2和vue3双向绑定的原理"}},[t._v("#")]),t._v(" vue2和vue3双向绑定的原理")]),t._v(" "),a("h2",{attrs:{id:"v-bind和v-model的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-bind和v-model的区别"}},[t._v("#")]),t._v(" V-bind和v-model的区别")]),t._v(" "),a("h2",{attrs:{id:"简历里面提到过项目部署-和kong路由配置-那个讲讲整个流程吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简历里面提到过项目部署-和kong路由配置-那个讲讲整个流程吧"}},[t._v("#")]),t._v(" 简历里面提到过项目部署，和kong路由配置，那个讲讲整个流程吧")]),t._v(" "),a("h2",{attrs:{id:"低代码平台有没有了解过-怎么去设计组件与组件的协议-提到了jsonschema-有点类似npm依赖关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低代码平台有没有了解过-怎么去设计组件与组件的协议-提到了jsonschema-有点类似npm依赖关系"}},[t._v("#")]),t._v(" 低代码平台有没有了解过，怎么去设计组件与组件的协议（提到了jsonSchema，有点类似npm依赖关系）")])])}),[],!1,null,null,null);a.default=r.exports}}]);