const fs = require('fs')
const path = require('path')

const source = `- [EastWorld/wechat-app-mall ★3000+](https://github.com/EastWorld/wechat-app-mall) - 微信小程序商城
- [tumobi/nideshop-mini-program ★2000+](https://github.com/tumobi/nideshop-mini-program) - 基于 Node.js + MySQL 开发的开源微信小程序商城
- [RebeccaHanjw/weapp-wechat-zhihu ★800+](https://github.com/RebeccaHanjw/weapp-wechat-zhihu) - 仿知乎
- [huangjianke/Gitter ★700+](https://github.com/huangjianke/Gitter) - Gitter for GitHub - 可能是目前颜值最高的GitHub小程序客户端
- [lypeer/wechat-weapp-gank ★600+)](https://github.com/lypeer/wechat-weapp-gank) - Gank 客户端
- [wangmingjob/weapp-weipiao ★300+](https://github.com/wangmingjob/weapp-weipiao) - 微票
- [charleyw/wechat-weapp-redux ★300+](https://github.com/charleyw/wechat-weapp-redux) - Redux 绑定库
- [jectychen/wechat-v2ex ★300+)](https://github.com/jectychen/wechat-v2ex) - V2EX
- [18380435477/WeApp ★300+](https://github.com/18380435477/WeApp) - 仿微信
- [zce/weapp-boilerplate ★300+](https://github.com/zce/weapp-boilerplate) - 微信小程序快速开发骨架
- [bayetech/wechat_mall_applet ★300+](https://github.com/bayetech/wechat_mall_applet) - 电商平台
- [lanshan-studio/wecqupt ★300+](https://github.com/lanshan-studio/wecqupt) - We 重邮
- [imageslr/weapp-library ★200+](https://github.com/imageslr/weapp-library) - 在线借书平台（WeUI设计规范、前后端开源、RESTful API文档）
- [myronliu347/wechat-app-zhihudaily ★200+](https://github.com/myronliu347/wechat-app-zhihudaily) - 知乎日报
- [harveyqing/BearDiary ★200+](https://github.com/harveyqing/BearDiary) - 小熊の日记
- [leancloud/leantodo-weapp ★200+](https://github.com/leancloud/leantodo-weapp) - 集成 LeanCloud 实现的 Todo list
- [SuperKieran/weapp-artand ★200+](https://github.com/SuperKieran/weapp-artand) - Artand
- [dongweiming/weapp-zhihulive ★200+](https://github.com/dongweiming/weapp-zhihulive) - 知乎 Live
- [eyasliu/wechat-app-music ★200+](https://github.com/eyasliu/wechat-app-music) - 音乐播放器
- [ahonn/weapp-one ★200+](https://github.com/ahonn/weapp-one) - 仿 ONE
- [giscafer/wechat-weapp-mapdemo ★200+](https://github.com/giscafer/wechat-weapp-mapdemo) - 地图导航、marker标注 （不再维护）
- [hilongjw/weapp-gold ★100+](https://github.com/hilongjw/weapp-gold) - 掘金主页信息流
- [zce/weapp-douban ★100+](https://github.com/zce/weapp-douban) - 豆瓣电影
- [hingsir/weapp-douban-film ★100+](https://github.com/hingsir/weapp-douban-film) - 豆瓣电影
- [kunkun12/weapp](https://github.com/kunkun12/weapp) - 小程序 hello world 尝鲜
- [natee/wxapp-2048 ★100+](https://github.com/natee/wxapp-2048) - 2048 小游戏
- [SeptemberMaples/wechat-weapp-demo ★100+](https://github.com/SeptemberMaples/wechat-weapp-demo) - 购物车
- [hijiangtao/weapp-newsapp](https://github.com/hijiangtao/weapp-newsapp) - 公众号热门文章信息流
- [charleyw/wechat-weapp-redux-todos ★100+](https://github.com/charleyw/wechat-weapp-redux-todos) - 集成 Redux 实现的Todo list
- [kraaas/timer ★100+](https://github.com/kraaas/timer) - 番茄时钟
- [ericzyh/wechat-chat ★100+](https://github.com/ericzyh/wechat-chat) - 聊天室
- [BelinChung/wxapp-hiapp ★100+](https://github.com/BelinChung/wxapp-hiapp) - HiApp
- [hardog/wechat-app-flexlayout ★100+](https://github.com/hardog/wechat-app-flexlayout) - flexlayout
- [dunizb/wxapp-sCalc ★100+](https://github.com/dunizb/wxapp-sCalc) - 简易计算器
- [litt1e-p/weapp-girls ★100+](https://github.com/litt1e-p/weapp-girls) - 豆瓣美女/妹子图
- [liumulin614/BeautifulGirl](https://github.com/liumulin614/BeautifulGirl) - 美女模特
- [romoo/weapp-demo-breadtrip ★100+](https://github.com/romoo/weapp-demo-breadtrip) - 面包旅行
- [zhuweiyou/fetop100 ★100+](https://github.com/zhuweiyou/fetop100) - 前端TOP100
- [vace/wechatapp-news-reader ★100+](https://github.com/vace/wechatapp-news-reader) - 新闻阅读器
- [yaoshanliang/weapp-ssha ★100+](https://github.com/yaoshanliang/weapp-ssha) - 企业宣传小程序
- [yaoshanliang/weapp-jump ★100+](https://github.com/yaoshanliang/weapp-jump) - 跳一跳
- [Symous/WechatApp-BaisiSister](https://github.com/Symous/WechatApp-BaisiSister) - 百思不得姐
- [githinkcn/Giteer](https://github.com/githinkcn/Giteer) - Giteer For 码云，基于Taro + Taro UI + Dva的小程序。
- [DengKe1994/weapp-calculator](https://github.com/DengKe1994/weapp-calculator) - IOS 计算器
- [monkindey/wx-github](https://github.com/monkindey/wx-github) - GitHub 简历
- [fluency03/weapp-500px](https://github.com/fluency03/weapp-500px) - 国外摄影社区 500px
- [weapp-film](https://github.com/luuman/weapp-film) - 淘票票
- [xujinyang/CoderCalendar-WeApp](https://github.com/xujinyang/CoderCalendar-WeApp) - 程序员老黄历
- [zhengxiaowai/weapp-github](https://github.com/zhengxiaowai/weapp-github) - github
- [Seahub/PigRaising](https://github.com/SeaHub/PigRaising) - PigRaising
- [brucevanfdm/WeChatMeiZhi](https://github.com/brucevanfdm/WeChatMeiZhi) - 妹子图
- [zhijieeeeee/wechat-app-joke](https://github.com/zhijieeeeee/wechat-app-joke) - 开心一刻
- [uniquexiaobai/wechat-app-githubfeed](https://github.com/uniquexiaobai/wechat-app-githubfeed) - GitHubFeed
- [zce/weapp-todos](https://github.com/zce/weapp-todos) - TODOS 任务清单
- [bruintong/wechat-webapp-douban-movie](https://github.com/bruintong/wechat-webapp-douban-movie) - 豆瓣电影
- [bruintong/wechat-webapp-douban-location](https://github.com/bruintong/wechat-webapp-douban-location) - 豆瓣同城
- [arkilis/weapp-jandan](https://github.com/arkilis/weapp-jandan) - 煎蛋
- [bodekjan/wechat-weather](https://github.com/bodekjan/wechat-weather) - 微信天气
- [jasscia/ChristmasHat](https://github.com/jasscia/ChristmasHat) - 我要圣诞帽
- [nanwangjkl/sliding_puzzle](https://github.com/nanwangjkl/sliding_puzzle) - 滑块拼图
- [yaoshanliang/weapp-monument-valley](https://github.com/yaoshanliang/weapp-monument-valley) - 纪念碑谷
- [kaiwu/weui-scalajs](https://github.com/kaiwu/weui-scalajs) - 使用Scala.js开发
- [tinajs/tina-hackernews](https://github.com/tinajs/tina-hackernews) - Hacker News 热点
- [mohuishou/scuplus-wechat](https://github.com/mohuishou/scuplus-wechat) - We 川大
- [hankzhuo/wx-v2ex](https://github.com/hankzhuo/wx-v2ex) - v2ex
- [Hongye567/weapp-mark](https://github.com/Hongye567/weapp-mark) - 仿 Mark 影单的微信小程序
- [w1109790800/We-Todo](https://github.com/w1109790800/We-Todo) - 基于LeanCloud的Todo-List
- [jae-jae/weapp-github-trending](https://github.com/jae-jae/weapp-github-trending) - Github今日榜单
- [steedos/mini-vip](https://github.com/steedos/mini-vip) - 华炎微站、微商城
- [alex1504/wx-guita_tab](https://github.com/alex1504/wx-guita_tab) - 口袋吉他
- [lonnng/etym](https://github.com/lonnng/etym) - 芒果词源助手
- [wuhou123/wxxcx](https://github.com/wuhou123/wxxcx) - 武侯的猫，基于wepy构建,整合了n多查询工具（快递，天气，记账，搞笑视频等）
- [upupming/HITMers](https://github.com/upupming/HITMers) - 博物馆小助手（统计值班表、签到、值班日历及备忘录、国际化、Streamable.com 视频上传等）
- [LDouble/WeOUC](https://github.com/LDouble/WeOUC) - WeOUC(教务小程序)
- [tclyjy/handwriting-weapp](https://github.com/tclyjy/handwriting-weapp) - 微信小程序Canvas手写板（可用于采集用户签名，自定义字体颜色，笔画真实）
- [aquanlerou/WeHalo ★200+](https://github.com/aquanlerou/WeHalo) - 爱敲代码的猫（WeHalo 简约风 的微信小程序版博客✨）
- [WarpPrism/SubwayRoutineMP](https://github.com/WarpPrism/SubwayRoutineMP) - 【东京首尔曼谷新加坡巴黎地铁线路图🚄】
- [GoKu-gaga/today](https://github.com/GoKu-gaga/today) - 口袋工具（一个小工具的集合）
- [cy920820/weapp-motor-movies](https://github.com/cy920820/weapp-motor-movies) - 马达电影助手（一个院线电影小助手）
- [Gwokhov/chronus](https://github.com/Gwokhov/chronus) - Chronus 目标日记（一款能帮助你管理生活目标的云开发微信小程序）`

