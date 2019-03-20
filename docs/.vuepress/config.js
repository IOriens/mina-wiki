module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mina.wiki - 小程序百科",
      description: "小程序百科，Wikipedia for Miniapp Developers"
    }
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: 'VuePress 1.x',
    //   description: 'Vue 驱动的静态网站生成器'
    // }
  },
  // theme: "@vuepress/vue",
  themeConfig: {
    repo: "IOriens/mina-wiki",
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'API 列表', link: '/case/' },
      { text: '小程序示例', link: '/api/' },
      { text: 'Appid & 路径大全', link: '/appid/' },
      // { text: 'External', link: 'https://google.com' },
    ]
    // editLinks: true,

    // docsDir: "packages/docs/docs",
    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,
    // locales: {
    //   // "/": {
    //   //   label: "English",
    //   //   selectText: "Languages",
    //   //   editLinkText: "Edit this page on GitHub",
    //   //   lastUpdated: "Last Updated",
    //   //   nav: require("./nav/en"),
    //   //   sidebar: {
    //   //     "/api/": getApiSidebar(),
    //   //     "/guide/": getGuideSidebar("Guide", "Advanced"),
    //   //     "/plugin/": getPluginSidebar(
    //   //       "Plugin",
    //   //       "Introduction",
    //   //       "Official Plugins"
    //   //     ),
    //   //     "/theme/": getThemeSidebar("Theme", "Introduction")
    //   //   }
    //   // },
    //   "/": {
    //     label: "简体中文",
    //     selectText: "选择语言",
    //     editLinkText: "在 GitHub 上编辑此页",
    //     lastUpdated: "上次更新",
    //     nav: require("./nav/zh"),
    //     sidebar: {
    //       "/zh/api/": getApiSidebar(),
    //       "/zh/guide/": getGuideSidebar("指南", "深入"),
    //       "/zh/plugin/": getPluginSidebar("插件", "介绍", "官方插件"),
    //       "/zh/theme/": getThemeSidebar("主题", "介绍")
    //     }
    //   }
    // }
  }
};
