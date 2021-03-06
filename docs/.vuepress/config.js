module.exports = {
  head: [
    ['link', { rel: 'icon', href: `/logo/logo_transparent.png` }],
    ['meta', { name: 'sogou_site_verification', content: '4vLjSpDsX2' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Mina.wiki - 小程序百科',
      description: '助力小程序开发者变现，提高开发生产效率'
    }
  },
  themeConfig: {
    repo: 'IOriens/mina-wiki',
    repoLabel: '参与维护',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '内容订正',
    docsBranch: 'dev',
    nav: [
      {
        text: '指南',
        items: [
          // { text: '小程序 API', link: '/doc/api' },
          // { text: '小游戏 API', link: '/doc/game' },
          { text: 'SEO 指南', link: '/doc/seo' },

          { text: '过审指南(微信)', link: '/doc/review' },
          { text: '过审指南(QQ)', link: '/doc/review-qq' }
        ]
      },
      {
        text: '生态',
        items: [
          { text: '服务提供商', link: '/eco/vender' },
          { text: '前端框架对比', link: '/eco/framework' },
          { text: 'UI 框架对比', link: '/eco/ui' }
        ]
      },
      { text: '小程序示例', link: '/case/' },
      { text: '小程序路径大全', link: '/appid/' }
    ],
    lastUpdated: '上次更新'
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: process.env.SITEHOST || 'https://mina.wiki'
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
        updatePopup: {
          message: '网站内容有更新哟！',
          buttonText: '刷新'
        }
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    ],
    '@vuepress/back-to-top',
    'vuepress-plugin-baidu-autopush',
    'vuepress-plugin-qihu-autopush',
    '@vuepress/medium-zoom',
    // [
    //   'autometa',
    //   {
    //     site: {
    //       name: 'Junjie.xyz',
    //       twitter: 'I_Oriens'
    //     },
    //     canonical_base: 'https://mina.wiki'
    //   }
    // ],
    [
      'vuepress-plugin-canonical',
      {
        baseURL: 'https://mina.wiki',
        stripExtension: false
      }
    ],
    [
      require('./plugins/vuepress-plugin-google-analytics'),
      {
        ga: 'UA-136795533-1'
      }
    ]
  ]
}
