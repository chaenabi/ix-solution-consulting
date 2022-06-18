// Avoid `console` errors in browsers that lack a console.
;(function () {
  var method
  var noop = function () {}
  var methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    //'trace',
    'warn',
  ]
  var length = methods.length
  var console = (window.console = window.console || {})

  while (length--) {
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
})()

// Place any jQuery/helper plugins in here.

/**
 * Mean Menu
 */
!(function (e) {
  'use strict'
  e.fn.meanmenu = function (n) {
    var a = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: '.mobile-menu-area .container',
      meanMenuClose: 'X',
      meanMenuCloseSize: '18px',
      meanMenuOpen: '<span /><span /><span />',
      meanRevealPosition: 'right',
      meanRevealPositionDistance: '0',
      meanRevealColour: '',
      meanScreenWidth: '991',
      meanNavPush: '',
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: '+',
      meanContract: '-',
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: 'block',
      removeElements: '',
    }
    n = e.extend(a, n)
    var t = window.innerWidth || document.documentElement.clientWidth
    return this.each(function () {
      var e = n.meanMenuTarget,
        a = n.meanMenuContainer,
        r = n.meanMenuClose,
        i = n.meanMenuCloseSize,
        m = n.meanMenuOpen,
        s = n.meanRevealPosition,
        u = n.meanRevealPositionDistance,
        l = n.meanRevealColour,
        o = n.meanScreenWidth,
        c = n.meanNavPush,
        h = '.meanmenu-reveal',
        v = n.meanShowChildren,
        d = n.meanExpandableChildren,
        y = n.meanExpand,
        j = n.meanContract,
        Q = n.meanRemoveAttrs,
        f = n.onePage,
        g = n.meanDisplay,
        p = n.removeElements,
        C = !1
      ;(navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (C = !0),
        (navigator.userAgent.match(/MSIE 8/i) ||
          navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery('html').css('overflow-y', 'scroll')
      var w = '',
        x = function () {
          if ('center' === s) {
            var e =
              (window.innerWidth || document.documentElement.clientWidth) / 2 -
              22 +
              'px'
            ;(w = 'left:' + e + ';right:auto;'),
              C
                ? jQuery('.meanmenu-reveal').animate({ left: e })
                : jQuery('.meanmenu-reveal').css('left', e)
          }
        },
        A = !1,
        E = !1
      'right' === s && (w = 'right:' + u + ';left:auto;'),
        'left' === s && (w = 'left:' + u + ';right:auto;'),
        x()
      var M = '',
        P = function () {
          jQuery('.mean-bar,.mean-push').remove(),
            jQuery(a).removeClass('mean-container'),
            jQuery(e).css('display', g),
            (A = !1),
            (E = !1),
            jQuery(p).removeClass('mean-remove')
        },
        W = function () {
          var n = 'background:' + l + ';color:' + l + ';' + w
          if (t <= o) {
            jQuery(p).addClass('mean-remove'),
              (E = !0),
              jQuery(a).addClass('mean-container'),
              jQuery('.mean-container').prepend(
                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                  n +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              )
            var s = jQuery(e).html()
            jQuery('.mean-nav').html(s),
              Q &&
                jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function () {
                  jQuery(this).is('.mean-remove')
                    ? jQuery(this).attr('class', 'mean-remove')
                    : jQuery(this).removeAttr('class'),
                    jQuery(this).removeAttr('id')
                }),
              jQuery(e).before('<div class="mean-push" />'),
              jQuery('.mean-push').css('margin-top', c),
              jQuery(e).hide(),
              jQuery('.meanmenu-reveal').show(),
              jQuery(h).html(m),
              (M = jQuery(h)),
              jQuery('.mean-nav ul').hide(),
              v
                ? d
                  ? (jQuery('.mean-nav ul ul').each(function () {
                      jQuery(this).children().length &&
                        jQuery(this, 'li:first')
                          .parent()
                          .append(
                            '<a class="mean-expand" href="#" style="font-size: ' +
                              i +
                              '">' +
                              y +
                              '</a>'
                          )
                    }),
                    jQuery('.mean-expand').on('click', function (e) {
                      e.preventDefault(),
                        jQuery(this).hasClass('mean-clicked')
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev('ul')
                              .slideUp(300, function () {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev('ul')
                              .slideDown(300, function () {})),
                        jQuery(this).toggleClass('mean-clicked')
                    }))
                  : jQuery('.mean-nav ul ul').show()
                : jQuery('.mean-nav ul ul').hide(),
              jQuery('.mean-nav ul li').last().addClass('mean-last'),
              M.removeClass('meanclose'),
              jQuery(M).click(function (e) {
                e.preventDefault(),
                  !1 === A
                    ? (M.css('text-align', 'center'),
                      M.css('text-indent', '0'),
                      M.css('font-size', i),
                      jQuery('.mean-nav ul:first').slideDown(),
                      (A = !0))
                    : (jQuery('.mean-nav ul:first').slideUp(), (A = !1)),
                  M.toggleClass('meanclose'),
                  jQuery(M).is('.meanmenu-reveal.meanclose')
                    ? M.html(r)
                    : M.html(m),
                  jQuery(p).addClass('mean-remove')
              }),
              f &&
                jQuery('.mean-nav ul > li > a:first-child').on(
                  'click',
                  function () {
                    jQuery('.mean-nav ul:first').slideUp(),
                      (A = !1),
                      jQuery(M).toggleClass('meanclose').html(m)
                  }
                )
          } else P()
        }
      C ||
        jQuery(window).resize(function () {
          ;(t = window.innerWidth || document.documentElement.clientWidth),
            P(),
            t <= o ? (W(), x()) : P()
        }),
        jQuery(window).resize(function () {
          ;(t = window.innerWidth || document.documentElement.clientWidth),
            C
              ? (x(), t <= o ? !1 === E && W() : P())
              : (P(), t <= o && (W(), x()))
        }),
        W()
    })
  }
})(jQuery)

/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
;(function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments)
      }
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b
        return -1
      }
  ;(b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d)
        return a
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        )
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent('CustomEvent')),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        )
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : 'on' + b in (null != a)
          ? a['on' + b]()
          : void 0
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent('on' + b, c)
          : (a[b] = c)
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent('on' + b, c)
          : delete a[b]
      }),
      (a.prototype.innerHeight = function () {
        return 'innerHeight' in window
          ? window.innerHeight
          : document.documentElement.clientHeight
      }),
      a
    )
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          ;(this.keys = []), (this.values = [])
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b]
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b)
            return this.keys.push(a), this.values.push(b)
          }),
          a
        )
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          'undefined' != typeof console &&
            null !== console &&
            console.warn('MutationObserver is not supported by your browser.'),
            'undefined' != typeof console &&
              null !== console &&
              console.warn(
                'WOW.js cannot detect dom mutations, please call .sync() after loading new content.'
              )
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a
      })())),
    (d =
      this.getComputedStyle ||
      function (a) {
        return (
          (this.getPropertyValue = function (b) {
            var c
            return (
              'float' === b && (b = 'styleFloat'),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase()
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            )
          }),
          this
        )
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass))
      }
      return (
        (e.prototype.defaults = {
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a
          return (
            (this.element = window.document.documentElement),
            'interactive' === (a = document.readyState) || 'complete' === a
              ? this.start()
              : this.util().addEvent(document, 'DOMContentLoaded', this.start),
            (this.finished = [])
          )
        }),
        (e.prototype.start = function () {
          var b, c, d, e
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e
              for (
                d = this.element.querySelectorAll('.' + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b)
              return e
            }.call(this)),
            (this.all = function () {
              var a, c, d, e
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b)
              return e
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle()
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0)
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                'scroll',
                this.scrollHandler
              ),
              this.util().addEvent(window, 'resize', this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e))
                              return d
                            }.call(a)
                          )
                      return g
                    }
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          )
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              'scroll',
              this.scrollHandler
            ),
            this.util().removeEvent(window, 'resize', this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          )
        }),
        (e.prototype.sync = function () {
          return a.notSupported ? this.doSync(this.element) : void 0
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll('.' + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0)
            return f
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + ' ' + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, 'animationend', this.resetAnimation),
            this.util().addEvent(a, 'oanimationend', this.resetAnimation),
            this.util().addEvent(a, 'webkitAnimationEnd', this.resetAnimation),
            this.util().addEvent(a, 'MSAnimationEnd', this.resetAnimation),
            a
          )
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e
          return (
            (d = a.getAttribute('data-wow-duration')),
            (c = a.getAttribute('data-wow-delay')),
            (e = a.getAttribute('data-wow-iteration')),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e)
                }
              })(this)
            )
          )
        }),
        (e.prototype.animate = (function () {
          return 'requestAnimationFrame' in window
            ? function (a) {
                return window.requestAnimationFrame(a)
              }
            : function (a) {
                return a()
              }
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = 'visible'))
          return e
        }),
        (e.prototype.resetAnimation = function (a) {
          var b
          return a.type.toLowerCase().indexOf('animationend') >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, '')
                .trim()))
            : void 0
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? 'hidden' : 'visible'),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? 'none' : this.cachedAnimationName(a),
            }),
            a
          )
        }),
        (e.prototype.vendors = ['moz', 'webkit']),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f
          d = []
          for (c in b)
            (e = b[c]),
              (a['' + c] = e),
              d.push(
                function () {
                  var b, d, g, h
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a['' + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      )
                  return h
                }.call(this)
              )
          return d
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue('-' + i + '-' + b))
          return g
        }),
        (e.prototype.animationName = function (a) {
          var b
          try {
            b = this.vendorCSS(a, 'animation-name').cssText
          } catch (c) {
            b = d(a).getPropertyValue('animation-name')
          }
          return 'none' === b ? '' : b
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a))
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a)
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0)
        }),
        (e.prototype.scrollCallback = function () {
          var a
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a))
              return e
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop()
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop
          return b
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f
          return (
            (c = a.getAttribute('data-wow-offset') || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          )
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b())
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          )
        }),
        e
      )
    })())
}.call(this))

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    ;(this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ['busy'],
          animating: ['busy'],
          dragging: ['interacting'],
        },
      }),
      a.each(
        ['onResize', 'onThrottledResize'],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this)
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) })
        }, this)
      ),
      this.setup(),
      this.initialize()
  }
  ;(e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: 'swing',
    slideTransition: '',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
  }),
    (e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
    (e.Type = { Event: 'event', State: 'state' }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ['width', 'settings'],
        run: function () {
          this._width = this.$element.width()
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)]
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          this.$stage.children('.cloned').remove()
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this.settings.margin || '',
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: 'auto',
              'margin-left': d ? b : '',
              'margin-right': d ? '' : b,
            }
          !c && this.$stage.children().css(e), (a.css = e)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = []
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width())
          this._widths = f
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = '',
            i = ''
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1)
          ;(this._clones = b),
            a(h).addClass('cloned').appendTo(this.$stage),
            a(i).addClass('cloned').prependTo(this.$stage)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a)
          this._coordinates = f
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              'padding-left': a || '',
              'padding-right': a || '',
            }
          this.$stage.css(c)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children()
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css)
          else c && ((a.css.width = a.items.width), d.css(a.css))
        },
      },
      {
        filter: ['items'],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr('style')
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          ;(a.current = a.current
            ? this.$stage.children().index(a.current)
            : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current)
        },
      },
      {
        filter: ['position'],
        run: function () {
          this.animate(this.coordinates(this._current))
        },
      },
      {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = []
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, '<=', g) && this.op(a, '>', h)) ||
                (this.op(b, '<', g) && this.op(b, '>', h))) &&
                i.push(c)
          this.$stage.children('.active').removeClass('active'),
            this.$stage
              .children(':eq(' + i.join('), :eq(') + ')')
              .addClass('active'),
            this.$stage.children('.center').removeClass('center'),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass('center')
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      ;(this.$stage = this.$element.find('.' + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a('<' + this.settings.stageElement + '>', {
            class: this.settings.stageClass,
          }).wrap(a('<div/>', { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()))
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find('.owl-item')
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b)
          })),
          (this._mergers = this._items.map(function () {
            return 1
          })),
          void this.refresh()
        )
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate('width'),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass)
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter('initializing'),
        this.trigger('initialize'),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is('pre-loading'))
      ) {
        var a, b, c
        ;(a = this.$element.find('img')),
          (b = this.settings.nestedItemSelector
            ? '.' + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a)
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave('initializing'),
        this.trigger('initialized')
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(':visible')
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
          }),
          (e = a.extend({}, this.options, c[d])),
          'function' == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              'class',
              this.$element
                .attr('class')
                .replace(
                  new RegExp(
                    '(' + this.options.responsiveClass + '-)\\S+\\s',
                    'g'
                  ),
                  '$1' + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger('change', { property: { name: 'settings', value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate('settings'),
        this.trigger('changed', {
          property: { name: 'settings', value: this.settings },
        })
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1))
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger('prepare', { content: b })
      return (
        c.data ||
          (c.data = a('<' + this.settings.itemElement + '/>')
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger('prepared', { content: c.data }),
        c.data
      )
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a]
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++
      ;(this._invalidated = {}), !this.is('valid') && this.enter('valid')
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          )
      }
    }),
    (e.prototype.refresh = function () {
      this.enter('refreshing'),
        this.trigger('refresh'),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave('refreshing'),
        this.trigger('refreshed')
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ))
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter('resizing'),
        this.trigger('resize').isDefaultPrevented()
          ? (this.leave('resizing'), !1)
          : (this.invalidate('width'),
            this.refresh(),
            this.leave('resizing'),
            void this.trigger('resized')))
      )
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + '.owl.core',
          a.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(b, 'resize', this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)),
          this.$stage.on(
            'dragstart.owl.core selectstart.owl.core',
            function () {
              return !1
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            'touchstart.owl.core',
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this)))
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css('transform')
              .replace(/.*\(|\)| /g, '')
              .split(',')),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is('animating') &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate('position')),
        this.$element.toggleClass(
          this.options.grabClass,
          'mousedown' === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          'mouseup.owl.core touchend.owl.core',
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          'mousemove.owl.core touchmove.owl.core',
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b))
            a(c).on(
              'mousemove.owl.core touchmove.owl.core',
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is('valid')) ||
                (b.preventDefault(),
                this.enter('dragging'),
                this.trigger('drag'))
          }, this)
        ))
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e)
      this.is('dragging') &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x))
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? 'left' : 'right'
      a(c).off('.owl.core'),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is('dragging')) || !this.is('valid')) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate('position'),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one('click.owl.core', function () {
              return !1
            })),
        this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'))
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates()
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                'left' === c && b > i - f && b < i + f
                  ? (e = a)
                  : 'right' === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, '<', i) &&
                    this.op(b, '>', h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = 'left' === c ? a + 1 : a),
                -1 === e
              )
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, '>', h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, '<', h[this.maximum()]) && (e = b = this.maximum())),
        e
      )
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0
      this.is('animating') && this.onTransitionEnd(),
        c && (this.enter('animating'), this.trigger('translate')),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: 'translate3d(' + b + 'px,0px,0px)',
              transition:
                this.speed() / 1e3 +
                's' +
                (this.settings.slideTransition
                  ? ' ' + this.settings.slideTransition
                  : ''),
            })
          : c
          ? this.$stage.animate(
              { left: b + 'px' },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + 'px' })
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current
      if (0 === this._items.length) return d
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger('change', {
          property: { name: 'position', value: a },
        })
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate('position'),
          this.trigger('changed', {
            property: { name: 'position', value: this._current },
          })
      }
      return this._current
    }),
    (e.prototype.invalidate = function (b) {
      return (
        'string' === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is('valid') && this.leave('valid')),
        a.map(this._invalidated, function (a, b) {
          return b
        })
      )
    }),
    (e.prototype.reset = function (a) {
      ;(a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(['translate', 'translated']),
        this.animate(this.coordinates(a)),
        this.release(['translate', 'translated']))
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      )
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0)
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items
      return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a])
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a])
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
        }
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b)
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
          })
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b)
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)))
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed)
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum()
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update()
    }),
    (e.prototype.next = function (a) {
      ;(a = a || !1), this.to(this.relative(this.current()) + 1, a)
    }),
    (e.prototype.prev = function (a) {
      ;(a = a || !1), this.to(this.relative(this.current()) - 1, a)
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1
      this.leave('animating'), this.trigger('translated')
    }),
    (e.prototype.viewport = function () {
      var d
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn('Can not detect viewport width.'),
        d
      )
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find('.' + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType
          })
          .each(
            a.proxy(function (a, b) {
              ;(b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find('[data-merge]')
                      .addBack('[data-merge]')
                      .attr('data-merge') || 1
                )
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate('items')
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current)
      ;(c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger('add', { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate('items'),
        this.trigger('added', { content: b, position: c })
    }),
    (e.prototype.remove = function (a) {
      ;(a = this.normalize(a, !0)) !== d &&
        (this.trigger('remove', { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate('items'),
        this.trigger('removed', { content: null, position: a }))
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter('pre-loading'),
            (c = a(c)),
            a(new Image())
              .one(
                'load',
                a.proxy(function (a) {
                  c.attr('src', a.target.src),
                    c.css('opacity', 1),
                    this.leave('pre-loading'),
                    !this.is('pre-loading') &&
                      !this.is('initializing') &&
                      this.refresh()
                }, this)
              )
              .attr(
                'src',
                c.attr('src') || c.attr('data-src') || c.attr('data-src-retina')
              )
        }, this)
      )
    }),
    (e.prototype.destroy = function () {
      this.$element.off('.owl.core'),
        this.$stage.off('.owl.core'),
        a(c).off('.owl.core'),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, 'resize', this._handlers.onThrottledResize))
      for (var d in this._plugins) this._plugins[d].destroy()
      this.$stage.children('.cloned').remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            'class',
            this.$element
              .attr('class')
              .replace(
                new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'),
                ''
              )
          )
          .removeData('owl.carousel')
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl
      switch (b) {
        case '<':
          return d ? a > c : a < c
        case '>':
          return d ? a < c : a > c
        case '>=':
          return d ? a <= c : a >= c
        case '<=':
          return d ? a >= c : a <= c
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent('on' + b, c)
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent('on' + b, c)
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(['on', b, d], function (a) {
              return a
            })
            .join('-')
            .toLowerCase()
        ),
        j = a.Event(
          [b, 'owl', d || 'carousel'].join('.').toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        )
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            'function' == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      )
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this)
      )
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--
        }, this)
      )
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default
          ;(a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf('owl'))
              ? a.namespace && a.namespace.indexOf('owl') > -1
              : c.apply(this, arguments)
          }),
            (a.event.special[b.name].owl = !0)
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d
            }, this)
          )))
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0
        }, this)
      )
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b]
        }, this)
      )
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null }
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      )
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a))
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y }
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return this.each(function () {
        var d = a(this),
          f = d.data('owl.carousel')
        f ||
          ((f = new e(this, 'object' == typeof b && b)),
          d.data('owl.carousel', f),
          a.each(
            [
              'next',
              'prev',
              'to',
              'destroy',
              'refresh',
              'replace',
              'add',
              'remove',
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + '.owl.carousel.core',
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]))
                  }, f)
                )
            }
          )),
          'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c)
      })
    }),
    (a.fn.owlCarousel.Constructor = e)
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch()
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )))
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('owl-hidden', !this._visible),
          this._visible &&
            this._core.invalidate('width') &&
            this._core.refresh())
      }),
      (e.prototype.destroy = function () {
        var a, c
        b.clearInterval(this._interval)
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel':
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && 'position' == b.property.name) ||
                  'initialized' == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b)
                  }, this)
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find('.owl-lazy')
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr('data-src-retina')) ||
                  f.attr('data-src') ||
                  f.attr('data-srcset')
              this._core.trigger('load', { element: f, url: g }, 'lazy'),
                f.is('img')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          f.css('opacity', 1),
                            this._core.trigger(
                              'loaded',
                              { element: f, url: g },
                              'lazy'
                            )
                        }, this)
                      )
                      .attr('src', g)
                  : f.is('source')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          this._core.trigger(
                            'loaded',
                            { element: f, url: g },
                            'lazy'
                          )
                        }, this)
                      )
                      .attr('srcset', g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        'background-image': 'url("' + g + '")',
                        opacity: '1',
                      }),
                        this._core.trigger(
                          'loaded',
                          { element: f, url: g },
                          'lazy'
                        )
                    }, this)),
                    (e.src = g))
            }, this)
          ),
          this._loaded.push(d.get(0)))
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      ;(this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update()
          },
          this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              'position' === a.property.name &&
              this.update()
          }, this),
          'loaded.owl.lazy': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest('.' + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update()
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null)
      var d = this
      a(b).on('load', function () {
        d._core.settings.autoHeight && d.update()
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update()
            }, 250)))
        })
    }
    ;(e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0
        a.each(e, function (b, c) {
          f.push(a(c).height())
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass)
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: 'state',
                name: 'playing',
                tags: ['interacting'],
              })
          }, this),
          'resize.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault()
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.is('resizing') &&
              this._core.$stage.find('.cloned .owl-video-frame').remove()
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' === a.property.name &&
              this._playing &&
              this.stop()
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find('.owl-video')
              c.length &&
                (c.css('display', 'none'), this.fetch(c, a(b.content)))
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          a.proxy(function (a) {
            this.play(a)
          }, this)
        )
    }
    ;(e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr('data-vimeo-id')
              ? 'vimeo'
              : a.attr('data-vzaar-id')
              ? 'vzaar'
              : 'youtube'
          })(),
          d =
            a.attr('data-vimeo-id') ||
            a.attr('data-youtube-id') ||
            a.attr('data-vzaar-id'),
          e = a.attr('data-width') || this._core.settings.videoWidth,
          f = a.attr('data-height') || this._core.settings.videoHeight,
          g = a.attr('href')
        if (!g) throw new Error('Missing video URL.')
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf('youtu') > -1)
        )
          c = 'youtube'
        else if (d[3].indexOf('vimeo') > -1) c = 'vimeo'
        else {
          if (!(d[3].indexOf('vzaar') > -1))
            throw new Error('Video URL not supported.')
          c = 'vzaar'
        }
        ;(d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr('data-video', g),
          this.thumbnail(a, this._videos[g])
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'width:' + c.width + 'px;height:' + c.height + 'px;'
              : '',
          h = b.find('img'),
          i = 'src',
          j = '',
          k = this._core.settings,
          l = function (c) {
            ;(e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a('<div/>', { class: 'owl-video-tn ' + j, srcType: c })
                : a('<div/>', {
                    class: 'owl-video-tn',
                    style: 'opacity:1;background-image:url(' + c + ')',
                  })),
              b.after(d),
              b.after(e)
          }
        if (
          (b.wrap(a('<div/>', { class: 'owl-video-wrapper', style: g })),
          this._core.settings.lazyLoad && ((i = 'data-src'), (j = 'owl-lazy')),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1
        'youtube' === c.type
          ? ((f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg'), l(f))
          : 'vimeo' === c.type
          ? a.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                ;(f = a[0].thumbnail_large), l(f)
              },
            })
          : 'vzaar' === c.type &&
            a.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                ;(f = a.framegrab_url), l(f)
              },
            })
      }),
      (e.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video')
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest('.' + this._core.settings.itemClass),
          f = this._videos[e.attr('data-video')],
          g = f.width || '100%',
          h = f.height || this._core.$stage.height()
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )),
          c.attr('height', h),
          c.attr('width', g),
          'youtube' === f.type
            ? c.attr(
                'src',
                '//www.youtube.com/embed/' +
                  f.id +
                  '?autoplay=1&rel=0&v=' +
                  f.id
              )
            : 'vimeo' === f.type
            ? c.attr('src', '//player.vimeo.com/video/' + f.id + '?autoplay=1')
            : 'vzaar' === f.type &&
              c.attr(
                'src',
                '//view.vzaar.com/' + f.id + '/player?autoplay=true'
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find('.owl-video')),
          (this._playing = e.addClass('owl-video-playing')))
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement
        return b && a(b).parent().hasClass('owl-video-frame')
      }),
      (e.prototype.destroy = function () {
        var a, b
        this._core.$element.off('click.owl.video')
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          'change.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value))
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':
            a.proxy(function (a) {
              a.namespace && (this.swapping = 'translated' == a.type)
            }, this),
          'translate.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap()
          }, this),
        }),
        this.core.$element.on(this.handlers)
    }
    ;(e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0)
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass('animated owl-animated-in')
                .addClass(f))
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: '' })
          .removeClass('animated owl-animated-out owl-animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd()
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'settings' === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                'position' === a.property.name &&
                this._paused &&
                (this._time = 0)
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play()
          }, this),
          'play.owl.autoplay': a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c)
          }, this),
          'stop.owl.autoplay': a.proxy(function (a) {
            a.namespace && this.stop()
          }, this),
          'mouseover.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause()
          }, this),
          'mouseleave.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.play()
          }, this),
          'touchstart.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause()
          }, this),
          'touchend.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play()
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options))
    }
    ;(e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        ;(this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is('interacting') ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed)
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time
      }),
      (e.prototype.play = function (c, d) {
        var e
        this._core.is('rotating') || this._core.enter('rotating'),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e))
      }),
      (e.prototype.stop = function () {
        this._core.is('rotating') &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave('rotating'))
      }),
      (e.prototype.pause = function () {
        this._core.is('rotating') &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call))
      }),
      (e.prototype.destroy = function () {
        var a, b
        this.stop()
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict'
    var e = function (b) {
      ;(this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          'prepared.owl.carousel': a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find('[data-dot]')
                    .addBack('[data-dot]')
                    .attr('data-dot') +
                  '</div>'
              )
          }, this),
          'added.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop())
          }, this),
          'remove.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1)
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'position' == a.property.name && this.draw()
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'))
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'))
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers)
    }
    ;(e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings
        ;(this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass('disabled')),
          (this._controls.$previous = a('<' + c.navElement + '>')
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.prev(c.navSpeed)
              }, this)
            )),
          (this._controls.$next = a('<' + c.navElement + '>')
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.next(c.navSpeed)
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a('<span>'))
                .prop('outerHTML'),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a('<div>').addClass(c.dotsClass).appendTo(this.$element)
          ).addClass('disabled')),
          this._controls.$absolute.on(
            'click',
            'button',
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index()
              b.preventDefault(), this.to(d, c.dotsSpeed)
            }, this)
          )
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e
        e = this._core.settings
        for (a in this._handlers) this.$element.off(a, this._handlers[a])
        for (b in this._controls)
          '$relative' === b && e.navContainer
            ? this._controls[b].html('')
            : this._controls[b].remove()
        for (d in this.overides) this._core[d] = this._overrides[d]
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null)
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items
        if (
          ('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || 'page' == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break
              ;(b = 0), ++c
            }
            b += this._core.mergers(this._core.relative(a))
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind
        this._controls.$relative.toggleClass('disabled', !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              'disabled',
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              'disabled',
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass('disabled', !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(''))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass('active'))
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        }
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current())
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b
            }, this)
          )
          .pop()
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings
        return (
          'page' == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        )
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
      }),
      (e.prototype.to = function (b, c, d) {
        var e
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict'
    var e = function (c) {
      ;(this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (c) {
            c.namespace &&
              'URLHash' === this._core.settings.startPosition &&
              a(b).trigger('hashchange.owl.navigation')
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find('[data-hash]')
                .addBack('[data-hash]')
                .attr('data-hash')
              if (!c) return
              this._hashes[c] = b.content
            }
          }, this),
          'changed.owl.carousel': a.proxy(function (c) {
            if (c.namespace && 'position' === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null
                  })
                  .join()
              if (!e || b.location.hash.slice(1) === e) return
              b.location.hash = e
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          'hashchange.owl.navigation',
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c])
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0)
          }, this)
        )
    }
    ;(e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d
        a(b).off('hashchange.owl.navigation')
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c])
        for (d in Object.getOwnPropertyNames(this))
          'function' != typeof this[d] && (this[d] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1)
      return (
        a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1
        }),
        e
      )
    }
    function f(a) {
      return e(a, !0)
    }
    var g = a('<support>').get(0).style,
      h = 'Webkit Moz O ms'.split(' '),
      i = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend',
          },
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend',
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e('transform')
        },
        csstransforms3d: function () {
          return !!e('perspective')
        },
        csstransitions: function () {
          return !!e('transition')
        },
        cssanimations: function () {
          return !!e('animation')
        },
      }
    j.csstransitions() &&
      ((a.support.transition = new String(f('transition'))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f('animation'))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f('transform'))),
        (a.support.transform3d = j.csstransforms3d()))
  })(window.Zepto || window.jQuery, window, document)

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!(function (l, o, e) {
  'use strict'
  ;(l.fn.scrollUp = function (o) {
    l.data(e.body, 'scrollUp') ||
      (l.data(e.body, 'scrollUp', !0), l.fn.scrollUp.init(o))
  }),
    (l.fn.scrollUp.init = function (r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1
      switch (
        ((d = p.scrollTrigger
          ? l(p.scrollTrigger)
          : l('<a/>', { id: p.scrollName, href: '#top' })),
        p.scrollTitle && d.attr('title', p.scrollTitle),
        d.appendTo('body'),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: 'none', position: 'fixed', zIndex: p.zIndex }),
        p.activeOverlay &&
          l('<div/>', { id: p.scrollName + '-active' })
            .css({
              position: 'absolute',
              top: p.scrollDistance + 'px',
              width: '100%',
              borderTop: '1px dotted' + p.activeOverlay,
              zIndex: p.zIndex,
            })
            .appendTo('body'),
        p.animation)
      ) {
        case 'fade':
          ;(s = 'fadeIn'), (t = 'fadeOut'), (c = p.animationSpeed)
          break
        case 'slide':
          ;(s = 'slideDown'), (t = 'slideUp'), (c = p.animationSpeed)
          break
        default:
          ;(s = 'show'), (t = 'hide'), (c = 0)
      }
      ;(i =
        'top' === p.scrollFrom
          ? p.scrollDistance
          : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function () {
          l(o).scrollTop() > i
            ? f || (d[s](c), (f = !0))
            : f && (d[t](c), (f = !1))
        })),
        p.scrollTarget
          ? 'number' == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : 'string' == typeof p.scrollTarget &&
              (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (o) {
          o.preventDefault(),
            l('html, body').animate(
              { scrollTop: a },
              p.scrollSpeed,
              p.easingType
            )
        })
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: 'scrollUp',
      scrollDistance: 300,
      scrollFrom: 'top',
      scrollSpeed: 300,
      easingType: 'linear',
      animation: 'fade',
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: 'Scroll to top',
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (l.fn.scrollUp.destroy = function (r) {
      l.removeData(e.body, 'scrollUp'),
        l('#' + l.fn.scrollUp.settings.scrollName).remove(),
        l('#' + l.fn.scrollUp.settings.scrollName + '-active').remove(),
        l.fn.jquery.split('.')[1] >= 7
          ? l(o).off('scroll', r)
          : l(o).unbind('scroll', r)
    }),
    (l.scrollUp = l.fn.scrollUp)
})(jQuery, window, document)

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  'use strict'
  function t(o) {
    if (!o) throw new Error('No options passed to Waypoint constructor')
    if (!o.element)
      throw new Error('No element option passed to Waypoint constructor')
    if (!o.handler)
      throw new Error('No handler option passed to Waypoint constructor')
    ;(this.key = 'waypoint-' + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? 'horizontal' : 'vertical'),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1)
  }
  var e = 0,
    i = {}
  ;(t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t)
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t)
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key]
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this
    }),
    (t.prototype.next = function () {
      return this.group.next(this)
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this)
    }),
    (t.invokeAll = function (t) {
      var e = []
      for (var o in i) e.push(i[o])
      for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }),
    (t.destroyAll = function () {
      t.invokeAll('destroy')
    }),
    (t.disableAll = function () {
      t.invokeAll('disable')
    }),
    (t.enableAll = function () {
      t.Context.refreshAll()
      for (var e in i) i[e].enabled = !0
      return this
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll()
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: 'default',
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      'bottom-in-view': function () {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      'right-in-view': function () {
        return this.context.innerWidth() - this.adapter.outerWidth()
      },
    }),
    (window.Waypoint = t)
})(),
  (function () {
    'use strict'
    function t(t) {
      window.setTimeout(t, 1e3 / 60)
    }
    function e(t) {
      ;(this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = 'waypoint-context-' + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload
    ;(e.prototype.add = function (t) {
      var e = t.options.horizontal ? 'horizontal' : 'vertical'
      ;(this.waypoints[e][t.key] = t), this.refresh()
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window
        t && e && !i && (this.adapter.off('.waypoints'), delete o[this.key])
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1)
        }
        var e = this
        this.adapter.on('resize.waypoints', function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t))
        })
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1)
        }
        var e = this
        this.adapter.on('scroll.waypoints', function () {
          ;(!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t))
        })
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll()
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
            },
          }
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s]
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h
              ;(p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group))
            }
          }
        }
        for (var c in t) t[c].flushTriggers()
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight()
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth()
      }),
      (e.prototype.destroy = function () {
        var t = []
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i])
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {}
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
              offsetProp: 'left',
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
              offsetProp: 'top',
            },
          })
        for (var r in t) {
          var s = t[r]
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              'function' == typeof f
                ? (f = f.apply(d))
                : 'string' == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf('%') > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers()
          }),
          this
        )
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh()
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey]
      }),
      (window.onload = function () {
        r && r(), e.refreshAll()
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t
        i.call(window, e)
      }),
      (n.Context = e)
  })(),
  (function () {
    'use strict'
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint
    }
    function i(t) {
      ;(this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + '-' + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this)
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint
    ;(i.prototype.add = function (t) {
      this.waypoints.push(t)
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] }
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = 'up' === i || 'left' === i
          o.sort(n ? e : t)
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r]
            ;(a.options.continuous || r === o.length - 1) && a.trigger([i])
          }
        }
        this.clearTriggerQueues()
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t)
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1
        return o ? null : this.waypoints[i + 1]
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t)
        var i = n.Adapter.inArray(e, this.waypoints)
        return i ? this.waypoints[i - 1] : null
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints)
        e > -1 && this.waypoints.splice(e, 1)
      }),
      (i.prototype.first = function () {
        return this.waypoints[0]
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t)
      }),
      (n.Group = i)
  })(),
  (function () {
    'use strict'
    function t(t) {
      this.$element = e(t)
    }
    var e = window.jQuery,
      i = window.Waypoint
    e.each(
      [
        'innerHeight',
        'innerWidth',
        'off',
        'offset',
        'on',
        'outerHeight',
        'outerWidth',
        'scrollLeft',
        'scrollTop',
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments)
          return this.$element[i].apply(this.$element, t)
        }
      }
    ),
      e.each(['extend', 'inArray', 'isEmptyObject'], function (i, o) {
        t[o] = e[o]
      }),
      i.adapters.push({ name: 'jquery', Adapter: t }),
      (i.Adapter = t)
  })(),
  (function () {
    'use strict'
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0]
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this })
            'string' == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n))
          }),
          i
        )
      }
    }
    var e = window.Waypoint
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
  })()

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
;(function (e) {
  'use strict'
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t)
    return this.each(function () {
      var t = e(this),
        r = n,
        i = function () {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i)
          i = i.replace(/,/g, '')
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split('.')[1] || []).length : 0
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f)
            u && (l = parseFloat((i / n) * f).toFixed(a))
            if (s)
              while (/(\d+)(\d{3})/.test(l.toString()))
                l = l.toString().replace(/(\d+)(\d{3})/, '$1,$2')
            e.unshift(l)
          }
          t.data('counterup-nums', e)
          t.text('0')
          var c = function () {
            t.text(t.data('counterup-nums').shift())
            if (t.data('counterup-nums').length)
              setTimeout(t.data('counterup-func'), r.delay)
            else {
              delete t.data('counterup-nums')
              t.data('counterup-nums', null)
              t.data('counterup-func', null)
            }
          }
          t.data('counterup-func', c)
          setTimeout(t.data('counterup-func'), r.delay)
        }
      t.waypoint(i, { offset: '100%', triggerOnce: !0 })
    })
  }
})(jQuery)

