---
sidebar: auto
--- 
                              
# 小游戏 API 


## 基础 


### 系统 


#### 系统信息 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getSystemInfoSync.html">wx.getSystemInfoSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getSystemInfo.html">wx.getSystemInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getSystemInfo.html">wx.getSystemInfo</a></td>
<td>获取系统信息</td>
</tr>
</tbody>
</table>

### 更新 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getUpdateManager.html">wx.getUpdateManager</a></td>
<td>获取<strong>全局唯一</strong>的版本更新管理器，用于管理小程序更新</td>
</tr>
</tbody>
</table>

#### UpdateManager 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UpdateManager.applyUpdate.html">UpdateManager.applyUpdate</a></td>
<td>强制小程序重启并使用新版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UpdateManager.onCheckForUpdate.html">UpdateManager.onCheckForUpdate</a></td>
<td>监听向微信后台请求检查更新结果事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UpdateManager.onUpdateFailed.html">UpdateManager.onUpdateFailed</a></td>
<td>监听小程序更新失败事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UpdateManager.onUpdateReady.html">UpdateManager.onUpdateReady</a></td>
<td>监听小程序有版本更新事件</td>
</tr>
</tbody>
</table>

### 小程序 


#### 生命周期 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onShow.html">wx.onShow</a></td>
<td>监听小游戏回到前台的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onHide.html">wx.onHide</a></td>
<td>监听小游戏隐藏到后台事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offShow.html">wx.offShow</a></td>
<td>取消监听小游戏回到前台的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offHide.html">wx.offHide</a></td>
<td>取消监听小游戏隐藏到后台事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getLaunchOptionsSync.html">wx.getLaunchOptionsSync</a></td>
<td>获取小游戏启动时的参数</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.exitMiniProgram.html">wx.exitMiniProgram</a></td>
<td>退出当前小游戏</td>
</tr>
</tbody>
</table>

#### 应用级事件 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onError.html">wx.onError</a></td>
<td>监听全局错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onAudioInterruptionEnd.html">wx.onAudioInterruptionEnd</a></td>
<td>监听音频中断结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onAudioInterruptionBegin.html">wx.onAudioInterruptionBegin</a></td>
<td>监听音频因为受到系统占用而被中断开始事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offError.html">wx.offError</a></td>
<td>取消监听全局错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offAudioInterruptionEnd.html">wx.offAudioInterruptionEnd</a></td>
<td>取消监听音频中断结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offAudioInterruptionBegin.html">wx.offAudioInterruptionBegin</a></td>
<td>取消监听音频因为受到系统占用而被中断开始事件</td>
</tr>
</tbody>
</table>

#### 触摸事件 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onTouchStart.html">wx.onTouchStart</a></td>
<td>监听开始触摸事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onTouchMove.html">wx.onTouchMove</a></td>
<td>监听触点移动事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onTouchEnd.html">wx.onTouchEnd</a></td>
<td>监听触摸结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onTouchCancel.html">wx.onTouchCancel</a></td>
<td>监听触点失效事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offTouchStart.html">wx.offTouchStart</a></td>
<td>取消监听开始触摸事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offTouchMove.html">wx.offTouchMove</a></td>
<td>取消监听触点移动事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offTouchEnd.html">wx.offTouchEnd</a></td>
<td>取消监听触摸结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offTouchCancel.html">wx.offTouchCancel</a></td>
<td>取消监听触点失效事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Touch.html">Touch</a></td>
<td>在触控设备上的触摸点</td>
</tr>
</tbody>
</table>

### 性能 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.triggerGC.html">wx.triggerGC</a></td>
<td>加快触发 JavaScriptCore 垃圾回收（Garbage Collection）</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getPerformance.html">wx.getPerformance</a></td>
<td>获取性能管理器</td>
</tr>
</tbody>
</table>

#### Performance 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Performance.now.html">Performance.now</a></td>
<td>可以获取当前时间以微秒为单位的时间戳</td>
</tr>
</tbody>
</table>

### 分包加载 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.loadSubpackage.html">wx.loadSubpackage</a></td>
<td>触发分包加载，详见 <a href="https://developers.weixin.qq.com/minigame/dev/api/../tutorial/base/subpackages.html">分包加载</a></td>
</tr>
</tbody>
</table>

#### LoadSubpackageTask 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/LoadSubpackageTask.onProgressUpdate.html">LoadSubpackageTask.onProgressUpdate</a></td>
<td>监听分包加载进度变化事件</td>
</tr>
</tbody>
</table>

### 调试 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setEnableDebug.html">wx.setEnableDebug</a></td>
<td>设置是否打开调试开关</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getLogManager.html">wx.getLogManager</a></td>
<td>获取日志管理器对象</td>
</tr>
</tbody>
</table>

