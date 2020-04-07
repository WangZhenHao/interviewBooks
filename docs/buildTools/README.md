# 前端构建工具

### 1.AMD，CMD，CommonJS和ES6的对比

- 1.AMD

AMD是RequireJS在推广过程中对模块定义的规范化产出。

AMD规范则是非同步加载模块，允许指定回调函数。

AMD标准中，定义了下面两个API：

```


1.require([module], callback)
2.define(id, [depends], callback)
　　即通过define来定义一个模块，然后使用require来
加载一个模块。 并且，require还支持CommonJS的模块导出方式。

test.js
define(['package/lib',...], function(lib) {
    function foo () {
        lib.log('hello world');
    }

    return {
      foo: foo
    }
});

require(['test'], function(test) {
  test.foo()
})
```

- 2.CMD

CMD是SeaJS在推广过程中对模块定义的规范化产出。
```
//所有模块都通过define来定义
define(function(require, exports, module) {  
  // 通过require引入依赖
  var $ = require('jquery');
  var Spinning = require('./spinning');
  exports.doSomething = ...
  module.exports = ...
})

二者的区别是前者是对于依赖的模块提前执行，
而后者是延迟执行。 前者推崇依赖前置，而后
者推崇依赖就近，即只在需要用到某个模块的时候再require。

```

- 3.CommonJS规范---module.exports

前端浏览器不支持，Nodejs中使用的是这个规范
```
exports.area = function(r) {
   return Math.PI * r * r;
}
exports.circleCumference= function(r) {
   return Math.PI * r * r;
}

CommonJS的核心思想就是通过 require 方法来同步加
载所要依赖的其他模块，然后通过
 exports 或者 module.exports 来导出需要暴露的接口。

```

- 4.ES6---export/import

在ES6中，我们可以使用 import 关键字引入模块，通过 exprot 关键字导出模块，功能较之于前几个方案更为强大，也是我们所推崇的，但是由于ES6目前无法在浏览器中执行，所以，我们只能通过babel将不被支持的import编译为当前受到广泛支持的 require。

```
import App from './App.vue'
export default {
   props: ['num']
}

```

### 2.npm包发布命令
```
npm publish --registry http://registry.npmjs.org
```

### 3.webpack中的externals

防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)

```
externals: {
  'weixin-js-sdk': 'wx'
}
```