/**
 * Slick Slider Js
 */
!(function (i) {
  'use strict'
  'function' == typeof define && define.amd
    ? define(['jquery'], i)
    : 'undefined' != typeof exports
    ? (module.exports = i(require('jquery')))
    : i(jQuery)
})(function (i) {
  'use strict'
  var e = window.Slick || {}
  ;((e = (function () {
    var e = 0
    return function (t, o) {
      var s,
        n = this
      ;(n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1)
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = 'hidden'),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = 'visibilitychange'),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data('slick') || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = 'mozHidden'),
            (n.visibilityChange = 'mozvisibilitychange'))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = 'webkitHidden'),
            (n.visibilityChange = 'webkitvisibilitychange')),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0)
    }
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find('.slick-active')
      .attr({ 'aria-hidden': 'false' })
      .find('a, input, button, select')
      .attr({ tabindex: '0' })
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this
        if ('boolean' == typeof t) (o = t), (t = null)
        else if (t < 0 || t >= s.slideCount) return !1
        s.unload(),
          'number' == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr('data-slick-index', e)
          }),
          (s.$slidesCache = s.$slides),
          s.reinit()
      }),
    (e.prototype.animateHeight = function () {
      var i = this
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0)
        i.$list.animate({ height: e }, i.options.speed)
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  ;(i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = 'translate(' + i + 'px, 0px)'),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = 'translate(0px,' + i + 'px)'),
                        s.$slideTrack.css(o))
                },
                complete: function () {
                  t && t.call()
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = 'translate3d(' + e + 'px, 0px, 0px)')
              : (o[s.animType] = 'translate3d(0px,' + e + 'px, 0px)'),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call()
              }, s.options.speed))
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor
      return t && null !== t && (t = i(t).not(e.$slider)), t
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget()
      null !== t &&
        'object' == typeof t &&
        t.each(function () {
          var t = i(this).slick('getSlick')
          t.unslicked || t.slideHandler(e, !0)
        })
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {}
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + ' ' + e.options.speed + 'ms ' + e.options.cssEase)
        : (t[e.transitionType] =
            'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }),
    (e.prototype.autoPlay = function () {
      var i = this
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ))
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this
      i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }),
    (e.prototype.buildArrows = function () {
      var e = this
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass('slick-arrow')),
        (e.$nextArrow = i(e.options.nextArrow).addClass('slick-arrow')),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            e.$nextArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass('slick-hidden')
              .attr({ 'aria-disabled': 'true', tabindex: '-1' }))
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass('slick-dotted'),
            t = i('<ul />').addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i('<li />').append(o.options.customPaging.call(this, o, e)))
        ;(o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find('li').first().addClass('slick-active')
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this
      ;(e.$slides = e.$slider
        .children(e.options.slide + ':not(.slick-cloned)')
        .addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr('data-slick-index', e)
            .data('originalStyling', i(t).attr('style') || '')
        }),
        e.$slider.addClass('slick-slider'),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css('opacity', 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i('img[data-lazy]', e.$slider).not('[src]').addClass('slick-loading'),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          'number' == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass('draggable')
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement('div')
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement('div')
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t)
              n.get(c) && a.appendChild(n.get(c))
            }
            d.appendChild(a)
          }
          o.appendChild(d)
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + '%',
              display: 'inline-block',
            })
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width()
      if (
        ('window' === r.respondTo
          ? (n = a)
          : 'slider' === r.respondTo
          ? (n = d)
          : 'min' === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]))
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger('breakpoint', [r, l])
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget)
      switch (
        (l.is('a') && e.preventDefault(),
        l.is('li') || (l = l.closest('li')),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case 'previous':
          ;(s =
            0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t)
          break
        case 'next':
          ;(s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t)
          break
        case 'index':
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger('focus')
          break
        default:
          return
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1]
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t
            break
          }
          t = e[o]
        }
      return i
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this
      e.options.dots &&
        null !== e.$dots &&
        (i('li', e.$dots)
          .off('click.slick', e.changeSlide)
          .off('mouseenter.slick', i.proxy(e.interrupt, e, !0))
          .off('mouseleave.slick', i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off('keydown.slick', e.keyHandler)),
        e.$slider.off('focus.slick blur.slick'),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
          e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off('keydown.slick', e.keyHandler),
            e.$nextArrow && e.$nextArrow.off('keydown.slick', e.keyHandler))),
        e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
        e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
        e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
        e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
        e.$list.off('click.slick', e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off('keydown.slick', e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off('click.slick', e.selectHandler),
        i(window).off(
          'orientationchange.slick.slick-' + e.instanceUid,
          e.orientationChange
        ),
        i(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
        i('[draggable!=true]', e.$slideTrack).off(
          'dragstart',
          e.preventDefault
        ),
        i(window).off('load.slick.slick-' + e.instanceUid, e.setPosition)
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this
      e.$list.off('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.off('mouseleave.slick', i.proxy(e.interrupt, e, !1))
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr('style'),
        e.$slider.empty().append(i))
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }),
    (e.prototype.destroy = function (e) {
      var t = this
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i('.slick-cloned', t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              'slick-slide slick-active slick-center slick-visible slick-current'
            )
            .removeAttr('aria-hidden')
            .removeAttr('data-slick-index')
            .each(function () {
              i(this).attr('style', i(this).data('originalStyling'))
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass('slick-slider'),
        t.$slider.removeClass('slick-initialized'),
        t.$slider.removeClass('slick-dotted'),
        (t.unslicked = !0),
        e || t.$slider.trigger('destroy', [t])
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {}
      ;(t[e.transitionType] = ''),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call()
            }, t.options.speed))
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }))
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit())
      }),
    (e.prototype.focusHandler = function () {
      var e = this
      e.$slider
        .off('focus.slick blur.slick')
        .on('focus.slick blur.slick', '*', function (t) {
          t.stopImmediatePropagation()
          var o = i(this)
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(':focus')), e.autoPlay())
          }, 0)
        })
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow)
      else if (!0 === i.options.centerMode) o = i.slideCount
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow)
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          )
      return o - 1
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children('.slick-slide').eq(i)
              : n.$slideTrack
                  .children('.slick-slide')
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children('.slick-slide').eq(i)
                : n.$slideTrack
                    .children('.slick-slide')
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      )
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i]
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = []
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow)
      return s
    }),
    (e.prototype.getSlick = function () {
      return this
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find('.slick-slide').each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1
            }),
            Math.abs(i(e).attr('data-slick-index') - o.currentSlide) || 1)
          : o.options.slidesToScroll
      )
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: 'index', index: parseInt(i) } }, e)
      }),
    (e.prototype.init = function (e) {
      var t = this
      i(t.$slider).hasClass('slick-initialized') ||
        (i(t.$slider).addClass('slick-initialized'),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger('init', [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay())
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount
        })
      e.$slides
        .add(e.$slideTrack.find('.slick-cloned'))
        .attr({ 'aria-hidden': 'true', tabindex: '-1' })
        .find('a, input, button, select')
        .attr({ tabindex: '-1' }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find('.slick-cloned'))
            .each(function (t) {
              var s = o.indexOf(t)
              i(this).attr({
                role: 'tabpanel',
                id: 'slick-slide' + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    'aria-describedby':
                      'slick-slide-control' + e.instanceUid + s,
                  })
            }),
          e.$dots
            .attr('role', 'tablist')
            .find('li')
            .each(function (s) {
              var n = o[s]
              i(this).attr({ role: 'presentation' }),
                i(this)
                  .find('button')
                  .first()
                  .attr({
                    role: 'tab',
                    id: 'slick-slide-control' + e.instanceUid + s,
                    'aria-controls': 'slick-slide' + e.instanceUid + n,
                    'aria-label': s + 1 + ' of ' + t,
                    'aria-selected': null,
                    tabindex: '-1',
                  })
            })
            .eq(e.currentSlide)
            .find('button')
            .attr({ 'aria-selected': 'true', tabindex: '0' })
            .end())
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr('tabindex', 0)
      e.activateADA()
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off('click.slick')
          .on('click.slick', { message: 'previous' }, i.changeSlide),
        i.$nextArrow
          .off('click.slick')
          .on('click.slick', { message: 'next' }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on('keydown.slick', i.keyHandler),
          i.$nextArrow.on('keydown.slick', i.keyHandler)))
    }),
    (e.prototype.initDotEvents = function () {
      var e = this
      !0 === e.options.dots &&
        (i('li', e.$dots).on(
          'click.slick',
          { message: 'index' },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on('keydown.slick', e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i('li', e.$dots)
            .on('mouseenter.slick', i.proxy(e.interrupt, e, !0))
            .on('mouseleave.slick', i.proxy(e.interrupt, e, !1))
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this
      e.options.pauseOnHover &&
        (e.$list.on('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.on('mouseleave.slick', i.proxy(e.interrupt, e, !1)))
    }),
    (e.prototype.initializeEvents = function () {
      var e = this
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          'touchstart.slick mousedown.slick',
          { action: 'start' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchmove.slick mousemove.slick',
          { action: 'move' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchend.slick mouseup.slick',
          { action: 'end' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchcancel.slick mouseleave.slick',
          { action: 'end' },
          e.swipeHandler
        ),
        e.$list.on('click.slick', e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on('keydown.slick', e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on('click.slick', e.selectHandler),
        i(window).on(
          'orientationchange.slick.slick-' + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          'resize.slick.slick-' + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
        i(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }),
    (e.prototype.initUI = function () {
      var i = this
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show()
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this
      i.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? 'next' : 'previous' },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? 'previous' : 'next' },
            }))
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i('img[data-lazy]', e).each(function () {
          var e = i(this),
            t = i(this).attr('data-lazy'),
            o = i(this).attr('data-srcset'),
            s = i(this).attr('data-sizes') || n.$slider.attr('data-sizes'),
            r = document.createElement('img')
          ;(r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr('srcset', o), s && e.attr('sizes', s)),
                e.attr('src', t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr('data-lazy data-srcset data-sizes').removeClass(
                    'slick-loading'
                  )
                }),
                n.$slider.trigger('lazyLoaded', [n, e, t])
            })
          }),
            (r.onerror = function () {
              e
                .removeAttr('data-lazy')
                .removeClass('slick-loading')
                .addClass('slick-lazyload-error'),
                n.$slider.trigger('lazyLoadError', [n, e, t])
            }),
            (r.src = t)
        })
      }
      var t,
        o,
        s,
        n = this
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find('.slick-slide').slice(o, s)),
        'anticipated' === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find('.slick-slide'), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find('.slick-slide'))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find('.slick-cloned').slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find('.slick-cloned').slice(-1 * n.options.slidesToShow)
            )
    }),
    (e.prototype.loadSlider = function () {
      var i = this
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass('slick-loading'),
        i.initUI(),
        'progressive' === i.options.lazyLoad && i.progressiveLazyLoad()
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: 'next' } })
      }),
    (e.prototype.orientationChange = function () {
      var i = this
      i.checkResponsive(), i.setPosition()
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this
        i.autoPlayClear(), (i.paused = !0)
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1)
      }),
    (e.prototype.postSlide = function (e) {
      var t = this
      t.unslicked ||
        (t.$slider.trigger('afterChange', [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr('tabindex', 0).focus()))
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: 'previous' } })
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault()
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i('img[data-lazy]', l.$slider)
      d.length
        ? ((t = d.first()),
          (o = t.attr('data-lazy')),
          (s = t.attr('data-srcset')),
          (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
          ((r = document.createElement('img')).onload = function () {
            s && (t.attr('srcset', s), n && t.attr('sizes', n)),
              t
                .attr('src', o)
                .removeAttr('data-lazy data-srcset data-sizes')
                .removeClass('slick-loading'),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger('lazyLoaded', [l, t, o]),
              l.progressiveLazyLoad()
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1)
                }, 500)
              : (t
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                l.$slider.trigger('lazyLoadError', [l, t, o]),
                l.progressiveLazyLoad())
          }),
          (r.src = o))
        : l.$slider.trigger('allImagesLoaded', [l])
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this
      ;(o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: 'index', index: t } }, !1)
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null
      if ('array' === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || 'window'
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings)
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i
        })
      }
    }),
    (e.prototype.reinit = function () {
      var e = this
      ;(e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on('click.slick', e.selectHandler),
        e.setSlideClasses(
          'number' == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger('reInit', [e])
    }),
    (e.prototype.resize = function () {
      var e = this
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          ;(e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50)))
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this
        if (
          ((i =
            'boolean' == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit()
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {}
      !0 === o.options.rtl && (i = -i),
        (e = 'left' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (t = 'top' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = 'translate(' + e + ', ' + t + ')'),
                o.$slideTrack.css(s))
              : ((s[o.animType] = 'translate3d(' + e + ', ' + t + ', 0px)'),
                o.$slideTrack.css(s)))
    }),
    (e.prototype.setDimensions = function () {
      var i = this
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: '0px ' + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + ' 0px' })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children('.slick-slide').length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children('.slick-slide').length
              )
            ))
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width()
      !1 === i.options.variableWidth &&
        i.$slideTrack.children('.slick-slide').width(i.slideWidth - e)
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this
      t.$slides.each(function (o, s) {
        ;(e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: 'relative',
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: 'relative',
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 })
    }),
    (e.prototype.setHeight = function () {
      var i = this
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0)
        i.$list.css('height', e)
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1
        if (
          ('object' === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = 'multiple'))
            : 'string' === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              'responsive' === arguments[0] && 'array' === i.type(arguments[1])
                ? (n = 'responsive')
                : void 0 !== arguments[1] && (n = 'single')),
          'single' === n)
        )
          r.options[o] = s
        else if ('multiple' === n)
          i.each(o, function (i, e) {
            r.options[i] = e
          })
        else if ('responsive' === n)
          for (t in s)
            if ('array' !== i.type(r.options.responsive))
              r.options.responsive = [s[t]]
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--
              r.options.responsive.push(s[t])
            }
        l && (r.unload(), r.reinit())
      }),
    (e.prototype.setPosition = function () {
      var i = this
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger('setPosition', [i])
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style
      ;(i.positionProp = !0 === i.options.vertical ? 'top' : 'left'),
        'top' === i.positionProp
          ? i.$slider.addClass('slick-vertical')
          : i.$slider.removeClass('slick-vertical'),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ('number' == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = 'OTransform'),
          (i.transformType = '-o-transform'),
          (i.transitionType = 'OTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = 'MozTransform'),
          (i.transformType = '-moz-transform'),
          (i.transitionType = 'MozTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = 'webkitTransform'),
          (i.transformType = '-webkit-transform'),
          (i.transitionType = 'webkitTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = 'msTransform'),
          (i.transformType = '-ms-transform'),
          (i.transitionType = 'msTransition'),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = 'transform'),
          (i.transformType = 'transform'),
          (i.transitionType = 'transition')),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType)
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this
      if (
        ((t = n.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
        n.$slides.eq(i).addClass('slick-current'),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0
        ;(e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass('slick-center')
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass('slick-center')),
          n.$slides.eq(i).addClass('slick-center')
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass('slick-active')
              .attr('aria-hidden', 'false')
          : t.length <= n.options.slidesToShow
          ? t.addClass('slick-active').attr('aria-hidden', 'false')
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false'))
      ;('ondemand' !== n.options.lazyLoad &&
        'anticipated' !== n.options.lazyLoad) ||
        n.lazyLoad()
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass('slick-cloned')
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass('slick-cloned')
        s.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function () {
            i(this).attr('id', '')
          })
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this
      i || e.autoPlay(), (e.interrupted = i)
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is('.slick-slide')
          ? i(e.target)
          : i(e.target).parents('.slick-slide'),
        s = parseInt(o.attr('data-slick-index'))
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s)
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o)
                })
              : a.postSlide(o))
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o)
                })
              : a.postSlide(o))
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger('beforeChange', [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick('getSlick')).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s)
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            )
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s)
              })
            : a.postSlide(s)
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass('slick-loading')
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? 'left'
            : 'right'
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? 'left'
            : 'right'
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? 'right'
            : 'left'
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? 'down'
            : 'up'
          : 'vertical'
      )
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger('edge', [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case 'left':
          case 'down':
            ;(e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0)
            break
          case 'right':
          case 'up':
            ;(e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1)
        }
        'vertical' != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger('swipe', [o, t]))
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}))
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this
      if (
        !(
          !1 === e.options.swipe ||
          ('ontouchend' in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf('mouse'))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case 'start':
            e.swipeStart(i)
            break
          case 'move':
            e.swipeMove(i)
            break
          case 'end':
            e.swipeEnd(i)
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && 'right' === t) ||
                  (l.currentSlide >= l.getDotCount() && 'left' === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      )
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0)
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit())
      }),
    (e.prototype.unload = function () {
      var e = this
      i('.slick-cloned', e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '')
    }),
    (e.prototype.unslick = function (i) {
      var e = this
      e.$slider.trigger('unslick', [e, i]), e.destroy()
    }),
    (e.prototype.updateArrows = function () {
      var i = this
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          i.$nextArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              i.$nextArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false'))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              i.$prevArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false'))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              i.$prevArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false')))
    }),
    (e.prototype.updateDots = function () {
      var i = this
      null !== i.$dots &&
        (i.$dots.find('li').removeClass('slick-active').end(),
        i.$dots
          .find('li')
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass('slick-active'))
    }),
    (e.prototype.visibility = function () {
      var i = this
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1))
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length
      for (i = 0; i < r; i++)
        if (
          ('object' == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t
      return o
    })
})

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!(function (t, e, n, o) {
  'use strict'
  function i(t, e) {
    var o,
      i,
      a,
      s = [],
      r = 0
    ;(t && t.isDefaultPrevented()) ||
      (t.preventDefault(),
      (e = e || {}),
      t && t.data && (e = h(t.data.options, e)),
      (o = e.$target || n(t.currentTarget).trigger('blur')),
      ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
        (e.selector
          ? (s = n(e.selector))
          : ((i = o.attr('data-fancybox') || ''),
            i
              ? ((s = t.data ? t.data.items : []),
                (s = s.length
                  ? s.filter('[data-fancybox="' + i + '"]')
                  : n('[data-fancybox="' + i + '"]')))
              : (s = [o])),
        (r = n(s).index(o)),
        r < 0 && (r = 0),
        (a = n.fancybox.open(s, e, r)),
        (a.$trigger = o)))
  }
  if (((t.console = t.console || { info: function (t) {} }), n)) {
    if (n.fn.fancybox) return void console.info('fancyBox already initialized')
    var a = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: 'auto',
        toolbar: 'auto',
        buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: { preload: !1 },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: 'auto' },
        },
        video: {
          tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: '',
          autoStart: !0,
        },
        defaultType: 'image',
        animationEffect: 'zoom',
        animationDuration: 366,
        zoomOpacity: 'auto',
        transitionEffect: 'fade',
        transitionDuration: 366,
        slideClass: '',
        baseClass: '',
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
        },
        parentEl: 'body',
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 3e3 },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y',
        },
        wheel: 'auto',
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return 'image' === t.type && 'zoom'
        },
        clickSlide: 'close',
        clickOutside: 'close',
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function (t, e) {
            return 'image' === t.type && 'toggleControls'
          },
          clickSlide: function (t, e) {
            return 'image' === t.type ? 'toggleControls' : 'close'
          },
          dblclickContent: function (t, e) {
            return 'image' === t.type && 'zoom'
          },
          dblclickSlide: function (t, e) {
            return 'image' === t.type && 'zoom'
          },
        },
        lang: 'en',
        i18n: {
          en: {
            CLOSE: 'Close',
            NEXT: 'Next',
            PREV: 'Previous',
            ERROR:
              'The requested content cannot be loaded. <br/> Please try again later.',
            PLAY_START: 'Start slideshow',
            PLAY_STOP: 'Pause slideshow',
            FULL_SCREEN: 'Full screen',
            THUMBS: 'Thumbnails',
            DOWNLOAD: 'Download',
            SHARE: 'Share',
            ZOOM: 'Zoom',
          },
          de: {
            CLOSE: 'Schlie&szlig;en',
            NEXT: 'Weiter',
            PREV: 'Zur&uuml;ck',
            ERROR:
              'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.',
            PLAY_START: 'Diaschau starten',
            PLAY_STOP: 'Diaschau beenden',
            FULL_SCREEN: 'Vollbild',
            THUMBS: 'Vorschaubilder',
            DOWNLOAD: 'Herunterladen',
            SHARE: 'Teilen',
            ZOOM: 'Vergr&ouml;&szlig;ern',
          },
        },
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n
      },
      d = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60)
          }
        )
      })(),
      u = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e)
          }
        )
      })(),
      f = (function () {
        var t,
          n = e.createElement('fakeelement'),
          o = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
          }
        for (t in o) if (void 0 !== n.style[t]) return o[t]
        return 'transitionend'
      })(),
      p = function (t) {
        return t && t.length && t[0].offsetHeight
      },
      h = function (t, e) {
        var o = n.extend(!0, {}, t, e)
        return (
          n.each(e, function (t, e) {
            n.isArray(e) && (o[t] = e)
          }),
          o
        )
      },
      g = function (t) {
        var o, i
        return (
          !(!t || t.ownerDocument !== e) &&
          (n('.fancybox-container').css('pointer-events', 'none'),
          (o = {
            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
            y: t.getBoundingClientRect().top + t.offsetHeight / 2,
          }),
          (i = e.elementFromPoint(o.x, o.y) === t),
          n('.fancybox-container').css('pointer-events', ''),
          i)
        )
      },
      b = function (t, e, o) {
        var i = this
        ;(i.opts = h({ index: o }, n.fancybox.defaults)),
          n.isPlainObject(e) && (i.opts = h(i.opts, e)),
          n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
          (i.id = i.opts.id || ++c),
          (i.currIndex = parseInt(i.opts.index, 10) || 0),
          (i.prevIndex = null),
          (i.prevPos = null),
          (i.currPos = 0),
          (i.firstRun = !0),
          (i.group = []),
          (i.slides = {}),
          i.addContent(t),
          i.group.length && i.init()
      }
    n.extend(b.prototype, {
      init: function () {
        var o,
          i,
          a = this,
          s = a.group[a.currIndex],
          r = s.opts
        r.closeExisting && n.fancybox.close(!0),
          n('body').addClass('fancybox-active'),
          !n.fancybox.getInstance() &&
            !1 !== r.hideScrollbar &&
            !n.fancybox.isMobile &&
            e.body.scrollHeight > t.innerHeight &&
            (n('head').append(
              '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                (t.innerWidth - e.documentElement.clientWidth) +
                'px;}</style>'
            ),
            n('body').addClass('compensate-for-scrollbar')),
          (i = ''),
          n.each(r.buttons, function (t, e) {
            i += r.btnTpl[e] || ''
          }),
          (o = n(
            a.translate(
              a,
              r.baseTpl
                .replace('{{buttons}}', i)
                .replace('{{arrows}}', r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
            )
          )
            .attr('id', 'fancybox-container-' + a.id)
            .addClass(r.baseClass)
            .data('FancyBox', a)
            .appendTo(r.parentEl)),
          (a.$refs = { container: o }),
          [
            'bg',
            'inner',
            'infobar',
            'toolbar',
            'stage',
            'caption',
            'navigation',
          ].forEach(function (t) {
            a.$refs[t] = o.find('.fancybox-' + t)
          }),
          a.trigger('onInit'),
          a.activate(),
          a.jumpTo(a.currIndex)
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e]
        })
      },
      addContent: function (t) {
        var e,
          o = this,
          i = n.makeArray(t)
        n.each(i, function (t, e) {
          var i,
            a,
            s,
            r,
            c,
            l = {},
            d = {}
          n.isPlainObject(e)
            ? ((l = e), (d = e.opts || e))
            : 'object' === n.type(e) && n(e).length
            ? ((i = n(e)),
              (d = i.data() || {}),
              (d = n.extend(!0, {}, d, d.options)),
              (d.$orig = i),
              (l.src = o.opts.src || d.src || i.attr('href')),
              l.type || l.src || ((l.type = 'inline'), (l.src = e)))
            : (l = { type: 'html', src: e + '' }),
            (l.opts = n.extend(!0, {}, o.opts, d)),
            n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
            n.fancybox.isMobile &&
              l.opts.mobile &&
              (l.opts = h(l.opts, l.opts.mobile)),
            (a = l.type || l.opts.type),
            (r = l.src || ''),
            !a &&
              r &&
              ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((a = 'video'),
                  l.opts.video.format ||
                    (l.opts.video.format =
                      'video/' + ('ogv' === s[1] ? 'ogg' : s[1])))
                : r.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                  )
                ? (a = 'image')
                : r.match(/\.(pdf)((\?|#).*)?$/i)
                ? ((a = 'iframe'),
                  (l = n.extend(!0, l, {
                    contentType: 'pdf',
                    opts: { iframe: { preload: !1 } },
                  })))
                : '#' === r.charAt(0) && (a = 'inline')),
            a ? (l.type = a) : o.trigger('objectNeedsType', l),
            l.contentType ||
              (l.contentType =
                n.inArray(l.type, ['html', 'inline', 'ajax']) > -1
                  ? 'html'
                  : l.type),
            (l.index = o.group.length),
            'auto' == l.opts.smallBtn &&
              (l.opts.smallBtn =
                n.inArray(l.type, ['html', 'inline', 'ajax']) > -1),
            'auto' === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
            (l.$thumb = l.opts.$thumb || null),
            l.opts.$trigger &&
              l.index === o.opts.index &&
              ((l.$thumb = l.opts.$trigger.find('img:first')),
              l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
            (l.$thumb && l.$thumb.length) ||
              !l.opts.$orig ||
              (l.$thumb = l.opts.$orig.find('img:first')),
            l.$thumb && !l.$thumb.length && (l.$thumb = null),
            (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
            'function' === n.type(l.opts.caption) &&
              (l.opts.caption = l.opts.caption.apply(e, [o, l])),
            'function' === n.type(o.opts.caption) &&
              (l.opts.caption = o.opts.caption.apply(e, [o, l])),
            l.opts.caption instanceof n ||
              (l.opts.caption =
                void 0 === l.opts.caption ? '' : l.opts.caption + ''),
            'ajax' === l.type &&
              ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
                ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            l.opts.modal &&
              (l.opts = n.extend(!0, l.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            o.group.push(l)
        }),
          Object.keys(o.slides).length &&
            (o.updateControls(),
            (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
      },
      addEvents: function () {
        var e = this
        e.removeEvents(),
          e.$refs.container
            .on('click.fb-close', '[data-fancybox-close]', function (t) {
              t.stopPropagation(), t.preventDefault(), e.close(t)
            })
            .on(
              'touchstart.fb-prev click.fb-prev',
              '[data-fancybox-prev]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.previous()
              }
            )
            .on(
              'touchstart.fb-next click.fb-next',
              '[data-fancybox-next]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.next()
              }
            )
            .on('click.fb', '[data-fancybox-zoom]', function (t) {
              e[e.isScaledDown() ? 'scaleToActual' : 'scaleToFit']()
            }),
          s.on('orientationchange.fb resize.fb', function (t) {
            t && t.originalEvent && 'resize' === t.originalEvent.type
              ? (e.requestId && u(e.requestId),
                (e.requestId = d(function () {
                  e.update(t)
                })))
              : (e.current &&
                  'iframe' === e.current.type &&
                  e.$refs.stage.hide(),
                setTimeout(
                  function () {
                    e.$refs.stage.show(), e.update(t)
                  },
                  n.fancybox.isMobile ? 600 : 250
                ))
          }),
          r.on('keydown.fb', function (t) {
            var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which
            if (9 == a) return void (i.opts.trapFocus && e.focus(t))
            if (
              !(
                !i.opts.keyboard ||
                t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                n(t.target).is('input,textarea,video,audio,select')
              )
            )
              return 8 === a || 27 === a
                ? (t.preventDefault(), void e.close(t))
                : 37 === a || 38 === a
                ? (t.preventDefault(), void e.previous())
                : 39 === a || 40 === a
                ? (t.preventDefault(), void e.next())
                : void e.trigger('afterKeydown', t, a)
          }),
          e.group[e.currIndex].opts.idleTime &&
            ((e.idleSecondsCounter = 0),
            r.on(
              'mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',
              function (t) {
                ;(e.idleSecondsCounter = 0),
                  e.isIdle && e.showControls(),
                  (e.isIdle = !1)
              }
            ),
            (e.idleInterval = t.setInterval(function () {
              ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                !e.isDragging &&
                ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls())
            }, 1e3)))
      },
      removeEvents: function () {
        var e = this
        s.off('orientationchange.fb resize.fb'),
          r.off('keydown.fb .fb-idle'),
          this.$refs.container.off('.fb-close .fb-prev .fb-next'),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null))
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t)
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t)
      },
      jumpTo: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          d,
          u,
          f = this,
          h = f.group.length
        if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
              (t < 0 || t >= h))
          )
            return !1
          if (
            ((o = f.firstRun = !Object.keys(f.slides).length),
            (r = f.current),
            (f.prevIndex = f.currIndex),
            (f.prevPos = f.currPos),
            (s = f.createSlide(t)),
            h > 1 &&
              ((a || s.index < h - 1) && f.createSlide(t + 1),
              (a || s.index > 0) && f.createSlide(t - 1)),
            (f.current = s),
            (f.currIndex = s.index),
            (f.currPos = s.pos),
            f.trigger('beforeShow', o),
            f.updateControls(),
            (s.forcedDuration = void 0),
            n.isNumeric(e)
              ? (s.forcedDuration = e)
              : (e = s.opts[o ? 'animationDuration' : 'transitionDuration']),
            (e = parseInt(e, 10)),
            (i = f.isMoved(s)),
            s.$slide.addClass('fancybox-slide--current'),
            o)
          )
            return (
              s.opts.animationEffect &&
                e &&
                f.$refs.container.css('transition-duration', e + 'ms'),
              f.$refs.container.addClass('fancybox-is-open').trigger('focus'),
              f.loadSlide(s),
              void f.preload('image')
            )
          ;(c = n.fancybox.getTranslate(r.$slide)),
            (l = n.fancybox.getTranslate(f.$refs.stage)),
            n.each(f.slides, function (t, e) {
              n.fancybox.stop(e.$slide, !0)
            }),
            r.pos !== s.pos && (r.isComplete = !1),
            r.$slide.removeClass(
              'fancybox-slide--complete fancybox-slide--current'
            ),
            i
              ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                n.each(f.slides, function (t, o) {
                  o.$slide
                    .removeClass('fancybox-animated')
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(' ')
                    })
                  var i = o.pos * c.width + o.pos * o.opts.gutter
                  n.fancybox.setTranslate(o.$slide, {
                    top: 0,
                    left: i - l.left + u,
                  }),
                    o.pos !== s.pos &&
                      o.$slide.addClass(
                        'fancybox-slide--' +
                          (o.pos > s.pos ? 'next' : 'previous')
                      ),
                    p(o.$slide),
                    n.fancybox.animate(
                      o.$slide,
                      {
                        top: 0,
                        left:
                          (o.pos - s.pos) * c.width +
                          (o.pos - s.pos) * o.opts.gutter,
                      },
                      e,
                      function () {
                        o.$slide
                          .css({ transform: '', opacity: '' })
                          .removeClass(
                            'fancybox-slide--next fancybox-slide--previous'
                          ),
                          o.pos === f.currPos && f.complete()
                      }
                    )
                }))
              : e &&
                s.opts.transitionEffect &&
                ((d =
                  'fancybox-animated fancybox-fx-' + s.opts.transitionEffect),
                r.$slide.addClass(
                  'fancybox-slide--' + (r.pos > s.pos ? 'next' : 'previous')
                ),
                n.fancybox.animate(
                  r.$slide,
                  d,
                  e,
                  function () {
                    r.$slide
                      .removeClass(d)
                      .removeClass(
                        'fancybox-slide--next fancybox-slide--previous'
                      )
                  },
                  !1
                )),
            s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
            f.preload('image')
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        )
      },
      scaleToActual: function (t, e, o) {
        var i,
          a,
          s,
          r,
          c,
          l = this,
          d = l.current,
          u = d.$content,
          f = n.fancybox.getTranslate(d.$slide).width,
          p = n.fancybox.getTranslate(d.$slide).height,
          h = d.width,
          g = d.height
        l.isAnimating ||
          l.isMoved() ||
          !u ||
          'image' != d.type ||
          !d.isLoaded ||
          d.hasError ||
          ((l.isAnimating = !0),
          n.fancybox.stop(u),
          (t = void 0 === t ? 0.5 * f : t),
          (e = void 0 === e ? 0.5 * p : e),
          (i = n.fancybox.getTranslate(u)),
          (i.top -= n.fancybox.getTranslate(d.$slide).top),
          (i.left -= n.fancybox.getTranslate(d.$slide).left),
          (r = h / i.width),
          (c = g / i.height),
          (a = 0.5 * f - 0.5 * h),
          (s = 0.5 * p - 0.5 * g),
          h > f &&
            ((a = i.left * r - (t * r - t)),
            a > 0 && (a = 0),
            a < f - h && (a = f - h)),
          g > p &&
            ((s = i.top * c - (e * c - e)),
            s > 0 && (s = 0),
            s < p - g && (s = p - g)),
          l.updateCursor(h, g),
          n.fancybox.animate(
            u,
            { top: s, left: a, scaleX: r, scaleY: c },
            o || 366,
            function () {
              l.isAnimating = !1
            }
          ),
          l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content
        o.isAnimating ||
          o.isMoved() ||
          !a ||
          'image' != i.type ||
          !i.isLoaded ||
          i.hasError ||
          ((o.isAnimating = !0),
          n.fancybox.stop(a),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height(),
            },
            t || 366,
            function () {
              o.isAnimating = !1
            }
          ))
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$content,
          c = t.$slide,
          l = t.width || t.opts.width,
          d = t.height || t.opts.height,
          u = {}
        return (
          !!(t.isLoaded && r && r.length) &&
          ((e = n.fancybox.getTranslate(s.$refs.stage).width),
          (o = n.fancybox.getTranslate(s.$refs.stage).height),
          (e -=
            parseFloat(c.css('paddingLeft')) +
            parseFloat(c.css('paddingRight')) +
            parseFloat(r.css('marginLeft')) +
            parseFloat(r.css('marginRight'))),
          (o -=
            parseFloat(c.css('paddingTop')) +
            parseFloat(c.css('paddingBottom')) +
            parseFloat(r.css('marginTop')) +
            parseFloat(r.css('marginBottom'))),
          (l && d) || ((l = e), (d = o)),
          (i = Math.min(1, e / l, o / d)),
          (l *= i),
          (d *= i),
          l > e - 0.5 && (l = e),
          d > o - 0.5 && (d = o),
          'image' === t.type
            ? ((u.top =
                Math.floor(0.5 * (o - d)) + parseFloat(c.css('paddingTop'))),
              (u.left =
                Math.floor(0.5 * (e - l)) + parseFloat(c.css('paddingLeft'))))
            : 'video' === t.contentType &&
              ((a =
                t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
              d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
          (u.width = l),
          (u.height = d),
          u)
        )
      },
      update: function (t) {
        var e = this
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t)
        })
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content,
          a = t.width || t.opts.width,
          s = t.height || t.opts.height,
          r = t.$slide
        o.adjustCaption(t),
          i &&
            (a || s || 'video' === t.contentType) &&
            !t.hasError &&
            (n.fancybox.stop(i),
            n.fancybox.setTranslate(i, o.getFitPos(t)),
            t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
          o.adjustLayout(t),
          r.length &&
            (r.trigger('refresh'),
            t.pos === o.currPos &&
              o.$refs.toolbar
                .add(o.$refs.navigation.find('.fancybox-button--arrow_right'))
                .toggleClass(
                  'compensate-for-scrollbar',
                  r.get(0).scrollHeight > r.get(0).clientHeight
                )),
          o.trigger('onUpdate', t, e)
      },
      centerSlide: function (t) {
        var e = this,
          o = e.current,
          i = o.$slide
        !e.isClosing &&
          o &&
          (i.siblings().css({ transform: '', opacity: '' }),
          i
            .parent()
            .children()
            .removeClass('fancybox-slide--previous fancybox-slide--next'),
          n.fancybox.animate(
            i,
            { top: 0, left: 0, opacity: 1 },
            void 0 === t ? 0 : t,
            function () {
              i.css({ transform: '', opacity: '' }),
                o.isComplete || e.complete()
            },
            !1
          ))
      },
      isMoved: function (t) {
        var e,
          o,
          i = t || this.current
        return (
          !!i &&
          ((o = n.fancybox.getTranslate(this.$refs.stage)),
          (e = n.fancybox.getTranslate(i.$slide)),
          !i.$slide.hasClass('fancybox-animated') &&
            (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
        )
      },
      updateCursor: function (t, e) {
        var o,
          i,
          a = this,
          s = a.current,
          r = a.$refs.container
        s &&
          !a.isClosing &&
          a.Guestures &&
          (r.removeClass(
            'fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan'
          ),
          (o = a.canPan(t, e)),
          (i = !!o || a.isZoomable()),
          r.toggleClass('fancybox-is-zoomable', i),
          n('[data-fancybox-zoom]').prop('disabled', !i),
          o
            ? r.addClass('fancybox-can-pan')
            : i &&
              ('zoom' === s.opts.clickContent ||
                (n.isFunction(s.opts.clickContent) &&
                  'zoom' == s.opts.clickContent(s)))
            ? r.addClass('fancybox-can-zoomIn')
            : s.opts.touch &&
              (s.opts.touch.vertical || a.group.length > 1) &&
              'video' !== s.contentType &&
              r.addClass('fancybox-can-swipe'))
      },
      isZoomable: function () {
        var t,
          e = this,
          n = e.current
        if (n && !e.isClosing && 'image' === n.type && !n.hasError) {
          if (!n.isLoaded) return !0
          if (
            (t = e.getFitPos(n)) &&
            (n.width > t.width || n.height > t.height)
          )
            return !0
        }
        return !1
      },
      isScaledDown: function (t, e) {
        var o = this,
          i = !1,
          a = o.current,
          s = a.$content
        return (
          void 0 !== t && void 0 !== e
            ? (i = t < a.width && e < a.height)
            : s &&
              ((i = n.fancybox.getTranslate(s)),
              (i = i.width < a.width && i.height < a.height)),
          i
        )
      },
      canPan: function (t, e) {
        var o = this,
          i = o.current,
          a = null,
          s = !1
        return (
          'image' === i.type &&
            (i.isComplete || (t && e)) &&
            !i.hasError &&
            ((s = o.getFitPos(i)),
            void 0 !== t && void 0 !== e
              ? (a = { width: t, height: e })
              : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
            a &&
              s &&
              (s =
                Math.abs(a.width - s.width) > 1.5 ||
                Math.abs(a.height - s.height) > 1.5)),
          s
        )
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this
        if (!t.isLoading && !t.isLoaded) {
          if (((t.isLoading = !0), !1 === a.trigger('beforeLoad', t)))
            return (t.isLoading = !1), !1
          switch (
            ((e = t.type),
            (o = t.$slide),
            o.off('refresh').trigger('onReset').addClass(t.opts.slideClass),
            e)
          ) {
            case 'image':
              a.setImage(t)
              break
            case 'iframe':
              a.setIframe(t)
              break
            case 'html':
              a.setContent(t, t.src || t.content)
              break
            case 'video':
              a.setContent(
                t,
                t.opts.video.tpl
                  .replace(/\{\{src\}\}/gi, t.src)
                  .replace(
                    '{{format}}',
                    t.opts.videoFormat || t.opts.video.format || ''
                  )
                  .replace('{{poster}}', t.thumb || '')
              )
              break
            case 'inline':
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t)
              break
            case 'ajax':
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      'success' === n && a.setContent(t, e)
                    },
                    error: function (e, n) {
                      e && 'abort' !== n && a.setError(t)
                    },
                  })
                )),
                o.one('onReset', function () {
                  i.abort()
                })
              break
            default:
              a.setError(t)
          }
          return !0
        }
      },
      setImage: function (t) {
        var o,
          i = this
        setTimeout(function () {
          var e = t.$image
          i.isClosing ||
            !t.isLoading ||
            (e && e.length && e[0].complete) ||
            t.hasError ||
            i.showLoading(t)
        }, 50),
          i.checkSrcset(t),
          (t.$content = n('<div class="fancybox-content"></div>')
            .addClass('fancybox-is-hidden')
            .appendTo(t.$slide.addClass('fancybox-slide--image'))),
          !1 !== t.opts.preload &&
            t.opts.width &&
            t.opts.height &&
            t.thumb &&
            ((t.width = t.opts.width),
            (t.height = t.opts.height),
            (o = e.createElement('img')),
            (o.onerror = function () {
              n(this).remove(), (t.$ghost = null)
            }),
            (o.onload = function () {
              i.afterLoad(t)
            }),
            (t.$ghost = n(o)
              .addClass('fancybox-image')
              .appendTo(t.$content)
              .attr('src', t.thumb))),
          i.setBigImage(t)
      },
      checkSrcset: function (e) {
        var n,
          o,
          i,
          a,
          s = e.opts.srcset || e.opts.image.srcset
        if (s) {
          ;(i = t.devicePixelRatio || 1),
            (a = t.innerWidth * i),
            (o = s.split(',').map(function (t) {
              var e = {}
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10)
                    if (0 === n) return (e.url = t)
                    o && ((e.value = o), (e.postfix = t[t.length - 1]))
                  }),
                e
              )
            })),
            o.sort(function (t, e) {
              return t.value - e.value
            })
          for (var r = 0; r < o.length; r++) {
            var c = o[r]
            if (
              ('w' === c.postfix && c.value >= a) ||
              ('x' === c.postfix && c.value >= i)
            ) {
              n = c
              break
            }
          }
          !n && o.length && (n = o[o.length - 1]),
            n &&
              ((e.src = n.url),
              e.width &&
                e.height &&
                'w' == n.postfix &&
                ((e.height = (e.width / e.height) * n.value),
                (e.width = n.value)),
              (e.opts.srcset = s))
        }
      },
      setBigImage: function (t) {
        var o = this,
          i = e.createElement('img'),
          a = n(i)
        ;(t.$image = a
          .one('error', function () {
            o.setError(t)
          })
          .one('load', function () {
            var e
            t.$ghost ||
              (o.resolveImageSlideSize(
                t,
                this.naturalWidth,
                this.naturalHeight
              ),
              o.afterLoad(t)),
              o.isClosing ||
                (t.opts.srcset &&
                  ((e = t.opts.sizes),
                  (e && 'auto' !== e) ||
                    (e =
                      (t.width / t.height > 1 && s.width() / s.height() > 1
                        ? '100'
                        : Math.round((t.width / t.height) * 100)) + 'vw'),
                  a.attr('sizes', e).attr('srcset', t.opts.srcset)),
                t.$ghost &&
                  setTimeout(function () {
                    t.$ghost && !o.isClosing && t.$ghost.hide()
                  }, Math.min(300, Math.max(1e3, t.height / 1600))),
                o.hideLoading(t))
          })
          .addClass('fancybox-image')
          .attr('src', t.src)
          .appendTo(t.$content)),
          (i.complete || 'complete' == i.readyState) &&
          a.naturalWidth &&
          a.naturalHeight
            ? a.trigger('load')
            : i.error && a.trigger('error')
      },
      resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10),
          i = parseInt(t.opts.height, 10)
        ;(t.width = e),
          (t.height = n),
          o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
          i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i))
      },
      setIframe: function (t) {
        var e,
          o = this,
          i = t.opts.iframe,
          a = t.$slide
        ;(t.$content = n(
          '<div class="fancybox-content' +
            (i.preload ? ' fancybox-is-hidden' : '') +
            '"></div>'
        )
          .css(i.css)
          .appendTo(a)),
          a.addClass('fancybox-slide--' + t.contentType),
          (t.$iframe = e =
            n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
              .attr(i.attr)
              .appendTo(t.$content)),
          i.preload
            ? (o.showLoading(t),
              e.on('load.fb error.fb', function (e) {
                ;(this.isReady = 1), t.$slide.trigger('refresh'), o.afterLoad(t)
              }),
              a.on('refresh.fb', function () {
                var n,
                  o,
                  s = t.$content,
                  r = i.css.width,
                  c = i.css.height
                if (1 === e[0].isReady) {
                  try {
                    ;(n = e.contents()), (o = n.find('body'))
                  } catch (t) {}
                  o &&
                    o.length &&
                    o.children().length &&
                    (a.css('overflow', 'visible'),
                    s.css({
                      width: '100%',
                      'max-width': '100%',
                      height: '9999px',
                    }),
                    void 0 === r &&
                      (r = Math.ceil(
                        Math.max(o[0].clientWidth, o.outerWidth(!0))
                      )),
                    s.css('width', r || '').css('max-width', ''),
                    void 0 === c &&
                      (c = Math.ceil(
                        Math.max(o[0].clientHeight, o.outerHeight(!0))
                      )),
                    s.css('height', c || ''),
                    a.css('overflow', 'auto')),
                    s.removeClass('fancybox-is-hidden')
                }
              }))
            : o.afterLoad(t),
          e.attr('src', t.src),
          a.one('onReset', function () {
            try {
              n(this)
                .find('iframe')
                .hide()
                .unbind()
                .attr('src', '//about:blank')
            } catch (t) {}
            n(this).off('refresh.fb').empty(),
              (t.isLoaded = !1),
              (t.isRevealed = !1)
          })
      },
      setContent: function (t, e) {
        var o = this
        o.isClosing ||
          (o.hideLoading(t),
          t.$content && n.fancybox.stop(t.$content),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? ((e.hasClass('fancybox-content') ||
                e.parent().hasClass('fancybox-content')) &&
                e.parents('.fancybox-slide').trigger('onReset'),
              (t.$placeholder = n('<div>').hide().insertAfter(e)),
              e.css('display', 'inline-block'))
            : t.hasError ||
              ('string' === n.type(e) &&
                (e = n('<div>').append(n.trim(e)).contents()),
              t.opts.filter && (e = n('<div>').html(e).find(t.opts.filter))),
          t.$slide.one('onReset', function () {
            n(this).find('video,audio').trigger('pause'),
              t.$placeholder &&
                (t.$placeholder
                  .after(e.removeClass('fancybox-content').hide())
                  .remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError ||
                (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1))
          }),
          n(e).appendTo(t.$slide),
          n(e).is('video,audio') &&
            (n(e).addClass('fancybox-video'),
            n(e).wrap('<div></div>'),
            (t.contentType = 'video'),
            (t.opts.width = t.opts.width || n(e).attr('width')),
            (t.opts.height = t.opts.height || n(e).attr('height'))),
          (t.$content = t.$slide
            .children()
            .filter('div,form,main,video,audio,article,.fancybox-content')
            .first()),
          t.$content.siblings().hide(),
          t.$content.length ||
            (t.$content = t.$slide.wrapInner('<div></div>').children().first()),
          t.$content.addClass('fancybox-content'),
          t.$slide.addClass('fancybox-slide--' + t.contentType),
          o.afterLoad(t))
      },
      setError: function (t) {
        ;(t.hasError = !0),
          t.$slide
            .trigger('onReset')
            .removeClass('fancybox-slide--' + t.contentType)
            .addClass('fancybox-slide--error'),
          (t.contentType = 'html'),
          this.setContent(t, this.translate(t, t.opts.errorTpl)),
          t.pos === this.currPos && (this.isAnimating = !1)
      },
      showLoading: function (t) {
        var e = this
        ;(t = t || e.current) &&
          !t.$spinner &&
          (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
            .appendTo(t.$slide)
            .hide()
            .fadeIn('fast'))
      },
      hideLoading: function (t) {
        var e = this
        ;(t = t || e.current) &&
          t.$spinner &&
          (t.$spinner.stop().remove(), delete t.$spinner)
      },
      afterLoad: function (t) {
        var e = this
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger('afterLoad', t),
          e.hideLoading(t),
          !t.opts.smallBtn ||
            (t.$smallBtn && t.$smallBtn.length) ||
            (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on('contextmenu.fb', function (t) {
              return 2 == t.button && t.preventDefault(), !0
            }),
            'image' === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.adjustCaption(t),
          e.adjustLayout(t),
          t.pos === e.currPos && e.updateCursor(),
          e.revealContent(t))
      },
      adjustCaption: function (t) {
        var e,
          n = this,
          o = t || n.current,
          i = o.opts.caption,
          a = o.opts.preventCaptionOverlap,
          s = n.$refs.caption,
          r = !1
        s.toggleClass('fancybox-caption--separate', a),
          a &&
            i &&
            i.length &&
            (o.pos !== n.currPos
              ? ((e = s.clone().appendTo(s.parent())),
                e.children().eq(0).empty().html(i),
                (r = e.outerHeight(!0)),
                e.empty().remove())
              : n.$caption && (r = n.$caption.outerHeight(!0)),
            o.$slide.css('padding-bottom', r || ''))
      },
      adjustLayout: function (t) {
        var e,
          n,
          o,
          i,
          a = this,
          s = t || a.current
        s.isLoaded &&
          !0 !== s.opts.disableLayoutFix &&
          (s.$content.css('margin-bottom', ''),
          s.$content.outerHeight() > s.$slide.height() + 0.5 &&
            ((o = s.$slide[0].style['padding-bottom']),
            (i = s.$slide.css('padding-bottom')),
            parseFloat(i) > 0 &&
              ((e = s.$slide[0].scrollHeight),
              s.$slide.css('padding-bottom', 0),
              Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
              s.$slide.css('padding-bottom', o))),
          s.$content.css('margin-bottom', n))
      },
      revealContent: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$slide,
          c = !1,
          l = !1,
          d = s.isMoved(t),
          u = t.isRevealed
        return (
          (t.isRevealed = !0),
          (e = t.opts[s.firstRun ? 'animationEffect' : 'transitionEffect']),
          (i = t.opts[s.firstRun ? 'animationDuration' : 'transitionDuration']),
          (i = parseInt(
            void 0 === t.forcedDuration ? i : t.forcedDuration,
            10
          )),
          (!d && t.pos === s.currPos && i) || (e = !1),
          'zoom' === e &&
            (t.pos === s.currPos &&
            i &&
            'image' === t.type &&
            !t.hasError &&
            (l = s.getThumbPos(t))
              ? (c = s.getFitPos(t))
              : (e = 'fade')),
          'zoom' === e
            ? ((s.isAnimating = !0),
              (c.scaleX = c.width / l.width),
              (c.scaleY = c.height / l.height),
              (a = t.opts.zoomOpacity),
              'auto' == a &&
                (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
              a && ((l.opacity = 0.1), (c.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass('fancybox-is-hidden'),
                l
              ),
              p(t.$content),
              void n.fancybox.animate(t.$content, c, i, function () {
                ;(s.isAnimating = !1), s.complete()
              }))
            : (s.updateSlide(t),
              e
                ? (n.fancybox.stop(r),
                  (o =
                    'fancybox-slide--' +
                    (t.pos >= s.prevPos ? 'next' : 'previous') +
                    ' fancybox-animated fancybox-fx-' +
                    e),
                  r.addClass(o).removeClass('fancybox-slide--current'),
                  t.$content.removeClass('fancybox-is-hidden'),
                  p(r),
                  'image' !== t.type && t.$content.hide().show(0),
                  void n.fancybox.animate(
                    r,
                    'fancybox-slide--current',
                    i,
                    function () {
                      r.removeClass(o).css({ transform: '', opacity: '' }),
                        t.pos === s.currPos && s.complete()
                    },
                    !0
                  ))
                : (t.$content.removeClass('fancybox-is-hidden'),
                  u ||
                    !d ||
                    'image' !== t.type ||
                    t.hasError ||
                    t.$content.hide().fadeIn('fast'),
                  void (t.pos === s.currPos && s.complete())))
        )
      },
      getThumbPos: function (t) {
        var e,
          o,
          i,
          a,
          s,
          r = !1,
          c = t.$thumb
        return (
          !(!c || !g(c[0])) &&
          ((e = n.fancybox.getTranslate(c)),
          (o = parseFloat(c.css('border-top-width') || 0)),
          (i = parseFloat(c.css('border-right-width') || 0)),
          (a = parseFloat(c.css('border-bottom-width') || 0)),
          (s = parseFloat(c.css('border-left-width') || 0)),
          (r = {
            top: e.top + o,
            left: e.left + s,
            width: e.width - i - s,
            height: e.height - o - a,
            scaleX: 1,
            scaleY: 1,
          }),
          e.width > 0 && e.height > 0 && r)
        )
      },
      complete: function () {
        var t,
          e = this,
          o = e.current,
          i = {}
        !e.isMoved() &&
          o.isLoaded &&
          (o.isComplete ||
            ((o.isComplete = !0),
            o.$slide.siblings().trigger('onReset'),
            e.preload('inline'),
            p(o.$slide),
            o.$slide.addClass('fancybox-slide--complete'),
            n.each(e.slides, function (t, o) {
              o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                ? (i[o.pos] = o)
                : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
            }),
            (e.slides = i)),
          (e.isAnimating = !1),
          e.updateCursor(),
          e.trigger('afterShow'),
          o.opts.video.autoStart &&
            o.$slide
              .find('video,audio')
              .filter(':visible:first')
              .trigger('play')
              .one('ended', function () {
                Document.exitFullscreen
                  ? Document.exitFullscreen()
                  : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                  e.next()
              }),
          o.opts.autoFocus &&
            'html' === o.contentType &&
            ((t = o.$content.find('input[autofocus]:enabled:visible:first')),
            t.length ? t.trigger('focus') : e.focus(null, !0)),
          o.$slide.scrollTop(0).scrollLeft(0))
      },
      preload: function (t) {
        var e,
          n,
          o = this
        o.group.length < 2 ||
          ((n = o.slides[o.currPos + 1]),
          (e = o.slides[o.currPos - 1]),
          e && e.type === t && o.loadSlide(e),
          n && n.type === t && o.loadSlide(n))
      },
      focus: function (t, o) {
        var i,
          a,
          s = this,
          r = [
            'a[href]',
            'area[href]',
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            'select:not([disabled]):not([aria-hidden])',
            'textarea:not([disabled]):not([aria-hidden])',
            'button:not([disabled]):not([aria-hidden])',
            'iframe',
            'object',
            'embed',
            'video',
            'audio',
            '[contenteditable]',
            '[tabindex]:not([tabindex^="-"])',
          ].join(',')
        s.isClosing ||
          ((i =
            !t && s.current && s.current.isComplete
              ? s.current.$slide.find(
                  '*:visible' + (o ? ':not(.fancybox-close-small)' : '')
                )
              : s.$refs.container.find('*:visible')),
          (i = i.filter(r).filter(function () {
            return (
              'hidden' !== n(this).css('visibility') &&
              !n(this).hasClass('disabled')
            )
          })),
          i.length
            ? ((a = i.index(e.activeElement)),
              t && t.shiftKey
                ? (a < 0 || 0 == a) &&
                  (t.preventDefault(), i.eq(i.length - 1).trigger('focus'))
                : (a < 0 || a == i.length - 1) &&
                  (t && t.preventDefault(), i.eq(0).trigger('focus')))
            : s.$refs.container.trigger('focus'))
      },
      activate: function () {
        var t = this
        n('.fancybox-container').each(function () {
          var e = n(this).data('FancyBox')
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger('onDeactivate'), e.removeEvents(), (e.isVisible = !1))
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger('onActivate'),
          t.addEvents()
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          u = this,
          f = u.current,
          h = function () {
            u.cleanUp(t)
          }
        return (
          !u.isClosing &&
          ((u.isClosing = !0),
          !1 === u.trigger('beforeClose', t)
            ? ((u.isClosing = !1),
              d(function () {
                u.update()
              }),
              !1)
            : (u.removeEvents(),
              (a = f.$content),
              (o = f.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide.removeClass(
                'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated'
              ),
              !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
              f.$slide.siblings().trigger('onReset').remove(),
              i &&
                u.$refs.container
                  .removeClass('fancybox-is-open')
                  .addClass('fancybox-is-closing')
                  .css('transition-duration', i + 'ms'),
              u.hideLoading(f),
              u.hideControls(!0),
              u.updateCursor(),
              'zoom' !== o ||
                (a &&
                  i &&
                  'image' === f.type &&
                  !u.isMoved() &&
                  !f.hasError &&
                  (l = u.getThumbPos(f))) ||
                (o = 'fade'),
              'zoom' === o
                ? (n.fancybox.stop(a),
                  (s = n.fancybox.getTranslate(a)),
                  (c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height,
                  }),
                  (r = f.opts.zoomOpacity),
                  'auto' == r &&
                    (r =
                      Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                  r && (l.opacity = 0),
                  n.fancybox.setTranslate(a, c),
                  p(a),
                  n.fancybox.animate(a, l, i, h),
                  !0)
                : (o && i
                    ? n.fancybox.animate(
                        f.$slide
                          .addClass('fancybox-slide--previous')
                          .removeClass('fancybox-slide--current'),
                        'fancybox-animated fancybox-fx-' + o,
                        i,
                        h
                      )
                    : !0 === t
                    ? setTimeout(h, i)
                    : h(),
                  !0)))
        )
      },
      cleanUp: function (e) {
        var o,
          i,
          a,
          s = this,
          r = s.current.opts.$orig
        s.current.$slide.trigger('onReset'),
          s.$refs.container.empty().remove(),
          s.trigger('afterClose', e),
          s.current.opts.backFocus &&
            ((r && r.length && r.is(':visible')) || (r = s.$trigger),
            r &&
              r.length &&
              ((i = t.scrollX),
              (a = t.scrollY),
              r.trigger('focus'),
              n('html, body').scrollTop(a).scrollLeft(i))),
          (s.current = null),
          (o = n.fancybox.getInstance()),
          o
            ? o.activate()
            : (n('body').removeClass(
                'fancybox-active compensate-for-scrollbar'
              ),
              n('#fancybox-style-noscroll').remove())
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current
        if (
          (s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          !1 === o)
        )
          return o
        'afterClose' !== t && a.$refs
          ? a.$refs.container.trigger(t + '.fb', i)
          : r.trigger(t + '.fb', i)
      },
      updateControls: function () {
        var t = this,
          o = t.current,
          i = o.index,
          a = t.$refs.container,
          s = t.$refs.caption,
          r = o.opts.caption
        o.$slide.trigger('refresh'),
          r && r.length
            ? ((t.$caption = s), s.children().eq(0).html(r))
            : (t.$caption = null),
          t.hasHiddenControls || t.isIdle || t.showControls(),
          a.find('[data-fancybox-count]').html(t.group.length),
          a.find('[data-fancybox-index]').html(i + 1),
          a
            .find('[data-fancybox-prev]')
            .prop('disabled', !o.opts.loop && i <= 0),
          a
            .find('[data-fancybox-next]')
            .prop('disabled', !o.opts.loop && i >= t.group.length - 1),
          'image' === o.type
            ? a
                .find('[data-fancybox-zoom]')
                .show()
                .end()
                .find('[data-fancybox-download]')
                .attr('href', o.opts.image.src || o.src)
                .show()
            : o.opts.toolbar &&
              a.find('[data-fancybox-download],[data-fancybox-zoom]').hide(),
          n(e.activeElement).is(':hidden,[disabled]') &&
            t.$refs.container.trigger('focus')
      },
      hideControls: function (t) {
        var e = this,
          n = ['infobar', 'toolbar', 'nav']
        ;(!t && e.current.opts.preventCaptionOverlap) || n.push('caption'),
          this.$refs.container.removeClass(
            n
              .map(function (t) {
                return 'fancybox-show-' + t
              })
              .join(' ')
          ),
          (this.hasHiddenControls = !0)
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container
        ;(t.hasHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass('fancybox-show-toolbar', !(!e.toolbar || !e.buttons))
            .toggleClass(
              'fancybox-show-infobar',
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass('fancybox-show-caption', !!t.$caption)
            .toggleClass(
              'fancybox-show-nav',
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass('fancybox-is-modal', !!e.modal)
      },
      toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls()
      },
    }),
      (n.fancybox = {
        version: '3.5.7',
        defaults: a,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data('FancyBox'),
            o = Array.prototype.slice.call(arguments, 1)
          return (
            e instanceof b &&
            ('string' === n.type(t)
              ? e[t].apply(e, o)
              : 'function' === n.type(t) && t.apply(e, o),
            e)
          )
        },
        open: function (t, e, n) {
          return new b(t, e, n)
        },
        close: function (t) {
          var e = this.getInstance()
          e && (e.close(), !0 === t && this.close(t))
        },
        destroy: function () {
          this.close(!0), r.add('body').off('click.fb-start', '**')
        },
        isMobile:
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        use3d: (function () {
          var n = e.createElement('div')
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n) &&
            t.getComputedStyle(n).getPropertyValue('transform') &&
            !(e.documentMode && e.documentMode < 11)
          )
        })(),
        getTranslate: function (t) {
          var e
          return (
            !(!t || !t.length) &&
            ((e = t[0].getBoundingClientRect()),
            {
              top: e.top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css('opacity')),
            })
          )
        },
        setTranslate: function (t, e) {
          var n = '',
            o = {}
          if (t && e)
            return (
              (void 0 === e.left && void 0 === e.top) ||
                ((n =
                  (void 0 === e.left ? t.position().left : e.left) +
                  'px, ' +
                  (void 0 === e.top ? t.position().top : e.top) +
                  'px'),
                (n = this.use3d
                  ? 'translate3d(' + n + ', 0px)'
                  : 'translate(' + n + ')')),
              void 0 !== e.scaleX && void 0 !== e.scaleY
                ? (n += ' scale(' + e.scaleX + ', ' + e.scaleY + ')')
                : void 0 !== e.scaleX && (n += ' scaleX(' + e.scaleX + ')'),
              n.length && (o.transform = n),
              void 0 !== e.opacity && (o.opacity = e.opacity),
              void 0 !== e.width && (o.width = e.width),
              void 0 !== e.height && (o.height = e.height),
              t.css(o)
            )
        },
        animate: function (t, e, o, i, a) {
          var s,
            r = this
          n.isFunction(o) && ((i = o), (o = null)),
            r.stop(t),
            (s = r.getTranslate(t)),
            t.on(f, function (c) {
              ;(!c ||
                !c.originalEvent ||
                (t.is(c.originalEvent.target) &&
                  'z-index' != c.originalEvent.propertyName)) &&
                (r.stop(t),
                n.isNumeric(o) && t.css('transition-duration', ''),
                n.isPlainObject(e)
                  ? void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    r.setTranslate(t, {
                      top: e.top,
                      left: e.left,
                      width: s.width * e.scaleX,
                      height: s.height * e.scaleY,
                      scaleX: 1,
                      scaleY: 1,
                    })
                  : !0 !== a && t.removeClass(e),
                n.isFunction(i) && i(c))
            }),
            n.isNumeric(o) && t.css('transition-duration', o + 'ms'),
            n.isPlainObject(e)
              ? (void 0 !== e.scaleX &&
                  void 0 !== e.scaleY &&
                  (delete e.width,
                  delete e.height,
                  t.parent().hasClass('fancybox-slide--image') &&
                    t.parent().addClass('fancybox-is-scaling')),
                n.fancybox.setTranslate(t, e))
              : t.addClass(e),
            t.data(
              'timer',
              setTimeout(function () {
                t.trigger(f)
              }, o + 33)
            )
        },
        stop: function (t, e) {
          t &&
            t.length &&
            (clearTimeout(t.data('timer')),
            e && t.trigger(f),
            t.off(f).css('transition-duration', ''),
            t.parent().removeClass('fancybox-is-scaling'))
        },
      }),
      (n.fn.fancybox = function (t) {
        var e
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n('body')
                .off('click.fb-start', e)
                .on('click.fb-start', e, { options: t }, i)
            : this.off('click.fb-start').on(
                'click.fb-start',
                { items: this, options: t },
                i
              ),
          this
        )
      }),
      r.on('click.fb-start', '[data-fancybox]', i),
      r.on('click.fb-start', '[data-fancybox-trigger]', function (t) {
        n('[data-fancybox="' + n(this).attr('data-fancybox-trigger') + '"]')
          .eq(n(this).attr('data-fancybox-index') || 0)
          .trigger('click.fb-start', { $trigger: n(this) })
      }),
      (function () {
        var t = null
        r.on('mousedown mouseup focus blur', '.fancybox-button', function (e) {
          switch (e.type) {
            case 'mousedown':
              t = n(this)
              break
            case 'mouseup':
              t = null
              break
            case 'focusin':
              n('.fancybox-button').removeClass('fancybox-focus'),
                n(this).is(t) ||
                  n(this).is('[disabled]') ||
                  n(this).addClass('fancybox-focus')
              break
            case 'focusout':
              n('.fancybox-button').removeClass('fancybox-focus')
          }
        })
      })()
  }
})(window, document, jQuery),
  (function (t) {
    'use strict'
    var e = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: 'transparent',
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: 'iframe',
          url: 'https://www.youtube-nocookie.com/embed/$4',
          thumb: 'https://img.youtube.com/vi/$4/hqdefault.jpg',
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: 'iframe',
          url: '//player.vimeo.com/video/$2',
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: 'image',
          url: '//$1/p/$2/media/?size=l',
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: 'iframe',
          url: function (t) {
            return (
              '//maps.google.' +
              t[2] +
              '/?ll=' +
              (t[9]
                ? t[9] +
                  '&z=' +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, '&') : '')
                : t[12] + ''
              ).replace(/\?/, '&') +
              '&output=' +
              (t[12] && t[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed')
            )
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: 'iframe',
          url: function (t) {
            return (
              '//maps.google.' +
              t[2] +
              '/maps?q=' +
              t[5].replace('query=', 'q=').replace('api=1', '') +
              '&output=embed'
            )
          },
        },
      },
      n = function (e, n, o) {
        if (e)
          return (
            (o = o || ''),
            'object' === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace('$' + t, n || '')
            }),
            o.length && (e += (e.indexOf('?') > 0 ? '&' : '?') + o),
            e
          )
      }
    t(document).on('objectNeedsType.fb', function (o, i, a) {
      var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || '',
        h = !1
      ;(s = t.extend(!0, {}, e, a.opts.media)),
        t.each(s, function (e, o) {
          if ((c = p.match(o.matcher))) {
            if (
              ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
            ) {
              ;(d = c[o.paramPlace]),
                '?' == d[0] && (d = d.substring(1)),
                (d = d.split('&'))
              for (var i = 0; i < d.length; ++i) {
                var s = d[i].split('=', 2)
                2 == s.length &&
                  (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, ' ')))
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, a.opts[e], u)),
              (p =
                'function' === t.type(o.url)
                  ? o.url.call(this, c, l, a)
                  : n(o.url, c, l)),
              (r =
                'function' === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, a)
                  : n(o.thumb, c)),
              'youtube' === e
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return (
                      '&start=' +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                    )
                  }))
                : 'vimeo' === e && (p = p.replace('&%23', '#')),
              !1
            )
          }
        }),
        h
          ? (a.opts.thumb ||
              (a.opts.$thumb && a.opts.$thumb.length) ||
              (a.opts.thumb = r),
            'iframe' === h &&
              (a.opts = t.extend(!0, a.opts, {
                iframe: { preload: !1, attr: { scrolling: 'no' } },
              })),
            t.extend(a, {
              type: h,
              src: p,
              origSrc: a.src,
              contentSource: f,
              contentType:
                'image' === h
                  ? 'image'
                  : 'gmap_place' == f || 'gmap_search' == f
                  ? 'map'
                  : 'video',
            }))
          : p && (a.type = a.opts.defaultType)
    })
    var o = {
      youtube: {
        src: 'https://www.youtube.com/iframe_api',
        class: 'YT',
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: 'https://player.vimeo.com/api/player.js',
        class: 'Vimeo',
        loading: !1,
        loaded: !1,
      },
      load: function (t) {
        var e,
          n = this
        if (this[t].loaded)
          return void setTimeout(function () {
            n.done(t)
          })
        this[t].loading ||
          ((this[t].loading = !0),
          (e = document.createElement('script')),
          (e.type = 'text/javascript'),
          (e.src = this[t].src),
          'youtube' === t
            ? (window.onYouTubeIframeAPIReady = function () {
                ;(n[t].loaded = !0), n.done(t)
              })
            : (e.onload = function () {
                ;(n[t].loaded = !0), n.done(t)
              }),
          document.body.appendChild(e))
      },
      done: function (e) {
        var n, o, i
        'youtube' === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()) &&
            ((o = n.current.$content.find('iframe')),
            'youtube' === e && void 0 !== YT && YT
              ? (i = new YT.Player(o.attr('id'), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && n.next()
                    },
                  },
                }))
              : 'vimeo' === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                ((i = new Vimeo.Player(o)),
                i.on('ended', function () {
                  n.next()
                })))
      },
    }
    t(document).on({
      'afterShow.fb': function (t, e, n) {
        e.group.length > 1 &&
          ('youtube' === n.contentSource || 'vimeo' === n.contentSource) &&
          o.load(n.contentSource)
      },
    })
  })(jQuery),
  (function (t, e, n) {
    'use strict'
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60)
          }
        )
      })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e)
          }
        )
      })(),
      a = function (e) {
        var n = []
        ;(e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e])
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY })
        return n
      },
      s = function (t, e, n) {
        return e && t
          ? 'x' === n
            ? t.x - e.x
            : 'y' === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0
      },
      r = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data('selectable')
        )
          return !0
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ('data-fancybox-' === o[e].nodeName.substr(0, 14)) return !0
        return !1
      },
      c = function (e) {
        var n = t.getComputedStyle(e)['overflow-y'],
          o = t.getComputedStyle(e)['overflow-x'],
          i =
            ('scroll' === n || 'auto' === n) && e.scrollHeight > e.clientHeight,
          a = ('scroll' === o || 'auto' === o) && e.scrollWidth > e.clientWidth
        return i || a
      },
      l = function (t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break
          if (
            ((t = t.parent()),
            !t.length || t.hasClass('fancybox-stage') || t.is('body'))
          )
            break
        }
        return e
      },
      d = function (t) {
        var e = this
        ;(e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            'touchstart.fb.touch mousedown.fb.touch',
            n.proxy(e, 'ontouchstart')
          )
      }
    ;(d.prototype.destroy = function () {
      var t = this
      t.$container.off('.fb.touch'),
        n(e).off('.fb.touch'),
        t.requestId && (i(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null))
    }),
      (d.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          d = i.instance,
          u = d.current,
          f = u.$slide,
          p = u.$content,
          h = 'touchstart' == o.type
        if (
          (h && i.$container.off('mousedown.fb.touch'),
          (!o.originalEvent || 2 != o.originalEvent.button) &&
            f.length &&
            c.length &&
            !r(c) &&
            !r(c.parent()) &&
            (c.is('img') ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!u || d.isAnimating || u.$slide.hasClass('fancybox-animated'))
            return o.stopPropagation(), void o.preventDefault()
          ;(i.realPoints = i.startPoints = a(o)),
            i.startPoints.length &&
              (u.touch && o.stopPropagation(),
              (i.startEvent = o),
              (i.canTap = !0),
              (i.$target = c),
              (i.$content = p),
              (i.opts = u.opts.touch),
              (i.isPanning = !1),
              (i.isSwiping = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.canPan = d.canPan()),
              (i.startTime = new Date().getTime()),
              (i.distanceX = i.distanceY = i.distance = 0),
              (i.canvasWidth = Math.round(f[0].clientWidth)),
              (i.canvasHeight = Math.round(f[0].clientHeight)),
              (i.contentLastPos = null),
              (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0,
              }),
              (i.sliderStartPos = n.fancybox.getTranslate(f)),
              (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
              (i.sliderStartPos.top -= i.stagePos.top),
              (i.sliderStartPos.left -= i.stagePos.left),
              (i.contentStartPos.top -= i.stagePos.top),
              (i.contentStartPos.left -= i.stagePos.left),
              n(e)
                .off('.fb.touch')
                .on(
                  h
                    ? 'touchend.fb.touch touchcancel.fb.touch'
                    : 'mouseup.fb.touch mouseleave.fb.touch',
                  n.proxy(i, 'ontouchend')
                )
                .on(
                  h ? 'touchmove.fb.touch' : 'mousemove.fb.touch',
                  n.proxy(i, 'ontouchmove')
                ),
              n.fancybox.isMobile &&
                e.addEventListener('scroll', i.onscroll, !0),
              (((i.opts || i.canPan) &&
                (c.is(i.$stage) || i.$stage.find(c).length)) ||
                (c.is('.fancybox-image') && o.preventDefault(),
                n.fancybox.isMobile &&
                  c.parents('.fancybox-caption').length)) &&
                ((i.isScrollable = l(c) || l(c.parent())),
                (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                (1 === i.startPoints.length || u.hasError) &&
                  (i.canPan
                    ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                    : (i.isSwiping = !0),
                  i.$container.addClass('fancybox-is-grabbing')),
                2 === i.startPoints.length &&
                  'image' === u.type &&
                  (u.isLoaded || u.$ghost) &&
                  ((i.canTap = !1),
                  (i.isSwiping = !1),
                  (i.isPanning = !1),
                  (i.isZooming = !0),
                  n.fancybox.stop(i.$content),
                  (i.centerPointStartX =
                    0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                    n(t).scrollLeft()),
                  (i.centerPointStartY =
                    0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                    n(t).scrollTop()),
                  (i.percentageOfImageAtPinchPointX =
                    (i.centerPointStartX - i.contentStartPos.left) /
                    i.contentStartPos.width),
                  (i.percentageOfImageAtPinchPointY =
                    (i.centerPointStartY - i.contentStartPos.top) /
                    i.contentStartPos.height),
                  (i.startDistanceBetweenFingers = s(
                    i.startPoints[0],
                    i.startPoints[1]
                  )))))
        }
      }),
      (d.prototype.onscroll = function (t) {
        var n = this
        ;(n.isScrolling = !0), e.removeEventListener('scroll', n.onscroll, !0)
      }),
      (d.prototype.ontouchmove = function (t) {
        var e = this
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling
          ? void (e.canTap = !1)
          : ((e.newPoints = a(t)),
            void (
              (e.opts || e.canPan) &&
              e.newPoints.length &&
              e.newPoints.length &&
              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
              (e.distanceX = s(e.newPoints[0], e.startPoints[0], 'x')),
              (e.distanceY = s(e.newPoints[0], e.startPoints[0], 'y')),
              (e.distance = s(e.newPoints[0], e.startPoints[0])),
              e.distance > 0 &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ))
      }),
      (d.prototype.onSwipe = function (e) {
        var a,
          s = this,
          r = s.instance,
          c = s.isSwiping,
          l = s.sliderStartPos.left || 0
        if (!0 !== c)
          'x' == c &&
            (s.distanceX > 0 &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (l += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                (s.instance.group.length < 2 ||
                  (s.instance.current.index === s.instance.group.length - 1 &&
                    !s.instance.current.opts.loop))
              ? (l -= Math.pow(-s.distanceX, 0.8))
              : (l += s.distanceX)),
            (s.sliderLastPos = {
              top: 'x' == c ? 0 : s.sliderStartPos.top + s.distanceY,
              left: l,
            }),
            s.requestId && (i(s.requestId), (s.requestId = null)),
            (s.requestId = o(function () {
              s.sliderLastPos &&
                (n.each(s.instance.slides, function (t, e) {
                  var o = e.pos - s.instance.currPos
                  n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      o * s.canvasWidth +
                      o * e.opts.gutter,
                  })
                }),
                s.$container.addClass('fancybox-is-sliding'))
            }))
        else if (Math.abs(s.distance) > 10) {
          if (
            ((s.canTap = !1),
            r.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = 'y')
              : r.isDragging ||
                !1 === s.opts.vertical ||
                ('auto' === s.opts.vertical && n(t).width() > 800)
              ? (s.isSwiping = 'x')
              : ((a = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = a > 45 && a < 135 ? 'y' : 'x')),
            'y' === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
          )
            return void (s.isScrolling = !0)
          ;(r.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            n.each(r.slides, function (t, e) {
              var o, i
              n.fancybox.stop(e.$slide),
                (o = n.fancybox.getTranslate(e.$slide)),
                (i = n.fancybox.getTranslate(r.$refs.stage)),
                e.$slide
                  .css({
                    transform: '',
                    opacity: '',
                    'transition-duration': '',
                  })
                  .removeClass('fancybox-animated')
                  .removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(' ')
                  }),
                e.pos === r.current.pos &&
                  ((s.sliderStartPos.top = o.top - i.top),
                  (s.sliderStartPos.left = o.left - i.left)),
                n.fancybox.setTranslate(e.$slide, {
                  top: o.top - i.top,
                  left: o.left - i.left,
                })
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
      }),
      (d.prototype.onPan = function () {
        var t = this
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
          return void (t.startPoints = t.newPoints)
        ;(t.canTap = !1),
          (t.contentLastPos = t.limitMovement()),
          t.requestId && i(t.requestId),
          (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
          }))
      }),
      (d.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          a,
          s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          d = s.distanceY,
          u = s.contentStartPos,
          f = u.left,
          p = u.top,
          h = u.width,
          g = u.height
        return (
          (i = h > r ? f + l : f),
          (a = p + d),
          (t = Math.max(0, 0.5 * r - 0.5 * h)),
          (e = Math.max(0, 0.5 * c - 0.5 * g)),
          (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
          (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
          l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
          l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
          d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
          d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
          { top: a, left: i }
        )
      }),
      (d.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        )
      }),
      (d.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos,
          r = a.width,
          c = a.height,
          l = a.left,
          d = a.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          f = u / e.startDistanceBetweenFingers,
          p = Math.floor(r * f),
          h = Math.floor(c * f),
          g = (r - p) * e.percentageOfImageAtPinchPointX,
          b = (c - h) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          x = v - e.centerPointStartY,
          w = l + (g + y),
          $ = d + (b + x),
          S = { top: $, left: w, scaleX: f, scaleY: f }
        ;(e.canTap = !1),
          (e.newWidth = p),
          (e.newHeight = h),
          (e.contentLastPos = S),
          e.requestId && i(e.requestId),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
          }))
      }),
      (d.prototype.ontouchend = function (t) {
        var o = this,
          s = o.isSwiping,
          r = o.isPanning,
          c = o.isZooming,
          l = o.isScrolling
        if (
          ((o.endPoints = a(t)),
          (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
          o.$container.removeClass('fancybox-is-grabbing'),
          n(e).off('.fb.touch'),
          e.removeEventListener('scroll', o.onscroll, !0),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap)
        )
          return o.onTap(t)
        ;(o.speed = 100),
          (o.velocityX = (o.distanceX / o.dMs) * 0.5),
          (o.velocityY = (o.distanceY / o.dMs) * 0.5),
          r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)
      }),
      (d.prototype.endSwiping = function (t, e) {
        var o = this,
          i = !1,
          a = o.instance.group.length,
          s = Math.abs(o.distanceX),
          r = 'x' == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50)
        ;(o.sliderLastPos = null),
          'y' == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0,
                },
                200
              ),
              (i = o.instance.close(!0, 250)))
            : r && o.distanceX > 0
            ? (i = o.instance.previous(300))
            : r && o.distanceX < 0 && (i = o.instance.next(300)),
          !1 !== i || ('x' != t && 'y' != t) || o.instance.centerSlide(200),
          o.$container.removeClass('fancybox-is-sliding')
      }),
      (d.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this
        i.contentLastPos &&
          (!1 === i.opts.momentum || i.dMs > 350
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + 500 * i.velocityX),
              (e = i.contentLastPos.top + 500 * i.velocityY)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 366))
      }),
      (d.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? a.instance.scaleToActual(
                a.centerPointStartX,
                a.centerPointStartY,
                150
              )
            : ((o = a.limitPosition(t, e, r, c)),
              n.fancybox.animate(a.$content, o, 150)))
      }),
      (d.prototype.onTap = function (e) {
        var o,
          i = this,
          s = n(e.target),
          r = i.instance,
          c = r.current,
          l = (e && a(e)) || i.startPoints,
          d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
          u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
          f = function (t) {
            var o = c.opts[t]
            if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
              switch (o) {
                case 'close':
                  r.close(i.startEvent)
                  break
                case 'toggleControls':
                  r.toggleControls()
                  break
                case 'next':
                  r.next()
                  break
                case 'nextOrClose':
                  r.group.length > 1 ? r.next() : r.close(i.startEvent)
                  break
                case 'zoom':
                  'image' == c.type &&
                    (c.isLoaded || c.$ghost) &&
                    (r.canPan()
                      ? r.scaleToFit()
                      : r.isScaledDown()
                      ? r.scaleToActual(d, u)
                      : r.group.length < 2 && r.close(i.startEvent))
              }
          }
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (s.is('img') || !(d > s[0].clientWidth + s.offset().left))
        ) {
          if (
            s.is(
              '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container'
            )
          )
            o = 'Outside'
          else if (s.is('.fancybox-slide')) o = 'Slide'
          else {
            if (
              !r.current.$content ||
              !r.current.$content.find(s).addBack().filter(s).length
            )
              return
            o = 'Content'
          }
          if (i.tapped) {
            if (
              (clearTimeout(i.tapped),
              (i.tapped = null),
              Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
            )
              return this
            f('dblclick' + o)
          } else
            (i.tapX = d),
              (i.tapY = u),
              c.opts['dblclick' + o] &&
              c.opts['dblclick' + o] !== c.opts['click' + o]
                ? (i.tapped = setTimeout(function () {
                    ;(i.tapped = null), r.isAnimating || f('click' + o)
                  }, 500))
                : f('click' + o)
          return this
        }
      }),
      n(e)
        .on('onActivate.fb', function (t, e) {
          e && !e.Guestures && (e.Guestures = new d(e))
        })
        .on('beforeClose.fb', function (t, e) {
          e && e.Guestures && e.Guestures.destroy()
        })
  })(window, document, jQuery),
  (function (t, e) {
    'use strict'
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    })
    var n = function (t) {
      ;(this.instance = t), this.init()
    }
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow
        ;(t.$button = n.$refs.toolbar
          .find('[data-fancybox-play]')
          .on('click', function () {
            t.toggle()
          })),
          n.group.length < 2 || !o
            ? t.$button.hide()
            : o.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner))
      },
      set: function (t) {
        var n = this,
          o = n.instance,
          i = o.current
        i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
          ? n.isActive &&
            'video' !== i.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                { scaleX: 1 },
                i.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function () {
              o.current.opts.loop || o.current.index != o.group.length - 1
                ? o.next()
                : o.jumpTo(0)
            }, i.opts.slideShow.speed)))
          : (n.stop(), (o.idleSecondsCounter = 0), o.showControls())
      },
      clear: function () {
        var t = this
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr('style').hide()
      },
      start: function () {
        var t = this,
          e = t.instance.current
        e &&
          (t.$button
            .attr(
              'title',
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass('fancybox-button--play')
            .addClass('fancybox-button--pause'),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger('onSlideShowChange', !0))
      },
      stop: function () {
        var t = this,
          e = t.instance.current
        t.clear(),
          t.$button
            .attr(
              'title',
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass('fancybox-button--pause')
            .addClass('fancybox-button--play'),
          (t.isActive = !1),
          t.instance.trigger('onSlideShowChange', !1),
          t.$progress && t.$progress.removeAttr('style').hide()
      },
      toggle: function () {
        var t = this
        t.isActive ? t.stop() : t.start()
      },
    }),
      e(t).on({
        'onInit.fb': function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        'beforeShow.fb': function (t, e, n, o) {
          var i = e && e.SlideShow
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear()
        },
        'afterShow.fb': function (t, e, n) {
          var o = e && e.SlideShow
          o && o.isActive && o.set()
        },
        'afterKeydown.fb': function (n, o, i, a, s) {
          var r = o && o.SlideShow
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is('button,a,input') ||
            (a.preventDefault(), r.toggle())
        },
        'beforeClose.fb onDeactivate.fb': function (t, e) {
          var n = e && e.SlideShow
          n && n.stop()
        },
      }),
      e(t).on('visibilitychange', function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow
        o && o.isActive && (t.hidden ? o.clear() : o.set())
      })
  })(document, jQuery),
  (function (t, e) {
    'use strict'
    var n = (function () {
      for (
        var e = [
            [
              'requestFullscreen',
              'exitFullscreen',
              'fullscreenElement',
              'fullscreenEnabled',
              'fullscreenchange',
              'fullscreenerror',
            ],
            [
              'webkitRequestFullscreen',
              'webkitExitFullscreen',
              'webkitFullscreenElement',
              'webkitFullscreenEnabled',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'webkitRequestFullScreen',
              'webkitCancelFullScreen',
              'webkitCurrentFullScreenElement',
              'webkitCancelFullScreen',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'mozRequestFullScreen',
              'mozCancelFullScreen',
              'mozFullScreenElement',
              'mozFullScreenEnabled',
              'mozfullscreenchange',
              'mozfullscreenerror',
            ],
            [
              'msRequestFullscreen',
              'msExitFullscreen',
              'msFullscreenElement',
              'msFullscreenEnabled',
              'MSFullscreenChange',
              'MSFullscreenError',
            ],
          ],
          n = {},
          o = 0;
        o < e.length;
        o++
      ) {
        var i = e[o]
        if (i && i[1] in t) {
          for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a]
          return n
        }
      }
      return !1
    })()
    if (n) {
      var o = {
        request: function (e) {
          ;(e = e || t.documentElement),
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        },
        exit: function () {
          t[n.exitFullscreen]()
        },
        toggle: function (e) {
          ;(e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e)
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement])
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled])
        },
      }
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = o.isFullscreen(),
            n = e.fancybox.getInstance()
          n &&
            (n.current &&
              'image' === n.current.type &&
              n.isAnimating &&
              ((n.isAnimating = !1),
              n.update(!0, !0, 0),
              n.isComplete || n.complete()),
            n.trigger('onFullscreenChange', t),
            n.$refs.container.toggleClass('fancybox-is-fullscreen', t),
            n.$refs.toolbar
              .find('[data-fancybox-fullscreen]')
              .toggleClass('fancybox-button--fsenter', !t)
              .toggleClass('fancybox-button--fsexit', t))
        })
    }
    e(t).on({
      'onInit.fb': function (t, e) {
        var i
        if (!n)
          return void e.$refs.toolbar
            .find('[data-fancybox-fullscreen]')
            .remove()
        e && e.group[e.currIndex].opts.fullScreen
          ? ((i = e.$refs.container),
            i.on(
              'click.fb-fullscreen',
              '[data-fancybox-fullscreen]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
              }
            ),
            e.opts.fullScreen &&
              !0 === e.opts.fullScreen.autoStart &&
              o.request(),
            (e.FullScreen = o))
          : e && e.$refs.toolbar.find('[data-fancybox-fullscreen]').hide()
      },
      'afterKeydown.fb': function (t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle())
      },
      'beforeClose.fb': function (t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass('fancybox-is-fullscreen') &&
          o.exit()
      },
    })
  })(document, jQuery),
  (function (t, e) {
    'use strict'
    var n = 'fancybox-thumbs'
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y',
        },
      },
      e.fancybox.defaults
    )
    var o = function (t) {
      this.init(t)
    }
    e.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          o = 0
        ;(e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find('[data-fancybox-thumbs]'))
        for (
          var i = 0, a = n.length;
          i < a && (n[i].thumb && o++, !(o > 1));
          i++
        );
        o > 1 && e.opts
          ? (e.$button.removeAttr('style').on('click', function () {
              e.toggle()
            }),
            (e.isActive = !0))
          : e.$button.hide()
      },
      create: function () {
        var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = []
        o.$grid ||
          ((o.$grid = e(
            '<div class="' + n + ' ' + n + '-' + o.opts.axis + '"></div>'
          ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
          o.$grid.on('click', 'a', function () {
            i.jumpTo(e(this).attr('data-index'))
          })),
          o.$list ||
            (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
          e.each(i.group, function (e, n) {
            ;(t = n.thumb),
              t || 'image' !== n.type || (t = n.src),
              s.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  '></a>'
              )
          }),
          (o.$list[0].innerHTML = s.join('')),
          'x' === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css('padding-right'), 10) +
                i.group.length * o.$list.children().eq(0).outerWidth(!0)
            )
      },
      focus: function (t) {
        var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid
        o.instance.current &&
          ((e = i
            .children()
            .removeClass('fancybox-thumbs-active')
            .filter('[data-index="' + o.instance.current.index + '"]')
            .addClass('fancybox-thumbs-active')),
          (n = e.position()),
          'y' === o.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight())
            ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
            : 'x' === o.opts.axis &&
              (n.left < a.scrollLeft() ||
                n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
              i.parent().stop().animate({ scrollLeft: n.left }, t))
      },
      update: function () {
        var t = this
        t.instance.$refs.container.toggleClass(
          'fancybox-show-thumbs',
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger('onThumbsShow'),
              t.focus(0))
            : t.$grid && t.instance.trigger('onThumbsHide'),
          t.instance.update()
      },
      hide: function () {
        ;(this.isVisible = !1), this.update()
      },
      show: function () {
        ;(this.isVisible = !0), this.update()
      },
      toggle: function () {
        ;(this.isVisible = !this.isVisible), this.update()
      },
    }),
      e(t).on({
        'onInit.fb': function (t, e) {
          var n
          e &&
            !e.Thumbs &&
            ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show())
        },
        'beforeShow.fb': function (t, e, n, o) {
          var i = e && e.Thumbs
          i && i.isVisible && i.focus(o ? 0 : 250)
        },
        'afterKeydown.fb': function (t, e, n, o, i) {
          var a = e && e.Thumbs
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
        },
        'beforeClose.fb': function (t, e) {
          var n = e && e.Thumbs
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        },
      })
  })(document, jQuery),
  (function (t, e) {
    'use strict'
    function n(t) {
      var e = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;',
      }
      return String(t).replace(/[&<>"'`=\/]/g, function (t) {
        return e[t]
      })
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              'inline' !== e.type &&
              'html' !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          )
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      e(t).on('click', '[data-fancybox-share]', function () {
        var t,
          o,
          i = e.fancybox.getInstance(),
          a = i.current || null
        a &&
          ('function' === e.type(a.opts.share.url) &&
            (t = a.opts.share.url.apply(a, [i, a])),
          (o = a.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              'image' === a.type ? encodeURIComponent(a.src) : ''
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              i.$caption ? encodeURIComponent(i.$caption.text()) : ''
            )),
          e.fancybox.open({
            src: i.translate(i, o),
            type: 'html',
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                i.$refs.container.one('beforeClose.fb', function () {
                  t.close(null, 0)
                }),
                  e.$content.find('.fancybox-share__button').click(function () {
                    return (
                      window.open(this.href, 'Share', 'width=550, height=450'),
                      !1
                    )
                  })
              },
              mobile: { autoFocus: !1 },
            },
          }))
      })
  })(document, jQuery),
  (function (t, e, n) {
    'use strict'
    function o() {
      var e = t.location.hash.substr(1),
        n = e.split('-'),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join('-')
      return { hash: e, index: o < 1 ? 1 : o, gallery: i }
    }
    function i(t) {
      '' !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger('click.fb-start')
    }
    function a(t) {
      var e, n
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        '' !==
          (n =
            e.hash ||
            (e.$orig
              ? e.$orig.data('fancybox') || e.$orig.data('fancybox-trigger')
              : '')) && n)
      )
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        return (t + '').replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? '\0' === t
                ? '�'
                : t.slice(0, -1) +
                  '\\' +
                  t.charCodeAt(t.length - 1).toString(16) +
                  ' '
              : '\\' + t
          }
        )
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(e).on({
            'onInit.fb': function (t, e) {
              var n, i
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = o()),
                (i = a(e)) &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1))
            },
            'beforeShow.fb': function (n, o, i, s) {
              var r
              i &&
                !1 !== i.opts.hash &&
                (r = a(o)) &&
                ((o.currentHash =
                  r + (o.group.length > 1 ? '-' + (i.index + 1) : '')),
                t.location.hash !== '#' + o.currentHash &&
                  (s && !o.origHash && (o.origHash = t.location.hash),
                  o.hashTimer && clearTimeout(o.hashTimer),
                  (o.hashTimer = setTimeout(function () {
                    'replaceState' in t.history
                      ? (t.history[s ? 'pushState' : 'replaceState'](
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            '#' +
                            o.currentHash
                        ),
                        s && (o.hasCreatedHistory = !0))
                      : (t.location.hash = o.currentHash),
                      (o.hashTimer = null)
                  }, 300))))
            },
            'beforeClose.fb': function (n, o, i) {
              i &&
                !1 !== i.opts.hash &&
                (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory
                  ? t.history.back()
                  : o.currentHash &&
                    ('replaceState' in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (o.origHash || '')
                        )
                      : (t.location.hash = o.origHash)),
                (o.currentHash = null))
            },
          }),
          n(t).on('hashchange.fb', function () {
            var t = o(),
              e = null
            n.each(n('.fancybox-container').get().reverse(), function (t, o) {
              var i = n(o).data('FancyBox')
              if (i && i.currentHash) return (e = i), !1
            }),
              e
                ? e.currentHash === t.gallery + '-' + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : '' !== t.gallery && i(t)
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || i(o())
          }, 50))
      })
  })(window, document, jQuery),
  (function (t, e) {
    'use strict'
    var n = new Date().getTime()
    e(t).on({
      'onInit.fb': function (t, e, o) {
        e.$refs.stage.on(
          'mousewheel DOMMouseScroll wheel MozMousePixelScroll',
          function (t) {
            var o = e.current,
              i = new Date().getTime()
            e.group.length < 2 ||
              !1 === o.opts.wheel ||
              ('auto' === o.opts.wheel && 'image' !== o.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              o.$slide.hasClass('fancybox-animated') ||
                ((t = t.originalEvent || t),
                i - n < 250 ||
                  ((n = i),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? 'next'
                      : 'previous'
                  ]())))
          }
        )
      },
    })
  })(document, jQuery)

