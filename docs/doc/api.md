---
sidebar: auto
--- 
                              
# 小程序 API 


## 基础 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html">wx.canIUse</a></td>
<td>判断小程序的API，回调，参数，组件等是否在当前版本可用</td>
</tr>
</tbody>
</table>

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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html">wx.getSystemInfoSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfo.html">wx.getSystemInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfo.html">wx.getSystemInfo</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getUpdateManager.html">wx.getUpdateManager</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UpdateManager.applyUpdate.html">UpdateManager.applyUpdate</a></td>
<td>强制小程序重启并使用新版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UpdateManager.onCheckForUpdate.html">UpdateManager.onCheckForUpdate</a></td>
<td>监听向微信后台请求检查更新结果事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UpdateManager.onUpdateFailed.html">UpdateManager.onUpdateFailed</a></td>
<td>监听小程序更新失败事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UpdateManager.onUpdateReady.html">UpdateManager.onUpdateReady</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getLaunchOptionsSync.html">wx.getLaunchOptionsSync</a></td>
<td>获取小程序启动时的参数</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onPageNotFound.html">wx.onPageNotFound</a></td>
<td>监听小程序要打开的页面不存在事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onError.html">wx.onError</a></td>
<td>监听小程序错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onAudioInterruptionEnd.html">wx.onAudioInterruptionEnd</a></td>
<td>监听音频中断结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onAudioInterruptionBegin.html">wx.onAudioInterruptionBegin</a></td>
<td>监听音频因为受到系统占用而被中断开始事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onAppShow.html">wx.onAppShow</a></td>
<td>监听小程序切前台事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onAppHide.html">wx.onAppHide</a></td>
<td>监听小程序切后台事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offPageNotFound.html">wx.offPageNotFound</a></td>
<td>取消监听小程序要打开的页面不存在事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offError.html">wx.offError</a></td>
<td>取消监听小程序错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offAudioInterruptionEnd.html">wx.offAudioInterruptionEnd</a></td>
<td>取消监听音频中断结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offAudioInterruptionBegin.html">wx.offAudioInterruptionBegin</a></td>
<td>取消监听音频因为受到系统占用而被中断开始事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offAppShow.html">wx.offAppShow</a></td>
<td>取消监听小程序切前台事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offAppHide.html">wx.offAppHide</a></td>
<td>取消监听小程序切后台事件</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setEnableDebug.html">wx.setEnableDebug</a></td>
<td>设置是否打开调试开关</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getLogManager.html">wx.getLogManager</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LogManager.debug.html">LogManager.debug</a></td>
<td>写 debug 日志</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LogManager.info.html">LogManager.info</a></td>
<td>写 info 日志</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LogManager.log.html">LogManager.log</a></td>
<td>写 log 日志</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LogManager.warn.html">LogManager.warn</a></td>
<td>写 warn 日志</td>
</tr>
</tbody>
</table>

## 路由 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.switchTab.html">wx.switchTab</a></td>
<td>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.reLaunch.html">wx.reLaunch</a></td>
<td>关闭所有页面，打开到应用内的某个页面</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.redirectTo.html">wx.redirectTo</a></td>
<td>关闭当前页面，跳转到应用内的某个页面</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateTo.html">wx.navigateTo</a></td>
<td>保留当前页面，跳转到应用内的某个页面</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBack.html">wx.navigateBack</a></td>
<td>关闭当前页面，返回上一页面或多级页面</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.showToast.html">wx.showToast</a></td>
<td>显示消息提示框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.showModal.html">wx.showModal</a></td>
<td>显示模态对话框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.showLoading.html">wx.showLoading</a></td>
<td>显示 loading 提示框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.showActionSheet.html">wx.showActionSheet</a></td>
<td>显示操作菜单</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.hideToast.html">wx.hideToast</a></td>
<td>隐藏消息提示框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.hideLoading.html">wx.hideLoading</a></td>
<td>隐藏 loading 提示框</td>
</tr>
</tbody>
</table>

### 导航栏 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.showNavigationBarLoading.html">wx.showNavigationBarLoading</a></td>
<td>在当前页面显示导航条加载动画</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setNavigationBarTitle.html">wx.setNavigationBarTitle</a></td>
<td>动态设置当前页面的标题</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setNavigationBarColor.html">wx.setNavigationBarColor</a></td>
<td>设置页面导航条颜色</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.hideNavigationBarLoading.html">wx.hideNavigationBarLoading</a></td>
<td>在当前页面隐藏导航条加载动画</td>
</tr>
</tbody>
</table>

### 背景 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setBackgroundTextStyle.html">wx.setBackgroundTextStyle</a></td>
<td>动态设置下拉背景字体、loading 图的样式</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setBackgroundColor.html">wx.setBackgroundColor</a></td>
<td>动态设置窗口的背景色</td>
</tr>
</tbody>
</table>

### Tab Bar 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.showTabBarRedDot.html">wx.showTabBarRedDot</a></td>
<td>显示 tabBar 某一项的右上角的红点</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.showTabBar.html">wx.showTabBar</a></td>
<td>显示 tabBar</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setTabBarStyle.html">wx.setTabBarStyle</a></td>
<td>动态设置 tabBar 的整体样式</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setTabBarItem.html">wx.setTabBarItem</a></td>
<td>动态设置 tabBar 某一项的内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setTabBarBadge.html">wx.setTabBarBadge</a></td>
<td>为 tabBar 某一项的右上角添加文本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.removeTabBarBadge.html">wx.removeTabBarBadge</a></td>
<td>移除 tabBar 某一项右上角的文本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.hideTabBarRedDot.html">wx.hideTabBarRedDot</a></td>
<td>隐藏 tabBar 某一项的右上角的红点</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.hideTabBar.html">wx.hideTabBar</a></td>
<td>隐藏 tabBar</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.loadFontFace.html">wx.loadFontFace</a></td>
<td>动态加载网络字体</td>
</tr>
</tbody>
</table>

### 下拉刷新 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopPullDownRefresh.html">wx.stopPullDownRefresh</a></td>
<td>停止当前页面下拉刷新</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startPullDownRefresh.html">wx.startPullDownRefresh</a></td>
<td>开始下拉刷新</td>
</tr>
</tbody>
</table>

### 滚动 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.pageScrollTo.html">wx.pageScrollTo</a></td>
<td>将页面滚动到目标位置</td>
</tr>
</tbody>
</table>

### 动画 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createAnimation.html">wx.createAnimation</a></td>
<td>创建一个动画实例 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.html">animation</a></td>
</tr>
</tbody>
</table>

