const fs = require('fs')
const path = require('path')
const { downloadAndWriteFile } = require('./utils/downloadFile')

;(async function main () {
  console.log('update awsome apps')
  let tmpFilePath = path.resolve(__dirname, './transformDist/case.md')
  const content = await downloadAndWriteFile(
    'https://raw.githubusercontent.com/justjavac/awesome-wechat-weapp/master/README.md',
    tmpFilePath
  )

  let source = fs.readFileSync(tmpFilePath)

  source = source.toString().match(/## Demo([\s\S]*)\[↑ 返回/)[1]

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
})()