/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi
*/
;(function ($) {
  'use strict'
  $.ajaxChimp = {
    responses: {
      'We have sent you a confirmation email': 0,
      'Please enter a value': 1,
      'An email address must contain a single @': 2,
      'The domain portion of the email address is invalid (the portion after the @: )': 3,
      'The username portion of the email address is invalid (the portion before the @: )': 4,
      'This email address looks fake or invalid. Please enter a real email address': 5,
    },
    translations: { en: null },
    init: function (selector, options) {
      $(selector).ajaxChimp(options)
    },
  }
  $.fn.ajaxChimp = function (options) {
    $(this).each(function (i, elem) {
      var form = $(elem)
      var email = form.find('input[type=email]')
      var label = form.find('label[for=' + email.attr('id') + ']')
      var settings = $.extend(
        { url: form.attr('action'), language: 'en' },
        options
      )
      var url = settings.url.replace('/post?', '/post-json?').concat('&c=?')
      form.attr('novalidate', 'true')
      email.attr('name', 'EMAIL')
      form.submit(function () {
        var msg
        function successCallback(resp) {
          if (resp.result === 'success') {
            msg = 'We have sent you a confirmation email'
            label.removeClass('error').addClass('valid')
            email.removeClass('error').addClass('valid')
          } else {
            email.removeClass('valid').addClass('error')
            label.removeClass('valid').addClass('error')
            var index = -1
            try {
              var parts = resp.msg.split(' - ', 2)
              if (parts[1] === undefined) {
                msg = resp.msg
              } else {
                var i = parseInt(parts[0], 10)
                if (i.toString() === parts[0]) {
                  index = parts[0]
                  msg = parts[1]
                } else {
                  index = -1
                  msg = resp.msg
                }
              }
            } catch (e) {
              index = -1
              msg = resp.msg
            }
          }
          if (
            settings.language !== 'en' &&
            $.ajaxChimp.responses[msg] !== undefined &&
            $.ajaxChimp.translations &&
            $.ajaxChimp.translations[settings.language] &&
            $.ajaxChimp.translations[settings.language][
              $.ajaxChimp.responses[msg]
            ]
          ) {
            msg =
              $.ajaxChimp.translations[settings.language][
                $.ajaxChimp.responses[msg]
              ]
          }
          label.html(msg)
          label.show(2e3)
          if (settings.callback) {
            settings.callback(resp)
          }
        }
        var data = {}
        var dataArray = form.serializeArray()
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value
        })
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: 'jsonp',
          error: function (resp, text) {
            console.log('mailchimp ajax submit error: ' + text)
          },
        })
        var submitMsg = 'Submitting...'
        if (
          settings.language !== 'en' &&
          $.ajaxChimp.translations &&
          $.ajaxChimp.translations[settings.language] &&
          $.ajaxChimp.translations[settings.language]['submit']
        ) {
          submitMsg = $.ajaxChimp.translations[settings.language]['submit']
        }
        label.html(submitMsg).show(2e3)
        return false
      })
    })
    return this
  }
})(jQuery)

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by HernÃ¡n Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e('<div></div>')
          .addClass('nice-select')
          .addClass(t.attr('class') || '')
          .addClass(t.attr('disabled') ? 'disabled' : '')
          .attr('tabindex', t.attr('disabled') ? null : '0')
          .html('<span class="current"></span><ul class="list"></ul>')
      )
      var s = t.next(),
        n = t.find('option'),
        i = t.find('option:selected')
      s.find('.current').html(i.data('display') || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data('display')
          s.find('ul').append(
            e('<li></li>')
              .attr('data-value', n.val())
              .attr('data-display', i || null)
              .addClass(
                'option' +
                  (n.is(':selected') ? ' selected' : '') +
                  (n.is(':disabled') ? ' disabled' : '')
              )
              .html(n.text())
          )
        })
    }
    if ('string' == typeof t)
      return (
        'update' == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next('.nice-select'),
                i = n.hasClass('open')
              n.length && (n.remove(), s(t), i && t.next().trigger('click'))
            })
          : 'destroy' == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next('.nice-select')
              s.length && (s.remove(), t.css('display', ''))
            }),
            0 == e('.nice-select').length && e(document).off('.nice_select'))
          : console.log('Method "' + t + '" does not exist.'),
        this
      )
    this.hide(),
      this.each(function () {
        var t = e(this)
        t.next().hasClass('nice-select') || s(t)
      }),
      e(document).off('.nice_select'),
      e(document).on('click.nice_select', '.nice-select', function (t) {
        var s = e(this)
        e('.nice-select').not(s).removeClass('open'),
          s.toggleClass('open'),
          s.hasClass('open')
            ? (s.find('.option'),
              s.find('.focus').removeClass('focus'),
              s.find('.selected').addClass('focus'))
            : s.focus()
      }),
      e(document).on('click.nice_select', function (t) {
        0 === e(t.target).closest('.nice-select').length &&
          e('.nice-select').removeClass('open').find('.option')
      }),
      e(document).on(
        'click.nice_select',
        '.nice-select .option:not(.disabled)',
        function (t) {
          var s = e(this),
            n = s.closest('.nice-select')
          n.find('.selected').removeClass('selected'), s.addClass('selected')
          var i = s.data('display') || s.text()
          n.find('.current').text(i),
            n.prev('select').val(s.data('value')).trigger('change')
        }
      ),
      e(document).on('keydown.nice_select', '.nice-select', function (t) {
        var s = e(this),
          n = e(s.find('.focus') || s.find('.list .option.selected'))
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass('open') ? n.trigger('click') : s.trigger('click'), !1
          )
        if (40 == t.keyCode) {
          if (s.hasClass('open')) {
            var i = n.nextAll('.option:not(.disabled)').first()
            i.length > 0 &&
              (s.find('.focus').removeClass('focus'), i.addClass('focus'))
          } else s.trigger('click')
          return !1
        }
        if (38 == t.keyCode) {
          if (s.hasClass('open')) {
            var l = n.prevAll('.option:not(.disabled)').first()
            l.length > 0 &&
              (s.find('.focus').removeClass('focus'), l.addClass('focus'))
          } else s.trigger('click')
          return !1
        }
        if (27 == t.keyCode) s.hasClass('open') && s.trigger('click')
        else if (9 == t.keyCode && s.hasClass('open')) return !1
      })
    var n = document.createElement('a').style
    return (
      (n.cssText = 'pointer-events:auto'),
      'auto' !== n.pointerEvents && e('html').addClass('no-csspointerevents'),
      this
    )
  }
})(jQuery)

