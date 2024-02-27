# 算法考题

### 1.说说算法的复杂度

#### 常数阶O(1)
O(1)只是常量级时间复杂度的一种表示方法，并不是指只执行了一行代码，比如下面这段代码，即使有3行，他的时间复杂度也是O(1),而不是O(3)。一般情况下，只要算法中不存在循环语句、递归语句，即便有成千上万行代码，其时间复杂度也是O(1)。
```js
let i = 2;
let j = 5;
let sun = i + j;
```

#### 线性阶 O(n)
下面这段代码的时间复杂度为O(n)，因为循环体中的代码需要执行n次。
我们要分析算法的复杂度，关键就是要分析循环结构的运行情况。上面代码因为循环体中代码需要执行n次，所以时间复杂度为O(n)。
```js
let sum = 0;
for (let i=0;i<n;i++){
    sum = sum +i
}
```

#### 对数阶 O(logn) O(nlogn)
比如：二分法排序

对数阶时间复杂度非常常见。
从上面代码中可用看出，遍历从1开始，每循环一次就乘以2，当i大于n时循环结束。由于2的x次方等于n，x = log2n，这个循环的时间复杂度就是O(log2n)。不管是以2为底，还是以3为底，我们都可以把所有对数阶的时间复杂度计作：O(logn)。
```js
let i = 1;
while (i <= n) {
    i = i * 2
}
```

### 平方阶 O(n²)
比如： 冒泡排序
```js
for (let i=0;i<n;i++) {
    for (let j=o;j<n;j++) {
        /*时间复杂度为O(1)的程序步骤*/
    }
}
```

### 什么是防抖和节流？有什么区别？如何实现？

- 防抖——触发高频事件后 n 秒后函数只会执行一次，如果 n 秒内高频事件再
次被触发，则重新计算时间；
```js
function debounce (fn, wait) {
      var timer = null;
      return function () {
        var context = this
        var args = arguments
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(function () {
          fn.apply(context, args)
        }, wait)
      }
    }

```

- 节流——高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执
行频率。
```js
function throttle (fn, interval) {
      var _self = fn,
        timer,
        firstTime = true,
        _interval = interval || 500;


      return function () {
        var agr = arguments,
          me = this;
        if (firstTime) {
          _self.apply(me, agr);
          firstTime = false;
        }
        if (timer) {
          return false;
        }
        timer = setTimeout(function () {
          clearTimeout(timer)
          timer = null;
          _self.apply(me, agr);
        }, _interval)
      }
    }
```