!(function () {
  'use strict';
  var t = '/'.replace(/([^/])$/, '$1/'),
    e = location.pathname,
    n = e.startsWith(t) && decodeURI('/'.concat(e.slice(t.length)));
  if (n) {
    var a = document,
      c = a.head,
      r = a.createElement.bind(a),
      i = (function (t, e, n) {
        var a,
          c =
            e.r[t] ||
            (null ===
              (a = Object.entries(e.r).find(function (e) {
                var n = e[0];
                return new RegExp(
                  '^'.concat(n.replace(/\/:[^/]+/g, '/[^/]+').replace('/*', '/.+'), '$'),
                ).test(t);
              })) || void 0 === a
              ? void 0
              : a[1]);
        return null == c
          ? void 0
          : c.map(function (t) {
              var a = e.f[t][1],
                c = e.f[t][0];
              return {
                type: c.split('.').pop(),
                url: ''.concat(n.publicPath).concat(c),
                attrs: [['data-'.concat(e.b), ''.concat(e.p, ':').concat(a)]],
              };
            });
      })(
        n,
        {
          p: 'cwj-components',
          b: 'webpack',
          f: [
            ['docs__jsTools__validates.md.452e615c.async.js', 0],
            ['docs__jsTools__string-randomColor.md.5f3245d5.async.js', 3],
            ['nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css', 9],
            ['nm__dumi__dist__client__pages__Demo__index.04630902.async.js', 9],
            ['docs__components__empty.md.b0202203.async.js', 32],
            ['nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css', 65],
            ['nm__dumi__dist__client__pages__404.d5bec075.async.js', 65],
            ['99.e8c51481.chunk.css', 99],
            ['99.b1d0c303.async.js', 99],
            ['docs__directives__defineDirective.md.61e729b1.async.js', 115],
            ['docs__jsTools__string-thousandFormat.md.2eeb5888.async.js', 136],
            ['docs__jsTools__object-omit.md.85d0c9be.async.js', 166],
            ['docs__jsTools__string-uuid.md.e5e3b29f.async.js', 178],
            ['docs__jsTools__string-formatFileSize.md.ace7c63a.async.js', 204],
            ['docs__jsTools__index.md.e78743a0.async.js', 207],
            ['docs__jsTools__file-html2Pdf.md.2fa2373f.async.js', 216],
            ['docs__components__themeProvider.md.c2cc9c04.async.js', 219],
            ['docs__jsTools__event-eventEmitter.md.810d4e4b.async.js', 255],
            ['docs__directives__rPermission.md.668a3747.async.js', 260],
            ['docs__jsTools__cache-localCache.md.38ad94df.async.js', 285],
            ['docs__jsTools__file-download.md.7083295b.async.js', 313],
            ['docs__jsTools__event-sleep.md.4feccc69.async.js', 375],
            ['docs__devTools__index.md.a96ef342.async.js', 390],
            ['docs__components__index.md.7e544901.async.js', 409],
            ['docs__directives__index.md.6547dc47.async.js', 510],
            ['docs__jsTools__string-parseUrlParams.md.3e6ea52f.async.js', 517],
            ['nm__dumi__theme-default__layouts__DocLayout__index.2f540d57.async.js', 519],
            ['docs__jsTools__array-deepSearchAll.md.84af762a.async.js', 577],
            ['docs__jsTools__window-fullScreen.md.648be8e1.async.js', 603],
            ['docs__jsTools__object-obj2FormData.md.67393ca9.async.js', 624],
            ['docs__jsTools__base-isDataType.md.a2533d54.async.js', 649],
            ['docs__jsTools__array-uniqBy.md.4f4df0f2.async.js', 651],
            ['docs__jsTools__window-scroll.md.8ed43546.async.js', 653],
            ['docs__jsTools__object-pick.md.d5c62681.async.js', 715],
            ['docs__jsTools__base-clone.md.9c392322.async.js', 726],
            ['docs__jsTools__array-deepSearch.md.14b952c2.async.js', 781],
            ['docs__jsTools__string-tm.md.1d1df07e.async.js', 811],
            ['docs__guide__index.md.4eec2529.async.js', 825],
            ['docs__jsTools__cache-sessionCache.md.d5a3e178.async.js', 841],
            ['docs__directives__rIf.md.38c7ebdc.async.js', 862],
            ['docs__jsTools__window-copyText.md.0a204204.async.js', 866],
            ['dumi__tmp-production__dumi__theme__ContextWrapper.ef8a337d.async.js', 923],
            ['docs__index.md.90186252.async.js', 935],
          ],
          r: {
            '/*': [5, 6, 7, 8, 26, 41],
            '/': [42, 7, 8, 26, 41],
            '/components': [23, 7, 8, 26, 41],
            '/directives': [24, 7, 8, 26, 41],
            '/dev-tools': [22, 7, 8, 26, 41],
            '/js-tools': [14, 7, 8, 26, 41],
            '/guide': [37, 7, 8, 26, 41],
            '/~demos/:id': [2, 3, 41],
            '/js-tools/string-format-file-size': [13, 7, 8, 26, 41],
            '/js-tools/string-parse-url-params': [25, 7, 8, 26, 41],
            '/js-tools/string-thousand-format': [10, 7, 8, 26, 41],
            '/js-tools/array-deep-search-all': [27, 7, 8, 26, 41],
            '/js-tools/object-obj2-form-data': [29, 7, 8, 26, 41],
            '/directives/define-directive': [9, 7, 8, 26, 41],
            '/js-tools/cache-session-cache': [38, 7, 8, 26, 41],
            '/js-tools/event-event-emitter': [17, 7, 8, 26, 41],
            '/js-tools/string-random-color': [1, 7, 8, 26, 41],
            '/js-tools/window-full-screen': [28, 7, 8, 26, 41],
            '/components/theme-provider': [16, 7, 8, 26, 41],
            '/js-tools/array-deep-search': [35, 7, 8, 26, 41],
            '/js-tools/cache-local-cache': [19, 7, 8, 26, 41],
            '/js-tools/base-is-data-type': [30, 7, 8, 26, 41],
            '/js-tools/window-copy-text': [40, 7, 8, 26, 41],
            '/directives/r-permission': [18, 7, 8, 26, 41],
            '/js-tools/file-download': [20, 7, 8, 26, 41],
            '/js-tools/file-html2-pdf': [15, 7, 8, 26, 41],
            '/js-tools/window-scroll': [32, 7, 8, 26, 41],
            '/js-tools/array-uniq-by': [31, 7, 8, 26, 41],
            '/js-tools/event-sleep': [21, 7, 8, 26, 41],
            '/js-tools/object-omit': [11, 7, 8, 26, 41],
            '/js-tools/object-pick': [33, 7, 8, 26, 41],
            '/js-tools/string-uuid': [12, 7, 8, 26, 41],
            '/js-tools/base-clone': [34, 7, 8, 26, 41],
            '/js-tools/string-tm': [36, 7, 8, 26, 41],
            '/js-tools/validates': [0, 7, 8, 26, 41],
            '/components/empty': [4, 7, 8, 26, 41],
            '/directives/r-if': [39, 7, 8, 26, 41],
          },
        },
        { publicPath: '/' },
      );
    null == i ||
      i.forEach(function (t) {
        var e,
          n = t.type,
          a = t.url;
        if ('js' === n) ((e = r('script')).src = a), (e.async = !0);
        else {
          if ('css' !== n) return;
          ((e = r('link')).href = a), (e.rel = 'preload'), (e.as = 'style');
        }
        t.attrs.forEach(function (t) {
          e.setAttribute(t[0], t[1] || '');
        }),
          c.appendChild(e);
      });
  }
})();