// Generated by CoffeeScript 1.9.3
;(function () {
  var e
  ;(e = (function () {
    function e(e, t) {
      var n, r
      this.options = {
        target: 'instafeed',
        get: 'popular',
        resolution: 'thumbnail',
        sortBy: 'none',
        links: !0,
        mock: !1,
        useHttp: !1,
      }
      if (typeof e == 'object') for (n in e) (r = e[n]), (this.options[n] = r)
      ;(this.context = t != null ? t : this), (this.unique = this._genKey())
    }
    return (
      (e.prototype.hasNext = function () {
        return (
          typeof this.context.nextUrl == 'string' &&
          this.context.nextUrl.length > 0
        )
      }),
      (e.prototype.next = function () {
        return this.hasNext() ? this.run(this.context.nextUrl) : !1
      }),
      (e.prototype.run = function (t) {
        var n, r, i
        if (
          typeof this.options.clientId != 'string' &&
          typeof this.options.accessToken != 'string'
        )
          throw new Error('Missing clientId or accessToken.')
        if (
          typeof this.options.accessToken != 'string' &&
          typeof this.options.clientId != 'string'
        )
          throw new Error('Missing clientId or accessToken.')
        return (
          this.options.before != null &&
            typeof this.options.before == 'function' &&
            this.options.before.call(this),
          typeof document != 'undefined' &&
            document !== null &&
            ((i = document.createElement('script')),
            (i.id = 'instafeed-fetcher'),
            (i.src = t || this._buildUrl()),
            (n = document.getElementsByTagName('head')),
            n[0].appendChild(i),
            (r = 'instafeedCache' + this.unique),
            (window[r] = new e(this.options, this)),
            (window[r].unique = this.unique)),
          !0
        )
      }),
      (e.prototype.parse = function (e) {
        var t,
          n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g,
          y,
          b,
          w,
          E,
          S,
          x,
          T,
          N,
          C,
          k,
          L,
          A,
          O,
          M,
          _,
          D
        if (typeof e != 'object') {
          if (
            this.options.error != null &&
            typeof this.options.error == 'function'
          )
            return this.options.error.call(this, 'Invalid JSON data'), !1
          throw new Error('Invalid JSON response')
        }
        if (e.meta.code !== 200) {
          if (
            this.options.error != null &&
            typeof this.options.error == 'function'
          )
            return this.options.error.call(this, e.meta.error_message), !1
          throw new Error('Error from Instagram: ' + e.meta.error_message)
        }
        if (e.data.length === 0) {
          if (
            this.options.error != null &&
            typeof this.options.error == 'function'
          )
            return (
              this.options.error.call(
                this,
                'No images were returned from Instagram'
              ),
              !1
            )
          throw new Error('No images were returned from Instagram')
        }
        this.options.success != null &&
          typeof this.options.success == 'function' &&
          this.options.success.call(this, e),
          (this.context.nextUrl = ''),
          e.pagination != null && (this.context.nextUrl = e.pagination.next_url)
        if (this.options.sortBy !== 'none') {
          this.options.sortBy === 'random'
            ? (M = ['', 'random'])
            : (M = this.options.sortBy.split('-')),
            (O = M[0] === 'least' ? !0 : !1)
          switch (M[1]) {
            case 'random':
              e.data.sort(function () {
                return 0.5 - Math.random()
              })
              break
            case 'recent':
              e.data = this._sortBy(e.data, 'created_time', O)
              break
            case 'liked':
              e.data = this._sortBy(e.data, 'likes.count', O)
              break
            case 'commented':
              e.data = this._sortBy(e.data, 'comments.count', O)
              break
            default:
              throw new Error(
                "Invalid option for sortBy: '" + this.options.sortBy + "'."
              )
          }
        }
        if (
          typeof document != 'undefined' &&
          document !== null &&
          this.options.mock === !1
        ) {
          ;(m = e.data),
            (A = parseInt(this.options.limit, 10)),
            this.options.limit != null && m.length > A && (m = m.slice(0, A)),
            (u = document.createDocumentFragment()),
            this.options.filter != null &&
              typeof this.options.filter == 'function' &&
              (m = this._filter(m, this.options.filter))
          if (
            this.options.template != null &&
            typeof this.options.template == 'string'
          ) {
            ;(f = ''), (d = ''), (w = ''), (D = document.createElement('div'))
            for (c = 0, N = m.length; c < N; c++) {
              ;(h = m[c]), (p = h.images[this.options.resolution])
              if (typeof p != 'object')
                throw (
                  ((o =
                    'No image found for resolution: ' +
                    this.options.resolution +
                    '.'),
                  new Error(o))
                )
              ;(E = p.width),
                (y = p.height),
                (b = 'square'),
                E > y && (b = 'landscape'),
                E < y && (b = 'portrait'),
                (v = p.url),
                (l = window.location.protocol.indexOf('http') >= 0),
                l &&
                  !this.options.useHttp &&
                  (v = v.replace(/https?:\/\//, '//')),
                (d = this._makeTemplate(this.options.template, {
                  model: h,
                  id: h.id,
                  link: h.link,
                  type: h.type,
                  image: v,
                  width: E,
                  height: y,
                  orientation: b,
                  caption: this._getObjectProperty(h, 'caption.text'),
                  likes: h.likes.count,
                  comments: h.comments.count,
                  location: this._getObjectProperty(h, 'location.name'),
                })),
                (f += d)
            }
            ;(D.innerHTML = f), (i = []), (r = 0), (n = D.childNodes.length)
            while (r < n) i.push(D.childNodes[r]), (r += 1)
            for (x = 0, C = i.length; x < C; x++) (L = i[x]), u.appendChild(L)
          } else
            for (T = 0, k = m.length; T < k; T++) {
              ;(h = m[T]),
                (g = document.createElement('img')),
                (p = h.images[this.options.resolution])
              if (typeof p != 'object')
                throw (
                  ((o =
                    'No image found for resolution: ' +
                    this.options.resolution +
                    '.'),
                  new Error(o))
                )
              ;(v = p.url),
                (l = window.location.protocol.indexOf('http') >= 0),
                l &&
                  !this.options.useHttp &&
                  (v = v.replace(/https?:\/\//, '//')),
                (g.src = v),
                this.options.links === !0
                  ? ((t = document.createElement('a')),
                    (t.href = h.link),
                    t.appendChild(g),
                    u.appendChild(t))
                  : u.appendChild(g)
            }
          ;(_ = this.options.target),
            typeof _ == 'string' && (_ = document.getElementById(_))
          if (_ == null)
            throw (
              ((o =
                'No element with id="' + this.options.target + '" on page.'),
              new Error(o))
            )
          _.appendChild(u),
            (a = document.getElementsByTagName('head')[0]),
            a.removeChild(document.getElementById('instafeed-fetcher')),
            (S = 'instafeedCache' + this.unique),
            (window[S] = void 0)
          try {
            delete window[S]
          } catch (P) {
            s = P
          }
        }
        return (
          this.options.after != null &&
            typeof this.options.after == 'function' &&
            this.options.after.call(this),
          !0
        )
      }),
      (e.prototype._buildUrl = function () {
        var e, t, n
        e = 'https://api.instagram.com/v1'
        switch (this.options.get) {
          case 'popular':
            t = 'media/popular'
            break
          case 'tagged':
            if (!this.options.tagName)
              throw new Error(
                "No tag name specified. Use the 'tagName' option."
              )
            t = 'tags/' + this.options.tagName + '/media/recent'
            break
          case 'location':
            if (!this.options.locationId)
              throw new Error(
                "No location specified. Use the 'locationId' option."
              )
            t = 'locations/' + this.options.locationId + '/media/recent'
            break
          case 'user':
            if (!this.options.userId)
              throw new Error("No user specified. Use the 'userId' option.")
            t = 'users/' + this.options.userId + '/media/recent'
            break
          default:
            throw new Error(
              "Invalid option for get: '" + this.options.get + "'."
            )
        }
        return (
          (n = e + '/' + t),
          this.options.accessToken != null
            ? (n += '?access_token=' + this.options.accessToken)
            : (n += '?client_id=' + this.options.clientId),
          this.options.limit != null && (n += '&count=' + this.options.limit),
          (n += '&callback=instafeedCache' + this.unique + '.parse'),
          n
        )
      }),
      (e.prototype._genKey = function () {
        var e
        return (
          (e = function () {
            return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
          }),
          '' + e() + e() + e() + e()
        )
      }),
      (e.prototype._makeTemplate = function (e, t) {
        var n, r, i, s, o
        ;(r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/), (n = e)
        while (r.test(n))
          (s = n.match(r)[1]),
            (o = (i = this._getObjectProperty(t, s)) != null ? i : ''),
            (n = n.replace(r, function () {
              return '' + o
            }))
        return n
      }),
      (e.prototype._getObjectProperty = function (e, t) {
        var n, r
        ;(t = t.replace(/\[(\w+)\]/g, '.$1')), (r = t.split('.'))
        while (r.length) {
          n = r.shift()
          if (!(e != null && n in e)) return null
          e = e[n]
        }
        return e
      }),
      (e.prototype._sortBy = function (e, t, n) {
        var r
        return (
          (r = function (e, r) {
            var i, s
            return (
              (i = this._getObjectProperty(e, t)),
              (s = this._getObjectProperty(r, t)),
              n ? (i > s ? 1 : -1) : i < s ? 1 : -1
            )
          }),
          e.sort(r.bind(this)),
          e
        )
      }),
      (e.prototype._filter = function (e, t) {
        var n, r, i, s, o
        ;(n = []),
          (r = function (e) {
            if (t(e)) return n.push(e)
          })
        for (i = 0, o = e.length; i < o; i++) (s = e[i]), r(s)
        return n
      }),
      e
    )
  })()),
    (function (e, t) {
      return typeof define == 'function' && define.amd
        ? define([], t)
        : typeof module == 'object' && module.exports
        ? (module.exports = t())
        : (e.Instafeed = t())
    })(this, function () {
      return e
    })
}.call(this))

/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  'function' == typeof define && define.amd
    ? define('ev-emitter/ev-emitter', t)
    : 'object' == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t())
})('undefined' != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || [])
        return -1 == n.indexOf(t) && n.push(t), this
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t)
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {})
        return (n[t] = !0), this
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e]
      if (i && i.length) {
        var n = i.indexOf(t)
        return -1 != n && i.splice(n, 1), this
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e]
      if (i && i.length) {
        var n = 0,
          o = i[n]
        t = t || []
        for (var r = this._onceEvents && this._onceEvents[e]; o; ) {
          var s = r && r[o]
          s && (this.off(e, o), delete r[o]),
            o.apply(this, t),
            (n += s ? 0 : 1),
            (o = i[n])
        }
        return this
      }
    }),
    (t.allOff = t.removeAllListeners =
      function () {
        delete this._events, delete this._onceEvents
      }),
    e
  )
}),
  (function (e, t) {
    'use strict'
    'function' == typeof define && define.amd
      ? define(['ev-emitter/ev-emitter'], function (i) {
          return t(e, i)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = t(e, require('ev-emitter')))
      : (e.imagesLoaded = t(e, e.EvEmitter))
  })('undefined' != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i]
      return e
    }
    function n(e) {
      var t = []
      if (Array.isArray(e)) t = e
      else if ('number' == typeof e.length)
        for (var i = 0; i < e.length; i++) t.push(e[i])
      else t.push(e)
      return t
    }
    function o(e, t, r) {
      return this instanceof o
        ? ('string' == typeof e && (e = document.querySelectorAll(e)),
          (this.elements = n(e)),
          (this.options = i({}, this.options)),
          'function' == typeof t ? (r = t) : i(this.options, t),
          r && this.on('always', r),
          this.getImages(),
          h && (this.jqDeferred = new h.Deferred()),
          void setTimeout(
            function () {
              this.check()
            }.bind(this)
          ))
        : new o(e, t, r)
    }
    function r(e) {
      this.img = e
    }
    function s(e, t) {
      ;(this.url = e), (this.element = t), (this.img = new Image())
    }
    var h = e.jQuery,
      a = e.console
    ;(o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        ;(this.images = []), this.elements.forEach(this.addElementImages, this)
      }),
      (o.prototype.addElementImages = function (e) {
        'IMG' == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e)
        var t = e.nodeType
        if (t && d[t]) {
          for (var i = e.querySelectorAll('img'), n = 0; n < i.length; n++) {
            var o = i[n]
            this.addImage(o)
          }
          if ('string' == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background)
            for (n = 0; n < r.length; n++) {
              var s = r[n]
              this.addElementBackgroundImages(s)
            }
          }
        }
      })
    var d = { 1: !0, 9: !0, 11: !0 }
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e)
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2]
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage))
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e)
        this.images.push(t)
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t)
        this.images.push(i)
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n)
          })
        }
        var t = this
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once('progress', e), t.check()
              })
            : void this.complete()
        )
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent('progress', [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log('progress: ' + i, e, t)
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? 'fail' : 'done'
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent('always', [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? 'reject' : 'resolve'
          this.jqDeferred[t](this)
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete()
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, 'naturalWidth')
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener('load', this),
            this.proxyImage.addEventListener('error', this),
            this.img.addEventListener('load', this),
            this.img.addEventListener('error', this),
            void (this.proxyImage.src = this.img.src))
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
      }),
      (r.prototype.confirm = function (e, t) {
        ;(this.isLoaded = e), this.emitEvent('progress', [this, this.img, t])
      }),
      (r.prototype.handleEvent = function (e) {
        var t = 'on' + e.type
        this[t] && this[t](e)
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, 'onload'), this.unbindEvents()
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, 'onerror'), this.unbindEvents()
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener('load', this),
          this.proxyImage.removeEventListener('error', this),
          this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this)
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener('load', this),
          this.img.addEventListener('error', this),
          (this.img.src = this.url)
        var e = this.getIsImageComplete()
        e &&
          (this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'),
          this.unbindEvents())
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this)
      }),
      (s.prototype.confirm = function (e, t) {
        ;(this.isLoaded = e),
          this.emitEvent('progress', [this, this.element, t])
      }),
      (o.makeJQueryPlugin = function (t) {
        ;(t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t)
              return i.jqDeferred.promise(h(this))
            }))
      }),
      o.makeJQueryPlugin(),
      o
    )
  })

