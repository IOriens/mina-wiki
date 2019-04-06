---
sidebar: auto
meta:
  - name: description
    content: 小程序 appid 大全，小程序路径大全，公众号绑定，小程序绑定
  - name: keywords
    content: 小程序,appid,路径,公众号,关联,运营,热门微博,微店,微信相册
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

> appid: wx9074de28009e1111

### 番剧播放页路径
```
pages/pgcvideo/pgcvideo?epid=259674
```
参数:
- `epid`: 必选 - 番剧的 epid


