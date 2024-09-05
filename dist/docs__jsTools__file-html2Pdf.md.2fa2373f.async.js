'use strict';
(self.webpackChunkcwj_components = self.webpackChunkcwj_components || []).push([
  [216],
  {
    45998: function (a, d, e) {
      e.r(d);
      var u = e(72269),
        m = e(93359),
        j = e(61788),
        r = e(19977),
        h = e(91558),
        E = e(24268),
        D = e(96057),
        x = e(85939),
        s = e(53683),
        o = e(80936),
        t = e(67294),
        _ = e(85893);
      function c() {
        var l = (0, s.eL)(),
          n = l.texts;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)('div', {
              className: 'markdown',
              children: [
                (0, _.jsxs)('h1', {
                  id: 'html2pdf',
                  children: [
                    (0, _.jsx)('a', {
                      'aria-hidden': 'true',
                      tabIndex: '-1',
                      href: '#html2pdf',
                      children: (0, _.jsx)('span', { className: 'icon icon-link' }),
                    }),
                    'html2Pdf',
                  ],
                }),
                (0, _.jsx)('p', { children: (0, _.jsx)('code', { children: n[0].value }) }),
                (0, _.jsx)('p', { children: n[1].value }),
                (0, _.jsxs)('h4', {
                  id: '\u53C2\u6570',
                  children: [
                    (0, _.jsx)('a', {
                      'aria-hidden': 'true',
                      tabIndex: '-1',
                      href: '#\u53C2\u6570',
                      children: (0, _.jsx)('span', { className: 'icon icon-link' }),
                    }),
                    '\u53C2\u6570',
                  ],
                }),
                (0, _.jsxs)('p', {
                  children: [n[2].value, (0, _.jsx)('code', { children: n[3].value }), n[4].value],
                }),
                (0, _.jsxs)('p', {
                  children: [n[5].value, (0, _.jsx)('code', { children: n[6].value }), n[7].value],
                }),
              ],
            }),
            (0, _.jsx)(s.Dl, {
              demo: { id: 'docs-js-tools-file-html-2-pdf-demo-0' },
              previewerProps: {},
            }),
          ],
        });
      }
      function i() {
        return (0, _.jsx)(s.dY, {
          children: (0, _.jsx)(t.Suspense, {
            fallback: (0, _.jsx)(o.Z, {}),
            children: (0, _.jsx)(c, {}),
          }),
        });
      }
      d.default = i;
    },
  },
]);
