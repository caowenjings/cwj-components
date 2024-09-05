'use strict';
(self.webpackChunkcwj_components = self.webpackChunkcwj_components || []).push([
  [390],
  {
    11677: function (a, s, e) {
      e.r(s);
      var m = e(72269),
        l = e(93359),
        j = e(61788),
        r = e(19977),
        D = e(91558),
        E = e(24268),
        h = e(96057),
        x = e(85939),
        o = e(53683),
        t = e(80936),
        d = e(67294),
        _ = e(85893);
      function c() {
        var i = (0, o.eL)(),
          n = i.texts;
        return (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)('div', {
            className: 'markdown',
            children: [
              (0, _.jsxs)('h2', {
                id: '\u5E38\u7528\u7684\u5F00\u53D1\u7F51\u7AD9',
                children: [
                  (0, _.jsx)('a', {
                    'aria-hidden': 'true',
                    tabIndex: '-1',
                    href: '#\u5E38\u7528\u7684\u5F00\u53D1\u7F51\u7AD9',
                    children: (0, _.jsx)('span', { className: 'icon icon-link' }),
                  }),
                  '\u5E38\u7528\u7684\u5F00\u53D1\u7F51\u7AD9',
                ],
              }),
              (0, _.jsxs)('ul', {
                children: [
                  (0, _.jsx)('li', {
                    children: (0, _.jsx)('a', {
                      href: 'https://ahooks.js.org/zh-CN/',
                      children: n[0].value,
                    }),
                  }),
                  (0, _.jsx)('li', {
                    children: (0, _.jsx)('a', {
                      href: 'https://ant-design.antgroup.com/components/overview-cn',
                      children: n[1].value,
                    }),
                  }),
                  (0, _.jsx)('li', {
                    children: (0, _.jsx)('a', {
                      href: 'https://umijs.org/docs/introduce/introduce',
                      children: n[2].value,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function u() {
        return (0, _.jsx)(o.dY, {
          children: (0, _.jsx)(d.Suspense, {
            fallback: (0, _.jsx)(t.Z, {}),
            children: (0, _.jsx)(c, {}),
          }),
        });
      }
      s.default = u;
    },
  },
]);
