(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{758:function(t,a,s){"use strict";s.r(a);var r=s(17),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自定义tabbar的封装与使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义tabbar的封装与使用"}},[t._v("#")]),t._v(" 自定义tabbar的封装与使用")]),t._v(" "),s("blockquote",[s("p",[t._v("微信小程序官方文档为我们提供了自定义tab的相关说明")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义 tabBar | 微信开放文档 (qq.com)"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下面我总结一下我使用自定义封装tab整体的封装与使用思路")])]),t._v(" "),s("h2",{attrs:{id:"封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),s("h3",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),s("p",[t._v("在官方文档中给出了演示示例，我们下载后可以直接将"),s("code",[t._v("custom-tab-bar")]),t._v("文件存在我们的项目根目录位置。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/hogB/Img/main/202207030903920.png",alt:"image-20220703090328887"}})]),t._v(" "),s("p",[t._v("麻雀虽小五章俱全，官方给出的实例代码很齐全，我们只需要根据我们不同的需求来进行自由操作即可，下面我列举出自己根据不同场景封装tab的例子")]),t._v(" "),s("h3",{attrs:{id:"换肤需求实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#换肤需求实战"}},[t._v("#")]),t._v(" 换肤需求实战")]),t._v(" "),s("blockquote",[s("p",[t._v("一个可以根据主题更换"),s("code",[t._v("icon")]),t._v("的tab组件")])]),t._v(" "),s("p",[t._v("产品：tab底下的icon可以根据季节切换吗")]),t._v(" "),s("p",[t._v("我：可以，马上实现")]),t._v(" "),s("p",[t._v("我们可以看到基本的tab数据配置是这样的")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("selected")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#7A7E83"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("selectedColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#3cc51f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pagePath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/index/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("iconPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/image/icon_component.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("selectedIconPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/image/icon_component_HL.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"组件"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pagePath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/index/index2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("iconPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/image/icon_API.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("selectedIconPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/image/icon_API_HL.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"接口"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);