# http相关知识点

### 1.http状态码：
```
400: Bad Request (错误的请求)
401: Unauthorized (请求要求身份验证)
403：Forbidden (服务器拒绝请求)
404：NOT Found (服务器找不到请求的资源)
405：Bad Request (禁用请求中指定的方法)
406：Not Acceptable (无法使用请求的内容特性响应请求的网页)
407：Proxy Authentication Required (需要代理授权)
408：Request Timed-Out (服务器等候请求时发生超时)
409：Conflict (服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息)
410：Gone (请求的资源已被永久删除)
411：Length Required (服务器不接受不含有效内容长度标头字段的请求)
412：Precondition Failed (未满足前提条件)
413：Request Entity Too Large (请求实体过大)
414：Request, URI Too Large (请求的 URI 过长)
415：Unsupported Media Type (不支持的媒体类型)
429：您的操作过于频繁,请稍后重试
500：Internal Server Error (服务器内部错误)
501：Not Implemented (尚未实施)
502：Bad Gateway (错误网关)
503：Server Unavailable (服务不可用)
504：Gateway Timed-Out (网关超时)
505：HTTP Version not supported (HTTP 版本不受支持)

```
### 2.http响应头信息
```
Content-Type: 表示后面的文档属于什么MIME类型。Servlet默认为text/plain，但通常需要显式地指定为text/html。由于经常要设置Content-Type，因此HttpServletResponse提供了一个专用的方法setContentType。
text/plain ：纯文本格式,
application/json： JSON数据格式,
application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
Last-Modified: 文档的最后改动时间。客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个304（Not Modified）状态。Last-Modified也可用setDateHeader方法来设置。
```