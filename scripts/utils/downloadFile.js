const { resolve, join } = require('path')
const fs = require('fs')
const request = require('request-promise')

async function downloadAndWriteFile (url, dist) {
  const options = {
    url: url,
    encoding: null
  }

  try {
    await request.get(options).then(function (res) {
      const buffer = Buffer.from(res, 'utf8')
      fs.writeFileSync(dist, buffer)
    })
  } catch (err) {
    console.error('获取文件失败', url)
    throw new Error(err)
  }


}

async function downloadFile (url) {
  const options = {
    url: url,
    encoding: null
  }

  await request.get(options).then(function (res) {
    const buffer = Buffer.from(res, 'utf8')
    // fs.writeFileSync(join(dist, url.split('/').pop()), buffer)
    return buffer.toString()
  })
}

module.exports = {
  downloadFile,
  downloadAndWriteFile
}
