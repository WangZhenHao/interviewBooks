# # 20260318面试准备

## 1. 主应用和子应用样式冲突了怎么办？
- 方案1：命名空间（最基础）

```html
<div id="subapp-react"></div>
<div id="subapp-vue"></div>

#subapp-react button {
  color: blue;
}
```

- 方案2：CSS Module

```css
/* button.module.css */
.btn {
  color: blue;
}

.btn_abc123

```


3. 方案3：Shadow DOM（隔离最彻底⭐）

```js
const shadow = element.attachShadow({ mode: 'open' });
```

- 方案4：微前端框架自带隔离（重点⭐）

```js
start({
  sandbox: {
    strictStyleIsolation: true
  }
});

start({
  sandbox: {
    experimentalStyleIsolation: true
  }
});


👉 会自动给子应用所有 CSS 加前缀：
[data-qiankun-react] .btn { ... }
```

- 方案5：PostCSS 自动加前缀（工程化推荐⭐）

## 2.微前端是怎么做到隔离的

- 最核心：JS 运行环境隔离（沙箱）,多个子应用都会往全局挂变量：它会给每个子应用创建一个“假的 window”

```js
// 多个子应用都会往全局挂变量：
window.name = 'app1'
window.name = 'app2'

// 它会给每个子应用创建一个“假的 window”
const fakeWindow = new Proxy(window, {
  get(target, key) {
    return target[key];
  },
  set(target, key, value) {
    sandbox[key] = value;
    return true;
  }
});

// 👉 子应用操作的是 fakeWindow，而不是真实 window
子应用 A：window.a = 1
子应用 B：window.a = 2
```

```js
// 1. 创建沙箱
const sandbox = new Proxy(window, {})

// 2. 加载子应用 HTML
const html = await fetch(url)

// 3. 提取 JS
const scripts = extractScripts(html)

// 4. 在沙箱中执行
scripts.forEach(code => runInSandbox(code, sandbox))

```