# css3的新特性

- CSS3选择器
- CSS3 边框（Borders）
- CSS3 背景
- CSS3 文本效果
- CSS3 渐变
- CSS3 字体
- CSS3 转换和变形
- CSS3 过渡
- CSS3 动画
- CSS3 盒模型
- CSS3伸缩布局盒模型(弹性盒)
- CSS3 多媒体查询

### 2.flex布局
容器默认存在两个轴：水平的主轴和垂直的交叉轴

#### 设置在容器上的6个属性

flex-direction 属性决定主轴的方向
```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

flex-wrap默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认 row nowrap。
```
.box{
    flex-flow:<flex-direction> || <flex-wrap>;
}
```
justify-content属性定义了项目在主轴上的对齐方式
```
.box{
    justify-content:flex-start | flex-end | center | space-between |space-around;
}
flex-start（默认值）：左对齐
flex-end：右对齐
center：居中
space-between:两端对齐，项目之间的间隔都相等
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```

align-items属性定义项目在交叉轴上如何对齐。
```
.box{
    align-items:flex-start | flex-end | center |baseline | stretch;
}
flex-start：交叉轴的起点对齐
flex-end:交叉轴的终点对齐
center：交叉轴的中点对齐
baseline：项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
```
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```
#### 项目的属性

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0.
```
.item{
    order:<integer>;
}
```
flex-grow属性定义项目的放大比例，默认值为0，即如果存在剩余空间，也不放大。
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目为1，则牵着占据的剩余空间将比其他项多一倍
```
.item{
    flex-grow:<number>;/* default 0*/
}
```
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，改项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。
```
.item{
    flex-shrink:<number>;/* default 1 */
}
```

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
```
.item{
    flex-basis:<length> | auto ; /*default auto*/
}
```
flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。后面两个属性可选
```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，等同于stretch。
```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```