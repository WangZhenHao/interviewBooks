# css知识点

### 说说盒子模型
CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。
盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

- Margin(外边距) - 清除边框外的区域，外边距是透明的。
- Border(边框) - 围绕在内边距和内容外的边框。
- Padding(内边距) - 清除内容周围的区域，内边距是透明的。
- Content(内容) - 盒子的内容，显示文本和图像。


### 1.css3中的box-sizing的三个特性

- content-box：默认,border和padding不记入width之内。是w3c标准盒子模型
- Border-box: border,padding计算入width之内,
- Padding-box: padding计入width之内,只有firefox实现这个值
- Inherit: 父元素继承 box-sizing 属性的值。

### 2.display:none和visible:hidden的区别

前者隐藏元素,在布局中不给它分配空间,后者隐藏元素,但任然保留对应的空间

### 3.rem和em的区别

em现对于父元素,rem现对于根元素

### 4.css实现单行文字省略和多行文字省略

```
一: 单行文字省略
.ellipsis {
  overflow: hidden;
  white-space: nowrap;// 属性设置如何处理元素内的空白。
  text-overflow: ellipsis;// 属性规定当文本溢出包含元素时发生的事情。
  width: 100px;
}
```
```
二: 多行文字省略
.ellipsis2 {
  width: 200px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /**属性规定框的子元素应该被水平或垂直排列。**/
  -webkit-line-clamp: 3; /**限制在一个块元素显示的文本的行数。**/
  overflow: hidden;  /** 隐藏超出的内容 **/
}
```

### 5.清除浮动有几种方式,各自额优缺点

- 1.使用空标签清除浮动clear:both
```
优点: 能清除任何标签.
缺点: 增加无意义的标签
```
- 2.给父级添加overflow:hidden 

- 3.after伪类 清浮动
```
选择符:after{
        content:".";
        clear:both;
        display:block;
        height:0;
        overflow:hidden;
        visibility:hidden;
     }
```

- 4.父级div定义 height
```
优点: 简单、代码少、容易掌握 
缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题
```
- 5.父级div 也一起浮动
```
优点：没有优点 
缺点：会产生新的浮动问题。 
```

### 6.垂直居中有几种实现方式,分别是什么

- 一:单行行内元素
```
1,height和line-height设置为相等
2,设置padding-bottom和padding-top
```
- 二: 可以将元素专为table,这是vertical-align
```
#wrap {
    height: 500px;
    width: 500px;
    display: table-cell;
    vertical-align:middle;
    border-style:double;
}
<div id="wrap">
  <div id="content">多行文字居中多行文字居中多行文字居中多行文字居中多行文字居中多行文字居中多行文字居中多行文字居中
  <img src="http://img.taopic.com/uploads/allimg/140320/235013-14032020515270.jpg" width="40">
   </div>
</div>
```
- 三: 绝对定位来实现垂直居中
```
.child {
  Position:absolute;
  Top; 50%;
  Left: 50%;
  Transform: translate3d(-50%, -50% ,0);
}
```

- flex布局
```
.flex-wrap {
       display: flex;
       justify-content: center;
       align-items: center;
}
.flex-item {
		width: 50px;
		height: 10px;
		border: 1px solid yellow;
	}
<div class="flex-wrap">
	  <div class="flex-item"></div>
	  <div class="flex-item"></div>
	  <div class="flex-item"></div>
</div>
```

