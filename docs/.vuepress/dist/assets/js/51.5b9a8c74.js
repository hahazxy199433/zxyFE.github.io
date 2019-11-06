(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{244:function(t,v,_){"use strict";_.r(v);var r=_(0),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"《图解-http》"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#《图解-http》"}},[t._v("#")]),t._v(" 《图解 HTTP》")]),t._v(" "),_("p",[t._v("最近阅读完图解 http，扫盲了一次 http 基础，在此写一下总结。")]),t._v(" "),_("h2",{attrs:{id:"了解-web-及网络基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#了解-web-及网络基础"}},[t._v("#")]),t._v(" 了解 web 及网络基础")]),t._v(" "),_("h3",{attrs:{id:"tcp-ip-架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-架构"}},[t._v("#")]),t._v(" TCP/IP 架构")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("协议层")]),t._v(" "),_("th",[t._v("协议")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("应用层")]),t._v(" "),_("td",[t._v("http")]),t._v(" "),_("td",[t._v("生成基于目标服务器的 http 请求报文")])]),t._v(" "),_("tr",[_("td",[t._v("传输层")]),t._v(" "),_("td",[t._v("tcp")]),t._v(" "),_("td",[t._v("为了方便通信，将 http 请求报文分割成报文段")])]),t._v(" "),_("tr",[_("td",[t._v("网络层")]),t._v(" "),_("td",[t._v("ip")]),t._v(" "),_("td",[t._v("搜索对方的地址，一边中转一边传送")])]),t._v(" "),_("tr",[_("td",[t._v("数据链路层")]),t._v(" "),_("td",[t._v("网络")]),t._v(" "),_("td",[t._v("处理请求")])])])]),t._v(" "),_("h2",{attrs:{id:"简单的-http-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单的-http-协议"}},[t._v("#")]),t._v(" 简单的 http 协议")]),t._v(" "),_("p",[t._v("http 是无状态的协议。")]),t._v(" "),_("h3",{attrs:{id:"请求报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[t._v("#")]),t._v(" 请求报文")]),t._v(" "),_("p",[t._v("请求报文是由请求方法、请求 URI、协议版本、可选的请求首部字段和内容实体构成。")]),t._v(" "),_("h3",{attrs:{id:"响应报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[t._v("#")]),t._v(" 响应报文")]),t._v(" "),_("p",[t._v("响应报文是由协议版本、状态码、状态码短语、可选的响应首部字段以及实体主体构成。")]),t._v(" "),_("h3",{attrs:{id:"常用的请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的请求方法"}},[t._v("#")]),t._v(" 常用的请求方法")]),t._v(" "),_("ul",[_("li",[t._v("GET 获取资源。")]),t._v(" "),_("li",[t._v("POST 传输实体的主体。")]),t._v(" "),_("li",[t._v("PUT 传输文件。")]),t._v(" "),_("li",[t._v("HEAD 获得报文首部（类似 get，不返回报文实体）。")]),t._v(" "),_("li",[t._v("DELETE 删除文件。")]),t._v(" "),_("li",[t._v("OPTIONs 询问支持的方法。")]),t._v(" "),_("li",[t._v("TRACE 追踪路径（让服务器将之前的请求通信返回给客户端）。")]),t._v(" "),_("li",[t._v("CONNECT 要求用隧道协议连接代理（主要使用 SSL）。")])]),t._v(" "),_("h3",{attrs:{id:"持久化链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#持久化链接"}},[t._v("#")]),t._v(" 持久化链接")]),t._v(" "),_("p",[t._v("持久连接 keep-live，串行输入，第二个请求需等待第一个请求响应完才能执行。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("持久链接示例")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("建立 TCP 连接")])]),t._v(" "),_("tr",[_("td",[t._v("请求 1-----\x3e")])]),t._v(" "),_("tr",[_("td",[t._v("<-----响应 1")])]),t._v(" "),_("tr",[_("td",[t._v("请求 2-----\x3e")])]),t._v(" "),_("tr",[_("td",[t._v("<-----响应 2")])]),t._v(" "),_("tr",[_("td",[t._v("关闭 TCP 连接")])])])]),t._v(" "),_("p",[t._v("管线化，多个请求可同时发出，不需等待。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("管线化示例")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("建立 TCP 连接")])]),t._v(" "),_("tr",[_("td",[t._v("请求 1-----\x3e")])]),t._v(" "),_("tr",[_("td",[t._v("请求 2-----\x3e")])]),t._v(" "),_("tr",[_("td",[t._v("<-----响应 1")])]),t._v(" "),_("tr",[_("td",[t._v("<-----响应 2")])]),t._v(" "),_("tr",[_("td",[t._v("关闭 TCP 连接")])])])]),t._v(" "),_("h2",{attrs:{id:"http-报文内的-http-信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-报文内的-http-信息"}},[t._v("#")]),t._v(" http 报文内的 http 信息")]),t._v(" "),_("h3",{attrs:{id:"http-报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-报文"}},[t._v("#")]),t._v(" http 报文")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("http 报文")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("报文首部")])]),t._v(" "),_("tr",[_("td",[t._v("空行（CR+LF）")])]),t._v(" "),_("tr",[_("td",[t._v("报文主体")])])])]),t._v(" "),_("h2",{attrs:{id:"返回结果的-http-状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#返回结果的-http-状态码"}},[t._v("#")]),t._v(" 返回结果的 http 状态码")]),t._v(" "),_("ul",[_("li",[t._v("200 OK 请求成功。")]),t._v(" "),_("li",[t._v("204 No Content 请求处理成功，但没有资源返回。")]),t._v(" "),_("li",[t._v("206 Partial Content 请求到资源的一部分。")]),t._v(" "),_("li",[t._v("301 Move Permanently 永久重定向。")]),t._v(" "),_("li",[t._v("302 Found 临时重定向。")]),t._v(" "),_("li",[t._v("303 See Other 临时重定向，采用 get 方法。")]),t._v(" "),_("li",[t._v("304 Not Modified 没有改变。")]),t._v(" "),_("li",[t._v("307 Temporary Redirect 临时重定向，采用之前的方法，不会强制使用 get 方法。")]),t._v(" "),_("li",[t._v("400 Bad Request 请求报文中存在语法错误。")]),t._v(" "),_("li",[t._v("401 Unauthorized 发送的请求需要有认证信息。")]),t._v(" "),_("li",[t._v("403 Forbidden 请求的资源被服务器拒绝。")]),t._v(" "),_("li",[t._v("404 Not Found 没有找到对应资源。")]),t._v(" "),_("li",[t._v("500 Internal Server Error 服务器端报错。")]),t._v(" "),_("li",[t._v("503 Service Unavaliable 服务器超负载或在维护。")])]),t._v(" "),_("h2",{attrs:{id:"与-http-协作的-web-服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#与-http-协作的-web-服务器"}},[t._v("#")]),t._v(" 与 http 协作的 web 服务器")]),t._v(" "),_("h3",{attrs:{id:"通信数据转发程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通信数据转发程序"}},[t._v("#")]),t._v(" 通信数据转发程序")]),t._v(" "),_("p",[t._v("代理：")]),t._v(" "),_("p",[t._v("转发客户端请求到服务器，或转发服务器响应到客户端。")]),t._v(" "),_("p",[t._v("网关：")]),t._v(" "),_("p",[t._v("转发服务器通讯的服务器，可以处理请求，客户端不易察觉，可冒充服务器。可使用非 http 协议通讯。")]),t._v(" "),_("p",[t._v("隧道：")]),t._v(" "),_("p",[t._v("与服务器建立一条通讯线路，确保安全通信。")]),t._v(" "),_("h2",{attrs:{id:"http-首部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-首部"}},[t._v("#")]),t._v(" http 首部")]),t._v(" "),_("p",[t._v("首部字段")]),t._v(" "),_("p",[t._v("为了给浏览器和服务器提供报文主体大小，所使用的语言，认证信息等。")]),t._v(" "),_("p",[t._v("请求报文首部：方法，uri，http 版本，请求首部字段，通用首部字段，实体首部字段。")]),t._v(" "),_("p",[t._v("响应报文首部：http 版本，状态码，响应首部字段，通用首部字段，实体首部字段。")]),t._v(" "),_("h3",{attrs:{id:"通用首部字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通用首部字段"}},[t._v("#")]),t._v(" 通用首部字段")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("首部字段")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CaChe-Control")]),t._v(" "),_("td",[t._v("控制缓存机制")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("控制不再转发的首部字段，管理持久连接")])]),t._v(" "),_("tr",[_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("创建 http 报文的时间")])]),t._v(" "),_("tr",[_("td",[t._v("Trailer")]),t._v(" "),_("td",[t._v("事先说明报文主体后包含的首部字段")])]),t._v(" "),_("tr",[_("td",[t._v("Transfer-Encoding")]),t._v(" "),_("td",[t._v("传输报文采用的编码方式")])]),t._v(" "),_("tr",[_("td",[t._v("Upgrade")]),t._v(" "),_("td",[t._v("检测 http 协议以及其他协议是否可使用更高的版本进行通信")])]),t._v(" "),_("tr",[_("td",[t._v("Via")]),t._v(" "),_("td",[t._v("追踪客户端和服务器之间的请求和响应报文的传输路径")])]),t._v(" "),_("tr",[_("td",[t._v("Warning")]),t._v(" "),_("td",[t._v("告知客户缓存相关的问题警告")])])])]),t._v(" "),_("h3",{attrs:{id:"请求首部字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求首部字段"}},[t._v("#")]),t._v(" 请求首部字段")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("首部字段")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("通知服务器，用户代理能够处理的媒体类型以及媒体类型的优先级")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Charset")]),t._v(" "),_("td",[t._v("通知服务器，用户代理支持的字符集以及字符集的优先级")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Encoding")]),t._v(" "),_("td",[t._v("通知服务器，用户代理支持的内容编码以及内容编码的优先级")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Language")]),t._v(" "),_("td",[t._v("通知服务器，用户代理能够处理的自然语言集，以及优先级")])]),t._v(" "),_("tr",[_("td",[t._v("Authorization")]),t._v(" "),_("td",[t._v("通知服务器，用户代理的认证信息")])]),t._v(" "),_("tr",[_("td",[t._v("Except")]),t._v(" "),_("td",[t._v("通知服务器，期望出现的某种特定行为，如服务器不理解，返回 417")])]),t._v(" "),_("tr",[_("td",[t._v("From")]),t._v(" "),_("td",[t._v("通知服务器，用户代理的电子邮箱")])]),t._v(" "),_("tr",[_("td",[t._v("Host")]),t._v(" "),_("td",[t._v("通知服务器，请求资源的主机名和端口号，用于一台服务器多个 web 服务")])]),t._v(" "),_("tr",[_("td",[t._v("If-Match")]),t._v(" "),_("td",[t._v("如果 Etag 一致时服务器才接受请求")])]),t._v(" "),_("tr",[_("td",[t._v("If-Modified-Since")]),t._v(" "),_("td",[t._v("如果资源更新了，则希望能处理请求")])]),t._v(" "),_("tr",[_("td",[t._v("If-None-Match")]),t._v(" "),_("td",[t._v("如果 Etag 不一致时服务器才接受请求")])]),t._v(" "),_("tr",[_("td",[t._v("If-Range")]),t._v(" "),_("td",[t._v("范围请求")])]),t._v(" "),_("tr",[_("td",[t._v("If-Unmodified-Since")]),t._v(" "),_("td",[t._v("如果资源未更新，则希望处理请求")])]),t._v(" "),_("tr",[_("td",[t._v("Max-Forwards")]),t._v(" "),_("td",[t._v("没经过一层代理，字段值-1")])]),t._v(" "),_("tr",[_("td",[t._v("Proxy-Authorization")]),t._v(" "),_("td",[t._v("告知服务器认证信息")])]),t._v(" "),_("tr",[_("td",[t._v("Range")]),t._v(" "),_("td",[t._v("范围请求")])]),t._v(" "),_("tr",[_("td",[t._v("Referer")]),t._v(" "),_("td",[t._v("告知服务器请求的原始资源 URI")])]),t._v(" "),_("tr",[_("td",[t._v("TE")]),t._v(" "),_("td",[t._v("告知服务器客户端能够处理响应的传输编码，以及优先级")])]),t._v(" "),_("tr",[_("td",[t._v("User-Agent")]),t._v(" "),_("td",[t._v("告知服务器客户端信息")])])])]),t._v(" "),_("h3",{attrs:{id:"响应首部字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应首部字段"}},[t._v("#")]),t._v(" 响应首部字段")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("首部字段")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Accept-Ranges")]),t._v(" "),_("td",[t._v("告知客户端能否处理范围请求")])]),t._v(" "),_("tr",[_("td",[t._v("Age")]),t._v(" "),_("td",[t._v("告知客户端，源服务器在多久之前创建了响应")])]),t._v(" "),_("tr",[_("td",[t._v("ETag")]),t._v(" "),_("td",[t._v("告知客户端实体标识")])]),t._v(" "),_("tr",[_("td",[t._v("Location")]),t._v(" "),_("td",[t._v("将响应接收方引导至某个与请求 URI 位置不容的资源")])]),t._v(" "),_("tr",[_("td",[t._v("Proxy-Authenticate")]),t._v(" "),_("td",[t._v("把由代理服务器所要求的认证信息发送给客户端")])]),t._v(" "),_("tr",[_("td",[t._v("Retry-After")]),t._v(" "),_("td",[t._v("告知客户端多久以后再次发送请求")])]),t._v(" "),_("tr",[_("td",[t._v("Server")]),t._v(" "),_("td",[t._v("告知客户端服务器端信息")])]),t._v(" "),_("tr",[_("td",[t._v("Vary")]),t._v(" "),_("td",[t._v("对缓存进行控制")])]),t._v(" "),_("tr",[_("td",[t._v("WWW-Authenticate")]),t._v(" "),_("td",[t._v("用于 http 访问认证")])])])]),t._v(" "),_("h3",{attrs:{id:"实体首部字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实体首部字段"}},[t._v("#")]),t._v(" 实体首部字段")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("首部字段")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Allow")]),t._v(" "),_("td",[t._v("通知客户端能够支持的方法 Get，Head 等")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Encoding")]),t._v(" "),_("td",[t._v("告知客户端，服务器对实体的主体部分采用的内容编码")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Language")]),t._v(" "),_("td",[t._v("告知客户端，服务器对实体的主体部分使用的自然语言")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Length")]),t._v(" "),_("td",[t._v("实体的主体部分的发小")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Location")]),t._v(" "),_("td",[t._v("给出报文主体部分对应的 URI")])]),t._v(" "),_("tr",[_("td",[t._v("Content-MD5")]),t._v(" "),_("td",[t._v("检查报文主体在传输过程中是否保持完整")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Range")]),t._v(" "),_("td",[t._v("告知客户端返回的实体属于哪一部分")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Type")]),t._v(" "),_("td",[t._v("实体主体的媒体类型")])]),t._v(" "),_("tr",[_("td",[t._v("Expires")]),t._v(" "),_("td",[t._v("告知客户端资源失效的日期")])]),t._v(" "),_("tr",[_("td",[t._v("Last——modified")]),t._v(" "),_("td",[t._v("资源最终的修改时间")])])])]),t._v(" "),_("h2",{attrs:{id:"确保-web-安全的-https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#确保-web-安全的-https"}},[t._v("#")]),t._v(" 确保 web 安全的 https")]),t._v(" "),_("p",[t._v("http 缺点")]),t._v(" "),_("ul",[_("li",[t._v("通信使用铭文，内容可能会被窃听。")]),t._v(" "),_("li",[t._v("不验证通信方的身份，因此有可能遭遇伪装。")]),t._v(" "),_("li",[t._v("无法证明报文的完整性，所以有可能已遭篡改。")])]),t._v(" "),_("p",[t._v("https")]),t._v(" "),_("p",[t._v("http+加密+认证+完整性保护 = https")]),t._v(" "),_("p",[t._v("对称加密，非对称加密。\nhttps 慢，通信慢（加密解密耗时，http 通信部分变长）。")]),t._v(" "),_("h2",{attrs:{id:"确认访问用户身份认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#确认访问用户身份认证"}},[t._v("#")]),t._v(" 确认访问用户身份认证")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("认证方式")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("缺点")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Basic 认证")]),t._v(" "),_("td",[t._v("http 请求首部字段 Authorization")]),t._v(" "),_("td",[t._v("容易被窃听")])]),t._v(" "),_("tr",[_("td",[t._v("Digest 认证")]),t._v(" "),_("td",[t._v("认证时加上质询码，降低窃听危险")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("SSL 客户端认证")]),t._v(" "),_("td",[t._v("在客户端安装证书，以确保客户端身份")]),t._v(" "),_("td",[t._v("客户端必须安装证书，需要收费")])]),t._v(" "),_("tr",[_("td",[t._v("基于表单认证")]),t._v(" "),_("td",[t._v("Session+Cookie")]),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"基于-http-的功能追加协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于-http-的功能追加协议"}},[t._v("#")]),t._v(" 基于 http 的功能追加协议")]),t._v(" "),_("h3",{attrs:{id:"http-瓶颈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-瓶颈"}},[t._v("#")]),t._v(" http 瓶颈")]),t._v(" "),_("ul",[_("li",[t._v("一条连接上只可发送一个请求。")]),t._v(" "),_("li",[t._v("请求只能从客户端开始。客户端不可以接收除响应意外的指令。")]),t._v(" "),_("li",[t._v("请求/响应首部未经压缩就发送。首部信息越多延迟越大。")]),t._v(" "),_("li",[t._v("发送冗长的首部。每次互相发送相同的首部造成的浪费较多。")]),t._v(" "),_("li",[t._v("可任意选择数据压缩格式。非强制压缩发送。")])]),t._v(" "),_("h3",{attrs:{id:"解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),_("ul",[_("li",[t._v("ajax（局部更新）。")]),t._v(" "),_("li",[t._v("comet（长连接，耗费资源）。")]),t._v(" "),_("li",[t._v("SPDY")]),t._v(" "),_("li",[t._v("WebSocket")])]),t._v(" "),_("p",[t._v("在 http 层和 SSL 层之间，增加 SPDY 会话层，用以实现：")]),t._v(" "),_("ul",[_("li",[t._v("多路复用（只适用于同一域名下）")]),t._v(" "),_("li",[t._v("赋予请求优先级")]),t._v(" "),_("li",[t._v("压缩 http 首部")]),t._v(" "),_("li",[t._v("推送功能")]),t._v(" "),_("li",[t._v("服务器提示功能")])]),t._v(" "),_("p",[t._v("WebSocket：")]),t._v(" "),_("ul",[_("li",[t._v("不使用 http 协议，避免协议瓶颈。")]),t._v(" "),_("li",[t._v("推送功能。")]),t._v(" "),_("li",[t._v("减少通信量，首部信息小。")])]),t._v(" "),_("p",[t._v("Http2：")]),t._v(" "),_("ul",[_("li",[t._v("SPDY。")]),t._v(" "),_("li",[t._v("Http Speed + Mobility。")]),t._v(" "),_("li",[t._v("Network-Friendly Http Upgrade。")])]),t._v(" "),_("h2",{attrs:{id:"构建-web-内容的技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建-web-内容的技术"}},[t._v("#")]),t._v(" 构建 web 内容的技术")]),t._v(" "),_("ul",[_("li",[t._v("XML")]),t._v(" "),_("li",[t._v("JSON")])]),t._v(" "),_("h2",{attrs:{id:"web-的攻击技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-的攻击技术"}},[t._v("#")]),t._v(" web 的攻击技术")]),t._v(" "),_("ul",[_("li",[t._v("XSS。")]),t._v(" "),_("li",[t._v("SQL 注入攻击。")]),t._v(" "),_("li",[t._v("OS 命令注入攻击（只要能调用 shell 函数的地方就存在被攻击的风险）。")]),t._v(" "),_("li",[t._v("HTTP 首部注入攻击（增加空白行，篡改请求报文实体）。")]),t._v(" "),_("li",[t._v("目录遍历攻击（通过推测目录，获取本无权限获取的资源）。")]),t._v(" "),_("li",[t._v("远程文件包含漏洞（传递参数获取文件，可传递攻击者的文件）。")]),t._v(" "),_("li",[t._v("不正确的错误消息处理。")]),t._v(" "),_("li",[t._v("会话劫持（攻击者拿到用户会话 id 宠儿冒充用户）。")]),t._v(" "),_("li",[t._v("跨站点伪造请求 CSRF（通过设置陷阱，强制对已认证用户进行非预期的个人信息操作）。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);