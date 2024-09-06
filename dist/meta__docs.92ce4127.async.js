'use strict';
(self.webpackChunkcwj_components = self.webpackChunkcwj_components || []).push([
  [904],
  {
    82213: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(3102),
        o = {};
    },
    75226: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return O;
          },
        });
      var s = e(97983),
        t = e.n(s),
        o = e(40794),
        h = e.n(o),
        j = e(67294),
        f = e(32499),
        O = {
          'docs-components-theme-provider-demo-0': {
            component: j.memo(
              j.lazy(
                h()(
                  t()().mark(function E() {
                    return t()().wrap(function (D) {
                      for (;;)
                        switch ((D.prev = D.next)) {
                          case 0:
                          case 'end':
                            return D.stop();
                        }
                    }, E);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-components-theme-provider-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.jsx': {
                  type: 'FILE',
                  value: `// import { ThemeProvider } from '@cwj/components';

// export default () => {
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>;
// };`,
                },
              },
              entry: 'index.jsx',
            },
            context: {},
            renderOpts: {
              compile: (function () {
                var E = h()(
                  t()().mark(function D() {
                    var p,
                      I = arguments;
                    return t()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return r.abrupt('return', (p = r.sent).default.apply(p, I));
                          case 3:
                          case 'end':
                            return r.stop();
                        }
                    }, D);
                  }),
                );
                function R() {
                  return E.apply(this, arguments);
                }
                return R;
              })(),
            },
          },
        };
    },
    97277: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(65281),
        o = {};
    },
    45922: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return d;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(12741),
        j = e.n(h),
        f = e(40794),
        O = e.n(f),
        E = e(67294),
        R = e(20954),
        D = e(42790),
        p = e(53877),
        I = e(89814),
        d = {
          'docs-directives-define-directive-demo-0': {
            component: E.memo(
              E.lazy(
                O()(
                  o()().mark(function r() {
                    var l, _, a, u, v, m, T, i, x, P, M, B;
                    return o()().wrap(function (U) {
                      for (;;)
                        switch ((U.prev = U.next)) {
                          case 0:
                            return (U.next = 2), Promise.resolve().then(e.t.bind(e, 67294, 19));
                          case 2:
                            return (
                              (l = U.sent),
                              (_ = l.default),
                              (a = l.useState),
                              (u = l.useEffect),
                              (U.next = 8),
                              Promise.resolve().then(e.bind(e, 42790))
                            );
                          case 8:
                            return (
                              (v = U.sent),
                              (m = v.Button),
                              (T = v.Space),
                              (i = v.Checkbox),
                              (U.next = 14),
                              Promise.resolve().then(e.bind(e, 53877))
                            );
                          case 14:
                            return (
                              (x = U.sent),
                              (P = x.defineDirective),
                              (U.next = 18),
                              Promise.resolve().then(e.bind(e, 89814))
                            );
                          case 18:
                            return (
                              (M = U.sent),
                              (B = M.sessionCache),
                              P('auth', {
                                install: function (y) {
                                  var C = B.getItem('funcIds', !0);
                                  if (!(C != null && C.includes(y.value))) return null;
                                },
                              }),
                              U.abrupt('return', {
                                default: function () {
                                  var y = a([]),
                                    C = j()(y, 2),
                                    K = C[0],
                                    w = C[1],
                                    W = [
                                      { label: '\u65B0\u589E\u6743\u9650', value: '100001' },
                                      { label: '\u7F16\u8F91\u6743\u9650', value: '100002' },
                                      { label: '\u5220\u9664\u6743\u9650', value: '100003' },
                                    ];
                                  u(function () {
                                    var A = B.getItem('funcIds', !0);
                                    w(A);
                                  }, []);
                                  function S(A) {
                                    w(A), B.setItem('funcIds', A, !0);
                                  }
                                  return (
                                    console.log(K),
                                    _.createElement(
                                      T,
                                      { direction: 'vertical' },
                                      _.createElement(i.Group, {
                                        options: W,
                                        value: K,
                                        onChange: S,
                                      }),
                                      _.createElement(m, { 'r-auth': '100001' }, ' \u65B0\u589E'),
                                      _.createElement(m, { 'r-auth': '100002' }, ' \u7F16\u8F91'),
                                      _.createElement(m, { 'r-auth': '100003' }, ' \u5220\u9664'),
                                    )
                                  );
                                },
                              })
                            );
                          case 22:
                          case 'end':
                            return U.stop();
                        }
                    }, r);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-directives-define-directive-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState, useEffect } from 'react';
import { Button, Space, Checkbox } from 'antd';
import { defineDirective, DirectiveInstallProps } from 'cwj-directives';
import { sessionCache } from 'cwj-jstools';

defineDirective('auth', {
  install(data: DirectiveInstallProps) {
    const funcIds = sessionCache.getItem('funcIds', true);
    if (!funcIds?.includes(data.value)) {
      return null;
    }
  },
});

export default () => {
  const [funcIds, setFuncIds] = useState([]);
  const options = [
    { label: '\u65B0\u589E\u6743\u9650', value: '100001' },
    { label: '\u7F16\u8F91\u6743\u9650', value: '100002' },
    { label: '\u5220\u9664\u6743\u9650', value: '100003' },
  ];

  useEffect(() => {
    const funcIds = sessionCache.getItem('funcIds', true);
    setFuncIds(funcIds);
  }, []);

  function changeFuncIds(value: string[]) {
    setFuncIds(value);
    sessionCache.setItem('funcIds', value, true);
  }

  console.log(funcIds);

  return (
    <Space direction={'vertical'}>
      <Checkbox.Group options={options} value={funcIds} onChange={changeFuncIds} />
      <Button r-auth={'100001'}> \u65B0\u589E</Button>
      <Button r-auth={'100002'}> \u7F16\u8F91</Button>
      <Button r-auth={'100003'}> \u5220\u9664</Button>
    </Space>
  );
};`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                antd: { type: 'NPM', value: '5.20.3' },
                'cwj-directives': { type: 'NPM', value: '1.0.2' },
                'cwj-jstools': { type: 'NPM', value: '1.0.5' },
              },
              entry: 'index.tsx',
            },
            context: {
              react: s || (s = e.t(E, 2)),
              antd: D,
              'cwj-directives': p,
              'cwj-jstools': I,
            },
            renderOpts: {
              compile: (function () {
                var r = O()(
                  o()().mark(function _() {
                    var a,
                      u = arguments;
                    return o()().wrap(function (m) {
                      for (;;)
                        switch ((m.prev = m.next)) {
                          case 0:
                            return (m.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return m.abrupt('return', (a = m.sent).default.apply(a, u));
                          case 3:
                          case 'end':
                            return m.stop();
                        }
                    }, _);
                  }),
                );
                function l() {
                  return r.apply(this, arguments);
                }
                return l;
              })(),
            },
          },
        };
    },
    65760: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(85012),
        o = {};
    },
    62212: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return p;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(12741),
        j = e.n(h),
        f = e(40794),
        O = e.n(f),
        E = e(67294),
        R = e(32665),
        D = e(42790),
        p = {
          'docs-directives-r-if-demo-0': {
            component: E.memo(
              E.lazy(
                O()(
                  o()().mark(function I() {
                    var d, r, l, _, a, u;
                    return o()().wrap(function (m) {
                      for (;;)
                        switch ((m.prev = m.next)) {
                          case 0:
                            return (m.next = 2), Promise.resolve().then(e.bind(e, 42790));
                          case 2:
                            return (
                              (d = m.sent),
                              (r = d.Button),
                              (l = d.Switch),
                              (m.next = 7),
                              Promise.resolve().then(e.t.bind(e, 67294, 19))
                            );
                          case 7:
                            return (
                              (_ = m.sent),
                              (a = _.default),
                              (u = _.useState),
                              m.abrupt('return', {
                                default: function () {
                                  var i = u(!0),
                                    x = j()(i, 2),
                                    P = x[0],
                                    M = x[1];
                                  return a.createElement(
                                    'div',
                                    null,
                                    a.createElement(
                                      'div',
                                      { style: { padding: '1rem 0' } },
                                      a.createElement(l, {
                                        checkedChildren: '\u663E\u793A',
                                        unCheckedChildren: '\u9690\u85CF',
                                        checked: P,
                                        onChange: M,
                                      }),
                                    ),
                                    a.createElement(r, { 'r-if': P }, ' \u6DFB\u52A0\u6761\u4EF6'),
                                  );
                                },
                              })
                            );
                          case 11:
                          case 'end':
                            return m.stop();
                        }
                    }, I);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-directives-r-if-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import { rIf } from 'cwj-directives';
import { Button, Switch } from 'antd';
import { sessionCache } from 'cwj-jstools';
import React, { useState } from 'react';

export default () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div>
      <div style={{ padding: '1rem 0' }}>
        <Switch checkedChildren="\u663E\u793A" unCheckedChildren="\u9690\u85CF" checked={show} onChange={setShow} />
      </div>
      <Button r-if={show}> \u6DFB\u52A0\u6761\u4EF6</Button>
    </div>
  );
};`,
                },
                antd: { type: 'NPM', value: '5.20.3' },
                react: { type: 'NPM', value: '18.3.1' },
              },
              entry: 'index.tsx',
            },
            context: { antd: D, react: s || (s = e.t(E, 2)) },
            renderOpts: {
              compile: (function () {
                var I = O()(
                  o()().mark(function r() {
                    var l,
                      _ = arguments;
                    return o()().wrap(function (u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (u.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return u.abrupt('return', (l = u.sent).default.apply(l, _));
                          case 3:
                          case 'end':
                            return u.stop();
                        }
                    }, r);
                  }),
                );
                function d() {
                  return I.apply(this, arguments);
                }
                return d;
              })(),
            },
          },
        };
    },
    63975: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return D;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(40794),
        j = e.n(h),
        f = e(67294),
        O = e(43712),
        E = e(42790),
        R = e(89814),
        D = {
          'docs-directives-r-permission-demo-0': {
            component: f.memo(
              f.lazy(
                j()(
                  o()().mark(function p() {
                    var I, d, r, l, _, a, u;
                    return o()().wrap(function (m) {
                      for (;;)
                        switch ((m.prev = m.next)) {
                          case 0:
                            return (m.next = 2), Promise.resolve().then(e.bind(e, 42790));
                          case 2:
                            return (
                              (I = m.sent),
                              (d = I.Button),
                              (r = I.Space),
                              (m.next = 7),
                              Promise.resolve().then(e.bind(e, 89814))
                            );
                          case 7:
                            return (
                              (l = m.sent),
                              (_ = l.sessionCache),
                              (m.next = 11),
                              Promise.resolve().then(e.t.bind(e, 67294, 19))
                            );
                          case 11:
                            return (
                              (a = m.sent),
                              (u = a.default),
                              m.abrupt('return', {
                                default: function () {
                                  var i = {
                                      id: '1',
                                      permissions: [
                                        'algorithm:auto-modeling:*',
                                        'algorithm:assessment-task:view',
                                      ],
                                    },
                                    x = { id: '1', permissions: ['*:*'] };
                                  function P() {
                                    _.setItem('baseInfo', i, !0), window.location.reload();
                                  }
                                  function M() {
                                    _.setItem('baseInfo', x, !0), window.location.reload();
                                  }
                                  function B() {
                                    _.clear(), window.location.reload();
                                  }
                                  return u.createElement(
                                    u.Fragment,
                                    null,
                                    u.createElement(
                                      'div',
                                      { style: { padding: '1rem 0' } },
                                      u.createElement(
                                        r,
                                        { direction: 'vertical' },
                                        u.createElement(
                                          d,
                                          {
                                            onClick: function () {
                                              return P();
                                            },
                                          },
                                          '\u70B9\u51FB\u6DFB\u52A0baseInfo',
                                        ),
                                        u.createElement(
                                          d,
                                          {
                                            onClick: function () {
                                              return M();
                                            },
                                          },
                                          '\u70B9\u51FB\u6DFB\u52A0\u6240\u6709\u6743\u9650',
                                        ),
                                        u.createElement(
                                          d,
                                          {
                                            onClick: function () {
                                              return B();
                                            },
                                          },
                                          '\u6E05\u9664session',
                                        ),
                                      ),
                                    ),
                                    u.createElement(
                                      'div',
                                      null,
                                      u.createElement(
                                        r,
                                        { direction: 'horizontal', style: { padding: '1rem 0' } },
                                        u.createElement(
                                          d,
                                          {
                                            type: 'primary',
                                            'r-permission': 'auto-modeling:create',
                                          },
                                          '\u81EA\u52A8\u5EFA\u6A21\u521B\u5EFA',
                                        ),
                                        u.createElement(
                                          d,
                                          { type: 'primary', 'r-permission': 'online-service:*' },
                                          '\u5728\u7EBF\u670D\u52A1',
                                        ),
                                        u.createElement(
                                          d,
                                          {
                                            type: 'primary',
                                            'r-permission': 'assessment-task:create',
                                          },
                                          '\u4EFB\u52A1\u521B\u5EFA',
                                        ),
                                        u.createElement(
                                          d,
                                          {
                                            type: 'primary',
                                            'r-permission': 'assessment-task:view',
                                          },
                                          '\u4EFB\u52A1\u67E5\u770B',
                                        ),
                                        u.createElement(
                                          d,
                                          {
                                            type: 'primary',
                                            'r-permission': 'assessment-task:view',
                                          },
                                          '\u7B80\u5316\u4EFB\u52A1\u67E5\u770B',
                                        ),
                                        u.createElement(
                                          d,
                                          { type: 'primary', 'r-permission': 'assessment-task:v' },
                                          '\u7B80\u5316\u7248\u4EFB\u52A1\u67E5\u770B',
                                        ),
                                      ),
                                    ),
                                  );
                                },
                              })
                            );
                          case 14:
                          case 'end':
                            return m.stop();
                        }
                    }, p);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-directives-r-permission-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import { rPermission } from 'cwj-directives';
import { Button, Space } from 'antd';
import { sessionCache } from 'cwj-jstools';
import React from 'react';

export default () => {
  const baseInfo: any = {
    id: '1',
    permissions: ['algorithm:auto-modeling:*', 'algorithm:assessment-task:view'],
  };

  const allBaseInfo: any = {
    id: '1',
    permissions: ['*:*'],
  };

  function setPermission() {
    sessionCache.setItem('baseInfo', baseInfo, true);
    window.location.reload();
  }

  function setAllPermission() {
    sessionCache.setItem('baseInfo', allBaseInfo, true);
    window.location.reload();
  }

  function clearPermission() {
    sessionCache.clear();
    window.location.reload();
  }

  return (
    <>
      <div style={{ padding: '1rem 0' }}>
        <Space direction={'vertical'}>
          <Button onClick={() => setPermission()}>\u70B9\u51FB\u6DFB\u52A0baseInfo</Button>
          <Button onClick={() => setAllPermission()}>\u70B9\u51FB\u6DFB\u52A0\u6240\u6709\u6743\u9650</Button>
          <Button onClick={() => clearPermission()}>\u6E05\u9664session</Button>
        </Space>
      </div>
      <div>
        <Space direction={'horizontal'} style={{ padding: '1rem 0' }}>
          <Button type={'primary'} r-permission={'auto-modeling:create'}>
            \u81EA\u52A8\u5EFA\u6A21\u521B\u5EFA
          </Button>
          <Button type={'primary'} r-permission={'online-service:*'}>
            \u5728\u7EBF\u670D\u52A1
          </Button>
          <Button type={'primary'} r-permission={'assessment-task:create'}>
            \u4EFB\u52A1\u521B\u5EFA
          </Button>
          <Button type={'primary'} r-permission={'assessment-task:view'}>
            \u4EFB\u52A1\u67E5\u770B
          </Button>
          <Button type={'primary'} r-permission={'assessment-task:view'}>
            \u7B80\u5316\u4EFB\u52A1\u67E5\u770B
          </Button>
          <Button type={'primary'} r-permission={'assessment-task:v'}>
            \u7B80\u5316\u7248\u4EFB\u52A1\u67E5\u770B
          </Button>
        </Space>
      </div>
    </>
  );
};`,
                },
                antd: { type: 'NPM', value: '5.20.3' },
                'cwj-jstools': { type: 'NPM', value: '1.0.5' },
                react: { type: 'NPM', value: '18.3.1' },
              },
              entry: 'index.tsx',
            },
            context: { antd: E, 'cwj-jstools': R, react: s || (s = e.t(f, 2)) },
            renderOpts: {
              compile: (function () {
                var p = j()(
                  o()().mark(function d() {
                    var r,
                      l = arguments;
                    return o()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return a.abrupt('return', (r = a.sent).default.apply(r, l));
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, d);
                  }),
                );
                function I() {
                  return p.apply(this, arguments);
                }
                return I;
              })(),
            },
          },
        };
    },
    44401: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(26211),
        o = {};
    },
    11171: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(68537),
        o = {};
    },
    51996: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(62042),
        o = {};
    },
    40226: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(55889),
        o = {};
    },
    16375: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(5976),
        o = {};
    },
    35942: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(32051),
        o = {};
    },
    12202: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(45211),
        o = {};
    },
    64279: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(10563),
        o = {};
    },
    16917: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(96801),
        o = {};
    },
    35328: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return I;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(12741),
        j = e.n(h),
        f = e(40794),
        O = e.n(f),
        E = e(67294),
        R = e(1143),
        D = e(42790),
        p = e(89814),
        I = {
          'docs-js-tools-event-event-emitter-demo-0': {
            component: E.memo(
              E.lazy(
                O()(
                  o()().mark(function d() {
                    var r, l, _, a, u, v, m, T, i, x, P, M;
                    return o()().wrap(function (g) {
                      for (;;)
                        switch ((g.prev = g.next)) {
                          case 0:
                            return (g.next = 2), Promise.resolve().then(e.t.bind(e, 67294, 19));
                          case 2:
                            return (
                              (r = g.sent),
                              (l = r.default),
                              (_ = r.useState),
                              (a = r.useEffect),
                              (u = r.useRef),
                              (g.next = 9),
                              Promise.resolve().then(e.bind(e, 42790))
                            );
                          case 9:
                            return (
                              (v = g.sent),
                              (m = v.Button),
                              (T = v.Space),
                              (i = v.Input),
                              (x = v.InputNumber),
                              (g.next = 16),
                              Promise.resolve().then(e.bind(e, 89814))
                            );
                          case 16:
                            return (
                              (P = g.sent),
                              (M = P.eventEmitter),
                              g.abrupt('return', {
                                default: function () {
                                  var L = _(),
                                    y = j()(L, 2),
                                    C = y[0],
                                    K = y[1],
                                    w = _(),
                                    W = j()(w, 2),
                                    S = W[0],
                                    A = W[1],
                                    $ = u(),
                                    F = u();
                                  function N(G, X) {
                                    K(G), A(X);
                                  }
                                  a(function () {
                                    return (
                                      M.on('getInfo', N),
                                      function () {
                                        M.off('getInfo', N);
                                      }
                                    );
                                  }, []);
                                  function z() {
                                    M.emit('getInfo', $.current.input.value, F.current.value);
                                  }
                                  return l.createElement(
                                    'div',
                                    null,
                                    l.createElement('div', null, 'name: ', C),
                                    l.createElement('div', null, 'age: ', S),
                                    l.createElement(
                                      T,
                                      null,
                                      l.createElement(i, { placeholder: 'name', ref: $ }),
                                      l.createElement(x, {
                                        placeholder: 'age',
                                        min: 1,
                                        max: 100,
                                        ref: F,
                                      }),
                                      l.createElement(
                                        m,
                                        {
                                          type: 'primary',
                                          onClick: function () {
                                            return z();
                                          },
                                        },
                                        '\u53D1\u5E03',
                                      ),
                                    ),
                                  );
                                },
                              })
                            );
                          case 19:
                          case 'end':
                            return g.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-js-tools-event-event-emitter-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState, useEffect, useRef } from 'react';
import { Button, Space, Input, InputNumber } from 'antd';
import { eventEmitter } from 'cwj-jstools';

export default function () {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const nameRef = useRef();
  const ageRef = useRef();

  function updateUser(name: string, age: number) {
    setName(name);
    setAge(age);
  }

  useEffect(() => {
    eventEmitter.on('getInfo', updateUser);
    return () => {
      eventEmitter.off('getInfo', updateUser);
    };
  }, []);

  function publish() {
    eventEmitter.emit('getInfo', nameRef.current.input.value, ageRef.current.value);
  }

  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <Space>
        <Input placeholder="name" ref={nameRef} />
        <InputNumber placeholder="age" min={1} max={100} ref={ageRef} />
        <Button type="primary" onClick={() => publish()}>
          \u53D1\u5E03
        </Button>
      </Space>
    </div>
  );
}`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                antd: { type: 'NPM', value: '5.20.3' },
                'cwj-jstools': { type: 'NPM', value: '1.0.5' },
              },
              entry: 'index.tsx',
            },
            context: { react: s || (s = e.t(E, 2)), antd: D, 'cwj-jstools': p },
            renderOpts: {
              compile: (function () {
                var d = O()(
                  o()().mark(function l() {
                    var _,
                      a = arguments;
                    return o()().wrap(function (v) {
                      for (;;)
                        switch ((v.prev = v.next)) {
                          case 0:
                            return (v.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return v.abrupt('return', (_ = v.sent).default.apply(_, a));
                          case 3:
                          case 'end':
                            return v.stop();
                        }
                    }, l);
                  }),
                );
                function r() {
                  return d.apply(this, arguments);
                }
                return r;
              })(),
            },
          },
        };
    },
    7401: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return p;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(12741),
        j = e.n(h),
        f = e(40794),
        O = e.n(f),
        E = e(67294),
        R = e(153),
        D = e(89814),
        p = {
          'docs-js-tools-event-sleep-demo-0': {
            component: E.memo(
              E.lazy(
                O()(
                  o()().mark(function I() {
                    var d, r, l, _, a, u;
                    return o()().wrap(function (m) {
                      for (;;)
                        switch ((m.prev = m.next)) {
                          case 0:
                            return (m.next = 2), Promise.resolve().then(e.t.bind(e, 67294, 19));
                          case 2:
                            return (
                              (d = m.sent),
                              (r = d.default),
                              (l = d.useState),
                              (_ = d.useEffect),
                              (m.next = 8),
                              Promise.resolve().then(e.bind(e, 89814))
                            );
                          case 8:
                            return (
                              (a = m.sent),
                              (u = a.sleep),
                              m.abrupt('return', {
                                default: function () {
                                  var i = l(''),
                                    x = j()(i, 2),
                                    P = x[0],
                                    M = x[1];
                                  function B() {
                                    return g.apply(this, arguments);
                                  }
                                  function g() {
                                    return (
                                      (g = O()(
                                        o()().mark(function U() {
                                          return o()().wrap(function (y) {
                                            for (;;)
                                              switch ((y.prev = y.next)) {
                                                case 0:
                                                  return (y.next = 2), u(2e3);
                                                case 2:
                                                  M('bingo');
                                                case 3:
                                                case 'end':
                                                  return y.stop();
                                              }
                                          }, U);
                                        }),
                                      )),
                                      g.apply(this, arguments)
                                    );
                                  }
                                  return (
                                    _(function () {
                                      B();
                                    }, []),
                                    r.createElement('div', null, '2s\u540E\u8FD4\u56DE\uFF1A', P)
                                  );
                                },
                              })
                            );
                          case 11:
                          case 'end':
                            return m.stop();
                        }
                    }, I);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-js-tools-event-sleep-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState, useEffect } from 'react';
import { sleep } from 'cwj-jstools';

export default function () {
  const [str, setStr] = useState<string>('');

  async function init() {
    await sleep(2000);
    setStr('bingo');
  }

  useEffect(() => {
    init();
  }, []);

  return <div>2s\u540E\u8FD4\u56DE\uFF1A{str}</div>;
}`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                'cwj-jstools': { type: 'NPM', value: '1.0.5' },
              },
              entry: 'index.tsx',
            },
            context: { react: s || (s = e.t(E, 2)), 'cwj-jstools': D },
            renderOpts: {
              compile: (function () {
                var I = O()(
                  o()().mark(function r() {
                    var l,
                      _ = arguments;
                    return o()().wrap(function (u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (u.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return u.abrupt('return', (l = u.sent).default.apply(l, _));
                          case 3:
                          case 'end':
                            return u.stop();
                        }
                    }, r);
                  }),
                );
                function d() {
                  return I.apply(this, arguments);
                }
                return d;
              })(),
            },
          },
        };
    },
    76054: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(9222),
        o = {};
    },
    50714: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return D;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(40794),
        j = e.n(h),
        f = e(67294),
        O = e(38028),
        E = e(42790),
        R = e(89814),
        D = {
          'docs-js-tools-file-html-2-pdf-demo-0': {
            component: f.memo(
              f.lazy(
                j()(
                  o()().mark(function p() {
                    var I, d, r, l, _, a;
                    return o()().wrap(function (v) {
                      for (;;)
                        switch ((v.prev = v.next)) {
                          case 0:
                            return (v.next = 2), Promise.resolve().then(e.t.bind(e, 67294, 19));
                          case 2:
                            return (
                              (I = v.sent),
                              (d = I.default),
                              (v.next = 6),
                              Promise.resolve().then(e.bind(e, 42790))
                            );
                          case 6:
                            return (
                              (r = v.sent),
                              (l = r.Button),
                              (v.next = 10),
                              Promise.resolve().then(e.bind(e, 89814))
                            );
                          case 10:
                            return (
                              (_ = v.sent),
                              (a = _.html2Pdf),
                              v.abrupt('return', {
                                default: function () {
                                  function T() {
                                    a(document.body, 'body');
                                  }
                                  function i() {
                                    a(document.getElementById('test'), 'test');
                                  }
                                  return d.createElement(
                                    'div',
                                    null,
                                    d.createElement(
                                      'div',
                                      { id: 'test' },
                                      '\u8BF7\u628A\u6211\u8F6C\u6210pdf',
                                    ),
                                    d.createElement(
                                      l,
                                      { type: 'primary', onClick: T },
                                      '\u628A\u9875\u9762\u8F6C\u6210pdf',
                                    ),
                                    d.createElement(
                                      l,
                                      { type: 'primary', onClick: i },
                                      '\u628Aid\u4E3Atest\u8F6C\u6210pdf',
                                    ),
                                  );
                                },
                              })
                            );
                          case 13:
                          case 'end':
                            return v.stop();
                        }
                    }, p);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-js-tools-file-html-2-pdf-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.jsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import { Button } from 'antd';
import { html2Pdf } from 'cwj-jstools';

export default function () {
  function download() {
    html2Pdf(document.body, 'body');
  }

  function exportPdf() {
    html2Pdf(document.getElementById('test'), 'test');
  }

  return (
    <div>
      <div id="test">\u8BF7\u628A\u6211\u8F6C\u6210pdf</div>
      <Button type="primary" onClick={download}>
        \u628A\u9875\u9762\u8F6C\u6210pdf
      </Button>
      <Button type="primary" onClick={exportPdf}>
        \u628Aid\u4E3Atest\u8F6C\u6210pdf
      </Button>
    </div>
  );
}`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                antd: { type: 'NPM', value: '5.20.3' },
                'cwj-jstools': { type: 'NPM', value: '1.0.5' },
              },
              entry: 'index.jsx',
            },
            context: { react: s || (s = e.t(f, 2)), antd: E, 'cwj-jstools': R },
            renderOpts: {
              compile: (function () {
                var p = j()(
                  o()().mark(function d() {
                    var r,
                      l = arguments;
                    return o()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return a.abrupt('return', (r = a.sent).default.apply(r, l));
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, d);
                  }),
                );
                function I() {
                  return p.apply(this, arguments);
                }
                return I;
              })(),
            },
          },
        };
    },
    55968: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(58636),
        o = {};
    },
    87760: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(20901),
        o = {};
    },
    97338: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(51962),
        o = {};
    },
    50263: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(44582),
        o = {};
    },
    22193: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(50460),
        o = {};
    },
    94245: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(51061),
        o = {};
    },
    50408: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(52959),
        o = {};
    },
    67890: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(21135),
        o = {};
    },
    27994: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(90083),
        o = {};
    },
    8975: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(47123),
        o = {};
    },
    53072: function (c, n, e) {
      e.r(n),
        e.d(n, {
          demos: function () {
            return o;
          },
        });
      var s = e(67294),
        t = e(3980),
        o = {};
    },
    83939: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return D;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(40794),
        j = e.n(h),
        f = e(67294),
        O = e(47986),
        E = e(42790),
        R = e(89814),
        D = {
          'docs-js-tools-window-copy-text-demo-0': {
            component: f.memo(
              f.lazy(
                j()(
                  o()().mark(function p() {
                    var I, d, r, l, _, a, u, v, m;
                    return o()().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (i.next = 2), Promise.resolve().then(e.t.bind(e, 67294, 19));
                          case 2:
                            return (
                              (I = i.sent),
                              (d = I.default),
                              (r = I.useRef),
                              (i.next = 7),
                              Promise.resolve().then(e.bind(e, 42790))
                            );
                          case 7:
                            return (
                              (l = i.sent),
                              (_ = l.Button),
                              (a = l.Input),
                              (u = l.message),
                              (i.next = 13),
                              Promise.resolve().then(e.bind(e, 89814))
                            );
                          case 13:
                            return (
                              (v = i.sent),
                              (m = v.copyText),
                              i.abrupt('return', {
                                default: function () {
                                  var P = r();
                                  function M() {
                                    var B = P.current.input.value;
                                    B &&
                                      (m(B),
                                      P.current.input.select(),
                                      u.success('\u590D\u5236\u6210\u529F'));
                                  }
                                  return d.createElement(
                                    a.Group,
                                    { compact: !0 },
                                    d.createElement(a, { ref: P }),
                                    d.createElement(_, { onClick: M }, '\u590D\u5236'),
                                  );
                                },
                              })
                            );
                          case 16:
                          case 'end':
                            return i.stop();
                        }
                    }, p);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-js-tools-window-copy-text-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState, useRef } from 'react';
import { Button, Input, message } from 'antd';
import { copyText } from 'cwj-jstools';

export default () => {
  const ref = useRef();

  function copy() {
    const value = ref.current.input.value;
    if (value) {
      copyText(value);
      ref.current.input.select();
      message.success('\u590D\u5236\u6210\u529F');
    }
  }

  return (
    <Input.Group compact>
      <Input ref={ref} />
      <Button onClick={copy}>\u590D\u5236</Button>
    </Input.Group>
  );
};`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                antd: { type: 'NPM', value: '5.20.3' },
                'cwj-jstools': { type: 'NPM', value: '1.0.5' },
              },
              entry: 'index.tsx',
            },
            context: { react: s || (s = e.t(f, 2)), antd: E, 'cwj-jstools': R },
            renderOpts: {
              compile: (function () {
                var p = j()(
                  o()().mark(function d() {
                    var r,
                      l = arguments;
                    return o()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return a.abrupt('return', (r = a.sent).default.apply(r, l));
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, d);
                  }),
                );
                function I() {
                  return p.apply(this, arguments);
                }
                return I;
              })(),
            },
          },
        };
    },
    14185: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return D;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(40794),
        j = e.n(h),
        f = e(67294),
        O = e(64324),
        E = e(42790),
        R = e(89814),
        D = {
          'docs-js-tools-window-full-screen-demo-0': {
            component: f.memo(
              f.lazy(
                j()(
                  o()().mark(function p() {
                    var I, d, r, l, _, a, u, v, m;
                    return o()().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (i.next = 2), Promise.resolve().then(e.t.bind(e, 67294, 19));
                          case 2:
                            return (
                              (I = i.sent),
                              (d = I.default),
                              (r = I.useRef),
                              (i.next = 7),
                              Promise.resolve().then(e.bind(e, 42790))
                            );
                          case 7:
                            return (
                              (l = i.sent),
                              (_ = l.Button),
                              (a = l.Space),
                              (i.next = 12),
                              Promise.resolve().then(e.bind(e, 89814))
                            );
                          case 12:
                            return (
                              (u = i.sent),
                              (v = u.launchFullscreen),
                              (m = u.exitFullscreen),
                              i.abrupt('return', {
                                default: function () {
                                  var P = r();
                                  return d.createElement(
                                    'div',
                                    { ref: P },
                                    d.createElement('div', { style: { height: '1200px' } }, ' '),
                                    d.createElement(
                                      a,
                                      null,
                                      d.createElement(
                                        _,
                                        {
                                          onClick: function () {
                                            return v();
                                          },
                                        },
                                        '\u5168\u5C4F',
                                      ),
                                      d.createElement(
                                        _,
                                        {
                                          onClick: function () {
                                            return v(P.current);
                                          },
                                        },
                                        '\u5C40\u90E8\u5168\u5C4F',
                                      ),
                                      d.createElement(
                                        _,
                                        {
                                          onClick: function () {
                                            return m(P.current);
                                          },
                                        },
                                        '\u9000\u51FA\u5168\u5C4F',
                                      ),
                                    ),
                                  );
                                },
                              })
                            );
                          case 16:
                          case 'end':
                            return i.stop();
                        }
                    }, p);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-js-tools-window-full-screen-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState, useRef } from 'react';
import { Button, Space } from 'antd';
import { launchFullscreen, exitFullscreen } from 'cwj-jstools';

export default () => {
  const ref = useRef();

  return (
    <div ref={ref}>
      <div style={{ height: '1200px' }}> </div>
      <Space>
        <Button onClick={() => launchFullscreen()}>\u5168\u5C4F</Button>
        <Button onClick={() => launchFullscreen(ref.current)}>\u5C40\u90E8\u5168\u5C4F</Button>
        <Button onClick={() => exitFullscreen(ref.current)}>\u9000\u51FA\u5168\u5C4F</Button>
      </Space>
    </div>
  );
};`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                antd: { type: 'NPM', value: '5.20.3' },
                'cwj-jstools': { type: 'NPM', value: '1.0.5' },
              },
              entry: 'index.tsx',
            },
            context: { react: s || (s = e.t(f, 2)), antd: E, 'cwj-jstools': R },
            renderOpts: {
              compile: (function () {
                var p = j()(
                  o()().mark(function d() {
                    var r,
                      l = arguments;
                    return o()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return a.abrupt('return', (r = a.sent).default.apply(r, l));
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, d);
                  }),
                );
                function I() {
                  return p.apply(this, arguments);
                }
                return I;
              })(),
            },
          },
        };
    },
    28727: function (c, n, e) {
      var s;
      e.r(n),
        e.d(n, {
          demos: function () {
            return D;
          },
        });
      var t = e(97983),
        o = e.n(t),
        h = e(40794),
        j = e.n(h),
        f = e(67294),
        O = e(64872),
        E = e(42790),
        R = e(89814),
        D = {
          'docs-js-tools-window-scroll-demo-0': {
            component: f.memo(
              f.lazy(
                j()(
                  o()().mark(function p() {
                    var I, d, r, l, _, a, u, v, m;
                    return o()().wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (i.next = 2), Promise.resolve().then(e.t.bind(e, 67294, 19));
                          case 2:
                            return (
                              (I = i.sent),
                              (d = I.default),
                              (r = I.useRef),
                              (i.next = 7),
                              Promise.resolve().then(e.bind(e, 42790))
                            );
                          case 7:
                            return (
                              (l = i.sent),
                              (_ = l.Button),
                              (a = l.Space),
                              (i.next = 12),
                              Promise.resolve().then(e.bind(e, 89814))
                            );
                          case 12:
                            return (
                              (u = i.sent),
                              (v = u.scrollToTop),
                              (m = u.scrollToElement),
                              i.abrupt('return', {
                                default: function () {
                                  var P = r();
                                  return d.createElement(
                                    'div',
                                    { ref: P },
                                    d.createElement('div', { style: { height: '1200px' } }, ' '),
                                    d.createElement(
                                      a,
                                      null,
                                      d.createElement(
                                        _,
                                        {
                                          onClick: function () {
                                            return v();
                                          },
                                        },
                                        '\u6EDA\u52A8\u5230\u9876\u90E8',
                                      ),
                                      d.createElement(
                                        _,
                                        {
                                          onClick: function () {
                                            return m(P.current);
                                          },
                                        },
                                        '\u67D0\u4E2A\u5143\u7D20\u6EDA\u52A8\u5230\u9876\u90E8',
                                      ),
                                    ),
                                  );
                                },
                              })
                            );
                          case 16:
                          case 'end':
                            return i.stop();
                        }
                    }, p);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'docs-js-tools-window-scroll-demo-0',
              refAtomIds: [],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState, useRef } from 'react';
import { Button, Space } from 'antd';
import { scrollToTop, scrollToElement } from 'cwj-jstools';

export default () => {
  const ref = useRef();
  return (
    <div ref={ref}>
      <div style={{ height: '1200px' }}> </div>
      <Space>
        <Button onClick={() => scrollToTop()}>\u6EDA\u52A8\u5230\u9876\u90E8</Button>
        <Button onClick={() => scrollToElement(ref.current)}>\u67D0\u4E2A\u5143\u7D20\u6EDA\u52A8\u5230\u9876\u90E8</Button>
      </Space>
    </div>
  );
};`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                antd: { type: 'NPM', value: '5.20.3' },
                'cwj-jstools': { type: 'NPM', value: '1.0.5' },
              },
              entry: 'index.tsx',
            },
            context: { react: s || (s = e.t(f, 2)), antd: E, 'cwj-jstools': R },
            renderOpts: {
              compile: (function () {
                var p = j()(
                  o()().mark(function d() {
                    var r,
                      l = arguments;
                    return o()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), e.e(335).then(e.bind(e, 37335));
                          case 2:
                            return a.abrupt('return', (r = a.sent).default.apply(r, l));
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, d);
                  }),
                );
                function I() {
                  return p.apply(this, arguments);
                }
                return I;
              })(),
            },
          },
        };
    },
    77888: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(3102);
      const t = [
        {
          value:
            'cwj-components \u662F\u5C01\u88C5\u4E86\u65E5\u5E38\u5F00\u53D1\u7528\u5230\u7684\u4E00\u4E9B\u7EC4\u4EF6',
          paraId: 0,
          tocIndex: 1,
        },
        {
          value: `"node": "^14.17.6"
"react": "^18.2.0"
"antd": "^4.24.10"
`,
          paraId: 1,
          tocIndex: 2,
        },
        { value: '\u901A\u8FC7 npm\uFF1A', paraId: 2, tocIndex: 3 },
        {
          value: `npm i  cwj-components -f
`,
          paraId: 3,
          tocIndex: 3,
        },
      ];
    },
    58369: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(32499);
      const t = [
        {
          value:
            '\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u4E3B\u9898\u914D\u7F6E',
          paraId: 0,
          tocIndex: 1,
        },
        { value: '\u901A\u8FC7 npm\uFF1A', paraId: 1, tocIndex: 2 },
        {
          value: `npm i @ cwj/components -f
`,
          paraId: 2,
          tocIndex: 2,
        },
        {
          value:
            'ThemeProvider \u4F7F\u7528 react \u7684 context \u7279\u6027\uFF0C\u53EA\u9700\u8981\u5728 \u{1F3A6} \u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548',
          paraId: 3,
          tocIndex: 3,
        },
        {
          value:
            '\u4F7F\u7528\u7684\u662F css Variable \u4FEE\u6539\u5168\u5C40\u4E3B\u9898\u8272\u7684\u65B9\u6848',
          paraId: 4,
          tocIndex: 4,
        },
      ];
    },
    38119: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(65281);
      const t = [
        { value: 'ahooks', paraId: 0, tocIndex: 0 },
        { value: 'antd', paraId: 0, tocIndex: 0 },
        { value: 'umi', paraId: 0, tocIndex: 0 },
      ];
    },
    80508: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(20954);
      const t = [
        { value: 'defineDirective', paraId: 0, tocIndex: 0 },
        {
          value:
            '\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\uFF0C\u6CE8\u518C\u6307\u4EE4\u3002\u4F8B\u5982\u6CE8\u518C\u4E00\u4E2A\u529F\u80FD\u6743\u9650\u6307\u4EE4\uFF1Aauth',
          paraId: 0,
          tocIndex: 0,
        },
      ];
    },
    29778: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(85012);
      const t = [
        {
          value:
            'cwj-directives \u662F\u57FA\u4E8E React \u6307\u4EE4\u5E93, \u5DF2\u6709\u5185\u7F6E\u6307\u4EE4',
          paraId: 0,
          tocIndex: 1,
        },
        { value: 'r-if', paraId: 1, tocIndex: 1 },
        { value: '\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6307\u4EE4\u3002', paraId: 0, tocIndex: 1 },
        {
          value: `"react": "^17.0.2"
`,
          paraId: 2,
          tocIndex: 2,
        },
        { value: '\u901A\u8FC7 npm\uFF1A', paraId: 3, tocIndex: 3 },
        {
          value: `npm i cwj-directives -f
`,
          paraId: 4,
          tocIndex: 3,
        },
      ];
    },
    1641: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(32665);
      const t = [
        { value: 'r-if', paraId: 0, tocIndex: 0 },
        {
          value:
            '\u6307\u4EE4\u7528\u4E8E\u5728\u8868\u8FBE\u5F0F\u4E3A false \u65F6\u79FB\u9664\u5143\u7D20\uFF0C\u4E3A true \u65F6\u4F1A\u6DFB\u52A0\u5143\u7D20\u5E76\u663E\u793A\u3002',
          paraId: 0,
          tocIndex: 0,
        },
      ];
    },
    74497: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(43712);
      const t = [
        { value: 'r-permission', paraId: 0, tocIndex: 0 },
        { value: '\u57FA\u4E8E', paraId: 0, tocIndex: 0 },
        { value: '\u884C\u6570\u7684\u6743\u9650\u7BA1\u7406', paraId: 0, tocIndex: 0 },
        {
          value:
            '\uFF0C\u5E9F\u5F03\u4E4B\u524D\u7684\u63D2\u69FD\u7684\u65B9\u5F0F\uFF0C\u6539\u4E3A\u76F4\u63A5\u4F5C\u7528\u4E8E\u5143\u7D20\u4E0A\uFF0C\u903B\u8F91\u6E05\u6670\uFF0C\u4EE3\u7801\u7B80\u6D01\u3002',
          paraId: 0,
          tocIndex: 0,
        },
      ];
    },
    9978: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(26211);
      const t = [
        {
          value:
            'cwj-components \u662F\u4E00\u4E2A\u9AD8\u6548\uFF0C\u5F3A\u5927\uFF0C\u5F00\u6E90\u7684\u524D\u7AEF\u4E1A\u52A1\u4EE3\u7801\u5DE5\u5177\u5305\uFF0C\u76EE\u6807\u975E\u5E38\u7B80\u5355\uFF0C\u5E0C\u671B\u5728\u9879\u76EE\u548C\u4EA7\u54C1\u4E0A\u5F00\u53D1',
          paraId: 0,
          tocIndex: 0,
        },
        { value: '\u66F4\u7B80\u5355', paraId: 0, tocIndex: 0 },
        { value: '\uFF0C', paraId: 0, tocIndex: 0 },
        { value: '\u66F4\u5FEB\u6377', paraId: 0, tocIndex: 0 },
        { value: '\uFF0C', paraId: 0, tocIndex: 0 },
        { value: '\u66F4\u7EDF\u4E00', paraId: 0, tocIndex: 0 },
        { value: '\u6709\u5982\u4E0B\u601D\u60F3\uFF1A', paraId: 1, tocIndex: 0 },
        { value: '\u5F00\u7BB1\u5373\u7528', paraId: 2, tocIndex: 0 },
        { value: '\u9AD8\u5EA6\u53EF\u66FF\u6362', paraId: 2, tocIndex: 0 },
        { value: '\u4FBF\u6377\u6027\u4E0E\u7075\u6D3B\u6027', paraId: 2, tocIndex: 0 },
        {
          value: `// \u7EAF\u51FD\u6570
npm i cwj-jstools
// react \u6307\u4EE4\u5E93
npm i cwj-directives
// \u7EC4\u4EF6\u5E93
npm i cwj-components

`,
          paraId: 3,
          tocIndex: 1,
        },
      ];
    },
    51446: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(68537);
      const t = [{ value: '*CAOWENJING', paraId: 0, tocIndex: 2 }];
    },
    2918: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(62042);
      const t = [
        {
          value: "deepSearch(data, condition, [childrenKey = 'children'])",
          paraId: 0,
          tocIndex: 0,
        },
        {
          value:
            '\u6839\u636E\u6761\u4EF6\u5BF9\u6811\u5F62\u6570\u636E\u8FDB\u884C\u641C\u7D22\uFF0C\u5E76\u8FD4\u56DE\u67E5\u627E\u5230\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\u548C\u4ED6\u7684\u8DEF\u5F84',
          paraId: 1,
          tocIndex: 0,
        },
        { value: '1.', paraId: 2, tocIndex: 1 },
        { value: 'data', paraId: 2, tocIndex: 1 },
        {
          value: '(object | array)\uFF1A\u8981\u641C\u7D22\u7684\u6570\u636E\u6E90',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '2.', paraId: 3, tocIndex: 1 },
        { value: 'condition', paraId: 3, tocIndex: 1 },
        {
          value: '(object | function)\uFF1A\u641C\u7D22\u7684\u6761\u4EF6',
          paraId: 3,
          tocIndex: 1,
        },
        { value: '3.', paraId: 4, tocIndex: 1 },
        { value: "[childrenKey = 'children']", paraId: 4, tocIndex: 1 },
        { value: '(string)\uFF1A\u7236\u5B50\u5173\u8054\u5B57\u6BB5', paraId: 4, tocIndex: 1 },
        { value: '[item, itemPath]', paraId: 5, tocIndex: 2 },
        {
          value:
            '([T,T[]])\uFF1Aitem \u4E3A\u67E5\u627E\u5230\u7684\u6570\u636E\uFF0CitemPath \u662F\u6570\u636E\u7684\u8DEF\u5F84',
          paraId: 5,
          tocIndex: 2,
        },
        {
          value: `import { deepSearch } from 'cwj-jstools';

const list = [
  {
    id: '0',
    name: '0',
  },
  {
    id: '1',
    name: '1',
    children: [
      {
        id: '1-1',
        name: '1-1',
      },
    ],
  },
  {
    id: '2',
    name: '2',
    children: [
      {
        id: '2-1',
        name: '2-1',
      },
    ],
  },
];
const [item1, item1Path] = deepSearch(list, { id: '1-1' });
console.log(item1);
// => object for {id: '1-1',name: '1-1'}
console.log(item1Path);
// => array for [{id: '1',name: '1'}, {id: '1-1', name: '1-1'}]

const [item2, item2Path] = deepSearch(list, (data) => data.id === '2-1', 'children');
console.log(item2);
// => object for {id: '2-1',name: '2-1'}
console.log(item2Path);
// => array for [{id: '2',name: '2'}, {id: '2-1', name: '2-1'}]
`,
          paraId: 6,
          tocIndex: 2,
        },
      ];
    },
    22090: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(55889);
      const t = [
        {
          value: "deepSearchAll(data, condition, [childrenKey = 'children'])",
          paraId: 0,
          tocIndex: 0,
        },
        {
          value:
            '\u6839\u636E\u6761\u4EF6\u5BF9\u6811\u5F62\u6570\u636E\u8FDB\u884C\u641C\u7D22\uFF0C\u5E76\u8FD4\u56DE\u67E5\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u6240\u6709\u6570\u636E\u548C\u4ED6\u7684\u8DEF\u5F84',
          paraId: 1,
          tocIndex: 0,
        },
        { value: '1.', paraId: 2, tocIndex: 1 },
        { value: 'data', paraId: 2, tocIndex: 1 },
        {
          value: '(object | array)\uFF1A\u8981\u641C\u7D22\u7684\u6570\u636E\u6E90',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '2.', paraId: 3, tocIndex: 1 },
        { value: 'condition', paraId: 3, tocIndex: 1 },
        {
          value: '(object | function)\uFF1A\u641C\u7D22\u7684\u6761\u4EF6',
          paraId: 3,
          tocIndex: 1,
        },
        { value: '3.', paraId: 4, tocIndex: 1 },
        { value: "[childrenKey = 'children']", paraId: 4, tocIndex: 1 },
        { value: '(string)\uFF1A\u7236\u5B50\u5173\u8054\u5B57\u6BB5', paraId: 4, tocIndex: 1 },
        { value: '[item, itemPath][]', paraId: 5, tocIndex: 2 },
        {
          value:
            '([T,T[]][])\uFF1Aitem \u4E3A\u67E5\u627E\u5230\u7684\u6570\u636E\uFF0CitemPath \u662F\u6570\u636E\u7684\u8DEF\u5F84',
          paraId: 5,
          tocIndex: 2,
        },
        {
          value: `import { deepSearchAll } from  'cwj-jstools';

const list = [
  {
    id: '0',
    name: '0',
  },
  {
    id: '1',
    name: '1',
    children: [
      {
        id: '1-1',
        name: '1-1',
      },
    ],
  },
  {
    id: '2',
    name: '2',
    children: [
      {
        id: '2-1',
        name: '2-1',
      },
    ],
  },
];
const items = deepSearchAll(list, () => data.name.includes('-1')));
console.log(items);
`,
          paraId: 6,
          tocIndex: 2,
        },
      ];
    },
    45179: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(5976);
      const t = [
        { value: 'uniqBy(list, key)', paraId: 0, tocIndex: 0 },
        {
          value: '\u6839\u636E key \u5BF9\u6570\u7EC4\u8FDB\u884C\u53BB\u91CD\u5904\u7406',
          paraId: 1,
          tocIndex: 0,
        },
        { value: '1.', paraId: 2, tocIndex: 1 },
        { value: 'data', paraId: 2, tocIndex: 1 },
        { value: '(array)\uFF1A\u6570\u636E\u6E90', paraId: 2, tocIndex: 1 },
        { value: '2.', paraId: 3, tocIndex: 1 },
        { value: 'key', paraId: 3, tocIndex: 1 },
        { value: '([string])\uFF1Akey', paraId: 3, tocIndex: 1 },
        {
          value: `import { uniqBy } from 'cwj-jstools';

const list = [
  { value: '1', label: '1' },
  { value: '1', label: '1' },
  { value: '2', label: '1' },
];
const list2 = [1, 1, 1, 12, 2, 2, 3, 3, 3, 4];

const uList = uniqBy(list, 'value');
console.log(uList);
// => array for [ { value: '1', label: '1' },{ value: '2', label: '1' }]

const uList2 = uniqBy(list2);
console.log(uList2);
// => array for [1, 12, 2, 3, 4]
`,
          paraId: 4,
          tocIndex: 1,
        },
      ];
    },
    79464: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(32051);
      const t = [
        {
          value:
            '\u6DF1\u62F7\u8D1D\uFF0C\u4FEE\u6539\u62F7\u8D1D\u540E\u7684\u6570\u636E\u5E76\u4E0D\u4F1A\u5F71\u54CD\u539F\u59CB\u6570\u636E',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: `import { clone } from 'cwj-jstools';

const obj1 = { name: '\u5C0F\u654F' };
const obj2 = clone(obj1);
console.log(obj2);
// => object for {name: '\u5C0F\u654F'}

const arr1 = [{ name: '\u5C0F\u660E' }];
const arr2 = clone(arr1);
arr2[0].name = '\u5C0F\u4E3D';
console.log(arr1);
// => array for [{name: '\u5C0F\u660E'}]
console.log(arr2);
// => array for [{name: '\u5C0F\u4E3D'}]
`,
          paraId: 1,
          tocIndex: 0,
        },
      ];
    },
    11578: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(45211);
      const t = [
        {
          value:
            '\u5DE5\u5177\u96C6\u7528\u5230\u7684\u4E00\u4E9B\u57FA\u672C\u7C7B\u578B\u5224\u65AD',
          paraId: 0,
          tocIndex: 0,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u5B57\u7B26\u4E32', paraId: 1, tocIndex: 1 },
        {
          value: `import { isString } from 'cwj-jstools';

console.log(isString('\u5C0F\u660E'));
// => true
`,
          paraId: 2,
          tocIndex: 1,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u6570\u7EC4', paraId: 3, tocIndex: 2 },
        {
          value: `import { isArray } from 'cwj-jstools';

console.log(isArray([]));
// => true
`,
          paraId: 4,
          tocIndex: 2,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u65E5\u671F', paraId: 5, tocIndex: 3 },
        {
          value: `import { isDate } from 'cwj-jstools';

const date = new Date();
console.log(isDate(date));
// => true
`,
          paraId: 6,
          tocIndex: 3,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u666E\u901A\u5BF9\u8C61', paraId: 7, tocIndex: 4 },
        {
          value: `import { isObject } from 'cwj-jstools';

console.log(isObject({ name: '\u5C0F\u660E' }));
// => true
console.log(isObject([1]));
// => false
`,
          paraId: 8,
          tocIndex: 4,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u6B63\u5219', paraId: 9, tocIndex: 5 },
        {
          value: `import { isRegExp } from 'cwj-jstools';

console.log(isRegExp(/a-z/));
// => true
`,
          paraId: 10,
          tocIndex: 5,
        },
      ];
    },
    91163: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(10563);
      const t = [
        {
          value:
            '\u901A\u8FC7 localStorage \u628A\u6570\u636E\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u5728\u539F\u6709\u7684\u57FA\u7840\u4E0A\u5BF9\u5B58\u5165\u7684\u6570\u636E\u8FDB\u884C\u7EDF\u4E00\u5904\u7406\uFF0C\u4E0D\u9700\u8981\u7528\u6237\u5BF9\u5B58\u5165\u6570\u636E\u683C\u5F0F\u7684\u5355\u72EC\u5904\u7406\u3002\u540C\u65F6\u589E\u52A0\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u529F\u80FD',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: `import { localCache } from 'cwj-jstools';

localCache.setItem('info', { id: 1, age: 10 }, true, 2000); // 2s\u540E\u8FC7\u671F
console.log(localCache.getItem('info', true));
// => object for { id: 1, age: 10 }

setTimeout(() => {
  console.log(localCache.getItem('info', true));
  // => null
}, 3000);
`,
          paraId: 1,
          tocIndex: 0,
        },
        { value: '\u540D\u79F0', paraId: 2, tocIndex: 1 },
        { value: '\u8BF4\u660E', paraId: 2, tocIndex: 1 },
        { value: '\u7C7B\u578B', paraId: 2, tocIndex: 1 },
        { value: 'setItem', paraId: 2, tocIndex: 1 },
        {
          value: '\u589E\u52A0\u4E00\u4E2A\u952E\u503C\u5BF9\u5230 localStorage \u4E2D',
          paraId: 2,
          tocIndex: 1,
        },
        {
          value: '(key: string, value: any, isStringify?: boolean, expires?: number) => void',
          paraId: 2,
          tocIndex: 1,
        },
        { value: 'getItem', paraId: 2, tocIndex: 1 },
        {
          value: '\u4ECE localStorage \u4E2D\u67E5\u8BE2\u6307\u5B9A key \u7684\u503C',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '(key: string, isParse?: boolean) => any | null', paraId: 2, tocIndex: 1 },
        { value: 'removeItem', paraId: 2, tocIndex: 1 },
        {
          value: '\u4ECE localStorage \u4E2D\u5220\u9664\u6307\u5B9A\u7684\u952E\u503C\u5BF9',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '(key: string) => void', paraId: 2, tocIndex: 1 },
        { value: 'clear', paraId: 2, tocIndex: 1 },
        {
          value: '\u6E05\u7A7A localStorage \u4E2D\u6240\u6709\u952E\u503C\u5BF9',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '() => void', paraId: 2, tocIndex: 1 },
        { value: 'key', paraId: 2, tocIndex: 1 },
        {
          value:
            '\u4F20\u5165\u4E00\u4E2A\u6570\u5B57 n\uFF0C\u7528\u4E8E\u8FD4\u56DE\u6307\u5B9A\u7B2C n \u4E2A\u952E\u7684\u540D\u5B57',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '(index: number) => string | null', paraId: 2, tocIndex: 1 },
        { value: 'length', paraId: 2, tocIndex: 1 },
        {
          value: '\u8FD4\u56DE localStorage \u4E2D\u7684\u952E\u503C\u5BF9\u7684\u6570\u76EE',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '() => number', paraId: 2, tocIndex: 1 },
      ];
    },
    92948: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(96801);
      const t = [
        {
          value:
            '\u901A\u8FC7 sessionStorage \u628A\u6570\u636E\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u5728\u539F\u6709\u7684\u57FA\u7840\u4E0A\u5BF9\u5B58\u5165\u7684\u6570\u636E\u8FDB\u884C\u7EDF\u4E00\u5904\u7406\uFF0C\u4E0D\u9700\u8981\u7528\u6237\u5BF9\u5B58\u5165\u6570\u636E\u683C\u5F0F\u7684\u5355\u72EC\u5904\u7406\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: `import { sessionCache } from 'cwj-jstools';

sessionCache.setItem('info', { id: 1, age: 10 }\uFF0C true);
console.log(localCache.getItem('info', true));
// => object for { id: 1, age: 10 }
`,
          paraId: 1,
          tocIndex: 0,
        },
        { value: '\u540D\u79F0', paraId: 2, tocIndex: 1 },
        { value: '\u8BF4\u660E', paraId: 2, tocIndex: 1 },
        { value: '\u7C7B\u578B', paraId: 2, tocIndex: 1 },
        { value: 'setItem', paraId: 2, tocIndex: 1 },
        {
          value: '\u589E\u52A0\u4E00\u4E2A\u952E\u503C\u5BF9\u5230 localStorage \u4E2D',
          paraId: 2,
          tocIndex: 1,
        },
        {
          value: '(key: string, value: any, isStringify?: boolean) => void',
          paraId: 2,
          tocIndex: 1,
        },
        { value: 'getItem', paraId: 2, tocIndex: 1 },
        {
          value: '\u4ECE localStorage \u4E2D\u67E5\u8BE2\u6307\u5B9A key \u7684\u503C',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '(key: string, isParse?: boolean) => any | null', paraId: 2, tocIndex: 1 },
        { value: 'removeItem', paraId: 2, tocIndex: 1 },
        {
          value: '\u4ECE localStorage \u4E2D\u5220\u9664\u6307\u5B9A\u7684\u952E\u503C\u5BF9',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '(key: string) => void', paraId: 2, tocIndex: 1 },
        { value: 'clear', paraId: 2, tocIndex: 1 },
        {
          value: '\u6E05\u7A7A localStorage \u4E2D\u6240\u6709\u952E\u503C\u5BF9',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '() => void', paraId: 2, tocIndex: 1 },
        { value: 'key', paraId: 2, tocIndex: 1 },
        {
          value:
            '\u4F20\u5165\u4E00\u4E2A\u6570\u5B57 n\uFF0C\u7528\u4E8E\u8FD4\u56DE\u6307\u5B9A\u7B2C n \u4E2A\u952E\u7684\u540D\u5B57',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '(index: number) => string | null', paraId: 2, tocIndex: 1 },
        { value: 'length', paraId: 2, tocIndex: 1 },
        {
          value: '\u8FD4\u56DE localStorage \u4E2D\u7684\u952E\u503C\u5BF9\u7684\u6570\u76EE',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '() => number', paraId: 2, tocIndex: 1 },
      ];
    },
    12308: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(1143);
      const t = [
        {
          value:
            '\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u5B83\u5B9A\u4E49\u4E86\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u8BA9\u591A\u4E2A\u8BA2\u9605\u8005\u5BF9\u8C61\u540C\u65F6\u76D1\u542C\u67D0\u4E00\u4E2A\u4E3B\u9898\u5BF9\u8C61\uFF0C\u5F53\u4E3B\u9898\u5BF9\u8C61\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5B83\u4F1A\u901A\u77E5\u6240\u6709\u8BA2\u9605\u8005\u5BF9\u8C61\uFF0C\u4F7F\u5B83\u4EEC\u80FD\u591F\u81EA\u52A8\u66F4\u65B0\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        { value: '\u540D\u79F0', paraId: 1, tocIndex: 1 },
        { value: '\u8BF4\u660E', paraId: 1, tocIndex: 1 },
        { value: '\u7C7B\u578B', paraId: 1, tocIndex: 1 },
        { value: 'on', paraId: 1, tocIndex: 1 },
        {
          value:
            '\u5B89\u88C5\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5B83\u63A5\u53D7\u76EE\u6807\u4E8B\u4EF6\u540D\u548C\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '(eventName: string, cb: Function) => void', paraId: 1, tocIndex: 1 },
        { value: 'onLatest', paraId: 1, tocIndex: 1 },
        { value: '\u76D1\u542C\u6700\u65B0\u7684\u53D8\u5316', paraId: 1, tocIndex: 1 },
        { value: '(eventName: string, cb: Function) => void', paraId: 1, tocIndex: 1 },
        { value: 'emit', paraId: 1, tocIndex: 1 },
        {
          value:
            '\u89E6\u53D1\u76EE\u6807\u4E8B\u4EF6\uFF0C\u5B83\u63A5\u53D7\u4E8B\u4EF6\u540D\u548C\u76D1\u542C\u51FD\u6570\u5165\u53C2\u4F5C\u4E3A\u53C2\u6570',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '(eventName: string, ...args: any) => void', paraId: 1, tocIndex: 1 },
        { value: 'off', paraId: 1, tocIndex: 1 },
        {
          value:
            '\u79FB\u9664\u67D0\u4E2A\u4E8B\u4EF6\u56DE\u8C03\u961F\u5217\u91CC\u7684\u6307\u5B9A\u56DE\u8C03\u51FD\u6570',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '(eventName: string, cb: Function) => void', paraId: 1, tocIndex: 1 },
        { value: 'once', paraId: 1, tocIndex: 1 },
        {
          value: '\u4E3A\u4E8B\u4EF6\u6CE8\u518C\u5355\u6B21\u76D1\u542C\u5668',
          paraId: 1,
          tocIndex: 1,
        },
        { value: '(eventName: string, cb: Function) => void', paraId: 1, tocIndex: 1 },
      ];
    },
    43924: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(153);
      const t = [];
    },
    1790: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(9222);
      const t = [
        { value: 'streamDownload(data, [name], [type])', paraId: 0, tocIndex: 0 },
        { value: '\u6D41\u6587\u4EF6\u4E0B\u8F7D\u3002', paraId: 1, tocIndex: 0 },
        { value: '1.', paraId: 2, tocIndex: 1 },
        { value: 'data', paraId: 2, tocIndex: 1 },
        { value: '(blob)\uFF1A\u8981\u4E0B\u8F7D\u7684\u6587\u4EF6', paraId: 2, tocIndex: 1 },
        { value: '2.', paraId: 3, tocIndex: 1 },
        { value: '[name]', paraId: 3, tocIndex: 1 },
        { value: '(string)\uFF1A\u6587\u4EF6\u7684\u540D\u5B57', paraId: 3, tocIndex: 1 },
        { value: '3.', paraId: 4, tocIndex: 1 },
        { value: '[type]', paraId: 4, tocIndex: 1 },
        { value: '(string)\uFF1A\u6587\u4EF6\u7684\u7C7B\u578B', paraId: 4, tocIndex: 1 },
        {
          value: `import { streamDownload } from 'cwj-jstools';

xhr.get('/xxxx').then((res) => {
  streamDownload(res.data, 'test.pdf');
});
`,
          paraId: 5,
          tocIndex: 1,
        },
      ];
    },
    99292: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(38028);
      const t = [
        { value: 'html2Pdf(dom, name)', paraId: 0, tocIndex: 0 },
        {
          value: '\u628A html \u8F6C\u6362\u4E3A pdf \u5E76\u4E0B\u8F7D\u3002',
          paraId: 1,
          tocIndex: 0,
        },
        { value: '1.', paraId: 2, tocIndex: 1 },
        { value: 'dom', paraId: 2, tocIndex: 1 },
        { value: '\uFF1AHTMLElement', paraId: 2, tocIndex: 1 },
        { value: '2.', paraId: 3, tocIndex: 1 },
        { value: 'name', paraId: 3, tocIndex: 1 },
        { value: '(string)\uFF1A\u6587\u4EF6\u7684\u540D\u5B57', paraId: 3, tocIndex: 1 },
      ];
    },
    16328: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(58636);
      const t = [
        {
          value:
            'cwj-jstools \u662F\u4E00\u7EC4\u65E5\u5E38\u666E\u901A\u4F7F\u7528\u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u548C\u4F20\u7EDF\u7684\u5DE5\u5177\u51FD\u6570\u76F8\u6BD4\u66F4\u8D34\u8FD1\u4E1A\u52A1\uFF0C\u540C\u65F6\u652F\u6301 ts',
          paraId: 0,
          tocIndex: 1,
        },
        { value: '\u901A\u8FC7 npm\uFF1A', paraId: 1, tocIndex: 2 },
        {
          value: `npm i cwj-jstools -f
`,
          paraId: 2,
          tocIndex: 2,
        },
      ];
    },
    85377: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(20901);
      const t = [
        { value: '\u5C06 object \u8F6C\u6362\u6210 formData', paraId: 0, tocIndex: 0 },
        {
          value: `import { obj2FormData } from 'cwj-jstools';

const formData = obj2FormData({ name: '\u5C0F\u660E', age: 20 });
console.log(formData.get('name'));
// => \u5C0F\u660E
console.log(formData.get('age'));
// => 20
`,
          paraId: 1,
          tocIndex: 0,
        },
      ];
    },
    13932: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(51962);
      const t = [
        {
          value:
            '\u521B\u5EFA\u4E00\u4E2A\u4ECE object \u4E2D\u672A\u9009\u4E2D\u7684\u5C5E\u6027\u7684\u5BF9\u8C61\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: `import { omit } from 'cwj-jstools';

const data = { name: '\u5C0F\u660E', age: 20 };
console.log(omit(data, ['name']));
// => objects for { age: 20 }
`,
          paraId: 1,
          tocIndex: 0,
        },
      ];
    },
    23336: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(44582);
      const t = [
        {
          value:
            '\u521B\u5EFA\u4E00\u4E2A\u4ECE object \u4E2D\u9009\u4E2D\u7684\u5C5E\u6027\u7684\u5BF9\u8C61\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: `import { pick } from 'cwj-jstools';

const data = { name: '\u5C0F\u660E', age: 20 };
console.log(pick(data, ['name']));
// => objects for { name: '\u5C0F\u660E' }
`,
          paraId: 1,
          tocIndex: 0,
        },
      ];
    },
    10605: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(50460);
      const t = [
        { value: 'formatFileSize(fileSize, [decimal], [unit])', paraId: 0, tocIndex: 0 },
        {
          value:
            '\u683C\u5F0F\u5316\u6587\u4EF6\u5927\u5C0F\uFF0C\u5C06\u5B57\u8282\u4E3A\u5355\u4F4D\u7684\u5927\u5C0F\u62FC\u4E0A\u5355\u4F4D',
          paraId: 1,
          tocIndex: 0,
        },
        { value: '1.', paraId: 2, tocIndex: 1 },
        { value: 'fileSize', paraId: 2, tocIndex: 1 },
        {
          value:
            ' (number)\uFF1A\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D\u9ED8\u8BA4\u662F unit \u5355\u4F4D\u6570\u7EC4\u7B2C\u4E00\u4E2A',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '2.', paraId: 3, tocIndex: 1 },
        { value: '[decimal = 0]', paraId: 3, tocIndex: 1 },
        {
          value: '(number)\uFF1A\u4FDD\u7559\u7684\u5C0F\u6570\u4F4D\u6570',
          paraId: 3,
          tocIndex: 1,
        },
        { value: '3.', paraId: 4, tocIndex: 1 },
        { value: '[unit = ["Bytes", "KB", "MB", "GB", "TB"]]', paraId: 4, tocIndex: 1 },
        {
          value:
            '(string[])\uFF1A\u683C\u5F0F\u5316\u7684\u5355\u4F4D\u6570\u7EC4\uFF0C\u6309\u4ECE\u5C0F\u5230\u5927\u7684\u987A\u5E8F',
          paraId: 4,
          tocIndex: 1,
        },
        {
          value: `import { formatFileSize } from 'cwj-jstools';

const num = 1000;
const num1 = 2048;
const num2 = 1048576;

console.log(formatFileSize(num));
// => '1000Bytes'

console.log(formatFileSize(num1));
// => '2KB'

console.log(formatFileSize(num1, 2, ['KB', 'MB', 'GB', 'TB']));
// => '2.00MB'

console.log(formatFileSize(num2));
// => '1MB'
`,
          paraId: 5,
          tocIndex: 1,
        },
      ];
    },
    85074: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(51061);
      const t = [
        {
          value:
            '\u89E3\u6790 url \u4E2D\u7684\u53C2\u6570\uFF0C\u5F97\u5230\u5BF9\u8C61\u5F62\u5F0F key:value',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: `import { parseUrlParams } from 'cwj-jstools';
console.log(
  parseUrlParams(
    'https://www.baidu.com/?username=zhangsan&id=888&id=666&city=%E5%8C%97%E4%BA%AC&checked',
  ),
);
// => objects for {checked: undefined,city: '\u5317\u4EAC',id: [888, 666],username: 'zhangsan'}
`,
          paraId: 1,
          tocIndex: 0,
        },
      ];
    },
    12957: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(52959);
      const t = [
        { value: '\u83B7\u53D6\u968F\u673A\u989C\u8272', paraId: 0, tocIndex: 0 },
        {
          value: `import { randomColor } from 'cwj-jstools';

console.log(randomColor());
// => #feb589

console.log(randomColor());
// => #f605f4
`,
          paraId: 1,
          tocIndex: 0,
        },
      ];
    },
    3048: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(21135);
      const t = [
        { value: 'thousandFormat(num, [fixed], [symbol])', paraId: 0, tocIndex: 0 },
        {
          value:
            '\u5C06\u6570\u503C\u6216\u5B57\u7B26\u4E32\u683C\u5F0F\u5316\u4E3A\u5343\u5206\u4F4D\u5B57\u7B26\u4E32',
          paraId: 1,
          tocIndex: 0,
        },
        { value: '1.', paraId: 2, tocIndex: 1 },
        { value: 'num', paraId: 2, tocIndex: 1 },
        {
          value: ' (number | string)\uFF1A\u8981\u683C\u5F0F\u5316\u7684\u6570\u636E',
          paraId: 2,
          tocIndex: 1,
        },
        { value: '2.', paraId: 3, tocIndex: 1 },
        { value: '[fixed = 2]', paraId: 3, tocIndex: 1 },
        { value: '(number)\uFF1A\u4FDD\u7559\u5C0F\u6570\u4F4D\u6570', paraId: 3, tocIndex: 1 },
        { value: '3.', paraId: 4, tocIndex: 1 },
        { value: "[symbol = ',']", paraId: 4, tocIndex: 1 },
        { value: '(string)\uFF1A\u5206\u5272\u7684\u7B26\u53F7', paraId: 4, tocIndex: 1 },
        {
          value: `import { thousandFormat } from 'cwj-jstools';

let num = 123456789;
console.log(thousandFormat(num));
// => '123,456,789.00'

let str = '100000000000';
console.log(thousandFormat(str));
// => '100,000,000,000.00'
`,
          paraId: 5,
          tocIndex: 1,
        },
      ];
    },
    6907: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(90083);
      const t = [
        {
          value:
            '\u524D\u7AEF\u663E\u793A\u4FE1\u606F\u65F6\uFF0C\u5F80\u5F80\u8981\u5BF9\u8EAB\u4EFD\u8BC1\u53F7\uFF0C\u624B\u673A\u53F7\uFF0C\u5730\u5740\u7B49\u8FD9\u7C7B\u654F\u611F\u4FE1\u606F\u8FDB\u884C\u90E8\u5206\u9690\u85CF\u663E\u793A\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        { value: '\u5BF9\u59D3\u540D\u8FDB\u884C\u8131\u654F\u5904\u7406', paraId: 1, tocIndex: 1 },
        {
          value: `import { tmName } from 'cwj-jstools';

console.log(tmName('\u5C0F\u660E'));
// => \u5C0F*
console.log(tmName('\u97E9\u6885\u6885'));
// => \u97E9*\u6885

console.log(tmName('\u897F\u95E8\u5439\u96EA'));
// => \u897F**\u96EA

console.log(tmName('\u5965\u65AF\u7279\u6D1B\u592B\u65AF\u57FA'));
// => \u5965**\u6D1B\u592B\u65AF\u57FA
`,
          paraId: 2,
          tocIndex: 1,
        },
        {
          value: '\u5BF9\u8EAB\u4EFD\u8BC1\u53F7\u8FDB\u884C\u8131\u654F\u5904\u7406',
          paraId: 3,
          tocIndex: 2,
        },
        {
          value: `import { tmIdCard } from 'cwj-jstools';

console.log(tmIdCard('512328199001012228'));
// => 5123************28
`,
          paraId: 4,
          tocIndex: 2,
        },
        {
          value: '\u5BF9\u7535\u8BDD\u53F7\u8FDB\u884C\u8131\u654F\u5904\u7406',
          paraId: 5,
          tocIndex: 3,
        },
        {
          value: `import { tmPhone } from 'cwj-jstools';

console.log(tmPhone('13612341234'));
// => 136****1234

console.log(tmPhone('88886666'));
// => 88****66
`,
          paraId: 6,
          tocIndex: 3,
        },
        { value: '\u5BF9\u90AE\u7BB1\u8FDB\u884C\u8131\u654F\u5904\u7406', paraId: 7, tocIndex: 4 },
        {
          value: `import { tmEmail } from 'cwj-jstools';

console.log(tmEmail('123456@qq.com'));
// => 123***@qq.com
`,
          paraId: 8,
          tocIndex: 4,
        },
      ];
    },
    76193: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(47123);
      const t = [
        {
          value:
            'uuid \u662F\u4E00\u79CD\u7531\u7B97\u6CD5\u751F\u6210\u7684\u4E8C\u8FDB\u5236\u957F\u5EA6\u4E3A 128 \u4F4D\u7684\u6570\u5B57\u6807\u8BC6\u7B26\u3002uuid \u7684\u683C\u5F0F\u4E3A\u201Cxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\u201D\uFF0C\u5176\u4E2D\u7684 x \u662F 0-9 \u6216 a-f \u8303\u56F4\u5185\u7684\u4E00\u4E2A 32 \u4F4D\u5341\u516D\u8FDB\u5236\u6570\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: `import { uuid } from 'cwj-jstools';

console.log(uuid());
// => 9d8eabe1-e8a6-4f1c-a1b2-e66abd159add

console.log(uuid());
// => 4df38d26-5d67-496b-a992-ccfb896753ad
`,
          paraId: 1,
          tocIndex: 0,
        },
      ];
    },
    80962: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(3980);
      const t = [
        { value: '\u5E38\u7528\u7684\u4E00\u4E9B\u9A8C\u8BC1', paraId: 0, tocIndex: 0 },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u90AE\u7BB1', paraId: 1, tocIndex: 1 },
        {
          value: `import { isEmail } from 'cwj-jstools';

console.log(isEmail('zhangsan-001@gmail.com'));
// => true
`,
          paraId: 2,
          tocIndex: 1,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u8EAB\u4EFD\u8BC1\u53F7', paraId: 3, tocIndex: 2 },
        {
          value: `import { isIdCard } from 'cwj-jstools';

console.log(isIdCard('11010519491231002X'));
// => true

console.log(isIdCard('01010519491231002X'));
// => false
`,
          paraId: 4,
          tocIndex: 2,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u624B\u673A\u53F7', paraId: 5, tocIndex: 3 },
        {
          value: `import { isMobilePhone } from 'cwj-jstools';

console.log(isMobilePhone('13612345678'));
// => false

console.log(isMobilePhone('03612345678'));
// => false
`,
          paraId: 6,
          tocIndex: 3,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u5EA7\u673A\u53F7', paraId: 7, tocIndex: 4 },
        {
          value: `import { isTelePhone } from 'cwj-jstools';

console.log(isTelePhone('1234567'));
// => true

console.log(isTelePhone('023-1234567'));
// => true

console.log(isTelePhone('0231-12345678'));
// => true

console.log(isTelePhone('02345-12345678'));
// => false
`,
          paraId: 8,
          tocIndex: 4,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F IP', paraId: 9, tocIndex: 5 },
        {
          value: `import { isIp } from 'cwj-jstools';

console.log(isIp('192.168.2.104'));
// => true
`,
          paraId: 10,
          tocIndex: 5,
        },
        { value: '\u5224\u65AD\u662F\u5426\u662F\u7AEF\u53E3', paraId: 11, tocIndex: 6 },
        {
          value: `import { isPort } from 'cwj-jstools';

console.log(isPort('65535'));
// => true

console.log(isPort('0'));
// => true
`,
          paraId: 12,
          tocIndex: 6,
        },
      ];
    },
    96185: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(47986);
      const t = [];
    },
    28764: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(64324);
      const t = [
        { value: '\u6D4F\u89C8\u5668\u5168\u5C4F\u64CD\u4F5C\uFF0C', paraId: 0, tocIndex: 0 },
        { value: 'launchFullscreen', paraId: 0, tocIndex: 0 },
        { value: ' \u5168\u5C4F ', paraId: 0, tocIndex: 0 },
        { value: 'exitFullscreen', paraId: 0, tocIndex: 0 },
        { value: ' \u9000\u51FA\u5168\u5C4F', paraId: 0, tocIndex: 0 },
      ];
    },
    82769: function (c, n, e) {
      e.r(n),
        e.d(n, {
          texts: function () {
            return t;
          },
        });
      var s = e(64872);
      const t = [
        { value: '\u6D4F\u89C8\u5668\u7684\u6EDA\u52A8\u64CD\u4F5C\uFF0C', paraId: 0, tocIndex: 0 },
        { value: 'scrollToTop', paraId: 0, tocIndex: 0 },
        { value: ' \u6EDA\u52A8\u5230\u9876\u90E8\uFF0C ', paraId: 0, tocIndex: 0 },
        { value: 'scrollToElement', paraId: 0, tocIndex: 0 },
        {
          value: ' \u67D0\u4E2A\u5143\u7D20\u6EDA\u52A8\u5230\u9876\u90E8',
          paraId: 0,
          tocIndex: 0,
        },
      ];
    },
  },
]);
