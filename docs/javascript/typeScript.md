# typeScript考点

### 1:Typescript有哪些基础类型？
```js
1：number

2：string

3：boolean

4：Symbol

5：Array

6：Tuple(元组)

7：enum(枚举)

8：object

9：never

表示那些永不存在的值类型。如总是抛出异常或者根本不会有返回值的函数的返回值类型。

10：void

与any相反表示没有任何类型。函数没有返回值时用void。

11：null和undefined

它们是所有类型的子类型。当你指定structNullChecks时，它们只能赋值给void或者它们自己本身。

12：any

```

### 2.如何理解Typescript中的类？并说说它有什么特性？
```
Typescript是一种面向对象的Javascript语言，和其他任何面向对象编程的强语言一样，类是描述某一组对象共有属性状态或行为的实体。它就是构建具体对象实例的模板和蓝图。

特性：

1：继承

2：多态

3：抽象

4：封装

5：实例

```

### 3.说说什么Typescript中的泛型？作用是什么？
```
泛型代表的是泛指某一类型，更像是一个类型变量。由尖括号包裹<T>。
主要作用是创建逻辑可复用的组件。
泛型可以作用在函数、类、接口上。

```

### 4.说说接口interface和类型别名type的区别？

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

### 5.TypeScript联合类型
```
联合类型表示取值可以为多种类型中的一种

var muchtype:string|number = "hello";
muchtype = 1;
```
### 6.TypeScript 元组
```
我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。
元组中允许存储不同类型的元素，元组可以作为参数传递给函数。
```