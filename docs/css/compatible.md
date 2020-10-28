# 常见兼容性问题
浏览器的兼容性无非还是样式兼容性（css），交互兼容性（javascript），浏览器 hack 三个方面。

### 1.JavaScript中的Date对象在Safari与IOS中的坑

var date =new Date("2018-07-25 19:25");
这段代码是获得字符中指定的日期，它Firefox、Chrome中就能运行，但是放在Safari就会报错，错误是NaN
```
//将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
var value = '2018-07-25 19:25';
value = value.replace(/\-/g, "/");
```

### 2.禁止图片点击放大
部分安卓手机点击图片会放大，如需要禁止放大，只需要设置css属性
```
img{ 
    pointer-events: none; 
} 
```

### 3.上下拉动滚动条时卡顿、慢

```
body {
-webkit-overflow-scrolling: touch;
overflow-scrolling: touch;
}
```

### 4.清除button,input,a标签的默认样式
```
a:hover, a:active,button,input:focus{
  outline: none;
  border: none;
}
```

### 5.获取 scrollTop 通过 document.documentElement.scrollTop 兼容非chrome浏览器

```
 var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;

```