#### Animation 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.translateZ.html">Animation.translateZ</a></td>
<td>对 Z 轴平移</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.translateY.html">Animation.translateY</a></td>
<td>对 Y 轴平移</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.translateX.html">Animation.translateX</a></td>
<td>对 X 轴平移</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.translate3d.html">Animation.translate3d</a></td>
<td>对 xyz 坐标进行平移变换</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.translate.html">Animation.translate</a></td>
<td>平移变换</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.top.html">Animation.top</a></td>
<td>设置 top 值</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.step.html">Animation.step</a></td>
<td>表示一组动画完成</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.skewY.html">Animation.skewY</a></td>
<td>对 Y 轴坐标进行倾斜</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.skewX.html">Animation.skewX</a></td>
<td>对 X 轴坐标进行倾斜</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.skew.html">Animation.skew</a></td>
<td>对 X、Y 轴坐标进行倾斜</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.scaleZ.html">Animation.scaleZ</a></td>
<td>缩放 Z 轴</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.scaleY.html">Animation.scaleY</a></td>
<td>缩放 Y 轴</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.scaleX.html">Animation.scaleX</a></td>
<td>缩放 X 轴</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.scale3d.html">Animation.scale3d</a></td>
<td>缩放</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.scale.html">Animation.scale</a></td>
<td>缩放</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.rotateZ.html">Animation.rotateZ</a></td>
<td>从 Z 轴顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.rotateY.html">Animation.rotateY</a></td>
<td>从 Y 轴顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.rotateX.html">Animation.rotateX</a></td>
<td>从 X 轴顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.rotate3d.html">Animation.rotate3d</a></td>
<td>从 X 轴顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.rotate.html">Animation.rotate</a></td>
<td>从原点顺时针旋转一个角度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.right.html">Animation.right</a></td>
<td>设置 right 值</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.opacity.html">Animation.opacity</a></td>
<td>设置透明度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.matrix3d.html">Animation.matrix3d</a></td>
<td>同 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d" target="_blank">transform-function matrix3d</a></td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.matrix.html">Animation.matrix</a></td>
<td>同 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix" target="_blank">transform-function matrix</a></td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.backgroundColor.html">Animation.backgroundColor</a></td>
<td>设置背景色</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.left.html">Animation.left</a></td>
<td>设置 left 值</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.height.html">Animation.height</a></td>
<td>设置高度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.width.html">Animation.width</a></td>
<td>设置宽度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.export.html">Animation.export</a></td>
<td>导出动画队列</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Animation.bottom.html">Animation.bottom</a></td>
<td>设置 bottom 值</td>
</tr>
</tbody>
</table>

### 置顶 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setTopBarText.html">wx.setTopBarText</a></td>
<td>动态设置置顶栏文字内容</td>
</tr>
</tbody>
</table>

### 自定义组件 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.nextTick.html">wx.nextTick</a></td>
<td>延迟一部分操作到下一个时间片再执行</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getMenuButtonBoundingClientRect.html">wx.getMenuButtonBoundingClientRect</a></td>
<td>获取菜单按钮（右上角胶囊按钮）的布局位置信息</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onWindowResize.html">wx.onWindowResize</a></td>
<td>监听窗口尺寸变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offWindowResize.html">wx.offWindowResize</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html">wx.request</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.abort.html">RequestTask.abort</a></td>
<td>中断请求任务</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.offHeadersReceived.html">RequestTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.onHeadersReceived.html">RequestTask.onHeadersReceived</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.downloadFile.html">wx.downloadFile</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.abort.html">DownloadTask.abort</a></td>
<td>中断下载任务</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.offHeadersReceived.html">DownloadTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.offProgressUpdate.html">DownloadTask.offProgressUpdate</a></td>
<td>取消监听下载进度变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.onHeadersReceived.html">DownloadTask.onHeadersReceived</a></td>
<td>监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/DownloadTask.onProgressUpdate.html">DownloadTask.onProgressUpdate</a></td>
<td>监听下载进度变化事件</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.uploadFile.html">wx.uploadFile</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.abort.html">UploadTask.abort</a></td>
<td>中断上传任务</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.offHeadersReceived.html">UploadTask.offHeadersReceived</a></td>
<td>取消监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.offProgressUpdate.html">UploadTask.offProgressUpdate</a></td>
<td>取消监听上传进度变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.onHeadersReceived.html">UploadTask.onHeadersReceived</a></td>
<td>监听 HTTP Response Header 事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UploadTask.onProgressUpdate.html">UploadTask.onProgressUpdate</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.sendSocketMessage.html">wx.sendSocketMessage</a></td>
<td>通过 WebSocket 连接发送数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onSocketOpen.html">wx.onSocketOpen</a></td>
<td>监听 WebSocket 连接打开事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onSocketMessage.html">wx.onSocketMessage</a></td>
<td>监听 WebSocket 接受到服务器的消息事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onSocketError.html">wx.onSocketError</a></td>
<td>监听 WebSocket 错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onSocketClose.html">wx.onSocketClose</a></td>
<td>监听 WebSocket 连接关闭事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.connectSocket.html">wx.connectSocket</a></td>
<td>创建一个 WebSocket 连接</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.closeSocket.html">wx.closeSocket</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SocketTask.close.html">SocketTask.close</a></td>
<td>关闭 WebSocket 连接</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SocketTask.onClose.html">SocketTask.onClose</a></td>
<td>监听 WebSocket 连接关闭事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SocketTask.onError.html">SocketTask.onError</a></td>
<td>监听 WebSocket 错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SocketTask.onMessage.html">SocketTask.onMessage</a></td>
<td>监听 WebSocket 接受到服务器的消息事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SocketTask.onOpen.html">SocketTask.onOpen</a></td>
<td>监听 WebSocket 连接打开事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SocketTask.send.html">SocketTask.send</a></td>
<td>通过 WebSocket 连接发送数据</td>
</tr>
</tbody>
</table>

