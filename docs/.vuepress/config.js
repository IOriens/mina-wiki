module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mina.wiki - 小程序百科",
      description: "小程序百科，Wikipedia for Miniapp Developers"
    }
  },
  themeConfig: {
    repo: "IOriens/mina-wiki",
    repoLabel: "源码",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
    nav: [
      {
        text: "文档",
        items: [
          { text: "小程序 API", link: "/doc/api" },
          { text: "小游戏 API", link: "/doc/game" },
          { text: "过审指南", link: "/doc/review" },
        ]
      },
      {
        text: "生态",
        items: [
          { text: "框架", link: "/eco/framework" },
          { text: "服务提供商", link: "/eco/vender" },
        ]
      },
      { text: "小程序示例", link: "/case/" },
      { text: "小程序路径大全", link: "/appid/" }
    ],
    lastUpdated: "更新于",
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: "网站内容有更新哟！",
        buttonText: "好的"
      }
    }
  }
};
