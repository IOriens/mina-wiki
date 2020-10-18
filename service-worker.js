/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ef18f6cdb1942d3ed00f53fed7fec11d"
  },
  {
    "url": "announce/11556192658Vn8s2.html",
    "revision": "65f505369f143973ff9ebfdd826cc8a9"
  },
  {
    "url": "announce/11556192658Vn8s3.html",
    "revision": "6632ff8e753758e9f3f3f39db16eede8"
  },
  {
    "url": "announce/35183a53b5ea19a799ef6f2721daf4d9.html",
    "revision": "9d2d6d466956971662b90a8be501e043"
  },
  {
    "url": "appid.html",
    "revision": "80a452a9f45f337ab29150a8afbcae32"
  },
  {
    "url": "assets/css/0.styles.d9a2d4cf.css",
    "revision": "7e22975fc274b605f4a4c07a89c0c144"
  },
  {
    "url": "assets/img/2019-04-27-17-20-55.ba803022.png",
    "revision": "ba8030227a357332ffcd6d2b945a5a7f"
  },
  {
    "url": "assets/img/2019-04-27-17-24-01.b3e15d4d.png",
    "revision": "b3e15d4d833a16139743de345074f884"
  },
  {
    "url": "assets/img/2019-04-27-22-04-49.0b099089.png",
    "revision": "0b099089378aee4974db23fb7b6b8c78"
  },
  {
    "url": "assets/img/2019-04-27-22-05-32.7201abc9.png",
    "revision": "7201abc9d100563eca4bf5172f2c5860"
  },
  {
    "url": "assets/img/2019-04-27-23-45-23.69cabb21.png",
    "revision": "69cabb21dc1213be9a58316125d89a9d"
  },
  {
    "url": "assets/img/2019-04-27-23-46-04.8e9bb6fe.png",
    "revision": "8e9bb6fe03d9033f741636bd03093b21"
  },
  {
    "url": "assets/img/2019-04-27-23-48-11.24bd7f9b.png",
    "revision": "24bd7f9be760476aaa5dcbdfa785b762"
  },
  {
    "url": "assets/img/2019-04-27-23-48-28.f387f3d1.png",
    "revision": "f387f3d1b23f04ac969856f89d13fb10"
  },
  {
    "url": "assets/img/2019-04-27-23-49-14.c2e36061.png",
    "revision": "c2e36061aefa36a0cb2999bc50cb3a70"
  },
  {
    "url": "assets/img/2019-12-20-14-13-41.da3badcb.png",
    "revision": "da3badcba58e3399f1b5d0bbe0a6d73f"
  },
  {
    "url": "assets/img/2019-12-20-14-13-58.f5bb1b9b.png",
    "revision": "f5bb1b9b2689371d2b83d20c9270e961"
  },
  {
    "url": "assets/img/2019-12-20-14-15-15.91233ce0.png",
    "revision": "91233ce09ef016be166b75cc5a78ef16"
  },
  {
    "url": "assets/img/2019-12-20-14-16-41.fac44768.png",
    "revision": "fac44768e142125a78a7b03c30bc508f"
  },
  {
    "url": "assets/img/2019-12-20-14-16-48.926e94bd.png",
    "revision": "926e94bdd5e18e418316873a2eee1191"
  },
  {
    "url": "assets/img/2019-12-20-14-17-23.1c9fcad4.png",
    "revision": "1c9fcad49c1070bc3f58a69de383142c"
  },
  {
    "url": "assets/img/2019-12-20-14-18-41.fb05fad2.png",
    "revision": "fb05fad25a7ac321a366da9bff2464a1"
  },
  {
    "url": "assets/img/2019-12-20-14-19-57.59199949.png",
    "revision": "59199949cdf4996d38d87a78deed10fa"
  },
  {
    "url": "assets/img/2019-12-20-14-20-04.6ce17e04.png",
    "revision": "6ce17e043cecf36ec82043aff3bf77ab"
  },
  {
    "url": "assets/img/2019-12-20-14-20-26.44d4e119.png",
    "revision": "44d4e11929a03ddc8a24df2001a57263"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.95471d80.js",
    "revision": "2e3fb1ae50b6bfed919d6225e50dde51"
  },
  {
    "url": "assets/js/11.ec500660.js",
    "revision": "1f69839764869000f2c6d4516fc35898"
  },
  {
    "url": "assets/js/12.a652ffea.js",
    "revision": "71904250b63569648b7019d0bb39185a"
  },
  {
    "url": "assets/js/13.33db644a.js",
    "revision": "10e8d2fc9a71fea13bcfdef7a697f9a2"
  },
  {
    "url": "assets/js/14.82f09982.js",
    "revision": "7bef9d571f3069886cdc2a0f1512314b"
  },
  {
    "url": "assets/js/15.c4b04a4c.js",
    "revision": "19d961cba17d900846c6790e47c17fe0"
  },
  {
    "url": "assets/js/16.93910a64.js",
    "revision": "7ca5c50224ed5a90ec9580c2baaf0e0b"
  },
  {
    "url": "assets/js/17.a2dbfbfb.js",
    "revision": "0cc3f6b8a6458152d2184f81f7fbce24"
  },
  {
    "url": "assets/js/18.6ff69f8f.js",
    "revision": "16fa531bba4be3fe52a5be386c7b3149"
  },
  {
    "url": "assets/js/19.d3c2b5d4.js",
    "revision": "715b58c2a0a1bf3baa9dbbd709991fb7"
  },
  {
    "url": "assets/js/20.0d68e931.js",
    "revision": "40a8f9ec2b25f6ce84993cb9bda23fab"
  },
  {
    "url": "assets/js/21.cca67843.js",
    "revision": "7bb27f49dc09f4db308d9a39724ec30c"
  },
  {
    "url": "assets/js/22.15e26e3b.js",
    "revision": "8c44bbb1af1946b90193933b79e63646"
  },
  {
    "url": "assets/js/23.f72bc672.js",
    "revision": "d0d55fbb392737678b51877315ed489c"
  },
  {
    "url": "assets/js/24.61425569.js",
    "revision": "eb77324f4096a808cc104c01a37a48f7"
  },
  {
    "url": "assets/js/25.f51d93b3.js",
    "revision": "02bdc3d733451072ef7a9344a9428b47"
  },
  {
    "url": "assets/js/26.d879ce1a.js",
    "revision": "388db85e66be2a4ba997193e1b7d5b67"
  },
  {
    "url": "assets/js/3.97dcde6d.js",
    "revision": "bfa0fe844f4cfd7114dbb2d9def89c8f"
  },
  {
    "url": "assets/js/4.c1b64a00.js",
    "revision": "63b759d08e6d7de29e2358212be237e6"
  },
  {
    "url": "assets/js/5.35621370.js",
    "revision": "5cfc20f5457446ddbb4d475b6f3bfbff"
  },
  {
    "url": "assets/js/6.3550d454.js",
    "revision": "b5b8d4334269d53dca62411adfd094ea"
  },
  {
    "url": "assets/js/7.a829f15c.js",
    "revision": "6d762910910df204166235e2d83de7f8"
  },
  {
    "url": "assets/js/8.810c3dc2.js",
    "revision": "f946691a72728116ad4740683040ab1b"
  },
  {
    "url": "assets/js/9.0e925d7f.js",
    "revision": "3a51a95767c0b3a77163446073812e93"
  },
  {
    "url": "assets/js/app.cfabdb3e.js",
    "revision": "d2ca818f76335ac2105d0418b99fe951"
  },
  {
    "url": "assets/js/vendors~autotrack.e5e3c673.js",
    "revision": "efc3b4ab896592230a85854375a558b4"
  },
  {
    "url": "case.html",
    "revision": "aa8d8e2f71dfe0ccb60d4a9bee9db0fe"
  },
  {
    "url": "doc/api.html",
    "revision": "71c1d9da5eb1473ff49dcf3251c67de4"
  },
  {
    "url": "doc/game.html",
    "revision": "f0b4d3ffc65e371644f6adc2250164c4"
  },
  {
    "url": "doc/review-qq.html",
    "revision": "805f7be21770a40ed5bdf2e68c02d2d7"
  },
  {
    "url": "doc/review.html",
    "revision": "fb084e79d669c999ce65cb6f17ac512a"
  },
  {
    "url": "doc/seo.html",
    "revision": "106caba5d961695cb0bb6310d25d7140"
  },
  {
    "url": "eco/blog.html",
    "revision": "b99179682d517258cf7712d53dafc058"
  },
  {
    "url": "eco/framework.html",
    "revision": "07e038f60406ebce50675bab12afb198"
  },
  {
    "url": "eco/map.html",
    "revision": "3724cc9b8a3229e9b867ddb3bf12c172"
  },
  {
    "url": "eco/ui.html",
    "revision": "9b5465d13efc54415de963d7b80e2413"
  },
  {
    "url": "eco/vender.html",
    "revision": "b758b755344fdae42b436ac401c7339d"
  },
  {
    "url": "index.html",
    "revision": "7839beda98033f14489af07aeabb8598"
  },
  {
    "url": "logo/facebook_cover_photo_1.png",
    "revision": "f850ceaafa7496cd03d67c3feecf81b8"
  },
  {
    "url": "logo/facebook_cover_photo_2.png",
    "revision": "2d84862cf64d045c68541d38be193b85"
  },
  {
    "url": "logo/facebook_profile_image.png",
    "revision": "020e24cb1bc5ee5e6e39ac5cd24fcc79"
  },
  {
    "url": "logo/favicon.png",
    "revision": "293939f6163922b45d3fa37c0e70802b"
  },
  {
    "url": "logo/instagram_profile_image.png",
    "revision": "65ceaee5e08ac6175fcafa295fe3acef"
  },
  {
    "url": "logo/linkedin_banner_image_1.png",
    "revision": "eeca1d29c7d0d70f0389fe9d04275fad"
  },
  {
    "url": "logo/linkedin_banner_image_2.png",
    "revision": "38956710aa8c6ac6504e9c95cb3cebd3"
  },
  {
    "url": "logo/linkedin_profile_image.png",
    "revision": "65ceaee5e08ac6175fcafa295fe3acef"
  },
  {
    "url": "logo/logo_transparent.png",
    "revision": "5f68f9f4443dc73d5edfc11f23fbdcd1"
  },
  {
    "url": "logo/logo.png",
    "revision": "020e24cb1bc5ee5e6e39ac5cd24fcc79"
  },
  {
    "url": "logo/pinterest_board_photo.png",
    "revision": "ddab4da9a719293a200b705dd14dbc51"
  },
  {
    "url": "logo/pinterest_profile_image.png",
    "revision": "b9f2d3560ca39eb7573cdc809115e7de"
  },
  {
    "url": "logo/twitter_header_photo_1.png",
    "revision": "45cc311a4d792fb34f64b156784bf581"
  },
  {
    "url": "logo/twitter_header_photo_2.png",
    "revision": "06abdbc6b2c2602b5b056c20233eed13"
  },
  {
    "url": "logo/twitter_profile_image.png",
    "revision": "ddab4da9a719293a200b705dd14dbc51"
  },
  {
    "url": "logo/youtube_profile_image.png",
    "revision": "ddab4da9a719293a200b705dd14dbc51"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