#### LogManager 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/LogManager.debug.html">LogManager.debug</a></td>
<td>写 debug 日志</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/LogManager.info.html">LogManager.info</a></td>
<td>写 info 日志</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/LogManager.log.html">LogManager.log</a></td>
<td>写 log 日志</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/LogManager.warn.html">LogManager.warn</a></td>
<td>写 warn 日志</td>
</tr>
</tbody>
</table>

## 渲染 


### 画布 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createCanvas.html">wx.createCanvas</a></td>
<td>创建一个画布对象</td>
</tr>
</tbody>
</table>

#### Canvas 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Canvas.toTempFilePathSync.html">Canvas.toTempFilePathSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Canvas.toTempFilePath.html">Canvas.toTempFilePath</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Canvas.toTempFilePath.html">Canvas.toTempFilePath</a></td>
<td>将当前 Canvas 保存为一个临时文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Canvas.toDataURL.html">Canvas.toDataURL</a></td>
<td>把画布上的绘制内容以一个 data URI 的格式返回</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Canvas.getContext.html">Canvas.getContext</a></td>
<td>获取画布对象的绘图上下文</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RenderingContext.html">RenderingContext</a></td>
<td>画布对象的绘图上下文</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/WebGLRenderingContext.wxBindCanvasTexture.html">WebGLRenderingContext.wxBindCanvasTexture</a></td>
<td>将一个 Canvas 对应的 Texture 绑定到 WebGL 上下文</td>
</tr>
</tbody>
</table>

### 帧率 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setPreferredFramesPerSecond.html">wx.setPreferredFramesPerSecond</a></td>
<td>可以修改渲染帧率</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/cancelAnimationFrame.html">cancelAnimationFrame</a></td>
<td>取消由 requestAnimationFrame 添加到计划中的动画帧请求</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/requestAnimationFrame.html">requestAnimationFrame</a></td>
<td>在下次进行重绘时执行</td>
</tr>
</tbody>
</table>

### 字体 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.loadFont.html">wx.loadFont</a></td>
<td>加载自定义字体文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getTextLineHeight.html">wx.getTextLineHeight</a></td>
<td>获取一行文本的行高</td>
</tr>
</tbody>
</table>

### 图片 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createImage.html">wx.createImage</a></td>
<td>创建一个图片对象</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Image.html">Image</a></td>
<td>图片对象</td>
</tr>
</tbody>
</table>

## 广告 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createRewardedVideoAd.html">wx.createRewardedVideoAd</a></td>
<td>创建激励视频广告组件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createBannerAd.html">wx.createBannerAd</a></td>
<td>创建 banner 广告组件</td>
</tr>
</tbody>
</table>

### BannerAd 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.show.html">BannerAd.show</a></td>
<td>显示 banner 广告</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.onResize.html">BannerAd.onResize</a></td>
<td>监听 banner 广告尺寸变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.onLoad.html">BannerAd.onLoad</a></td>
<td>监听 banner 广告加载事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.onError.html">BannerAd.onError</a></td>
<td>监听 banner 广告错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.offResize.html">BannerAd.offResize</a></td>
<td>取消监听 banner 广告尺寸变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.offLoad.html">BannerAd.offLoad</a></td>
<td>取消监听 banner 广告加载事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.offError.html">BannerAd.offError</a></td>
<td>取消监听 banner 广告错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.hide.html">BannerAd.hide</a></td>
<td>隐藏 banner 广告</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/BannerAd.destroy.html">BannerAd.destroy</a></td>
<td>销毁 banner 广告</td>
</tr>
</tbody>
</table>

### RewardedVideoAd 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RewardedVideoAd.load.html">RewardedVideoAd.load</a></td>
<td>隐藏激励视频广告</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RewardedVideoAd.offClose.html">RewardedVideoAd.offClose</a></td>
<td>取消监听用户点击 <code>关闭广告</code> 按钮的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RewardedVideoAd.offError.html">RewardedVideoAd.offError</a></td>
<td>取消监听激励视频错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RewardedVideoAd.offLoad.html">RewardedVideoAd.offLoad</a></td>
<td>取消监听激励视频广告加载事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RewardedVideoAd.onClose.html">RewardedVideoAd.onClose</a></td>
<td>监听用户点击 <code>关闭广告</code> 按钮的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RewardedVideoAd.onError.html">RewardedVideoAd.onError</a></td>
<td>监听激励视频错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RewardedVideoAd.onLoad.html">RewardedVideoAd.onLoad</a></td>
<td>监听激励视频广告加载事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RewardedVideoAd.show.html">RewardedVideoAd.show</a></td>
<td>显示激励视频广告</td>
</tr>
</tbody>
</table>

## 界面 