### mDNS 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopLocalServiceDiscovery.html">wx.stopLocalServiceDiscovery</a></td>
<td>停止搜索 mDNS 服务</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startLocalServiceDiscovery.html">wx.startLocalServiceDiscovery</a></td>
<td>开始搜索局域网下的 mDNS 服务</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onLocalServiceResolveFail.html">wx.onLocalServiceResolveFail</a></td>
<td>监听 mDNS 服务解析失败的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onLocalServiceLost.html">wx.onLocalServiceLost</a></td>
<td>监听 mDNS 服务离开的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onLocalServiceFound.html">wx.onLocalServiceFound</a></td>
<td>监听 mDNS 服务发现的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onLocalServiceDiscoveryStop.html">wx.onLocalServiceDiscoveryStop</a></td>
<td>监听 mDNS 服务停止搜索的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offLocalServiceResolveFail.html">wx.offLocalServiceResolveFail</a></td>
<td>取消监听 mDNS 服务解析失败的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offLocalServiceLost.html">wx.offLocalServiceLost</a></td>
<td>取消监听 mDNS 服务离开的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offLocalServiceFound.html">wx.offLocalServiceFound</a></td>
<td>取消监听 mDNS 服务发现的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.offLocalServiceDiscoveryStop.html">wx.offLocalServiceDiscoveryStop</a></td>
<td>取消监听 mDNS 服务停止搜索的事件</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setStorageSync.html">wx.setStorageSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setStorage.html">wx.setStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setStorage.html">wx.setStorage</a></td>
<td>将数据存储在本地缓存中指定的 key 中</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.removeStorageSync.html">wx.removeStorageSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.removeStorage.html">wx.removeStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.removeStorage.html">wx.removeStorage</a></td>
<td>从本地缓存中移除指定 key</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorageSync.html">wx.getStorageSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorage.html">wx.getStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorageInfoSync.html">wx.getStorageInfoSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorageInfo.html">wx.getStorageInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorageInfo.html">wx.getStorageInfo</a></td>
<td>异步获取当前storage的相关信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorage.html">wx.getStorage</a></td>
<td>从本地缓存中异步获取指定 key 的内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.clearStorageSync.html">wx.clearStorageSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.clearStorage.html">wx.clearStorage</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.clearStorage.html">wx.clearStorage</a></td>
<td>清理本地数据缓存</td>
</tr>
</tbody>
</table>

## 媒体 


### 地图 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createMapContext.html">wx.createMapContext</a></td>
<td>创建 <code>map</code> 上下文 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/MapContext.html"><code>MapContext</code></a> 对象</td>
</tr>
</tbody>
</table>

#### MapContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/MapContext.getCenterLocation.html">MapContext.getCenterLocation</a></td>
<td>获取当前地图中心的经纬度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/MapContext.getRegion.html">MapContext.getRegion</a></td>
<td>获取当前地图的视野范围</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/MapContext.getScale.html">MapContext.getScale</a></td>
<td>获取当前地图的缩放级别</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/MapContext.includePoints.html">MapContext.includePoints</a></td>
<td>缩放视野展示所有经纬度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/MapContext.moveToLocation.html">MapContext.moveToLocation</a></td>
<td>将地图中心移动到当前定位点</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/MapContext.translateMarker.html">MapContext.translateMarker</a></td>
<td>平移marker，带动画</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.saveImageToPhotosAlbum.html">wx.saveImageToPhotosAlbum</a></td>
<td>保存图片到系统相册</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.previewImage.html">wx.previewImage</a></td>
<td>在新页面中全屏预览图片</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getImageInfo.html">wx.getImageInfo</a></td>
<td>获取图片信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.compressImage.html">wx.compressImage</a></td>
<td>压缩图片接口，可选压缩质量</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseMessageFile.html">wx.chooseMessageFile</a></td>
<td>从客户端会话选择文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseImage.html">wx.chooseImage</a></td>
<td>从本地相册选择图片或使用相机拍照</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.saveVideoToPhotosAlbum.html">wx.saveVideoToPhotosAlbum</a></td>
<td>保存视频到系统相册</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createVideoContext.html">wx.createVideoContext</a></td>
<td>创建 <code>video</code> 上下文 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.html"><code>VideoContext</code></a> 对象</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseVideo.html">wx.chooseVideo</a></td>
<td>拍摄视频或从手机相册中选视频</td>
</tr>
</tbody>
</table>

#### VideoContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.seek.html">VideoContext.seek</a></td>
<td>跳转到指定位置</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.exitFullScreen.html">VideoContext.exitFullScreen</a></td>
<td>退出全屏</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.hideStatusBar.html">VideoContext.hideStatusBar</a></td>
<td>隐藏状态栏，仅在iOS全屏下有效</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.pause.html">VideoContext.pause</a></td>
<td>暂停视频</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.play.html">VideoContext.play</a></td>
<td>播放视频</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.playbackRate.html">VideoContext.playbackRate</a></td>
<td>设置倍速播放</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.requestFullScreen.html">VideoContext.requestFullScreen</a></td>
<td>进入全屏</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.sendDanmu.html">VideoContext.sendDanmu</a></td>
<td>发送弹幕</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.showStatusBar.html">VideoContext.showStatusBar</a></td>
<td>显示状态栏，仅在iOS全屏下有效</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/VideoContext.stop.html">VideoContext.stop</a></td>
<td>停止视频</td>
</tr>
</tbody>
</table>

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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopVoice.html">wx.stopVoice</a></td>
<td>结束播放语音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setInnerAudioOption.html">wx.setInnerAudioOption</a></td>
<td>设置 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.html">InnerAudioContext</a> 的播放选项</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.playVoice.html">wx.playVoice</a></td>
<td>开始播放语音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.pauseVoice.html">wx.pauseVoice</a></td>
<td>暂停正在播放的语音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getAvailableAudioSources.html">wx.getAvailableAudioSources</a></td>
<td>获取当前支持的音频输入源</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createInnerAudioContext.html">wx.createInnerAudioContext</a></td>
<td>创建内部 <code>audio</code> 上下文 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.html"><code>InnerAudioContext</code></a> 对象</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createAudioContext.html">wx.createAudioContext</a></td>
<td>创建 <code>audio</code> 上下文 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/AudioContext.html"><code>AudioContext</code></a> 对象</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.destroy.html">InnerAudioContext.destroy</a></td>
<td>销毁当前实例</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offCanplay.html">InnerAudioContext.offCanplay</a></td>
<td>取消监听音频进入可以播放状态的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offEnded.html">InnerAudioContext.offEnded</a></td>
<td>取消监听音频自然播放至结束的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offError.html">InnerAudioContext.offError</a></td>
<td>取消监听音频播放错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offPause.html">InnerAudioContext.offPause</a></td>
<td>取消监听音频暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offPlay.html">InnerAudioContext.offPlay</a></td>
<td>取消监听音频播放事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offSeeked.html">InnerAudioContext.offSeeked</a></td>
<td>取消监听音频完成跳转操作的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offSeeking.html">InnerAudioContext.offSeeking</a></td>
<td>取消监听音频进行跳转操作的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offStop.html">InnerAudioContext.offStop</a></td>
<td>取消监听音频停止事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offTimeUpdate.html">InnerAudioContext.offTimeUpdate</a></td>
<td>取消监听音频播放进度更新事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.offWaiting.html">InnerAudioContext.offWaiting</a></td>
<td>取消监听音频加载中事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onCanplay.html">InnerAudioContext.onCanplay</a></td>
<td>监听音频进入可以播放状态的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onEnded.html">InnerAudioContext.onEnded</a></td>
<td>监听音频自然播放至结束的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onError.html">InnerAudioContext.onError</a></td>
<td>监听音频播放错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onPause.html">InnerAudioContext.onPause</a></td>
<td>监听音频暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onPlay.html">InnerAudioContext.onPlay</a></td>
<td>监听音频播放事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onSeeked.html">InnerAudioContext.onSeeked</a></td>
<td>监听音频完成跳转操作的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onSeeking.html">InnerAudioContext.onSeeking</a></td>
<td>监听音频进行跳转操作的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onStop.html">InnerAudioContext.onStop</a></td>
<td>监听音频停止事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onTimeUpdate.html">InnerAudioContext.onTimeUpdate</a></td>
<td>监听音频播放进度更新事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.onWaiting.html">InnerAudioContext.onWaiting</a></td>
<td>监听音频加载中事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.pause.html">InnerAudioContext.pause</a></td>
<td>暂停</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.play.html">InnerAudioContext.play</a></td>
<td>播放</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.seek.html">InnerAudioContext.seek</a></td>
<td>跳转到指定位置</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/InnerAudioContext.stop.html">InnerAudioContext.stop</a></td>
<td>停止</td>
</tr>
</tbody>
</table>

#### AudioContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/AudioContext.pause.html">AudioContext.pause</a></td>
<td>暂停音频</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/AudioContext.play.html">AudioContext.play</a></td>
<td>播放音频</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/AudioContext.seek.html">AudioContext.seek</a></td>
<td>跳转到指定位置</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/AudioContext.setSrc.html">AudioContext.setSrc</a></td>
<td>设置音频地址</td>
</tr>
</tbody>
</table>

### 背景音频 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopBackgroundAudio.html">wx.stopBackgroundAudio</a></td>
<td>停止播放音乐</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.seekBackgroundAudio.html">wx.seekBackgroundAudio</a></td>
<td>控制音乐播放进度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.playBackgroundAudio.html">wx.playBackgroundAudio</a></td>
<td>使用后台播放器播放音乐</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.pauseBackgroundAudio.html">wx.pauseBackgroundAudio</a></td>
<td>暂停播放音乐</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBackgroundAudioStop.html">wx.onBackgroundAudioStop</a></td>
<td>监听音乐停止事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBackgroundAudioPlay.html">wx.onBackgroundAudioPlay</a></td>
<td>监听音乐播放事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBackgroundAudioPause.html">wx.onBackgroundAudioPause</a></td>
<td>监听音乐暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBackgroundAudioPlayerState.html">wx.getBackgroundAudioPlayerState</a></td>
<td>获取后台音乐播放状态</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBackgroundAudioManager.html">wx.getBackgroundAudioManager</a></td>
<td>获取<strong>全局唯一</strong>的背景音频管理器</td>
</tr>
</tbody>
</table>

#### BackgroundAudioManager 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onCanplay.html">BackgroundAudioManager.onCanplay</a></td>
<td>监听背景音频进入可播放状态事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onEnded.html">BackgroundAudioManager.onEnded</a></td>
<td>监听背景音频自然播放结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onError.html">BackgroundAudioManager.onError</a></td>
<td>监听背景音频播放错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onNext.html">BackgroundAudioManager.onNext</a></td>
<td>监听用户在系统音乐播放面板点击下一曲事件（仅iOS）</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onPause.html">BackgroundAudioManager.onPause</a></td>
<td>监听背景音频暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onPlay.html">BackgroundAudioManager.onPlay</a></td>
<td>监听背景音频播放事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onPrev.html">BackgroundAudioManager.onPrev</a></td>
<td>监听用户在系统音乐播放面板点击上一曲事件（仅iOS）</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onSeeked.html">BackgroundAudioManager.onSeeked</a></td>
<td>监听背景音频完成跳转操作事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onSeeking.html">BackgroundAudioManager.onSeeking</a></td>
<td>监听背景音频开始跳转操作事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onStop.html">BackgroundAudioManager.onStop</a></td>
<td>监听背景音频停止事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onTimeUpdate.html">BackgroundAudioManager.onTimeUpdate</a></td>
<td>监听背景音频播放进度更新事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.onWaiting.html">BackgroundAudioManager.onWaiting</a></td>
<td>监听音频加载中事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.pause.html">BackgroundAudioManager.pause</a></td>
<td>暂停音乐</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.play.html">BackgroundAudioManager.play</a></td>
<td>播放音乐</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.seek.html">BackgroundAudioManager.seek</a></td>
<td>跳转到指定位置</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.stop.html">BackgroundAudioManager.stop</a></td>
<td>停止音乐</td>
</tr>
</tbody>
</table>

### 实时音视频 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createLivePusherContext.html">wx.createLivePusherContext</a></td>
<td>创建 <code>live-pusher</code> 上下文 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.html"><code>LivePusherContext</code></a> 对象</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createLivePlayerContext.html">wx.createLivePlayerContext</a></td>
<td>创建 <code>live-player</code> 上下文 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePlayerContext.html"><code>LivePlayerContext</code></a> 对象</td>
</tr>
</tbody>
</table>

#### LivePusherContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.pause.html">LivePusherContext.pause</a></td>
<td>暂停推流</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.pauseBGM.html">LivePusherContext.pauseBGM</a></td>
<td>暂停背景音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.playBGM.html">LivePusherContext.playBGM</a></td>
<td>播放背景音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.resume.html">LivePusherContext.resume</a></td>
<td>恢复推流</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.resumeBGM.html">LivePusherContext.resumeBGM</a></td>
<td>恢复背景音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.setBGMVolume.html">LivePusherContext.setBGMVolume</a></td>
<td>设置背景音音量</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.snapshot.html">LivePusherContext.snapshot</a></td>
<td>快照</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.start.html">LivePusherContext.start</a></td>
<td>播放推流</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.stop.html">LivePusherContext.stop</a></td>
<td>停止推流</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.stopBGM.html">LivePusherContext.stopBGM</a></td>
<td>停止背景音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.switchCamera.html">LivePusherContext.switchCamera</a></td>
<td>切换前后摄像头</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePusherContext.toggleTorch.html">LivePusherContext.toggleTorch</a></td>
<td>切换</td>
</tr>
</tbody>
</table>

#### LivePlayerContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePlayerContext.exitFullScreen.html">LivePlayerContext.exitFullScreen</a></td>
<td>退出全屏</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePlayerContext.mute.html">LivePlayerContext.mute</a></td>
<td>静音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePlayerContext.pause.html">LivePlayerContext.pause</a></td>
<td>暂停</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePlayerContext.play.html">LivePlayerContext.play</a></td>
<td>播放</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePlayerContext.requestFullScreen.html">LivePlayerContext.requestFullScreen</a></td>
<td>进入全屏</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePlayerContext.resume.html">LivePlayerContext.resume</a></td>
<td>恢复</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/LivePlayerContext.stop.html">LivePlayerContext.stop</a></td>
<td>停止</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopRecord.html">wx.stopRecord</a></td>
<td>停止录音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startRecord.html">wx.startRecord</a></td>
<td>开始录音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getRecorderManager.html">wx.getRecorderManager</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.onError.html">RecorderManager.onError</a></td>
<td>监听录音错误事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.onFrameRecorded.html">RecorderManager.onFrameRecorded</a></td>
<td>监听已录制完指定帧大小的文件事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.onInterruptionBegin.html">RecorderManager.onInterruptionBegin</a></td>
<td>监听录音因为受到系统占用而被中断开始事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.onInterruptionEnd.html">RecorderManager.onInterruptionEnd</a></td>
<td>监听录音中断结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.onPause.html">RecorderManager.onPause</a></td>
<td>监听录音暂停事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.onResume.html">RecorderManager.onResume</a></td>
<td>监听录音继续事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.onStart.html">RecorderManager.onStart</a></td>
<td>监听录音开始事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.onStop.html">RecorderManager.onStop</a></td>
<td>监听录音结束事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.pause.html">RecorderManager.pause</a></td>
<td>暂停录音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.resume.html">RecorderManager.resume</a></td>
<td>继续录音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.start.html">RecorderManager.start</a></td>
<td>开始录音</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/RecorderManager.stop.html">RecorderManager.stop</a></td>
<td>停止录音</td>
</tr>
</tbody>
</table>

### 相机 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createCameraContext.html">wx.createCameraContext</a></td>
<td>创建 <code>camera</code> 上下文 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/CameraContext.html"><code>CameraContext</code></a> 对象</td>
</tr>
</tbody>
</table>

#### CameraContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CameraContext.startRecord.html">CameraContext.startRecord</a></td>
<td>开始录像</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CameraContext.stopRecord.html">CameraContext.stopRecord</a></td>
<td>结束录像</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CameraContext.takePhoto.html">CameraContext.takePhoto</a></td>
<td>拍摄照片</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.openLocation.html">wx.openLocation</a></td>
<td>使用微信内置地图查看位置</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getLocation.html">wx.getLocation</a></td>
<td>获取当前的地理位置、速度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseLocation.html">wx.chooseLocation</a></td>
<td>打开地图选择位置</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.updateShareMenu.html">wx.updateShareMenu</a></td>
<td>更新转发属性</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.showShareMenu.html">wx.showShareMenu</a></td>
<td>显示当前页面的转发按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.hideShareMenu.html">wx.hideShareMenu</a></td>
<td>隐藏转发按钮</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getShareInfo.html">wx.getShareInfo</a></td>
<td>获取转发详细信息</td>
</tr>
</tbody>
</table>

## 画布 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createCanvasContext.html">wx.createCanvasContext</a></td>
<td>创建 canvas 的绘图上下文 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.html"><code>CanvasContext</code></a> 对象</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.canvasToTempFilePath.html">wx.canvasToTempFilePath</a></td>
<td>把当前画布指定区域的内容导出生成指定大小的图片</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.canvasPutImageData.html">wx.canvasPutImageData</a></td>
<td>将像素数据绘制到画布</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.canvasGetImageData.html">wx.canvasGetImageData</a></td>
<td>获取 canvas 区域隐含的像素数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Color.html">Color</a></td>
<td>颜色</td>
</tr>
</tbody>
</table>

### CanvasGradient 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasGradient.addColorStop.html">CanvasGradient.addColorStop</a></td>
<td>添加颜色的渐变点</td>
</tr>
</tbody>
</table>

