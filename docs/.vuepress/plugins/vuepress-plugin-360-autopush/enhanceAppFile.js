export default ({ router }) => {
  // Baidu autopsh integration
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    ;(function () {
      var src =
        document.location.protocol == 'http:'
          ? 'http://js.passport.qihucdn.com/11.0.1.js?1ee098382242d259540125aa60c65a5a'
          : 'https://jspassport.ssl.qhimg.com/11.0.1.js?1ee098382242d259540125aa60c65a5a'
      document.write('<script src="' + src + '" id="sozz"></script>')
    })()
  }
}
