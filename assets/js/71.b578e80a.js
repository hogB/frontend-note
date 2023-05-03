(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{680:function(t,s,a){"use strict";a.r(s);var r=a(17),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/hogB/Img/main/202208281517163.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("blockquote",[a("p",[t._v("本文字数2.5k字，请读者耐心看完，会有收获，先赞后看，养成习惯")])]),t._v(" "),a("p",[a("strong",[t._v("执行上下文")]),t._v("在JS进阶中非常重要的，其内部的原理涉及到JS很多特性，而执行上下文中有很多难以理解的概念，比较抽象，令我们难以下咽，所以本文将以"),a("strong",[t._v("通俗易懂")]),t._v("的方式来带大家构建执行上下文的知识体系，下面将分别从"),a("strong",[t._v("概念")]),t._v("，"),a("strong",[t._v("分类")]),t._v("，"),a("strong",[t._v("创建")]),t._v("，"),a("strong",[t._v("执行")]),t._v("，"),a("strong",[t._v("销毁")]),t._v("，"),a("strong",[t._v("问题")])]),t._v(" "),a("h2",{attrs:{id:"概念📚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念📚"}},[t._v("#")]),t._v(" 概念📚")]),t._v(" "),a("p",[t._v("我根据官方文档以及内部原理对于执行上下文的概念理解大概为：在我们的JS代码开始执行的时候抽象出来的一个隔离环境，该环境通过一些方式存储并控制变量，函数的访问权限。")]),t._v(" "),a("p",[t._v("执行上下文为什么那么重要，因为它的原理牵扯到了很多问题，比如"),a("strong",[t._v("为什么"),a("code",[t._v("var")]),t._v("会发生变量提升现象而"),a("code",[t._v("let")]),t._v("与"),a("code",[t._v("const")]),t._v("不会")]),t._v("，又比如"),a("strong",[t._v("作用域是如何控制变量访问的")]),t._v("，文章最后会一一为大家解答，我们先来重点学习执行上下文创建，执行分别发生了什么。")]),t._v(" "),a("h2",{attrs:{id:"分类😶‍🌫️"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类😶‍🌫️"}},[t._v("#")]),t._v(" 分类😶‍🌫️")]),t._v(" "),a("p",[t._v("上下文分为三种，分别为："),a("strong",[t._v("全局上下文")]),t._v("，"),a("strong",[t._v("函数上下文")]),t._v("，"),a("strong",[t._v("Eval()函数上下文")]),t._v("，下面将主要讨论"),a("strong",[t._v("全局上下文")]),t._v("与"),a("strong",[t._v("函数上下文")])]),t._v(" "),a("ul",[a("li",[t._v("全局上下文：全局上下文在最外层，也就会涉及到我们熟知的顶层对象（"),a("code",[t._v("window")]),t._v("，"),a("code",[t._v("global")]),t._v("）")]),t._v(" "),a("li",[t._v("函数上下文：每个函数都有自己的执行上下文，所以称为函数上下文，函数的执行会触发函数上下文的一些行为")])]),t._v(" "),a("h2",{attrs:{id:"上下文创建🔛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下文创建🔛"}},[t._v("#")]),t._v(" 上下文创建🔛")]),t._v(" "),a("blockquote",[a("p",[t._v("上下文创建我们所需要知道的是创建时机及其生命周期，生命周期包括**"),a("code",[t._v("this")]),t._v("绑定**，"),a("strong",[t._v("词法环境创建")]),t._v("，"),a("strong",[t._v("变量环境创建")])])]),t._v(" "),a("p",[t._v("以伪代码形式来表示上下文的抽象结构，并进一步理解上下文创建发生的三个过程")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ExecutionContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ThisBinding "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  LexicalEnvironment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  VariableEnvironment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("一个上下文初始结构如上，"),a("code",[t._v("ThisBinding")]),t._v("为"),a("code",[t._v("this")]),t._v("绑定指向，"),a("code",[t._v("LexicalEnvironment")]),t._v("为词法环境对象，"),a("code",[t._v("VariableEnvironment")]),t._v("为变量环境对象，下文将具体介绍每个部分的伪代码的具体组成，以助于更好的理解")]),t._v(" "),a("h3",{attrs:{id:"创建时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建时机"}},[t._v("#")]),t._v(" 创建时机")]),t._v(" "),a("p",[t._v("不同类别上下文的创建时机也不同")]),t._v(" "),a("ul",[a("li",[t._v("全局上下文：当脚本被执行，就会立刻创建全局上下文")]),t._v(" "),a("li",[t._v("函数上下文：每当函数被执行，那么上下文会在执行前创建")])]),t._v(" "),a("h3",{attrs:{id:"this绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this绑定"}},[t._v("#")]),t._v(" this绑定")]),t._v(" "),a("p",[t._v("大家经常会用"),a("code",[t._v("this")]),t._v("但是关于"),a("code",[t._v("this")]),t._v("绑定是在哪个阶段进行的没有了解过，其实是在执行上下文创建的过程中将"),a("code",[t._v("this")]),t._v("指向它应该指向的对象，其中全局上下文和函数上下文创建过程中的"),a("code",[t._v("this")]),t._v("绑定不同")]),t._v(" "),a("ul",[a("li",[t._v("全局上下文：其"),a("code",[t._v("this")]),t._v("会指向全局对象（window，global等等）")]),t._v(" "),a("li",[t._v("函数上下文：其"),a("code",[t._v("this")]),t._v("会指向函数执行时的调用者（对象，全局或者其他）")])]),t._v(" "),a("p",[t._v("其实大家对于"),a("code",[t._v("this")]),t._v("的机制很熟悉，所以这部分也可以很直接地理解，那么疑问就来了，箭头函数的创建上下文是什么类别的呢？")]),t._v(" "),a("ul",[a("li",[t._v("首先箭头函数的上下文是"),a("strong",[t._v("函数上下文")])]),t._v(" "),a("li",[t._v("其次上下文是比较特殊的，它的上下文就是父级（函数or全局）的上下文")])]),t._v(" "),a("p",[t._v("箭头函数上下文的特性导致了其箭头函数内部的"),a("code",[t._v("this")]),t._v("是其定义所在的对象，另外也能想明白为什么箭头函数无法使用"),a("code",[t._v("arguments")]),t._v("参数对象，关于箭头函数无法使用参数对象这个问题我们看完下面的词法环境创建后就会理解。")]),t._v(" "),a("h3",{attrs:{id:"词法环境创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法环境创建"}},[t._v("#")]),t._v(" 词法环境创建")]),t._v(" "),a("blockquote",[a("p",[t._v("关于词法环境（"),a("code",[t._v("LexicalEnvironment")]),t._v("对象），掘友只需要记住其作用是"),a("strong",[t._v("解析当前上下文中由"),a("code",[t._v("const")]),t._v("与"),a("code",[t._v("let")]),t._v("声明的变量，将标识符与对应变量或者是函数关联起来")]),t._v("即可，上下文的创建于执行都会涉及到"),a("strong",[t._v("词法环境")]),t._v("的变化，让我们带着作用往下学习！")])]),t._v(" "),a("p",[t._v("词法环境是由一个环境记录器与一个外部环境引用构成")]),t._v(" "),a("ul",[a("li",[t._v("环境记录器：存储变量和函数的实际位置")]),t._v(" "),a("li",[t._v("外部环境引用：在词法环境中以属性值存储外部环境的引用地址，那么就可以访问父级环境的变量等一系列东西")])]),t._v(" "),a("p",[t._v("从上面两个组成角度看创建阶段发生了什么，下面这是一个基本词法环境的伪代码（空）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[a("code",[t._v("LexicalEnvironment")]),t._v("代表词法环境，"),a("code",[t._v("EnvironmentRecord")]),t._v("代表环境记录器，"),a("code",[t._v("outer")]),t._v("代表外部环境引用，我们使用**"),a("code",[t._v("let")]),a("strong",[t._v("或者")]),a("code",[t._v("const")]),a("strong",[t._v("声明的变量，会在创建词法环境的过程中解析，解析后并将其")]),t._v("标识符**存放在环境记录器中，以未初始化的形式保存，比如我声明了一个"),a("code",[t._v("a")]),t._v("变量，这个时候会在"),a("code",[t._v("EnvironmentRecord")]),t._v("存放标识符"),a("code",[t._v("a")]),t._v("，其值为"),a("code",[t._v("< uninitialized >")]),t._v("即未初始化。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n         "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \t "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("上面就是一个词法环境创建过程中发生了什么，我们回过头想起词法环境的作用："),a("strong",[t._v("解析当前上下文中由"),a("code",[t._v("const")]),t._v("与"),a("code",[t._v("let")]),t._v("声明的变量，将标识符与对应变量或者是函数关联起来")]),t._v("，那么创建阶段就是在解析声明后，存放标识符，而当前由于是"),a("code",[t._v("let")]),t._v("与"),a("code",[t._v("const")]),t._v("声明，并没有进行初始化，所以其值为"),a("code",[t._v("< uninitialized >")]),t._v("。")]),t._v(" "),a("p",[t._v("另外词法环境分为两种，其应用场景不相同")]),t._v(" "),a("ul",[a("li",[t._v("函数环境：函数执行上下文创建函数词法环境，其环境记录器为"),a("strong",[t._v("对象环境记录器")]),t._v("，，除此之外其"),a("strong",[t._v("外部环境引用")]),t._v("指向其父级上下文（可能是函数也可能是全局）。")]),t._v(" "),a("li",[t._v("全局环境：全局执行上下文会创建全局词法环境，其环境记录器为"),a("strong",[t._v("声明式环境记录器")]),t._v("，不包含"),a("code",[t._v("arguments")]),t._v("参数对象，由于没用父级，所以其"),a("strong",[t._v("外部环境引用")]),t._v("为"),a("code",[t._v("null")])])]),t._v(" "),a("h3",{attrs:{id:"变量环境创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量环境创建"}},[t._v("#")]),t._v(" 变量环境创建")]),t._v(" "),a("p",[t._v("变量环境（"),a("code",[t._v("VariableEnvironment")]),t._v("对象）其实也是一种词法环境，它与上面的词法环境不同的是，其解析的是"),a("code",[t._v("var")]),t._v("声明变量，存储标识符与对应的引用，其创建过程发生的事情和词法环境差不多，但是关于初始值上有一些差别，如下：")]),t._v(" "),a("p",[t._v("如果我们使用"),a("code",[t._v("var")]),t._v("声明一个变量"),a("code",[t._v("b")]),t._v("那么会在变量环境创建的时候解析，存放在环境记录器中，但是其值为"),a("code",[t._v("undefined")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("VariableEnvironment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"完整结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整结构"}},[t._v("#")]),t._v(" 完整结构")]),t._v(" "),a("p",[t._v("好了，我们现在能够将一个完整的上下文结构以伪代码形式表现出来")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ExecutionContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ThisBinding "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n         "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \t "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("VariableEnvironment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上下文的创建基本就是这样，不知道掘友有没有理解，如果没有理解可以反复阅读思考（我参考官方文档和各种文章学习了一个礼拜才算对上下文比较透彻），如果理解到位，那么就可以开始学习上下文执行都发生了什么。")]),t._v(" "),a("h2",{attrs:{id:"上下文执行🚶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下文执行🚶"}},[t._v("#")]),t._v(" 上下文执行🚶")]),t._v(" "),a("blockquote",[a("p",[t._v("上下文的创建是在脚本或函数执行前，而执行过程中会进行执行栈和负责相关的行为")])]),t._v(" "),a("h3",{attrs:{id:"执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行栈"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),a("p",[t._v("栈是一种先进后出数据结构，我们的上下文在执行过程正是存储在栈中，我们称作执行栈。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn_1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn_2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn_1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("我拿上面的脚本来给大家描述这一过程，上面的脚本包含了三个上下文，分别是全局上下文，"),a("code",[t._v("fn_1")]),t._v("函数上下文，"),a("code",[t._v("fn_2")]),t._v("函数上下文")]),t._v(" "),a("ul",[a("li",[t._v("脚本执行，创建全局上下文并推入栈底")]),t._v(" "),a("li",[a("code",[t._v("fn_1()")]),t._v("被触发，执行前创建"),a("code",[t._v("fn_1")]),t._v("函数上下文并推入栈，执行内部代码")]),t._v(" "),a("li",[a("code",[t._v("fn_2()")]),t._v("在"),a("code",[t._v("fn_1()")]),t._v("执行中被触发，创建"),a("code",[t._v("fn_2")]),t._v("函数上下文并推入栈，此刻"),a("code",[t._v("fn_2")]),t._v("为栈顶，执行内部代码")]),t._v(" "),a("li",[a("code",[t._v("fn_2()")]),t._v("执行完毕，出栈")]),t._v(" "),a("li",[a("code",[t._v("fn_1()")]),t._v("执行完毕，出栈")]),t._v(" "),a("li",[t._v("应用程序关闭，全局上下文出栈")])]),t._v(" "),a("h3",{attrs:{id:"赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值"}},[t._v("#")]),t._v(" 赋值")]),t._v(" "),a("p",[t._v("在上下文的创建阶段，我们在词法环境内部的环境记录器存储了标识符，而在执行阶段，就会进行赋值，执行的伪代码如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n         "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \t "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"猪痞恶霸"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"销毁回收🗑️"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁回收🗑️"}},[t._v("#")]),t._v(" 销毁回收🗑️")]),t._v(" "),a("p",[t._v("在上下文弹出栈后不会立刻被销毁，想要了解销毁的内容可以查阅垃圾回收相关的知识，垃圾回收不是本文的重点。")]),t._v(" "),a("h2",{attrs:{id:"带着知识看问题❔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带着知识看问题❔"}},[t._v("#")]),t._v(" 带着知识看问题❔")]),t._v(" "),a("p",[t._v("通过上面我们已经大致掌握了执行上下文的原理，带着知识看问题，文章开头我提出了"),a("strong",[t._v("变量提升")]),t._v("与"),a("strong",[t._v("作用域问题")]),t._v("，那么我们来一一解答。")]),t._v(" "),a("h3",{attrs:{id:"变量提升问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量提升问题"}},[t._v("#")]),t._v(" 变量提升问题")]),t._v(" "),a("p",[t._v("关于变量提升：使用"),a("code",[t._v("var")]),t._v("声明变量，在声明前调用为"),a("code",[t._v("undefined")]),t._v("，"),a("code",[t._v("undefined")]),t._v("就是我们熟悉的"),a("strong",[t._v("声明但未赋值")]),t._v("，这种现象叫做"),a("strong",[t._v("变量提升")]),t._v("，但是"),a("code",[t._v("let")]),t._v("与"),a("code",[t._v("const")]),t._v("禁止了这一行为，使用"),a("code",[t._v("let")]),t._v("所声明的变量一定需要在声明后使用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cannot access 'bar' before initialization")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[a("strong",[t._v("那么"),a("code",[t._v("let")]),t._v("和"),a("code",[t._v("const")]),t._v("是如何阻止变量提升的呢？")])]),t._v(" "),a("p",[t._v("我们回到上下文创建这个过程中，词法环境和变量环境在创建过程中会解析不同形式声明的变量，词法环境的创建会解析"),a("code",[t._v("let")]),t._v("与"),a("code",[t._v("const")]),t._v("声明的变量并存入环境记录器对象中，并标记其并没有初始化，而变量环境的创建会解析"),a("code",[t._v("var")]),t._v("声明的变量存入环境记录器对象中，其值为"),a("code",[t._v("undefined")]),t._v("，这就是为什么使用"),a("code",[t._v("var")]),t._v("声明的变量会发生变量提升并且打印值为"),a("code",[t._v("undefined")])]),t._v(" "),a("h3",{attrs:{id:"作用域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域问题"}},[t._v("#")]),t._v(" 作用域问题")]),t._v(" "),a("p",[a("strong",[t._v("为什么能访问上层作用域中的变量，不能访问下层作用域中的变量")]),t._v("，那么我们就需要思考我们内部是以什么形式访问上层作用域的")]),t._v(" "),a("p",[t._v("还记得我们词法环境中的外部环境引用"),a("code",[t._v("outer")]),t._v("吗，作为词法环境的一个组成部分，可以访问父级上下文的词法环境，也就可以访问到上层作用域的成员，而词法环境中并没有内部环境引用的组成，所以无法对子级词法环境进行一个访问。")]),t._v(" "),a("h2",{attrs:{id:"最后◀️"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后◀️"}},[t._v("#")]),t._v(" 最后◀️")]),t._v(" "),a("p",[t._v("本文参考了**"),a("code",[t._v("javascript")]),t._v("高级程序设计**，"),a("strong",[t._v("译文")]),t._v("，"),a("strong",[t._v("其他相关作者的参考文章")]),t._v("，经过一个星期的学习理解，耗费三天时间总结出这篇文章，如有一些相关问题或者看法，欢迎各位掘友大佬在评论区留言，我们一起学习！✌️")])])}),[],!1,null,null,null);s.default=e.exports}}]);