### CanvasContext 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.arc.html">CanvasContext.arc</a></td>
<td>创建一条弧线</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.arcTo.html">CanvasContext.arcTo</a></td>
<td>根据控制点和半径绘制圆弧路径</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.beginPath.html">CanvasContext.beginPath</a></td>
<td>开始创建一个路径</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.bezierCurveTo.html">CanvasContext.bezierCurveTo</a></td>
<td>创建三次方贝塞尔曲线路径</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.clearRect.html">CanvasContext.clearRect</a></td>
<td>清除画布上在该矩形区域内的内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.clip.html">CanvasContext.clip</a></td>
<td>从原始画布中剪切任意形状和尺寸</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.closePath.html">CanvasContext.closePath</a></td>
<td>关闭一个路径</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.createCircularGradient.html">CanvasContext.createCircularGradient</a></td>
<td>创建一个圆形的渐变颜色</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.createLinearGradient.html">CanvasContext.createLinearGradient</a></td>
<td>创建一个线性的渐变颜色</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.createPattern.html">CanvasContext.createPattern</a></td>
<td>对指定的图像创建模式的方法，可在指定的方向上重复元图像</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.draw.html">CanvasContext.draw</a></td>
<td>将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.drawImage.html">CanvasContext.drawImage</a></td>
<td>绘制图像到画布</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.fill.html">CanvasContext.fill</a></td>
<td>对当前路径中的内容进行填充</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.fillRect.html">CanvasContext.fillRect</a></td>
<td>填充一个矩形</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.fillText.html">CanvasContext.fillText</a></td>
<td>在画布上绘制被填充的文本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.lineTo.html">CanvasContext.lineTo</a></td>
<td>增加一个新点，然后创建一条从上次指定点到目标点的线</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.measureText.html">CanvasContext.measureText</a></td>
<td>测量文本尺寸信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.moveTo.html">CanvasContext.moveTo</a></td>
<td>把路径移动到画布中的指定点，不创建线条</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.quadraticCurveTo.html">CanvasContext.quadraticCurveTo</a></td>
<td>创建二次贝塞尔曲线路径</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.rect.html">CanvasContext.rect</a></td>
<td>创建一个矩形路径</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.restore.html">CanvasContext.restore</a></td>
<td>恢复之前保存的绘图上下文</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.rotate.html">CanvasContext.rotate</a></td>
<td>以原点为中心顺时针旋转当前坐标轴</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.save.html">CanvasContext.save</a></td>
<td>保存绘图上下文</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.scale.html">CanvasContext.scale</a></td>
<td>在调用后，之后创建的路径其横纵坐标会被缩放</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setFillStyle.html">CanvasContext.setFillStyle</a></td>
<td>设置填充色</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setFontSize.html">CanvasContext.setFontSize</a></td>
<td>设置字体的字号</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setGlobalAlpha.html">CanvasContext.setGlobalAlpha</a></td>
<td>设置全局画笔透明度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setLineCap.html">CanvasContext.setLineCap</a></td>
<td>设置线条的端点样式</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setLineDash.html">CanvasContext.setLineDash</a></td>
<td>设置虚线样式</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setLineJoin.html">CanvasContext.setLineJoin</a></td>
<td>设置线条的交点样式</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setLineWidth.html">CanvasContext.setLineWidth</a></td>
<td>设置线条的宽度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setMiterLimit.html">CanvasContext.setMiterLimit</a></td>
<td>设置最大斜接长度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setShadow.html">CanvasContext.setShadow</a></td>
<td>设定阴影样式</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setStrokeStyle.html">CanvasContext.setStrokeStyle</a></td>
<td>设置描边颜色</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setTextAlign.html">CanvasContext.setTextAlign</a></td>
<td>设置文字的对齐</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setTextBaseline.html">CanvasContext.setTextBaseline</a></td>
<td>设置文字的竖直对齐</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.setTransform.html">CanvasContext.setTransform</a></td>
<td>使用矩阵重新设置（覆盖）当前变换的方法</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.stroke.html">CanvasContext.stroke</a></td>
<td>画出当前路径的边框</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.strokeRect.html">CanvasContext.strokeRect</a></td>
<td>画一个矩形(非填充)</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.strokeText.html">CanvasContext.strokeText</a></td>
<td>给定的 (x, y) 位置绘制文本描边的方法</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.transform.html">CanvasContext.transform</a></td>
<td>使用矩阵多次叠加当前变换的方法</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/CanvasContext.translate.html">CanvasContext.translate</a></td>
<td>对当前坐标系的原点 (0, 0) 进行变换</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.saveFile.html">wx.saveFile</a></td>
<td>保存文件到本地</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.removeSavedFile.html">wx.removeSavedFile</a></td>
<td>删除本地缓存文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.openDocument.html">wx.openDocument</a></td>
<td>新开页面打开文档</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSavedFileList.html">wx.getSavedFileList</a></td>
<td>获取该小程序下已保存的本地缓存文件列表</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSavedFileInfo.html">wx.getSavedFileInfo</a></td>
<td>获取本地文件的文件信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getFileSystemManager.html">wx.getFileSystemManager</a></td>
<td>获取全局唯一的文件管理器</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getFileInfo.html">wx.getFileInfo</a></td>
<td>获取文件信息</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Stats.isDirectory.html">Stats.isDirectory</a></td>
<td>判断当前文件是否一个目录</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Stats.isFile.html">Stats.isFile</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.access.html">FileSystemManager.access</a></td>
<td>判断文件/目录是否存在</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.accessSync.html">FileSystemManager.accessSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.access.html">FileSystemManager.access</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.appendFile.html">FileSystemManager.appendFile</a></td>
<td>在文件结尾追加内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.appendFileSync.html">FileSystemManager.appendFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.appendFile.html">FileSystemManager.appendFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.copyFile.html">FileSystemManager.copyFile</a></td>
<td>复制文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.copyFileSync.html">FileSystemManager.copyFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.copyFile.html">FileSystemManager.copyFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.getFileInfo.html">FileSystemManager.getFileInfo</a></td>
<td>获取该小程序下的 本地临时文件 或 本地缓存文件 信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.getSavedFileList.html">FileSystemManager.getSavedFileList</a></td>
<td>获取该小程序下已保存的本地缓存文件列表</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.mkdir.html">FileSystemManager.mkdir</a></td>
<td>创建目录</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.mkdirSync.html">FileSystemManager.mkdirSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.mkdir.html">FileSystemManager.mkdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.readdir.html">FileSystemManager.readdir</a></td>
<td>读取目录内文件列表</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.readdirSync.html">FileSystemManager.readdirSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.readdir.html">FileSystemManager.readdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.readFile.html">FileSystemManager.readFile</a></td>
<td>读取本地文件内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.readFileSync.html">FileSystemManager.readFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.readFile.html">FileSystemManager.readFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.removeSavedFile.html">FileSystemManager.removeSavedFile</a></td>
<td>删除该小程序下已保存的本地缓存文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.rename.html">FileSystemManager.rename</a></td>
<td>重命名文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.renameSync.html">FileSystemManager.renameSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.rename.html">FileSystemManager.rename</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.rmdir.html">FileSystemManager.rmdir</a></td>
<td>删除目录</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.rmdirSync.html">FileSystemManager.rmdirSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.rmdir.html">FileSystemManager.rmdir</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.saveFile.html">FileSystemManager.saveFile</a></td>
<td>保存临时文件到本地</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.saveFileSync.html">FileSystemManager.saveFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.saveFile.html">FileSystemManager.saveFile</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.stat.html">FileSystemManager.stat</a></td>
<td>获取文件 Stats 对象</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.statSync.html">FileSystemManager.statSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.stat.html">FileSystemManager.stat</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.unlink.html">FileSystemManager.unlink</a></td>
<td>删除文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.unlinkSync.html">FileSystemManager.unlinkSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.unlink.html">FileSystemManager.unlink</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.unzip.html">FileSystemManager.unzip</a></td>
<td>解压文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.writeFile.html">FileSystemManager.writeFile</a></td>
<td>写文件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.writeFileSync.html">FileSystemManager.writeFileSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/FileSystemManager.writeFile.html">FileSystemManager.writeFile</a> 的同步版本</td>
</tr>
</tbody>
</table>

## 开放接口 


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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.login.html">wx.login</a></td>
<td>调用接口获取登录凭证（code）</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.checkSession.html">wx.checkSession</a></td>
<td>检查登录态是否过期</td>
</tr>
</tbody>
</table>

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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateToMiniProgram.html">wx.navigateToMiniProgram</a></td>
<td>打开另一个小程序</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBackMiniProgram.html">wx.navigateBackMiniProgram</a></td>
<td>返回到上一个小程序</td>
</tr>
</tbody>
</table>

### 帐号信息 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getAccountInfoSync.html">wx.getAccountInfoSync</a></td>
<td>获取当前帐号信息</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getUserInfo.html">wx.getUserInfo</a></td>
<td>获取用户信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/UserInfo.html">UserInfo</a></td>
<td>用户信息</td>
</tr>
</tbody>
</table>

### 数据上报 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.reportMonitor.html">wx.reportMonitor</a></td>
<td>自定义业务数据监控上报接口</td>
</tr>
</tbody>
</table>

