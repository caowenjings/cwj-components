'use strict';
(self.webpackChunkcwj_components = self.webpackChunkcwj_components || []).push([
  [923],
  {
    26520: function (S, r, e) {
      e.r(r),
        e.d(r, {
          default: function () {
            return T;
          },
        });
      var g = e(12741),
        y = e.n(g),
        n = e(67294),
        o = e(53683),
        C = e(56790),
        j = e(64236),
        a = null,
        s = e(90482),
        x = e(85893),
        l = {},
        u = { name: 'cwj-components', version: '1.0.0' },
        i = 'browser',
        m = void 0,
        v = {
          footer:
            'Copyright \xA9 2024 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
          prefersColor: { default: 'light', switch: !0 },
          nprogress: !0,
          lastUpdated: !0,
        },
        c = !1;
      function T() {
        var E = (0, o.pC)(),
          D = (0, n.useState)(!1),
          d = y()(D, 2),
          f = d[0],
          p = d[1],
          h = (0, n.useRef)(o.m8.location.pathname);
        (0, n.useEffect)(function () {
          return o.m8.listen(function (t) {
            t.location.pathname !== h.current &&
              ((h.current = t.location.pathname), document.documentElement.scrollTo(0, 0));
          });
        }, []);
        var P = n.useMemo(
          function () {
            var t = {
              pkg: u,
              historyType: i,
              entryExports: l,
              demos: null,
              components: a,
              locales: s.k,
              loading: f,
              setLoading: p,
              hostname: m,
              themeConfig: v,
              _2_level_nav_available: c,
            };
            return (
              Object.defineProperty(t, 'demos', {
                get: function () {
                  return (
                    (0, C.Kp)(
                      !1,
                      '`demos` return empty in latest version, please use `useDemo` instead.',
                    ),
                    {}
                  );
                },
              }),
              t
            );
          },
          [u, i, l, a, s.k, f, p, m, v, c],
        );
        return (0, x.jsx)(j.D.Provider, { value: P, children: E });
      }
    },
  },
]);
