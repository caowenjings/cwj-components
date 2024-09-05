'use strict';
(self.webpackChunkcwj_components = self.webpackChunkcwj_components || []).push([
  [651],
  {
    30929: function (l, s, e) {
      e.r(s);
      var m = e(72269),
        j = e(93359),
        r = e(61788),
        E = e(19977),
        h = e(91558),
        o = e(24268),
        D = e(96057),
        x = e(85939),
        d = e(53683),
        c = e(80936),
        t = e(67294),
        _ = e(85893);
      function i() {
        var a = (0, d.eL)(),
          n = a.texts;
        return (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)('div', {
            className: 'markdown',
            children: [
              (0, _.jsxs)('h1', {
                id: 'uniqby',
                children: [
                  (0, _.jsx)('a', {
                    'aria-hidden': 'true',
                    tabIndex: '-1',
                    href: '#uniqby',
                    children: (0, _.jsx)('span', { className: 'icon icon-link' }),
                  }),
                  'uniqBy',
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
              (0, _.jsx)(o.Z, { lang: 'jsx', children: n[8].value }),
            ],
          }),
        });
      }
      function u() {
        return (0, _.jsx)(d.dY, {
          children: (0, _.jsx)(t.Suspense, {
            fallback: (0, _.jsx)(c.Z, {}),
            children: (0, _.jsx)(i, {}),
          }),
        });
      }
      s.default = u;
    },
  },
]);
