'use strict';
(self.webpackChunkcwj_components = self.webpackChunkcwj_components || []).push([
  [715],
  {
    89352: function (m, e, _) {
      _.r(e);
      var l = _(72269),
        j = _(93359),
        E = _(61788),
        D = _(19977),
        r = _(91558),
        d = _(24268),
        M = _(96057),
        P = _(85939),
        s = _(53683),
        t = _(80936),
        c = _(67294),
        n = _(85893);
      function i() {
        var a = (0, s.eL)(),
          o = a.texts;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)('div', {
            className: 'markdown',
            children: [
              (0, n.jsxs)('h1', {
                id: 'pick',
                children: [
                  (0, n.jsx)('a', {
                    'aria-hidden': 'true',
                    tabIndex: '-1',
                    href: '#pick',
                    children: (0, n.jsx)('span', { className: 'icon icon-link' }),
                  }),
                  'pick',
                ],
              }),
              (0, n.jsx)('p', { children: o[0].value }),
              (0, n.jsx)(d.Z, { lang: 'jsx', children: o[1].value }),
            ],
          }),
        });
      }
      function u() {
        return (0, n.jsx)(s.dY, {
          children: (0, n.jsx)(c.Suspense, {
            fallback: (0, n.jsx)(t.Z, {}),
            children: (0, n.jsx)(i, {}),
          }),
        });
      }
      e.default = u;
    },
  },
]);