### 交互 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.showToast.html">wx.showToast</a></td>
<td>显示消息提示框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.showModal.html">wx.showModal</a></td>
<td>显示模态对话框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.showLoading.html">wx.showLoading</a></td>
<td>显示 loading 提示框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.showActionSheet.html">wx.showActionSheet</a></td>
<td>显示操作菜单</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.hideToast.html">wx.hideToast</a></td>
<td>隐藏消息提示框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.hideLoading.html">wx.hideLoading</a></td>
<td>隐藏 loading 提示框</td>
</tr>
</tbody>
</table>

### 键盘 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.updateKeyboard.html">wx.updateKeyboard</a></td>
<td>更新键盘输入框内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.showKeyboard.html">wx.showKeyboard</a></td>
<td>显示键盘</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onKeyboardInput.html">wx.onKeyboardInput</a></td>
<td>监听键盘输入事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onKeyboardConfirm.html">wx.onKeyboardConfirm</a></td>
<td>监听用户点击键盘 Confirm 按钮时的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onKeyboardComplete.html">wx.onKeyboardComplete</a></td>
<td>监听监听键盘收起的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offKeyboardInput.html">wx.offKeyboardInput</a></td>
<td>取消监听键盘输入事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offKeyboardConfirm.html">wx.offKeyboardConfirm</a></td>
<td>取消监听用户点击键盘 Confirm 按钮时的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offKeyboardComplete.html">wx.offKeyboardComplete</a></td>
<td>取消监听监听键盘收起的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.hideKeyboard.html">wx.hideKeyboard</a></td>
<td>隐藏键盘</td>
</tr>
</tbody>
</table>

### 菜单 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setMenuStyle.html">wx.setMenuStyle</a></td>
<td>动态设置通过右上角按钮拉起的菜单的样式</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getMenuButtonBoundingClientRect.html">wx.getMenuButtonBoundingClientRect</a></td>
<td>获取菜单按钮（右上角胶囊按钮）的布局位置信息</td>
</tr>
</tbody>
</table>

### 状态栏 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setStatusBarStyle.html">wx.setStatusBarStyle</a></td>
<td>当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏</td>
</tr>
</tbody>
</table>

### 窗口 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onWindowResize.html">wx.onWindowResize</a></td>
<td>监听窗口尺寸变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offWindowResize.html">wx.offWindowResize</a></td>
<td>取消监听窗口尺寸变化事件</td>
</tr>
</tbody>
</table>

## 网络 


### 发起请求 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.request.html">wx.request</a></td>
<td>发起 HTTPS 网络请求</td>
</tr>
</tbody>
</table>

#### RequestTask 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RequestTask.abort.html">RequestTask.abort</a></td>
<td>中断请求任务</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RequestTask.offHeadersReceived.html">RequestTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RequestTask.onHeadersReceived.html">RequestTask.onHeadersReceived</a></td>
<td>监听 HTTP Response Header 事件</td>
</tr>
</tbody>
</table>

### 下载 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.downloadFile.html">wx.downloadFile</a></td>
<td>下载文件资源到本地</td>
</tr>
</tbody>
</table>

#### DownloadTask 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/DownloadTask.onProgressUpdate.html">DownloadTask.onProgressUpdate</a></td>
<td>监听下载进度变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/DownloadTask.onHeadersReceived.html">DownloadTask.onHeadersReceived</a></td>
<td>监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/DownloadTask.offProgressUpdate.html">DownloadTask.offProgressUpdate</a></td>
<td>取消监听下载进度变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/DownloadTask.offHeadersReceived.html">DownloadTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/DownloadTask.abort.html">DownloadTask.abort</a></td>
<td>中断下载任务</td>
</tr>
</tbody>
</table>

### 上传 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.uploadFile.html">wx.uploadFile</a></td>
<td>将本地资源上传到服务器</td>
</tr>
</tbody>
</table>

#### UploadTask 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UploadTask.abort.html">UploadTask.abort</a></td>
<td>中断上传任务</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UploadTask.offHeadersReceived.html">UploadTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UploadTask.offProgressUpdate.html">UploadTask.offProgressUpdate</a></td>
<td>取消监听上传进度变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UploadTask.onHeadersReceived.html">UploadTask.onHeadersReceived</a></td>
<td>监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UploadTask.onProgressUpdate.html">UploadTask.onProgressUpdate</a></td>
<td>监听上传进度变化事件</td>
</tr>
</tbody>
</table>

### WebSocket 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.sendSocketMessage.html">wx.sendSocketMessage</a></td>
<td>通过 WebSocket 连接发送数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onSocketOpen.html">wx.onSocketOpen</a></td>
<td>监听 WebSocket 连接打开事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onSocketMessage.html">wx.onSocketMessage</a></td>
<td>监听 WebSocket 接受到服务器的消息事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onSocketError.html">wx.onSocketError</a></td>
<td>监听 WebSocket 错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onSocketClose.html">wx.onSocketClose</a></td>
<td>监听 WebSocket 连接关闭事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.connectSocket.html">wx.connectSocket</a></td>
<td>创建一个 WebSocket 连接</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.closeSocket.html">wx.closeSocket</a></td>
<td>关闭 WebSocket 连接</td>
</tr>
</tbody>
</table>

