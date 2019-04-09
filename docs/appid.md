---
sidebar: auto
meta:
  - name: description
    content: 小程序 appid 大全，小游戏 appid 大全，小程序路径大全，公众号绑定，小程序绑定，小程序引流
  - name: keywords
    content: 小程序,小游戏,appid,路径,公众号,关联,运营,热门微博,微店,微信相册,小程序引流
---


作用：扫一下下面这个小程序码，可以看到，主页底部的链接可以跳转至微博、微店小程序。

<img src="https://ws1.sinaimg.cn/large/005v6Imcly1g1avtg1916j309k09k0uc.jpg" width="100">

用法：见 [wx.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateToMiniProgram.html) 和 [navigator](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html?search-key=navigator)

## 微博

> appid: wx9074de28009e1111

### 个人用户页路径
```
pages/profile/profile?nickname=IOriens&amp;objectUid=5040331056
```

参数:
- `nickname`: 必选 - 用户昵称，博主主页打开控制台执行 `encodeURIComponent($CONFIG.onick)` 获取，注意必须 encode
- `objectUid`: 非必选 - 用户 id, 博主主页打开控制台执行 `$CONFIG.oid` 获取

## Bilibili

> appid: wx7564fd5313d24844

### 番剧播放页路径
```
pages/pgcvideo/pgcvideo?epid=259674
```
参数:
- `epid`: 必选 - 番剧的 epid

## 其它小程序 appid

- 公众平台助手： wx474a5c3c033d43e9
- 小程序数据助手：wx95e493619d0ff929
- 小程序助手: wxcff7381e631cf54e
- 微信指数: wxc026e7662ec26a3a
- 知乎热榜：wxeb39b10e39bf6b54
- 享物说：wxa344448166586158
- it之家：wxc9091fcc9a6e550c
- 即刻App: wx94ba6ef5dabfd427
- 拼多多：wx32540bd863b27570
- 小年糕：wxd7911e4c177690e4
- 猫眼电影：wx87730701f3d95cc4
- 豆瓣评分：wx2f9b06c1de1ccfca
- 色卡生成器 取色器：wxd0478c2a807e23c9
- 正能量格言：wx757ceb5b6125ccbb

## 其它小游戏 appid

- 消灭病毒：wxa2c324b63b2a9e5e
- 开心消消乐：wx29e1c40a97579c18
- 欢乐斗地主：wxd0e404d795ea6f80
- 成语小秀才：wx504e2b5e77713844
- 腾讯欢乐麻将：wx375c80123d32f83f
- 我要猫咪：wx29dc47a5840221dd