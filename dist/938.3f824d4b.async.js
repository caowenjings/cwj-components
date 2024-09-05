(self.webpackChunkcwj_components = self.webpackChunkcwj_components || []).push([
  [938],
  {
    75: function (d, S, n) {
      var l = n(34155);
      (function () {
        var f, v, g, y, O, x;
        typeof performance != 'undefined' && performance !== null && performance.now
          ? (d.exports = function () {
              return performance.now();
            })
          : typeof l != 'undefined' && l !== null && l.hrtime
          ? ((d.exports = function () {
              return (f() - O) / 1e6;
            }),
            (v = l.hrtime),
            (f = function () {
              var b;
              return (b = v()), b[0] * 1e9 + b[1];
            }),
            (y = f()),
            (x = l.uptime() * 1e9),
            (O = y - x))
          : Date.now
          ? ((d.exports = function () {
              return Date.now() - g;
            }),
            (g = Date.now()))
          : ((d.exports = function () {
              return new Date().getTime() - g;
            }),
            (g = new Date().getTime()));
      }).call(this);
    },
    54087: function (d, S, n) {
      for (
        var l = n(75),
          f = typeof window == 'undefined' ? n.g : window,
          v = ['moz', 'webkit'],
          g = 'AnimationFrame',
          y = f['request' + g],
          O = f['cancel' + g] || f['cancelRequest' + g],
          x = 0;
        !y && x < v.length;
        x++
      )
        (y = f[v[x] + 'Request' + g]),
          (O = f[v[x] + 'Cancel' + g] || f[v[x] + 'CancelRequest' + g]);
      if (!y || !O) {
        var b = 0,
          C = 0,
          A = [],
          R = 1e3 / 60;
        (y = function (P) {
          if (A.length === 0) {
            var w = l(),
              I = Math.max(0, R - (w - b));
            (b = I + w),
              setTimeout(function () {
                var N = A.slice(0);
                A.length = 0;
                for (var B = 0; B < N.length; B++)
                  if (!N[B].cancelled)
                    try {
                      N[B].callback(b);
                    } catch (Y) {
                      setTimeout(function () {
                        throw Y;
                      }, 0);
                    }
              }, Math.round(I));
          }
          return A.push({ handle: ++C, callback: P, cancelled: !1 }), C;
        }),
          (O = function (P) {
            for (var w = 0; w < A.length; w++) A[w].handle === P && (A[w].cancelled = !0);
          });
      }
      (d.exports = function (P) {
        return y.call(f, P);
      }),
        (d.exports.cancel = function () {
          O.apply(f, arguments);
        }),
        (d.exports.polyfill = function (P) {
          P || (P = f), (P.requestAnimationFrame = y), (P.cancelAnimationFrame = O);
        });
    },
    26131: function (d) {
      d.exports = function (S) {
        (this.ok = !1),
          (this.alpha = 1),
          S.charAt(0) == '#' && (S = S.substr(1, 6)),
          (S = S.replace(/ /g, '')),
          (S = S.toLowerCase());
        var n = {
          aliceblue: 'f0f8ff',
          antiquewhite: 'faebd7',
          aqua: '00ffff',
          aquamarine: '7fffd4',
          azure: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '000000',
          blanchedalmond: 'ffebcd',
          blue: '0000ff',
          blueviolet: '8a2be2',
          brown: 'a52a2a',
          burlywood: 'deb887',
          cadetblue: '5f9ea0',
          chartreuse: '7fff00',
          chocolate: 'd2691e',
          coral: 'ff7f50',
          cornflowerblue: '6495ed',
          cornsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: '00ffff',
          darkblue: '00008b',
          darkcyan: '008b8b',
          darkgoldenrod: 'b8860b',
          darkgray: 'a9a9a9',
          darkgreen: '006400',
          darkkhaki: 'bdb76b',
          darkmagenta: '8b008b',
          darkolivegreen: '556b2f',
          darkorange: 'ff8c00',
          darkorchid: '9932cc',
          darkred: '8b0000',
          darksalmon: 'e9967a',
          darkseagreen: '8fbc8f',
          darkslateblue: '483d8b',
          darkslategray: '2f4f4f',
          darkturquoise: '00ced1',
          darkviolet: '9400d3',
          deeppink: 'ff1493',
          deepskyblue: '00bfff',
          dimgray: '696969',
          dodgerblue: '1e90ff',
          feldspar: 'd19275',
          firebrick: 'b22222',
          floralwhite: 'fffaf0',
          forestgreen: '228b22',
          fuchsia: 'ff00ff',
          gainsboro: 'dcdcdc',
          ghostwhite: 'f8f8ff',
          gold: 'ffd700',
          goldenrod: 'daa520',
          gray: '808080',
          green: '008000',
          greenyellow: 'adff2f',
          honeydew: 'f0fff0',
          hotpink: 'ff69b4',
          indianred: 'cd5c5c',
          indigo: '4b0082',
          ivory: 'fffff0',
          khaki: 'f0e68c',
          lavender: 'e6e6fa',
          lavenderblush: 'fff0f5',
          lawngreen: '7cfc00',
          lemonchiffon: 'fffacd',
          lightblue: 'add8e6',
          lightcoral: 'f08080',
          lightcyan: 'e0ffff',
          lightgoldenrodyellow: 'fafad2',
          lightgrey: 'd3d3d3',
          lightgreen: '90ee90',
          lightpink: 'ffb6c1',
          lightsalmon: 'ffa07a',
          lightseagreen: '20b2aa',
          lightskyblue: '87cefa',
          lightslateblue: '8470ff',
          lightslategray: '778899',
          lightsteelblue: 'b0c4de',
          lightyellow: 'ffffe0',
          lime: '00ff00',
          limegreen: '32cd32',
          linen: 'faf0e6',
          magenta: 'ff00ff',
          maroon: '800000',
          mediumaquamarine: '66cdaa',
          mediumblue: '0000cd',
          mediumorchid: 'ba55d3',
          mediumpurple: '9370d8',
          mediumseagreen: '3cb371',
          mediumslateblue: '7b68ee',
          mediumspringgreen: '00fa9a',
          mediumturquoise: '48d1cc',
          mediumvioletred: 'c71585',
          midnightblue: '191970',
          mintcream: 'f5fffa',
          mistyrose: 'ffe4e1',
          moccasin: 'ffe4b5',
          navajowhite: 'ffdead',
          navy: '000080',
          oldlace: 'fdf5e6',
          olive: '808000',
          olivedrab: '6b8e23',
          orange: 'ffa500',
          orangered: 'ff4500',
          orchid: 'da70d6',
          palegoldenrod: 'eee8aa',
          palegreen: '98fb98',
          paleturquoise: 'afeeee',
          palevioletred: 'd87093',
          papayawhip: 'ffefd5',
          peachpuff: 'ffdab9',
          peru: 'cd853f',
          pink: 'ffc0cb',
          plum: 'dda0dd',
          powderblue: 'b0e0e6',
          purple: '800080',
          rebeccapurple: '663399',
          red: 'ff0000',
          rosybrown: 'bc8f8f',
          royalblue: '4169e1',
          saddlebrown: '8b4513',
          salmon: 'fa8072',
          sandybrown: 'f4a460',
          seagreen: '2e8b57',
          seashell: 'fff5ee',
          sienna: 'a0522d',
          silver: 'c0c0c0',
          skyblue: '87ceeb',
          slateblue: '6a5acd',
          slategray: '708090',
          snow: 'fffafa',
          springgreen: '00ff7f',
          steelblue: '4682b4',
          tan: 'd2b48c',
          teal: '008080',
          thistle: 'd8bfd8',
          tomato: 'ff6347',
          turquoise: '40e0d0',
          violet: 'ee82ee',
          violetred: 'd02090',
          wheat: 'f5deb3',
          white: 'ffffff',
          whitesmoke: 'f5f5f5',
          yellow: 'ffff00',
          yellowgreen: '9acd32',
        };
        S = n[S] || S;
        for (
          var l = [
              {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
                process: function (x) {
                  return [parseInt(x[1]), parseInt(x[2]), parseInt(x[3]), parseFloat(x[4])];
                },
              },
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
                process: function (x) {
                  return [parseInt(x[1]), parseInt(x[2]), parseInt(x[3])];
                },
              },
              {
                re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                example: ['#00ff00', '336699'],
                process: function (x) {
                  return [parseInt(x[1], 16), parseInt(x[2], 16), parseInt(x[3], 16)];
                },
              },
              {
                re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                example: ['#fb0', 'f0f'],
                process: function (x) {
                  return [
                    parseInt(x[1] + x[1], 16),
                    parseInt(x[2] + x[2], 16),
                    parseInt(x[3] + x[3], 16),
                  ];
                },
              },
            ],
            f = 0;
          f < l.length;
          f++
        ) {
          var v = l[f].re,
            g = l[f].process,
            y = v.exec(S);
          if (y) {
            var O = g(y);
            (this.r = O[0]),
              (this.g = O[1]),
              (this.b = O[2]),
              O.length > 3 && (this.alpha = O[3]),
              (this.ok = !0);
          }
        }
        (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha),
          (this.toRGB = function () {
            return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
          }),
          (this.toRGBA = function () {
            return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
          }),
          (this.toHex = function () {
            var x = this.r.toString(16),
              b = this.g.toString(16),
              C = this.b.toString(16);
            return (
              x.length == 1 && (x = '0' + x),
              b.length == 1 && (b = '0' + b),
              C.length == 1 && (C = '0' + C),
              '#' + x + b + C
            );
          }),
          (this.getHelpXML = function () {
            for (var x = new Array(), b = 0; b < l.length; b++)
              for (var C = l[b].example, A = 0; A < C.length; A++) x[x.length] = C[A];
            for (var R in n) x[x.length] = R;
            var P = document.createElement('ul');
            P.setAttribute('id', 'rgbcolor-examples');
            for (var b = 0; b < x.length; b++)
              try {
                var w = document.createElement('li'),
                  I = new RGBColor(x[b]),
                  N = document.createElement('div');
                (N.style.cssText =
                  'margin: 3px; border: 1px solid black; background:' +
                  I.toHex() +
                  '; color:' +
                  I.toHex()),
                  N.appendChild(document.createTextNode('test'));
                var B = document.createTextNode(
                  ' ' + x[b] + ' -> ' + I.toRGB() + ' -> ' + I.toHex(),
                );
                w.appendChild(N), w.appendChild(B), P.appendChild(w);
              } catch ($) {}
            return P;
          });
      };
    },
    23478: function (d, S, n) {
      'use strict';
      var l = n(86606),
        f = n(30325),
        v = TypeError;
      d.exports = function (g) {
        if (l(g)) return g;
        throw new v(f(g) + ' is not a function');
      };
    },
    9987: function (d, S, n) {
      'use strict';
      var l = n(36418),
        f = n(30325),
        v = TypeError;
      d.exports = function (g) {
        if (l(g)) return g;
        throw new v(f(g) + ' is not a constructor');
      };
    },
    93338: function (d, S, n) {
      'use strict';
      var l = n(54590),
        f = String,
        v = TypeError;
      d.exports = function (g) {
        if (l(g)) return g;
        throw new v("Can't set " + f(g) + ' as a prototype');
      };
    },
    54935: function (d, S, n) {
      'use strict';
      var l = n(23912),
        f = n(81194),
        v = n(47525).f,
        g = l('unscopables'),
        y = Array.prototype;
      y[g] === void 0 && v(y, g, { configurable: !0, value: f(null) }),
        (d.exports = function (O) {
          y[g][O] = !0;
        });
    },
    13777: function (d, S, n) {
      'use strict';
      var l = n(50112).charAt;
      d.exports = function (f, v, g) {
        return v + (g ? l(f, v).length : 1);
      };
    },
    26590: function (d, S, n) {
      'use strict';
      var l = n(42172),
        f = TypeError;
      d.exports = function (v, g) {
        if (l(g, v)) return v;
        throw new f('Incorrect invocation');
      };
    },
    75386: function (d, S, n) {
      'use strict';
      var l = n(59209),
        f = String,
        v = TypeError;
      d.exports = function (g) {
        if (l(g)) return g;
        throw new v(f(g) + ' is not an object');
      };
    },
    56535: function (d, S, n) {
      'use strict';
      var l = n(36689),
        f = n(24632),
        v = n(22496),
        g = function (y) {
          return function (O, x, b) {
            var C = l(O),
              A = v(C);
            if (A === 0) return !y && -1;
            var R = f(b, A),
              P;
            if (y && x !== x) {
              for (; A > R; ) if (((P = C[R++]), P !== P)) return !0;
            } else for (; A > R; R++) if ((y || R in C) && C[R] === x) return y || R || 0;
            return !y && -1;
          };
        };
      d.exports = { includes: g(!0), indexOf: g(!1) };
    },
    11187: function (d, S, n) {
      'use strict';
      var l = n(51794);
      d.exports = function (f, v) {
        var g = [][f];
        return (
          !!g &&
          l(function () {
            g.call(
              null,
              v ||
                function () {
                  return 1;
                },
              1,
            );
          })
        );
      };
    },
    83247: function (d, S, n) {
      'use strict';
      var l = n(23478),
        f = n(14311),
        v = n(22132),
        g = n(22496),
        y = TypeError,
        O = 'Reduce of empty array with no initial value',
        x = function (b) {
          return function (C, A, R, P) {
            var w = f(C),
              I = v(w),
              N = g(w);
            if ((l(A), N === 0 && R < 2)) throw new y(O);
            var B = b ? N - 1 : 0,
              Y = b ? -1 : 1;
            if (R < 2)
              for (;;) {
                if (B in I) {
                  (P = I[B]), (B += Y);
                  break;
                }
                if (((B += Y), b ? B < 0 : N <= B)) throw new y(O);
              }
            for (; b ? B >= 0 : N > B; B += Y) B in I && (P = A(P, I[B], B, w));
            return P;
          };
        };
      d.exports = { left: x(!1), right: x(!0) };
    },
    2255: function (d, S, n) {
      'use strict';
      var l = n(65191);
      d.exports = l([].slice);
    },
    81614: function (d, S, n) {
      'use strict';
      var l = n(23912),
        f = l('iterator'),
        v = !1;
      try {
        var g = 0,
          y = {
            next: function () {
              return { done: !!g++ };
            },
            return: function () {
              v = !0;
            },
          };
        (y[f] = function () {
          return this;
        }),
          Array.from(y, function () {
            throw 2;
          });
      } catch (O) {}
      d.exports = function (O, x) {
        try {
          if (!x && !v) return !1;
        } catch (A) {
          return !1;
        }
        var b = !1;
        try {
          var C = {};
          (C[f] = function () {
            return {
              next: function () {
                return { done: (b = !0) };
              },
            };
          }),
            O(C);
        } catch (A) {}
        return b;
      };
    },
    95292: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = l({}.toString),
        v = l(''.slice);
      d.exports = function (g) {
        return v(f(g), 8, -1);
      };
    },
    84300: function (d, S, n) {
      'use strict';
      var l = n(46841),
        f = n(86606),
        v = n(95292),
        g = n(23912),
        y = g('toStringTag'),
        O = Object,
        x =
          v(
            (function () {
              return arguments;
            })(),
          ) === 'Arguments',
        b = function (C, A) {
          try {
            return C[A];
          } catch (R) {}
        };
      d.exports = l
        ? v
        : function (C) {
            var A, R, P;
            return C === void 0
              ? 'Undefined'
              : C === null
              ? 'Null'
              : typeof (R = b((A = O(C)), y)) == 'string'
              ? R
              : x
              ? v(A)
              : (P = v(A)) === 'Object' && f(A.callee)
              ? 'Arguments'
              : P;
          };
    },
    95810: function (d, S, n) {
      'use strict';
      var l = n(40667),
        f = n(9123),
        v = n(84387),
        g = n(47525);
      d.exports = function (y, O, x) {
        for (var b = f(O), C = g.f, A = v.f, R = 0; R < b.length; R++) {
          var P = b[R];
          !l(y, P) && !(x && l(x, P)) && C(y, P, A(O, P));
        }
      };
    },
    19641: function (d, S, n) {
      'use strict';
      var l = n(23912),
        f = l('match');
      d.exports = function (v) {
        var g = /./;
        try {
          '/./'[v](g);
        } catch (y) {
          try {
            return (g[f] = !1), '/./'[v](g);
          } catch (O) {}
        }
        return !1;
      };
    },
    77963: function (d, S, n) {
      'use strict';
      var l = n(51794);
      d.exports = !l(function () {
        function f() {}
        return (f.prototype.constructor = null), Object.getPrototypeOf(new f()) !== f.prototype;
      });
    },
    97162: function (d) {
      'use strict';
      d.exports = function (S, n) {
        return { value: S, done: n };
      };
    },
    16093: function (d, S, n) {
      'use strict';
      var l = n(72251),
        f = n(47525),
        v = n(33087);
      d.exports = l
        ? function (g, y, O) {
            return f.f(g, y, v(1, O));
          }
        : function (g, y, O) {
            return (g[y] = O), g;
          };
    },
    33087: function (d) {
      'use strict';
      d.exports = function (S, n) {
        return { enumerable: !(S & 1), configurable: !(S & 2), writable: !(S & 4), value: n };
      };
    },
    44040: function (d, S, n) {
      'use strict';
      var l = n(90005),
        f = n(47525);
      d.exports = function (v, g, y) {
        return (
          y.get && l(y.get, g, { getter: !0 }), y.set && l(y.set, g, { setter: !0 }), f.f(v, g, y)
        );
      };
    },
    47263: function (d, S, n) {
      'use strict';
      var l = n(86606),
        f = n(47525),
        v = n(90005),
        g = n(65416);
      d.exports = function (y, O, x, b) {
        b || (b = {});
        var C = b.enumerable,
          A = b.name !== void 0 ? b.name : O;
        if ((l(x) && v(x, A, b), b.global)) C ? (y[O] = x) : g(O, x);
        else {
          try {
            b.unsafe ? y[O] && (C = !0) : delete y[O];
          } catch (R) {}
          C
            ? (y[O] = x)
            : f.f(y, O, {
                value: x,
                enumerable: !1,
                configurable: !b.nonConfigurable,
                writable: !b.nonWritable,
              });
        }
        return y;
      };
    },
    65416: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = Object.defineProperty;
      d.exports = function (v, g) {
        try {
          f(l, v, { value: g, configurable: !0, writable: !0 });
        } catch (y) {
          l[v] = g;
        }
        return g;
      };
    },
    72251: function (d, S, n) {
      'use strict';
      var l = n(51794);
      d.exports = !l(function () {
        return (
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1] !== 7
        );
      });
    },
    23753: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(59209),
        v = l.document,
        g = f(v) && f(v.createElement);
      d.exports = function (y) {
        return g ? v.createElement(y) : {};
      };
    },
    77709: function (d) {
      'use strict';
      d.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    14533: function (d, S, n) {
      'use strict';
      var l = n(23753),
        f = l('span').classList,
        v = f && f.constructor && f.constructor.prototype;
      d.exports = v === Object.prototype ? void 0 : v;
    },
    42271: function (d) {
      'use strict';
      d.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
    },
    4029: function (d, S, n) {
      'use strict';
      var l = n(28596);
      d.exports = /ipad|iphone|ipod/i.test(l) && typeof Pebble != 'undefined';
    },
    62180: function (d, S, n) {
      'use strict';
      var l = n(28596);
      d.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(l);
    },
    8374: function (d, S, n) {
      'use strict';
      var l = n(15088);
      d.exports = l === 'NODE';
    },
    32909: function (d, S, n) {
      'use strict';
      var l = n(28596);
      d.exports = /web0s(?!.*chrome)/i.test(l);
    },
    28596: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = l.navigator,
        v = f && f.userAgent;
      d.exports = v ? String(v) : '';
    },
    70841: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(28596),
        v = l.process,
        g = l.Deno,
        y = (v && v.versions) || (g && g.version),
        O = y && y.v8,
        x,
        b;
      O && ((x = O.split('.')), (b = x[0] > 0 && x[0] < 4 ? 1 : +(x[0] + x[1]))),
        !b &&
          f &&
          ((x = f.match(/Edge\/(\d+)/)),
          (!x || x[1] >= 74) && ((x = f.match(/Chrome\/(\d+)/)), x && (b = +x[1]))),
        (d.exports = b);
    },
    15088: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(28596),
        v = n(95292),
        g = function (y) {
          return f.slice(0, y.length) === y;
        };
      d.exports = (function () {
        return g('Bun/')
          ? 'BUN'
          : g('Cloudflare-Workers')
          ? 'CLOUDFLARE'
          : g('Deno/')
          ? 'DENO'
          : g('Node.js/')
          ? 'NODE'
          : l.Bun && typeof Bun.version == 'string'
          ? 'BUN'
          : l.Deno && typeof Deno.version == 'object'
          ? 'DENO'
          : v(l.process) === 'process'
          ? 'NODE'
          : l.window && l.document
          ? 'BROWSER'
          : 'REST';
      })();
    },
    83859: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(84387).f,
        v = n(16093),
        g = n(47263),
        y = n(65416),
        O = n(95810),
        x = n(73164);
      d.exports = function (b, C) {
        var A = b.target,
          R = b.global,
          P = b.stat,
          w,
          I,
          N,
          B,
          Y,
          $;
        if ((R ? (I = l) : P ? (I = l[A] || y(A, {})) : (I = l[A] && l[A].prototype), I))
          for (N in C) {
            if (
              ((Y = C[N]),
              b.dontCallGetSet ? (($ = f(I, N)), (B = $ && $.value)) : (B = I[N]),
              (w = x(R ? N : A + (P ? '.' : '#') + N, b.forced)),
              !w && B !== void 0)
            ) {
              if (typeof Y == typeof B) continue;
              O(Y, B);
            }
            (b.sham || (B && B.sham)) && v(Y, 'sham', !0), g(I, N, Y, b);
          }
      };
    },
    51794: function (d) {
      'use strict';
      d.exports = function (S) {
        try {
          return !!S();
        } catch (n) {
          return !0;
        }
      };
    },
    58089: function (d, S, n) {
      'use strict';
      n(35401);
      var l = n(92221),
        f = n(47263),
        v = n(54487),
        g = n(51794),
        y = n(23912),
        O = n(16093),
        x = y('species'),
        b = RegExp.prototype;
      d.exports = function (C, A, R, P) {
        var w = y(C),
          I = !g(function () {
            var $ = {};
            return (
              ($[w] = function () {
                return 7;
              }),
              ''[C]($) !== 7
            );
          }),
          N =
            I &&
            !g(function () {
              var $ = !1,
                F = /a/;
              return (
                C === 'split' &&
                  ((F = {}),
                  (F.constructor = {}),
                  (F.constructor[x] = function () {
                    return F;
                  }),
                  (F.flags = ''),
                  (F[w] = /./[w])),
                (F.exec = function () {
                  return ($ = !0), null;
                }),
                F[w](''),
                !$
              );
            });
        if (!I || !N || R) {
          var B = /./[w],
            Y = A(w, ''[C], function ($, F, G, X, Q) {
              var _ = F.exec;
              return _ === v || _ === b.exec
                ? I && !Q
                  ? { done: !0, value: l(B, F, G, X) }
                  : { done: !0, value: l($, G, F, X) }
                : { done: !1 };
            });
          f(String.prototype, C, Y[0]), f(b, w, Y[1]);
        }
        P && O(b[w], 'sham', !0);
      };
    },
    95597: function (d, S, n) {
      'use strict';
      var l = n(32767),
        f = Function.prototype,
        v = f.apply,
        g = f.call;
      d.exports =
        (typeof Reflect == 'object' && Reflect.apply) ||
        (l
          ? g.bind(v)
          : function () {
              return g.apply(v, arguments);
            });
    },
    20260: function (d, S, n) {
      'use strict';
      var l = n(38146),
        f = n(23478),
        v = n(32767),
        g = l(l.bind);
      d.exports = function (y, O) {
        return (
          f(y),
          O === void 0
            ? y
            : v
            ? g(y, O)
            : function () {
                return y.apply(O, arguments);
              }
        );
      };
    },
    32767: function (d, S, n) {
      'use strict';
      var l = n(51794);
      d.exports = !l(function () {
        var f = function () {}.bind();
        return typeof f != 'function' || f.hasOwnProperty('prototype');
      });
    },
    92221: function (d, S, n) {
      'use strict';
      var l = n(32767),
        f = Function.prototype.call;
      d.exports = l
        ? f.bind(f)
        : function () {
            return f.apply(f, arguments);
          };
    },
    94099: function (d, S, n) {
      'use strict';
      var l = n(72251),
        f = n(40667),
        v = Function.prototype,
        g = l && Object.getOwnPropertyDescriptor,
        y = f(v, 'name'),
        O = y && function () {}.name === 'something',
        x = y && (!l || (l && g(v, 'name').configurable));
      d.exports = { EXISTS: y, PROPER: O, CONFIGURABLE: x };
    },
    18369: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(23478);
      d.exports = function (v, g, y) {
        try {
          return l(f(Object.getOwnPropertyDescriptor(v, g)[y]));
        } catch (O) {}
      };
    },
    38146: function (d, S, n) {
      'use strict';
      var l = n(95292),
        f = n(65191);
      d.exports = function (v) {
        if (l(v) === 'Function') return f(v);
      };
    },
    65191: function (d, S, n) {
      'use strict';
      var l = n(32767),
        f = Function.prototype,
        v = f.call,
        g = l && f.bind.bind(v, v);
      d.exports = l
        ? g
        : function (y) {
            return function () {
              return v.apply(y, arguments);
            };
          };
    },
    18137: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(86606),
        v = function (g) {
          return f(g) ? g : void 0;
        };
      d.exports = function (g, y) {
        return arguments.length < 2 ? v(l[g]) : l[g] && l[g][y];
      };
    },
    60470: function (d, S, n) {
      'use strict';
      var l = n(84300),
        f = n(89045),
        v = n(53590),
        g = n(33345),
        y = n(23912),
        O = y('iterator');
      d.exports = function (x) {
        if (!v(x)) return f(x, O) || f(x, '@@iterator') || g[l(x)];
      };
    },
    17667: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(23478),
        v = n(75386),
        g = n(30325),
        y = n(60470),
        O = TypeError;
      d.exports = function (x, b) {
        var C = arguments.length < 2 ? y(x) : b;
        if (f(C)) return v(l(C, x));
        throw new O(g(x) + ' is not iterable');
      };
    },
    89045: function (d, S, n) {
      'use strict';
      var l = n(23478),
        f = n(53590);
      d.exports = function (v, g) {
        var y = v[g];
        return f(y) ? void 0 : l(y);
      };
    },
    2280: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(14311),
        v = Math.floor,
        g = l(''.charAt),
        y = l(''.replace),
        O = l(''.slice),
        x = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        b = /\$([$&'`]|\d{1,2})/g;
      d.exports = function (C, A, R, P, w, I) {
        var N = R + C.length,
          B = P.length,
          Y = b;
        return (
          w !== void 0 && ((w = f(w)), (Y = x)),
          y(I, Y, function ($, F) {
            var G;
            switch (g(F, 0)) {
              case '$':
                return '$';
              case '&':
                return C;
              case '`':
                return O(A, 0, R);
              case "'":
                return O(A, N);
              case '<':
                G = w[O(F, 1, -1)];
                break;
              default:
                var X = +F;
                if (X === 0) return $;
                if (X > B) {
                  var Q = v(X / 10);
                  return Q === 0
                    ? $
                    : Q <= B
                    ? P[Q - 1] === void 0
                      ? g(F, 1)
                      : P[Q - 1] + g(F, 1)
                    : $;
                }
                G = P[X - 1];
            }
            return G === void 0 ? '' : G;
          })
        );
      };
    },
    78691: function (d, S, n) {
      'use strict';
      var l = function (f) {
        return f && f.Math === Math && f;
      };
      d.exports =
        l(typeof globalThis == 'object' && globalThis) ||
        l(typeof window == 'object' && window) ||
        l(typeof self == 'object' && self) ||
        l(typeof n.g == 'object' && n.g) ||
        l(typeof this == 'object' && this) ||
        (function () {
          return this;
        })() ||
        Function('return this')();
    },
    40667: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(14311),
        v = l({}.hasOwnProperty);
      d.exports =
        Object.hasOwn ||
        function (y, O) {
          return v(f(y), O);
        };
    },
    90067: function (d) {
      'use strict';
      d.exports = {};
    },
    54698: function (d) {
      'use strict';
      d.exports = function (S, n) {
        try {
          arguments.length === 1 ? console.error(S) : console.error(S, n);
        } catch (l) {}
      };
    },
    91422: function (d, S, n) {
      'use strict';
      var l = n(18137);
      d.exports = l('document', 'documentElement');
    },
    32483: function (d, S, n) {
      'use strict';
      var l = n(72251),
        f = n(51794),
        v = n(23753);
      d.exports =
        !l &&
        !f(function () {
          return (
            Object.defineProperty(v('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a !== 7
          );
        });
    },
    22132: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(51794),
        v = n(95292),
        g = Object,
        y = l(''.split);
      d.exports = f(function () {
        return !g('z').propertyIsEnumerable(0);
      })
        ? function (O) {
            return v(O) === 'String' ? y(O, '') : g(O);
          }
        : g;
    },
    8014: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(86606),
        v = n(67643),
        g = l(Function.toString);
      f(v.inspectSource) ||
        (v.inspectSource = function (y) {
          return g(y);
        }),
        (d.exports = v.inspectSource);
    },
    86203: function (d, S, n) {
      'use strict';
      var l = n(20265),
        f = n(78691),
        v = n(59209),
        g = n(16093),
        y = n(40667),
        O = n(67643),
        x = n(32387),
        b = n(90067),
        C = 'Object already initialized',
        A = f.TypeError,
        R = f.WeakMap,
        P,
        w,
        I,
        N = function (F) {
          return I(F) ? w(F) : P(F, {});
        },
        B = function (F) {
          return function (G) {
            var X;
            if (!v(G) || (X = w(G)).type !== F)
              throw new A('Incompatible receiver, ' + F + ' required');
            return X;
          };
        };
      if (l || O.state) {
        var Y = O.state || (O.state = new R());
        (Y.get = Y.get),
          (Y.has = Y.has),
          (Y.set = Y.set),
          (P = function (F, G) {
            if (Y.has(F)) throw new A(C);
            return (G.facade = F), Y.set(F, G), G;
          }),
          (w = function (F) {
            return Y.get(F) || {};
          }),
          (I = function (F) {
            return Y.has(F);
          });
      } else {
        var $ = x('state');
        (b[$] = !0),
          (P = function (F, G) {
            if (y(F, $)) throw new A(C);
            return (G.facade = F), g(F, $, G), G;
          }),
          (w = function (F) {
            return y(F, $) ? F[$] : {};
          }),
          (I = function (F) {
            return y(F, $);
          });
      }
      d.exports = { set: P, get: w, has: I, enforce: N, getterFor: B };
    },
    41026: function (d, S, n) {
      'use strict';
      var l = n(23912),
        f = n(33345),
        v = l('iterator'),
        g = Array.prototype;
      d.exports = function (y) {
        return y !== void 0 && (f.Array === y || g[v] === y);
      };
    },
    76511: function (d, S, n) {
      'use strict';
      var l = n(95292);
      d.exports =
        Array.isArray ||
        function (v) {
          return l(v) === 'Array';
        };
    },
    86606: function (d) {
      'use strict';
      var S = typeof document == 'object' && document.all;
      d.exports =
        typeof S == 'undefined' && S !== void 0
          ? function (n) {
              return typeof n == 'function' || n === S;
            }
          : function (n) {
              return typeof n == 'function';
            };
    },
    36418: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(51794),
        v = n(86606),
        g = n(84300),
        y = n(18137),
        O = n(8014),
        x = function () {},
        b = y('Reflect', 'construct'),
        C = /^\s*(?:class|function)\b/,
        A = l(C.exec),
        R = !C.test(x),
        P = function (N) {
          if (!v(N)) return !1;
          try {
            return b(x, [], N), !0;
          } catch (B) {
            return !1;
          }
        },
        w = function (N) {
          if (!v(N)) return !1;
          switch (g(N)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
              return !1;
          }
          try {
            return R || !!A(C, O(N));
          } catch (B) {
            return !0;
          }
        };
      (w.sham = !0),
        (d.exports =
          !b ||
          f(function () {
            var I;
            return (
              P(P.call) ||
              !P(Object) ||
              !P(function () {
                I = !0;
              }) ||
              I
            );
          })
            ? w
            : P);
    },
    73164: function (d, S, n) {
      'use strict';
      var l = n(51794),
        f = n(86606),
        v = /#|\.prototype\./,
        g = function (C, A) {
          var R = O[y(C)];
          return R === b ? !0 : R === x ? !1 : f(A) ? l(A) : !!A;
        },
        y = (g.normalize = function (C) {
          return String(C).replace(v, '.').toLowerCase();
        }),
        O = (g.data = {}),
        x = (g.NATIVE = 'N'),
        b = (g.POLYFILL = 'P');
      d.exports = g;
    },
    53590: function (d) {
      'use strict';
      d.exports = function (S) {
        return S == null;
      };
    },
    59209: function (d, S, n) {
      'use strict';
      var l = n(86606);
      d.exports = function (f) {
        return typeof f == 'object' ? f !== null : l(f);
      };
    },
    54590: function (d, S, n) {
      'use strict';
      var l = n(59209);
      d.exports = function (f) {
        return l(f) || f === null;
      };
    },
    51284: function (d) {
      'use strict';
      d.exports = !1;
    },
    74997: function (d, S, n) {
      'use strict';
      var l = n(59209),
        f = n(95292),
        v = n(23912),
        g = v('match');
      d.exports = function (y) {
        var O;
        return l(y) && ((O = y[g]) !== void 0 ? !!O : f(y) === 'RegExp');
      };
    },
    88920: function (d, S, n) {
      'use strict';
      var l = n(18137),
        f = n(86606),
        v = n(42172),
        g = n(71527),
        y = Object;
      d.exports = g
        ? function (O) {
            return typeof O == 'symbol';
          }
        : function (O) {
            var x = l('Symbol');
            return f(x) && v(x.prototype, y(O));
          };
    },
    38214: function (d, S, n) {
      'use strict';
      var l = n(20260),
        f = n(92221),
        v = n(75386),
        g = n(30325),
        y = n(41026),
        O = n(22496),
        x = n(42172),
        b = n(17667),
        C = n(60470),
        A = n(9957),
        R = TypeError,
        P = function (I, N) {
          (this.stopped = I), (this.result = N);
        },
        w = P.prototype;
      d.exports = function (I, N, B) {
        var Y = B && B.that,
          $ = !!(B && B.AS_ENTRIES),
          F = !!(B && B.IS_RECORD),
          G = !!(B && B.IS_ITERATOR),
          X = !!(B && B.INTERRUPTED),
          Q = l(N, Y),
          _,
          J,
          xt,
          tt,
          et,
          ut,
          ot,
          ht = function (q) {
            return _ && A(_, 'normal', q), new P(!0, q);
          },
          Z = function (q) {
            return $ ? (v(q), X ? Q(q[0], q[1], ht) : Q(q[0], q[1])) : X ? Q(q, ht) : Q(q);
          };
        if (F) _ = I.iterator;
        else if (G) _ = I;
        else {
          if (((J = C(I)), !J)) throw new R(g(I) + ' is not iterable');
          if (y(J)) {
            for (xt = 0, tt = O(I); tt > xt; xt++) if (((et = Z(I[xt])), et && x(w, et))) return et;
            return new P(!1);
          }
          _ = b(I, J);
        }
        for (ut = F ? I.next : _.next; !(ot = f(ut, _)).done; ) {
          try {
            et = Z(ot.value);
          } catch (q) {
            A(_, 'throw', q);
          }
          if (typeof et == 'object' && et && x(w, et)) return et;
        }
        return new P(!1);
      };
    },
    9957: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(75386),
        v = n(89045);
      d.exports = function (g, y, O) {
        var x, b;
        f(g);
        try {
          if (((x = v(g, 'return')), !x)) {
            if (y === 'throw') throw O;
            return O;
          }
          x = l(x, g);
        } catch (C) {
          (b = !0), (x = C);
        }
        if (y === 'throw') throw O;
        if (b) throw x;
        return f(x), O;
      };
    },
    84196: function (d, S, n) {
      'use strict';
      var l = n(88508).IteratorPrototype,
        f = n(81194),
        v = n(33087),
        g = n(32164),
        y = n(33345),
        O = function () {
          return this;
        };
      d.exports = function (x, b, C, A) {
        var R = b + ' Iterator';
        return (x.prototype = f(l, { next: v(+!A, C) })), g(x, R, !1, !0), (y[R] = O), x;
      };
    },
    50329: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(92221),
        v = n(51284),
        g = n(94099),
        y = n(86606),
        O = n(84196),
        x = n(98012),
        b = n(85774),
        C = n(32164),
        A = n(16093),
        R = n(47263),
        P = n(23912),
        w = n(33345),
        I = n(88508),
        N = g.PROPER,
        B = g.CONFIGURABLE,
        Y = I.IteratorPrototype,
        $ = I.BUGGY_SAFARI_ITERATORS,
        F = P('iterator'),
        G = 'keys',
        X = 'values',
        Q = 'entries',
        _ = function () {
          return this;
        };
      d.exports = function (J, xt, tt, et, ut, ot, ht) {
        O(tt, xt, et);
        var Z = function (Rt) {
            if (Rt === ut && lt) return lt;
            if (!$ && Rt && Rt in it) return it[Rt];
            switch (Rt) {
              case G:
                return function () {
                  return new tt(this, Rt);
                };
              case X:
                return function () {
                  return new tt(this, Rt);
                };
              case Q:
                return function () {
                  return new tt(this, Rt);
                };
            }
            return function () {
              return new tt(this);
            };
          },
          q = xt + ' Iterator',
          Ut = !1,
          it = J.prototype,
          ft = it[F] || it['@@iterator'] || (ut && it[ut]),
          lt = (!$ && ft) || Z(ut),
          M = (xt === 'Array' && it.entries) || ft,
          Et,
          Vt,
          Pt;
        if (
          (M &&
            ((Et = x(M.call(new J()))),
            Et !== Object.prototype &&
              Et.next &&
              (!v && x(Et) !== Y && (b ? b(Et, Y) : y(Et[F]) || R(Et, F, _)),
              C(Et, q, !0, !0),
              v && (w[q] = _))),
          N &&
            ut === X &&
            ft &&
            ft.name !== X &&
            (!v && B
              ? A(it, 'name', X)
              : ((Ut = !0),
                (lt = function () {
                  return f(ft, this);
                }))),
          ut)
        )
          if (((Vt = { values: Z(X), keys: ot ? lt : Z(G), entries: Z(Q) }), ht))
            for (Pt in Vt) ($ || Ut || !(Pt in it)) && R(it, Pt, Vt[Pt]);
          else l({ target: xt, proto: !0, forced: $ || Ut }, Vt);
        return (!v || ht) && it[F] !== lt && R(it, F, lt, { name: ut }), (w[xt] = lt), Vt;
      };
    },
    88508: function (d, S, n) {
      'use strict';
      var l = n(51794),
        f = n(86606),
        v = n(59209),
        g = n(81194),
        y = n(98012),
        O = n(47263),
        x = n(23912),
        b = n(51284),
        C = x('iterator'),
        A = !1,
        R,
        P,
        w;
      [].keys &&
        ((w = [].keys()),
        'next' in w ? ((P = y(y(w))), P !== Object.prototype && (R = P)) : (A = !0));
      var I =
        !v(R) ||
        l(function () {
          var N = {};
          return R[C].call(N) !== N;
        });
      I ? (R = {}) : b && (R = g(R)),
        f(R[C]) ||
          O(R, C, function () {
            return this;
          }),
        (d.exports = { IteratorPrototype: R, BUGGY_SAFARI_ITERATORS: A });
    },
    33345: function (d) {
      'use strict';
      d.exports = {};
    },
    22496: function (d, S, n) {
      'use strict';
      var l = n(42919);
      d.exports = function (f) {
        return l(f.length);
      };
    },
    90005: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(51794),
        v = n(86606),
        g = n(40667),
        y = n(72251),
        O = n(94099).CONFIGURABLE,
        x = n(8014),
        b = n(86203),
        C = b.enforce,
        A = b.get,
        R = String,
        P = Object.defineProperty,
        w = l(''.slice),
        I = l(''.replace),
        N = l([].join),
        B =
          y &&
          !f(function () {
            return P(function () {}, 'length', { value: 8 }).length !== 8;
          }),
        Y = String(String).split('String'),
        $ = (d.exports = function (F, G, X) {
          w(R(G), 0, 7) === 'Symbol(' && (G = '[' + I(R(G), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
            X && X.getter && (G = 'get ' + G),
            X && X.setter && (G = 'set ' + G),
            (!g(F, 'name') || (O && F.name !== G)) &&
              (y ? P(F, 'name', { value: G, configurable: !0 }) : (F.name = G)),
            B && X && g(X, 'arity') && F.length !== X.arity && P(F, 'length', { value: X.arity });
          try {
            X && g(X, 'constructor') && X.constructor
              ? y && P(F, 'prototype', { writable: !1 })
              : F.prototype && (F.prototype = void 0);
          } catch (_) {}
          var Q = C(F);
          return g(Q, 'source') || (Q.source = N(Y, typeof G == 'string' ? G : '')), F;
        });
      Function.prototype.toString = $(function () {
        return (v(this) && A(this).source) || x(this);
      }, 'toString');
    },
    2623: function (d) {
      'use strict';
      var S = Math.ceil,
        n = Math.floor;
      d.exports =
        Math.trunc ||
        function (f) {
          var v = +f;
          return (v > 0 ? n : S)(v);
        };
    },
    42505: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(97711),
        v = n(20260),
        g = n(41841).set,
        y = n(46818),
        O = n(62180),
        x = n(4029),
        b = n(32909),
        C = n(8374),
        A = l.MutationObserver || l.WebKitMutationObserver,
        R = l.document,
        P = l.process,
        w = l.Promise,
        I = f('queueMicrotask'),
        N,
        B,
        Y,
        $,
        F;
      if (!I) {
        var G = new y(),
          X = function () {
            var Q, _;
            for (C && (Q = P.domain) && Q.exit(); (_ = G.get()); )
              try {
                _();
              } catch (J) {
                throw (G.head && N(), J);
              }
            Q && Q.enter();
          };
        !O && !C && !b && A && R
          ? ((B = !0),
            (Y = R.createTextNode('')),
            new A(X).observe(Y, { characterData: !0 }),
            (N = function () {
              Y.data = B = !B;
            }))
          : !x && w && w.resolve
          ? (($ = w.resolve(void 0)),
            ($.constructor = w),
            (F = v($.then, $)),
            (N = function () {
              F(X);
            }))
          : C
          ? (N = function () {
              P.nextTick(X);
            })
          : ((g = v(g, l)),
            (N = function () {
              g(X);
            })),
          (I = function (Q) {
            G.head || N(), G.add(Q);
          });
      }
      d.exports = I;
    },
    2792: function (d, S, n) {
      'use strict';
      var l = n(23478),
        f = TypeError,
        v = function (g) {
          var y, O;
          (this.promise = new g(function (x, b) {
            if (y !== void 0 || O !== void 0) throw new f('Bad Promise constructor');
            (y = x), (O = b);
          })),
            (this.resolve = l(y)),
            (this.reject = l(O));
        };
      d.exports.f = function (g) {
        return new v(g);
      };
    },
    61323: function (d, S, n) {
      'use strict';
      var l = n(74997),
        f = TypeError;
      d.exports = function (v) {
        if (l(v)) throw new f("The method doesn't accept regular expressions");
        return v;
      };
    },
    81194: function (d, S, n) {
      'use strict';
      var l = n(75386),
        f = n(94180),
        v = n(42271),
        g = n(90067),
        y = n(91422),
        O = n(23753),
        x = n(32387),
        b = '>',
        C = '<',
        A = 'prototype',
        R = 'script',
        P = x('IE_PROTO'),
        w = function () {},
        I = function (F) {
          return C + R + b + F + C + '/' + R + b;
        },
        N = function (F) {
          F.write(I('')), F.close();
          var G = F.parentWindow.Object;
          return (F = null), G;
        },
        B = function () {
          var F = O('iframe'),
            G = 'java' + R + ':',
            X;
          return (
            (F.style.display = 'none'),
            y.appendChild(F),
            (F.src = String(G)),
            (X = F.contentWindow.document),
            X.open(),
            X.write(I('document.F=Object')),
            X.close(),
            X.F
          );
        },
        Y,
        $ = function () {
          try {
            Y = new ActiveXObject('htmlfile');
          } catch (G) {}
          $ = typeof document != 'undefined' ? (document.domain && Y ? N(Y) : B()) : N(Y);
          for (var F = v.length; F--; ) delete $[A][v[F]];
          return $();
        };
      (g[P] = !0),
        (d.exports =
          Object.create ||
          function (G, X) {
            var Q;
            return (
              G !== null ? ((w[A] = l(G)), (Q = new w()), (w[A] = null), (Q[P] = G)) : (Q = $()),
              X === void 0 ? Q : f.f(Q, X)
            );
          });
    },
    94180: function (d, S, n) {
      'use strict';
      var l = n(72251),
        f = n(45429),
        v = n(47525),
        g = n(75386),
        y = n(36689),
        O = n(559);
      S.f =
        l && !f
          ? Object.defineProperties
          : function (b, C) {
              g(b);
              for (var A = y(C), R = O(C), P = R.length, w = 0, I; P > w; )
                v.f(b, (I = R[w++]), A[I]);
              return b;
            };
    },
    47525: function (d, S, n) {
      'use strict';
      var l = n(72251),
        f = n(32483),
        v = n(45429),
        g = n(75386),
        y = n(91613),
        O = TypeError,
        x = Object.defineProperty,
        b = Object.getOwnPropertyDescriptor,
        C = 'enumerable',
        A = 'configurable',
        R = 'writable';
      S.f = l
        ? v
          ? function (w, I, N) {
              if (
                (g(w),
                (I = y(I)),
                g(N),
                typeof w == 'function' && I === 'prototype' && 'value' in N && R in N && !N[R])
              ) {
                var B = b(w, I);
                B &&
                  B[R] &&
                  ((w[I] = N.value),
                  (N = {
                    configurable: A in N ? N[A] : B[A],
                    enumerable: C in N ? N[C] : B[C],
                    writable: !1,
                  }));
              }
              return x(w, I, N);
            }
          : x
        : function (w, I, N) {
            if ((g(w), (I = y(I)), g(N), f))
              try {
                return x(w, I, N);
              } catch (B) {}
            if ('get' in N || 'set' in N) throw new O('Accessors not supported');
            return 'value' in N && (w[I] = N.value), w;
          };
    },
    84387: function (d, S, n) {
      'use strict';
      var l = n(72251),
        f = n(92221),
        v = n(5304),
        g = n(33087),
        y = n(36689),
        O = n(91613),
        x = n(40667),
        b = n(32483),
        C = Object.getOwnPropertyDescriptor;
      S.f = l
        ? C
        : function (R, P) {
            if (((R = y(R)), (P = O(P)), b))
              try {
                return C(R, P);
              } catch (w) {}
            if (x(R, P)) return g(!f(v.f, R, P), R[P]);
          };
    },
    6427: function (d, S, n) {
      'use strict';
      var l = n(11469),
        f = n(42271),
        v = f.concat('length', 'prototype');
      S.f =
        Object.getOwnPropertyNames ||
        function (y) {
          return l(y, v);
        };
    },
    36344: function (d, S) {
      'use strict';
      S.f = Object.getOwnPropertySymbols;
    },
    98012: function (d, S, n) {
      'use strict';
      var l = n(40667),
        f = n(86606),
        v = n(14311),
        g = n(32387),
        y = n(77963),
        O = g('IE_PROTO'),
        x = Object,
        b = x.prototype;
      d.exports = y
        ? x.getPrototypeOf
        : function (C) {
            var A = v(C);
            if (l(A, O)) return A[O];
            var R = A.constructor;
            return f(R) && A instanceof R ? R.prototype : A instanceof x ? b : null;
          };
    },
    42172: function (d, S, n) {
      'use strict';
      var l = n(65191);
      d.exports = l({}.isPrototypeOf);
    },
    11469: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(40667),
        v = n(36689),
        g = n(56535).indexOf,
        y = n(90067),
        O = l([].push);
      d.exports = function (x, b) {
        var C = v(x),
          A = 0,
          R = [],
          P;
        for (P in C) !f(y, P) && f(C, P) && O(R, P);
        for (; b.length > A; ) f(C, (P = b[A++])) && (~g(R, P) || O(R, P));
        return R;
      };
    },
    559: function (d, S, n) {
      'use strict';
      var l = n(11469),
        f = n(42271);
      d.exports =
        Object.keys ||
        function (g) {
          return l(g, f);
        };
    },
    5304: function (d, S) {
      'use strict';
      var n = {}.propertyIsEnumerable,
        l = Object.getOwnPropertyDescriptor,
        f = l && !n.call({ 1: 2 }, 1);
      S.f = f
        ? function (g) {
            var y = l(this, g);
            return !!y && y.enumerable;
          }
        : n;
    },
    85774: function (d, S, n) {
      'use strict';
      var l = n(18369),
        f = n(59209),
        v = n(97985),
        g = n(93338);
      d.exports =
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function () {
              var y = !1,
                O = {},
                x;
              try {
                (x = l(Object.prototype, '__proto__', 'set')), x(O, []), (y = O instanceof Array);
              } catch (b) {}
              return function (C, A) {
                return v(C), g(A), f(C) && (y ? x(C, A) : (C.__proto__ = A)), C;
              };
            })()
          : void 0);
    },
    9754: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(86606),
        v = n(59209),
        g = TypeError;
      d.exports = function (y, O) {
        var x, b;
        if (
          (O === 'string' && f((x = y.toString)) && !v((b = l(x, y)))) ||
          (f((x = y.valueOf)) && !v((b = l(x, y)))) ||
          (O !== 'string' && f((x = y.toString)) && !v((b = l(x, y))))
        )
          return b;
        throw new g("Can't convert object to primitive value");
      };
    },
    9123: function (d, S, n) {
      'use strict';
      var l = n(18137),
        f = n(65191),
        v = n(6427),
        g = n(36344),
        y = n(75386),
        O = f([].concat);
      d.exports =
        l('Reflect', 'ownKeys') ||
        function (b) {
          var C = v.f(y(b)),
            A = g.f;
          return A ? O(C, A(b)) : C;
        };
    },
    85917: function (d) {
      'use strict';
      d.exports = function (S) {
        try {
          return { error: !1, value: S() };
        } catch (n) {
          return { error: !0, value: n };
        }
      };
    },
    6307: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(86975),
        v = n(86606),
        g = n(73164),
        y = n(8014),
        O = n(23912),
        x = n(15088),
        b = n(51284),
        C = n(70841),
        A = f && f.prototype,
        R = O('species'),
        P = !1,
        w = v(l.PromiseRejectionEvent),
        I = g('Promise', function () {
          var N = y(f),
            B = N !== String(f);
          if ((!B && C === 66) || (b && !(A.catch && A.finally))) return !0;
          if (!C || C < 51 || !/native code/.test(N)) {
            var Y = new f(function (G) {
                G(1);
              }),
              $ = function (G) {
                G(
                  function () {},
                  function () {},
                );
              },
              F = (Y.constructor = {});
            if (((F[R] = $), (P = Y.then(function () {}) instanceof $), !P)) return !0;
          }
          return !B && (x === 'BROWSER' || x === 'DENO') && !w;
        });
      d.exports = { CONSTRUCTOR: I, REJECTION_EVENT: w, SUBCLASSING: P };
    },
    86975: function (d, S, n) {
      'use strict';
      var l = n(78691);
      d.exports = l.Promise;
    },
    2482: function (d, S, n) {
      'use strict';
      var l = n(75386),
        f = n(59209),
        v = n(2792);
      d.exports = function (g, y) {
        if ((l(g), f(y) && y.constructor === g)) return y;
        var O = v.f(g),
          x = O.resolve;
        return x(y), O.promise;
      };
    },
    56347: function (d, S, n) {
      'use strict';
      var l = n(86975),
        f = n(81614),
        v = n(6307).CONSTRUCTOR;
      d.exports =
        v ||
        !f(function (g) {
          l.all(g).then(void 0, function () {});
        });
    },
    46818: function (d) {
      'use strict';
      var S = function () {
        (this.head = null), (this.tail = null);
      };
      (S.prototype = {
        add: function (n) {
          var l = { item: n, next: null },
            f = this.tail;
          f ? (f.next = l) : (this.head = l), (this.tail = l);
        },
        get: function () {
          var n = this.head;
          if (n) {
            var l = (this.head = n.next);
            return l === null && (this.tail = null), n.item;
          }
        },
      }),
        (d.exports = S);
    },
    6982: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(75386),
        v = n(86606),
        g = n(95292),
        y = n(54487),
        O = TypeError;
      d.exports = function (x, b) {
        var C = x.exec;
        if (v(C)) {
          var A = l(C, x, b);
          return A !== null && f(A), A;
        }
        if (g(x) === 'RegExp') return l(y, x, b);
        throw new O('RegExp#exec called on incompatible receiver');
      };
    },
    54487: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(65191),
        v = n(29997),
        g = n(53805),
        y = n(45505),
        O = n(81012),
        x = n(81194),
        b = n(86203).get,
        C = n(98999),
        A = n(30277),
        R = O('native-string-replace', String.prototype.replace),
        P = RegExp.prototype.exec,
        w = P,
        I = f(''.charAt),
        N = f(''.indexOf),
        B = f(''.replace),
        Y = f(''.slice),
        $ = (function () {
          var Q = /a/,
            _ = /b*/g;
          return l(P, Q, 'a'), l(P, _, 'a'), Q.lastIndex !== 0 || _.lastIndex !== 0;
        })(),
        F = y.BROKEN_CARET,
        G = /()??/.exec('')[1] !== void 0,
        X = $ || G || F || C || A;
      X &&
        (w = function (_) {
          var J = this,
            xt = b(J),
            tt = v(_),
            et = xt.raw,
            ut,
            ot,
            ht,
            Z,
            q,
            Ut,
            it;
          if (et)
            return (
              (et.lastIndex = J.lastIndex), (ut = l(w, et, tt)), (J.lastIndex = et.lastIndex), ut
            );
          var ft = xt.groups,
            lt = F && J.sticky,
            M = l(g, J),
            Et = J.source,
            Vt = 0,
            Pt = tt;
          if (
            (lt &&
              ((M = B(M, 'y', '')),
              N(M, 'g') === -1 && (M += 'g'),
              (Pt = Y(tt, J.lastIndex)),
              J.lastIndex > 0 &&
                (!J.multiline ||
                  (J.multiline &&
                    I(tt, J.lastIndex - 1) !==
                      `
`)) &&
                ((Et = '(?: ' + Et + ')'), (Pt = ' ' + Pt), Vt++),
              (ot = new RegExp('^(?:' + Et + ')', M))),
            G && (ot = new RegExp('^' + Et + '$(?!\\s)', M)),
            $ && (ht = J.lastIndex),
            (Z = l(P, lt ? ot : J, Pt)),
            lt
              ? Z
                ? ((Z.input = Y(Z.input, Vt)),
                  (Z[0] = Y(Z[0], Vt)),
                  (Z.index = J.lastIndex),
                  (J.lastIndex += Z[0].length))
                : (J.lastIndex = 0)
              : $ && Z && (J.lastIndex = J.global ? Z.index + Z[0].length : ht),
            G &&
              Z &&
              Z.length > 1 &&
              l(R, Z[0], ot, function () {
                for (q = 1; q < arguments.length - 2; q++)
                  arguments[q] === void 0 && (Z[q] = void 0);
              }),
            Z && ft)
          )
            for (Z.groups = Ut = x(null), q = 0; q < ft.length; q++)
              (it = ft[q]), (Ut[it[0]] = Z[it[1]]);
          return Z;
        }),
        (d.exports = w);
    },
    53805: function (d, S, n) {
      'use strict';
      var l = n(75386);
      d.exports = function () {
        var f = l(this),
          v = '';
        return (
          f.hasIndices && (v += 'd'),
          f.global && (v += 'g'),
          f.ignoreCase && (v += 'i'),
          f.multiline && (v += 'm'),
          f.dotAll && (v += 's'),
          f.unicode && (v += 'u'),
          f.unicodeSets && (v += 'v'),
          f.sticky && (v += 'y'),
          v
        );
      };
    },
    28318: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(40667),
        v = n(42172),
        g = n(53805),
        y = RegExp.prototype;
      d.exports = function (O) {
        var x = O.flags;
        return x === void 0 && !('flags' in y) && !f(O, 'flags') && v(y, O) ? l(g, O) : x;
      };
    },
    45505: function (d, S, n) {
      'use strict';
      var l = n(51794),
        f = n(78691),
        v = f.RegExp,
        g = l(function () {
          var x = v('a', 'y');
          return (x.lastIndex = 2), x.exec('abcd') !== null;
        }),
        y =
          g ||
          l(function () {
            return !v('a', 'y').sticky;
          }),
        O =
          g ||
          l(function () {
            var x = v('^r', 'gy');
            return (x.lastIndex = 2), x.exec('str') !== null;
          });
      d.exports = { BROKEN_CARET: O, MISSED_STICKY: y, UNSUPPORTED_Y: g };
    },
    98999: function (d, S, n) {
      'use strict';
      var l = n(51794),
        f = n(78691),
        v = f.RegExp;
      d.exports = l(function () {
        var g = v('.', 's');
        return !(
          g.dotAll &&
          g.test(`
`) &&
          g.flags === 's'
        );
      });
    },
    30277: function (d, S, n) {
      'use strict';
      var l = n(51794),
        f = n(78691),
        v = f.RegExp;
      d.exports = l(function () {
        var g = v('(?<a>b)', 'g');
        return g.exec('b').groups.a !== 'b' || 'b'.replace(g, '$<a>c') !== 'bc';
      });
    },
    97985: function (d, S, n) {
      'use strict';
      var l = n(53590),
        f = TypeError;
      d.exports = function (v) {
        if (l(v)) throw new f("Can't call method on " + v);
        return v;
      };
    },
    97711: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(72251),
        v = Object.getOwnPropertyDescriptor;
      d.exports = function (g) {
        if (!f) return l[g];
        var y = v(l, g);
        return y && y.value;
      };
    },
    23064: function (d, S, n) {
      'use strict';
      var l = n(18137),
        f = n(44040),
        v = n(23912),
        g = n(72251),
        y = v('species');
      d.exports = function (O) {
        var x = l(O);
        g &&
          x &&
          !x[y] &&
          f(x, y, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    32164: function (d, S, n) {
      'use strict';
      var l = n(47525).f,
        f = n(40667),
        v = n(23912),
        g = v('toStringTag');
      d.exports = function (y, O, x) {
        y && !x && (y = y.prototype), y && !f(y, g) && l(y, g, { configurable: !0, value: O });
      };
    },
    32387: function (d, S, n) {
      'use strict';
      var l = n(81012),
        f = n(78091),
        v = l('keys');
      d.exports = function (g) {
        return v[g] || (v[g] = f(g));
      };
    },
    67643: function (d, S, n) {
      'use strict';
      var l = n(51284),
        f = n(78691),
        v = n(65416),
        g = '__core-js_shared__',
        y = (d.exports = f[g] || v(g, {}));
      (y.versions || (y.versions = [])).push({
        version: '3.38.1',
        mode: l ? 'pure' : 'global',
        copyright: '\xA9 2014-2024 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
        source: 'https://github.com/zloirock/core-js',
      });
    },
    81012: function (d, S, n) {
      'use strict';
      var l = n(67643);
      d.exports = function (f, v) {
        return l[f] || (l[f] = v || {});
      };
    },
    88811: function (d, S, n) {
      'use strict';
      var l = n(75386),
        f = n(9987),
        v = n(53590),
        g = n(23912),
        y = g('species');
      d.exports = function (O, x) {
        var b = l(O).constructor,
          C;
        return b === void 0 || v((C = l(b)[y])) ? x : f(C);
      };
    },
    50112: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(69183),
        v = n(29997),
        g = n(97985),
        y = l(''.charAt),
        O = l(''.charCodeAt),
        x = l(''.slice),
        b = function (C) {
          return function (A, R) {
            var P = v(g(A)),
              w = f(R),
              I = P.length,
              N,
              B;
            return w < 0 || w >= I
              ? C
                ? ''
                : void 0
              : ((N = O(P, w)),
                N < 55296 || N > 56319 || w + 1 === I || (B = O(P, w + 1)) < 56320 || B > 57343
                  ? C
                    ? y(P, w)
                    : N
                  : C
                  ? x(P, w, w + 2)
                  : ((N - 55296) << 10) + (B - 56320) + 65536);
          };
        };
      d.exports = { codeAt: b(!1), charAt: b(!0) };
    },
    35059: function (d, S, n) {
      'use strict';
      var l = n(94099).PROPER,
        f = n(51794),
        v = n(83476),
        g = '\u200B\x85\u180E';
      d.exports = function (y) {
        return f(function () {
          return !!v[y]() || g[y]() !== g || (l && v[y].name !== y);
        });
      };
    },
    64266: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = n(97985),
        v = n(29997),
        g = n(83476),
        y = l(''.replace),
        O = RegExp('^[' + g + ']+'),
        x = RegExp('(^|[^' + g + '])[' + g + ']+$'),
        b = function (C) {
          return function (A) {
            var R = v(f(A));
            return C & 1 && (R = y(R, O, '')), C & 2 && (R = y(R, x, '$1')), R;
          };
        };
      d.exports = { start: b(1), end: b(2), trim: b(3) };
    },
    6600: function (d, S, n) {
      'use strict';
      var l = n(70841),
        f = n(51794),
        v = n(78691),
        g = v.String;
      d.exports =
        !!Object.getOwnPropertySymbols &&
        !f(function () {
          var y = Symbol('symbol detection');
          return !g(y) || !(Object(y) instanceof Symbol) || (!Symbol.sham && l && l < 41);
        });
    },
    41841: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(95597),
        v = n(20260),
        g = n(86606),
        y = n(40667),
        O = n(51794),
        x = n(91422),
        b = n(2255),
        C = n(23753),
        A = n(13230),
        R = n(62180),
        P = n(8374),
        w = l.setImmediate,
        I = l.clearImmediate,
        N = l.process,
        B = l.Dispatch,
        Y = l.Function,
        $ = l.MessageChannel,
        F = l.String,
        G = 0,
        X = {},
        Q = 'onreadystatechange',
        _,
        J,
        xt,
        tt;
      O(function () {
        _ = l.location;
      });
      var et = function (Z) {
          if (y(X, Z)) {
            var q = X[Z];
            delete X[Z], q();
          }
        },
        ut = function (Z) {
          return function () {
            et(Z);
          };
        },
        ot = function (Z) {
          et(Z.data);
        },
        ht = function (Z) {
          l.postMessage(F(Z), _.protocol + '//' + _.host);
        };
      (!w || !I) &&
        ((w = function (q) {
          A(arguments.length, 1);
          var Ut = g(q) ? q : Y(q),
            it = b(arguments, 1);
          return (
            (X[++G] = function () {
              f(Ut, void 0, it);
            }),
            J(G),
            G
          );
        }),
        (I = function (q) {
          delete X[q];
        }),
        P
          ? (J = function (Z) {
              N.nextTick(ut(Z));
            })
          : B && B.now
          ? (J = function (Z) {
              B.now(ut(Z));
            })
          : $ && !R
          ? ((xt = new $()),
            (tt = xt.port2),
            (xt.port1.onmessage = ot),
            (J = v(tt.postMessage, tt)))
          : l.addEventListener &&
            g(l.postMessage) &&
            !l.importScripts &&
            _ &&
            _.protocol !== 'file:' &&
            !O(ht)
          ? ((J = ht), l.addEventListener('message', ot, !1))
          : Q in C('script')
          ? (J = function (Z) {
              x.appendChild(C('script'))[Q] = function () {
                x.removeChild(this), et(Z);
              };
            })
          : (J = function (Z) {
              setTimeout(ut(Z), 0);
            })),
        (d.exports = { set: w, clear: I });
    },
    24632: function (d, S, n) {
      'use strict';
      var l = n(69183),
        f = Math.max,
        v = Math.min;
      d.exports = function (g, y) {
        var O = l(g);
        return O < 0 ? f(O + y, 0) : v(O, y);
      };
    },
    36689: function (d, S, n) {
      'use strict';
      var l = n(22132),
        f = n(97985);
      d.exports = function (v) {
        return l(f(v));
      };
    },
    69183: function (d, S, n) {
      'use strict';
      var l = n(2623);
      d.exports = function (f) {
        var v = +f;
        return v !== v || v === 0 ? 0 : l(v);
      };
    },
    42919: function (d, S, n) {
      'use strict';
      var l = n(69183),
        f = Math.min;
      d.exports = function (v) {
        var g = l(v);
        return g > 0 ? f(g, 9007199254740991) : 0;
      };
    },
    14311: function (d, S, n) {
      'use strict';
      var l = n(97985),
        f = Object;
      d.exports = function (v) {
        return f(l(v));
      };
    },
    28620: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(59209),
        v = n(88920),
        g = n(89045),
        y = n(9754),
        O = n(23912),
        x = TypeError,
        b = O('toPrimitive');
      d.exports = function (C, A) {
        if (!f(C) || v(C)) return C;
        var R = g(C, b),
          P;
        if (R) {
          if ((A === void 0 && (A = 'default'), (P = l(R, C, A)), !f(P) || v(P))) return P;
          throw new x("Can't convert object to primitive value");
        }
        return A === void 0 && (A = 'number'), y(C, A);
      };
    },
    91613: function (d, S, n) {
      'use strict';
      var l = n(28620),
        f = n(88920);
      d.exports = function (v) {
        var g = l(v, 'string');
        return f(g) ? g : g + '';
      };
    },
    46841: function (d, S, n) {
      'use strict';
      var l = n(23912),
        f = l('toStringTag'),
        v = {};
      (v[f] = 'z'), (d.exports = String(v) === '[object z]');
    },
    29997: function (d, S, n) {
      'use strict';
      var l = n(84300),
        f = String;
      d.exports = function (v) {
        if (l(v) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
        return f(v);
      };
    },
    30325: function (d) {
      'use strict';
      var S = String;
      d.exports = function (n) {
        try {
          return S(n);
        } catch (l) {
          return 'Object';
        }
      };
    },
    78091: function (d, S, n) {
      'use strict';
      var l = n(65191),
        f = 0,
        v = Math.random(),
        g = l((1).toString);
      d.exports = function (y) {
        return 'Symbol(' + (y === void 0 ? '' : y) + ')_' + g(++f + v, 36);
      };
    },
    71527: function (d, S, n) {
      'use strict';
      var l = n(6600);
      d.exports = l && !Symbol.sham && typeof Symbol.iterator == 'symbol';
    },
    45429: function (d, S, n) {
      'use strict';
      var l = n(72251),
        f = n(51794);
      d.exports =
        l &&
        f(function () {
          return (
            Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 })
              .prototype !== 42
          );
        });
    },
    13230: function (d) {
      'use strict';
      var S = TypeError;
      d.exports = function (n, l) {
        if (n < l) throw new S('Not enough arguments');
        return n;
      };
    },
    20265: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(86606),
        v = l.WeakMap;
      d.exports = f(v) && /native code/.test(String(v));
    },
    23912: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(81012),
        v = n(40667),
        g = n(78091),
        y = n(6600),
        O = n(71527),
        x = l.Symbol,
        b = f('wks'),
        C = O ? x.for || x : (x && x.withoutSetter) || g;
      d.exports = function (A) {
        return v(b, A) || (b[A] = y && v(x, A) ? x[A] : C('Symbol.' + A)), b[A];
      };
    },
    83476: function (d) {
      'use strict';
      d.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
    },
    17383: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(38146),
        v = n(56535).indexOf,
        g = n(11187),
        y = f([].indexOf),
        O = !!y && 1 / y([1], 1, -0) < 0,
        x = O || !g('indexOf');
      l(
        { target: 'Array', proto: !0, forced: x },
        {
          indexOf: function (C) {
            var A = arguments.length > 1 ? arguments[1] : void 0;
            return O ? y(this, C, A) || 0 : v(this, C, A);
          },
        },
      );
    },
    33068: function (d, S, n) {
      'use strict';
      var l = n(36689),
        f = n(54935),
        v = n(33345),
        g = n(86203),
        y = n(47525).f,
        O = n(50329),
        x = n(97162),
        b = n(51284),
        C = n(72251),
        A = 'Array Iterator',
        R = g.set,
        P = g.getterFor(A);
      d.exports = O(
        Array,
        'Array',
        function (I, N) {
          R(this, { type: A, target: l(I), index: 0, kind: N });
        },
        function () {
          var I = P(this),
            N = I.target,
            B = I.index++;
          if (!N || B >= N.length) return (I.target = null), x(void 0, !0);
          switch (I.kind) {
            case 'keys':
              return x(B, !1);
            case 'values':
              return x(N[B], !1);
          }
          return x([B, N[B]], !1);
        },
        'values',
      );
      var w = (v.Arguments = v.Array);
      if ((f('keys'), f('values'), f('entries'), !b && C && w.name !== 'values'))
        try {
          y(w, 'name', { value: 'values' });
        } catch (I) {}
    },
    2930: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(83247).left,
        v = n(11187),
        g = n(70841),
        y = n(8374),
        O = !y && g > 79 && g < 83,
        x = O || !v('reduce');
      l(
        { target: 'Array', proto: !0, forced: x },
        {
          reduce: function (C) {
            var A = arguments.length;
            return f(this, C, A, A > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    33371: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(65191),
        v = n(76511),
        g = f([].reverse),
        y = [1, 2];
      l(
        { target: 'Array', proto: !0, forced: String(y) === String(y.reverse()) },
        {
          reverse: function () {
            return v(this) && (this.length = this.length), g(this);
          },
        },
      );
    },
    13387: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(92221),
        v = n(23478),
        g = n(2792),
        y = n(85917),
        O = n(38214),
        x = n(56347);
      l(
        { target: 'Promise', stat: !0, forced: x },
        {
          all: function (C) {
            var A = this,
              R = g.f(A),
              P = R.resolve,
              w = R.reject,
              I = y(function () {
                var N = v(A.resolve),
                  B = [],
                  Y = 0,
                  $ = 1;
                O(C, function (F) {
                  var G = Y++,
                    X = !1;
                  $++,
                    f(N, A, F).then(function (Q) {
                      X || ((X = !0), (B[G] = Q), --$ || P(B));
                    }, w);
                }),
                  --$ || P(B);
              });
            return I.error && w(I.value), R.promise;
          },
        },
      );
    },
    25533: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(51284),
        v = n(6307).CONSTRUCTOR,
        g = n(86975),
        y = n(18137),
        O = n(86606),
        x = n(47263),
        b = g && g.prototype;
      if (
        (l(
          { target: 'Promise', proto: !0, forced: v, real: !0 },
          {
            catch: function (A) {
              return this.then(void 0, A);
            },
          },
        ),
        !f && O(g))
      ) {
        var C = y('Promise').prototype.catch;
        b.catch !== C && x(b, 'catch', C, { unsafe: !0 });
      }
    },
    15728: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(51284),
        v = n(8374),
        g = n(78691),
        y = n(92221),
        O = n(47263),
        x = n(85774),
        b = n(32164),
        C = n(23064),
        A = n(23478),
        R = n(86606),
        P = n(59209),
        w = n(26590),
        I = n(88811),
        N = n(41841).set,
        B = n(42505),
        Y = n(54698),
        $ = n(85917),
        F = n(46818),
        G = n(86203),
        X = n(86975),
        Q = n(6307),
        _ = n(2792),
        J = 'Promise',
        xt = Q.CONSTRUCTOR,
        tt = Q.REJECTION_EVENT,
        et = Q.SUBCLASSING,
        ut = G.getterFor(J),
        ot = G.set,
        ht = X && X.prototype,
        Z = X,
        q = ht,
        Ut = g.TypeError,
        it = g.document,
        ft = g.process,
        lt = _.f,
        M = lt,
        Et = !!(it && it.createEvent && g.dispatchEvent),
        Vt = 'unhandledrejection',
        Pt = 'rejectionhandled',
        Rt = 0,
        jt = 1,
        we = 2,
        Se = 1,
        qt = 2,
        kt,
        le,
        ie,
        he,
        Jt = function (W) {
          var nt;
          return P(W) && R((nt = W.then)) ? nt : !1;
        },
        fe = function (W, nt) {
          var ct = nt.value,
            dt = nt.state === jt,
            bt = dt ? W.ok : W.fail,
            ve = W.resolve,
            Ve = W.reject,
            ge = W.domain,
            de,
            We,
            te;
          try {
            bt
              ? (dt || (nt.rejection === qt && Xe(nt), (nt.rejection = Se)),
                bt === !0
                  ? (de = ct)
                  : (ge && ge.enter(), (de = bt(ct)), ge && (ge.exit(), (te = !0))),
                de === W.promise
                  ? Ve(new Ut('Promise-chain cycle'))
                  : (We = Jt(de))
                  ? y(We, de, ve, Ve)
                  : ve(de))
              : Ve(ct);
          } catch (Qe) {
            ge && !te && ge.exit(), Ve(Qe);
          }
        },
        ce = function (W, nt) {
          W.notified ||
            ((W.notified = !0),
            B(function () {
              for (var ct = W.reactions, dt; (dt = ct.get()); ) fe(dt, W);
              (W.notified = !1), nt && !W.rejection && or(W);
            }));
        },
        be = function (W, nt, ct) {
          var dt, bt;
          Et
            ? ((dt = it.createEvent('Event')),
              (dt.promise = nt),
              (dt.reason = ct),
              dt.initEvent(W, !1, !0),
              g.dispatchEvent(dt))
            : (dt = { promise: nt, reason: ct }),
            !tt && (bt = g['on' + W]) ? bt(dt) : W === Vt && Y('Unhandled promise rejection', ct);
        },
        or = function (W) {
          y(N, g, function () {
            var nt = W.facade,
              ct = W.value,
              dt = _t(W),
              bt;
            if (
              dt &&
              ((bt = $(function () {
                v ? ft.emit('unhandledRejection', ct, nt) : be(Vt, nt, ct);
              })),
              (W.rejection = v || _t(W) ? qt : Se),
              bt.error)
            )
              throw bt.value;
          });
        },
        _t = function (W) {
          return W.rejection !== Se && !W.parent;
        },
        Xe = function (W) {
          y(N, g, function () {
            var nt = W.facade;
            v ? ft.emit('rejectionHandled', nt) : be(Pt, nt, W.value);
          });
        },
        ae = function (W, nt, ct) {
          return function (dt) {
            W(nt, dt, ct);
          };
        },
        Mt = function (W, nt, ct) {
          W.done || ((W.done = !0), ct && (W = ct), (W.value = nt), (W.state = we), ce(W, !0));
        },
        je = function (W, nt, ct) {
          if (!W.done) {
            (W.done = !0), ct && (W = ct);
            try {
              if (W.facade === nt) throw new Ut("Promise can't be resolved itself");
              var dt = Jt(nt);
              dt
                ? B(function () {
                    var bt = { done: !1 };
                    try {
                      y(dt, nt, ae(je, bt, W), ae(Mt, bt, W));
                    } catch (ve) {
                      Mt(bt, ve, W);
                    }
                  })
                : ((W.value = nt), (W.state = jt), ce(W, !1));
            } catch (bt) {
              Mt({ done: !1 }, bt, W);
            }
          }
        };
      if (
        xt &&
        ((Z = function (nt) {
          w(this, q), A(nt), y(kt, this);
          var ct = ut(this);
          try {
            nt(ae(je, ct), ae(Mt, ct));
          } catch (dt) {
            Mt(ct, dt);
          }
        }),
        (q = Z.prototype),
        (kt = function (nt) {
          ot(this, {
            type: J,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new F(),
            rejection: !1,
            state: Rt,
            value: null,
          });
        }),
        (kt.prototype = O(q, 'then', function (nt, ct) {
          var dt = ut(this),
            bt = lt(I(this, Z));
          return (
            (dt.parent = !0),
            (bt.ok = R(nt) ? nt : !0),
            (bt.fail = R(ct) && ct),
            (bt.domain = v ? ft.domain : void 0),
            dt.state === Rt
              ? dt.reactions.add(bt)
              : B(function () {
                  fe(bt, dt);
                }),
            bt.promise
          );
        })),
        (le = function () {
          var W = new kt(),
            nt = ut(W);
          (this.promise = W), (this.resolve = ae(je, nt)), (this.reject = ae(Mt, nt));
        }),
        (_.f = lt =
          function (W) {
            return W === Z || W === ie ? new le(W) : M(W);
          }),
        !f && R(X) && ht !== Object.prototype)
      ) {
        (he = ht.then),
          et ||
            O(
              ht,
              'then',
              function (nt, ct) {
                var dt = this;
                return new Z(function (bt, ve) {
                  y(he, dt, bt, ve);
                }).then(nt, ct);
              },
              { unsafe: !0 },
            );
        try {
          delete ht.constructor;
        } catch (W) {}
        x && x(ht, q);
      }
      l({ global: !0, constructor: !0, wrap: !0, forced: xt }, { Promise: Z }),
        b(Z, J, !1, !0),
        C(J);
    },
    3219: function (d, S, n) {
      'use strict';
      n(15728), n(13387), n(25533), n(75425), n(75952), n(18747);
    },
    75425: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(92221),
        v = n(23478),
        g = n(2792),
        y = n(85917),
        O = n(38214),
        x = n(56347);
      l(
        { target: 'Promise', stat: !0, forced: x },
        {
          race: function (C) {
            var A = this,
              R = g.f(A),
              P = R.reject,
              w = y(function () {
                var I = v(A.resolve);
                O(C, function (N) {
                  f(I, A, N).then(R.resolve, P);
                });
              });
            return w.error && P(w.value), R.promise;
          },
        },
      );
    },
    75952: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(2792),
        v = n(6307).CONSTRUCTOR;
      l(
        { target: 'Promise', stat: !0, forced: v },
        {
          reject: function (y) {
            var O = f.f(this),
              x = O.reject;
            return x(y), O.promise;
          },
        },
      );
    },
    18747: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(18137),
        v = n(51284),
        g = n(86975),
        y = n(6307).CONSTRUCTOR,
        O = n(2482),
        x = f('Promise'),
        b = v && !y;
      l(
        { target: 'Promise', stat: !0, forced: v || y },
        {
          resolve: function (A) {
            return O(b && this === x ? g : this, A);
          },
        },
      );
    },
    35401: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(54487);
      l({ target: 'RegExp', proto: !0, forced: /./.exec !== f }, { exec: f });
    },
    78277: function (d, S, n) {
      'use strict';
      var l = n(94099).PROPER,
        f = n(47263),
        v = n(75386),
        g = n(29997),
        y = n(51794),
        O = n(28318),
        x = 'toString',
        b = RegExp.prototype,
        C = b[x],
        A = y(function () {
          return C.call({ source: 'a', flags: 'b' }) !== '/a/b';
        }),
        R = l && C.name !== x;
      (A || R) &&
        f(
          b,
          x,
          function () {
            var w = v(this),
              I = g(w.source),
              N = g(O(w));
            return '/' + I + '/' + N;
          },
          { unsafe: !0 },
        );
    },
    6058: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(38146),
        v = n(84387).f,
        g = n(42919),
        y = n(29997),
        O = n(61323),
        x = n(97985),
        b = n(19641),
        C = n(51284),
        A = f(''.slice),
        R = Math.min,
        P = b('endsWith'),
        w =
          !C &&
          !P &&
          !!(function () {
            var I = v(String.prototype, 'endsWith');
            return I && !I.writable;
          })();
      l(
        { target: 'String', proto: !0, forced: !w && !P },
        {
          endsWith: function (N) {
            var B = y(x(this));
            O(N);
            var Y = arguments.length > 1 ? arguments[1] : void 0,
              $ = B.length,
              F = Y === void 0 ? $ : R(g(Y), $),
              G = y(N);
            return A(B, F - G.length, F) === G;
          },
        },
      );
    },
    95438: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(65191),
        v = n(61323),
        g = n(97985),
        y = n(29997),
        O = n(19641),
        x = f(''.indexOf);
      l(
        { target: 'String', proto: !0, forced: !O('includes') },
        {
          includes: function (C) {
            return !!~x(y(g(this)), y(v(C)), arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    40700: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(58089),
        v = n(75386),
        g = n(53590),
        y = n(42919),
        O = n(29997),
        x = n(97985),
        b = n(89045),
        C = n(13777),
        A = n(6982);
      f('match', function (R, P, w) {
        return [
          function (N) {
            var B = x(this),
              Y = g(N) ? void 0 : b(N, R);
            return Y ? l(Y, N, B) : new RegExp(N)[R](O(B));
          },
          function (I) {
            var N = v(this),
              B = O(I),
              Y = w(P, N, B);
            if (Y.done) return Y.value;
            if (!N.global) return A(N, B);
            var $ = N.unicode;
            N.lastIndex = 0;
            for (var F = [], G = 0, X; (X = A(N, B)) !== null; ) {
              var Q = O(X[0]);
              (F[G] = Q), Q === '' && (N.lastIndex = C(B, y(N.lastIndex), $)), G++;
            }
            return G === 0 ? null : F;
          },
        ];
      });
    },
    90274: function (d, S, n) {
      'use strict';
      var l = n(95597),
        f = n(92221),
        v = n(65191),
        g = n(58089),
        y = n(51794),
        O = n(75386),
        x = n(86606),
        b = n(53590),
        C = n(69183),
        A = n(42919),
        R = n(29997),
        P = n(97985),
        w = n(13777),
        I = n(89045),
        N = n(2280),
        B = n(6982),
        Y = n(23912),
        $ = Y('replace'),
        F = Math.max,
        G = Math.min,
        X = v([].concat),
        Q = v([].push),
        _ = v(''.indexOf),
        J = v(''.slice),
        xt = function (ot) {
          return ot === void 0 ? ot : String(ot);
        },
        tt = (function () {
          return 'a'.replace(/./, '$0') === '$0';
        })(),
        et = (function () {
          return /./[$] ? /./[$]('a', '$0') === '' : !1;
        })(),
        ut = !y(function () {
          var ot = /./;
          return (
            (ot.exec = function () {
              var ht = [];
              return (ht.groups = { a: '7' }), ht;
            }),
            ''.replace(ot, '$<a>') !== '7'
          );
        });
      g(
        'replace',
        function (ot, ht, Z) {
          var q = et ? '$' : '$0';
          return [
            function (it, ft) {
              var lt = P(this),
                M = b(it) ? void 0 : I(it, $);
              return M ? f(M, it, lt, ft) : f(ht, R(lt), it, ft);
            },
            function (Ut, it) {
              var ft = O(this),
                lt = R(Ut);
              if (typeof it == 'string' && _(it, q) === -1 && _(it, '$<') === -1) {
                var M = Z(ht, ft, lt, it);
                if (M.done) return M.value;
              }
              var Et = x(it);
              Et || (it = R(it));
              var Vt = ft.global,
                Pt;
              Vt && ((Pt = ft.unicode), (ft.lastIndex = 0));
              for (var Rt = [], jt; (jt = B(ft, lt)), !(jt === null || (Q(Rt, jt), !Vt)); ) {
                var we = R(jt[0]);
                we === '' && (ft.lastIndex = w(lt, A(ft.lastIndex), Pt));
              }
              for (var Se = '', qt = 0, kt = 0; kt < Rt.length; kt++) {
                jt = Rt[kt];
                for (
                  var le = R(jt[0]), ie = F(G(C(jt.index), lt.length), 0), he = [], Jt, fe = 1;
                  fe < jt.length;
                  fe++
                )
                  Q(he, xt(jt[fe]));
                var ce = jt.groups;
                if (Et) {
                  var be = X([le], he, ie, lt);
                  ce !== void 0 && Q(be, ce), (Jt = R(l(it, void 0, be)));
                } else Jt = N(le, lt, ie, he, ce, it);
                ie >= qt && ((Se += J(lt, qt, ie) + Jt), (qt = ie + le.length));
              }
              return Se + J(lt, qt);
            },
          ];
        },
        !ut || !tt || et,
      );
    },
    89650: function (d, S, n) {
      'use strict';
      var l = n(92221),
        f = n(65191),
        v = n(58089),
        g = n(75386),
        y = n(53590),
        O = n(97985),
        x = n(88811),
        b = n(13777),
        C = n(42919),
        A = n(29997),
        R = n(89045),
        P = n(6982),
        w = n(45505),
        I = n(51794),
        N = w.UNSUPPORTED_Y,
        B = 4294967295,
        Y = Math.min,
        $ = f([].push),
        F = f(''.slice),
        G = !I(function () {
          var Q = /(?:)/,
            _ = Q.exec;
          Q.exec = function () {
            return _.apply(this, arguments);
          };
          var J = 'ab'.split(Q);
          return J.length !== 2 || J[0] !== 'a' || J[1] !== 'b';
        }),
        X =
          'abbc'.split(/(b)*/)[1] === 'c' ||
          'test'.split(/(?:)/, -1).length !== 4 ||
          'ab'.split(/(?:ab)*/).length !== 2 ||
          '.'.split(/(.?)(.?)/).length !== 4 ||
          '.'.split(/()()/).length > 1 ||
          ''.split(/.?/).length;
      v(
        'split',
        function (Q, _, J) {
          var xt = '0'.split(void 0, 0).length
            ? function (tt, et) {
                return tt === void 0 && et === 0 ? [] : l(_, this, tt, et);
              }
            : _;
          return [
            function (et, ut) {
              var ot = O(this),
                ht = y(et) ? void 0 : R(et, Q);
              return ht ? l(ht, et, ot, ut) : l(xt, A(ot), et, ut);
            },
            function (tt, et) {
              var ut = g(this),
                ot = A(tt);
              if (!X) {
                var ht = J(xt, ut, ot, et, xt !== _);
                if (ht.done) return ht.value;
              }
              var Z = x(ut, RegExp),
                q = ut.unicode,
                Ut =
                  (ut.ignoreCase ? 'i' : '') +
                  (ut.multiline ? 'm' : '') +
                  (ut.unicode ? 'u' : '') +
                  (N ? 'g' : 'y'),
                it = new Z(N ? '^(?:' + ut.source + ')' : ut, Ut),
                ft = et === void 0 ? B : et >>> 0;
              if (ft === 0) return [];
              if (ot.length === 0) return P(it, ot) === null ? [ot] : [];
              for (var lt = 0, M = 0, Et = []; M < ot.length; ) {
                it.lastIndex = N ? 0 : M;
                var Vt = P(it, N ? F(ot, M) : ot),
                  Pt;
                if (Vt === null || (Pt = Y(C(it.lastIndex + (N ? M : 0)), ot.length)) === lt)
                  M = b(ot, M, q);
                else {
                  if (($(Et, F(ot, lt, M)), Et.length === ft)) return Et;
                  for (var Rt = 1; Rt <= Vt.length - 1; Rt++)
                    if (($(Et, Vt[Rt]), Et.length === ft)) return Et;
                  M = lt = Pt;
                }
              }
              return $(Et, F(ot, lt)), Et;
            },
          ];
        },
        X || !G,
        N,
      );
    },
    48196: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(38146),
        v = n(84387).f,
        g = n(42919),
        y = n(29997),
        O = n(61323),
        x = n(97985),
        b = n(19641),
        C = n(51284),
        A = f(''.slice),
        R = Math.min,
        P = b('startsWith'),
        w =
          !C &&
          !P &&
          !!(function () {
            var I = v(String.prototype, 'startsWith');
            return I && !I.writable;
          })();
      l(
        { target: 'String', proto: !0, forced: !w && !P },
        {
          startsWith: function (N) {
            var B = y(x(this));
            O(N);
            var Y = g(R(arguments.length > 1 ? arguments[1] : void 0, B.length)),
              $ = y(N);
            return A(B, Y, Y + $.length) === $;
          },
        },
      );
    },
    11386: function (d, S, n) {
      'use strict';
      var l = n(83859),
        f = n(64266).trim,
        v = n(35059);
      l(
        { target: 'String', proto: !0, forced: v('trim') },
        {
          trim: function () {
            return f(this);
          },
        },
      );
    },
    75109: function (d, S, n) {
      'use strict';
      var l = n(78691),
        f = n(77709),
        v = n(14533),
        g = n(33068),
        y = n(16093),
        O = n(32164),
        x = n(23912),
        b = x('iterator'),
        C = g.values,
        A = function (P, w) {
          if (P) {
            if (P[b] !== C)
              try {
                y(P, b, C);
              } catch (N) {
                P[b] = C;
              }
            if ((O(P, w, !0), f[w])) {
              for (var I in g)
                if (P[I] !== g[I])
                  try {
                    y(P, I, g[I]);
                  } catch (N) {
                    P[I] = g[I];
                  }
            }
          }
        };
      for (var R in f) A(l[R] && l[R].prototype, R);
      A(v, 'DOMTokenList');
    },
    30938: function (d, S, n) {
      'use strict';
      n.r(S),
        n.d(S, {
          AElement: function () {
            return un;
          },
          AnimateColorElement: function () {
            return en;
          },
          AnimateElement: function () {
            return Je;
          },
          AnimateTransformElement: function () {
            return rn;
          },
          BoundingBox: function () {
            return Zt;
          },
          CB1: function () {
            return hr;
          },
          CB2: function () {
            return fr;
          },
          CB3: function () {
            return cr;
          },
          CB4: function () {
            return vr;
          },
          Canvg: function () {
            return Pe;
          },
          CircleElement: function () {
            return Xr;
          },
          ClipPathElement: function () {
            return pn;
          },
          DefsElement: function () {
            return Jr;
          },
          DescElement: function () {
            return On;
          },
          Document: function () {
            return ue;
          },
          Element: function () {
            return Ct;
          },
          EllipseElement: function () {
            return Wr;
          },
          FeColorMatrixElement: function () {
            return br;
          },
          FeCompositeElement: function () {
            return xn;
          },
          FeDropShadowElement: function () {
            return yn;
          },
          FeGaussianBlurElement: function () {
            return En;
          },
          FeMorphologyElement: function () {
            return mn;
          },
          FilterElement: function () {
            return He;
          },
          Font: function () {
            return $t;
          },
          FontElement: function () {
            return nn;
          },
          FontFaceElement: function () {
            return an;
          },
          GElement: function () {
            return ke;
          },
          GlyphElement: function () {
            return xr;
          },
          GradientElement: function () {
            return Or;
          },
          ImageElement: function () {
            return fn;
          },
          LineElement: function () {
            return Qr;
          },
          LinearGradientElement: function () {
            return qr;
          },
          MarkerElement: function () {
            return kr;
          },
          MaskElement: function () {
            return $e;
          },
          Matrix: function () {
            return yr;
          },
          MissingGlyphElement: function () {
            return sn;
          },
          Mouse: function () {
            return Br;
          },
          PSEUDO_ZERO: function () {
            return Ce;
          },
          Parser: function () {
            return Ke;
          },
          PathElement: function () {
            return yt;
          },
          PathParser: function () {
            return at;
          },
          PatternElement: function () {
            return Kr;
          },
          Point: function () {
            return Nt;
          },
          PolygonElement: function () {
            return Zr;
          },
          PolylineElement: function () {
            return Tr;
          },
          Property: function () {
            return k;
          },
          QB1: function () {
            return gr;
          },
          QB2: function () {
            return dr;
          },
          QB3: function () {
            return pr;
          },
          RadialGradientElement: function () {
            return _r;
          },
          RectElement: function () {
            return Er;
          },
          RenderedElement: function () {
            return ye;
          },
          Rotate: function () {
            return zr;
          },
          SVGElement: function () {
            return De;
          },
          SVGFontLoader: function () {
            return vn;
          },
          Scale: function () {
            return Gr;
          },
          Screen: function () {
            return ze;
          },
          Skew: function () {
            return mr;
          },
          SkewX: function () {
            return $r;
          },
          SkewY: function () {
            return Hr;
          },
          StopElement: function () {
            return tn;
          },
          StyleElement: function () {
            return Sr;
          },
          SymbolElement: function () {
            return cn;
          },
          TRefElement: function () {
            return on;
          },
          TSpanElement: function () {
            return Ge;
          },
          TextElement: function () {
            return se;
          },
          TextPathElement: function () {
            return hn;
          },
          TitleElement: function () {
            return Tn;
          },
          Transform: function () {
            return pe;
          },
          Translate: function () {
            return jr;
          },
          UnknownElement: function () {
            return Yr;
          },
          UseElement: function () {
            return gn;
          },
          ViewPort: function () {
            return Lr;
          },
          compressSpaces: function () {
            return _t;
          },
          default: function () {
            return Pe;
          },
          getSelectorSpecificity: function () {
            return Qe;
          },
          normalizeAttributeName: function () {
            return W;
          },
          normalizeColor: function () {
            return ct;
          },
          parseExternalUrl: function () {
            return nt;
          },
          presets: function () {
            return or;
          },
          toNumbers: function () {
            return Mt;
          },
          trimLeft: function () {
            return Xe;
          },
          trimRight: function () {
            return ae;
          },
          vectorMagnitude: function () {
            return ur;
          },
          vectorsAngle: function () {
            return lr;
          },
          vectorsRatio: function () {
            return Ze;
          },
        });
      var l = n(3219),
        f = n(15861),
        v = n(40700),
        g = n(90274),
        y = n(48196),
        O = n(33068),
        x = n(75109),
        b = n(4942),
        C = n(2930),
        A = n(6058),
        R = n(89650),
        P = n(54087),
        w = n(11386),
        I = n(26131),
        N = n(17383),
        B = n(95438),
        Y = n(33371);
      var $ = function (h, t) {
        return ($ =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, r) {
              e.__proto__ = r;
            }) ||
          function (e, r) {
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          })(h, t);
      };
      function F(h, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
        function e() {
          this.constructor = h;
        }
        $(h, t),
          (h.prototype = t === null ? Object.create(t) : ((e.prototype = t.prototype), new e()));
      }
      function G(h) {
        var t = '';
        Array.isArray(h) || (h = [h]);
        for (var e = 0; e < h.length; e++) {
          var r = h[e];
          if (r.type === M.CLOSE_PATH) t += 'z';
          else if (r.type === M.HORIZ_LINE_TO) t += (r.relative ? 'h' : 'H') + r.x;
          else if (r.type === M.VERT_LINE_TO) t += (r.relative ? 'v' : 'V') + r.y;
          else if (r.type === M.MOVE_TO) t += (r.relative ? 'm' : 'M') + r.x + ' ' + r.y;
          else if (r.type === M.LINE_TO) t += (r.relative ? 'l' : 'L') + r.x + ' ' + r.y;
          else if (r.type === M.CURVE_TO)
            t +=
              (r.relative ? 'c' : 'C') +
              r.x1 +
              ' ' +
              r.y1 +
              ' ' +
              r.x2 +
              ' ' +
              r.y2 +
              ' ' +
              r.x +
              ' ' +
              r.y;
          else if (r.type === M.SMOOTH_CURVE_TO)
            t += (r.relative ? 's' : 'S') + r.x2 + ' ' + r.y2 + ' ' + r.x + ' ' + r.y;
          else if (r.type === M.QUAD_TO)
            t += (r.relative ? 'q' : 'Q') + r.x1 + ' ' + r.y1 + ' ' + r.x + ' ' + r.y;
          else if (r.type === M.SMOOTH_QUAD_TO) t += (r.relative ? 't' : 'T') + r.x + ' ' + r.y;
          else {
            if (r.type !== M.ARC)
              throw new Error('Unexpected command type "' + r.type + '" at index ' + e + '.');
            t +=
              (r.relative ? 'a' : 'A') +
              r.rX +
              ' ' +
              r.rY +
              ' ' +
              r.xRot +
              ' ' +
              +r.lArcFlag +
              ' ' +
              +r.sweepFlag +
              ' ' +
              r.x +
              ' ' +
              r.y;
          }
        }
        return t;
      }
      function X(h, t) {
        var e = h[0],
          r = h[1];
        return [e * Math.cos(t) - r * Math.sin(t), e * Math.sin(t) + r * Math.cos(t)];
      }
      function Q() {
        for (var h = [], t = 0; t < arguments.length; t++) h[t] = arguments[t];
        for (var e = 0; e < h.length; e++)
          if (typeof h[e] != 'number')
            throw new Error(
              'assertNumbers arguments[' +
                e +
                '] is not a number. ' +
                typeof h[e] +
                ' == typeof ' +
                h[e],
            );
        return !0;
      }
      var _ = Math.PI;
      function J(h, t, e) {
        (h.lArcFlag = h.lArcFlag === 0 ? 0 : 1), (h.sweepFlag = h.sweepFlag === 0 ? 0 : 1);
        var r = h.rX,
          i = h.rY,
          a = h.x,
          o = h.y;
        (r = Math.abs(h.rX)), (i = Math.abs(h.rY));
        var s = X([(t - a) / 2, (e - o) / 2], (-h.xRot / 180) * _),
          u = s[0],
          c = s[1],
          p = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(c, 2) / Math.pow(i, 2);
        1 < p && ((r *= Math.sqrt(p)), (i *= Math.sqrt(p))), (h.rX = r), (h.rY = i);
        var E = Math.pow(r, 2) * Math.pow(c, 2) + Math.pow(i, 2) * Math.pow(u, 2),
          T =
            (h.lArcFlag !== h.sweepFlag ? 1 : -1) *
            Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(i, 2) - E) / E)),
          m = ((r * c) / i) * T,
          D = ((-i * u) / r) * T,
          V = X([m, D], (h.xRot / 180) * _);
        (h.cX = V[0] + (t + a) / 2),
          (h.cY = V[1] + (e + o) / 2),
          (h.phi1 = Math.atan2((c - D) / i, (u - m) / r)),
          (h.phi2 = Math.atan2((-c - D) / i, (-u - m) / r)),
          h.sweepFlag === 0 && h.phi2 > h.phi1 && (h.phi2 -= 2 * _),
          h.sweepFlag === 1 && h.phi2 < h.phi1 && (h.phi2 += 2 * _),
          (h.phi1 *= 180 / _),
          (h.phi2 *= 180 / _);
      }
      function xt(h, t, e) {
        Q(h, t, e);
        var r = h * h + t * t - e * e;
        if (0 > r) return [];
        if (r === 0) return [[(h * e) / (h * h + t * t), (t * e) / (h * h + t * t)]];
        var i = Math.sqrt(r);
        return [
          [(h * e + t * i) / (h * h + t * t), (t * e - h * i) / (h * h + t * t)],
          [(h * e - t * i) / (h * h + t * t), (t * e + h * i) / (h * h + t * t)],
        ];
      }
      var tt,
        et = Math.PI / 180;
      function ut(h, t, e) {
        return (1 - e) * h + e * t;
      }
      function ot(h, t, e, r) {
        return h + Math.cos((r / 180) * _) * t + Math.sin((r / 180) * _) * e;
      }
      function ht(h, t, e, r) {
        var i = 1e-6,
          a = t - h,
          o = e - t,
          s = 3 * a + 3 * (r - e) - 6 * o,
          u = 6 * (o - a),
          c = 3 * a;
        return Math.abs(s) < i
          ? [-c / u]
          : (function (p, E, T) {
              T === void 0 && (T = 1e-6);
              var m = (p * p) / 4 - E;
              if (m < -T) return [];
              if (m <= T) return [-p / 2];
              var D = Math.sqrt(m);
              return [-p / 2 - D, -p / 2 + D];
            })(u / s, c / s, i);
      }
      function Z(h, t, e, r, i) {
        var a = 1 - i;
        return h * (a * a * a) + t * (3 * a * a * i) + e * (3 * a * i * i) + r * (i * i * i);
      }
      (function (h) {
        function t() {
          return i(function (s, u, c) {
            return (
              s.relative &&
                (s.x1 !== void 0 && (s.x1 += u),
                s.y1 !== void 0 && (s.y1 += c),
                s.x2 !== void 0 && (s.x2 += u),
                s.y2 !== void 0 && (s.y2 += c),
                s.x !== void 0 && (s.x += u),
                s.y !== void 0 && (s.y += c),
                (s.relative = !1)),
              s
            );
          });
        }
        function e() {
          var s = NaN,
            u = NaN,
            c = NaN,
            p = NaN;
          return i(function (E, T, m) {
            return (
              E.type & M.SMOOTH_CURVE_TO &&
                ((E.type = M.CURVE_TO),
                (s = isNaN(s) ? T : s),
                (u = isNaN(u) ? m : u),
                (E.x1 = E.relative ? T - s : 2 * T - s),
                (E.y1 = E.relative ? m - u : 2 * m - u)),
              E.type & M.CURVE_TO
                ? ((s = E.relative ? T + E.x2 : E.x2), (u = E.relative ? m + E.y2 : E.y2))
                : ((s = NaN), (u = NaN)),
              E.type & M.SMOOTH_QUAD_TO &&
                ((E.type = M.QUAD_TO),
                (c = isNaN(c) ? T : c),
                (p = isNaN(p) ? m : p),
                (E.x1 = E.relative ? T - c : 2 * T - c),
                (E.y1 = E.relative ? m - p : 2 * m - p)),
              E.type & M.QUAD_TO
                ? ((c = E.relative ? T + E.x1 : E.x1), (p = E.relative ? m + E.y1 : E.y1))
                : ((c = NaN), (p = NaN)),
              E
            );
          });
        }
        function r() {
          var s = NaN,
            u = NaN;
          return i(function (c, p, E) {
            if (
              (c.type & M.SMOOTH_QUAD_TO &&
                ((c.type = M.QUAD_TO),
                (s = isNaN(s) ? p : s),
                (u = isNaN(u) ? E : u),
                (c.x1 = c.relative ? p - s : 2 * p - s),
                (c.y1 = c.relative ? E - u : 2 * E - u)),
              c.type & M.QUAD_TO)
            ) {
              (s = c.relative ? p + c.x1 : c.x1), (u = c.relative ? E + c.y1 : c.y1);
              var T = c.x1,
                m = c.y1;
              (c.type = M.CURVE_TO),
                (c.x1 = ((c.relative ? 0 : p) + 2 * T) / 3),
                (c.y1 = ((c.relative ? 0 : E) + 2 * m) / 3),
                (c.x2 = (c.x + 2 * T) / 3),
                (c.y2 = (c.y + 2 * m) / 3);
            } else (s = NaN), (u = NaN);
            return c;
          });
        }
        function i(s) {
          var u = 0,
            c = 0,
            p = NaN,
            E = NaN;
          return function (T) {
            if (isNaN(p) && !(T.type & M.MOVE_TO)) throw new Error('path must start with moveto');
            var m = s(T, u, c, p, E);
            return (
              T.type & M.CLOSE_PATH && ((u = p), (c = E)),
              T.x !== void 0 && (u = T.relative ? u + T.x : T.x),
              T.y !== void 0 && (c = T.relative ? c + T.y : T.y),
              T.type & M.MOVE_TO && ((p = u), (E = c)),
              m
            );
          };
        }
        function a(s, u, c, p, E, T) {
          return (
            Q(s, u, c, p, E, T),
            i(function (m, D, V, L) {
              var U = m.x1,
                K = m.x2,
                j = m.relative && !isNaN(L),
                z = m.x !== void 0 ? m.x : j ? 0 : D,
                rt = m.y !== void 0 ? m.y : j ? 0 : V;
              function st(Gt) {
                return Gt * Gt;
              }
              m.type & M.HORIZ_LINE_TO &&
                u !== 0 &&
                ((m.type = M.LINE_TO), (m.y = m.relative ? 0 : V)),
                m.type & M.VERT_LINE_TO &&
                  c !== 0 &&
                  ((m.type = M.LINE_TO), (m.x = m.relative ? 0 : D)),
                m.x !== void 0 && (m.x = m.x * s + rt * c + (j ? 0 : E)),
                m.y !== void 0 && (m.y = z * u + m.y * p + (j ? 0 : T)),
                m.x1 !== void 0 && (m.x1 = m.x1 * s + m.y1 * c + (j ? 0 : E)),
                m.y1 !== void 0 && (m.y1 = U * u + m.y1 * p + (j ? 0 : T)),
                m.x2 !== void 0 && (m.x2 = m.x2 * s + m.y2 * c + (j ? 0 : E)),
                m.y2 !== void 0 && (m.y2 = K * u + m.y2 * p + (j ? 0 : T));
              var H = s * p - u * c;
              if (m.xRot !== void 0 && (s !== 1 || u !== 0 || c !== 0 || p !== 1))
                if (H === 0)
                  delete m.rX,
                    delete m.rY,
                    delete m.xRot,
                    delete m.lArcFlag,
                    delete m.sweepFlag,
                    (m.type = M.LINE_TO);
                else {
                  var vt = (m.xRot * Math.PI) / 180,
                    gt = Math.sin(vt),
                    pt = Math.cos(vt),
                    St = 1 / st(m.rX),
                    Tt = 1 / st(m.rY),
                    Lt = st(pt) * St + st(gt) * Tt,
                    Bt = 2 * gt * pt * (St - Tt),
                    At = st(gt) * St + st(pt) * Tt,
                    wt = Lt * p * p - Bt * u * p + At * u * u,
                    It = Bt * (s * p + u * c) - 2 * (Lt * c * p + At * s * u),
                    zt = Lt * c * c - Bt * s * c + At * s * s,
                    mt = ((Math.atan2(It, wt - zt) + Math.PI) % Math.PI) / 2,
                    Ot = Math.sin(mt),
                    Ft = Math.cos(mt);
                  (m.rX = Math.abs(H) / Math.sqrt(wt * st(Ft) + It * Ot * Ft + zt * st(Ot))),
                    (m.rY = Math.abs(H) / Math.sqrt(wt * st(Ot) - It * Ot * Ft + zt * st(Ft))),
                    (m.xRot = (180 * mt) / Math.PI);
                }
              return m.sweepFlag !== void 0 && 0 > H && (m.sweepFlag = +!m.sweepFlag), m;
            })
          );
        }
        function o() {
          return function (s) {
            var u = {};
            for (var c in s) u[c] = s[c];
            return u;
          };
        }
        (h.ROUND = function (s) {
          function u(c) {
            return Math.round(c * s) / s;
          }
          return (
            s === void 0 && (s = 1e13),
            Q(s),
            function (c) {
              return (
                c.x1 !== void 0 && (c.x1 = u(c.x1)),
                c.y1 !== void 0 && (c.y1 = u(c.y1)),
                c.x2 !== void 0 && (c.x2 = u(c.x2)),
                c.y2 !== void 0 && (c.y2 = u(c.y2)),
                c.x !== void 0 && (c.x = u(c.x)),
                c.y !== void 0 && (c.y = u(c.y)),
                c.rX !== void 0 && (c.rX = u(c.rX)),
                c.rY !== void 0 && (c.rY = u(c.rY)),
                c
              );
            }
          );
        }),
          (h.TO_ABS = t),
          (h.TO_REL = function () {
            return i(function (s, u, c) {
              return (
                s.relative ||
                  (s.x1 !== void 0 && (s.x1 -= u),
                  s.y1 !== void 0 && (s.y1 -= c),
                  s.x2 !== void 0 && (s.x2 -= u),
                  s.y2 !== void 0 && (s.y2 -= c),
                  s.x !== void 0 && (s.x -= u),
                  s.y !== void 0 && (s.y -= c),
                  (s.relative = !0)),
                s
              );
            });
          }),
          (h.NORMALIZE_HVZ = function (s, u, c) {
            return (
              s === void 0 && (s = !0),
              u === void 0 && (u = !0),
              c === void 0 && (c = !0),
              i(function (p, E, T, m, D) {
                if (isNaN(m) && !(p.type & M.MOVE_TO))
                  throw new Error('path must start with moveto');
                return (
                  u &&
                    p.type & M.HORIZ_LINE_TO &&
                    ((p.type = M.LINE_TO), (p.y = p.relative ? 0 : T)),
                  c &&
                    p.type & M.VERT_LINE_TO &&
                    ((p.type = M.LINE_TO), (p.x = p.relative ? 0 : E)),
                  s &&
                    p.type & M.CLOSE_PATH &&
                    ((p.type = M.LINE_TO),
                    (p.x = p.relative ? m - E : m),
                    (p.y = p.relative ? D - T : D)),
                  p.type & M.ARC &&
                    (p.rX === 0 || p.rY === 0) &&
                    ((p.type = M.LINE_TO),
                    delete p.rX,
                    delete p.rY,
                    delete p.xRot,
                    delete p.lArcFlag,
                    delete p.sweepFlag),
                  p
                );
              })
            );
          }),
          (h.NORMALIZE_ST = e),
          (h.QT_TO_C = r),
          (h.INFO = i),
          (h.SANITIZE = function (s) {
            s === void 0 && (s = 0), Q(s);
            var u = NaN,
              c = NaN,
              p = NaN,
              E = NaN;
            return i(function (T, m, D, V, L) {
              var U = Math.abs,
                K = !1,
                j = 0,
                z = 0;
              if (
                (T.type & M.SMOOTH_CURVE_TO &&
                  ((j = isNaN(u) ? 0 : m - u), (z = isNaN(c) ? 0 : D - c)),
                T.type & (M.CURVE_TO | M.SMOOTH_CURVE_TO)
                  ? ((u = T.relative ? m + T.x2 : T.x2), (c = T.relative ? D + T.y2 : T.y2))
                  : ((u = NaN), (c = NaN)),
                T.type & M.SMOOTH_QUAD_TO
                  ? ((p = isNaN(p) ? m : 2 * m - p), (E = isNaN(E) ? D : 2 * D - E))
                  : T.type & M.QUAD_TO
                  ? ((p = T.relative ? m + T.x1 : T.x1), (E = T.relative ? D + T.y1 : T.y2))
                  : ((p = NaN), (E = NaN)),
                T.type & M.LINE_COMMANDS ||
                  (T.type & M.ARC && (T.rX === 0 || T.rY === 0 || !T.lArcFlag)) ||
                  T.type & M.CURVE_TO ||
                  T.type & M.SMOOTH_CURVE_TO ||
                  T.type & M.QUAD_TO ||
                  T.type & M.SMOOTH_QUAD_TO)
              ) {
                var rt = T.x === void 0 ? 0 : T.relative ? T.x : T.x - m,
                  st = T.y === void 0 ? 0 : T.relative ? T.y : T.y - D;
                (j = isNaN(p) ? (T.x1 === void 0 ? j : T.relative ? T.x : T.x1 - m) : p - m),
                  (z = isNaN(E) ? (T.y1 === void 0 ? z : T.relative ? T.y : T.y1 - D) : E - D);
                var H = T.x2 === void 0 ? 0 : T.relative ? T.x : T.x2 - m,
                  vt = T.y2 === void 0 ? 0 : T.relative ? T.y : T.y2 - D;
                U(rt) <= s &&
                  U(st) <= s &&
                  U(j) <= s &&
                  U(z) <= s &&
                  U(H) <= s &&
                  U(vt) <= s &&
                  (K = !0);
              }
              return (
                T.type & M.CLOSE_PATH && U(m - V) <= s && U(D - L) <= s && (K = !0), K ? [] : T
              );
            });
          }),
          (h.MATRIX = a),
          (h.ROTATE = function (s, u, c) {
            u === void 0 && (u = 0), c === void 0 && (c = 0), Q(s, u, c);
            var p = Math.sin(s),
              E = Math.cos(s);
            return a(E, p, -p, E, u - u * E + c * p, c - u * p - c * E);
          }),
          (h.TRANSLATE = function (s, u) {
            return u === void 0 && (u = 0), Q(s, u), a(1, 0, 0, 1, s, u);
          }),
          (h.SCALE = function (s, u) {
            return u === void 0 && (u = s), Q(s, u), a(s, 0, 0, u, 0, 0);
          }),
          (h.SKEW_X = function (s) {
            return Q(s), a(1, 0, Math.atan(s), 1, 0, 0);
          }),
          (h.SKEW_Y = function (s) {
            return Q(s), a(1, Math.atan(s), 0, 1, 0, 0);
          }),
          (h.X_AXIS_SYMMETRY = function (s) {
            return s === void 0 && (s = 0), Q(s), a(-1, 0, 0, 1, s, 0);
          }),
          (h.Y_AXIS_SYMMETRY = function (s) {
            return s === void 0 && (s = 0), Q(s), a(1, 0, 0, -1, 0, s);
          }),
          (h.A_TO_C = function () {
            return i(function (s, u, c) {
              return M.ARC === s.type
                ? (function (p, E, T) {
                    var m, D, V, L;
                    p.cX || J(p, E, T);
                    for (
                      var U = Math.min(p.phi1, p.phi2),
                        K = Math.max(p.phi1, p.phi2) - U,
                        j = Math.ceil(K / 90),
                        z = new Array(j),
                        rt = E,
                        st = T,
                        H = 0;
                      H < j;
                      H++
                    ) {
                      var vt = ut(p.phi1, p.phi2, H / j),
                        gt = ut(p.phi1, p.phi2, (H + 1) / j),
                        pt = gt - vt,
                        St = (4 / 3) * Math.tan((pt * et) / 4),
                        Tt = [
                          Math.cos(vt * et) - St * Math.sin(vt * et),
                          Math.sin(vt * et) + St * Math.cos(vt * et),
                        ],
                        Lt = Tt[0],
                        Bt = Tt[1],
                        At = [Math.cos(gt * et), Math.sin(gt * et)],
                        wt = At[0],
                        It = At[1],
                        zt = [wt + St * Math.sin(gt * et), It - St * Math.cos(gt * et)],
                        mt = zt[0],
                        Ot = zt[1];
                      z[H] = { relative: p.relative, type: M.CURVE_TO };
                      var Ft = function (Gt, Yt) {
                        var Ht = X([Gt * p.rX, Yt * p.rY], p.xRot),
                          Xt = Ht[0],
                          Kt = Ht[1];
                        return [p.cX + Xt, p.cY + Kt];
                      };
                      (m = Ft(Lt, Bt)),
                        (z[H].x1 = m[0]),
                        (z[H].y1 = m[1]),
                        (D = Ft(mt, Ot)),
                        (z[H].x2 = D[0]),
                        (z[H].y2 = D[1]),
                        (V = Ft(wt, It)),
                        (z[H].x = V[0]),
                        (z[H].y = V[1]),
                        p.relative &&
                          ((z[H].x1 -= rt),
                          (z[H].y1 -= st),
                          (z[H].x2 -= rt),
                          (z[H].y2 -= st),
                          (z[H].x -= rt),
                          (z[H].y -= st)),
                        (rt = (L = [z[H].x, z[H].y])[0]),
                        (st = L[1]);
                    }
                    return z;
                  })(s, s.relative ? 0 : u, s.relative ? 0 : c)
                : s;
            });
          }),
          (h.ANNOTATE_ARCS = function () {
            return i(function (s, u, c) {
              return s.relative && ((u = 0), (c = 0)), M.ARC === s.type && J(s, u, c), s;
            });
          }),
          (h.CLONE = o),
          (h.CALCULATE_BOUNDS = function () {
            var s = function (T) {
                var m = {};
                for (var D in T) m[D] = T[D];
                return m;
              },
              u = t(),
              c = r(),
              p = e(),
              E = i(function (T, m, D) {
                var V = p(c(u(s(T))));
                function L(Ot) {
                  Ot > E.maxX && (E.maxX = Ot), Ot < E.minX && (E.minX = Ot);
                }
                function U(Ot) {
                  Ot > E.maxY && (E.maxY = Ot), Ot < E.minY && (E.minY = Ot);
                }
                if (
                  (V.type & M.DRAWING_COMMANDS && (L(m), U(D)),
                  V.type & M.HORIZ_LINE_TO && L(V.x),
                  V.type & M.VERT_LINE_TO && U(V.y),
                  V.type & M.LINE_TO && (L(V.x), U(V.y)),
                  V.type & M.CURVE_TO)
                ) {
                  L(V.x), U(V.y);
                  for (var K = 0, j = ht(m, V.x1, V.x2, V.x); K < j.length; K++)
                    0 < (mt = j[K]) && 1 > mt && L(Z(m, V.x1, V.x2, V.x, mt));
                  for (var z = 0, rt = ht(D, V.y1, V.y2, V.y); z < rt.length; z++)
                    0 < (mt = rt[z]) && 1 > mt && U(Z(D, V.y1, V.y2, V.y, mt));
                }
                if (V.type & M.ARC) {
                  L(V.x), U(V.y), J(V, m, D);
                  for (
                    var st = (V.xRot / 180) * Math.PI,
                      H = Math.cos(st) * V.rX,
                      vt = Math.sin(st) * V.rX,
                      gt = -Math.sin(st) * V.rY,
                      pt = Math.cos(st) * V.rY,
                      St =
                        V.phi1 < V.phi2
                          ? [V.phi1, V.phi2]
                          : -180 > V.phi2
                          ? [V.phi2 + 360, V.phi1 + 360]
                          : [V.phi2, V.phi1],
                      Tt = St[0],
                      Lt = St[1],
                      Bt = function (Ot) {
                        var Ft = Ot[0],
                          Gt = Ot[1],
                          Yt = (180 * Math.atan2(Gt, Ft)) / Math.PI;
                        return Yt < Tt ? Yt + 360 : Yt;
                      },
                      At = 0,
                      wt = xt(gt, -H, 0).map(Bt);
                    At < wt.length;
                    At++
                  )
                    (mt = wt[At]) > Tt && mt < Lt && L(ot(V.cX, H, gt, mt));
                  for (var It = 0, zt = xt(pt, -vt, 0).map(Bt); It < zt.length; It++) {
                    var mt;
                    (mt = zt[It]) > Tt && mt < Lt && U(ot(V.cY, vt, pt, mt));
                  }
                }
                return T;
              });
            return (E.minX = 1 / 0), (E.maxX = -1 / 0), (E.minY = 1 / 0), (E.maxY = -1 / 0), E;
          });
      })(tt || (tt = {}));
      var q,
        Ut = (function () {
          function h() {}
          return (
            (h.prototype.round = function (t) {
              return this.transform(tt.ROUND(t));
            }),
            (h.prototype.toAbs = function () {
              return this.transform(tt.TO_ABS());
            }),
            (h.prototype.toRel = function () {
              return this.transform(tt.TO_REL());
            }),
            (h.prototype.normalizeHVZ = function (t, e, r) {
              return this.transform(tt.NORMALIZE_HVZ(t, e, r));
            }),
            (h.prototype.normalizeST = function () {
              return this.transform(tt.NORMALIZE_ST());
            }),
            (h.prototype.qtToC = function () {
              return this.transform(tt.QT_TO_C());
            }),
            (h.prototype.aToC = function () {
              return this.transform(tt.A_TO_C());
            }),
            (h.prototype.sanitize = function (t) {
              return this.transform(tt.SANITIZE(t));
            }),
            (h.prototype.translate = function (t, e) {
              return this.transform(tt.TRANSLATE(t, e));
            }),
            (h.prototype.scale = function (t, e) {
              return this.transform(tt.SCALE(t, e));
            }),
            (h.prototype.rotate = function (t, e, r) {
              return this.transform(tt.ROTATE(t, e, r));
            }),
            (h.prototype.matrix = function (t, e, r, i, a, o) {
              return this.transform(tt.MATRIX(t, e, r, i, a, o));
            }),
            (h.prototype.skewX = function (t) {
              return this.transform(tt.SKEW_X(t));
            }),
            (h.prototype.skewY = function (t) {
              return this.transform(tt.SKEW_Y(t));
            }),
            (h.prototype.xSymmetry = function (t) {
              return this.transform(tt.X_AXIS_SYMMETRY(t));
            }),
            (h.prototype.ySymmetry = function (t) {
              return this.transform(tt.Y_AXIS_SYMMETRY(t));
            }),
            (h.prototype.annotateArcs = function () {
              return this.transform(tt.ANNOTATE_ARCS());
            }),
            h
          );
        })(),
        it = function (h) {
          return (
            h === ' ' ||
            h === '	' ||
            h === '\r' ||
            h ===
              `
`
          );
        },
        ft = function (h) {
          return 48 <= h.charCodeAt(0) && h.charCodeAt(0) <= 57;
        },
        lt = (function (h) {
          function t() {
            var e = h.call(this) || this;
            return (
              (e.curNumber = ''),
              (e.curCommandType = -1),
              (e.curCommandRelative = !1),
              (e.canParseCommandOrComma = !0),
              (e.curNumberHasExp = !1),
              (e.curNumberHasExpDigits = !1),
              (e.curNumberHasDecimal = !1),
              (e.curArgs = []),
              e
            );
          }
          return (
            F(t, h),
            (t.prototype.finish = function (e) {
              if (
                (e === void 0 && (e = []),
                this.parse(' ', e),
                this.curArgs.length !== 0 || !this.canParseCommandOrComma)
              )
                throw new SyntaxError('Unterminated command at the path end.');
              return e;
            }),
            (t.prototype.parse = function (e, r) {
              var i = this;
              r === void 0 && (r = []);
              for (
                var a = function (E) {
                    r.push(E), (i.curArgs.length = 0), (i.canParseCommandOrComma = !0);
                  },
                  o = 0;
                o < e.length;
                o++
              ) {
                var s = e[o],
                  u = !(
                    this.curCommandType !== M.ARC ||
                    (this.curArgs.length !== 3 && this.curArgs.length !== 4) ||
                    this.curNumber.length !== 1 ||
                    (this.curNumber !== '0' && this.curNumber !== '1')
                  ),
                  c = ft(s) && ((this.curNumber === '0' && s === '0') || u);
                if (!ft(s) || c)
                  if (s !== 'e' && s !== 'E')
                    if (
                      (s !== '-' && s !== '+') ||
                      !this.curNumberHasExp ||
                      this.curNumberHasExpDigits
                    )
                      if (s !== '.' || this.curNumberHasExp || this.curNumberHasDecimal || u) {
                        if (this.curNumber && this.curCommandType !== -1) {
                          var p = Number(this.curNumber);
                          if (isNaN(p)) throw new SyntaxError('Invalid number ending at ' + o);
                          if (this.curCommandType === M.ARC) {
                            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
                              if (0 > p)
                                throw new SyntaxError(
                                  'Expected positive number, got "' + p + '" at index "' + o + '"',
                                );
                            } else if (
                              (this.curArgs.length === 3 || this.curArgs.length === 4) &&
                              this.curNumber !== '0' &&
                              this.curNumber !== '1'
                            )
                              throw new SyntaxError(
                                'Expected a flag, got "' +
                                  this.curNumber +
                                  '" at index "' +
                                  o +
                                  '"',
                              );
                          }
                          this.curArgs.push(p),
                            this.curArgs.length === Et[this.curCommandType] &&
                              (M.HORIZ_LINE_TO === this.curCommandType
                                ? a({
                                    type: M.HORIZ_LINE_TO,
                                    relative: this.curCommandRelative,
                                    x: p,
                                  })
                                : M.VERT_LINE_TO === this.curCommandType
                                ? a({
                                    type: M.VERT_LINE_TO,
                                    relative: this.curCommandRelative,
                                    y: p,
                                  })
                                : this.curCommandType === M.MOVE_TO ||
                                  this.curCommandType === M.LINE_TO ||
                                  this.curCommandType === M.SMOOTH_QUAD_TO
                                ? (a({
                                    type: this.curCommandType,
                                    relative: this.curCommandRelative,
                                    x: this.curArgs[0],
                                    y: this.curArgs[1],
                                  }),
                                  M.MOVE_TO === this.curCommandType &&
                                    (this.curCommandType = M.LINE_TO))
                                : this.curCommandType === M.CURVE_TO
                                ? a({
                                    type: M.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5],
                                  })
                                : this.curCommandType === M.SMOOTH_CURVE_TO
                                ? a({
                                    type: M.SMOOTH_CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x2: this.curArgs[0],
                                    y2: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === M.QUAD_TO
                                ? a({
                                    type: M.QUAD_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === M.ARC &&
                                  a({
                                    type: M.ARC,
                                    relative: this.curCommandRelative,
                                    rX: this.curArgs[0],
                                    rY: this.curArgs[1],
                                    xRot: this.curArgs[2],
                                    lArcFlag: this.curArgs[3],
                                    sweepFlag: this.curArgs[4],
                                    x: this.curArgs[5],
                                    y: this.curArgs[6],
                                  })),
                            (this.curNumber = ''),
                            (this.curNumberHasExpDigits = !1),
                            (this.curNumberHasExp = !1),
                            (this.curNumberHasDecimal = !1),
                            (this.canParseCommandOrComma = !0);
                        }
                        if (!it(s))
                          if (s === ',' && this.canParseCommandOrComma)
                            this.canParseCommandOrComma = !1;
                          else if (s !== '+' && s !== '-' && s !== '.')
                            if (c) (this.curNumber = s), (this.curNumberHasDecimal = !1);
                            else {
                              if (this.curArgs.length !== 0)
                                throw new SyntaxError('Unterminated command at index ' + o + '.');
                              if (!this.canParseCommandOrComma)
                                throw new SyntaxError(
                                  'Unexpected character "' +
                                    s +
                                    '" at index ' +
                                    o +
                                    '. Command cannot follow comma',
                                );
                              if (((this.canParseCommandOrComma = !1), s !== 'z' && s !== 'Z'))
                                if (s === 'h' || s === 'H')
                                  (this.curCommandType = M.HORIZ_LINE_TO),
                                    (this.curCommandRelative = s === 'h');
                                else if (s === 'v' || s === 'V')
                                  (this.curCommandType = M.VERT_LINE_TO),
                                    (this.curCommandRelative = s === 'v');
                                else if (s === 'm' || s === 'M')
                                  (this.curCommandType = M.MOVE_TO),
                                    (this.curCommandRelative = s === 'm');
                                else if (s === 'l' || s === 'L')
                                  (this.curCommandType = M.LINE_TO),
                                    (this.curCommandRelative = s === 'l');
                                else if (s === 'c' || s === 'C')
                                  (this.curCommandType = M.CURVE_TO),
                                    (this.curCommandRelative = s === 'c');
                                else if (s === 's' || s === 'S')
                                  (this.curCommandType = M.SMOOTH_CURVE_TO),
                                    (this.curCommandRelative = s === 's');
                                else if (s === 'q' || s === 'Q')
                                  (this.curCommandType = M.QUAD_TO),
                                    (this.curCommandRelative = s === 'q');
                                else if (s === 't' || s === 'T')
                                  (this.curCommandType = M.SMOOTH_QUAD_TO),
                                    (this.curCommandRelative = s === 't');
                                else {
                                  if (s !== 'a' && s !== 'A')
                                    throw new SyntaxError(
                                      'Unexpected character "' + s + '" at index ' + o + '.',
                                    );
                                  (this.curCommandType = M.ARC),
                                    (this.curCommandRelative = s === 'a');
                                }
                              else
                                r.push({ type: M.CLOSE_PATH }),
                                  (this.canParseCommandOrComma = !0),
                                  (this.curCommandType = -1);
                            }
                          else (this.curNumber = s), (this.curNumberHasDecimal = s === '.');
                      } else (this.curNumber += s), (this.curNumberHasDecimal = !0);
                    else this.curNumber += s;
                  else (this.curNumber += s), (this.curNumberHasExp = !0);
                else (this.curNumber += s), (this.curNumberHasExpDigits = this.curNumberHasExp);
              }
              return r;
            }),
            (t.prototype.transform = function (e) {
              return Object.create(this, {
                parse: {
                  value: function (r, i) {
                    i === void 0 && (i = []);
                    for (
                      var a = 0, o = Object.getPrototypeOf(this).parse.call(this, r);
                      a < o.length;
                      a++
                    ) {
                      var s = o[a],
                        u = e(s);
                      Array.isArray(u) ? i.push.apply(i, u) : i.push(u);
                    }
                    return i;
                  },
                },
              });
            }),
            t
          );
        })(Ut),
        M = (function (h) {
          function t(e) {
            var r = h.call(this) || this;
            return (r.commands = typeof e == 'string' ? t.parse(e) : e), r;
          }
          return (
            F(t, h),
            (t.prototype.encode = function () {
              return t.encode(this.commands);
            }),
            (t.prototype.getBounds = function () {
              var e = tt.CALCULATE_BOUNDS();
              return this.transform(e), e;
            }),
            (t.prototype.transform = function (e) {
              for (var r = [], i = 0, a = this.commands; i < a.length; i++) {
                var o = e(a[i]);
                Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
              }
              return (this.commands = r), this;
            }),
            (t.encode = function (e) {
              return G(e);
            }),
            (t.parse = function (e) {
              var r = new lt(),
                i = [];
              return r.parse(e, i), r.finish(i), i;
            }),
            (t.CLOSE_PATH = 1),
            (t.MOVE_TO = 2),
            (t.HORIZ_LINE_TO = 4),
            (t.VERT_LINE_TO = 8),
            (t.LINE_TO = 16),
            (t.CURVE_TO = 32),
            (t.SMOOTH_CURVE_TO = 64),
            (t.QUAD_TO = 128),
            (t.SMOOTH_QUAD_TO = 256),
            (t.ARC = 512),
            (t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO),
            (t.DRAWING_COMMANDS =
              t.HORIZ_LINE_TO |
              t.VERT_LINE_TO |
              t.LINE_TO |
              t.CURVE_TO |
              t.SMOOTH_CURVE_TO |
              t.QUAD_TO |
              t.SMOOTH_QUAD_TO |
              t.ARC),
            t
          );
        })(Ut),
        Et =
          (((q = {})[M.MOVE_TO] = 2),
          (q[M.LINE_TO] = 2),
          (q[M.HORIZ_LINE_TO] = 1),
          (q[M.VERT_LINE_TO] = 1),
          (q[M.CLOSE_PATH] = 0),
          (q[M.QUAD_TO] = 4),
          (q[M.SMOOTH_QUAD_TO] = 2),
          (q[M.CURVE_TO] = 6),
          (q[M.SMOOTH_CURVE_TO] = 4),
          (q[M.ARC] = 7),
          q),
        Vt = n(78277);
      function Pt(h) {
        '@babel/helpers - typeof';
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (Pt = function (t) {
                return typeof t;
              })
            : (Pt = function (t) {
                return t &&
                  typeof Symbol == 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
          Pt(h)
        );
      }
      function Rt(h, t) {
        if (!(h instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      var jt = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405,
          364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405,
          383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360,
          347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405,
          394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
          507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360,
          354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405,
          399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320,
          316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
          257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428,
          424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360,
          357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307,
          304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        we = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18,
          18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function Se(h, t, e, r, i, a) {
        if (
          (typeof h == 'string' && (h = document.getElementById(h)),
          !(
            !h ||
            (Object.prototype.toString.call(h).slice(8, -1) === 'HTMLImageElement' &&
              !('naturalWidth' in h))
          ))
        ) {
          var o = i ? 'offset' : 'natural',
            s = h[o + 'Width'],
            u = h[o + 'Height'];
          if (
            (Object.prototype.toString.call(h).slice(8, -1) === 'ImageBitmap' &&
              ((s = h.width), (u = h.height)),
            typeof t == 'string' && (t = document.getElementById(t)),
            !(!t || !('getContext' in t)))
          ) {
            a || ((t.style.width = s + 'px'), (t.style.height = u + 'px')),
              (t.width = s),
              (t.height = u);
            var c = t.getContext('2d');
            c.clearRect(0, 0, s, u),
              c.drawImage(h, 0, 0, h.naturalWidth, h.naturalHeight, 0, 0, s, u),
              !(isNaN(e) || e < 1) && (r ? kt(t, 0, 0, s, u, e) : ie(t, 0, 0, s, u, e));
          }
        }
      }
      function qt(h, t, e, r, i) {
        if (
          (typeof h == 'string' && (h = document.getElementById(h)),
          !h || Pt(h) !== 'object' || !('getContext' in h))
        )
          throw new TypeError(
            'Expecting canvas with `getContext` method in processCanvasRGB(A) calls!',
          );
        var a = h.getContext('2d');
        try {
          return a.getImageData(t, e, r, i);
        } catch (o) {
          throw new Error('unable to access image data: ' + o);
        }
      }
      function kt(h, t, e, r, i, a) {
        if (!(isNaN(a) || a < 1)) {
          a |= 0;
          var o = qt(h, t, e, r, i);
          (o = le(o, t, e, r, i, a)), h.getContext('2d').putImageData(o, t, e);
        }
      }
      function le(h, t, e, r, i, a) {
        for (
          var o = h.data,
            s = 2 * a + 1,
            u = r - 1,
            c = i - 1,
            p = a + 1,
            E = (p * (p + 1)) / 2,
            T = new Jt(),
            m = T,
            D,
            V = 1;
          V < s;
          V++
        )
          (m = m.next = new Jt()), V === p && (D = m);
        m.next = T;
        for (var L = null, U = null, K = 0, j = 0, z = jt[a], rt = we[a], st = 0; st < i; st++) {
          m = T;
          for (var H = o[j], vt = o[j + 1], gt = o[j + 2], pt = o[j + 3], St = 0; St < p; St++)
            (m.r = H), (m.g = vt), (m.b = gt), (m.a = pt), (m = m.next);
          for (
            var Tt = 0,
              Lt = 0,
              Bt = 0,
              At = 0,
              wt = p * H,
              It = p * vt,
              zt = p * gt,
              mt = p * pt,
              Ot = E * H,
              Ft = E * vt,
              Gt = E * gt,
              Yt = E * pt,
              Ht = 1;
            Ht < p;
            Ht++
          ) {
            var Xt = j + ((u < Ht ? u : Ht) << 2),
              Kt = o[Xt],
              ee = o[Xt + 1],
              Le = o[Xt + 2],
              Be = o[Xt + 3],
              me = p - Ht;
            (Ot += (m.r = Kt) * me),
              (Ft += (m.g = ee) * me),
              (Gt += (m.b = Le) * me),
              (Yt += (m.a = Be) * me),
              (Tt += Kt),
              (Lt += ee),
              (Bt += Le),
              (At += Be),
              (m = m.next);
          }
          (L = T), (U = D);
          for (var xe = 0; xe < r; xe++) {
            var Ee = (Yt * z) >>> rt;
            if (((o[j + 3] = Ee), Ee !== 0)) {
              var Te = 255 / Ee;
              (o[j] = ((Ot * z) >>> rt) * Te),
                (o[j + 1] = ((Ft * z) >>> rt) * Te),
                (o[j + 2] = ((Gt * z) >>> rt) * Te);
            } else o[j] = o[j + 1] = o[j + 2] = 0;
            (Ot -= wt),
              (Ft -= It),
              (Gt -= zt),
              (Yt -= mt),
              (wt -= L.r),
              (It -= L.g),
              (zt -= L.b),
              (mt -= L.a);
            var re = xe + a + 1;
            (re = (K + (re < u ? re : u)) << 2),
              (Tt += L.r = o[re]),
              (Lt += L.g = o[re + 1]),
              (Bt += L.b = o[re + 2]),
              (At += L.a = o[re + 3]),
              (Ot += Tt),
              (Ft += Lt),
              (Gt += Bt),
              (Yt += At),
              (L = L.next);
            var Oe = U,
              Fe = Oe.r,
              Ue = Oe.g,
              Re = Oe.b,
              Ye = Oe.a;
            (wt += Fe),
              (It += Ue),
              (zt += Re),
              (mt += Ye),
              (Tt -= Fe),
              (Lt -= Ue),
              (Bt -= Re),
              (At -= Ye),
              (U = U.next),
              (j += 4);
          }
          K += r;
        }
        for (var ne = 0; ne < r; ne++) {
          j = ne << 2;
          var Ne = o[j],
            Ie = o[j + 1],
            Me = o[j + 2],
            Wt = o[j + 3],
            Ar = p * Ne,
            Pr = p * Ie,
            Rr = p * Me,
            Nr = p * Wt,
            er = E * Ne,
            rr = E * Ie,
            nr = E * Me,
            ir = E * Wt;
          m = T;
          for (var Cn = 0; Cn < p; Cn++)
            (m.r = Ne), (m.g = Ie), (m.b = Me), (m.a = Wt), (m = m.next);
          for (var An = r, Ir = 0, Mr = 0, wr = 0, Vr = 0, ar = 1; ar <= a; ar++) {
            j = (An + ne) << 2;
            var sr = p - ar;
            (er += (m.r = Ne = o[j]) * sr),
              (rr += (m.g = Ie = o[j + 1]) * sr),
              (nr += (m.b = Me = o[j + 2]) * sr),
              (ir += (m.a = Wt = o[j + 3]) * sr),
              (Vr += Ne),
              (Ir += Ie),
              (Mr += Me),
              (wr += Wt),
              (m = m.next),
              ar < c && (An += r);
          }
          (j = ne), (L = T), (U = D);
          for (var Dr = 0; Dr < i; Dr++) {
            var Qt = j << 2;
            (o[Qt + 3] = Wt = (ir * z) >>> rt),
              Wt > 0
                ? ((Wt = 255 / Wt),
                  (o[Qt] = ((er * z) >>> rt) * Wt),
                  (o[Qt + 1] = ((rr * z) >>> rt) * Wt),
                  (o[Qt + 2] = ((nr * z) >>> rt) * Wt))
                : (o[Qt] = o[Qt + 1] = o[Qt + 2] = 0),
              (er -= Ar),
              (rr -= Pr),
              (nr -= Rr),
              (ir -= Nr),
              (Ar -= L.r),
              (Pr -= L.g),
              (Rr -= L.b),
              (Nr -= L.a),
              (Qt = (ne + ((Qt = Dr + p) < c ? Qt : c) * r) << 2),
              (er += Vr += L.r = o[Qt]),
              (rr += Ir += L.g = o[Qt + 1]),
              (nr += Mr += L.b = o[Qt + 2]),
              (ir += wr += L.a = o[Qt + 3]),
              (L = L.next),
              (Ar += Ne = U.r),
              (Pr += Ie = U.g),
              (Rr += Me = U.b),
              (Nr += Wt = U.a),
              (Vr -= Ne),
              (Ir -= Ie),
              (Mr -= Me),
              (wr -= Wt),
              (U = U.next),
              (j += r);
          }
        }
        return h;
      }
      function ie(h, t, e, r, i, a) {
        if (!(isNaN(a) || a < 1)) {
          a |= 0;
          var o = qt(h, t, e, r, i);
          (o = he(o, t, e, r, i, a)), h.getContext('2d').putImageData(o, t, e);
        }
      }
      function he(h, t, e, r, i, a) {
        for (
          var o = h.data,
            s = 2 * a + 1,
            u = r - 1,
            c = i - 1,
            p = a + 1,
            E = (p * (p + 1)) / 2,
            T = new Jt(),
            m = T,
            D,
            V = 1;
          V < s;
          V++
        )
          (m = m.next = new Jt()), V === p && (D = m);
        m.next = T;
        for (
          var L = null, U = null, K = jt[a], j = we[a], z, rt, st = 0, H = 0, vt = 0;
          vt < i;
          vt++
        ) {
          var gt = o[H],
            pt = o[H + 1],
            St = o[H + 2],
            Tt = p * gt,
            Lt = p * pt,
            Bt = p * St,
            At = E * gt,
            wt = E * pt,
            It = E * St;
          m = T;
          for (var zt = 0; zt < p; zt++) (m.r = gt), (m.g = pt), (m.b = St), (m = m.next);
          for (var mt = 0, Ot = 0, Ft = 0, Gt = 1; Gt < p; Gt++)
            (z = H + ((u < Gt ? u : Gt) << 2)),
              (At += (m.r = gt = o[z]) * (rt = p - Gt)),
              (wt += (m.g = pt = o[z + 1]) * rt),
              (It += (m.b = St = o[z + 2]) * rt),
              (mt += gt),
              (Ot += pt),
              (Ft += St),
              (m = m.next);
          (L = T), (U = D);
          for (var Yt = 0; Yt < r; Yt++)
            (o[H] = (At * K) >>> j),
              (o[H + 1] = (wt * K) >>> j),
              (o[H + 2] = (It * K) >>> j),
              (At -= Tt),
              (wt -= Lt),
              (It -= Bt),
              (Tt -= L.r),
              (Lt -= L.g),
              (Bt -= L.b),
              (z = (st + ((z = Yt + a + 1) < u ? z : u)) << 2),
              (mt += L.r = o[z]),
              (Ot += L.g = o[z + 1]),
              (Ft += L.b = o[z + 2]),
              (At += mt),
              (wt += Ot),
              (It += Ft),
              (L = L.next),
              (Tt += gt = U.r),
              (Lt += pt = U.g),
              (Bt += St = U.b),
              (mt -= gt),
              (Ot -= pt),
              (Ft -= St),
              (U = U.next),
              (H += 4);
          st += r;
        }
        for (var Ht = 0; Ht < r; Ht++) {
          H = Ht << 2;
          var Xt = o[H],
            Kt = o[H + 1],
            ee = o[H + 2],
            Le = p * Xt,
            Be = p * Kt,
            me = p * ee,
            xe = E * Xt,
            Ee = E * Kt,
            Te = E * ee;
          m = T;
          for (var re = 0; re < p; re++) (m.r = Xt), (m.g = Kt), (m.b = ee), (m = m.next);
          for (var Oe = 0, Fe = 0, Ue = 0, Re = 1, Ye = r; Re <= a; Re++)
            (H = (Ye + Ht) << 2),
              (xe += (m.r = Xt = o[H]) * (rt = p - Re)),
              (Ee += (m.g = Kt = o[H + 1]) * rt),
              (Te += (m.b = ee = o[H + 2]) * rt),
              (Oe += Xt),
              (Fe += Kt),
              (Ue += ee),
              (m = m.next),
              Re < c && (Ye += r);
          (H = Ht), (L = T), (U = D);
          for (var ne = 0; ne < i; ne++)
            (z = H << 2),
              (o[z] = (xe * K) >>> j),
              (o[z + 1] = (Ee * K) >>> j),
              (o[z + 2] = (Te * K) >>> j),
              (xe -= Le),
              (Ee -= Be),
              (Te -= me),
              (Le -= L.r),
              (Be -= L.g),
              (me -= L.b),
              (z = (Ht + ((z = ne + p) < c ? z : c) * r) << 2),
              (xe += Oe += L.r = o[z]),
              (Ee += Fe += L.g = o[z + 1]),
              (Te += Ue += L.b = o[z + 2]),
              (L = L.next),
              (Le += Xt = U.r),
              (Be += Kt = U.g),
              (me += ee = U.b),
              (Oe -= Xt),
              (Fe -= Kt),
              (Ue -= ee),
              (U = U.next),
              (H += r);
        }
        return h;
      }
      var Jt = function h() {
          Rt(this, h), (this.r = 0), (this.g = 0), (this.b = 0), (this.a = 0), (this.next = null);
        },
        fe = n(34155);
      function ce() {
        var { DOMParser: h } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          t = {
            window: null,
            ignoreAnimation: !0,
            ignoreMouse: !0,
            DOMParser: h,
            createCanvas(e, r) {
              return new OffscreenCanvas(e, r);
            },
            createImage(e) {
              return (0, f.Z)(function* () {
                var r = yield fetch(e),
                  i = yield r.blob(),
                  a = yield createImageBitmap(i);
                return a;
              })();
            },
          };
        return (
          (typeof DOMParser != 'undefined' || typeof h == 'undefined') &&
            Reflect.deleteProperty(t, 'DOMParser'),
          t
        );
      }
      function be(h) {
        var { DOMParser: t, canvas: e, fetch: r } = h;
        return {
          window: null,
          ignoreAnimation: !0,
          ignoreMouse: !0,
          DOMParser: t,
          fetch: r,
          createCanvas: e.createCanvas,
          createImage: e.loadImage,
        };
      }
      var or = Object.freeze({ __proto__: null, offscreen: ce, node: be });
      function _t(h) {
        return h.replace(/(?!\u3000)\s+/gm, ' ');
      }
      function Xe(h) {
        return h.replace(/^[\n \t]+/, '');
      }
      function ae(h) {
        return h.replace(/[\n \t]+$/, '');
      }
      function Mt(h) {
        var t = (h || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
        return t.map(parseFloat);
      }
      var je = /^[A-Z-]+$/;
      function W(h) {
        return je.test(h) ? h.toLowerCase() : h;
      }
      function nt(h) {
        var t = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(h) || [];
        return t[2] || t[3] || t[4];
      }
      function ct(h) {
        if (!h.startsWith('rgb')) return h;
        var t = 3,
          e = h.replace(/\d+(\.\d+)?/g, (r, i) =>
            t-- && i ? String(Math.round(parseFloat(r))) : r,
          );
        return e;
      }
      var dt = /(\[[^\]]+\])/g,
        bt = /(#[^\s+>~.[:]+)/g,
        ve = /(\.[^\s+>~.[:]+)/g,
        Ve = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
        ge = /(:[\w-]+\([^)]*\))/gi,
        de = /(:[^\s+>~.[:]+)/g,
        We = /([^\s+>~.[:]+)/g;
      function te(h, t) {
        var e = t.exec(h);
        return e ? [h.replace(t, ' '), e.length] : [h, 0];
      }
      function Qe(h) {
        var t = [0, 0, 0],
          e = h.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' '),
          r = 0;
        return (
          ([e, r] = te(e, dt)),
          (t[1] += r),
          ([e, r] = te(e, bt)),
          (t[0] += r),
          ([e, r] = te(e, ve)),
          (t[1] += r),
          ([e, r] = te(e, Ve)),
          (t[2] += r),
          ([e, r] = te(e, ge)),
          (t[1] += r),
          ([e, r] = te(e, de)),
          (t[1] += r),
          (e = e.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ')),
          ([e, r] = te(e, We)),
          (t[2] += r),
          t.join('')
        );
      }
      var Ce = 1e-8;
      function ur(h) {
        return Math.sqrt(Math.pow(h[0], 2) + Math.pow(h[1], 2));
      }
      function Ze(h, t) {
        return (h[0] * t[0] + h[1] * t[1]) / (ur(h) * ur(t));
      }
      function lr(h, t) {
        return (h[0] * t[1] < h[1] * t[0] ? -1 : 1) * Math.acos(Ze(h, t));
      }
      function hr(h) {
        return h * h * h;
      }
      function fr(h) {
        return 3 * h * h * (1 - h);
      }
      function cr(h) {
        return 3 * h * (1 - h) * (1 - h);
      }
      function vr(h) {
        return (1 - h) * (1 - h) * (1 - h);
      }
      function gr(h) {
        return h * h;
      }
      function dr(h) {
        return 2 * h * (1 - h);
      }
      function pr(h) {
        return (1 - h) * (1 - h);
      }
      class k {
        constructor(t, e, r) {
          (this.document = t), (this.name = e), (this.value = r), (this.isNormalizedColor = !1);
        }
        static empty(t) {
          return new k(t, 'EMPTY', '');
        }
        split() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ' ',
            { document: e, name: r } = this;
          return _t(this.getString())
            .trim()
            .split(t)
            .map((i) => new k(e, r, i));
        }
        hasValue(t) {
          var { value: e } = this;
          return e !== null && e !== '' && (t || e !== 0) && typeof e != 'undefined';
        }
        isString(t) {
          var { value: e } = this,
            r = typeof e == 'string';
          return !r || !t ? r : t.test(e);
        }
        isUrlDefinition() {
          return this.isString(/^url\(/);
        }
        isPixels() {
          if (!this.hasValue()) return !1;
          var t = this.getString();
          switch (!0) {
            case t.endsWith('px'):
            case /^[0-9]+$/.test(t):
              return !0;
            default:
              return !1;
          }
        }
        setValue(t) {
          return (this.value = t), this;
        }
        getValue(t) {
          return typeof t == 'undefined' || this.hasValue() ? this.value : t;
        }
        getNumber(t) {
          if (!this.hasValue()) return typeof t == 'undefined' ? 0 : parseFloat(t);
          var { value: e } = this,
            r = parseFloat(e);
          return this.isString(/%$/) && (r /= 100), r;
        }
        getString(t) {
          return typeof t == 'undefined' || this.hasValue()
            ? typeof this.value == 'undefined'
              ? ''
              : String(this.value)
            : String(t);
        }
        getColor(t) {
          var e = this.getString(t);
          return (
            this.isNormalizedColor ||
              ((this.isNormalizedColor = !0), (e = ct(e)), (this.value = e)),
            e
          );
        }
        getDpi() {
          return 96;
        }
        getRem() {
          return this.document.rootEmSize;
        }
        getEm() {
          return this.document.emSize;
        }
        getUnits() {
          return this.getString().replace(/[0-9.-]/g, '');
        }
        getPixels(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          if (!this.hasValue()) return 0;
          var [r, i] = typeof t == 'boolean' ? [void 0, t] : [t],
            { viewPort: a } = this.document.screen;
          switch (!0) {
            case this.isString(/vmin$/):
              return (this.getNumber() / 100) * Math.min(a.computeSize('x'), a.computeSize('y'));
            case this.isString(/vmax$/):
              return (this.getNumber() / 100) * Math.max(a.computeSize('x'), a.computeSize('y'));
            case this.isString(/vw$/):
              return (this.getNumber() / 100) * a.computeSize('x');
            case this.isString(/vh$/):
              return (this.getNumber() / 100) * a.computeSize('y');
            case this.isString(/rem$/):
              return this.getNumber() * this.getRem();
            case this.isString(/em$/):
              return this.getNumber() * this.getEm();
            case this.isString(/ex$/):
              return (this.getNumber() * this.getEm()) / 2;
            case this.isString(/px$/):
              return this.getNumber();
            case this.isString(/pt$/):
              return this.getNumber() * this.getDpi() * (1 / 72);
            case this.isString(/pc$/):
              return this.getNumber() * 15;
            case this.isString(/cm$/):
              return (this.getNumber() * this.getDpi()) / 2.54;
            case this.isString(/mm$/):
              return (this.getNumber() * this.getDpi()) / 25.4;
            case this.isString(/in$/):
              return this.getNumber() * this.getDpi();
            case this.isString(/%$/) && i:
              return this.getNumber() * this.getEm();
            case this.isString(/%$/):
              return this.getNumber() * a.computeSize(r);
            default: {
              var o = this.getNumber();
              return e && o < 1 ? o * a.computeSize(r) : o;
            }
          }
        }
        getMilliseconds() {
          return this.hasValue()
            ? this.isString(/ms$/)
              ? this.getNumber()
              : this.getNumber() * 1e3
            : 0;
        }
        getRadians() {
          if (!this.hasValue()) return 0;
          switch (!0) {
            case this.isString(/deg$/):
              return this.getNumber() * (Math.PI / 180);
            case this.isString(/grad$/):
              return this.getNumber() * (Math.PI / 200);
            case this.isString(/rad$/):
              return this.getNumber();
            default:
              return this.getNumber() * (Math.PI / 180);
          }
        }
        getDefinition() {
          var t = this.getString(),
            e = /#([^)'"]+)/.exec(t);
          return e && (e = e[1]), e || (e = t), this.document.definitions[e];
        }
        getFillStyleDefinition(t, e) {
          var r = this.getDefinition();
          if (!r) return null;
          if (typeof r.createGradient == 'function')
            return r.createGradient(this.document.ctx, t, e);
          if (typeof r.createPattern == 'function') {
            if (r.getHrefAttribute().hasValue()) {
              var i = r.getAttribute('patternTransform');
              (r = r.getHrefAttribute().getDefinition()),
                i.hasValue() && r.getAttribute('patternTransform', !0).setValue(i.value);
            }
            return r.createPattern(this.document.ctx, t, e);
          }
          return null;
        }
        getTextBaseline() {
          return this.hasValue() ? k.textBaselineMapping[this.getString()] : null;
        }
        addOpacity(t) {
          for (
            var e = this.getColor(), r = e.length, i = 0, a = 0;
            a < r && (e[a] === ',' && i++, i !== 3);
            a++
          );
          if (t.hasValue() && this.isString() && i !== 3) {
            var o = new I(e);
            o.ok && ((o.alpha = t.getNumber()), (e = o.toRGBA()));
          }
          return new k(this.document, this.name, e);
        }
      }
      k.textBaselineMapping = {
        baseline: 'alphabetic',
        'before-edge': 'top',
        'text-before-edge': 'top',
        middle: 'middle',
        central: 'middle',
        'after-edge': 'bottom',
        'text-after-edge': 'bottom',
        ideographic: 'ideographic',
        alphabetic: 'alphabetic',
        hanging: 'hanging',
        mathematical: 'alphabetic',
      };
      class Lr {
        constructor() {
          this.viewPorts = [];
        }
        clear() {
          this.viewPorts = [];
        }
        setCurrent(t, e) {
          this.viewPorts.push({ width: t, height: e });
        }
        removeCurrent() {
          this.viewPorts.pop();
        }
        getCurrent() {
          var { viewPorts: t } = this;
          return t[t.length - 1];
        }
        get width() {
          return this.getCurrent().width;
        }
        get height() {
          return this.getCurrent().height;
        }
        computeSize(t) {
          return typeof t == 'number'
            ? t
            : t === 'x'
            ? this.width
            : t === 'y'
            ? this.height
            : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
        }
      }
      class Nt {
        constructor(t, e) {
          (this.x = t), (this.y = e);
        }
        static parse(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
            [r = e, i = e] = Mt(t);
          return new Nt(r, i);
        }
        static parseScale(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1,
            [r = e, i = r] = Mt(t);
          return new Nt(r, i);
        }
        static parsePath(t) {
          for (var e = Mt(t), r = e.length, i = [], a = 0; a < r; a += 2)
            i.push(new Nt(e[a], e[a + 1]));
          return i;
        }
        angleTo(t) {
          return Math.atan2(t.y - this.y, t.x - this.x);
        }
        applyTransform(t) {
          var { x: e, y: r } = this,
            i = e * t[0] + r * t[2] + t[4],
            a = e * t[1] + r * t[3] + t[5];
          (this.x = i), (this.y = a);
        }
      }
      class Br {
        constructor(t) {
          (this.screen = t),
            (this.working = !1),
            (this.events = []),
            (this.eventElements = []),
            (this.onClick = this.onClick.bind(this)),
            (this.onMouseMove = this.onMouseMove.bind(this));
        }
        isWorking() {
          return this.working;
        }
        start() {
          if (!this.working) {
            var { screen: t, onClick: e, onMouseMove: r } = this,
              i = t.ctx.canvas;
            (i.onclick = e), (i.onmousemove = r), (this.working = !0);
          }
        }
        stop() {
          if (this.working) {
            var t = this.screen.ctx.canvas;
            (this.working = !1), (t.onclick = null), (t.onmousemove = null);
          }
        }
        hasEvents() {
          return this.working && this.events.length > 0;
        }
        runEvents() {
          if (this.working) {
            var { screen: t, events: e, eventElements: r } = this,
              { style: i } = t.ctx.canvas;
            i && (i.cursor = ''),
              e.forEach((a, o) => {
                for (var { run: s } = a, u = r[o]; u; ) s(u), (u = u.parent);
              }),
              (this.events = []),
              (this.eventElements = []);
          }
        }
        checkPath(t, e) {
          if (!(!this.working || !e)) {
            var { events: r, eventElements: i } = this;
            r.forEach((a, o) => {
              var { x: s, y: u } = a;
              !i[o] && e.isPointInPath && e.isPointInPath(s, u) && (i[o] = t);
            });
          }
        }
        checkBoundingBox(t, e) {
          if (!(!this.working || !e)) {
            var { events: r, eventElements: i } = this;
            r.forEach((a, o) => {
              var { x: s, y: u } = a;
              !i[o] && e.isPointInBox(s, u) && (i[o] = t);
            });
          }
        }
        mapXY(t, e) {
          for (var { window: r, ctx: i } = this.screen, a = new Nt(t, e), o = i.canvas; o; )
            (a.x -= o.offsetLeft), (a.y -= o.offsetTop), (o = o.offsetParent);
          return r.scrollX && (a.x += r.scrollX), r.scrollY && (a.y += r.scrollY), a;
        }
        onClick(t) {
          var { x: e, y: r } = this.mapXY(t.clientX, t.clientY);
          this.events.push({
            type: 'onclick',
            x: e,
            y: r,
            run(i) {
              i.onClick && i.onClick();
            },
          });
        }
        onMouseMove(t) {
          var { x: e, y: r } = this.mapXY(t.clientX, t.clientY);
          this.events.push({
            type: 'onmousemove',
            x: e,
            y: r,
            run(i) {
              i.onMouseMove && i.onMouseMove();
            },
          });
        }
      }
      var Fr = typeof window != 'undefined' ? window : null,
        Ur = typeof fetch != 'undefined' ? fetch.bind(void 0) : null;
      class ze {
        constructor(t) {
          var { fetch: e = Ur, window: r = Fr } =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          (this.ctx = t),
            (this.FRAMERATE = 30),
            (this.MAX_VIRTUAL_PIXELS = 3e4),
            (this.CLIENT_WIDTH = 800),
            (this.CLIENT_HEIGHT = 600),
            (this.viewPort = new Lr()),
            (this.mouse = new Br(this)),
            (this.animations = []),
            (this.waits = []),
            (this.frameDuration = 0),
            (this.isReadyLock = !1),
            (this.isFirstRender = !0),
            (this.intervalId = null),
            (this.window = r),
            (this.fetch = e);
        }
        wait(t) {
          this.waits.push(t);
        }
        ready() {
          return this.readyPromise ? this.readyPromise : Promise.resolve();
        }
        isReady() {
          if (this.isReadyLock) return !0;
          var t = this.waits.every((e) => e());
          return (
            t && ((this.waits = []), this.resolveReady && this.resolveReady()),
            (this.isReadyLock = t),
            t
          );
        }
        setDefaults(t) {
          (t.strokeStyle = 'rgba(0,0,0,0)'),
            (t.lineCap = 'butt'),
            (t.lineJoin = 'miter'),
            (t.miterLimit = 4);
        }
        setViewBox(t) {
          var {
              document: e,
              ctx: r,
              aspectRatio: i,
              width: a,
              desiredWidth: o,
              height: s,
              desiredHeight: u,
              minX: c = 0,
              minY: p = 0,
              refX: E,
              refY: T,
              clip: m = !1,
              clipX: D = 0,
              clipY: V = 0,
            } = t,
            L = _t(i).replace(/^defer\s/, ''),
            [U, K] = L.split(' '),
            j = U || 'xMidYMid',
            z = K || 'meet',
            rt = a / o,
            st = s / u,
            H = Math.min(rt, st),
            vt = Math.max(rt, st),
            gt = o,
            pt = u;
          z === 'meet' && ((gt *= H), (pt *= H)), z === 'slice' && ((gt *= vt), (pt *= vt));
          var St = new k(e, 'refX', E),
            Tt = new k(e, 'refY', T),
            Lt = St.hasValue() && Tt.hasValue();
          if ((Lt && r.translate(-H * St.getPixels('x'), -H * Tt.getPixels('y')), m)) {
            var Bt = H * D,
              At = H * V;
            r.beginPath(),
              r.moveTo(Bt, At),
              r.lineTo(a, At),
              r.lineTo(a, s),
              r.lineTo(Bt, s),
              r.closePath(),
              r.clip();
          }
          if (!Lt) {
            var wt = z === 'meet' && H === st,
              It = z === 'slice' && vt === st,
              zt = z === 'meet' && H === rt,
              mt = z === 'slice' && vt === rt;
            j.startsWith('xMid') && (wt || It) && r.translate(a / 2 - gt / 2, 0),
              j.endsWith('YMid') && (zt || mt) && r.translate(0, s / 2 - pt / 2),
              j.startsWith('xMax') && (wt || It) && r.translate(a - gt, 0),
              j.endsWith('YMax') && (zt || mt) && r.translate(0, s - pt);
          }
          switch (!0) {
            case j === 'none':
              r.scale(rt, st);
              break;
            case z === 'meet':
              r.scale(H, H);
              break;
            case z === 'slice':
              r.scale(vt, vt);
              break;
          }
          r.translate(-c, -p);
        }
        start(t) {
          var {
              enableRedraw: e = !1,
              ignoreMouse: r = !1,
              ignoreAnimation: i = !1,
              ignoreDimensions: a = !1,
              ignoreClear: o = !1,
              forceRedraw: s,
              scaleWidth: u,
              scaleHeight: c,
              offsetX: p,
              offsetY: E,
            } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            { FRAMERATE: T, mouse: m } = this,
            D = 1e3 / T;
          if (
            ((this.frameDuration = D),
            (this.readyPromise = new Promise((j) => {
              this.resolveReady = j;
            })),
            this.isReady() && this.render(t, a, o, u, c, p, E),
            !!e)
          ) {
            var V = Date.now(),
              L = V,
              U = 0,
              K = () => {
                (V = Date.now()),
                  (U = V - L),
                  U >= D &&
                    ((L = V - (U % D)),
                    this.shouldUpdate(i, s) && (this.render(t, a, o, u, c, p, E), m.runEvents())),
                  (this.intervalId = P(K));
              };
            r || m.start(), (this.intervalId = P(K));
          }
        }
        stop() {
          this.intervalId && (P.cancel(this.intervalId), (this.intervalId = null)),
            this.mouse.stop();
        }
        shouldUpdate(t, e) {
          if (!t) {
            var { frameDuration: r } = this,
              i = this.animations.reduce((a, o) => o.update(r) || a, !1);
            if (i) return !0;
          }
          return !!(
            (typeof e == 'function' && e()) ||
            (!this.isReadyLock && this.isReady()) ||
            this.mouse.hasEvents()
          );
        }
        render(t, e, r, i, a, o, s) {
          var { CLIENT_WIDTH: u, CLIENT_HEIGHT: c, viewPort: p, ctx: E, isFirstRender: T } = this,
            m = E.canvas;
          p.clear(), m.width && m.height ? p.setCurrent(m.width, m.height) : p.setCurrent(u, c);
          var D = t.getStyle('width'),
            V = t.getStyle('height');
          !e &&
            (T || (typeof i != 'number' && typeof a != 'number')) &&
            (D.hasValue() &&
              ((m.width = D.getPixels('x')), m.style && (m.style.width = ''.concat(m.width, 'px'))),
            V.hasValue() &&
              ((m.height = V.getPixels('y')),
              m.style && (m.style.height = ''.concat(m.height, 'px'))));
          var L = m.clientWidth || m.width,
            U = m.clientHeight || m.height;
          if (
            (e && D.hasValue() && V.hasValue() && ((L = D.getPixels('x')), (U = V.getPixels('y'))),
            p.setCurrent(L, U),
            typeof o == 'number' && t.getAttribute('x', !0).setValue(o),
            typeof s == 'number' && t.getAttribute('y', !0).setValue(s),
            typeof i == 'number' || typeof a == 'number')
          ) {
            var K = Mt(t.getAttribute('viewBox').getString()),
              j = 0,
              z = 0;
            if (typeof i == 'number') {
              var rt = t.getStyle('width');
              rt.hasValue() ? (j = rt.getPixels('x') / i) : isNaN(K[2]) || (j = K[2] / i);
            }
            if (typeof a == 'number') {
              var st = t.getStyle('height');
              st.hasValue() ? (z = st.getPixels('y') / a) : isNaN(K[3]) || (z = K[3] / a);
            }
            j || (j = z),
              z || (z = j),
              t.getAttribute('width', !0).setValue(i),
              t.getAttribute('height', !0).setValue(a);
            var H = t.getStyle('transform', !0, !0);
            H.setValue(
              ''
                .concat(H.getString(), ' scale(')
                .concat(1 / j, ', ')
                .concat(1 / z, ')'),
            );
          }
          r || E.clearRect(0, 0, L, U), t.render(E), T && (this.isFirstRender = !1);
        }
      }
      (ze.defaultWindow = Fr), (ze.defaultFetch = Ur);
      var { defaultFetch: Pn } = ze,
        Rn = typeof DOMParser != 'undefined' ? DOMParser : null;
      class Ke {
        constructor() {
          var { fetch: t = Pn, DOMParser: e = Rn } =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          (this.fetch = t), (this.DOMParser = e);
        }
        parse(t) {
          var e = this;
          return (0, f.Z)(function* () {
            return t.startsWith('<') ? e.parseFromString(t) : e.load(t);
          })();
        }
        parseFromString(t) {
          var e = new this.DOMParser();
          try {
            return this.checkDocument(e.parseFromString(t, 'image/svg+xml'));
          } catch (r) {
            return this.checkDocument(e.parseFromString(t, 'text/xml'));
          }
        }
        checkDocument(t) {
          var e = t.getElementsByTagName('parsererror')[0];
          if (e) throw new Error(e.textContent);
          return t;
        }
        load(t) {
          var e = this;
          return (0, f.Z)(function* () {
            var r = yield e.fetch(t),
              i = yield r.text();
            return e.parseFromString(i);
          })();
        }
      }
      class jr {
        constructor(t, e) {
          (this.type = 'translate'), (this.point = null), (this.point = Nt.parse(e));
        }
        apply(t) {
          var { x: e, y: r } = this.point;
          t.translate(e || 0, r || 0);
        }
        unapply(t) {
          var { x: e, y: r } = this.point;
          t.translate(-1 * e || 0, -1 * r || 0);
        }
        applyToPoint(t) {
          var { x: e, y: r } = this.point;
          t.applyTransform([1, 0, 0, 1, e || 0, r || 0]);
        }
      }
      class zr {
        constructor(t, e, r) {
          (this.type = 'rotate'),
            (this.angle = null),
            (this.originX = null),
            (this.originY = null),
            (this.cx = 0),
            (this.cy = 0);
          var i = Mt(e);
          (this.angle = new k(t, 'angle', i[0])),
            (this.originX = r[0]),
            (this.originY = r[1]),
            (this.cx = i[1] || 0),
            (this.cy = i[2] || 0);
        }
        apply(t) {
          var { cx: e, cy: r, originX: i, originY: a, angle: o } = this,
            s = e + i.getPixels('x'),
            u = r + a.getPixels('y');
          t.translate(s, u), t.rotate(o.getRadians()), t.translate(-s, -u);
        }
        unapply(t) {
          var { cx: e, cy: r, originX: i, originY: a, angle: o } = this,
            s = e + i.getPixels('x'),
            u = r + a.getPixels('y');
          t.translate(s, u), t.rotate(-1 * o.getRadians()), t.translate(-s, -u);
        }
        applyToPoint(t) {
          var { cx: e, cy: r, angle: i } = this,
            a = i.getRadians();
          t.applyTransform([1, 0, 0, 1, e || 0, r || 0]),
            t.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]),
            t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0]);
        }
      }
      class Gr {
        constructor(t, e, r) {
          (this.type = 'scale'), (this.scale = null), (this.originX = null), (this.originY = null);
          var i = Nt.parseScale(e);
          (i.x === 0 || i.y === 0) && ((i.x = Ce), (i.y = Ce)),
            (this.scale = i),
            (this.originX = r[0]),
            (this.originY = r[1]);
        }
        apply(t) {
          var {
              scale: { x: e, y: r },
              originX: i,
              originY: a,
            } = this,
            o = i.getPixels('x'),
            s = a.getPixels('y');
          t.translate(o, s), t.scale(e, r || e), t.translate(-o, -s);
        }
        unapply(t) {
          var {
              scale: { x: e, y: r },
              originX: i,
              originY: a,
            } = this,
            o = i.getPixels('x'),
            s = a.getPixels('y');
          t.translate(o, s), t.scale(1 / e, 1 / r || e), t.translate(-o, -s);
        }
        applyToPoint(t) {
          var { x: e, y: r } = this.scale;
          t.applyTransform([e || 0, 0, 0, r || 0, 0, 0]);
        }
      }
      class yr {
        constructor(t, e, r) {
          (this.type = 'matrix'),
            (this.matrix = []),
            (this.originX = null),
            (this.originY = null),
            (this.matrix = Mt(e)),
            (this.originX = r[0]),
            (this.originY = r[1]);
        }
        apply(t) {
          var { originX: e, originY: r, matrix: i } = this,
            a = e.getPixels('x'),
            o = r.getPixels('y');
          t.translate(a, o), t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), t.translate(-a, -o);
        }
        unapply(t) {
          var { originX: e, originY: r, matrix: i } = this,
            a = i[0],
            o = i[2],
            s = i[4],
            u = i[1],
            c = i[3],
            p = i[5],
            E = 0,
            T = 0,
            m = 1,
            D = 1 / (a * (c * m - p * T) - o * (u * m - p * E) + s * (u * T - c * E)),
            V = e.getPixels('x'),
            L = r.getPixels('y');
          t.translate(V, L),
            t.transform(
              D * (c * m - p * T),
              D * (p * E - u * m),
              D * (s * T - o * m),
              D * (a * m - s * E),
              D * (o * p - s * c),
              D * (s * u - a * p),
            ),
            t.translate(-V, -L);
        }
        applyToPoint(t) {
          t.applyTransform(this.matrix);
        }
      }
      class mr extends yr {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'skew'),
            (this.angle = null),
            (this.angle = new k(t, 'angle', e));
        }
      }
      class $r extends mr {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'skewX'),
            (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0]);
        }
      }
      class Hr extends mr {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'skewY'),
            (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0]);
        }
      }
      function Nn(h) {
        return _t(h)
          .trim()
          .replace(/\)([a-zA-Z])/g, ') $1')
          .replace(/\)(\s?,\s?)/g, ') ')
          .split(/\s(?=[a-z])/);
      }
      function In(h) {
        var [t, e] = h.split('(');
        return [t.trim(), e.trim().replace(')', '')];
      }
      class pe {
        constructor(t, e, r) {
          (this.document = t), (this.transforms = []);
          var i = Nn(e);
          i.forEach((a) => {
            if (a !== 'none') {
              var [o, s] = In(a),
                u = pe.transformTypes[o];
              typeof u != 'undefined' && this.transforms.push(new u(this.document, s, r));
            }
          });
        }
        static fromElement(t, e) {
          var r = e.getStyle('transform', !1, !0),
            [i, a = i] = e.getStyle('transform-origin', !1, !0).split(),
            o = [i, a];
          return r.hasValue() ? new pe(t, r.getString(), o) : null;
        }
        apply(t) {
          for (var { transforms: e } = this, r = e.length, i = 0; i < r; i++) e[i].apply(t);
        }
        unapply(t) {
          for (var { transforms: e } = this, r = e.length, i = r - 1; i >= 0; i--) e[i].unapply(t);
        }
        applyToPoint(t) {
          for (var { transforms: e } = this, r = e.length, i = 0; i < r; i++) e[i].applyToPoint(t);
        }
      }
      pe.transformTypes = {
        translate: jr,
        rotate: zr,
        scale: Gr,
        matrix: yr,
        skewX: $r,
        skewY: Hr,
      };
      class Ct {
        constructor(t, e) {
          var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          if (
            ((this.document = t),
            (this.node = e),
            (this.captureTextNodes = r),
            (this.attributes = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.animationFrozen = !1),
            (this.animationFrozenValue = ''),
            (this.parent = null),
            (this.children = []),
            !(!e || e.nodeType !== 1))
          ) {
            if (
              (Array.from(e.attributes).forEach((s) => {
                var u = W(s.nodeName);
                this.attributes[u] = new k(t, u, s.value);
              }),
              this.addStylesFromStyleDefinition(),
              this.getAttribute('style').hasValue())
            ) {
              var i = this.getAttribute('style')
                .getString()
                .split(';')
                .map((s) => s.trim());
              i.forEach((s) => {
                if (s) {
                  var [u, c] = s.split(':').map((p) => p.trim());
                  this.styles[u] = new k(t, u, c);
                }
              });
            }
            var { definitions: a } = t,
              o = this.getAttribute('id');
            o.hasValue() && (a[o.getString()] || (a[o.getString()] = this)),
              Array.from(e.childNodes).forEach((s) => {
                if (s.nodeType === 1) this.addChild(s);
                else if (r && (s.nodeType === 3 || s.nodeType === 4)) {
                  var u = t.createTextNode(s);
                  u.getText().length > 0 && this.addChild(u);
                }
              });
          }
        }
        getAttribute(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            r = this.attributes[t];
          if (!r && e) {
            var i = new k(this.document, t, '');
            return (this.attributes[t] = i), i;
          }
          return r || k.empty(this.document);
        }
        getHrefAttribute() {
          for (var t in this.attributes)
            if (t === 'href' || t.endsWith(':href')) return this.attributes[t];
          return k.empty(this.document);
        }
        getStyle(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
            i = this.styles[t];
          if (i) return i;
          var a = this.getAttribute(t);
          if (a != null && a.hasValue()) return (this.styles[t] = a), a;
          if (!r) {
            var { parent: o } = this;
            if (o) {
              var s = o.getStyle(t);
              if (s != null && s.hasValue()) return s;
            }
          }
          if (e) {
            var u = new k(this.document, t, '');
            return (this.styles[t] = u), u;
          }
          return i || k.empty(this.document);
        }
        render(t) {
          if (
            !(
              this.getStyle('display').getString() === 'none' ||
              this.getStyle('visibility').getString() === 'hidden'
            )
          ) {
            if ((t.save(), this.getStyle('mask').hasValue())) {
              var e = this.getStyle('mask').getDefinition();
              e && (this.applyEffects(t), e.apply(t, this));
            } else if (this.getStyle('filter').getValue('none') !== 'none') {
              var r = this.getStyle('filter').getDefinition();
              r && (this.applyEffects(t), r.apply(t, this));
            } else this.setContext(t), this.renderChildren(t), this.clearContext(t);
            t.restore();
          }
        }
        setContext(t) {}
        applyEffects(t) {
          var e = pe.fromElement(this.document, this);
          e && e.apply(t);
          var r = this.getStyle('clip-path', !1, !0);
          if (r.hasValue()) {
            var i = r.getDefinition();
            i && i.apply(t);
          }
        }
        clearContext(t) {}
        renderChildren(t) {
          this.children.forEach((e) => {
            e.render(t);
          });
        }
        addChild(t) {
          var e = t instanceof Ct ? t : this.document.createElement(t);
          (e.parent = this), Ct.ignoreChildTypes.includes(e.type) || this.children.push(e);
        }
        matchesSelector(t) {
          var e,
            { node: r } = this;
          if (typeof r.matches == 'function') return r.matches(t);
          var i = (e = r.getAttribute) === null || e === void 0 ? void 0 : e.call(r, 'class');
          return !i || i === '' ? !1 : i.split(' ').some((a) => '.'.concat(a) === t);
        }
        addStylesFromStyleDefinition() {
          var { styles: t, stylesSpecificity: e } = this.document;
          for (var r in t)
            if (!r.startsWith('@') && this.matchesSelector(r)) {
              var i = t[r],
                a = e[r];
              if (i)
                for (var o in i) {
                  var s = this.stylesSpecificity[o];
                  typeof s == 'undefined' && (s = '000'),
                    a >= s && ((this.styles[o] = i[o]), (this.stylesSpecificity[o] = a));
                }
            }
        }
        removeStyles(t, e) {
          var r = e.reduce((i, a) => {
            var o = t.getStyle(a);
            if (!o.hasValue()) return i;
            var s = o.getString();
            return o.setValue(''), [...i, [a, s]];
          }, []);
          return r;
        }
        restoreStyles(t, e) {
          e.forEach((r) => {
            var [i, a] = r;
            t.getStyle(i, !0).setValue(a);
          });
        }
        isFirstChild() {
          var t;
          return (
            ((t = this.parent) === null || t === void 0 ? void 0 : t.children.indexOf(this)) === 0
          );
        }
      }
      Ct.ignoreChildTypes = ['title'];
      class Yr extends Ct {
        constructor(t, e, r) {
          super(t, e, r);
        }
      }
      function Mn(h) {
        var t = h.trim();
        return /^('|")/.test(t) ? t : '"'.concat(t, '"');
      }
      function wn(h) {
        return typeof fe == 'undefined' ? h : h.trim().split(',').map(Mn).join(',');
      }
      function Vn(h) {
        if (!h) return '';
        var t = h.trim().toLowerCase();
        switch (t) {
          case 'normal':
          case 'italic':
          case 'oblique':
          case 'inherit':
          case 'initial':
          case 'unset':
            return t;
          default:
            return /^oblique\s+(-|)\d+deg$/.test(t) ? t : '';
        }
      }
      function Dn(h) {
        if (!h) return '';
        var t = h.trim().toLowerCase();
        switch (t) {
          case 'normal':
          case 'bold':
          case 'lighter':
          case 'bolder':
          case 'inherit':
          case 'initial':
          case 'unset':
            return t;
          default:
            return /^[\d.]+$/.test(t) ? t : '';
        }
      }
      class $t {
        constructor(t, e, r, i, a, o) {
          var s = o ? (typeof o == 'string' ? $t.parse(o) : o) : {};
          (this.fontFamily = a || s.fontFamily),
            (this.fontSize = i || s.fontSize),
            (this.fontStyle = t || s.fontStyle),
            (this.fontWeight = r || s.fontWeight),
            (this.fontVariant = e || s.fontVariant);
        }
        static parse() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
            e = arguments.length > 1 ? arguments[1] : void 0,
            r = '',
            i = '',
            a = '',
            o = '',
            s = '',
            u = _t(t).trim().split(' '),
            c = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 };
          return (
            u.forEach((p) => {
              switch (!0) {
                case !c.fontStyle && $t.styles.includes(p):
                  p !== 'inherit' && (r = p), (c.fontStyle = !0);
                  break;
                case !c.fontVariant && $t.variants.includes(p):
                  p !== 'inherit' && (i = p), (c.fontStyle = !0), (c.fontVariant = !0);
                  break;
                case !c.fontWeight && $t.weights.includes(p):
                  p !== 'inherit' && (a = p),
                    (c.fontStyle = !0),
                    (c.fontVariant = !0),
                    (c.fontWeight = !0);
                  break;
                case !c.fontSize:
                  p !== 'inherit' && ([o] = p.split('/')),
                    (c.fontStyle = !0),
                    (c.fontVariant = !0),
                    (c.fontWeight = !0),
                    (c.fontSize = !0);
                  break;
                default:
                  p !== 'inherit' && (s += p);
              }
            }),
            new $t(r, i, a, o, s, e)
          );
        }
        toString() {
          return [
            Vn(this.fontStyle),
            this.fontVariant,
            Dn(this.fontWeight),
            this.fontSize,
            wn(this.fontFamily),
          ]
            .join(' ')
            .trim();
        }
      }
      ($t.styles = 'normal|italic|oblique|inherit'),
        ($t.variants = 'normal|small-caps|inherit'),
        ($t.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit');
      class Zt {
        constructor() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN,
            e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN,
            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN,
            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
          (this.x1 = t),
            (this.y1 = e),
            (this.x2 = r),
            (this.y2 = i),
            this.addPoint(t, e),
            this.addPoint(r, i);
        }
        get x() {
          return this.x1;
        }
        get y() {
          return this.y1;
        }
        get width() {
          return this.x2 - this.x1;
        }
        get height() {
          return this.y2 - this.y1;
        }
        addPoint(t, e) {
          typeof t != 'undefined' &&
            ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = t), (this.x2 = t)),
            t < this.x1 && (this.x1 = t),
            t > this.x2 && (this.x2 = t)),
            typeof e != 'undefined' &&
              ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = e), (this.y2 = e)),
              e < this.y1 && (this.y1 = e),
              e > this.y2 && (this.y2 = e));
        }
        addX(t) {
          this.addPoint(t, null);
        }
        addY(t) {
          this.addPoint(null, t);
        }
        addBoundingBox(t) {
          if (t) {
            var { x1: e, y1: r, x2: i, y2: a } = t;
            this.addPoint(e, r), this.addPoint(i, a);
          }
        }
        sumCubic(t, e, r, i, a) {
          return (
            Math.pow(1 - t, 3) * e +
            3 * Math.pow(1 - t, 2) * t * r +
            3 * (1 - t) * Math.pow(t, 2) * i +
            Math.pow(t, 3) * a
          );
        }
        bezierCurveAdd(t, e, r, i, a) {
          var o = 6 * e - 12 * r + 6 * i,
            s = -3 * e + 9 * r - 9 * i + 3 * a,
            u = 3 * r - 3 * e;
          if (s === 0) {
            if (o === 0) return;
            var c = -u / o;
            0 < c &&
              c < 1 &&
              (t
                ? this.addX(this.sumCubic(c, e, r, i, a))
                : this.addY(this.sumCubic(c, e, r, i, a)));
            return;
          }
          var p = Math.pow(o, 2) - 4 * u * s;
          if (!(p < 0)) {
            var E = (-o + Math.sqrt(p)) / (2 * s);
            0 < E &&
              E < 1 &&
              (t
                ? this.addX(this.sumCubic(E, e, r, i, a))
                : this.addY(this.sumCubic(E, e, r, i, a)));
            var T = (-o - Math.sqrt(p)) / (2 * s);
            0 < T &&
              T < 1 &&
              (t
                ? this.addX(this.sumCubic(T, e, r, i, a))
                : this.addY(this.sumCubic(T, e, r, i, a)));
          }
        }
        addBezierCurve(t, e, r, i, a, o, s, u) {
          this.addPoint(t, e),
            this.addPoint(s, u),
            this.bezierCurveAdd(!0, t, r, a, s),
            this.bezierCurveAdd(!1, e, i, o, u);
        }
        addQuadraticCurve(t, e, r, i, a, o) {
          var s = t + 0.6666666666666666 * (r - t),
            u = e + (2 / 3) * (i - e),
            c = s + (1 / 3) * (a - t),
            p = u + (1 / 3) * (o - e);
          this.addBezierCurve(t, e, s, c, u, p, a, o);
        }
        isPointInBox(t, e) {
          var { x1: r, y1: i, x2: a, y2: o } = this;
          return r <= t && t <= a && i <= e && e <= o;
        }
      }
      class at extends M {
        constructor(t) {
          super(
            t.replace(/([+\-.])\s+/gm, '$1').replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ''),
          ),
            (this.control = null),
            (this.start = null),
            (this.current = null),
            (this.command = null),
            (this.commands = this.commands),
            (this.i = -1),
            (this.previousCommand = null),
            (this.points = []),
            (this.angles = []);
        }
        reset() {
          (this.i = -1),
            (this.command = null),
            (this.previousCommand = null),
            (this.start = new Nt(0, 0)),
            (this.control = new Nt(0, 0)),
            (this.current = new Nt(0, 0)),
            (this.points = []),
            (this.angles = []);
        }
        isEnd() {
          var { i: t, commands: e } = this;
          return t >= e.length - 1;
        }
        next() {
          var t = this.commands[++this.i];
          return (this.previousCommand = this.command), (this.command = t), t;
        }
        getPoint() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'x',
            e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'y',
            r = new Nt(this.command[t], this.command[e]);
          return this.makeAbsolute(r);
        }
        getAsControlPoint(t, e) {
          var r = this.getPoint(t, e);
          return (this.control = r), r;
        }
        getAsCurrentPoint(t, e) {
          var r = this.getPoint(t, e);
          return (this.current = r), r;
        }
        getReflectedControlPoint() {
          var t = this.previousCommand.type;
          if (
            t !== M.CURVE_TO &&
            t !== M.SMOOTH_CURVE_TO &&
            t !== M.QUAD_TO &&
            t !== M.SMOOTH_QUAD_TO
          )
            return this.current;
          var {
              current: { x: e, y: r },
              control: { x: i, y: a },
            } = this,
            o = new Nt(2 * e - i, 2 * r - a);
          return o;
        }
        makeAbsolute(t) {
          if (this.command.relative) {
            var { x: e, y: r } = this.current;
            (t.x += e), (t.y += r);
          }
          return t;
        }
        addMarker(t, e, r) {
          var { points: i, angles: a } = this;
          r && a.length > 0 && !a[a.length - 1] && (a[a.length - 1] = i[i.length - 1].angleTo(r)),
            this.addMarkerAngle(t, e ? e.angleTo(t) : null);
        }
        addMarkerAngle(t, e) {
          this.points.push(t), this.angles.push(e);
        }
        getMarkerPoints() {
          return this.points;
        }
        getMarkerAngles() {
          for (var { angles: t } = this, e = t.length, r = 0; r < e; r++)
            if (!t[r]) {
              for (var i = r + 1; i < e; i++)
                if (t[i]) {
                  t[r] = t[i];
                  break;
                }
            }
          return t;
        }
      }
      class ye extends Ct {
        constructor() {
          super(...arguments), (this.modifiedEmSizeStack = !1);
        }
        calculateOpacity() {
          for (var t = 1, e = this; e; ) {
            var r = e.getStyle('opacity', !1, !0);
            r.hasValue(!0) && (t *= r.getNumber()), (e = e.parent);
          }
          return t;
        }
        setContext(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          if (!e) {
            var r = this.getStyle('fill'),
              i = this.getStyle('fill-opacity'),
              a = this.getStyle('stroke'),
              o = this.getStyle('stroke-opacity');
            if (r.isUrlDefinition()) {
              var s = r.getFillStyleDefinition(this, i);
              s && (t.fillStyle = s);
            } else if (r.hasValue()) {
              r.getString() === 'currentColor' && r.setValue(this.getStyle('color').getColor());
              var u = r.getColor();
              u !== 'inherit' && (t.fillStyle = u === 'none' ? 'rgba(0,0,0,0)' : u);
            }
            if (i.hasValue()) {
              var c = new k(this.document, 'fill', t.fillStyle).addOpacity(i).getColor();
              t.fillStyle = c;
            }
            if (a.isUrlDefinition()) {
              var p = a.getFillStyleDefinition(this, o);
              p && (t.strokeStyle = p);
            } else if (a.hasValue()) {
              a.getString() === 'currentColor' && a.setValue(this.getStyle('color').getColor());
              var E = a.getString();
              E !== 'inherit' && (t.strokeStyle = E === 'none' ? 'rgba(0,0,0,0)' : E);
            }
            if (o.hasValue()) {
              var T = new k(this.document, 'stroke', t.strokeStyle).addOpacity(o).getString();
              t.strokeStyle = T;
            }
            var m = this.getStyle('stroke-width');
            if (m.hasValue()) {
              var D = m.getPixels();
              t.lineWidth = D || Ce;
            }
            var V = this.getStyle('stroke-linecap'),
              L = this.getStyle('stroke-linejoin'),
              U = this.getStyle('stroke-miterlimit'),
              K = this.getStyle('stroke-dasharray'),
              j = this.getStyle('stroke-dashoffset');
            if (
              (V.hasValue() && (t.lineCap = V.getString()),
              L.hasValue() && (t.lineJoin = L.getString()),
              U.hasValue() && (t.miterLimit = U.getNumber()),
              K.hasValue() && K.getString() !== 'none')
            ) {
              var z = Mt(K.getString());
              typeof t.setLineDash != 'undefined'
                ? t.setLineDash(z)
                : typeof t.webkitLineDash != 'undefined'
                ? (t.webkitLineDash = z)
                : typeof t.mozDash != 'undefined' &&
                  !(z.length === 1 && z[0] === 0) &&
                  (t.mozDash = z);
              var rt = j.getPixels();
              typeof t.lineDashOffset != 'undefined'
                ? (t.lineDashOffset = rt)
                : typeof t.webkitLineDashOffset != 'undefined'
                ? (t.webkitLineDashOffset = rt)
                : typeof t.mozDashOffset != 'undefined' && (t.mozDashOffset = rt);
            }
          }
          if (((this.modifiedEmSizeStack = !1), typeof t.font != 'undefined')) {
            var st = this.getStyle('font'),
              H = this.getStyle('font-style'),
              vt = this.getStyle('font-variant'),
              gt = this.getStyle('font-weight'),
              pt = this.getStyle('font-size'),
              St = this.getStyle('font-family'),
              Tt = new $t(
                H.getString(),
                vt.getString(),
                gt.getString(),
                pt.hasValue() ? ''.concat(pt.getPixels(!0), 'px') : '',
                St.getString(),
                $t.parse(st.getString(), t.font),
              );
            H.setValue(Tt.fontStyle),
              vt.setValue(Tt.fontVariant),
              gt.setValue(Tt.fontWeight),
              pt.setValue(Tt.fontSize),
              St.setValue(Tt.fontFamily),
              (t.font = Tt.toString()),
              pt.isPixels() &&
                ((this.document.emSize = pt.getPixels()), (this.modifiedEmSizeStack = !0));
          }
          e || (this.applyEffects(t), (t.globalAlpha = this.calculateOpacity()));
        }
        clearContext(t) {
          super.clearContext(t), this.modifiedEmSizeStack && this.document.popEmSize();
        }
      }
      class yt extends ye {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'path'),
            (this.pathParser = null),
            (this.pathParser = new at(this.getAttribute('d').getString()));
        }
        path(t) {
          var { pathParser: e } = this,
            r = new Zt();
          for (e.reset(), t && t.beginPath(); !e.isEnd(); )
            switch (e.next().type) {
              case at.MOVE_TO:
                this.pathM(t, r);
                break;
              case at.LINE_TO:
                this.pathL(t, r);
                break;
              case at.HORIZ_LINE_TO:
                this.pathH(t, r);
                break;
              case at.VERT_LINE_TO:
                this.pathV(t, r);
                break;
              case at.CURVE_TO:
                this.pathC(t, r);
                break;
              case at.SMOOTH_CURVE_TO:
                this.pathS(t, r);
                break;
              case at.QUAD_TO:
                this.pathQ(t, r);
                break;
              case at.SMOOTH_QUAD_TO:
                this.pathT(t, r);
                break;
              case at.ARC:
                this.pathA(t, r);
                break;
              case at.CLOSE_PATH:
                this.pathZ(t, r);
                break;
            }
          return r;
        }
        getBoundingBox(t) {
          return this.path();
        }
        getMarkers() {
          var { pathParser: t } = this,
            e = t.getMarkerPoints(),
            r = t.getMarkerAngles(),
            i = e.map((a, o) => [a, r[o]]);
          return i;
        }
        renderChildren(t) {
          this.path(t), this.document.screen.mouse.checkPath(this, t);
          var e = this.getStyle('fill-rule');
          t.fillStyle !== '' &&
            (e.getString('inherit') !== 'inherit' ? t.fill(e.getString()) : t.fill()),
            t.strokeStyle !== '' &&
              (this.getAttribute('vector-effect').getString() === 'non-scaling-stroke'
                ? (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.stroke(), t.restore())
                : t.stroke());
          var r = this.getMarkers();
          if (r) {
            var i = r.length - 1,
              a = this.getStyle('marker-start'),
              o = this.getStyle('marker-mid'),
              s = this.getStyle('marker-end');
            if (a.isUrlDefinition()) {
              var u = a.getDefinition(),
                [c, p] = r[0];
              u.render(t, c, p);
            }
            if (o.isUrlDefinition())
              for (var E = o.getDefinition(), T = 1; T < i; T++) {
                var [m, D] = r[T];
                E.render(t, m, D);
              }
            if (s.isUrlDefinition()) {
              var V = s.getDefinition(),
                [L, U] = r[i];
              V.render(t, L, U);
            }
          }
        }
        static pathM(t) {
          var e = t.getAsCurrentPoint();
          return (t.start = t.current), { point: e };
        }
        pathM(t, e) {
          var { pathParser: r } = this,
            { point: i } = yt.pathM(r),
            { x: a, y: o } = i;
          r.addMarker(i), e.addPoint(a, o), t && t.moveTo(a, o);
        }
        static pathL(t) {
          var { current: e } = t,
            r = t.getAsCurrentPoint();
          return { current: e, point: r };
        }
        pathL(t, e) {
          var { pathParser: r } = this,
            { current: i, point: a } = yt.pathL(r),
            { x: o, y: s } = a;
          r.addMarker(a, i), e.addPoint(o, s), t && t.lineTo(o, s);
        }
        static pathH(t) {
          var { current: e, command: r } = t,
            i = new Nt((r.relative ? e.x : 0) + r.x, e.y);
          return (t.current = i), { current: e, point: i };
        }
        pathH(t, e) {
          var { pathParser: r } = this,
            { current: i, point: a } = yt.pathH(r),
            { x: o, y: s } = a;
          r.addMarker(a, i), e.addPoint(o, s), t && t.lineTo(o, s);
        }
        static pathV(t) {
          var { current: e, command: r } = t,
            i = new Nt(e.x, (r.relative ? e.y : 0) + r.y);
          return (t.current = i), { current: e, point: i };
        }
        pathV(t, e) {
          var { pathParser: r } = this,
            { current: i, point: a } = yt.pathV(r),
            { x: o, y: s } = a;
          r.addMarker(a, i), e.addPoint(o, s), t && t.lineTo(o, s);
        }
        static pathC(t) {
          var { current: e } = t,
            r = t.getPoint('x1', 'y1'),
            i = t.getAsControlPoint('x2', 'y2'),
            a = t.getAsCurrentPoint();
          return { current: e, point: r, controlPoint: i, currentPoint: a };
        }
        pathC(t, e) {
          var { pathParser: r } = this,
            { current: i, point: a, controlPoint: o, currentPoint: s } = yt.pathC(r);
          r.addMarker(s, o, a),
            e.addBezierCurve(i.x, i.y, a.x, a.y, o.x, o.y, s.x, s.y),
            t && t.bezierCurveTo(a.x, a.y, o.x, o.y, s.x, s.y);
        }
        static pathS(t) {
          var { current: e } = t,
            r = t.getReflectedControlPoint(),
            i = t.getAsControlPoint('x2', 'y2'),
            a = t.getAsCurrentPoint();
          return { current: e, point: r, controlPoint: i, currentPoint: a };
        }
        pathS(t, e) {
          var { pathParser: r } = this,
            { current: i, point: a, controlPoint: o, currentPoint: s } = yt.pathS(r);
          r.addMarker(s, o, a),
            e.addBezierCurve(i.x, i.y, a.x, a.y, o.x, o.y, s.x, s.y),
            t && t.bezierCurveTo(a.x, a.y, o.x, o.y, s.x, s.y);
        }
        static pathQ(t) {
          var { current: e } = t,
            r = t.getAsControlPoint('x1', 'y1'),
            i = t.getAsCurrentPoint();
          return { current: e, controlPoint: r, currentPoint: i };
        }
        pathQ(t, e) {
          var { pathParser: r } = this,
            { current: i, controlPoint: a, currentPoint: o } = yt.pathQ(r);
          r.addMarker(o, a, a),
            e.addQuadraticCurve(i.x, i.y, a.x, a.y, o.x, o.y),
            t && t.quadraticCurveTo(a.x, a.y, o.x, o.y);
        }
        static pathT(t) {
          var { current: e } = t,
            r = t.getReflectedControlPoint();
          t.control = r;
          var i = t.getAsCurrentPoint();
          return { current: e, controlPoint: r, currentPoint: i };
        }
        pathT(t, e) {
          var { pathParser: r } = this,
            { current: i, controlPoint: a, currentPoint: o } = yt.pathT(r);
          r.addMarker(o, a, a),
            e.addQuadraticCurve(i.x, i.y, a.x, a.y, o.x, o.y),
            t && t.quadraticCurveTo(a.x, a.y, o.x, o.y);
        }
        static pathA(t) {
          var { current: e, command: r } = t,
            { rX: i, rY: a, xRot: o, lArcFlag: s, sweepFlag: u } = r,
            c = o * (Math.PI / 180),
            p = t.getAsCurrentPoint(),
            E = new Nt(
              (Math.cos(c) * (e.x - p.x)) / 2 + (Math.sin(c) * (e.y - p.y)) / 2,
              (-Math.sin(c) * (e.x - p.x)) / 2 + (Math.cos(c) * (e.y - p.y)) / 2,
            ),
            T = Math.pow(E.x, 2) / Math.pow(i, 2) + Math.pow(E.y, 2) / Math.pow(a, 2);
          T > 1 && ((i *= Math.sqrt(T)), (a *= Math.sqrt(T)));
          var m =
            (s === u ? -1 : 1) *
            Math.sqrt(
              (Math.pow(i, 2) * Math.pow(a, 2) -
                Math.pow(i, 2) * Math.pow(E.y, 2) -
                Math.pow(a, 2) * Math.pow(E.x, 2)) /
                (Math.pow(i, 2) * Math.pow(E.y, 2) + Math.pow(a, 2) * Math.pow(E.x, 2)),
            );
          isNaN(m) && (m = 0);
          var D = new Nt((m * i * E.y) / a, (m * -a * E.x) / i),
            V = new Nt(
              (e.x + p.x) / 2 + Math.cos(c) * D.x - Math.sin(c) * D.y,
              (e.y + p.y) / 2 + Math.sin(c) * D.x + Math.cos(c) * D.y,
            ),
            L = lr([1, 0], [(E.x - D.x) / i, (E.y - D.y) / a]),
            U = [(E.x - D.x) / i, (E.y - D.y) / a],
            K = [(-E.x - D.x) / i, (-E.y - D.y) / a],
            j = lr(U, K);
          return (
            Ze(U, K) <= -1 && (j = Math.PI),
            Ze(U, K) >= 1 && (j = 0),
            {
              currentPoint: p,
              rX: i,
              rY: a,
              sweepFlag: u,
              xAxisRotation: c,
              centp: V,
              a1: L,
              ad: j,
            }
          );
        }
        pathA(t, e) {
          var { pathParser: r } = this,
            {
              currentPoint: i,
              rX: a,
              rY: o,
              sweepFlag: s,
              xAxisRotation: u,
              centp: c,
              a1: p,
              ad: E,
            } = yt.pathA(r),
            T = 1 - s ? 1 : -1,
            m = p + T * (E / 2),
            D = new Nt(c.x + a * Math.cos(m), c.y + o * Math.sin(m));
          if (
            (r.addMarkerAngle(D, m - (T * Math.PI) / 2),
            r.addMarkerAngle(i, m - T * Math.PI),
            e.addPoint(i.x, i.y),
            t && !isNaN(p) && !isNaN(E))
          ) {
            var V = a > o ? a : o,
              L = a > o ? 1 : a / o,
              U = a > o ? o / a : 1;
            t.translate(c.x, c.y),
              t.rotate(u),
              t.scale(L, U),
              t.arc(0, 0, V, p, p + E, !!(1 - s)),
              t.scale(1 / L, 1 / U),
              t.rotate(-u),
              t.translate(-c.x, -c.y);
          }
        }
        static pathZ(t) {
          t.current = t.start;
        }
        pathZ(t, e) {
          yt.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
        }
      }
      class xr extends yt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'glyph'),
            (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber()),
            (this.unicode = this.getAttribute('unicode').getString()),
            (this.arabicForm = this.getAttribute('arabic-form').getString());
        }
      }
      class se extends ye {
        constructor(t, e, r) {
          super(t, e, new.target === se ? !0 : r),
            (this.type = 'text'),
            (this.x = 0),
            (this.y = 0),
            (this.measureCache = -1);
        }
        setContext(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          super.setContext(t, e);
          var r =
            this.getStyle('dominant-baseline').getTextBaseline() ||
            this.getStyle('alignment-baseline').getTextBaseline();
          r && (t.textBaseline = r);
        }
        initializeCoordinates() {
          (this.x = 0),
            (this.y = 0),
            (this.leafTexts = []),
            (this.textChunkStart = 0),
            (this.minX = Number.POSITIVE_INFINITY),
            (this.maxX = Number.NEGATIVE_INFINITY);
        }
        getBoundingBox(t) {
          if (this.type !== 'text') return this.getTElementBoundingBox(t);
          this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(t);
          var e = null;
          return (
            this.children.forEach((r, i) => {
              var a = this.getChildBoundingBox(t, this, this, i);
              e ? e.addBoundingBox(a) : (e = a);
            }),
            e
          );
        }
        getFontSize() {
          var { document: t, parent: e } = this,
            r = $t.parse(t.ctx.font).fontSize,
            i = e.getStyle('font-size').getNumber(r);
          return i;
        }
        getTElementBoundingBox(t) {
          var e = this.getFontSize();
          return new Zt(this.x, this.y - e, this.x + this.measureText(t), this.y);
        }
        getGlyph(t, e, r) {
          var i = e[r],
            a = null;
          if (t.isArabic) {
            var o = e.length,
              s = e[r - 1],
              u = e[r + 1],
              c = 'isolated';
            if (
              ((r === 0 || s === ' ') && r < o - 1 && u !== ' ' && (c = 'terminal'),
              r > 0 && s !== ' ' && r < o - 1 && u !== ' ' && (c = 'medial'),
              r > 0 && s !== ' ' && (r === o - 1 || u === ' ') && (c = 'initial'),
              typeof t.glyphs[i] != 'undefined')
            ) {
              var p = t.glyphs[i];
              a = p instanceof xr ? p : p[c];
            }
          } else a = t.glyphs[i];
          return a || (a = t.missingGlyph), a;
        }
        getText() {
          return '';
        }
        getTextFromNode(t) {
          var e = t || this.node,
            r = Array.from(e.parentNode.childNodes),
            i = r.indexOf(e),
            a = r.length - 1,
            o = _t(e.textContent || '');
          return i === 0 && (o = Xe(o)), i === a && (o = ae(o)), o;
        }
        renderChildren(t) {
          if (this.type !== 'text') {
            this.renderTElementChildren(t);
            return;
          }
          this.initializeCoordinates(),
            this.adjustChildCoordinatesRecursive(t),
            this.children.forEach((r, i) => {
              this.renderChild(t, this, this, i);
            });
          var { mouse: e } = this.document.screen;
          e.isWorking() && e.checkBoundingBox(this, this.getBoundingBox(t));
        }
        renderTElementChildren(t) {
          var { document: e, parent: r } = this,
            i = this.getText(),
            a = r.getStyle('font-family').getDefinition();
          if (a) {
            for (
              var { unitsPerEm: o } = a.fontFace,
                s = $t.parse(e.ctx.font),
                u = r.getStyle('font-size').getNumber(s.fontSize),
                c = r.getStyle('font-style').getString(s.fontStyle),
                p = u / o,
                E = a.isRTL ? i.split('').reverse().join('') : i,
                T = Mt(r.getAttribute('dx').getString()),
                m = E.length,
                D = 0;
              D < m;
              D++
            ) {
              var V = this.getGlyph(a, E, D);
              t.translate(this.x, this.y), t.scale(p, -p);
              var L = t.lineWidth;
              (t.lineWidth = (t.lineWidth * o) / u),
                c === 'italic' && t.transform(1, 0, 0.4, 1, 0, 0),
                V.render(t),
                c === 'italic' && t.transform(1, 0, -0.4, 1, 0, 0),
                (t.lineWidth = L),
                t.scale(1 / p, -1 / p),
                t.translate(-this.x, -this.y),
                (this.x += (u * (V.horizAdvX || a.horizAdvX)) / o),
                typeof T[D] != 'undefined' && !isNaN(T[D]) && (this.x += T[D]);
            }
            return;
          }
          var { x: U, y: K } = this;
          t.fillStyle && t.fillText(i, U, K), t.strokeStyle && t.strokeText(i, U, K);
        }
        applyAnchoring() {
          if (!(this.textChunkStart >= this.leafTexts.length)) {
            var t = this.leafTexts[this.textChunkStart],
              e = t.getStyle('text-anchor').getString('start'),
              r = !1,
              i = 0;
            (e === 'start' && !r) || (e === 'end' && r)
              ? (i = t.x - this.minX)
              : (e === 'end' && !r) || (e === 'start' && r)
              ? (i = t.x - this.maxX)
              : (i = t.x - (this.minX + this.maxX) / 2);
            for (var a = this.textChunkStart; a < this.leafTexts.length; a++)
              this.leafTexts[a].x += i;
            (this.minX = Number.POSITIVE_INFINITY),
              (this.maxX = Number.NEGATIVE_INFINITY),
              (this.textChunkStart = this.leafTexts.length);
          }
        }
        adjustChildCoordinatesRecursive(t) {
          this.children.forEach((e, r) => {
            this.adjustChildCoordinatesRecursiveCore(t, this, this, r);
          }),
            this.applyAnchoring();
        }
        adjustChildCoordinatesRecursiveCore(t, e, r, i) {
          var a = r.children[i];
          a.children.length > 0
            ? a.children.forEach((o, s) => {
                e.adjustChildCoordinatesRecursiveCore(t, e, a, s);
              })
            : this.adjustChildCoordinates(t, e, r, i);
        }
        adjustChildCoordinates(t, e, r, i) {
          var a = r.children[i];
          if (typeof a.measureText != 'function') return a;
          t.save(), a.setContext(t, !0);
          var o = a.getAttribute('x'),
            s = a.getAttribute('y'),
            u = a.getAttribute('dx'),
            c = a.getAttribute('dy'),
            p = a.getStyle('font-family').getDefinition(),
            E = !!p && p.isRTL;
          i === 0 &&
            (o.hasValue() || o.setValue(a.getInheritedAttribute('x')),
            s.hasValue() || s.setValue(a.getInheritedAttribute('y')),
            u.hasValue() || u.setValue(a.getInheritedAttribute('dx')),
            c.hasValue() || c.setValue(a.getInheritedAttribute('dy')));
          var T = a.measureText(t);
          return (
            E && (e.x -= T),
            o.hasValue()
              ? (e.applyAnchoring(),
                (a.x = o.getPixels('x')),
                u.hasValue() && (a.x += u.getPixels('x')))
              : (u.hasValue() && (e.x += u.getPixels('x')), (a.x = e.x)),
            (e.x = a.x),
            E || (e.x += T),
            s.hasValue()
              ? ((a.y = s.getPixels('y')), c.hasValue() && (a.y += c.getPixels('y')))
              : (c.hasValue() && (e.y += c.getPixels('y')), (a.y = e.y)),
            (e.y = a.y),
            e.leafTexts.push(a),
            (e.minX = Math.min(e.minX, a.x, a.x + T)),
            (e.maxX = Math.max(e.maxX, a.x, a.x + T)),
            a.clearContext(t),
            t.restore(),
            a
          );
        }
        getChildBoundingBox(t, e, r, i) {
          var a = r.children[i];
          if (typeof a.getBoundingBox != 'function') return null;
          var o = a.getBoundingBox(t);
          return o
            ? (a.children.forEach((s, u) => {
                var c = e.getChildBoundingBox(t, e, a, u);
                o.addBoundingBox(c);
              }),
              o)
            : null;
        }
        renderChild(t, e, r, i) {
          var a = r.children[i];
          a.render(t),
            a.children.forEach((o, s) => {
              e.renderChild(t, e, a, s);
            });
        }
        measureText(t) {
          var { measureCache: e } = this;
          if (~e) return e;
          var r = this.getText(),
            i = this.measureTargetText(t, r);
          return (this.measureCache = i), i;
        }
        measureTargetText(t, e) {
          if (!e.length) return 0;
          var { parent: r } = this,
            i = r.getStyle('font-family').getDefinition();
          if (i) {
            for (
              var a = this.getFontSize(),
                o = i.isRTL ? e.split('').reverse().join('') : e,
                s = Mt(r.getAttribute('dx').getString()),
                u = o.length,
                c = 0,
                p = 0;
              p < u;
              p++
            ) {
              var E = this.getGlyph(i, o, p);
              (c += ((E.horizAdvX || i.horizAdvX) * a) / i.fontFace.unitsPerEm),
                typeof s[p] != 'undefined' && !isNaN(s[p]) && (c += s[p]);
            }
            return c;
          }
          if (!t.measureText) return e.length * 10;
          t.save(), this.setContext(t, !0);
          var { width: T } = t.measureText(e);
          return this.clearContext(t), t.restore(), T;
        }
        getInheritedAttribute(t) {
          for (var e = this; e instanceof se && e.isFirstChild(); ) {
            var r = e.parent.getAttribute(t);
            if (r.hasValue(!0)) return r.getValue('0');
            e = e.parent;
          }
          return null;
        }
      }
      class Ge extends se {
        constructor(t, e, r) {
          super(t, e, new.target === Ge ? !0 : r),
            (this.type = 'tspan'),
            (this.text = this.children.length > 0 ? '' : this.getTextFromNode());
        }
        getText() {
          return this.text;
        }
      }
      class Ln extends Ge {
        constructor() {
          super(...arguments), (this.type = 'textNode');
        }
      }
      class De extends ye {
        constructor() {
          super(...arguments), (this.type = 'svg'), (this.root = !1);
        }
        setContext(t) {
          var e,
            { document: r } = this,
            { screen: i, window: a } = r,
            o = t.canvas;
          if (
            (i.setDefaults(t),
            o.style &&
              typeof t.font != 'undefined' &&
              a &&
              typeof a.getComputedStyle != 'undefined')
          ) {
            t.font = a.getComputedStyle(o).getPropertyValue('font');
            var s = new k(r, 'fontSize', $t.parse(t.font).fontSize);
            s.hasValue() && ((r.rootEmSize = s.getPixels('y')), (r.emSize = r.rootEmSize));
          }
          this.getAttribute('x').hasValue() || this.getAttribute('x', !0).setValue(0),
            this.getAttribute('y').hasValue() || this.getAttribute('y', !0).setValue(0);
          var { width: u, height: c } = i.viewPort;
          this.getStyle('width').hasValue() || this.getStyle('width', !0).setValue('100%'),
            this.getStyle('height').hasValue() || this.getStyle('height', !0).setValue('100%'),
            this.getStyle('color').hasValue() || this.getStyle('color', !0).setValue('black');
          var p = this.getAttribute('refX'),
            E = this.getAttribute('refY'),
            T = this.getAttribute('viewBox'),
            m = T.hasValue() ? Mt(T.getString()) : null,
            D = !this.root && this.getStyle('overflow').getValue('hidden') !== 'visible',
            V = 0,
            L = 0,
            U = 0,
            K = 0;
          m && ((V = m[0]), (L = m[1])),
            this.root ||
              ((u = this.getStyle('width').getPixels('x')),
              (c = this.getStyle('height').getPixels('y')),
              this.type === 'marker' && ((U = V), (K = L), (V = 0), (L = 0))),
            i.viewPort.setCurrent(u, c),
            this.node &&
              (!this.parent ||
                ((e = this.node.parentNode) === null || e === void 0 ? void 0 : e.nodeName) ===
                  'foreignObject') &&
              this.getStyle('transform', !1, !0).hasValue() &&
              !this.getStyle('transform-origin', !1, !0).hasValue() &&
              this.getStyle('transform-origin', !0, !0).setValue('50% 50%'),
            super.setContext(t),
            t.translate(
              this.getAttribute('x').getPixels('x'),
              this.getAttribute('y').getPixels('y'),
            ),
            m && ((u = m[2]), (c = m[3])),
            r.setViewBox({
              ctx: t,
              aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
              width: i.viewPort.width,
              desiredWidth: u,
              height: i.viewPort.height,
              desiredHeight: c,
              minX: V,
              minY: L,
              refX: p.getValue(),
              refY: E.getValue(),
              clip: D,
              clipX: U,
              clipY: K,
            }),
            m && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(u, c));
        }
        clearContext(t) {
          super.clearContext(t), this.document.screen.viewPort.removeCurrent();
        }
        resize(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
            i = this.getAttribute('width', !0),
            a = this.getAttribute('height', !0),
            o = this.getAttribute('viewBox'),
            s = this.getAttribute('style'),
            u = i.getNumber(0),
            c = a.getNumber(0);
          if (r)
            if (typeof r == 'string') this.getAttribute('preserveAspectRatio', !0).setValue(r);
            else {
              var p = this.getAttribute('preserveAspectRatio');
              p.hasValue() && p.setValue(p.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'));
            }
          if (
            (i.setValue(t),
            a.setValue(e),
            o.hasValue() || o.setValue('0 0 '.concat(u || t, ' ').concat(c || e)),
            s.hasValue())
          ) {
            var E = this.getStyle('width'),
              T = this.getStyle('height');
            E.hasValue() && E.setValue(''.concat(t, 'px')),
              T.hasValue() && T.setValue(''.concat(e, 'px'));
          }
        }
      }
      class Er extends yt {
        constructor() {
          super(...arguments), (this.type = 'rect');
        }
        path(t) {
          var e = this.getAttribute('x').getPixels('x'),
            r = this.getAttribute('y').getPixels('y'),
            i = this.getStyle('width', !1, !0).getPixels('x'),
            a = this.getStyle('height', !1, !0).getPixels('y'),
            o = this.getAttribute('rx'),
            s = this.getAttribute('ry'),
            u = o.getPixels('x'),
            c = s.getPixels('y');
          if (
            (o.hasValue() && !s.hasValue() && (c = u),
            s.hasValue() && !o.hasValue() && (u = c),
            (u = Math.min(u, i / 2)),
            (c = Math.min(c, a / 2)),
            t)
          ) {
            var p = 4 * ((Math.sqrt(2) - 1) / 3);
            t.beginPath(),
              a > 0 &&
                i > 0 &&
                (t.moveTo(e + u, r),
                t.lineTo(e + i - u, r),
                t.bezierCurveTo(e + i - u + p * u, r, e + i, r + c - p * c, e + i, r + c),
                t.lineTo(e + i, r + a - c),
                t.bezierCurveTo(
                  e + i,
                  r + a - c + p * c,
                  e + i - u + p * u,
                  r + a,
                  e + i - u,
                  r + a,
                ),
                t.lineTo(e + u, r + a),
                t.bezierCurveTo(e + u - p * u, r + a, e, r + a - c + p * c, e, r + a - c),
                t.lineTo(e, r + c),
                t.bezierCurveTo(e, r + c - p * c, e + u - p * u, r, e + u, r),
                t.closePath());
          }
          return new Zt(e, r, e + i, r + a);
        }
        getMarkers() {
          return null;
        }
      }
      class Xr extends yt {
        constructor() {
          super(...arguments), (this.type = 'circle');
        }
        path(t) {
          var e = this.getAttribute('cx').getPixels('x'),
            r = this.getAttribute('cy').getPixels('y'),
            i = this.getAttribute('r').getPixels();
          return (
            t && i > 0 && (t.beginPath(), t.arc(e, r, i, 0, Math.PI * 2, !1), t.closePath()),
            new Zt(e - i, r - i, e + i, r + i)
          );
        }
        getMarkers() {
          return null;
        }
      }
      class Wr extends yt {
        constructor() {
          super(...arguments), (this.type = 'ellipse');
        }
        path(t) {
          var e = 4 * ((Math.sqrt(2) - 1) / 3),
            r = this.getAttribute('rx').getPixels('x'),
            i = this.getAttribute('ry').getPixels('y'),
            a = this.getAttribute('cx').getPixels('x'),
            o = this.getAttribute('cy').getPixels('y');
          return (
            t &&
              r > 0 &&
              i > 0 &&
              (t.beginPath(),
              t.moveTo(a + r, o),
              t.bezierCurveTo(a + r, o + e * i, a + e * r, o + i, a, o + i),
              t.bezierCurveTo(a - e * r, o + i, a - r, o + e * i, a - r, o),
              t.bezierCurveTo(a - r, o - e * i, a - e * r, o - i, a, o - i),
              t.bezierCurveTo(a + e * r, o - i, a + r, o - e * i, a + r, o),
              t.closePath()),
            new Zt(a - r, o - i, a + r, o + i)
          );
        }
        getMarkers() {
          return null;
        }
      }
      class Qr extends yt {
        constructor() {
          super(...arguments), (this.type = 'line');
        }
        getPoints() {
          return [
            new Nt(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')),
            new Nt(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y')),
          ];
        }
        path(t) {
          var [{ x: e, y: r }, { x: i, y: a }] = this.getPoints();
          return t && (t.beginPath(), t.moveTo(e, r), t.lineTo(i, a)), new Zt(e, r, i, a);
        }
        getMarkers() {
          var [t, e] = this.getPoints(),
            r = t.angleTo(e);
          return [
            [t, r],
            [e, r],
          ];
        }
      }
      class Tr extends yt {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'polyline'),
            (this.points = []),
            (this.points = Nt.parsePath(this.getAttribute('points').getString()));
        }
        path(t) {
          var { points: e } = this,
            [{ x: r, y: i }] = e,
            a = new Zt(r, i);
          return (
            t && (t.beginPath(), t.moveTo(r, i)),
            e.forEach((o) => {
              var { x: s, y: u } = o;
              a.addPoint(s, u), t && t.lineTo(s, u);
            }),
            a
          );
        }
        getMarkers() {
          var { points: t } = this,
            e = t.length - 1,
            r = [];
          return (
            t.forEach((i, a) => {
              a !== e && r.push([i, i.angleTo(t[a + 1])]);
            }),
            r.length > 0 && r.push([t[t.length - 1], r[r.length - 1][1]]),
            r
          );
        }
      }
      class Zr extends Tr {
        constructor() {
          super(...arguments), (this.type = 'polygon');
        }
        path(t) {
          var e = super.path(t),
            [{ x: r, y: i }] = this.points;
          return t && (t.lineTo(r, i), t.closePath()), e;
        }
      }
      class Kr extends Ct {
        constructor() {
          super(...arguments), (this.type = 'pattern');
        }
        createPattern(t, e, r) {
          var i = this.getStyle('width').getPixels('x', !0),
            a = this.getStyle('height').getPixels('y', !0),
            o = new De(this.document, null);
          (o.attributes.viewBox = new k(
            this.document,
            'viewBox',
            this.getAttribute('viewBox').getValue(),
          )),
            (o.attributes.width = new k(this.document, 'width', ''.concat(i, 'px'))),
            (o.attributes.height = new k(this.document, 'height', ''.concat(a, 'px'))),
            (o.attributes.transform = new k(
              this.document,
              'transform',
              this.getAttribute('patternTransform').getValue(),
            )),
            (o.children = this.children);
          var s = this.document.createCanvas(i, a),
            u = s.getContext('2d'),
            c = this.getAttribute('x'),
            p = this.getAttribute('y');
          c.hasValue() && p.hasValue() && u.translate(c.getPixels('x', !0), p.getPixels('y', !0)),
            r.hasValue()
              ? (this.styles['fill-opacity'] = r)
              : Reflect.deleteProperty(this.styles, 'fill-opacity');
          for (var E = -1; E <= 1; E++)
            for (var T = -1; T <= 1; T++)
              u.save(),
                (o.attributes.x = new k(this.document, 'x', E * s.width)),
                (o.attributes.y = new k(this.document, 'y', T * s.height)),
                o.render(u),
                u.restore();
          var m = t.createPattern(s, 'repeat');
          return m;
        }
      }
      class kr extends Ct {
        constructor() {
          super(...arguments), (this.type = 'marker');
        }
        render(t, e, r) {
          if (e) {
            var { x: i, y: a } = e,
              o = this.getAttribute('orient').getString('auto'),
              s = this.getAttribute('markerUnits').getString('strokeWidth');
            t.translate(i, a),
              o === 'auto' && t.rotate(r),
              s === 'strokeWidth' && t.scale(t.lineWidth, t.lineWidth),
              t.save();
            var u = new De(this.document, null);
            (u.type = this.type),
              (u.attributes.viewBox = new k(
                this.document,
                'viewBox',
                this.getAttribute('viewBox').getValue(),
              )),
              (u.attributes.refX = new k(
                this.document,
                'refX',
                this.getAttribute('refX').getValue(),
              )),
              (u.attributes.refY = new k(
                this.document,
                'refY',
                this.getAttribute('refY').getValue(),
              )),
              (u.attributes.width = new k(
                this.document,
                'width',
                this.getAttribute('markerWidth').getValue(),
              )),
              (u.attributes.height = new k(
                this.document,
                'height',
                this.getAttribute('markerHeight').getValue(),
              )),
              (u.attributes.overflow = new k(
                this.document,
                'overflow',
                this.getAttribute('overflow').getValue(),
              )),
              (u.attributes.fill = new k(
                this.document,
                'fill',
                this.getAttribute('fill').getColor('black'),
              )),
              (u.attributes.stroke = new k(
                this.document,
                'stroke',
                this.getAttribute('stroke').getValue('none'),
              )),
              (u.children = this.children),
              u.render(t),
              t.restore(),
              s === 'strokeWidth' && t.scale(1 / t.lineWidth, 1 / t.lineWidth),
              o === 'auto' && t.rotate(-r),
              t.translate(-i, -a);
          }
        }
      }
      class Jr extends Ct {
        constructor() {
          super(...arguments), (this.type = 'defs');
        }
        render() {}
      }
      class ke extends ye {
        constructor() {
          super(...arguments), (this.type = 'g');
        }
        getBoundingBox(t) {
          var e = new Zt();
          return (
            this.children.forEach((r) => {
              e.addBoundingBox(r.getBoundingBox(t));
            }),
            e
          );
        }
      }
      class Or extends Ct {
        constructor(t, e, r) {
          super(t, e, r), (this.attributesToInherit = ['gradientUnits']), (this.stops = []);
          var { stops: i, children: a } = this;
          a.forEach((o) => {
            o.type === 'stop' && i.push(o);
          });
        }
        getGradientUnits() {
          return this.getAttribute('gradientUnits').getString('objectBoundingBox');
        }
        createGradient(t, e, r) {
          var i = this;
          this.getHrefAttribute().hasValue() &&
            ((i = this.getHrefAttribute().getDefinition()), this.inheritStopContainer(i));
          var { stops: a } = i,
            o = this.getGradient(t, e);
          if (!o) return this.addParentOpacity(r, a[a.length - 1].color);
          if (
            (a.forEach((L) => {
              o.addColorStop(L.offset, this.addParentOpacity(r, L.color));
            }),
            this.getAttribute('gradientTransform').hasValue())
          ) {
            var { document: s } = this,
              { MAX_VIRTUAL_PIXELS: u, viewPort: c } = s.screen,
              [p] = c.viewPorts,
              E = new Er(s, null);
            (E.attributes.x = new k(s, 'x', -u / 3)),
              (E.attributes.y = new k(s, 'y', -u / 3)),
              (E.attributes.width = new k(s, 'width', u)),
              (E.attributes.height = new k(s, 'height', u));
            var T = new ke(s, null);
            (T.attributes.transform = new k(
              s,
              'transform',
              this.getAttribute('gradientTransform').getValue(),
            )),
              (T.children = [E]);
            var m = new De(s, null);
            (m.attributes.x = new k(s, 'x', 0)),
              (m.attributes.y = new k(s, 'y', 0)),
              (m.attributes.width = new k(s, 'width', p.width)),
              (m.attributes.height = new k(s, 'height', p.height)),
              (m.children = [T]);
            var D = s.createCanvas(p.width, p.height),
              V = D.getContext('2d');
            return (V.fillStyle = o), m.render(V), V.createPattern(D, 'no-repeat');
          }
          return o;
        }
        inheritStopContainer(t) {
          this.attributesToInherit.forEach((e) => {
            !this.getAttribute(e).hasValue() &&
              t.getAttribute(e).hasValue() &&
              this.getAttribute(e, !0).setValue(t.getAttribute(e).getValue());
          });
        }
        addParentOpacity(t, e) {
          if (t.hasValue()) {
            var r = new k(this.document, 'color', e);
            return r.addOpacity(t).getColor();
          }
          return e;
        }
      }
      class qr extends Or {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'linearGradient'),
            this.attributesToInherit.push('x1', 'y1', 'x2', 'y2');
        }
        getGradient(t, e) {
          var r = this.getGradientUnits() === 'objectBoundingBox',
            i = r ? e.getBoundingBox(t) : null;
          if (r && !i) return null;
          !this.getAttribute('x1').hasValue() &&
            !this.getAttribute('y1').hasValue() &&
            !this.getAttribute('x2').hasValue() &&
            !this.getAttribute('y2').hasValue() &&
            (this.getAttribute('x1', !0).setValue(0),
            this.getAttribute('y1', !0).setValue(0),
            this.getAttribute('x2', !0).setValue(1),
            this.getAttribute('y2', !0).setValue(0));
          var a = r
              ? i.x + i.width * this.getAttribute('x1').getNumber()
              : this.getAttribute('x1').getPixels('x'),
            o = r
              ? i.y + i.height * this.getAttribute('y1').getNumber()
              : this.getAttribute('y1').getPixels('y'),
            s = r
              ? i.x + i.width * this.getAttribute('x2').getNumber()
              : this.getAttribute('x2').getPixels('x'),
            u = r
              ? i.y + i.height * this.getAttribute('y2').getNumber()
              : this.getAttribute('y2').getPixels('y');
          return a === s && o === u ? null : t.createLinearGradient(a, o, s, u);
        }
      }
      class _r extends Or {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'radialGradient'),
            this.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');
        }
        getGradient(t, e) {
          var r = this.getGradientUnits() === 'objectBoundingBox',
            i = e.getBoundingBox(t);
          if (r && !i) return null;
          this.getAttribute('cx').hasValue() || this.getAttribute('cx', !0).setValue('50%'),
            this.getAttribute('cy').hasValue() || this.getAttribute('cy', !0).setValue('50%'),
            this.getAttribute('r').hasValue() || this.getAttribute('r', !0).setValue('50%');
          var a = r
              ? i.x + i.width * this.getAttribute('cx').getNumber()
              : this.getAttribute('cx').getPixels('x'),
            o = r
              ? i.y + i.height * this.getAttribute('cy').getNumber()
              : this.getAttribute('cy').getPixels('y'),
            s = a,
            u = o;
          this.getAttribute('fx').hasValue() &&
            (s = r
              ? i.x + i.width * this.getAttribute('fx').getNumber()
              : this.getAttribute('fx').getPixels('x')),
            this.getAttribute('fy').hasValue() &&
              (u = r
                ? i.y + i.height * this.getAttribute('fy').getNumber()
                : this.getAttribute('fy').getPixels('y'));
          var c = r
              ? ((i.width + i.height) / 2) * this.getAttribute('r').getNumber()
              : this.getAttribute('r').getPixels(),
            p = this.getAttribute('fr').getPixels();
          return t.createRadialGradient(s, u, p, a, o, c);
        }
      }
      class tn extends Ct {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'stop');
          var i = Math.max(0, Math.min(1, this.getAttribute('offset').getNumber())),
            a = this.getStyle('stop-opacity'),
            o = this.getStyle('stop-color', !0);
          o.getString() === '' && o.setValue('#000'),
            a.hasValue() && (o = o.addOpacity(a)),
            (this.offset = i),
            (this.color = o.getColor());
        }
      }
      class Je extends Ct {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'animate'),
            (this.duration = 0),
            (this.initialValue = null),
            (this.initialUnits = ''),
            (this.removed = !1),
            (this.frozen = !1),
            t.screen.animations.push(this),
            (this.begin = this.getAttribute('begin').getMilliseconds()),
            (this.maxDuration = this.begin + this.getAttribute('dur').getMilliseconds()),
            (this.from = this.getAttribute('from')),
            (this.to = this.getAttribute('to')),
            (this.values = new k(t, 'values', null));
          var i = this.getAttribute('values');
          i.hasValue() && this.values.setValue(i.getString().split(';'));
        }
        getProperty() {
          var t = this.getAttribute('attributeType').getString(),
            e = this.getAttribute('attributeName').getString();
          return t === 'CSS' ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0);
        }
        calcValue() {
          var { initialUnits: t } = this,
            { progress: e, from: r, to: i } = this.getProgress(),
            a = r.getNumber() + (i.getNumber() - r.getNumber()) * e;
          return t === '%' && (a *= 100), ''.concat(a).concat(t);
        }
        update(t) {
          var { parent: e } = this,
            r = this.getProperty();
          if (
            (this.initialValue ||
              ((this.initialValue = r.getString()), (this.initialUnits = r.getUnits())),
            this.duration > this.maxDuration)
          ) {
            var i = this.getAttribute('fill').getString('remove');
            if (
              this.getAttribute('repeatCount').getString() === 'indefinite' ||
              this.getAttribute('repeatDur').getString() === 'indefinite'
            )
              this.duration = 0;
            else if (i === 'freeze' && !this.frozen)
              (this.frozen = !0),
                (e.animationFrozen = !0),
                (e.animationFrozenValue = r.getString());
            else if (i === 'remove' && !this.removed)
              return (
                (this.removed = !0),
                r.setValue(e.animationFrozen ? e.animationFrozenValue : this.initialValue),
                !0
              );
            return !1;
          }
          this.duration += t;
          var a = !1;
          if (this.begin < this.duration) {
            var o = this.calcValue(),
              s = this.getAttribute('type');
            if (s.hasValue()) {
              var u = s.getString();
              o = ''.concat(u, '(').concat(o, ')');
            }
            r.setValue(o), (a = !0);
          }
          return a;
        }
        getProgress() {
          var { document: t, values: e } = this,
            r = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) };
          if (e.hasValue()) {
            var i = r.progress * (e.getValue().length - 1),
              a = Math.floor(i),
              o = Math.ceil(i);
            (r.from = new k(t, 'from', parseFloat(e.getValue()[a]))),
              (r.to = new k(t, 'to', parseFloat(e.getValue()[o]))),
              (r.progress = (i - a) / (o - a));
          } else (r.from = this.from), (r.to = this.to);
          return r;
        }
      }
      class en extends Je {
        constructor() {
          super(...arguments), (this.type = 'animateColor');
        }
        calcValue() {
          var { progress: t, from: e, to: r } = this.getProgress(),
            i = new I(e.getColor()),
            a = new I(r.getColor());
          if (i.ok && a.ok) {
            var o = i.r + (a.r - i.r) * t,
              s = i.g + (a.g - i.g) * t,
              u = i.b + (a.b - i.b) * t;
            return 'rgb('
              .concat(Math.floor(o), ', ')
              .concat(Math.floor(s), ', ')
              .concat(Math.floor(u), ')');
          }
          return this.getAttribute('from').getColor();
        }
      }
      class rn extends Je {
        constructor() {
          super(...arguments), (this.type = 'animateTransform');
        }
        calcValue() {
          var { progress: t, from: e, to: r } = this.getProgress(),
            i = Mt(e.getString()),
            a = Mt(r.getString()),
            o = i
              .map((s, u) => {
                var c = a[u];
                return s + (c - s) * t;
              })
              .join(' ');
          return o;
        }
      }
      class nn extends Ct {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'font'),
            (this.glyphs = {}),
            (this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber());
          var { definitions: i } = t,
            { children: a } = this;
          for (var o of a)
            switch (o.type) {
              case 'font-face': {
                this.fontFace = o;
                var s = o.getStyle('font-family');
                s.hasValue() && (i[s.getString()] = this);
                break;
              }
              case 'missing-glyph':
                this.missingGlyph = o;
                break;
              case 'glyph': {
                var u = o;
                u.arabicForm
                  ? ((this.isRTL = !0),
                    (this.isArabic = !0),
                    typeof this.glyphs[u.unicode] == 'undefined' && (this.glyphs[u.unicode] = {}),
                    (this.glyphs[u.unicode][u.arabicForm] = u))
                  : (this.glyphs[u.unicode] = u);
                break;
              }
            }
        }
        render() {}
      }
      class an extends Ct {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'font-face'),
            (this.ascent = this.getAttribute('ascent').getNumber()),
            (this.descent = this.getAttribute('descent').getNumber()),
            (this.unitsPerEm = this.getAttribute('units-per-em').getNumber());
        }
      }
      class sn extends yt {
        constructor() {
          super(...arguments), (this.type = 'missing-glyph'), (this.horizAdvX = 0);
        }
      }
      class on extends se {
        constructor() {
          super(...arguments), (this.type = 'tref');
        }
        getText() {
          var t = this.getHrefAttribute().getDefinition();
          if (t) {
            var e = t.children[0];
            if (e) return e.getText();
          }
          return '';
        }
      }
      class un extends se {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'a');
          var { childNodes: i } = e,
            a = i[0],
            o = i.length > 0 && Array.from(i).every((s) => s.nodeType === 3);
          (this.hasText = o), (this.text = o ? this.getTextFromNode(a) : '');
        }
        getText() {
          return this.text;
        }
        renderChildren(t) {
          if (this.hasText) {
            super.renderChildren(t);
            var { document: e, x: r, y: i } = this,
              { mouse: a } = e.screen,
              o = new k(e, 'fontSize', $t.parse(e.ctx.font).fontSize);
            a.isWorking() &&
              a.checkBoundingBox(this, new Zt(r, i - o.getPixels('y'), r + this.measureText(t), i));
          } else if (this.children.length > 0) {
            var s = new ke(this.document, null);
            (s.children = this.children), (s.parent = this), s.render(t);
          }
        }
        onClick() {
          var { window: t } = this.document;
          t && t.open(this.getHrefAttribute().getString());
        }
        onMouseMove() {
          var t = this.document.ctx;
          t.canvas.style.cursor = 'pointer';
        }
      }
      function ln(h, t) {
        var e = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(h);
          t &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(h, i).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function qe(h) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? ln(Object(e), !0).forEach(function (r) {
                (0, b.Z)(h, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(e))
            : ln(Object(e)).forEach(function (r) {
                Object.defineProperty(h, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return h;
      }
      class hn extends se {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'textPath'),
            (this.textWidth = 0),
            (this.textHeight = 0),
            (this.pathLength = -1),
            (this.glyphInfo = null),
            (this.letterSpacingCache = []),
            (this.measuresCache = new Map([['', 0]]));
          var i = this.getHrefAttribute().getDefinition();
          (this.text = this.getTextFromNode()), (this.dataArray = this.parsePathData(i));
        }
        getText() {
          return this.text;
        }
        path(t) {
          var { dataArray: e } = this;
          t && t.beginPath(),
            e.forEach((r) => {
              var { type: i, points: a } = r;
              switch (i) {
                case at.LINE_TO:
                  t && t.lineTo(a[0], a[1]);
                  break;
                case at.MOVE_TO:
                  t && t.moveTo(a[0], a[1]);
                  break;
                case at.CURVE_TO:
                  t && t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                  break;
                case at.QUAD_TO:
                  t && t.quadraticCurveTo(a[0], a[1], a[2], a[3]);
                  break;
                case at.ARC: {
                  var [o, s, u, c, p, E, T, m] = a,
                    D = u > c ? u : c,
                    V = u > c ? 1 : u / c,
                    L = u > c ? c / u : 1;
                  t &&
                    (t.translate(o, s),
                    t.rotate(T),
                    t.scale(V, L),
                    t.arc(0, 0, D, p, p + E, !!(1 - m)),
                    t.scale(1 / V, 1 / L),
                    t.rotate(-T),
                    t.translate(-o, -s));
                  break;
                }
                case at.CLOSE_PATH:
                  t && t.closePath();
                  break;
              }
            });
        }
        renderChildren(t) {
          this.setTextData(t), t.save();
          var e = this.parent.getStyle('text-decoration').getString(),
            r = this.getFontSize(),
            { glyphInfo: i } = this,
            a = t.fillStyle;
          e === 'underline' && t.beginPath(),
            i.forEach((o, s) => {
              var { p0: u, p1: c, rotation: p, text: E } = o;
              t.save(),
                t.translate(u.x, u.y),
                t.rotate(p),
                t.fillStyle && t.fillText(E, 0, 0),
                t.strokeStyle && t.strokeText(E, 0, 0),
                t.restore(),
                e === 'underline' &&
                  (s === 0 && t.moveTo(u.x, u.y + r / 8), t.lineTo(c.x, c.y + r / 5));
            }),
            e === 'underline' &&
              ((t.lineWidth = r / 20), (t.strokeStyle = a), t.stroke(), t.closePath()),
            t.restore();
        }
        getLetterSpacingAt() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return this.letterSpacingCache[t] || 0;
        }
        findSegmentToFitChar(t, e, r, i, a, o, s, u, c) {
          var p = o,
            E = this.measureText(t, u);
          u === ' ' && e === 'justify' && r < i && (E += (i - r) / a),
            c > -1 && (p += this.getLetterSpacingAt(c));
          var T = this.textHeight / 20,
            m = this.getEquidistantPointOnPath(p, T, 0),
            D = this.getEquidistantPointOnPath(p + E, T, 0),
            V = { p0: m, p1: D },
            L = m && D ? Math.atan2(D.y - m.y, D.x - m.x) : 0;
          if (s) {
            var U = Math.cos(Math.PI / 2 + L) * s,
              K = Math.cos(-L) * s;
            (V.p0 = qe(qe({}, m), {}, { x: m.x + U, y: m.y + K })),
              (V.p1 = qe(qe({}, D), {}, { x: D.x + U, y: D.y + K }));
          }
          return (p += E), { offset: p, segment: V, rotation: L };
        }
        measureText(t, e) {
          var { measuresCache: r } = this,
            i = e || this.getText();
          if (r.has(i)) return r.get(i);
          var a = this.measureTargetText(t, i);
          return r.set(i, a), a;
        }
        setTextData(t) {
          if (!this.glyphInfo) {
            var e = this.getText(),
              r = e.split(''),
              i = e.split(' ').length - 1,
              a = this.parent
                .getAttribute('dx')
                .split()
                .map((z) => z.getPixels('x')),
              o = this.parent.getAttribute('dy').getPixels('y'),
              s = this.parent.getStyle('text-anchor').getString('start'),
              u = this.getStyle('letter-spacing'),
              c = this.parent.getStyle('letter-spacing'),
              p = 0;
            !u.hasValue() || u.getValue() === 'inherit'
              ? (p = c.getPixels())
              : u.hasValue() &&
                u.getValue() !== 'initial' &&
                u.getValue() !== 'unset' &&
                (p = u.getPixels());
            var E = [],
              T = e.length;
            this.letterSpacingCache = E;
            for (var m = 0; m < T; m++) E.push(typeof a[m] != 'undefined' ? a[m] : p);
            var D = E.reduce((z, rt, st) => (st === 0 ? 0 : z + rt || 0), 0),
              V = this.measureText(t),
              L = Math.max(V + D, 0);
            (this.textWidth = V), (this.textHeight = this.getFontSize()), (this.glyphInfo = []);
            var U = this.getPathLength(),
              K = this.getStyle('startOffset').getNumber(0) * U,
              j = 0;
            (s === 'middle' || s === 'center') && (j = -L / 2),
              (s === 'end' || s === 'right') && (j = -L),
              (j += K),
              r.forEach((z, rt) => {
                var {
                  offset: st,
                  segment: H,
                  rotation: vt,
                } = this.findSegmentToFitChar(t, s, L, U, i, j, o, z, rt);
                (j = st),
                  !(!H.p0 || !H.p1) &&
                    this.glyphInfo.push({ text: r[rt], p0: H.p0, p1: H.p1, rotation: vt });
              });
          }
        }
        parsePathData(t) {
          if (((this.pathLength = -1), !t)) return [];
          var e = [],
            { pathParser: r } = t;
          for (r.reset(); !r.isEnd(); ) {
            var { current: i } = r,
              a = i ? i.x : 0,
              o = i ? i.y : 0,
              s = r.next(),
              u = s.type,
              c = [];
            switch (s.type) {
              case at.MOVE_TO:
                this.pathM(r, c);
                break;
              case at.LINE_TO:
                u = this.pathL(r, c);
                break;
              case at.HORIZ_LINE_TO:
                u = this.pathH(r, c);
                break;
              case at.VERT_LINE_TO:
                u = this.pathV(r, c);
                break;
              case at.CURVE_TO:
                this.pathC(r, c);
                break;
              case at.SMOOTH_CURVE_TO:
                u = this.pathS(r, c);
                break;
              case at.QUAD_TO:
                this.pathQ(r, c);
                break;
              case at.SMOOTH_QUAD_TO:
                u = this.pathT(r, c);
                break;
              case at.ARC:
                c = this.pathA(r);
                break;
              case at.CLOSE_PATH:
                yt.pathZ(r);
                break;
            }
            s.type !== at.CLOSE_PATH
              ? e.push({
                  type: u,
                  points: c,
                  start: { x: a, y: o },
                  pathLength: this.calcLength(a, o, u, c),
                })
              : e.push({ type: at.CLOSE_PATH, points: [], pathLength: 0 });
          }
          return e;
        }
        pathM(t, e) {
          var { x: r, y: i } = yt.pathM(t).point;
          e.push(r, i);
        }
        pathL(t, e) {
          var { x: r, y: i } = yt.pathL(t).point;
          return e.push(r, i), at.LINE_TO;
        }
        pathH(t, e) {
          var { x: r, y: i } = yt.pathH(t).point;
          return e.push(r, i), at.LINE_TO;
        }
        pathV(t, e) {
          var { x: r, y: i } = yt.pathV(t).point;
          return e.push(r, i), at.LINE_TO;
        }
        pathC(t, e) {
          var { point: r, controlPoint: i, currentPoint: a } = yt.pathC(t);
          e.push(r.x, r.y, i.x, i.y, a.x, a.y);
        }
        pathS(t, e) {
          var { point: r, controlPoint: i, currentPoint: a } = yt.pathS(t);
          return e.push(r.x, r.y, i.x, i.y, a.x, a.y), at.CURVE_TO;
        }
        pathQ(t, e) {
          var { controlPoint: r, currentPoint: i } = yt.pathQ(t);
          e.push(r.x, r.y, i.x, i.y);
        }
        pathT(t, e) {
          var { controlPoint: r, currentPoint: i } = yt.pathT(t);
          return e.push(r.x, r.y, i.x, i.y), at.QUAD_TO;
        }
        pathA(t) {
          var {
            rX: e,
            rY: r,
            sweepFlag: i,
            xAxisRotation: a,
            centp: o,
            a1: s,
            ad: u,
          } = yt.pathA(t);
          return (
            i === 0 && u > 0 && (u -= 2 * Math.PI),
            i === 1 && u < 0 && (u += 2 * Math.PI),
            [o.x, o.y, e, r, s, u, a, i]
          );
        }
        calcLength(t, e, r, i) {
          var a = 0,
            o = null,
            s = null,
            u = 0;
          switch (r) {
            case at.LINE_TO:
              return this.getLineLength(t, e, i[0], i[1]);
            case at.CURVE_TO:
              for (
                a = 0,
                  o = this.getPointOnCubicBezier(0, t, e, i[0], i[1], i[2], i[3], i[4], i[5]),
                  u = 0.01;
                u <= 1;
                u += 0.01
              )
                (s = this.getPointOnCubicBezier(u, t, e, i[0], i[1], i[2], i[3], i[4], i[5])),
                  (a += this.getLineLength(o.x, o.y, s.x, s.y)),
                  (o = s);
              return a;
            case at.QUAD_TO:
              for (
                a = 0,
                  o = this.getPointOnQuadraticBezier(0, t, e, i[0], i[1], i[2], i[3]),
                  u = 0.01;
                u <= 1;
                u += 0.01
              )
                (s = this.getPointOnQuadraticBezier(u, t, e, i[0], i[1], i[2], i[3])),
                  (a += this.getLineLength(o.x, o.y, s.x, s.y)),
                  (o = s);
              return a;
            case at.ARC: {
              a = 0;
              var c = i[4],
                p = i[5],
                E = i[4] + p,
                T = Math.PI / 180;
              if (
                (Math.abs(c - E) < T && (T = Math.abs(c - E)),
                (o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], c, 0)),
                p < 0)
              )
                for (u = c - T; u > E; u -= T)
                  (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
                    (a += this.getLineLength(o.x, o.y, s.x, s.y)),
                    (o = s);
              else
                for (u = c + T; u < E; u += T)
                  (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
                    (a += this.getLineLength(o.x, o.y, s.x, s.y)),
                    (o = s);
              return (
                (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], E, 0)),
                (a += this.getLineLength(o.x, o.y, s.x, s.y)),
                a
              );
            }
          }
          return 0;
        }
        getPointOnLine(t, e, r, i, a) {
          var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : e,
            s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r,
            u = (a - r) / (i - e + Ce),
            c = Math.sqrt((t * t) / (1 + u * u));
          i < e && (c *= -1);
          var p = u * c,
            E = null;
          if (i === e) E = { x: o, y: s + p };
          else if ((s - r) / (o - e + Ce) === u) E = { x: o + c, y: s + p };
          else {
            var T = 0,
              m = 0,
              D = this.getLineLength(e, r, i, a);
            if (D < Ce) return null;
            var V = (o - e) * (i - e) + (s - r) * (a - r);
            (V /= D * D), (T = e + V * (i - e)), (m = r + V * (a - r));
            var L = this.getLineLength(o, s, T, m),
              U = Math.sqrt(t * t - L * L);
            (c = Math.sqrt((U * U) / (1 + u * u))),
              i < e && (c *= -1),
              (p = u * c),
              (E = { x: T + c, y: m + p });
          }
          return E;
        }
        getPointOnPath(t) {
          var e = this.getPathLength(),
            r = 0,
            i = null;
          if (t < -5e-5 || t - 5e-5 > e) return null;
          var { dataArray: a } = this;
          for (var o of a) {
            if (o && (o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < t)) {
              r += o.pathLength;
              continue;
            }
            var s = t - r,
              u = 0;
            switch (o.type) {
              case at.LINE_TO:
                i = this.getPointOnLine(
                  s,
                  o.start.x,
                  o.start.y,
                  o.points[0],
                  o.points[1],
                  o.start.x,
                  o.start.y,
                );
                break;
              case at.ARC: {
                var c = o.points[4],
                  p = o.points[5],
                  E = o.points[4] + p;
                if (((u = c + (s / o.pathLength) * p), (p < 0 && u < E) || (p >= 0 && u > E)))
                  break;
                i = this.getPointOnEllipticalArc(
                  o.points[0],
                  o.points[1],
                  o.points[2],
                  o.points[3],
                  u,
                  o.points[6],
                );
                break;
              }
              case at.CURVE_TO:
                (u = s / o.pathLength),
                  u > 1 && (u = 1),
                  (i = this.getPointOnCubicBezier(
                    u,
                    o.start.x,
                    o.start.y,
                    o.points[0],
                    o.points[1],
                    o.points[2],
                    o.points[3],
                    o.points[4],
                    o.points[5],
                  ));
                break;
              case at.QUAD_TO:
                (u = s / o.pathLength),
                  u > 1 && (u = 1),
                  (i = this.getPointOnQuadraticBezier(
                    u,
                    o.start.x,
                    o.start.y,
                    o.points[0],
                    o.points[1],
                    o.points[2],
                    o.points[3],
                  ));
                break;
            }
            if (i) return i;
            break;
          }
          return null;
        }
        getLineLength(t, e, r, i) {
          return Math.sqrt((r - t) * (r - t) + (i - e) * (i - e));
        }
        getPathLength() {
          return (
            this.pathLength === -1 &&
              (this.pathLength = this.dataArray.reduce(
                (t, e) => (e.pathLength > 0 ? t + e.pathLength : t),
                0,
              )),
            this.pathLength
          );
        }
        getPointOnCubicBezier(t, e, r, i, a, o, s, u, c) {
          var p = u * hr(t) + o * fr(t) + i * cr(t) + e * vr(t),
            E = c * hr(t) + s * fr(t) + a * cr(t) + r * vr(t);
          return { x: p, y: E };
        }
        getPointOnQuadraticBezier(t, e, r, i, a, o, s) {
          var u = o * gr(t) + i * dr(t) + e * pr(t),
            c = s * gr(t) + a * dr(t) + r * pr(t);
          return { x: u, y: c };
        }
        getPointOnEllipticalArc(t, e, r, i, a, o) {
          var s = Math.cos(o),
            u = Math.sin(o),
            c = { x: r * Math.cos(a), y: i * Math.sin(a) };
          return { x: t + (c.x * s - c.y * u), y: e + (c.x * u + c.y * s) };
        }
        buildEquidistantCache(t, e) {
          var r = this.getPathLength(),
            i = e || 0.25,
            a = t || r / 100;
          if (
            !this.equidistantCache ||
            this.equidistantCache.step !== a ||
            this.equidistantCache.precision !== i
          ) {
            this.equidistantCache = { step: a, precision: i, points: [] };
            for (var o = 0, s = 0; s <= r; s += i) {
              var u = this.getPointOnPath(s),
                c = this.getPointOnPath(s + i);
              !u ||
                !c ||
                ((o += this.getLineLength(u.x, u.y, c.x, c.y)),
                o >= a &&
                  (this.equidistantCache.points.push({ x: u.x, y: u.y, distance: s }), (o -= a)));
            }
          }
        }
        getEquidistantPointOnPath(t, e, r) {
          if ((this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5))
            return null;
          var i = Math.round(
            (t / this.getPathLength()) * (this.equidistantCache.points.length - 1),
          );
          return this.equidistantCache.points[i] || null;
        }
      }
      var Bn = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
      class fn extends ye {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'image'), (this.loaded = !1);
          var i = this.getHrefAttribute().getString();
          if (i) {
            var a = i.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(i);
            t.images.push(this), a ? this.loadSvg(i) : this.loadImage(i), (this.isSvg = a);
          }
        }
        loadImage(t) {
          var e = this;
          return (0, f.Z)(function* () {
            try {
              var r = yield e.document.createImage(t);
              e.image = r;
            } catch (i) {
              console.error('Error while loading image "'.concat(t, '":'), i);
            }
            e.loaded = !0;
          })();
        }
        loadSvg(t) {
          var e = this;
          return (0, f.Z)(function* () {
            var r = Bn.exec(t);
            if (r) {
              var i = r[5];
              r[4] === 'base64' ? (e.image = atob(i)) : (e.image = decodeURIComponent(i));
            } else
              try {
                var a = yield e.document.fetch(t),
                  o = yield a.text();
                e.image = o;
              } catch (s) {
                console.error('Error while loading image "'.concat(t, '":'), s);
              }
            e.loaded = !0;
          })();
        }
        renderChildren(t) {
          var { document: e, image: r, loaded: i } = this,
            a = this.getAttribute('x').getPixels('x'),
            o = this.getAttribute('y').getPixels('y'),
            s = this.getStyle('width').getPixels('x'),
            u = this.getStyle('height').getPixels('y');
          if (!(!i || !r || !s || !u)) {
            if ((t.save(), t.translate(a, o), this.isSvg)) {
              var c = e.canvg.forkString(t, this.image, {
                ignoreMouse: !0,
                ignoreAnimation: !0,
                ignoreDimensions: !0,
                ignoreClear: !0,
                offsetX: 0,
                offsetY: 0,
                scaleWidth: s,
                scaleHeight: u,
              });
              (c.document.documentElement.parent = this), c.render();
            } else {
              var p = this.image;
              e.setViewBox({
                ctx: t,
                aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
                width: s,
                desiredWidth: p.width,
                height: u,
                desiredHeight: p.height,
              }),
                this.loaded &&
                  (typeof p.complete == 'undefined' || p.complete) &&
                  t.drawImage(p, 0, 0);
            }
            t.restore();
          }
        }
        getBoundingBox() {
          var t = this.getAttribute('x').getPixels('x'),
            e = this.getAttribute('y').getPixels('y'),
            r = this.getStyle('width').getPixels('x'),
            i = this.getStyle('height').getPixels('y');
          return new Zt(t, e, t + r, e + i);
        }
      }
      class cn extends ye {
        constructor() {
          super(...arguments), (this.type = 'symbol');
        }
        render(t) {}
      }
      class vn {
        constructor(t) {
          (this.document = t), (this.loaded = !1), t.fonts.push(this);
        }
        load(t, e) {
          var r = this;
          return (0, f.Z)(function* () {
            try {
              var { document: i } = r,
                a = yield i.canvg.parser.load(e),
                o = a.getElementsByTagName('font');
              Array.from(o).forEach((s) => {
                var u = i.createElement(s);
                i.definitions[t] = u;
              });
            } catch (s) {
              console.error('Error while loading font "'.concat(e, '":'), s);
            }
            r.loaded = !0;
          })();
        }
      }
      class Sr extends Ct {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'style');
          var i = _t(
              Array.from(e.childNodes)
                .map((o) => o.textContent)
                .join('')
                .replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '')
                .replace(/@import.*;/g, ''),
            ),
            a = i.split('}');
          a.forEach((o) => {
            var s = o.trim();
            if (s) {
              var u = s.split('{'),
                c = u[0].split(','),
                p = u[1].split(';');
              c.forEach((E) => {
                var T = E.trim();
                if (T) {
                  var m = t.styles[T] || {};
                  if (
                    (p.forEach((L) => {
                      var U = L.indexOf(':'),
                        K = L.substr(0, U).trim(),
                        j = L.substr(U + 1, L.length - U).trim();
                      K && j && (m[K] = new k(t, K, j));
                    }),
                    (t.styles[T] = m),
                    (t.stylesSpecificity[T] = Qe(T)),
                    T === '@font-face')
                  ) {
                    var D = m['font-family'].getString().replace(/"|'/g, ''),
                      V = m.src.getString().split(',');
                    V.forEach((L) => {
                      if (L.indexOf('format("svg")') > 0) {
                        var U = nt(L);
                        U && new vn(t).load(D, U);
                      }
                    });
                  }
                }
              });
            }
          });
        }
      }
      Sr.parseExternalUrl = nt;
      class gn extends ye {
        constructor() {
          super(...arguments), (this.type = 'use');
        }
        setContext(t) {
          super.setContext(t);
          var e = this.getAttribute('x'),
            r = this.getAttribute('y');
          e.hasValue() && t.translate(e.getPixels('x'), 0),
            r.hasValue() && t.translate(0, r.getPixels('y'));
        }
        path(t) {
          var { element: e } = this;
          e && e.path(t);
        }
        renderChildren(t) {
          var { document: e, element: r } = this;
          if (r) {
            var i = r;
            if (
              (r.type === 'symbol' &&
                ((i = new De(e, null)),
                (i.attributes.viewBox = new k(e, 'viewBox', r.getAttribute('viewBox').getString())),
                (i.attributes.preserveAspectRatio = new k(
                  e,
                  'preserveAspectRatio',
                  r.getAttribute('preserveAspectRatio').getString(),
                )),
                (i.attributes.overflow = new k(
                  e,
                  'overflow',
                  r.getAttribute('overflow').getString(),
                )),
                (i.children = r.children),
                (r.styles.opacity = new k(e, 'opacity', this.calculateOpacity()))),
              i.type === 'svg')
            ) {
              var a = this.getStyle('width', !1, !0),
                o = this.getStyle('height', !1, !0);
              a.hasValue() && (i.attributes.width = new k(e, 'width', a.getString())),
                o.hasValue() && (i.attributes.height = new k(e, 'height', o.getString()));
            }
            var s = i.parent;
            (i.parent = this), i.render(t), (i.parent = s);
          }
        }
        getBoundingBox(t) {
          var { element: e } = this;
          return e ? e.getBoundingBox(t) : null;
        }
        elementTransform() {
          var { document: t, element: e } = this;
          return pe.fromElement(t, e);
        }
        get element() {
          return (
            this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()),
            this.cachedElement
          );
        }
      }
      function _e(h, t, e, r, i, a) {
        return h[e * r * 4 + t * 4 + a];
      }
      function tr(h, t, e, r, i, a, o) {
        h[e * r * 4 + t * 4 + a] = o;
      }
      function Dt(h, t, e) {
        var r = h[t];
        return r * e;
      }
      function oe(h, t, e, r) {
        return t + Math.cos(h) * e + Math.sin(h) * r;
      }
      class br extends Ct {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'feColorMatrix');
          var i = Mt(this.getAttribute('values').getString());
          switch (this.getAttribute('type').getString('matrix')) {
            case 'saturate': {
              var a = i[0];
              i = [
                0.213 + 0.787 * a,
                0.715 - 0.715 * a,
                0.072 - 0.072 * a,
                0,
                0,
                0.213 - 0.213 * a,
                0.715 + 0.285 * a,
                0.072 - 0.072 * a,
                0,
                0,
                0.213 - 0.213 * a,
                0.715 - 0.715 * a,
                0.072 + 0.928 * a,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
              break;
            }
            case 'hueRotate': {
              var o = (i[0] * Math.PI) / 180;
              i = [
                oe(o, 0.213, 0.787, -0.213),
                oe(o, 0.715, -0.715, -0.715),
                oe(o, 0.072, -0.072, 0.928),
                0,
                0,
                oe(o, 0.213, -0.213, 0.143),
                oe(o, 0.715, 0.285, 0.14),
                oe(o, 0.072, -0.072, -0.283),
                0,
                0,
                oe(o, 0.213, -0.213, -0.787),
                oe(o, 0.715, -0.715, 0.715),
                oe(o, 0.072, 0.928, 0.072),
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
              ];
              break;
            }
            case 'luminanceToAlpha':
              i = [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0,
                0, 1,
              ];
              break;
          }
          (this.matrix = i), (this.includeOpacity = this.getAttribute('includeOpacity').hasValue());
        }
        apply(t, e, r, i, a) {
          for (
            var { includeOpacity: o, matrix: s } = this, u = t.getImageData(0, 0, i, a), c = 0;
            c < a;
            c++
          )
            for (var p = 0; p < i; p++) {
              var E = _e(u.data, p, c, i, a, 0),
                T = _e(u.data, p, c, i, a, 1),
                m = _e(u.data, p, c, i, a, 2),
                D = _e(u.data, p, c, i, a, 3),
                V = Dt(s, 0, E) + Dt(s, 1, T) + Dt(s, 2, m) + Dt(s, 3, D) + Dt(s, 4, 1),
                L = Dt(s, 5, E) + Dt(s, 6, T) + Dt(s, 7, m) + Dt(s, 8, D) + Dt(s, 9, 1),
                U = Dt(s, 10, E) + Dt(s, 11, T) + Dt(s, 12, m) + Dt(s, 13, D) + Dt(s, 14, 1),
                K = Dt(s, 15, E) + Dt(s, 16, T) + Dt(s, 17, m) + Dt(s, 18, D) + Dt(s, 19, 1);
              o && ((V = 0), (L = 0), (U = 0), (K *= D / 255)),
                tr(u.data, p, c, i, a, 0, V),
                tr(u.data, p, c, i, a, 1, L),
                tr(u.data, p, c, i, a, 2, U),
                tr(u.data, p, c, i, a, 3, K);
            }
          t.clearRect(0, 0, i, a), t.putImageData(u, 0, 0);
        }
      }
      class $e extends Ct {
        constructor() {
          super(...arguments), (this.type = 'mask');
        }
        apply(t, e) {
          var { document: r } = this,
            i = this.getAttribute('x').getPixels('x'),
            a = this.getAttribute('y').getPixels('y'),
            o = this.getStyle('width').getPixels('x'),
            s = this.getStyle('height').getPixels('y');
          if (!o && !s) {
            var u = new Zt();
            this.children.forEach((D) => {
              u.addBoundingBox(D.getBoundingBox(t));
            }),
              (i = Math.floor(u.x1)),
              (a = Math.floor(u.y1)),
              (o = Math.floor(u.width)),
              (s = Math.floor(u.height));
          }
          var c = this.removeStyles(e, $e.ignoreStyles),
            p = r.createCanvas(i + o, a + s),
            E = p.getContext('2d');
          r.screen.setDefaults(E),
            this.renderChildren(E),
            new br(r, {
              nodeType: 1,
              childNodes: [],
              attributes: [
                { nodeName: 'type', value: 'luminanceToAlpha' },
                { nodeName: 'includeOpacity', value: 'true' },
              ],
            }).apply(E, 0, 0, i + o, a + s);
          var T = r.createCanvas(i + o, a + s),
            m = T.getContext('2d');
          r.screen.setDefaults(m),
            e.render(m),
            (m.globalCompositeOperation = 'destination-in'),
            (m.fillStyle = E.createPattern(p, 'no-repeat')),
            m.fillRect(0, 0, i + o, a + s),
            (t.fillStyle = m.createPattern(T, 'no-repeat')),
            t.fillRect(0, 0, i + o, a + s),
            this.restoreStyles(e, c);
        }
        render(t) {}
      }
      $e.ignoreStyles = ['mask', 'transform', 'clip-path'];
      var dn = () => {};
      class pn extends Ct {
        constructor() {
          super(...arguments), (this.type = 'clipPath');
        }
        apply(t) {
          var { document: e } = this,
            r = Reflect.getPrototypeOf(t),
            { beginPath: i, closePath: a } = t;
          r && ((r.beginPath = dn), (r.closePath = dn)),
            Reflect.apply(i, t, []),
            this.children.forEach((o) => {
              if (typeof o.path != 'undefined') {
                var s = typeof o.elementTransform != 'undefined' ? o.elementTransform() : null;
                s || (s = pe.fromElement(e, o)),
                  s && s.apply(t),
                  o.path(t),
                  r && (r.closePath = a),
                  s && s.unapply(t);
              }
            }),
            Reflect.apply(a, t, []),
            t.clip(),
            r && ((r.beginPath = i), (r.closePath = a));
        }
        render(t) {}
      }
      class He extends Ct {
        constructor() {
          super(...arguments), (this.type = 'filter');
        }
        apply(t, e) {
          var { document: r, children: i } = this,
            a = e.getBoundingBox(t);
          if (a) {
            var o = 0,
              s = 0;
            i.forEach((U) => {
              var K = U.extraFilterDistance || 0;
              (o = Math.max(o, K)), (s = Math.max(s, K));
            });
            var u = Math.floor(a.width),
              c = Math.floor(a.height),
              p = u + 2 * o,
              E = c + 2 * s;
            if (!(p < 1 || E < 1)) {
              var T = Math.floor(a.x),
                m = Math.floor(a.y),
                D = this.removeStyles(e, He.ignoreStyles),
                V = r.createCanvas(p, E),
                L = V.getContext('2d');
              r.screen.setDefaults(L),
                L.translate(-T + o, -m + s),
                e.render(L),
                i.forEach((U) => {
                  typeof U.apply == 'function' && U.apply(L, 0, 0, p, E);
                }),
                t.drawImage(V, 0, 0, p, E, T - o, m - s, p, E),
                this.restoreStyles(e, D);
            }
          }
        }
        render(t) {}
      }
      He.ignoreStyles = ['filter', 'transform', 'clip-path'];
      class yn extends Ct {
        constructor(t, e, r) {
          super(t, e, r), (this.type = 'feDropShadow'), this.addStylesFromStyleDefinition();
        }
        apply(t, e, r, i, a) {}
      }
      class mn extends Ct {
        constructor() {
          super(...arguments), (this.type = 'feMorphology');
        }
        apply(t, e, r, i, a) {}
      }
      class xn extends Ct {
        constructor() {
          super(...arguments), (this.type = 'feComposite');
        }
        apply(t, e, r, i, a) {}
      }
      class En extends Ct {
        constructor(t, e, r) {
          super(t, e, r),
            (this.type = 'feGaussianBlur'),
            (this.blurRadius = Math.floor(this.getAttribute('stdDeviation').getNumber())),
            (this.extraFilterDistance = this.blurRadius);
        }
        apply(t, e, r, i, a) {
          var { document: o, blurRadius: s } = this,
            u = o.window ? o.window.document.body : null,
            c = t.canvas;
          (c.id = o.getUniqueId()),
            u && ((c.style.display = 'none'), u.appendChild(c)),
            kt(c, e, r, i, a, s),
            u && u.removeChild(c);
        }
      }
      class Tn extends Ct {
        constructor() {
          super(...arguments), (this.type = 'title');
        }
      }
      class On extends Ct {
        constructor() {
          super(...arguments), (this.type = 'desc');
        }
      }
      var Fn = {
        svg: De,
        rect: Er,
        circle: Xr,
        ellipse: Wr,
        line: Qr,
        polyline: Tr,
        polygon: Zr,
        path: yt,
        pattern: Kr,
        marker: kr,
        defs: Jr,
        linearGradient: qr,
        radialGradient: _r,
        stop: tn,
        animate: Je,
        animateColor: en,
        animateTransform: rn,
        font: nn,
        'font-face': an,
        'missing-glyph': sn,
        glyph: xr,
        text: se,
        tspan: Ge,
        tref: on,
        a: un,
        textPath: hn,
        image: fn,
        g: ke,
        symbol: cn,
        style: Sr,
        use: gn,
        mask: $e,
        clipPath: pn,
        filter: He,
        feDropShadow: yn,
        feMorphology: mn,
        feComposite: xn,
        feColorMatrix: br,
        feGaussianBlur: En,
        title: Tn,
        desc: On,
      };
      function Sn(h, t) {
        var e = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(h);
          t &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(h, i).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function Un(h) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? Sn(Object(e), !0).forEach(function (r) {
                (0, b.Z)(h, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(e))
            : Sn(Object(e)).forEach(function (r) {
                Object.defineProperty(h, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return h;
      }
      function jn(h, t) {
        var e = document.createElement('canvas');
        return (e.width = h), (e.height = t), e;
      }
      function zn(h) {
        return Cr.apply(this, arguments);
      }
      function Cr() {
        return (
          (Cr = (0, f.Z)(function* (h) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
              e = document.createElement('img');
            return (
              t && (e.crossOrigin = 'Anonymous'),
              new Promise((r, i) => {
                (e.onload = () => {
                  r(e);
                }),
                  (e.onerror = (a, o, s, u, c) => {
                    i(c);
                  }),
                  (e.src = h);
              })
            );
          })),
          Cr.apply(this, arguments)
        );
      }
      class ue {
        constructor(t) {
          var {
            rootEmSize: e = 12,
            emSize: r = 12,
            createCanvas: i = ue.createCanvas,
            createImage: a = ue.createImage,
            anonymousCrossOrigin: o,
          } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          (this.canvg = t),
            (this.definitions = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.images = []),
            (this.fonts = []),
            (this.emSizeStack = []),
            (this.uniqueId = 0),
            (this.screen = t.screen),
            (this.rootEmSize = e),
            (this.emSize = r),
            (this.createCanvas = i),
            (this.createImage = this.bindCreateImage(a, o)),
            this.screen.wait(this.isImagesLoaded.bind(this)),
            this.screen.wait(this.isFontsLoaded.bind(this));
        }
        bindCreateImage(t, e) {
          return typeof e == 'boolean' ? (r, i) => t(r, typeof i == 'boolean' ? i : e) : t;
        }
        get window() {
          return this.screen.window;
        }
        get fetch() {
          return this.screen.fetch;
        }
        get ctx() {
          return this.screen.ctx;
        }
        get emSize() {
          var { emSizeStack: t } = this;
          return t[t.length - 1];
        }
        set emSize(t) {
          var { emSizeStack: e } = this;
          e.push(t);
        }
        popEmSize() {
          var { emSizeStack: t } = this;
          t.pop();
        }
        getUniqueId() {
          return 'canvg'.concat(++this.uniqueId);
        }
        isImagesLoaded() {
          return this.images.every((t) => t.loaded);
        }
        isFontsLoaded() {
          return this.fonts.every((t) => t.loaded);
        }
        createDocumentElement(t) {
          var e = this.createElement(t.documentElement);
          return (e.root = !0), e.addStylesFromStyleDefinition(), (this.documentElement = e), e;
        }
        createElement(t) {
          var e = t.nodeName.replace(/^[^:]+:/, ''),
            r = ue.elementTypes[e];
          return typeof r != 'undefined' ? new r(this, t) : new Yr(this, t);
        }
        createTextNode(t) {
          return new Ln(this, t);
        }
        setViewBox(t) {
          this.screen.setViewBox(Un({ document: this }, t));
        }
      }
      (ue.createCanvas = jn), (ue.createImage = zn), (ue.elementTypes = Fn);
      function bn(h, t) {
        var e = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(h);
          t &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(h, i).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function Ae(h) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? bn(Object(e), !0).forEach(function (r) {
                (0, b.Z)(h, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(e))
            : bn(Object(e)).forEach(function (r) {
                Object.defineProperty(h, r, Object.getOwnPropertyDescriptor(e, r));
              });
        }
        return h;
      }
      class Pe {
        constructor(t, e) {
          var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          (this.parser = new Ke(r)), (this.screen = new ze(t, r)), (this.options = r);
          var i = new ue(this, r),
            a = i.createDocumentElement(e);
          (this.document = i), (this.documentElement = a);
        }
        static from(t, e) {
          var r = arguments;
          return (0, f.Z)(function* () {
            var i = r.length > 2 && r[2] !== void 0 ? r[2] : {},
              a = new Ke(i),
              o = yield a.parse(e);
            return new Pe(t, o, i);
          })();
        }
        static fromString(t, e) {
          var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i = new Ke(r),
            a = i.parseFromString(e);
          return new Pe(t, a, r);
        }
        fork(t, e) {
          var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Pe.from(t, e, Ae(Ae({}, this.options), r));
        }
        forkString(t, e) {
          var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Pe.fromString(t, e, Ae(Ae({}, this.options), r));
        }
        ready() {
          return this.screen.ready();
        }
        isReady() {
          return this.screen.isReady();
        }
        render() {
          var t = arguments,
            e = this;
          return (0, f.Z)(function* () {
            var r = t.length > 0 && t[0] !== void 0 ? t[0] : {};
            e.start(Ae({ enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 }, r)),
              yield e.ready(),
              e.stop();
          })();
        }
        start() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            { documentElement: e, screen: r, options: i } = this;
          r.start(e, Ae(Ae({ enableRedraw: !0 }, i), t));
        }
        stop() {
          this.screen.stop();
        }
        resize(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          this.documentElement.resize(t, e, r);
        }
      }
    },
  },
]);