#### SocketTask 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/SocketTask.close.html">SocketTask.close</a></td>
<td>关闭 WebSocket 连接</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/SocketTask.onClose.html">SocketTask.onClose</a></td>
<td>监听 WebSocket 连接关闭事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/SocketTask.onError.html">SocketTask.onError</a></td>
<td>监听 WebSocket 错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/SocketTask.onMessage.html">SocketTask.onMessage</a></td>
<td>监听 WebSocket 接受到服务器的消息事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/SocketTask.onOpen.html">SocketTask.onOpen</a></td>
<td>监听 WebSocket 连接打开事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/SocketTask.send.html">SocketTask.send</a></td>
<td>通过 WebSocket 连接发送数据</td>
</tr>
</tbody>
</table>

## 转发 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.updateShareMenu.html">wx.updateShareMenu</a></td>
<td>更新转发属性</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.showShareMenu.html">wx.showShareMenu</a></td>
<td>显示当前页面的转发按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.shareAppMessage.html">wx.shareAppMessage</a></td>
<td>主动拉起转发，进入选择通讯录界面</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onShareAppMessage.html">wx.onShareAppMessage</a></td>
<td>监听用户点击右上角菜单的「转发」按钮时触发的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offShareAppMessage.html">wx.offShareAppMessage</a></td>
<td>取消监听用户点击右上角菜单的「转发」按钮时触发的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.hideShareMenu.html">wx.hideShareMenu</a></td>
<td>隐藏转发按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getShareInfo.html">wx.getShareInfo</a></td>
<td>获取转发详细信息</td>
</tr>
</tbody>
</table>

## 虚拟支付 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.requestMidasPayment.html">wx.requestMidasPayment</a></td>
<td>发起米大师支付</td>
</tr>
</tbody>
</table>

## 数据缓存 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setStorageSync.html">wx.setStorageSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setStorage.html">wx.setStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setStorage.html">wx.setStorage</a></td>
<td>将数据存储在本地缓存中指定的 key 中</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.removeStorageSync.html">wx.removeStorageSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.removeStorage.html">wx.removeStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.removeStorage.html">wx.removeStorage</a></td>
<td>从本地缓存中移除指定 key</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getStorageSync.html">wx.getStorageSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getStorage.html">wx.getStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getStorageInfoSync.html">wx.getStorageInfoSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getStorageInfo.html">wx.getStorageInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getStorageInfo.html">wx.getStorageInfo</a></td>
<td>异步获取当前storage的相关信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getStorage.html">wx.getStorage</a></td>
<td>从本地缓存中异步获取指定 key 的内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.clearStorageSync.html">wx.clearStorageSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.clearStorage.html">wx.clearStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.clearStorage.html">wx.clearStorage</a></td>
<td>清理本地数据缓存</td>
</tr>
</tbody>
</table>

## 媒体 


### 音频 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setInnerAudioOption.html">wx.setInnerAudioOption</a></td>
<td>设置 <a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.html">InnerAudioContext</a> 的播放选项</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getAvailableAudioSources.html">wx.getAvailableAudioSources</a></td>
<td>获取当前支持的音频输入源</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createInnerAudioContext.html">wx.createInnerAudioContext</a></td>
<td>创建内部 <code>audio</code> 上下文 <a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.html"><code>InnerAudioContext</code></a> 对象</td>
</tr>
</tbody>
</table>

#### InnerAudioContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.destroy.html">InnerAudioContext.destroy</a></td>
<td>销毁当前实例</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offCanplay.html">InnerAudioContext.offCanplay</a></td>
<td>取消监听音频进入可以播放状态的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offEnded.html">InnerAudioContext.offEnded</a></td>
<td>取消监听音频自然播放至结束的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offError.html">InnerAudioContext.offError</a></td>
<td>取消监听音频播放错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offPause.html">InnerAudioContext.offPause</a></td>
<td>取消监听音频暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offPlay.html">InnerAudioContext.offPlay</a></td>
<td>取消监听音频播放事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offSeeked.html">InnerAudioContext.offSeeked</a></td>
<td>取消监听音频完成跳转操作的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offSeeking.html">InnerAudioContext.offSeeking</a></td>
<td>取消监听音频进行跳转操作的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offStop.html">InnerAudioContext.offStop</a></td>
<td>取消监听音频停止事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offTimeUpdate.html">InnerAudioContext.offTimeUpdate</a></td>
<td>取消监听音频播放进度更新事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.offWaiting.html">InnerAudioContext.offWaiting</a></td>
<td>取消监听音频加载中事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onCanplay.html">InnerAudioContext.onCanplay</a></td>
<td>监听音频进入可以播放状态的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onEnded.html">InnerAudioContext.onEnded</a></td>
<td>监听音频自然播放至结束的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onError.html">InnerAudioContext.onError</a></td>
<td>监听音频播放错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onPause.html">InnerAudioContext.onPause</a></td>
<td>监听音频暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onPlay.html">InnerAudioContext.onPlay</a></td>
<td>监听音频播放事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onSeeked.html">InnerAudioContext.onSeeked</a></td>
<td>监听音频完成跳转操作的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onSeeking.html">InnerAudioContext.onSeeking</a></td>
<td>监听音频进行跳转操作的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onStop.html">InnerAudioContext.onStop</a></td>
<td>监听音频停止事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onTimeUpdate.html">InnerAudioContext.onTimeUpdate</a></td>
<td>监听音频播放进度更新事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.onWaiting.html">InnerAudioContext.onWaiting</a></td>
<td>监听音频加载中事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.pause.html">InnerAudioContext.pause</a></td>
<td>暂停</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.play.html">InnerAudioContext.play</a></td>
<td>播放</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.seek.html">InnerAudioContext.seek</a></td>
<td>跳转到指定位置</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/InnerAudioContext.stop.html">InnerAudioContext.stop</a></td>
<td>停止</td>
</tr>
</tbody>
</table>

