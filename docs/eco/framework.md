---
sidebar: auto
pageClass: large-table-page
meta:
  - name: description
    content: 最全的小程序前端框架、小程序开发框架对比，优秀的微信小程序前端组件化框架评测，小程序开源框架汇总。
  - name: keywords
    content: 小程序,框架,Taro,UI,小程序转换,H5,原生应用,对比,TypeScript,前端框架,对比,UI框架,原理,Hera,weweb,mpvue,Vue,React,小程序开发框架
---

## 小程序前端框架对比

> 先说结论：
> - 当你有 Vue 代码时：使用 chameleon
> - 当你有 React 代码时：使用 Taro
> - 当你有小程序代码时：使用 Taro 将小程序转换成 Taro 代码


|            | chameleon                                                    | mpvue                                                        | Taro                                                         | uni-app                                                      | WePY                                                         | Hera                                                         |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| DSL        | 类 Vue                                                       | Vue                                                          | React                                                        | Vue                                                          | 类 Vue                                                       | 小程序                                                       |
| TypeScript | 无                                                           | 有                                                           | 有                                                           | 有                                                           | 有                                                           | 无                                                           |
| 状态管理   | Vuex                                                         | Vuex                                                         | Redux/MobX/Dva                                               | Vuex                                                         | Redux                                                        | 无                                                           |
| 泛小程序   | 微信<br />百度<br />支付宝                                   | 微信<br />百度<br />支付宝<br />字节跳动                     | 微信<br />百度<br />支付宝<br />字节跳动                     | 微信<br />百度<br />支付宝<br />字节跳动                     | 微信<br />百度<br />支付宝                                   | 微信                                                         |
| Star       | ![GitHub stars](https://img.shields.io/github/stars/didi/chameleon.svg?label=star&style=popout-square) | ![GitHub stars](https://img.shields.io/github/stars/Meituan-Dianping/mpvue.svg?label=star&style=popout-square) | ![GitHub stars](https://img.shields.io/github/stars/NervJS/taro.svg?label=star&style=popout-square) | ![GitHub stars](https://img.shields.io/github/stars/dcloudio/uni-app.svg?label=star&style=popout-square) | ![GitHub stars](https://img.shields.io/github/stars/Tencent/wepy.svg?label=star&style=popout-square) | ![GitHub stars](https://img.shields.io/github/stars/weidian-inc/hera.svg?label=star&style=popout-square) |
| Fork       | ![GitHub forks](https://img.shields.io/github/forks/didi/chameleon.svg?label=fork&style=popout-square) | ![GitHub forks](https://img.shields.io/github/forks/Meituan-Dianping/mpvue.svg?label=fork&style=popout-square) | ![GitHub forks](https://img.shields.io/github/forks/NervJS/taro.svg?label=fork&style=popout-square) | ![GitHub forks](https://img.shields.io/github/forks/dcloudio/uni-app.svg?label=fork&style=popout-square) | ![GitHub forks](https://img.shields.io/github/forks/Tencent/wepy.svg?label=fork&style=popout-square) | ![GitHub forks](https://img.shields.io/github/forks/weidian-inc/hera.svg?label=fork&style=popout-square) |
| Watch      | ![GitHub watchers](https://img.shields.io/github/watchers/didi/chameleon.svg?label=watch&style=popout-square) | ![GitHub watchers](https://img.shields.io/github/watchers/Meituan-Dianping/mpvue.svg?label=watch&style=popout-square) | ![GitHub watchers](https://img.shields.io/github/watchers/NervJS/taro.svg?label=watch&style=popout-square) | ![GitHub watchers](https://img.shields.io/github/watchers/dcloudio/uni-app.svg?label=watch&style=popout-square) | ![GitHub watchers](https://img.shields.io/github/watchers/Tencent/wepy.svg?label=watch&style=popout-square) | ![GitHub watchers](https://img.shields.io/github/watchers/weidian-inc/hera.svg?label=watch&style=popout-square) |
| 月下载量   | ![npm](https://img.shields.io/npm/dm/chameleon-tool.svg?label=D%2FM&style=popout-square) | ![npm](https://img.shields.io/npm/dm/mpvue.svg?label=D%2FM&style=popout-square) | ![npm](https://img.shields.io/npm/dm/@tarojs/taro.svg?label=D%2FM&style=popout-square) | N/A                                                          | ![npm](https://img.shields.io/npm/dm/wepy-cli.svg?label=D%2FM&style=popout-square) | ![npm](https://img.shields.io/npm/dm/hera-cli.svg?label=D%2FM&style=popout-square) |
| 上手       | [快速上手](https://cmljs.org/doc/quick_start/quick_start.html) | [五分钟上手教程](http://mpvue.com/mpvue/quickstart)          | [安装及使用](https://nervjs.github.io/taro/docs/GETTING-STARTED.html) | [快速上手](https://uniapp.dcloud.io/quickstart)              | [快速入门指南](https://tencent.github.io/wepy/document.html#/?id=%e5%bf%ab%e9%80%9f%e5%85%a5%e9%97%a8%e6%8c%87%e5%8d%97) | [快速入门](https://weidian-inc.github.io/hera/#/basics/quickstart) |
| Github     | [didi/chameleon](https://github.com/didi/chameleon)          | [Meituan-Dianping/mpvue](https://github.com/Meituan-Dianping/mpvue) | [NervJS/taro](https://github.com/NervJS/taro)                | [dcloudio/uni-app](https://github.com/dcloudio/uni-app)      | [Tencent/wepy](https://github.com/Tencent/wepy)              | [weidian-inc/hera](https://github.com/weidian-inc/hera)<br />[wdfe/weweb](https://github.com/wdfe/weweb) |
| 交流群     | <img src="https://cmljs.org/doc/assets/qr-qq.jpeg" width=60><img src="https://CMLJS.org/doc/assets/wx-qr-code.png" width=60  > | <img src="https://user-images.githubusercontent.com/1715463/46667731-18eab700-cbfd-11e8-866c-860fb313f0b9.jpeg" width=60  > | <img src="https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67" width=60  > | <img src="https://camo.githubusercontent.com/e98c3ec9ae103a23d837166c013bbe14734b017b/687474703a2f2f696d672e63646e2e616c6979756e2e64636c6f75642e6e65742e636e2f67756964652f756e696170702f77782d626172636f64652e706e67" width=60  > | <img src="https://user-images.githubusercontent.com/2182004/32309877-8bded674-bfc9-11e7-9daa-9ba4012690fb.png" width=60  > <br /> 回复 `wepy` 按照指引进群 | <img src="https://github.com/weidian-inc/hera/blob/master/docs/zh-cn/Others/assets/wechat-group.jpg?raw=true" width=60><img src="https://github.com/weidian-inc/hera/raw/master/docs/zh-cn/Others/assets/qq-group.png" width=60  > |

其它框架
- [tua-mp](https://github.com/tuateam/tua-mp):一款类 Vue 的渐进式小程序框架
- [weweb](https://github.com/wdfe/weweb): weweb是一个兼容小程序语法的前端框架，你可以用小程序的写法，来写web应用。如果你已经有小程序了，通过它你可以将你的小程序运行在浏览器中。如果你熟悉vue的语法，也可以使用wepy编写小程序，再通过weweb转换后将其运行在web端。


## 参考资料

[小程序框架全面测评](https://github.com/o2team/o2team.github.io/blob/v2/source/_posts/2019-03-12-mini-program-framework-full-review.md) （[yuche - Taro 开发者@京东](https://github.com/yuche)）

[跨端开发框架深度横评](https://juejin.im/post/5ca1736af265da30ae314248) ([CHB - uni-app 开发者@DCloud](https://github.com/hbcui1984))