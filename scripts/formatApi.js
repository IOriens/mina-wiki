const fs = require('fs')
const path = require('path')

const cheerio = require('cheerio')

let apiSource = fs.readFileSync(path.resolve(__dirname, './sources/api.html'))
let gameSource = fs.readFileSync(path.resolve(__dirname, './sources/game.html'))

const formatWXArticle = (source, baseURL, title) => {
  const $ = cheerio.load(source.toString(), {
    withDomLvl1: true,
    normalizeWhitespace: true,
    xmlMode: false,
    decodeEntities: false
  })

  $('h1').map(function (idx, ele) {
    if($(this).text() == 'API') {
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
    // let level = parseInt(ele.name.slice(1))
    // $(this).replaceWith(`\n${''.padEnd(level, '#')} ${$(this).text()} \n`)
  })

  return $('.markdown-section').html()

}

let header =  `---
sidebar: auto
---
`

fs.writeFileSync(
  path.resolve(__dirname, './transformDist/api.md'),
  `${header} ${formatWXArticle(apiSource, 'https://developers.weixin.qq.com/miniprogram/dev/api/', '小程序 API')}`
)

fs.writeFileSync(
  path.resolve(__dirname, './transformDist/game.md'),
  `${header} ${formatWXArticle(gameSource, 'https://developers.weixin.qq.com/minigame/dev/api/', '小游戏 API')}`
)