### 图片 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.saveImageToPhotosAlbum.html">wx.saveImageToPhotosAlbum</a></td>
<td>保存图片到系统相册</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.previewImage.html">wx.previewImage</a></td>
<td>在新页面中全屏预览图片</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.chooseImage.html">wx.chooseImage</a></td>
<td>从本地相册选择图片或使用相机拍照</td>
</tr>
</tbody>
</table>

### 录音 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getRecorderManager.html">wx.getRecorderManager</a></td>
<td>获取<strong>全局唯一</strong>的录音管理器 RecorderManager</td>
</tr>
</tbody>
</table>

#### RecorderManager 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.onError.html">RecorderManager.onError</a></td>
<td>监听录音错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.onFrameRecorded.html">RecorderManager.onFrameRecorded</a></td>
<td>监听已录制完指定帧大小的文件事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.onInterruptionBegin.html">RecorderManager.onInterruptionBegin</a></td>
<td>监听录音因为受到系统占用而被中断开始事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.onInterruptionEnd.html">RecorderManager.onInterruptionEnd</a></td>
<td>监听录音中断结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.onPause.html">RecorderManager.onPause</a></td>
<td>监听录音暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.onResume.html">RecorderManager.onResume</a></td>
<td>监听录音继续事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.onStart.html">RecorderManager.onStart</a></td>
<td>监听录音开始事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.onStop.html">RecorderManager.onStop</a></td>
<td>监听录音结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.pause.html">RecorderManager.pause</a></td>
<td>暂停录音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.resume.html">RecorderManager.resume</a></td>
<td>继续录音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.start.html">RecorderManager.start</a></td>
<td>开始录音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/RecorderManager.stop.html">RecorderManager.stop</a></td>
<td>停止录音</td>
</tr>
</tbody>
</table>

### 视频 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createVideo.html">wx.createVideo</a></td>
<td>创建视频</td>
</tr>
</tbody>
</table>

#### Video 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.play.html">Video.play</a></td>
<td>播放视频</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.destroy.html">Video.destroy</a></td>
<td>销毁视频</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.exitFullScreen.html">Video.exitFullScreen</a></td>
<td>视频退出全屏</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.offEnded.html">Video.offEnded</a></td>
<td>取消监听视频播放到末尾事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.offError.html">Video.offError</a></td>
<td>取消监听视频错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.offPause.html">Video.offPause</a></td>
<td>取消监听视频暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.offPlay.html">Video.offPlay</a></td>
<td>取消监听视频播放事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.offTimeUpdate.html">Video.offTimeUpdate</a></td>
<td>取消监听视频播放进度更新事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.offWaiting.html">Video.offWaiting</a></td>
<td>取消监听视频缓冲事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.onEnded.html">Video.onEnded</a></td>
<td>监听视频播放到末尾事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.onError.html">Video.onError</a></td>
<td>监听视频错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.onPause.html">Video.onPause</a></td>
<td>监听视频暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.onPlay.html">Video.onPlay</a></td>
<td>监听视频播放事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.onTimeUpdate.html">Video.onTimeUpdate</a></td>
<td>监听视频播放进度更新事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.onWaiting.html">Video.onWaiting</a></td>
<td>监听视频缓冲事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.pause.html">Video.pause</a></td>
<td>暂停视频</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.requestFullScreen.html">Video.requestFullScreen</a></td>
<td>视频全屏</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.seek.html">Video.seek</a></td>
<td>视频跳转</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Video.stop.html">Video.stop</a></td>
<td>停止视频</td>
</tr>
</tbody>
</table>