let formatedContent = source
  .replace(/\s★\d+\+\)?/g, '')
  .split('\n')
  .filter(line => line.length > 10)
  .map(item => {
    let repo = item.match(/github\.com\/([^)]*)\)/)[1]
    return `${item} <img class="shield-img" src="https://img.shields.io/github/stars/${repo}.svg?color=%2378828E&label=%20&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTElEQVRYR%2B2WTYhPURjGfw%2BR1KSUj7LwOSkzylhJSWLBSoqFmCwmG1kMlpZ2IrMwKcliIgtRdhILWcyKLHzka7BRPlISydejV3d0%2Fd3%2F3HvPbWY2zubcj%2Be8z3Pe857nHDHJTZPMTyMBttfFBCTdSp1IUwFXAUvaMuECbK8GbmfE3ZLup4hIzoDty8C2jPSSpO0TJsB2J%2FAolj8jNbBc0pO6IpIyYPscsKuFbEjSnnEXYHshMAJMaSH7DiyT9LKOiNoZsH0a2NuG5JSkfeMiwPYcYAVwDZjehuQrsBF4LOlNFSF%2FMmB7FrAYWJT1%2BeclwMwqAXOYz8Bz4EXW559HJH34bWKjA2z3AydqkqTCD0ga%2BEtAvNjeAVwApqZGLhn3A9gp6eIo7p8itL0JuJKQ8jLNsSRbJV3PAwt3ge1VwA1gdlnUiv%2FfR3FKutuKb7sNbS8FbgILKpK0g4UvBPmzIsCYPmB7PhAp60oUEQfUBklv240vNSLbHcBTYG5NEa%2BBTkkfxxpXRcA04BMQfZ32DZgh6WdTAT3AnTrMOWxPUeGV7oI8wHYfcCZRQJ%2Bks00zMAjUOmByhIOS9jcVMAysKQjyBTiefT8U612AGZa0NlmA7TjzgyhfgFFUQ8BhSa8iuO3wiiNAXEjy94Rwv46xCrHMB2L%2F38vNIG7BByU9LJqV7ZXAUWBz7n%2BXpAdJPmC7N5ttWGi%2FpHDG0mZ7PXAS6AZ6JcUVrrCVZSCO6HfAeUlx8azcbEfs3cA8SceSBFRmawAsdcIGsSsN%2FS%2FgF5SUriG3g9OQAAAAAElFTkSuQmCC"> `
  })
  .join('\n')

let mdFilePath = path.resolve(__dirname, '../docs/case.md')
let caseMD = fs.readFileSync(mdFilePath)
let finalFileContent = caseMD
  .toString()
  .replace(
    /(小程序源码搜集)([\s\S]*)(## 资料来源)/,
    `$1\n\n${formatedContent}\n\n$3`
  )

fs.writeFileSync(mdFilePath, finalFileContent)
