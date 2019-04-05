const fs = require('fs')
const path = require('path')

const cheerio = require('cheerio')
const crawl = require('./utils/crawler')

const formatWXArticle = (source, baseURL, title) => {
  const $ = cheerio.load(source.toString(), {
    withDomLvl1: true,
    normalizeWhitespace: true,
    xmlMode: false,
    decodeEntities: false
  })

  $('h1').map(function (idx, ele) {
    if ($(this).text() == 'API') {
      $(this).text(title)
    }
  })

  $('h1,h2,h3,h4').map(function (idx, ele) {
    let level = parseInt(ele.name.slice(1))
    $(this).replaceWith(`\n${''.padEnd(level, '#')} ${$(this).text()} \n`)
  })

  $('a').map(function (idx, ele) {
    let href = $(this).attr('href')
    $(this).attr('href', baseURL + href)
  })

  return $('.markdown-section').html()
}

;(async function main () {
  let queue = [
    {
      url: 'https://developers.weixin.qq.com/miniprogram/dev/api/',
      dist: path.resolve(__dirname, '../docs/doc/api.md'),
      title: '小程序 API',
      header: `---
sidebar: auto
---`
    },
    {
      url: 'https://developers.weixin.qq.com/minigame/dev/api/',
      dist: path.resolve(__dirname, '../docs/doc/game.md'),
      title: '小游戏 API',
      header: `---
sidebar: auto
---`
    }
  ]

  for (let config of queue) {
    await crawl({
      url: config.url,
      callback: async page => {
        let sec = await page.evaluate(config => {
          return document.querySelector('.markdown-section').outerHTML
        }, config)

        fs.writeFileSync(
          config.dist,
          `${config.header} ${formatWXArticle(
            sec,
            config.url,
            config.title
          )}`
        )
      }
    })
  }
})()