## 位置 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getLocation.html">wx.getLocation</a></td>
<td>获取当前的地理位置、速度</td>
</tr>
</tbody>
</table>

## 文件 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getFileSystemManager.html">wx.getFileSystemManager</a></td>
<td>获取全局唯一的文件管理器</td>
</tr>
</tbody>
</table>

### Stats 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Stats.isDirectory.html">Stats.isDirectory</a></td>
<td>判断当前文件是否一个目录</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Stats.isFile.html">Stats.isFile</a></td>
<td>判断当前文件是否一个普通文件</td>
</tr>
</tbody>
</table>

### FileSystemManager 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.accessSync.html">FileSystemManager.accessSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.access.html">FileSystemManager.access</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.appendFileSync.html">FileSystemManager.appendFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.appendFile.html">FileSystemManager.appendFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.copyFile.html">FileSystemManager.copyFile</a></td>
<td>复制文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.copyFileSync.html">FileSystemManager.copyFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.copyFile.html">FileSystemManager.copyFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.getFileInfo.html">FileSystemManager.getFileInfo</a></td>
<td>获取该小程序下的 本地临时文件 或 本地缓存文件 信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.getSavedFileList.html">FileSystemManager.getSavedFileList</a></td>
<td>获取该小程序下已保存的本地缓存文件列表</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.mkdir.html">FileSystemManager.mkdir</a></td>
<td>创建目录</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.mkdirSync.html">FileSystemManager.mkdirSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.mkdir.html">FileSystemManager.mkdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.readdir.html">FileSystemManager.readdir</a></td>
<td>读取目录内文件列表</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.readdirSync.html">FileSystemManager.readdirSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.readdir.html">FileSystemManager.readdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.readFile.html">FileSystemManager.readFile</a></td>
<td>读取本地文件内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.readFileSync.html">FileSystemManager.readFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.readFile.html">FileSystemManager.readFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.removeSavedFile.html">FileSystemManager.removeSavedFile</a></td>
<td>删除该小程序下已保存的本地缓存文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.rename.html">FileSystemManager.rename</a></td>
<td>重命名文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.renameSync.html">FileSystemManager.renameSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.rename.html">FileSystemManager.rename</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.rmdir.html">FileSystemManager.rmdir</a></td>
<td>删除目录</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.rmdirSync.html">FileSystemManager.rmdirSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.rmdir.html">FileSystemManager.rmdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.saveFile.html">FileSystemManager.saveFile</a></td>
<td>保存临时文件到本地</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.saveFileSync.html">FileSystemManager.saveFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.saveFile.html">FileSystemManager.saveFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.stat.html">FileSystemManager.stat</a></td>
<td>获取文件 Stats 对象</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.statSync.html">FileSystemManager.statSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.stat.html">FileSystemManager.stat</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.unlink.html">FileSystemManager.unlink</a></td>
<td>删除文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.unlinkSync.html">FileSystemManager.unlinkSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.unlink.html">FileSystemManager.unlink</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.unzip.html">FileSystemManager.unzip</a></td>
<td>解压文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.writeFile.html">FileSystemManager.writeFile</a></td>
<td>写文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.writeFileSync.html">FileSystemManager.writeFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.writeFile.html">FileSystemManager.writeFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.access.html">FileSystemManager.access</a></td>
<td>判断文件/目录是否存在</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FileSystemManager.appendFile.html">FileSystemManager.appendFile</a></td>
<td>在文件结尾追加内容</td>
</tr>
</tbody>
</table>

## 开放接口 


### 小程序跳转 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.navigateToMiniProgram.html">wx.navigateToMiniProgram</a></td>
<td>打开另一个小程序</td>
</tr>
</tbody>
</table>

### 用户信息 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getUserInfo.html">wx.getUserInfo</a></td>
<td>获取用户信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createUserInfoButton.html">wx.createUserInfoButton</a></td>
<td>创建用户信息按钮</td>
</tr>
</tbody>
</table>

#### UserInfoButton 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UserInfoButton.destroy.html">UserInfoButton.destroy</a></td>
<td>销毁用户信息按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UserInfoButton.hide.html">UserInfoButton.hide</a></td>
<td>隐藏用户信息按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UserInfoButton.offTap.html">UserInfoButton.offTap</a></td>
<td>取消监听用户信息按钮的点击事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UserInfoButton.onTap.html">UserInfoButton.onTap</a></td>
<td>监听用户信息按钮的点击事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UserInfoButton.show.html">UserInfoButton.show</a></td>
<td>显示用户信息按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UserInfo.html">UserInfo</a></td>
<td>用户信息</td>
</tr>
</tbody>
</table>

### 登录 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.login.html">wx.login</a></td>
<td>调用接口获取登录凭证（code）</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.checkSession.html">wx.checkSession</a></td>
<td>检查登录态是否过期</td>
</tr>
</tbody>
</table>

