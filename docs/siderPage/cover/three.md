### Web安全
### XSS
  - XSS 简单点来说，就是攻击者想尽一切办法将可以执行的代码注入到网页中。
     - 总体分成2类：
       - 持久型:  就是攻击的代码被服务端写入进数据库中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击


       -  非持久型: 一般通过修改 URL 参数的方式加入攻击代码，诱导用户访问链接从而进行攻击

##### 防御
  - 转义字符， 对于 富文本来说可以 通过黑名单过滤。。。, 相关插件 js-xss
### CSP
  - CSP 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行
  - 开启
    - 设置 HTTP Header 中的 Content-Security-Polic
    - 设置 meta 标签的方式 <meta http-equiv="Content-Security-Policy">
### CSRF
 - 中文名为 跨站请求伪造。 原理 就是攻击者构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。如果用户是在登录状态下的话，后端就以为是用户在操作，从而进行相应的逻辑。
##### 防御
- Get 请求不对数据进行修改
- 不让第三方网站访问到用户 Cookie
- 阻止第三方网站请求接口
- 请求时附带验证信息，比如验证码或者 Token
### 点击劫持
 - 点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击
##### 防御
- X-FRAME-OPTIONS

 - X-FRAME-OPTIONS 是一个 HTTP 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应头 就是为了防御用 iframe 嵌套的点击劫持攻击。

- 该响应头有三个值可选，分别是

 - DENY，表示页面不允许通过 iframe 的方式展示

 - SAMEORIGIN，表示页面可以在相同域名下通过 iframe 的方式展示

 - ALLOW-FROM，表示页面可以在指定来源的 iframe 中展示

- JS 防御

 - 对于某些远古浏览器来说，并不能支持上面的这种方式，那我们只有通过 JS 的方式来防御点击劫持了。

```javascript

<head>

    <style id="click-jack">html { display: none !important; } </style>

</head>

<body>


<script>
if (self == top) { var style = document.getElementById('click-jack') document.body.removeChild(style) } else { top.location = self.location }
</script>
</body>

```

### 中间人攻击
 - 中间人攻击是攻击方同时与服务端和客户端建立起了连接，并让对方认为连接是安全的，但是实际上整个通信过程都被攻击者控制了。攻击者不仅能获得双方的通信信息，还能修改通信信息。
 - 通常来说不建议使用公共的 Wi-Fi，因为很可能就会发生中间人攻击的情况。如果你在通信的过程中涉及到了某些敏感信息，就完全暴露给攻击方了
##### 防御
  - 增加安全通道来传输信息， 如： HTTPS协议