### 数据分析 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.reportAnalytics.html">wx.reportAnalytics</a></td>
<td>自定义分析数据上报接口</td>
</tr>
</tbody>
</table>

### 支付 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.requestPayment.html">wx.requestPayment</a></td>
<td>发起微信支付</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.authorize.html">wx.authorize</a></td>
<td>提前向用户发起授权请求</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.openSetting.html">wx.openSetting</a></td>
<td>调起客户端小程序设置界面，返回用户设置的操作结果</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSetting.html">wx.getSetting</a></td>
<td>获取用户的当前设置</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/AuthSetting.html">AuthSetting</a></td>
<td>用户授权设置信息，详情参考<a href="https://developers.weixin.qq.com/miniprogram/dev/api/../framework/open-ability/authorize.html">权限</a></td>
</tr>
</tbody>
</table>

### 收货地址 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseAddress.html">wx.chooseAddress</a></td>
<td>获取用户收货地址</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.openCard.html">wx.openCard</a></td>
<td>查看微信卡包中的卡券</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.addCard.html">wx.addCard</a></td>
<td>批量添加卡券</td>
</tr>
</tbody>
</table>

### 发票 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseInvoiceTitle.html">wx.chooseInvoiceTitle</a></td>
<td>选择用户的发票抬头</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.chooseInvoice.html">wx.chooseInvoice</a></td>
<td>选择用户已有的发票</td>
</tr>
</tbody>
</table>

### 生物认证 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startSoterAuthentication.html">wx.startSoterAuthentication</a></td>
<td>开始 SOTER 生物认证</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.checkIsSupportSoterAuthentication.html">wx.checkIsSupportSoterAuthentication</a></td>
<td>获取本机支持的 SOTER 生物认证方式</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.checkIsSoterEnrolledInDevice.html">wx.checkIsSoterEnrolledInDevice</a></td>
<td>获取设备内是否录入如指纹等生物信息的接口</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getWeRunData.html">wx.getWeRunData</a></td>
<td>获取用户过去三十天微信运动步数</td>
</tr>
</tbody>
</table>

## 设备 


### Wi-Fi 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopWifi.html">wx.stopWifi</a></td>
<td>关闭 Wi-Fi 模块</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startWifi.html">wx.startWifi</a></td>
<td>初始化 Wi-Fi 模块</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setWifiList.html">wx.setWifiList</a></td>
<td>设置 <code>wifiList</code> 中 AP 的相关信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onWifiConnected.html">wx.onWifiConnected</a></td>
<td>监听连接上 Wi-Fi 的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onGetWifiList.html">wx.onGetWifiList</a></td>
<td>监听获取到 Wi-Fi 列表数据事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getWifiList.html">wx.getWifiList</a></td>
<td>请求获取 Wi-Fi 列表</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedWifi.html">wx.getConnectedWifi</a></td>
<td>获取已连接中的 Wi-Fi 信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.connectWifi.html">wx.connectWifi</a></td>
<td>连接 Wi-Fi</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/WifiInfo.html">WifiInfo</a></td>
<td>Wifi 信息</td>
</tr>
</tbody>
</table>

### iBeacon 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopBeaconDiscovery.html">wx.stopBeaconDiscovery</a></td>
<td>停止搜索附近的 iBeacon 设备</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startBeaconDiscovery.html">wx.startBeaconDiscovery</a></td>
<td>开始搜索附近的 iBeacon 设备</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBeaconUpdate.html">wx.onBeaconUpdate</a></td>
<td>监听 iBeacon 设备更新事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBeaconServiceChange.html">wx.onBeaconServiceChange</a></td>
<td>监听 iBeacon 服务状态变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBeacons.html">wx.getBeacons</a></td>
<td>获取所有已搜索到的 iBeacon 设备</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/IBeaconInfo.html">IBeaconInfo</a></td>
<td></td>
</tr>
</tbody>
</table>

### 联系人 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.addPhoneContact.html">wx.addPhoneContact</a></td>
<td>添加手机通讯录联系人</td>
</tr>
</tbody>
</table>

### 低功耗蓝牙 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.writeBLECharacteristicValue.html">wx.writeBLECharacteristicValue</a></td>
<td>向低功耗蓝牙设备特征值中写入二进制数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.readBLECharacteristicValue.html">wx.readBLECharacteristicValue</a></td>
<td>读取低功耗蓝牙设备的特征值的二进制数据值</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBLEConnectionStateChange.html">wx.onBLEConnectionStateChange</a></td>
<td>监听低功耗蓝牙连接状态的改变事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBLECharacteristicValueChange.html">wx.onBLECharacteristicValueChange</a></td>
<td>监听低功耗蓝牙设备的特征值变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.notifyBLECharacteristicValueChange.html">wx.notifyBLECharacteristicValueChange</a></td>
<td>启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBLEDeviceServices.html">wx.getBLEDeviceServices</a></td>
<td>获取蓝牙设备所有服务(service)</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBLEDeviceCharacteristics.html">wx.getBLEDeviceCharacteristics</a></td>
<td>获取蓝牙设备某个服务中所有特征值(characteristic)</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createBLEConnection.html">wx.createBLEConnection</a></td>
<td>连接低功耗蓝牙设备</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.closeBLEConnection.html">wx.closeBLEConnection</a></td>
<td>断开与低功耗蓝牙设备的连接</td>
</tr>
</tbody>
</table>

### 蓝牙 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopBluetoothDevicesDiscovery.html">wx.stopBluetoothDevicesDiscovery</a></td>
<td>停止搜寻附近的蓝牙外围设备</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startBluetoothDevicesDiscovery.html">wx.startBluetoothDevicesDiscovery</a></td>
<td>开始搜寻附近的蓝牙外围设备</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.openBluetoothAdapter.html">wx.openBluetoothAdapter</a></td>
<td>初始化蓝牙模块</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBluetoothDeviceFound.html">wx.onBluetoothDeviceFound</a></td>
<td>监听寻找到新设备的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onBluetoothAdapterStateChange.html">wx.onBluetoothAdapterStateChange</a></td>
<td>监听蓝牙适配器状态变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedBluetoothDevices.html">wx.getConnectedBluetoothDevices</a></td>
<td>根据 uuid 获取处于已连接状态的设备</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBluetoothDevices.html">wx.getBluetoothDevices</a></td>
<td>获取在蓝牙模块生效期间所有已发现的蓝牙设备</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBluetoothAdapterState.html">wx.getBluetoothAdapterState</a></td>
<td>获取本机蓝牙适配器状态</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.closeBluetoothAdapter.html">wx.closeBluetoothAdapter</a></td>
<td>关闭蓝牙模块</td>
</tr>
</tbody>
</table>

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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBatteryInfoSync.html">wx.getBatteryInfoSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBatteryInfo.html">wx.getBatteryInfo</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getBatteryInfo.html">wx.getBatteryInfo</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setClipboardData.html">wx.setClipboardData</a></td>
<td>设置系统剪贴板的内容</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getClipboardData.html">wx.getClipboardData</a></td>
<td>获取系统剪贴板的内容</td>
</tr>
</tbody>
</table>