### 授权 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.authorize.html">wx.authorize</a></td>
<td>提前向用户发起授权请求</td>
</tr>
</tbody>
</table>

### 开放数据 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setUserCloudStorage.html">wx.setUserCloudStorage</a></td>
<td>对用户托管数据进行写数据操作</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.removeUserCloudStorage.html">wx.removeUserCloudStorage</a></td>
<td>删除用户托管数据当中对应 key 的数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getUserCloudStorage.html">wx.getUserCloudStorage</a></td>
<td>获取当前用户托管数据当中对应 key 的数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getSharedCanvas.html">wx.getSharedCanvas</a></td>
<td>获取主域和开放数据域共享的 sharedCanvas</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getGroupCloudStorage.html">wx.getGroupCloudStorage</a></td>
<td>获取群同玩成员的游戏数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getFriendCloudStorage.html">wx.getFriendCloudStorage</a></td>
<td>拉取当前用户所有同玩好友的托管数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/UserGameData.html">UserGameData</a></td>
<td>托管数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/KVData.html">KVData</a></td>
<td>托管的 KV 数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/OpenDataContext-wx.getUserInfo.html">OpenDataContext-wx.getUserInfo</a></td>
<td>在无须用户授权的情况下，批量获取用户信息</td>
</tr>
</tbody>
</table>

### 开放数据域 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onMessage.html">wx.onMessage</a></td>
<td>监听主域发送的消息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getOpenDataContext.html">wx.getOpenDataContext</a></td>
<td>获取开放数据域</td>
</tr>
</tbody>
</table>

#### OpenDataContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/OpenDataContext.postMessage.html">OpenDataContext.postMessage</a></td>
<td>向开放数据域发送消息</td>
</tr>
</tbody>
</table>

### 防沉迷 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.checkIsUserAdvisedToRest.html">wx.checkIsUserAdvisedToRest</a></td>
<td>根据用户当天游戏时间判断用户是否需要休息</td>
</tr>
</tbody>
</table>

### 意见反馈 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createFeedbackButton.html">wx.createFeedbackButton</a></td>
<td>创建打开意见反馈页面的按钮</td>
</tr>
</tbody>
</table>

#### FeedbackButton 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FeedbackButton.show.html">FeedbackButton.show</a></td>
<td>显示意见反馈按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FeedbackButton.onTap.html">FeedbackButton.onTap</a></td>
<td>监听意见反馈按钮的点击事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FeedbackButton.offTap.html">FeedbackButton.offTap</a></td>
<td>取消监听意见反馈按钮的点击事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FeedbackButton.hide.html">FeedbackButton.hide</a></td>
<td>隐藏意见反馈按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/FeedbackButton.destroy.html">FeedbackButton.destroy</a></td>
<td>销毁意见反馈按钮</td>
</tr>
</tbody>
</table>

### 设置 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.openSetting.html">wx.openSetting</a></td>
<td>调起客户端小程序设置界面，返回用户设置的操作结果</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getSetting.html">wx.getSetting</a></td>
<td>获取用户的当前设置</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createOpenSettingButton.html">wx.createOpenSettingButton</a></td>
<td>创建打开设置页面的按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/AuthSetting.html">AuthSetting</a></td>
<td>用户授权设置信息，详情参考<a href="https://developers.weixin.qq.com/minigame/dev/api/../tutorial/open-ability/authorize.html">权限</a></td>
</tr>
</tbody>
</table>

#### OpenSettingButton 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/OpenSettingButton.destroy.html">OpenSettingButton.destroy</a></td>
<td>销毁打开设置页面按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/OpenSettingButton.hide.html">OpenSettingButton.hide</a></td>
<td>隐藏打开设置页面按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/OpenSettingButton.offTap.html">OpenSettingButton.offTap</a></td>
<td>取消监听设置页面按钮的点击事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/OpenSettingButton.onTap.html">OpenSettingButton.onTap</a></td>
<td>监听设置页面按钮的点击事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/OpenSettingButton.show.html">OpenSettingButton.show</a></td>
<td>显示打开设置页面按钮</td>
</tr>
</tbody>
</table>

### 游戏圈 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createGameClubButton.html">wx.createGameClubButton</a></td>
<td>创建游戏圈按钮</td>
</tr>
</tbody>
</table>

#### GameClubButton 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/GameClubButton.destroy.html">GameClubButton.destroy</a></td>
<td>销毁游戏圈按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/GameClubButton.hide.html">GameClubButton.hide</a></td>
<td>隐藏游戏圈按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/GameClubButton.offTap.html">GameClubButton.offTap</a></td>
<td>取消监听游戏圈按钮的点击事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/GameClubButton.onTap.html">GameClubButton.onTap</a></td>
<td>监听游戏圈按钮的点击事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/GameClubButton.show.html">GameClubButton.show</a></td>
<td>显示游戏圈按钮</td>
</tr>
</tbody>
</table>

