/* global GA_ID, ga */

function addUtmSource () {
  try {
    Array.from(document.querySelectorAll('a'))
      .filter(
        item =>
          item.href &&
          !item.href.includes('mina.wiki') &&
          !item.href.includes('mina-wiki') &&
          !item.href.includes('utm_source')
      )
      .map(item => {
        if (item.href.includes('?')) {
          item.href = item.href + `&utm_source=mina.wiki&utm_medium=referral`
        } else {
          item.href = item.href + `?utm_source=mina.wiki&utm_medium=referral`
        }
      })
  } catch (e) {
    console.error(e)
  }
}

export default ({ router }) => {
  // Google analytics integration
  if (
    process.env.NODE_ENV === 'production' &&
    GA_ID &&
    typeof window !== 'undefined'
  ) {
    ;(function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r
      i[r] =
        i[r] ||
        function () {
          ;(i[r].q = i[r].q || []).push(arguments)
        }
      i[r].l = 1 * new Date()
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(
      window,
      document,
      'script',
      'https://www.google-analytics.com/analytics.js',
      'ga'
    )

    import(/* webpackChunkName: "autotrack" */ 'autotrack')

    ga('create', GA_ID, 'auto')
    ga('send', 'pageview')

    ga('require', 'eventTracker')
    ga('require', 'outboundLinkTracker')
    ga('require', 'urlChangeTracker')
    ga('require', 'pageVisibilityTracker')
    ga('require', 'maxScrollTracker')

    addUtmSource()

    // Feature detects Navigation Timing API support.
    if (window.performance) {
      // Gets the number of milliseconds since page load
      // (and rounds the result since the value must be an integer).
      var timeSincePageLoad = Math.round(performance.now())

      // Sends the timing hit to Google Analytics.
      ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad)
    }

    router.afterEach(function (to) {
      addUtmSource()
    })
  }
}