### NFC 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopHCE.html">wx.stopHCE</a></td>
<td>关闭 NFC 模块</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startHCE.html">wx.startHCE</a></td>
<td>初始化 NFC 模块</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.sendHCEMessage.html">wx.sendHCEMessage</a></td>
<td>发送 NFC 消息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onHCEMessage.html">wx.onHCEMessage</a></td>
<td>监听接收 NFC 设备消息事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getHCEState.html">wx.getHCEState</a></td>
<td>判断当前设备是否支持 HCE 能力</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onNetworkStatusChange.html">wx.onNetworkStatusChange</a></td>
<td>监听网络状态变化事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getNetworkType.html">wx.getNetworkType</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setScreenBrightness.html">wx.setScreenBrightness</a></td>
<td>设置屏幕亮度</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.setKeepScreenOn.html">wx.setKeepScreenOn</a></td>
<td>设置是否保持常亮状态</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onUserCaptureScreen.html">wx.onUserCaptureScreen</a></td>
<td>监听用户主动截屏事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getScreenBrightness.html">wx.getScreenBrightness</a></td>
<td>获取屏幕亮度</td>
</tr>
</tbody>
</table>

### 电话 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.makePhoneCall.html">wx.makePhoneCall</a></td>
<td>拨打电话</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopAccelerometer.html">wx.stopAccelerometer</a></td>
<td>停止监听加速度数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startAccelerometer.html">wx.startAccelerometer</a></td>
<td>开始监听加速度数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onAccelerometerChange.html">wx.onAccelerometerChange</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopCompass.html">wx.stopCompass</a></td>
<td>停止监听罗盘数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startCompass.html">wx.startCompass</a></td>
<td>开始监听罗盘数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onCompassChange.html">wx.onCompassChange</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopDeviceMotionListening.html">wx.stopDeviceMotionListening</a></td>
<td>停止监听设备方向的变化</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startDeviceMotionListening.html">wx.startDeviceMotionListening</a></td>
<td>开始监听设备方向的变化</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onDeviceMotionChange.html">wx.onDeviceMotionChange</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopGyroscope.html">wx.stopGyroscope</a></td>
<td>停止监听陀螺仪数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.startGyroscope.html">wx.startGyroscope</a></td>
<td>开始监听陀螺仪数据</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onGyroscopeChange.html">wx.onGyroscopeChange</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.onMemoryWarning.html">wx.onMemoryWarning</a></td>
<td>监听内存不足告警事件</td>
</tr>
</tbody>
</table>

### 扫码 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.scanCode.html">wx.scanCode</a></td>
<td>调起客户端扫码界面进行扫码</td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.vibrateShort.html">wx.vibrateShort</a></td>
<td>使手机发生较短时间的振动（15 ms）</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.vibrateLong.html">wx.vibrateLong</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createWorker.html">wx.createWorker</a></td>
<td>创建一个 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/../framework/workers.html">Worker 线程</a></td>
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
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Worker.onMessage.html">Worker.onMessage</a></td>
<td>监听主线程/Worker 线程向当前线程发送的消息的事件</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Worker.postMessage.html">Worker.postMessage</a></td>
<td>向主线程/Worker 线程发送的消息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/Worker.terminate.html">Worker.terminate</a></td>
<td>结束当前 Worker 线程</td>
</tr>
</tbody>
</table>

## 第三方平台 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getExtConfigSync.html">wx.getExtConfigSync</a></td>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getExtConfig.html">wx.getExtConfig</a> 的同步版本</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.getExtConfig.html">wx.getExtConfig</a></td>
<td>获取<a href="https://developers.weixin.qq.com/miniprogram/dev/api/../devtools/ext.html">第三方平台</a>自定义的数据字段</td>
</tr>
</tbody>
</table>

## WXML 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createSelectorQuery.html">wx.createSelectorQuery</a></td>
<td>返回一个 SelectorQuery 对象实例</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wx.createIntersectionObserver.html">wx.createIntersectionObserver</a></td>
<td>创建并返回一个 IntersectionObserver 对象实例</td>
</tr>
</tbody>
</table>

### SelectorQuery 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SelectorQuery.exec.html">SelectorQuery.exec</a></td>
<td>执行所有的请求</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SelectorQuery.in.html">SelectorQuery.in</a></td>
<td>将选择器的选取范围更改为自定义组件 <code>component</code> 内</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SelectorQuery.select.html">SelectorQuery.select</a></td>
<td>在当前页面下选择第一个匹配选择器 <code>selector</code> 的节点</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SelectorQuery.selectAll.html">SelectorQuery.selectAll</a></td>
<td>在当前页面下选择匹配选择器 selector 的所有节点</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/SelectorQuery.selectViewport.html">SelectorQuery.selectViewport</a></td>
<td>选择显示区域</td>
</tr>
</tbody>
</table>

### NodesRef 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/NodesRef.boundingClientRect.html">NodesRef.boundingClientRect</a></td>
<td>添加节点的布局位置的查询请求</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/NodesRef.context.html">NodesRef.context</a></td>
<td>添加节点的 Context 对象查询请求</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/NodesRef.fields.html">NodesRef.fields</a></td>
<td>获取节点的相关信息</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/NodesRef.scrollOffset.html">NodesRef.scrollOffset</a></td>
<td>添加节点的滚动位置查询请求</td>
</tr>
</tbody>
</table>

### IntersectionObserver 

<table>
<thead>
<tr>
<th>名称</th>
<th>功能说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/IntersectionObserver.disconnect.html">IntersectionObserver.disconnect</a></td>
<td>停止监听</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/IntersectionObserver.observe.html">IntersectionObserver.observe</a></td>
<td>指定目标节点并开始监听相交状态变化情况</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/IntersectionObserver.relativeTo.html">IntersectionObserver.relativeTo</a></td>
<td>使用选择器指定一个节点，作为参照区域之一</td>
</tr>
<tr>
<td><a href="https://developers.weixin.qq.com/miniprogram/dev/api/IntersectionObserver.relativeToViewport.html">IntersectionObserver.relativeToViewport</a></td>
<td>指定页面显示区域作为参照区域之一</td>
</tr>
</tbody>
</table>

                            