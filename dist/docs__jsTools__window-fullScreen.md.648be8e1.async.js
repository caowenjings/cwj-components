'use strict';
(self.webpackChunkcwj_components = self.webpackChunkcwj_components || []).push([
  [603],
  {
    80158: function (l, o, e) {
      e.r(o);
      var a = e(72269),
        m = e(93359),
        j = e(61788),
        E = e(19977),
        r = e(91558),
        D = e(24268),
        M = e(96057),
        P = e(85939),
        s = e(53683),
        d = e(80936),
        t = e(67294),
        _ = e(85893);
      function c() {
        var i = (0, s.eL)(),
          n = i.texts;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)('div', {
              className: 'markdown',
              children: [
                (0, _.jsxs)('h1', {
                  id: 'fullscreen',
                  children: [
                    (0, _.jsx)('a', {
                      'aria-hidden': 'true',
                      tabIndex: '-1',
                      href: '#fullscreen',
                      children: (0, _.jsx)('span', { className: 'icon icon-link' }),
                    }),
                    'fullscreen',
                  ],
                }),
                (0, _.jsxs)('p', {
                  children: [
                    n[0].value,
                    (0, _.jsx)('code', { children: n[1].value }),
                    n[2].value,
                    (0, _.jsx)('code', { children: n[3].value }),
                    n[4].value,
                  ],
                }),
              ],
            }),
            (0, _.jsx)(s.Dl, {
              demo: { id: 'docs-js-tools-window-full-screen-demo-0' },
              previewerProps: {},
            }),
          ],
        });
      }
      function u() {
        return (0, _.jsx)(s.dY, {
          children: (0, _.jsx)(t.Suspense, {
            fallback: (0, _.jsx)(d.Z, {}),
            children: (0, _.jsx)(c, {}),
          }),
        });
      }
      o.default = u;
    },
  },
]);