### 客服消息 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.openCustomerServiceConversation.html">wx.openCustomerServiceConversation</a></td>
<td>进入客服会话</td>
</tr>
</tbody>
</table>

### 微信运动 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getWeRunData.html">wx.getWeRunData</a></td>
<td>获取用户过去三十天微信运动步数</td>
</tr>
</tbody>
</table>

### 卡券 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.openCard.html">wx.openCard</a></td>
<td>查看微信卡包中的卡券</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.addCard.html">wx.addCard</a></td>
<td>批量添加卡券</td>
</tr>
</tbody>
</table>

## 设备 


### 电量 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getBatteryInfoSync.html">wx.getBatteryInfoSync</a></td>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getBatteryInfo.html">wx.getBatteryInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getBatteryInfo.html">wx.getBatteryInfo</a></td>
<td>获取设备电量</td>
</tr>
</tbody>
</table>

### 剪贴板 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setClipboardData.html">wx.setClipboardData</a></td>
<td>设置系统剪贴板的内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getClipboardData.html">wx.getClipboardData</a></td>
<td>获取系统剪贴板的内容</td>
</tr>
</tbody>
</table>

### 网络 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onNetworkStatusChange.html">wx.onNetworkStatusChange</a></td>
<td>监听网络状态变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getNetworkType.html">wx.getNetworkType</a></td>
<td>获取网络类型</td>
</tr>
</tbody>
</table>

### 屏幕 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setScreenBrightness.html">wx.setScreenBrightness</a></td>
<td>设置屏幕亮度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.setKeepScreenOn.html">wx.setKeepScreenOn</a></td>
<td>设置是否保持常亮状态</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.getScreenBrightness.html">wx.getScreenBrightness</a></td>
<td>获取屏幕亮度</td>
</tr>
</tbody>
</table>

### 转屏 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onDeviceOrientationChange.html">wx.onDeviceOrientationChange</a></td>
<td>监听横竖屏切换事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.offDeviceOrientationChange.html">wx.offDeviceOrientationChange</a></td>
<td>取消监听横竖屏切换事件</td>
</tr>
</tbody>
</table>

### 加速计 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.stopAccelerometer.html">wx.stopAccelerometer</a></td>
<td>停止监听加速度数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.startAccelerometer.html">wx.startAccelerometer</a></td>
<td>开始监听加速度数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onAccelerometerChange.html">wx.onAccelerometerChange</a></td>
<td>监听加速度数据事件</td>
</tr>
</tbody>
</table>

### 罗盘 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.stopCompass.html">wx.stopCompass</a></td>
<td>停止监听罗盘数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.startCompass.html">wx.startCompass</a></td>
<td>开始监听罗盘数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onCompassChange.html">wx.onCompassChange</a></td>
<td>监听罗盘数据变化事件</td>
</tr>
</tbody>
</table>

### 设备方向 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.stopDeviceMotionListening.html">wx.stopDeviceMotionListening</a></td>
<td>停止监听设备方向的变化</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.startDeviceMotionListening.html">wx.startDeviceMotionListening</a></td>
<td>开始监听设备方向的变化</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onDeviceMotionChange.html">wx.onDeviceMotionChange</a></td>
<td>监听设备方向变化事件</td>
</tr>
</tbody>
</table>

### 陀螺仪 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.stopGyroscope.html">wx.stopGyroscope</a></td>
<td>停止监听陀螺仪数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.startGyroscope.html">wx.startGyroscope</a></td>
<td>开始监听陀螺仪数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onGyroscopeChange.html">wx.onGyroscopeChange</a></td>
<td>监听陀螺仪数据变化事件</td>
</tr>
</tbody>
</table>

### 性能 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.onMemoryWarning.html">wx.onMemoryWarning</a></td>
<td>监听内存不足告警事件</td>
</tr>
</tbody>
</table>

### 振动 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.vibrateShort.html">wx.vibrateShort</a></td>
<td>使手机发生较短时间的振动（15 ms）</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.vibrateLong.html">wx.vibrateLong</a></td>
<td>使手机发生较长时间的振动（400 ms)</td>
</tr>
</tbody>
</table>

## Worker 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/wx.createWorker.html">wx.createWorker</a></td>
<td>创建一个 <a href="https://developers.weixin.qq.com/minigame/dev/api/../tutorial/usability/worker.html">Worker 线程</a></td>
</tr>
</tbody>
</table>

### Worker 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Worker.onMessage.html">Worker.onMessage</a></td>
<td>监听主线程/Worker 线程向当前线程发送的消息的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Worker.postMessage.html">Worker.postMessage</a></td>
<td>向主线程/Worker 线程发送的消息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/minigame/dev/api/Worker.terminate.html">Worker.terminate</a></td>
<td>结束当前 Worker 线程</td>
</tr>
</tbody>
</table>

                            