# 20240929 面试

## 讲一讲垃圾回收机制?

浏览器的垃圾回收机制主要用于管理内存，自动释放不再使用的对象，以防止内存泄漏和优化性能。

引用计数：
每个对象都有一个引用计数器，当有新的引用指向该对象时，计数器加一；当引用被删除或超出作用域时，计数器减一。当计数器为零时，对象可以被回收。

标记-清除：
首先，遍历所有活动对象，标记可达的对象。然后，清除未被标记的对象。此方法更有效，但可能导致碎片化。

分代收集：
现代垃圾回收器通常使用分代收集策略。根据“新生代”对象（生命周期短）和“老生代”对象（生命周期长）进行分离。新生代对象更频繁地被回收，而老生代对象则较少被回收，优化了性能。


## 讲一下事件循环机制，什么是宏任务？什么是微任务？
事件循环机制是JavaScript处理异步操作的核心。它使得单线程环境能够高效地执行任务。

宏任务：
包括整体代码（主代码）、setTimeout、setInterval、I/O操作（浏览器在与用户、服务器或存储设备之间进行输入和输出的过程。这包括获取网页数据、处理用户输入、存储和读取缓存）等。每当事件循环开始时，它会从宏任务队列中取出一个任务执行。

微任务：
包括Promise的.then()、process.nextTick()（在Node.js中）等。微任务的优先级高于宏任务，事件循环在执行完当前宏任务后，会立即执行所有微任务，直到微任务队列为空。

工作流程
事件循环的工作流程是：首先执行一个宏任务，然后检查微任务队列，执行所有微任务，最后再进入下一个宏任务。这样的设计使得微任务可以在宏任务之间进行高优先级的处理，从而实现更流畅的异步编程。

## 面向对象编程和函数式编程的区别？
面向对象编程强调通过对象和类来组织代码，关注数据封装和继承，而函数式编程则侧重于使用纯函数和不可变数据，强调函数的组合和高阶函数

高阶函数（Higher-order Function）是指可以接受一个或多个函数作为参数，并且可以返回一个函数作为结果的函数。在函数式编程中，高阶函数是一个非常重要的概念，它可以帮助我们将代码写得更加简洁、灵活和可复用。

## 讲一下Promise和async/await

Promise和async/await都是JavaScript中处理异步操作的工具。

Promise: Promise是一种表示异步操作最终完成或失败的对象，可以用来处理异步结果。

async/await: async/await是基于Promise的语法糖，使得异步代码更易读、更像同步代码。


## async是Generator的语法糖，那Generator又是什么？怎么实现的？

## 讲一下Vuex数据是怎么流动的?

Vuex是Vue.js的状态管理库，主要用于管理应用的全局状态。它的数据流动过程通常遵循单向数据流的原则，以下是其基本流程：

1.State（状态）：
Vuex中的状态存储在store的state对象中，是应用的单一数据源。

2.Getters：
Getters用于从状态中派生出数据，相当于计算属性。组件可以通过store.getters访问。

3.Mutations：
修改状态的唯一方式是通过mutations。每个mutation都有一个类型和一个处理函数。组件通过store.commit('mutationType', payload)触发mutations。

4.Actions：
Actions可以包含异步操作，使用store.dispatch('actionType', payload)触发。它们可以调用mutations来改变状态，但不直接修改状态。

5.组件：
组件通过mapState和mapGetters等辅助函数将state和getters映射到组件的计算属性，或者通过this.$store.dispatch触发actions。

总结：
Vuex通过明确的数据流动路径，确保了状态管理的可预测性和可维护性，使得大型应用中的状态管理变得更加高效和清晰。

## vue2和vue3双向绑定的原理

## V-bind和v-model的区别

## 简历里面提到过项目部署，和kong路由配置，那个讲讲整个流程吧

## 低代码平台有没有了解过，怎么去设计组件与组件的协议（提到了jsonSchema，有点类似npm依赖关系）