/*!
 * Isotope PACKAGED v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!(function (t, e) {
  'function' == typeof define && define.amd
    ? define('jquery-bridget/jquery-bridget', ['jquery'], function (i) {
        return e(t, i)
      })
    : 'object' == typeof module && module.exports
    ? (module.exports = e(t, require('jquery')))
    : (t.jQueryBridget = e(t, t.jQuery))
})(window, function (t, e) {
  'use strict'
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = '$().' + i + '("' + e + '")'
      return (
        t.each(function (t, u) {
          var h = a.data(u, i)
          if (!h)
            return void r(
              i + ' not initialized. Cannot call methods, i.e. ' + s
            )
          var d = h[e]
          if (!d || '_' == e.charAt(0))
            return void r(s + ' is not a valid method')
          var l = d.apply(h, o)
          n = void 0 === n ? l : n
        }),
        void 0 !== n ? n : t
      )
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i)
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n))
      })
    }
    ;(a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
          }),
        (a.fn[i] = function (t) {
          if ('string' == typeof t) {
            var e = n.call(arguments, 1)
            return u(this, t, e)
          }
          return h(this, t), this
        }),
        o(a))
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i)
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      'undefined' == typeof s
        ? function () {}
        : function (t) {
            s.error(t)
          }
  return o(e || t.jQuery), i
}),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('ev-emitter/ev-emitter', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e())
  })('undefined' != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || [])
          return o.indexOf(e) == -1 && o.push(e), this
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e)
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {})
          return (o[e] = !0), this
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t]
        if (i && i.length) {
          var o = i.indexOf(e)
          return o != -1 && i.splice(o, 1), this
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t]
        if (i && i.length) {
          var o = 0,
            n = i[o]
          e = e || []
          for (var s = this._onceEvents && this._onceEvents[t]; n; ) {
            var r = s && s[n]
            r && (this.off(t, n), delete s[n]),
              n.apply(this, e),
              (o += r ? 0 : 1),
              (n = i[o])
          }
          return this
        }
      }),
      t
    )
  }),
  (function (t, e) {
    'use strict'
    'function' == typeof define && define.amd
      ? define('get-size/get-size', [], function () {
          return e()
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e())
  })(window, function () {
    'use strict'
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf('%') == -1 && !isNaN(e)
      return i && e
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e]
        t[i] = 0
      }
      return t
    }
    function o(t) {
      var e = getComputedStyle(t)
      return (
        e ||
          a(
            'Style returned ' +
              e +
              '. Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1'
          ),
        e
      )
    }
    function n() {
      if (!d) {
        d = !0
        var e = document.createElement('div')
        ;(e.style.width = '200px'),
          (e.style.padding = '1px 2px 3px 4px'),
          (e.style.borderStyle = 'solid'),
          (e.style.borderWidth = '1px 2px 3px 4px'),
          (e.style.boxSizing = 'border-box')
        var i = document.body || document.documentElement
        i.appendChild(e)
        var n = o(e)
        ;(s.isBoxSizeOuter = r = 200 == t(n.width)), i.removeChild(e)
      }
    }
    function s(e) {
      if (
        (n(),
        'string' == typeof e && (e = document.querySelector(e)),
        e && 'object' == typeof e && e.nodeType)
      ) {
        var s = o(e)
        if ('none' == s.display) return i()
        var a = {}
        ;(a.width = e.offsetWidth), (a.height = e.offsetHeight)
        for (
          var d = (a.isBorderBox = 'border-box' == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c)
          a[f] = isNaN(m) ? 0 : m
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          I = a.borderTopWidth + a.borderBottomWidth,
          z = d && r,
          x = t(s.width)
        x !== !1 && (a.width = x + (z ? 0 : p + _))
        var S = t(s.height)
        return (
          S !== !1 && (a.height = S + (z ? 0 : y + I)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + I)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        )
      }
    }
    var r,
      a =
        'undefined' == typeof console
          ? e
          : function (t) {
              console.error(t)
            },
      u = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth',
      ],
      h = u.length,
      d = !1
    return s
  }),
  (function (t, e) {
    'use strict'
    'function' == typeof define && define.amd
      ? define('desandro-matches-selector/matches-selector', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e())
  })(window, function () {
    'use strict'
    var t = (function () {
      var t = window.Element.prototype
      if (t.matches) return 'matches'
      if (t.matchesSelector) return 'matchesSelector'
      for (var e = ['webkit', 'moz', 'ms', 'o'], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + 'MatchesSelector'
        if (t[n]) return n
      }
    })()
    return function (e, i) {
      return e[t](i)
    }
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'fizzy-ui-utils/utils',
          ['desandro-matches-selector/matches-selector'],
          function (i) {
            return e(t, i)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('desandro-matches-selector')))
      : (t.fizzyUIUtils = e(t, t.matchesSelector))
  })(window, function (t, e) {
    var i = {}
    ;(i.extend = function (t, e) {
      for (var i in e) t[i] = e[i]
      return t
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e
      }),
      (i.makeArray = function (t) {
        var e = []
        if (Array.isArray(t)) e = t
        else if (t && 'object' == typeof t && 'number' == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i])
        else e.push(t)
        return e
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e)
        i != -1 && t.splice(i, 1)
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t
      }),
      (i.getQueryElement = function (t) {
        return 'string' == typeof t ? document.querySelector(t) : t
      }),
      (i.handleEvent = function (t) {
        var e = 'on' + t.type
        this[e] && this[e](t)
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t)
        var n = []
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t)
              e(t, o) && n.push(t)
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s])
            }
          }),
          n
        )
      }),
      (i.debounceMethod = function (t, e, i) {
        var o = t.prototype[e],
          n = e + 'Timeout'
        t.prototype[e] = function () {
          var t = this[n]
          t && clearTimeout(t)
          var e = arguments,
            s = this
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n]
          }, i || 100)
        }
      }),
      (i.docReady = function (t) {
        var e = document.readyState
        'complete' == e || 'interactive' == e
          ? setTimeout(t)
          : document.addEventListener('DOMContentLoaded', t)
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + '-' + i
          })
          .toLowerCase()
      })
    var o = t.console
    return (
      (i.htmlInit = function (e, n) {
        i.docReady(function () {
          var s = i.toDashed(n),
            r = 'data-' + s,
            a = document.querySelectorAll('[' + r + ']'),
            u = document.querySelectorAll('.js-' + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + '-options',
            l = t.jQuery
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d)
            try {
              i = s && JSON.parse(s)
            } catch (a) {
              return void (
                o &&
                o.error('Error parsing ' + r + ' on ' + t.className + ': ' + a)
              )
            }
            var u = new e(t, i)
            l && l.data(t, n, u)
          })
        })
      }),
      i
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'outlayer/item',
          ['ev-emitter/ev-emitter', 'get-size/get-size'],
          e
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('ev-emitter'), require('get-size')))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)))
  })(window, function (t, e) {
    'use strict'
    function i(t) {
      for (var e in t) return !1
      return (e = null), !0
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create())
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return '-' + t.toLowerCase()
      })
    }
    var s = document.documentElement.style,
      r = 'string' == typeof s.transition ? 'transition' : 'WebkitTransition',
      a = 'string' == typeof s.transform ? 'transform' : 'WebkitTransform',
      u = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend',
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + 'Duration',
        transitionProperty: r + 'Property',
        transitionDelay: r + 'Delay',
      },
      d = (o.prototype = Object.create(t.prototype))
    ;(d.constructor = o),
      (d._create = function () {
        ;(this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: 'absolute' })
      }),
      (d.handleEvent = function (t) {
        var e = 'on' + t.type
        this[e] && this[e](t)
      }),
      (d.getSize = function () {
        this.size = e(this.element)
      }),
      (d.css = function (t) {
        var e = this.element.style
        for (var i in t) {
          var o = h[i] || i
          e[o] = t[i]
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption('originLeft'),
          i = this.layout._getOption('originTop'),
          o = t[e ? 'left' : 'right'],
          n = t[i ? 'top' : 'bottom'],
          s = this.layout.size,
          r =
            o.indexOf('%') != -1
              ? (parseFloat(o) / 100) * s.width
              : parseInt(o, 10),
          a =
            n.indexOf('%') != -1
              ? (parseFloat(n) / 100) * s.height
              : parseInt(n, 10)
        ;(r = isNaN(r) ? 0 : r),
          (a = isNaN(a) ? 0 : a),
          (r -= e ? s.paddingLeft : s.paddingRight),
          (a -= i ? s.paddingTop : s.paddingBottom),
          (this.position.x = r),
          (this.position.y = a)
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption('originLeft'),
          o = this.layout._getOption('originTop'),
          n = i ? 'paddingLeft' : 'paddingRight',
          s = i ? 'left' : 'right',
          r = i ? 'right' : 'left',
          a = this.position.x + t[n]
        ;(e[s] = this.getXValue(a)), (e[r] = '')
        var u = o ? 'paddingTop' : 'paddingBottom',
          h = o ? 'top' : 'bottom',
          d = o ? 'bottom' : 'top',
          l = this.position.y + t[u]
        ;(e[h] = this.getYValue(l)),
          (e[d] = ''),
          this.css(e),
          this.emitEvent('layout', [this])
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption('horizontal')
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + '%'
          : t + 'px'
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption('horizontal')
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + '%'
          : t + 'px'
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition()
        var i = this.position.x,
          o = this.position.y,
          n = parseInt(t, 10),
          s = parseInt(e, 10),
          r = n === this.position.x && s === this.position.y
        if ((this.setPosition(t, e), r && !this.isTransitioning))
          return void this.layoutPosition()
        var a = t - i,
          u = e - o,
          h = {}
        ;(h.transform = this.getTranslate(a, u)),
          this.transition({
            to: h,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          })
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption('originLeft'),
          o = this.layout._getOption('originTop')
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          'translate3d(' + t + 'px, ' + e + 'px, 0)'
        )
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        ;(this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10))
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to)
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t)
        var e = this._transn
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0)
        if (t.from) {
          this.css(t.from)
          var o = this.element.offsetHeight
          o = null
        }
        this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0)
      })
    var l = 'opacity,' + n(a)
    ;(d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration
        ;(t = 'number' == typeof t ? t + 'ms' : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1)
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t)
      })
    var f = { '-webkit-transform': 'transform' }
    ;(d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ''), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o]
          n.call(this), delete e.onEnd[o]
        }
        this.emitEvent('transitionEnd', [this])
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1)
      }),
      (d._removeStyles = function (t) {
        var e = {}
        for (var i in t) e[i] = ''
        this.css(e)
      })
    var c = {
      transitionProperty: '',
      transitionDuration: '',
      transitionDelay: '',
    }
    return (
      (d.removeTransitionStyles = function () {
        this.css(c)
      }),
      (d.stagger = function (t) {
        ;(t = isNaN(t) ? 0 : t), (this.staggerDelay = t + 'ms')
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: '' }),
          this.emitEvent('remove', [this])
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once('transitionEnd', function () {
              this.removeElem()
            }),
            void this.hide())
          : void this.removeElem()
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: '' })
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty('visibleStyle')
        ;(e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          })
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent('reveal')
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t]
        if (e.opacity) return 'opacity'
        for (var i in e) return i
      }),
      (d.hide = function () {
        ;(this.isHidden = !0), this.css({ display: '' })
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty('hiddenStyle')
        ;(e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          })
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: 'none' }), this.emitEvent('hide'))
      }),
      (d.destroy = function () {
        this.css({
          position: '',
          left: '',
          right: '',
          top: '',
          bottom: '',
          transition: '',
          transform: '',
        })
      }),
      o
    )
  }),
  (function (t, e) {
    'use strict'
    'function' == typeof define && define.amd
      ? define(
          'outlayer/outlayer',
          [
            'ev-emitter/ev-emitter',
            'get-size/get-size',
            'fizzy-ui-utils/utils',
            './item',
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('ev-emitter'),
          require('get-size'),
          require('fizzy-ui-utils'),
          require('./item')
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ))
  })(window, function (t, e, i, o, n) {
    'use strict'
    function s(t, e) {
      var i = o.getQueryElement(t)
      if (!i)
        return void (
          u &&
          u.error(
            'Bad element for ' + this.constructor.namespace + ': ' + (i || t)
          )
        )
      ;(this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e)
      var n = ++l
      ;(this.element.outlayerGUID = n), (f[n] = this), this._create()
      var s = this._getOption('initLayout')
      s && this.layout()
    }
    function r(t) {
      function e() {
        t.apply(this, arguments)
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      )
    }
    function a(t) {
      if ('number' == typeof t) return t
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2]
      if (!i.length) return 0
      i = parseFloat(i)
      var n = m[o] || 1
      return i * n
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {}
    ;(s.namespace = 'outlayer'),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: 'relative' },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: '0.4s',
        hiddenStyle: { opacity: 0, transform: 'scale(0.001)' },
        visibleStyle: { opacity: 1, transform: 'scale(1)' },
      })
    var c = s.prototype
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t)
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t]
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t]
      }),
      (s.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer',
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle)
        var t = this._getOption('resize')
        t && this.bindResize()
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children)
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this)
          o.push(r)
        }
        return o
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector)
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element
        })
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps()
        var t = this._getOption('layoutInstant'),
          e = void 0 !== t ? t : !this._isLayoutInited
        this.layoutItems(this.items, e), (this._isLayoutInited = !0)
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize()
      }),
      (c.getSize = function () {
        this.size = i(this.element)
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t]
        n
          ? ('string' == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0)
      }),
      (c.layoutItems = function (t, e) {
        ;(t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout()
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored
        })
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems('layout', t), t && t.length)) {
          var i = []
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t)
            ;(o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o)
          }, this),
            this._processLayoutQueue(i)
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 }
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
          }, this)
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger)
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
      }),
      (c._postLayout = function () {
        this.resizeContainer()
      }),
      (c.resizeContainer = function () {
        var t = this._getOption('resizeContainer')
        if (t) {
          var e = this._getContainerSize()
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? 'width' : 'height'] = t + 'px')
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + 'Complete', null, [e])
        }
        function o() {
          r++, r == s && i()
        }
        var n = this,
          s = e.length
        if (!e || !s) return void i()
        var r = 0
        e.forEach(function (e) {
          e.once(t, o)
        })
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e)
            ;(n.type = t), this.$element.trigger(n, i)
          } else this.$element.trigger(t, i)
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t)
        e && (e.isIgnored = !0)
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t)
        e && delete e.isIgnored
      }),
      (c.stamp = function (t) {
        ;(t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this))
      }),
      (c.unstamp = function (t) {
        ;(t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
      }),
      (c._find = function (t) {
        if (t)
          return (
            'string' == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          )
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this))
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        }
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          }
        return s
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener('resize', this), (this.isResizeBound = !0)
      }),
      (c.unbindResize = function () {
        t.removeEventListener('resize', this), (this.isResizeBound = !1)
      }),
      (c.onresize = function () {
        this.resize()
      }),
      o.debounceMethod(s, 'onresize', 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t
        return e && t.innerWidth !== this.size.innerWidth
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t)
        return e.length && (this.items = this.items.concat(e)), e
      }),
      (c.appended = function (t) {
        var e = this.addItems(t)
        e.length && (this.layoutItems(e, !0), this.reveal(e))
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t)
        if (e.length) {
          var i = this.items.slice(0)
          ;(this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems('reveal', t), t && t.length)) {
          var e = this.updateStagger()
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal()
          })
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems('hide', t), t && t.length)) {
          var e = this.updateStagger()
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide()
          })
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t)
        this.reveal(e)
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t)
        this.hide(e)
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e]
          if (i.element == t) return i
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t)
        var e = []
        return (
          t.forEach(function (t) {
            var i = this.getItem(t)
            i && e.push(i)
          }, this),
          e
        )
      }),
      (c.remove = function (t) {
        var e = this.getItems(t)
        this._emitCompleteOnItems('remove', e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t)
            }, this)
      }),
      (c.destroy = function () {
        var t = this.element.style
        ;(t.height = ''),
          (t.position = ''),
          (t.width = ''),
          this.items.forEach(function (t) {
            t.destroy()
          }),
          this.unbindResize()
        var e = this.element.outlayerGUID
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace)
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t)
        var e = t && t.outlayerGUID
        return e && f[e]
      }),
      (s.create = function (t, e) {
        var i = r(s)
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        )
      })
    var m = { ms: 1, s: 1e3 }
    return (s.Item = n), s
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('isotope/js/item', ['outlayer/outlayer'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('outlayer')))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)))
  })(window, function (t) {
    'use strict'
    function e() {
      t.Item.apply(this, arguments)
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create
    ;(i._create = function () {
      ;(this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {})
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          ;(this.sortData.id = this.id),
            (this.sortData['original-order'] = this.id),
            (this.sortData.random = Math.random())
          var t = this.layout.options.getSortData,
            e = this.layout._sorters
          for (var i in t) {
            var o = e[i]
            this.sortData[i] = o(this.element, this)
          }
        }
      })
    var n = i.destroy
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: '' })
      }),
      e
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'isotope/js/layout-mode',
          ['get-size/get-size', 'outlayer/outlayer'],
          e
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('get-size'), require('outlayer')))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)))
  })(window, function (t, e) {
    'use strict'
    function i(t) {
      ;(this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size))
    }
    var o = i.prototype,
      n = [
        '_resetLayout',
        '_getItemLayoutPosition',
        '_manageStamp',
        '_getContainerSize',
        '_getElementOffset',
        'needsResizeLayout',
        '_getOption',
      ]
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments)
        }
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e
        return i && e.innerHeight != this.isotope.size.innerHeight
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize('column', 'Width')
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize('row', 'Height')
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = 'outer' + e
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize()
          this[i] = (n && n[o]) || this.isotope.size['inner' + e]
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0]
        return e && e.element && t(e.element)
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size)
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments)
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        )
      }),
      i
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('masonry/masonry', ['outlayer/outlayer', 'get-size/get-size'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('outlayer'), require('get-size')))
      : (t.Masonry = e(t.Outlayer, t.getSize))
  })(window, function (t, e) {
    var i = t.create('masonry')
    i.compatOptions.fitWidth = 'isFitWidth'
    var o = i.prototype
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement('columnWidth', 'outerWidth'),
          this._getMeasurement('gutter', 'outerWidth'),
          this.measureColumns(),
          (this.colYs = [])
        for (var t = 0; t < this.cols; t++) this.colYs.push(0)
        ;(this.maxY = 0), (this.horizontalColIndex = 0)
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? 'round' : 'floor'
        ;(s = Math[a](s)), (this.cols = Math.max(s, 1))
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption('fitWidth'),
          i = t ? this.element.parentNode : this.element,
          o = e(i)
        this.containerWidth = o && o.innerWidth
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize()
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? 'round' : 'ceil',
          o = Math[i](t.size.outerWidth / this.columnWidth)
        o = Math.min(o, this.cols)
        for (
          var n = this.options.horizontalOrder
              ? '_getHorizontalColPosition'
              : '_getTopColPosition',
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a
        return r
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e)
        return { col: e.indexOf(i), y: i }
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t)
        return e
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t]
        var i = this.colYs.slice(t, t + e)
        return Math.max.apply(Math, i)
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols
        i = o ? 0 : i
        var n = e.size.outerWidth && e.size.outerHeight
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        )
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption('originLeft'),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth)
        a = Math.max(0, a)
        var u = Math.floor(r / this.columnWidth)
        ;(u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u))
        for (
          var h = this._getOption('originTop'),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l])
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs)
        var t = { height: this.maxY }
        return (
          this._getOption('fitWidth') &&
            (t.width = this._getContainerFitWidth()),
          t
        )
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++
        return (this.cols - t) * this.columnWidth - this.gutter
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth
        return this.getContainerWidth(), t != this.containerWidth
      }),
      i
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'isotope/js/layout-modes/masonry',
          ['../layout-mode', 'masonry/masonry'],
          e
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          require('../layout-mode'),
          require('masonry-layout')
        ))
      : e(t.Isotope.LayoutMode, t.Masonry)
  })(window, function (t, e) {
    'use strict'
    var i = t.create('masonry'),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 }
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s])
    var r = o.measureColumns
    o.measureColumns = function () {
      ;(this.items = this.isotope.filteredItems), r.call(this)
    }
    var a = o._getOption
    return (
      (o._getOption = function (t) {
        return 'fitWidth' == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments)
      }),
      i
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('isotope/js/layout-modes/fit-rows', ['../layout-mode'], e)
      : 'object' == typeof exports
      ? (module.exports = e(require('../layout-mode')))
      : e(t.Isotope.LayoutMode)
  })(window, function (t) {
    'use strict'
    var e = t.create('fitRows'),
      i = e.prototype
    return (
      (i._resetLayout = function () {
        ;(this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement('gutter', 'outerWidth')
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize()
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY))
        var o = { x: this.x, y: this.y }
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        )
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY }
      }),
      e
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('isotope/js/layout-modes/vertical', ['../layout-mode'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('../layout-mode')))
      : e(t.Isotope.LayoutMode)
  })(window, function (t) {
    'use strict'
    var e = t.create('vertical', { horizontalAlignment: 0 }),
      i = e.prototype
    return (
      (i._resetLayout = function () {
        this.y = 0
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize()
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y
        return (this.y += t.size.outerHeight), { x: e, y: i }
      }),
      (i._getContainerSize = function () {
        return { height: this.y }
      }),
      e
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          [
            'outlayer/outlayer',
            'get-size/get-size',
            'desandro-matches-selector/matches-selector',
            'fizzy-ui-utils/utils',
            'isotope/js/item',
            'isotope/js/layout-mode',
            'isotope/js/layout-modes/masonry',
            'isotope/js/layout-modes/fit-rows',
            'isotope/js/layout-modes/vertical',
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('outlayer'),
          require('get-size'),
          require('desandro-matches-selector'),
          require('fizzy-ui-utils'),
          require('isotope/js/item'),
          require('isotope/js/layout-mode'),
          require('isotope/js/layout-modes/masonry'),
          require('isotope/js/layout-modes/fit-rows'),
          require('isotope/js/layout-modes/vertical')
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ))
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s]
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1
            return (r > a ? 1 : -1) * h
          }
        }
        return 0
      }
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim()
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, '')
          },
      d = e.create('isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: !0,
        sortAscending: !0,
      })
    ;(d.Item = s), (d.LayoutMode = r)
    var l = d.prototype
    ;(l._create = function () {
      ;(this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ['original-order'])
      for (var t in r.modes) this._initLayoutMode(t)
    }),
      (l.reloadItems = function () {
        ;(this.itemGUID = 0), e.prototype.reloadItems.call(this)
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i]
          o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {}
        ;(this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this))
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption('initLayout')
          ? void this.arrange()
          : void this._layout()
      }),
      (l._layout = function () {
        var t = this._getIsInstant()
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0)
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant()
        var e = this._filter(this.items)
        ;(this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout()
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
      }),
      (l._getIsInstant = function () {
        var t = this._getOption('layoutInstant'),
          e = void 0 !== t ? t : !this._isLayoutInited
        return (this._isInstant = e), e
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent('arrangeComplete', null, [n.filteredItems])
        }
        var e,
          i,
          o,
          n = this
        this.once('layoutComplete', function () {
          ;(e = !0), t()
        }),
          this.once('hideComplete', function () {
            ;(i = !0), t()
          }),
          this.once('revealComplete', function () {
            ;(o = !0), t()
          })
      }),
      (l._filter = function (t) {
        var e = this.options.filter
        e = e || '*'
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r]
          if (!a.isIgnored) {
            var u = s(a)
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
          }
        }
        return { matches: i, needReveal: o, needHide: n }
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t)
            }
          : 'function' == typeof t
          ? function (e) {
              return t(e.element)
            }
          : function (e) {
              return o(e.element, t)
            }
      }),
      (l.updateSortData = function (t) {
        var e
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e)
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData
        for (var e in t) {
          var i = t[e]
          this._sorters[e] = f(i)
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i]
          o.updateSortData()
        }
      })
    var f = (function () {
      function t(t) {
        if ('string' != typeof t) return t
        var i = h(t).split(' '),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]]
        return (t = a
          ? function (t) {
              return t && a(r(t))
            }
          : function (t) {
              return t && r(t)
            })
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t)
            }
          : function (t) {
              var i = t.querySelector(e)
              return i && i.textContent
            }
      }
      return t
    })()
    ;(d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10)
      },
      parseFloat: function (t) {
        return parseFloat(t)
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy)
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory))
          var e = a(this.sortHistory, this.options.sortAscending)
          this.filteredItems.sort(e)
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1
        return !0
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t]
        if (!e) throw new Error('No layout mode: ' + t)
        return (e.options = this.options[t]), e
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t)
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize()
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
      }),
      (l.appended = function (t) {
        var e = this.addItems(t)
        if (e.length) {
          var i = this._filterRevealAdded(e)
          this.filteredItems = this.filteredItems.concat(i)
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t)
        if (e.length) {
          this._resetLayout(), this._manageStamps()
          var i = this._filterRevealAdded(e)
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items))
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t)
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        )
      }),
      (l.insert = function (t) {
        var e = this.addItems(t)
        if (e.length) {
          var i,
            o,
            n = e.length
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element)
          var s = this._filter(e).matches
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant
          this.reveal(s)
        }
      })
    var c = l.remove
    return (
      (l.remove = function (t) {
        t = n.makeArray(t)
        var e = this.getItems(t)
        c.call(this, t)
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o]
          n.removeFrom(this.filteredItems, s)
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t]
          e.sortData.random = Math.random()
        }
        ;(this.options.sortBy = 'random'), this._sort(), this._layout()
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration
        this.options.transitionDuration = 0
        var o = t.apply(this, e)
        return (this.options.transitionDuration = i), o
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element
        })
      }),
      d
    )
  })
