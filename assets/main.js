const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/passkru-ngep.js",
      "assets/case-study.js",
      "assets/case-study.css",
      "assets/passkru-startup.js",
      "assets/findmoy.js",
      "assets/project-detail.js",
    ]),
) => i.map((i) => d[i]);
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      ee = Object.prototype.hasOwnProperty;
    function T(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function E(e, t) {
      return T(e.type, t, e.props);
    }
    function te(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ne(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var re = /\/+/g;
    function ie(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ne(`` + e.key)
        : t.toString(36);
    }
    function ae(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function oe(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), oe(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ie(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(re, `$&/`) + `/`),
              oe(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (te(o) &&
                (o = E(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(re, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + ie(a, u)), (c += oe(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + ie(a, u++)), (c += oe(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return oe(ae(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function se(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        oe(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ce(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var D =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      O = {
        map: se,
        forEach: function (e, t, n) {
          se(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            se(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            se(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!te(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = O),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !ee.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return T(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            ee.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return T(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = te),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: ce,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, D));
        } catch (e) {
          D(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.5`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), te()));
        else {
          var t = n(l);
          t !== null && ie(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      ee = -1;
    function T() {
      return g ? !0 : !(e.unstable_now() - ee < w);
    }
    function E() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        ee = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && T());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ie(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? te() : (S = !1);
        }
      }
    }
    var te;
    if (typeof y == `function`)
      te = function () {
        y(E);
      };
    else if (typeof MessageChannel < `u`) {
      var ne = new MessageChannel(),
        re = ne.port2;
      ((ne.port1.onmessage = E),
        (te = function () {
          re.postMessage(null);
        }));
    } else
      te = function () {
        _(E, 0);
      };
    function ie(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), ie(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), te()))),
          r
        );
      }),
      (e.unstable_shouldYield = T),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.5`));
  }),
  m = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      ee = Symbol.for(`react.suspense`),
      T = Symbol.for(`react.suspense_list`),
      E = Symbol.for(`react.memo`),
      te = Symbol.for(`react.lazy`),
      ne = Symbol.for(`react.activity`),
      re = Symbol.for(`react.memo_cache_sentinel`),
      ie = Symbol.iterator;
    function ae(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ie && e[ie]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var oe = Symbol.for(`react.client.reference`);
    function se(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case T:
          return `SuspenseList`;
        case ne:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case E:
            return (
              (t = e.displayName || null),
              t === null ? se(e.type) || `Memo` : t
            );
          case te:
            ((t = e._payload), (e = e._init));
            try {
              return se(e(t));
            } catch {}
        }
      return null;
    }
    var ce = Array.isArray,
      D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      le = { pending: !1, data: null, method: null, action: null },
      ue = [],
      de = -1;
    function fe(e) {
      return { current: e };
    }
    function pe(e) {
      0 > de || ((e.current = ue[de]), (ue[de] = null), de--);
    }
    function k(e, t) {
      (de++, (ue[de] = e.current), (e.current = t));
    }
    var me = fe(null),
      he = fe(null),
      ge = fe(null),
      _e = fe(null);
    function ve(e, t) {
      switch ((k(ge, t), k(he, e), k(me, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (pe(me), k(me, e));
    }
    function ye() {
      (pe(me), pe(he), pe(ge));
    }
    function be(e) {
      e.memoizedState !== null && k(_e, e);
      var t = me.current,
        n = Hd(t, e.type);
      t !== n && (k(he, e), k(me, n));
    }
    function xe(e) {
      (he.current === e && (pe(me), pe(he)),
        _e.current === e && (pe(_e), (Qf._currentValue = le)));
    }
    var Se, Ce;
    function we(e) {
      if (Se === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Se = (t && t[1]) || ``),
            (Ce =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Se +
        e +
        Ce
      );
    }
    var Te = !1;
    function Ee(e, t) {
      if (!e || Te) return ``;
      Te = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, `props`, {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, `name`, {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Te = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? we(n) : ``;
    }
    function De(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return we(e.type);
        case 16:
          return we(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? we(`Suspense Fallback`)
            : we(`Suspense`);
        case 19:
          return we(`SuspenseList`);
        case 0:
        case 15:
          return Ee(e.type, !1);
        case 11:
          return Ee(e.type.render, !1);
        case 1:
          return Ee(e.type, !0);
        case 31:
          return we(`Activity`);
        default:
          return ``;
      }
    }
    function Oe(e) {
      try {
        var t = ``,
          n = null;
        do ((t += De(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var ke = Object.prototype.hasOwnProperty,
      Ae = t.unstable_scheduleCallback,
      je = t.unstable_cancelCallback,
      Me = t.unstable_shouldYield,
      Ne = t.unstable_requestPaint,
      Pe = t.unstable_now,
      Fe = t.unstable_getCurrentPriorityLevel,
      Ie = t.unstable_ImmediatePriority,
      Le = t.unstable_UserBlockingPriority,
      Re = t.unstable_NormalPriority,
      ze = t.unstable_LowPriority,
      Be = t.unstable_IdlePriority,
      Ve = t.log,
      He = t.unstable_setDisableYieldValue,
      Ue = null,
      We = null;
    function Ge(e) {
      if (
        (typeof Ve == `function` && He(e),
        We && typeof We.setStrictMode == `function`)
      )
        try {
          We.setStrictMode(Ue, e);
        } catch {}
    }
    var Ke = Math.clz32 ? Math.clz32 : Ye,
      qe = Math.log,
      Je = Math.LN2;
    function Ye(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((qe(e) / Je) | 0)) | 0);
    }
    var Xe = 256,
      Ze = 262144,
      Qe = 4194304;
    function $e(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function et(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = $e(n)))
                : (i = $e(o))
              : (i = $e(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = $e(n)))
                  : (i = $e(o)))
              : (i = $e(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function tt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function nt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function rt() {
      var e = Qe;
      return ((Qe <<= 1), !(Qe & 62914560) && (Qe = 4194304), e);
    }
    function it(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function at(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function ot(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - Ke(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && st(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function st(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ke(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function ct(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Ke(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function lt(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : ut(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function ut(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function dt(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function ft() {
      var e = O.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function pt(e, t) {
      var n = O.p;
      try {
        return ((O.p = e), t());
      } finally {
        O.p = n;
      }
    }
    var mt = Math.random().toString(36).slice(2),
      A = `__reactFiber$` + mt,
      ht = `__reactProps$` + mt,
      gt = `__reactContainer$` + mt,
      _t = `__reactEvents$` + mt,
      vt = `__reactListeners$` + mt,
      yt = `__reactHandles$` + mt,
      bt = `__reactResources$` + mt,
      xt = `__reactMarker$` + mt;
    function St(e) {
      (delete e[A], delete e[ht], delete e[_t], delete e[vt], delete e[yt]);
    }
    function Ct(e) {
      var t = e[A];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[gt] || n[A])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null;) {
              if ((n = e[A])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function wt(e) {
      if ((e = e[A] || e[gt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Tt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Et(e) {
      var t = e[bt];
      return (
        (t ||= e[bt] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Dt(e) {
      e[xt] = !0;
    }
    var Ot = new Set(),
      kt = {};
    function At(e, t) {
      (jt(e, t), jt(e + `Capture`, t));
    }
    function jt(e, t) {
      for (kt[e] = t, e = 0; e < t.length; e++) Ot.add(t[e]);
    }
    var Mt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Nt = {},
      Pt = {};
    function Ft(e) {
      return ke.call(Pt, e)
        ? !0
        : ke.call(Nt, e)
          ? !1
          : Mt.test(e)
            ? (Pt[e] = !0)
            : ((Nt[e] = !0), !1);
    }
    function It(e, t, n) {
      if (Ft(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Lt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Rt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function zt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Bt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Vt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Ht(e) {
      if (!e._valueTracker) {
        var t = Bt(e) ? `checked` : `value`;
        e._valueTracker = Vt(e, t, `` + e[t]);
      }
    }
    function Ut(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Bt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function Wt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Gt = /[\n"\\]/g;
    function Kt(e) {
      return e.replace(Gt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function qt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + zt(t))
            : e.value !== `` + zt(t) && (e.value = `` + zt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Yt(e, o, zt(n))
          : Yt(e, o, zt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + zt(s))
          : e.removeAttribute(`name`));
    }
    function Jt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Ht(e);
          return;
        }
        ((n = n == null ? `` : `` + zt(n)),
          (t = t == null ? n : `` + zt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Ht(e));
    }
    function Yt(e, t, n) {
      (t === `number` && Wt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Xt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + zt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Zt(e, t, n) {
      if (
        t != null &&
        ((t = `` + zt(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + zt(n);
    }
    function Qt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (ce(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = zt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Ht(e));
    }
    function $t(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var en = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function tn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || en.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function nn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && tn(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && tn(e, o, t[o]);
    }
    function rn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var an = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      on =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sn(e) {
      return on.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function cn() {}
    var ln = null;
    function un(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var dn = null,
      fn = null;
    function pn(e) {
      var t = wt(e);
      if (t && (e = t.stateNode)) {
        var n = e[ht] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (qt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Kt(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[ht] || null;
                  if (!a) throw Error(i(90));
                  qt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Ut(r));
            }
            break a;
          case `textarea`:
            Zt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Xt(e, !!n.multiple, t, !1));
        }
      }
    }
    var mn = !1;
    function hn(e, t, n) {
      if (mn) return e(t, n);
      mn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((mn = !1),
          (dn !== null || fn !== null) &&
            (bu(), dn && ((t = dn), (e = fn), (fn = dn = null), pn(t), e)))
        )
          for (t = 0; t < e.length; t++) pn(e[t]);
      }
    }
    function gn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[ht] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var _n = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      vn = !1;
    if (_n)
      try {
        var yn = {};
        (Object.defineProperty(yn, `passive`, {
          get: function () {
            vn = !0;
          },
        }),
          window.addEventListener(`test`, yn, yn),
          window.removeEventListener(`test`, yn, yn));
      } catch {
        vn = !1;
      }
    var bn = null,
      xn = null,
      Sn = null;
    function Cn() {
      if (Sn) return Sn;
      var e,
        t = xn,
        n = t.length,
        r,
        i = `value` in bn ? bn.value : bn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Sn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function wn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Tn() {
      return !0;
    }
    function En() {
      return !1;
    }
    function Dn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Tn
            : En),
          (this.isPropagationStopped = En),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Tn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Tn));
          },
          persist: function () {},
          isPersistent: Tn,
        }),
        t
      );
    }
    var On = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      kn = Dn(On),
      An = h({}, On, { view: 0, detail: 0 }),
      jn = Dn(An),
      Mn,
      Nn,
      Pn,
      Fn = h({}, An, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Kn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Pn &&
                (Pn && e.type === `mousemove`
                  ? ((Mn = e.screenX - Pn.screenX),
                    (Nn = e.screenY - Pn.screenY))
                  : (Nn = Mn = 0),
                (Pn = e)),
              Mn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Nn;
        },
      }),
      In = Dn(Fn),
      Ln = Dn(h({}, Fn, { dataTransfer: 0 })),
      Rn = Dn(h({}, An, { relatedTarget: 0 })),
      zn = Dn(
        h({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Bn = Dn(
        h({}, On, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Vn = Dn(h({}, On, { data: 0 })),
      Hn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Un = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Wn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Gn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Wn[e])
          ? !!t[e]
          : !1;
    }
    function Kn() {
      return Gn;
    }
    var qn = Dn(
        h({}, An, {
          key: function (e) {
            if (e.key) {
              var t = Hn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = wn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Un[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Kn,
          charCode: function (e) {
            return e.type === `keypress` ? wn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? wn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Jn = Dn(
        h({}, Fn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Yn = Dn(
        h({}, An, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Kn,
        }),
      ),
      Xn = Dn(h({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Zn = Dn(
        h({}, Fn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Qn = Dn(h({}, On, { newState: 0, oldState: 0 })),
      $n = [9, 13, 27, 32],
      er = _n && `CompositionEvent` in window,
      tr = null;
    _n && `documentMode` in document && (tr = document.documentMode);
    var nr = _n && `TextEvent` in window && !tr,
      rr = _n && (!er || (tr && 8 < tr && 11 >= tr)),
      ir = ` `,
      ar = !1;
    function or(e, t) {
      switch (e) {
        case `keyup`:
          return $n.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function sr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var cr = !1;
    function lr(e, t) {
      switch (e) {
        case `compositionend`:
          return sr(t);
        case `keypress`:
          return t.which === 32 ? ((ar = !0), ir) : null;
        case `textInput`:
          return ((e = t.data), e === ir && ar ? null : e);
        default:
          return null;
      }
    }
    function ur(e, t) {
      if (cr)
        return e === `compositionend` || (!er && or(e, t))
          ? ((e = Cn()), (Sn = xn = bn = null), (cr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return rr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var dr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function fr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!dr[e.type] : t === `textarea`;
    }
    function pr(e, t, n, r) {
      (dn ? (fn ? fn.push(r) : (fn = [r])) : (dn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new kn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var mr = null,
      hr = null;
    function gr(e) {
      yd(e, 0);
    }
    function _r(e) {
      if (Ut(Tt(e))) return e;
    }
    function vr(e, t) {
      if (e === `change`) return t;
    }
    var yr = !1;
    if (_n) {
      var br;
      if (_n) {
        var xr = `oninput` in document;
        if (!xr) {
          var Sr = document.createElement(`div`);
          (Sr.setAttribute(`oninput`, `return;`),
            (xr = typeof Sr.oninput == `function`));
        }
        br = xr;
      } else br = !1;
      yr = br && (!document.documentMode || 9 < document.documentMode);
    }
    function Cr() {
      mr && (mr.detachEvent(`onpropertychange`, wr), (hr = mr = null));
    }
    function wr(e) {
      if (e.propertyName === `value` && _r(hr)) {
        var t = [];
        (pr(t, hr, e, un(e)), hn(gr, t));
      }
    }
    function Tr(e, t, n) {
      e === `focusin`
        ? (Cr(), (mr = t), (hr = n), mr.attachEvent(`onpropertychange`, wr))
        : e === `focusout` && Cr();
    }
    function Er(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return _r(hr);
    }
    function Dr(e, t) {
      if (e === `click`) return _r(t);
    }
    function Or(e, t) {
      if (e === `input` || e === `change`) return _r(t);
    }
    function j(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var kr = typeof Object.is == `function` ? Object.is : j;
    function Ar(e, t) {
      if (kr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ke.call(t, i) || !kr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function jr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Mr(e, t) {
      var n = jr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = jr(n);
      }
    }
    function Nr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Nr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Pr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Wt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Wt(e.document);
      }
      return t;
    }
    function Fr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Ir = _n && `documentMode` in document && 11 >= document.documentMode,
      Lr = null,
      Rr = null,
      zr = null,
      Br = !1;
    function Vr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Br ||
        Lr == null ||
        Lr !== Wt(r) ||
        ((r = Lr),
        `selectionStart` in r && Fr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (zr && Ar(zr, r)) ||
          ((zr = r),
          (r = Ed(Rr, `onSelect`)),
          0 < r.length &&
            ((t = new kn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Lr))));
    }
    function Hr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Ur = {
        animationend: Hr(`Animation`, `AnimationEnd`),
        animationiteration: Hr(`Animation`, `AnimationIteration`),
        animationstart: Hr(`Animation`, `AnimationStart`),
        transitionrun: Hr(`Transition`, `TransitionRun`),
        transitionstart: Hr(`Transition`, `TransitionStart`),
        transitioncancel: Hr(`Transition`, `TransitionCancel`),
        transitionend: Hr(`Transition`, `TransitionEnd`),
      },
      Wr = {},
      Gr = {};
    _n &&
      ((Gr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Ur.animationend.animation,
        delete Ur.animationiteration.animation,
        delete Ur.animationstart.animation),
      `TransitionEvent` in window || delete Ur.transitionend.transition);
    function Kr(e) {
      if (Wr[e]) return Wr[e];
      if (!Ur[e]) return e;
      var t = Ur[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Gr) return (Wr[e] = t[n]);
      return e;
    }
    var qr = Kr(`animationend`),
      Jr = Kr(`animationiteration`),
      Yr = Kr(`animationstart`),
      Xr = Kr(`transitionrun`),
      Zr = Kr(`transitionstart`),
      Qr = Kr(`transitioncancel`),
      $r = Kr(`transitionend`),
      ei = new Map(),
      ti =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ti.push(`scrollEnd`);
    function ni(e, t) {
      (ei.set(e, t), At(t, [e]));
    }
    var ri =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ii = [],
      ai = 0,
      oi = 0;
    function si() {
      for (var e = ai, t = (oi = ai = 0); t < e;) {
        var n = ii[t];
        ii[t++] = null;
        var r = ii[t];
        ii[t++] = null;
        var i = ii[t];
        ii[t++] = null;
        var a = ii[t];
        if (((ii[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && di(n, i, a);
      }
    }
    function ci(e, t, n, r) {
      ((ii[ai++] = e),
        (ii[ai++] = t),
        (ii[ai++] = n),
        (ii[ai++] = r),
        (oi |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function li(e, t, n, r) {
      return (ci(e, t, n, r), fi(e));
    }
    function ui(e, t) {
      return (ci(e, null, null, t), fi(e));
    }
    function di(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ke(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function fi(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var pi = {};
    function mi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function hi(e, t, n, r) {
      return new mi(e, t, n, r);
    }
    function gi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function _i(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = hi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function vi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function yi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) gi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, me.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case ne:
            return (
              (e = hi(31, n, t, a)),
              (e.elementType = ne),
              (e.lanes = o),
              e
            );
          case y:
            return bi(n.children, a, o, t);
          case b:
            ((s = 8), (a |= 24));
            break;
          case x:
            return (
              (e = hi(12, n, t, a | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            );
          case ee:
            return (
              (e = hi(13, n, t, a)),
              (e.elementType = ee),
              (e.lanes = o),
              e
            );
          case T:
            return (
              (e = hi(19, n, t, a)),
              (e.elementType = T),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case E:
                  s = 14;
                  break a;
                case te:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = hi(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function bi(e, t, n, r) {
      return ((e = hi(7, e, r, t)), (e.lanes = n), e);
    }
    function xi(e, t, n) {
      return ((e = hi(6, e, null, t)), (e.lanes = n), e);
    }
    function Si(e) {
      var t = hi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Ci(e, t, n) {
      return (
        (t = hi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var wi = new WeakMap();
    function Ti(e, t) {
      if (typeof e == `object` && e) {
        var n = wi.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Oe(t) }), wi.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Oe(t) };
    }
    var Ei = [],
      Di = 0,
      Oi = null,
      ki = 0,
      Ai = [],
      ji = 0,
      Mi = null,
      Ni = 1,
      Pi = ``;
    function Fi(e, t) {
      ((Ei[Di++] = ki), (Ei[Di++] = Oi), (Oi = e), (ki = t));
    }
    function Ii(e, t, n) {
      ((Ai[ji++] = Ni), (Ai[ji++] = Pi), (Ai[ji++] = Mi), (Mi = e));
      var r = Ni;
      e = Pi;
      var i = 32 - Ke(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ke(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Ni = (1 << (32 - Ke(t) + i)) | (n << i) | r),
          (Pi = a + e));
      } else ((Ni = (1 << a) | (n << i) | r), (Pi = e));
    }
    function Li(e) {
      e.return !== null && (Fi(e, 1), Ii(e, 1, 0));
    }
    function Ri(e) {
      for (; e === Oi;)
        ((Oi = Ei[--Di]), (Ei[Di] = null), (ki = Ei[--Di]), (Ei[Di] = null));
      for (; e === Mi;)
        ((Mi = Ai[--ji]),
          (Ai[ji] = null),
          (Pi = Ai[--ji]),
          (Ai[ji] = null),
          (Ni = Ai[--ji]),
          (Ai[ji] = null));
    }
    function zi(e, t) {
      ((Ai[ji++] = Ni),
        (Ai[ji++] = Pi),
        (Ai[ji++] = Mi),
        (Ni = t.id),
        (Pi = t.overflow),
        (Mi = e));
    }
    var Bi = null,
      M = null,
      N = !1,
      Vi = null,
      Hi = !1,
      Ui = Error(i(519));
    function Wi(e) {
      throw (
        Xi(
          Ti(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Ui
      );
    }
    function Gi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[A] = e), (t[ht] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Jt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), Qt(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = cn),
            (t = !0))
          : (t = !1),
        t || Wi(e, !0));
    }
    function Ki(e) {
      for (Bi = e.return; Bi;)
        switch (Bi.tag) {
          case 5:
          case 31:
          case 13:
            Hi = !1;
            return;
          case 27:
          case 3:
            Hi = !0;
            return;
          default:
            Bi = Bi.return;
        }
    }
    function qi(e) {
      if (e !== Bi) return !1;
      if (!N) return (Ki(e), (N = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && M && Wi(e),
        Ki(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        M = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        M = uf(e);
      } else
        t === 27
          ? ((t = M), Zd(e.type) ? ((e = lf), (lf = null), (M = e)) : (M = t))
          : (M = Bi ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Ji() {
      ((M = Bi = null), (N = !1));
    }
    function Yi() {
      var e = Vi;
      return (
        e !== null &&
          (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (Vi = null)),
        e
      );
    }
    function Xi(e) {
      Vi === null ? (Vi = [e]) : Vi.push(e);
    }
    var Zi = fe(null),
      Qi = null,
      $i = null;
    function ea(e, t, n) {
      (k(Zi, t._currentValue), (t._currentValue = n));
    }
    function ta(e) {
      ((e._currentValue = Zi.current), pe(Zi));
    }
    function na(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function ra(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  na(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            na(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ia(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            kr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === _e.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        a = a.return;
      }
      (e !== null && ra(t, e, n, r), (t.flags |= 262144));
    }
    function aa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!kr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function oa(e) {
      ((Qi = e),
        ($i = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function sa(e) {
      return la(Qi, e);
    }
    function ca(e, t) {
      return (Qi === null && oa(e), la(e, t));
    }
    function la(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), $i === null)) {
        if (e === null) throw Error(i(308));
        (($i = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else $i = $i.next = t;
      return n;
    }
    var ua =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      da = t.unstable_scheduleCallback,
      fa = t.unstable_NormalPriority,
      P = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function pa() {
      return { controller: new ua(), data: new Map(), refCount: 0 };
    }
    function ma(e) {
      (e.refCount--,
        e.refCount === 0 &&
          da(fa, function () {
            e.controller.abort();
          }));
    }
    var ha = null,
      ga = 0,
      _a = 0,
      va = null;
    function ya(e, t) {
      if (ha === null) {
        var n = (ha = []);
        ((ga = 0),
          (_a = dd()),
          (va = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ga++, t.then(ba, ba), t);
    }
    function ba() {
      if (--ga === 0 && ha !== null) {
        va !== null && (va.status = `fulfilled`);
        var e = ha;
        ((ha = null), (_a = 0), (va = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function xa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Sa = D.S;
    D.S = function (e, t) {
      ((eu = Pe()),
        typeof t == `object` && t && typeof t.then == `function` && ya(e, t),
        Sa !== null && Sa(e, t));
    };
    var Ca = fe(null);
    function wa() {
      var e = Ca.current;
      return e === null ? K.pooledCache : e;
    }
    function Ta(e, t) {
      t === null ? k(Ca, Ca.current) : k(Ca, t.pool);
    }
    function Ea() {
      var e = wa();
      return e === null ? null : { parent: P._currentValue, pool: e };
    }
    var Da = Error(i(460)),
      Oa = Error(i(474)),
      ka = Error(i(542)),
      Aa = { then: function () {} };
    function ja(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Ma(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Ia(e), e);
        default:
          if (typeof t.status == `string`) t.then(cn, cn);
          else {
            if (((e = K), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Ia(e), e);
          }
          throw ((Pa = t), Da);
      }
    }
    function Na(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Pa = e), Da)
          : e;
      }
    }
    var Pa = null;
    function Fa() {
      if (Pa === null) throw Error(i(459));
      var e = Pa;
      return ((Pa = null), e);
    }
    function Ia(e) {
      if (e === Da || e === ka) throw Error(i(483));
    }
    var La = null,
      Ra = 0;
    function za(e) {
      var t = Ra;
      return ((Ra += 1), La === null && (La = []), Ma(La, e, t));
    }
    function Ba(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Va(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Ha(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = _i(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = xi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === te &&
                  Na(i) === t.type))
            ? ((t = a(t, n.props)), Ba(t, n), (t.return = e), t)
            : ((t = yi(n.type, n.key, n.props, null, e.mode, r)),
              Ba(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ci(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = bi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = xi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = yi(t.type, t.key, t.props, null, e.mode, n)),
                Ba(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = Ci(t, e.mode, n)), (t.return = e), t);
            case te:
              return ((t = Na(t)), f(e, t, n));
          }
          if (ce(t) || ae(t))
            return ((t = bi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, za(t), n);
          if (t.$$typeof === C) return f(e, ca(e, t), n);
          Va(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case te:
              return ((n = Na(n)), p(e, t, n, r));
          }
          if (ce(n) || ae(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, za(n), r);
          if (n.$$typeof === C) return p(e, t, ca(e, n), r);
          Va(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case te:
              return ((r = Na(r)), m(e, t, n, r, i));
          }
          if (ce(r) || ae(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, za(r), i);
          if (r.$$typeof === C) return m(e, t, n, ca(t, r), i);
          Va(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), N && Fi(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (N && Fi(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          N && Fi(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), N && Fi(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (N && Fi(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          N && Fi(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === te &&
                        Na(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        Ba(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = bi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = yi(o.type, o.key, o.props, null, e.mode, c)),
                    Ba(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = Ci(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case te:
              return ((o = Na(o)), b(e, r, o, c));
          }
          if (ce(o)) return h(e, r, o, c);
          if (ae(o)) {
            if (((l = ae(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, za(o), c);
          if (o.$$typeof === C) return b(e, r, ca(e, o), c);
          Va(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = xi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Ra = 0;
          var i = b(e, t, n, r);
          return ((La = null), i);
        } catch (t) {
          if (t === Da || t === ka) throw t;
          var a = hi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ua = Ha(!0),
      Wa = Ha(!1),
      Ga = !1;
    function Ka(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function qa(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Ja(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ya(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), G & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = fi(e)),
          di(e, null, n),
          t
        );
      }
      return (ci(e, r, t, n), fi(e));
    }
    function Xa(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ct(e, n));
      }
    }
    function Za(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Qa = !1;
    function $a() {
      if (Qa) {
        var e = va;
        if (e !== null) throw e;
      }
    }
    function eo(e, t, n, r) {
      Qa = !1;
      var i = e.updateQueue;
      Ga = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (J & f) === f : (r & f) === f) {
            (f !== 0 && f === _a && (Qa = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Ga = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function to(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function no(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) to(n[e], t);
    }
    var ro = fe(null),
      io = fe(0);
    function ao(e, t) {
      ((e = Wl), k(io, e), k(ro, t), (Wl = e | t.baseLanes));
    }
    function oo() {
      (k(io, Wl), k(ro, ro.current));
    }
    function so() {
      ((Wl = io.current), pe(ro), pe(io));
    }
    var co = fe(null),
      lo = null;
    function uo(e) {
      var t = e.alternate;
      (k(F, F.current & 1),
        k(co, e),
        lo === null &&
          (t === null || ro.current !== null || t.memoizedState !== null) &&
          (lo = e));
    }
    function fo(e) {
      (k(F, F.current), k(co, e), lo === null && (lo = e));
    }
    function po(e) {
      e.tag === 22
        ? (k(F, F.current), k(co, e), lo === null && (lo = e))
        : mo(e);
    }
    function mo() {
      (k(F, F.current), k(co, co.current));
    }
    function ho(e) {
      (pe(co), lo === e && (lo = null), pe(F));
    }
    var F = fe(0);
    function go(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var _o = 0,
      I = null,
      L = null,
      R = null,
      vo = !1,
      yo = !1,
      bo = !1,
      xo = 0,
      So = 0,
      Co = null,
      wo = 0;
    function z() {
      throw Error(i(321));
    }
    function To(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!kr(e[n], t[n])) return !1;
      return !0;
    }
    function Eo(e, t, n, r, i, a) {
      return (
        (_o = a),
        (I = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (D.H = e === null || e.memoizedState === null ? Hs : Us),
        (bo = !1),
        (a = n(r, i)),
        (bo = !1),
        yo && (a = Oo(t, n, r, i)),
        Do(e),
        a
      );
    }
    function Do(e) {
      D.H = Vs;
      var t = L !== null && L.next !== null;
      if (((_o = 0), (R = L = I = null), (vo = !1), (So = 0), (Co = null), t))
        throw Error(i(300));
      e === null ||
        V ||
        ((e = e.dependencies), e !== null && aa(e) && (V = !0));
    }
    function Oo(e, t, n, r) {
      I = e;
      var a = 0;
      do {
        if ((yo && (Co = null), (So = 0), (yo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (R = L = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((D.H = Ws), (o = t(n, r)));
      } while (yo);
      return o;
    }
    function ko() {
      var e = D.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Fo(t) : t),
        (e = e.useState()[0]),
        (L === null ? null : L.memoizedState) !== e && (I.flags |= 1024),
        t
      );
    }
    function Ao() {
      var e = xo !== 0;
      return ((xo = 0), e);
    }
    function jo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Mo(e) {
      if (vo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        vo = !1;
      }
      ((_o = 0), (R = L = I = null), (yo = !1), (So = xo = 0), (Co = null));
    }
    function No() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (R === null ? (I.memoizedState = R = e) : (R = R.next = e), R);
    }
    function B() {
      if (L === null) {
        var e = I.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = L.next;
      var t = R === null ? I.memoizedState : R.next;
      if (t !== null) ((R = t), (L = e));
      else {
        if (e === null)
          throw I.alternate === null ? Error(i(467)) : Error(i(310));
        ((L = e),
          (e = {
            memoizedState: L.memoizedState,
            baseState: L.baseState,
            baseQueue: L.baseQueue,
            queue: L.queue,
            next: null,
          }),
          R === null ? (I.memoizedState = R = e) : (R = R.next = e));
      }
      return R;
    }
    function Po() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Fo(e) {
      var t = So;
      return (
        (So += 1),
        Co === null && (Co = []),
        (e = Ma(Co, e, t)),
        (t = I),
        (R === null ? t.memoizedState : R.next) === null &&
          ((t = t.alternate),
          (D.H = t === null || t.memoizedState === null ? Hs : Us)),
        e
      );
    }
    function Io(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Fo(e);
        if (e.$$typeof === C) return sa(e);
      }
      throw Error(i(438, String(e)));
    }
    function Lo(e) {
      var t = null,
        n = I.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = I.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Po()), (I.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = re;
      return (t.index++, n);
    }
    function Ro(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function zo(e) {
      return Bo(B(), L, e);
    }
    function Bo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (_o & f) === f : (J & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === _a && (d = !0));
            else if ((_o & p) === p) {
              ((u = u.next), p === _a && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (I.lanes |= p),
                (Gl |= p));
            ((f = u.action),
              bo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (I.lanes |= f),
              (Gl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !kr(o, e.memoizedState) && ((V = !0), d && ((n = va), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Vo(e) {
      var t = B(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (kr(o, t.memoizedState) || (V = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Ho(e, t, n) {
      var r = I,
        a = B(),
        o = N;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !kr((L || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (V = !0)),
        (a = a.queue),
        ps(Go.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (R !== null && R.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          cs(9, { destroy: void 0 }, Wo.bind(null, r, a, n, t), null),
          K === null)
        )
          throw Error(i(349));
        o || _o & 127 || Uo(r, t, n);
      }
      return n;
    }
    function Uo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = I.updateQueue),
        t === null
          ? ((t = Po()), (I.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Wo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Ko(t) && qo(e));
    }
    function Go(e, t, n) {
      return n(function () {
        Ko(t) && qo(e);
      });
    }
    function Ko(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !kr(e, n);
      } catch {
        return !0;
      }
    }
    function qo(e) {
      var t = ui(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Jo(e) {
      var t = No();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), bo)) {
          Ge(!0);
          try {
            n();
          } finally {
            Ge(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Yo(e, t, n, r) {
      return ((e.baseState = n), Bo(e, L, typeof r == `function` ? r : Ro));
    }
    function Xo(e, t, n, r, a) {
      if (Rs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (D.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Zo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Zo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = D.T,
          o = {};
        D.T = o;
        try {
          var s = n(i, r),
            c = D.S;
          (c !== null && c(o, s), Qo(e, t, s));
        } catch (n) {
          es(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (D.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Qo(e, t, a));
        } catch (n) {
          es(e, t, n);
        }
    }
    function Qo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              $o(e, t, n);
            },
            function (n) {
              return es(e, t, n);
            },
          )
        : $o(e, t, n);
    }
    function $o(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        ts(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Zo(e, n))));
    }
    function es(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), ts(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function ts(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ns(e, t) {
      return t;
    }
    function rs(e, t) {
      if (N) {
        var n = K.formState;
        if (n !== null) {
          a: {
            var r = I;
            if (N) {
              if (M) {
                b: {
                  for (var i = M, a = Hi; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((M = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Wi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = No()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ns,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Fs.bind(null, I, r)),
        (r.dispatch = n),
        (r = Jo(!1)),
        (a = Ls.bind(null, I, !1, r.queue)),
        (r = No()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Xo.bind(null, I, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function is(e) {
      return as(B(), L, e);
    }
    function as(e, t, n) {
      if (
        ((t = Bo(e, t, ns)[0]),
        (e = zo(Ro)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Fo(t);
        } catch (e) {
          throw e === Da ? ka : e;
        }
      else r = t;
      t = B();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((I.flags |= 2048),
          cs(9, { destroy: void 0 }, os.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function os(e, t) {
      e.action = t;
    }
    function ss(e) {
      var t = B(),
        n = L;
      if (n !== null) return as(t, n, e);
      (B(), (t = t.memoizedState), (n = B()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function cs(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = I.updateQueue),
        t === null && ((t = Po()), (I.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ls() {
      return B().memoizedState;
    }
    function us(e, t, n, r) {
      var i = No();
      ((I.flags |= e),
        (i.memoizedState = cs(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function ds(e, t, n, r) {
      var i = B();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      L !== null && r !== null && To(r, L.memoizedState.deps)
        ? (i.memoizedState = cs(t, a, n, r))
        : ((I.flags |= e), (i.memoizedState = cs(1 | t, a, n, r)));
    }
    function fs(e, t) {
      us(8390656, 8, e, t);
    }
    function ps(e, t) {
      ds(2048, 8, e, t);
    }
    function ms(e) {
      I.flags |= 4;
      var t = I.updateQueue;
      if (t === null) ((t = Po()), (I.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function hs(e) {
      var t = B().memoizedState;
      return (
        ms({ ref: t, nextImpl: e }),
        function () {
          if (G & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function gs(e, t) {
      return ds(4, 2, e, t);
    }
    function _s(e, t) {
      return ds(4, 4, e, t);
    }
    function vs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ys(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        ds(4, 4, vs.bind(null, t, e), n));
    }
    function bs() {}
    function xs(e, t) {
      var n = B();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && To(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ss(e, t) {
      var n = B();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && To(t, r[1])) return r[0];
      if (((r = e()), bo)) {
        Ge(!0);
        try {
          e();
        } finally {
          Ge(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Cs(e, t, n) {
      return n === void 0 || (_o & 1073741824 && !(J & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (I.lanes |= e), (Gl |= e), n);
    }
    function ws(e, t, n, r) {
      return kr(n, t)
        ? n
        : ro.current === null
          ? !(_o & 42) || (_o & 1073741824 && !(J & 261930))
            ? ((V = !0), (e.memoizedState = n))
            : ((e = mu()), (I.lanes |= e), (Gl |= e), t)
          : ((e = Cs(e, n, r)), kr(e, t) || (V = !0), e);
    }
    function Ts(e, t, n, r, i) {
      var a = O.p;
      O.p = a !== 0 && 8 > a ? a : 8;
      var o = D.T,
        s = {};
      ((D.T = s), Ls(e, !1, t, n));
      try {
        var c = i(),
          l = D.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Is(e, t, xa(c, r), pu(e))
            : Is(e, t, r, pu(e)));
      } catch (n) {
        Is(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        ((O.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (D.T = o));
      }
    }
    function Es() {}
    function Ds(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = Os(e).queue;
      Ts(
        e,
        a,
        t,
        le,
        n === null
          ? Es
          : function () {
              return (ks(e), n(r));
            },
      );
    }
    function Os(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: le,
        baseState: le,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: le,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ro,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function ks(e) {
      var t = Os(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Is(e, t.next.queue, {}, pu()));
    }
    function As() {
      return sa(Qf);
    }
    function js() {
      return B().memoizedState;
    }
    function Ms() {
      return B().memoizedState;
    }
    function Ns(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = Ja(n);
            var r = Ya(t, e, n);
            (r !== null && (hu(r, t, n), Xa(r, t, n)),
              (t = { cache: pa() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ps(e, t, n) {
      var r = pu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Rs(e)
          ? zs(t, n)
          : ((n = li(e, t, n, r)), n !== null && (hu(n, e, r), Bs(n, t, r))));
    }
    function Fs(e, t, n) {
      Is(e, t, n, pu());
    }
    function Is(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Rs(e)) zs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), kr(s, o)))
              return (ci(e, t, i, 0), K === null && si(), !1);
          } catch {}
        if (((n = li(e, t, i, r)), n !== null))
          return (hu(n, e, r), Bs(n, t, r), !0);
      }
      return !1;
    }
    function Ls(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Rs(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = li(e, n, r, 2)), t !== null && hu(t, e, 2));
    }
    function Rs(e) {
      var t = e.alternate;
      return e === I || (t !== null && t === I);
    }
    function zs(e, t) {
      yo = vo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function Bs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ct(e, n));
      }
    }
    var Vs = {
      readContext: sa,
      use: Io,
      useCallback: z,
      useContext: z,
      useEffect: z,
      useImperativeHandle: z,
      useLayoutEffect: z,
      useInsertionEffect: z,
      useMemo: z,
      useReducer: z,
      useRef: z,
      useState: z,
      useDebugValue: z,
      useDeferredValue: z,
      useTransition: z,
      useSyncExternalStore: z,
      useId: z,
      useHostTransitionStatus: z,
      useFormState: z,
      useActionState: z,
      useOptimistic: z,
      useMemoCache: z,
      useCacheRefresh: z,
    };
    Vs.useEffectEvent = z;
    var Hs = {
        readContext: sa,
        use: Io,
        useCallback: function (e, t) {
          return ((No().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: sa,
        useEffect: fs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            us(4194308, 4, vs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return us(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          us(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = No();
          t = t === void 0 ? null : t;
          var r = e();
          if (bo) {
            Ge(!0);
            try {
              e();
            } finally {
              Ge(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = No();
          if (n !== void 0) {
            var i = n(t);
            if (bo) {
              Ge(!0);
              try {
                n(t);
              } finally {
                Ge(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ps.bind(null, I, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = No();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Jo(e);
          var t = e.queue,
            n = Fs.bind(null, I, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return Cs(No(), e, t);
        },
        useTransition: function () {
          var e = Jo(!1);
          return (
            (e = Ts.bind(null, I, e.queue, !0, !1)),
            (No().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = I,
            a = No();
          if (N) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), K === null)) throw Error(i(349));
            J & 127 || Uo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            fs(Go.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            cs(9, { destroy: void 0 }, Wo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = No(),
            t = K.identifierPrefix;
          if (N) {
            var n = Pi,
              r = Ni;
            ((n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = xo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = wo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: As,
        useFormState: rs,
        useActionState: rs,
        useOptimistic: function (e) {
          var t = No();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ls.bind(null, I, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Lo,
        useCacheRefresh: function () {
          return (No().memoizedState = Ns.bind(null, I));
        },
        useEffectEvent: function (e) {
          var t = No(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (G & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Us = {
        readContext: sa,
        use: Io,
        useCallback: xs,
        useContext: sa,
        useEffect: ps,
        useImperativeHandle: ys,
        useInsertionEffect: gs,
        useLayoutEffect: _s,
        useMemo: Ss,
        useReducer: zo,
        useRef: ls,
        useState: function () {
          return zo(Ro);
        },
        useDebugValue: bs,
        useDeferredValue: function (e, t) {
          return ws(B(), L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = zo(Ro)[0],
            t = B().memoizedState;
          return [typeof e == `boolean` ? e : Fo(e), t];
        },
        useSyncExternalStore: Ho,
        useId: js,
        useHostTransitionStatus: As,
        useFormState: is,
        useActionState: is,
        useOptimistic: function (e, t) {
          return Yo(B(), L, e, t);
        },
        useMemoCache: Lo,
        useCacheRefresh: Ms,
      };
    Us.useEffectEvent = hs;
    var Ws = {
      readContext: sa,
      use: Io,
      useCallback: xs,
      useContext: sa,
      useEffect: ps,
      useImperativeHandle: ys,
      useInsertionEffect: gs,
      useLayoutEffect: _s,
      useMemo: Ss,
      useReducer: Vo,
      useRef: ls,
      useState: function () {
        return Vo(Ro);
      },
      useDebugValue: bs,
      useDeferredValue: function (e, t) {
        var n = B();
        return L === null ? Cs(n, e, t) : ws(n, L.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Vo(Ro)[0],
          t = B().memoizedState;
        return [typeof e == `boolean` ? e : Fo(e), t];
      },
      useSyncExternalStore: Ho,
      useId: js,
      useHostTransitionStatus: As,
      useFormState: ss,
      useActionState: ss,
      useOptimistic: function (e, t) {
        var n = B();
        return L === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Yo(n, L, e, t);
      },
      useMemoCache: Lo,
      useCacheRefresh: Ms,
    };
    Ws.useEffectEvent = hs;
    function Gs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ks = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Ja(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Ya(e, i, r)),
          t !== null && (hu(t, e, r), Xa(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Ja(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ya(e, i, r)),
          t !== null && (hu(t, e, r), Xa(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = Ja(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ya(e, r, n)),
          t !== null && (hu(t, e, n), Xa(t, e, n)));
      },
    };
    function qs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Ar(n, r) || !Ar(i, a)
            : !0
      );
    }
    function Js(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ks.enqueueReplaceState(t, t.state, null));
    }
    function Ys(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Xs(e) {
      ri(e);
    }
    function Zs(e) {
      console.error(e);
    }
    function Qs(e) {
      ri(e);
    }
    function $s(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ec(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function tc(e, t, n) {
      return (
        (n = Ja(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          $s(e, t);
        }),
        n
      );
    }
    function nc(e) {
      return ((e = Ja(e)), (e.tag = 3), e);
    }
    function rc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            ec(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (ec(t, n, r),
            typeof i != `function` &&
              (ru === null ? (ru = new Set([this])) : ru.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function ic(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && ia(t, n, a, !0),
          (n = co.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                lo === null ? Du() : n.alternate === null && X === 0 && (X = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Gu(e, r, a), Du(), !1);
      }
      if (N)
        return (
          (t = co.current),
          t === null
            ? (r !== Ui && ((t = Error(i(423), { cause: r })), Xi(Ti(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Ti(r, n)),
              (a = tc(e.stateNode, r, a)),
              Za(e, a),
              X !== 4 && (X = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Ui && ((e = Error(i(422), { cause: r })), Xi(Ti(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = Ti(o, n)),
        Xl === null ? (Xl = [o]) : Xl.push(o),
        X !== 4 && (X = 2),
        t === null)
      )
        return !0;
      ((r = Ti(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = tc(n.stateNode, r, e)),
              Za(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (ru === null || !ru.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = nc(a)),
                rc(a, e, n, r),
                Za(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var ac = Error(i(461)),
      V = !1;
    function oc(e, t, n, r) {
      t.child = e === null ? Wa(t, null, n, r) : Ua(t, e.child, n, r);
    }
    function sc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        oa(t),
        (r = Eo(e, t, n, o, a, i)),
        (s = Ao()),
        e !== null && !V
          ? (jo(e, t, i), jc(e, t, i))
          : (N && s && Li(t), (t.flags |= 1), oc(e, t, r, i), t.child)
      );
    }
    function cc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !gi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), lc(e, t, a, r, i))
          : ((e = yi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Mc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Ar : n),
          n(o, r) && e.ref === t.ref)
        )
          return jc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = _i(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function lc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Ar(a, r) && e.ref === t.ref)
          if (((V = !1), (t.pendingProps = r = a), Mc(e, i)))
            e.flags & 131072 && (V = !0);
          else return ((t.lanes = e.lanes), jc(e, t, i));
      }
      return _c(e, t, n, r, i);
    }
    function uc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return fc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ta(t, a === null ? null : a.cachePool),
            a === null ? oo() : ao(t, a),
            po(t));
        else
          return (
            (r = t.lanes = 536870912),
            fc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Ta(t, null), oo(), mo(t))
          : (Ta(t, a.cachePool), ao(t, a), mo(t), (t.memoizedState = null));
      return (oc(e, t, i, n), t.child);
    }
    function dc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function fc(e, t, n, r, i) {
      var a = wa();
      return (
        (a = a === null ? null : { parent: P._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ta(t, null),
        oo(),
        po(t),
        e !== null && ia(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function pc(e, t) {
      return (
        (t = Ec({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function mc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = pc(t, t.pendingProps)),
        (e.flags |= 2),
        ho(t),
        (t.memoizedState = null),
        e
      );
    }
    function hc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (N) {
          if (r.mode === `hidden`)
            return ((e = pc(t, r)), (t.lanes = 536870912), dc(null, e));
          if (
            (fo(t),
            (e = M)
              ? ((e = rf(e, Hi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Mi === null ? null : { id: Ni, overflow: Pi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Si(e)),
                  (n.return = t),
                  (t.child = n),
                  (Bi = t),
                  (M = null)))
              : (e = null),
            e === null)
          )
            throw Wi(t);
          return ((t.lanes = 536870912), null);
        }
        return pc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((fo(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = mc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if (
          (V || ia(e, t, n, !1), (a = (n & e.childLanes) !== 0), V || a)
        ) {
          if (
            ((r = K),
            r !== null && ((s = lt(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), ui(e, s), hu(r, e, s), ac);
          (Du(), (t = mc(e, t, n)));
        } else
          ((e = o.treeContext),
            (M = cf(s.nextSibling)),
            (Bi = t),
            (N = !0),
            (Vi = null),
            (Hi = !1),
            e !== null && zi(t, e),
            (t = pc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = _i(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function gc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function _c(e, t, n, r, i) {
      return (
        oa(t),
        (n = Eo(e, t, n, r, void 0, i)),
        (r = Ao()),
        e !== null && !V
          ? (jo(e, t, i), jc(e, t, i))
          : (N && r && Li(t), (t.flags |= 1), oc(e, t, n, i), t.child)
      );
    }
    function vc(e, t, n, r, i, a) {
      return (
        oa(t),
        (t.updateQueue = null),
        (n = Oo(t, r, n, i)),
        Do(e),
        (r = Ao()),
        e !== null && !V
          ? (jo(e, t, a), jc(e, t, a))
          : (N && r && Li(t), (t.flags |= 1), oc(e, t, n, a), t.child)
      );
    }
    function yc(e, t, n, r, i) {
      if ((oa(t), t.stateNode === null)) {
        var a = pi,
          o = n.contextType;
        (typeof o == `object` && o && (a = sa(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ks),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ka(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? sa(o) : pi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Gs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Ks.enqueueReplaceState(a, a.state, null),
            eo(t, r, a, i),
            $a(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Ys(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = pi), typeof u == `object` && u && (o = sa(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Js(t, a, r, o)),
          (Ga = !1));
        var f = t.memoizedState;
        ((a.state = f),
          eo(t, r, a, i),
          $a(),
          (l = t.memoizedState),
          s || f !== l || Ga
            ? (typeof d == `function` &&
                (Gs(t, n, d, r), (l = t.memoizedState)),
              (c = Ga || qs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          qa(e, t),
          (o = t.memoizedProps),
          (u = Ys(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = pi),
          typeof l == `object` && l && (c = sa(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Js(t, a, r, c)),
          (Ga = !1),
          (f = t.memoizedState),
          (a.state = f),
          eo(t, r, a, i),
          $a());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ga ||
        (e !== null && e.dependencies !== null && aa(e.dependencies))
          ? (typeof s == `function` && (Gs(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ga ||
              qs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && aa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        gc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ua(t, e.child, null, i)),
                (t.child = Ua(t, null, n, i)))
              : oc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = jc(e, t, i)),
        e
      );
    }
    function bc(e, t, n, r) {
      return (Ji(), (t.flags |= 256), oc(e, t, n, r), t.child);
    }
    var xc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Sc(e) {
      return { baseLanes: e, cachePool: Ea() };
    }
    function Cc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e);
    }
    function wc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : (F.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (N) {
          if (
            (a ? uo(t) : mo(t),
            (e = M)
              ? ((e = rf(e, Hi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Mi === null ? null : { id: Ni, overflow: Pi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Si(e)),
                  (n.return = t),
                  (t.child = n),
                  (Bi = t),
                  (M = null)))
              : (e = null),
            e === null)
          )
            throw Wi(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (mo(t),
              (a = t.mode),
              (c = Ec({ mode: `hidden`, children: c }, a)),
              (r = bi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Sc(n)),
              (r.childLanes = Cc(e, s, n)),
              (t.memoizedState = xc),
              dc(null, r))
            : (uo(t), Tc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (uo(t), (t.flags &= -257), (t = Dc(e, t, n)))
            : t.memoizedState === null
              ? (mo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Ec({ mode: `visible`, children: r.children }, a)),
                (c = bi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ua(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Sc(n)),
                (r.childLanes = Cc(e, s, n)),
                (t.memoizedState = xc),
                (t = dc(null, r)))
              : (mo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((uo(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Xi({ value: r, source: null, stack: null }),
            (t = Dc(e, t, n)));
        } else if (
          (V || ia(e, t, n, !1), (s = (n & e.childLanes) !== 0), V || s)
        ) {
          if (
            ((s = K),
            s !== null && ((r = lt(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), ui(e, r), hu(s, e, r), ac);
          (af(c) || Du(), (t = Dc(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (M = cf(c.nextSibling)),
              (Bi = t),
              (N = !0),
              (Vi = null),
              (Hi = !1),
              e !== null && zi(t, e),
              (t = Tc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (mo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = _i(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = bi(c, a, n, null)), (c.flags |= 2))
            : (c = _i(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          dc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Sc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Ea())
                : ((l = P._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = Cc(e, s, n)),
          (t.memoizedState = xc),
          dc(e.child, r))
        : (uo(t),
          (n = e.child),
          (e = n.sibling),
          (n = _i(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Tc(e, t) {
      return (
        (t = Ec({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Ec(e, t) {
      return ((e = hi(22, e, null, t)), (e.lanes = 0), e);
    }
    function Dc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = Tc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Oc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), na(e.return, t, n));
    }
    function kc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Ac(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = F.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        k(F, o),
        oc(e, t, r, n),
        (r = N ? ki : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Oc(e, n, t);
          else if (e.tag === 19) Oc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate),
              e !== null && go(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            kc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && go(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          kc(t, !0, n, null, a, r);
          break;
        case `together`:
          kc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function jc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Gl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ia(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = _i(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = _i(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Mc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && aa(e)))
        : !0;
    }
    function Nc(e, t, n) {
      switch (t.tag) {
        case 3:
          (ve(t, t.stateNode.containerInfo),
            ea(t, P, e.memoizedState.cache),
            Ji());
          break;
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          ve(t, t.stateNode.containerInfo);
          break;
        case 10:
          ea(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), fo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (uo(t), (e = jc(e, t, n)), e === null ? null : e.sibling)
                : wc(e, t, n)
              : (uo(t), (t.flags |= 128), null);
          uo(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (ia(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Ac(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            k(F, F.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), uc(e, t, n, t.pendingProps));
        case 24:
          ea(t, P, e.memoizedState.cache);
      }
      return jc(e, t, n);
    }
    function Pc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) V = !0;
        else {
          if (!Mc(e, n) && !(t.flags & 128)) return ((V = !1), Nc(e, t, n));
          V = !!(e.flags & 131072);
        }
      else ((V = !1), N && t.flags & 1048576 && Ii(t, ki, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Na(t.elementType)), (t.type = e), typeof e == `function`))
              gi(e)
                ? ((r = Ys(e, r)), (t.tag = 1), (t = yc(null, t, e, r, n)))
                : ((t.tag = 0), (t = _c(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  ((t.tag = 11), (t = sc(null, t, e, r, n)));
                  break a;
                } else if (a === E) {
                  ((t.tag = 14), (t = cc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = se(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return _c(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Ys(r, t.pendingProps)), yc(e, t, r, a, n));
        case 3:
          a: {
            if ((ve(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), qa(e, t), eo(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              ea(t, P, r),
              r !== o.cache && ra(t, [P], n, !0),
              $a(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = bc(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = Ti(Error(i(424)), t)), Xi(a), (t = bc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  M = cf(e.firstChild),
                    Bi = t,
                    N = !0,
                    Vi = null,
                    Hi = !0,
                    n = Wa(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Ji(), r === a)) {
                t = jc(e, t, n);
                break a;
              }
              oc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            gc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : N ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(ge.current).createElement(n)),
                  (r[A] = t),
                  (r[ht] = e),
                  Pd(r, n, e),
                  Dt(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            be(t),
            e === null &&
              N &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, ge.current)),
              (Bi = t),
              (Hi = !0),
              (a = M),
              Zd(t.type) ? ((lf = a), (M = cf(r.firstChild))) : (M = a)),
            oc(e, t, t.pendingProps.children, n),
            gc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              N &&
              ((a = r = M) &&
                ((r = tf(r, t.type, t.pendingProps, Hi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Bi = t),
                    (M = cf(r.firstChild)),
                    (Hi = !1),
                    (a = !0))),
              a || Wi(t)),
            be(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = Eo(e, t, ko, null, null, n)), (Qf._currentValue = a)),
            gc(e, t),
            oc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              N &&
              ((e = n = M) &&
                ((n = nf(n, t.pendingProps, Hi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Bi = t), (M = null), (e = !0))),
              e || Wi(t)),
            null
          );
        case 13:
          return wc(e, t, n);
        case 4:
          return (
            ve(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ua(t, null, r, n)) : oc(e, t, r, n),
            t.child
          );
        case 11:
          return sc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (oc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (oc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (oc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            ea(t, t.type, r.value),
            oc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            oa(t),
            (a = sa(a)),
            (r = r(a)),
            (t.flags |= 1),
            oc(e, t, r, n),
            t.child
          );
        case 14:
          return cc(e, t, t.type, t.pendingProps, n);
        case 15:
          return lc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Ac(e, t, n);
        case 31:
          return hc(e, t, n);
        case 22:
          return uc(e, t, n, t.pendingProps);
        case 24:
          return (
            oa(t),
            (r = sa(P)),
            e === null
              ? ((a = wa()),
                a === null &&
                  ((a = K),
                  (o = pa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ka(t),
                ea(t, P, a))
              : ((e.lanes & n) !== 0 && (qa(e, t), eo(t, null, null, n), $a()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    ea(t, P, r),
                    r !== a.cache && ra(t, [P], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    ea(t, P, r))),
            oc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Fc(e) {
      e.flags |= 4;
    }
    function Ic(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((Pa = Aa), Oa);
      } else e.flags &= -16777217;
    }
    function Lc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (wu()) e.flags |= 8192;
        else throw ((Pa = Aa), Oa);
    }
    function Rc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : rt()), (e.lanes |= t), (Yl |= t)));
    }
    function zc(e, t) {
      if (!N)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function H(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Bc(e, t, n) {
      var r = t.pendingProps;
      switch ((Ri(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (H(t), null);
        case 1:
          return (H(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ta(P),
            ye(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (qi(t)
                ? Fc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Yi())),
            H(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Fc(t),
                o === null ? (H(t), Ic(t, a, null, r, n)) : (H(t), Lc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (H(t), (t.flags &= -16777217))
                  : (Fc(t), H(t), Lc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Fc(t),
                  H(t),
                  Ic(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (xe(t),
            (n = ge.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Fc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (H(t), null);
            }
            ((e = me.current),
              qi(t) ? Gi(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), Fc(t)));
          }
          return (H(t), null);
        case 5:
          if ((xe(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Fc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (H(t), null);
            }
            if (((o = me.current), qi(t))) Gi(t, o);
            else {
              var s = Bd(ge.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[A] = t), (o[ht] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Fc(t);
            }
          }
          return (
            H(t),
            Ic(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Fc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = ge.current), qi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Bi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[A] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Wi(t, !0));
            } else
              ((e = Bd(e).createTextNode(r)), (e[A] = t), (t.stateNode = e));
          }
          return (H(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = qi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[A] = t;
              } else
                (Ji(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (H(t), (e = !1));
            } else
              ((n = Yi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (ho(t), t) : (ho(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (H(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = qi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[A] = t;
              } else
                (Ji(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (H(t), (a = !1));
            } else
              ((a = Yi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (ho(t), t) : (ho(t), null);
          }
          return (
            ho(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Rc(t, t.updateQueue),
                H(t),
                null)
          );
        case 4:
          return (
            ye(),
            e === null && Sd(t.stateNode.containerInfo),
            H(t),
            null
          );
        case 10:
          return (ta(t.type), H(t), null);
        case 19:
          if ((pe(F), (r = t.memoizedState), r === null)) return (H(t), null);
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) zc(r, !1);
            else {
              if (X !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = go(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        zc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Rc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (vi(n, e), (n = n.sibling));
                    return (
                      k(F, (F.current & 1) | 2),
                      N && Fi(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Pe() > tu &&
                ((t.flags |= 128), (a = !0), zc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = go(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Rc(t, e),
                  zc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !N)
                )
                  return (H(t), null);
              } else
                2 * Pe() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), zc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (H(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Pe()),
              (e.sibling = null),
              (n = F.current),
              k(F, a ? (n & 1) | 2 : n & 1),
              N && Fi(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            ho(t),
            so(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (H(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : H(t),
            (n = t.updateQueue),
            n !== null && Rc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && pe(Ca),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ta(P),
            H(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Vc(e, t) {
      switch ((Ri(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            ta(P),
            ye(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (xe(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((ho(t), t.alternate === null)) throw Error(i(340));
            Ji();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (ho(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Ji();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (pe(F), null);
        case 4:
          return (ye(), null);
        case 10:
          return (ta(t.type), null);
        case 22:
        case 23:
          return (
            ho(t),
            so(),
            e !== null && pe(Ca),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (ta(P), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Hc(e, t) {
      switch ((Ri(t), t.tag)) {
        case 3:
          (ta(P), ye());
          break;
        case 26:
        case 27:
        case 5:
          xe(t);
          break;
        case 4:
          ye();
          break;
        case 31:
          t.memoizedState !== null && ho(t);
          break;
        case 13:
          ho(t);
          break;
        case 19:
          pe(F);
          break;
        case 10:
          ta(t.type);
          break;
        case 22:
        case 23:
          (ho(t), so(), e !== null && pe(Ca));
          break;
        case 24:
          ta(P);
      }
    }
    function Uc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Wc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Gc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          no(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Kc(e, t, n) {
      ((n.props = Ys(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function qc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Jc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Yc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Xc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[ht] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Zc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      );
    }
    function Qc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Zc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = cn)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for ($c(e, t, n), e = e.sibling; e !== null;)
          ($c(e, t, n), (e = e.sibling));
    }
    function el(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (el(e, t, n), e = e.sibling; e !== null;)
          (el(e, t, n), (e = e.sibling));
    }
    function tl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[A] = e), (t[ht] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var nl = !1,
      U = !1,
      rl = !1,
      il = typeof WeakSet == `function` ? WeakSet : Set,
      al = null;
    function ol(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Pr(e)), Fr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        zd = { focusedElem: e, selectionRange: n }, sp = !1, al = t;
        al !== null;
      )
        if (((t = al), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (al = e));
        else
          for (; al !== null;) {
            switch (((t = al), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Ys(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (al = e));
              break;
            }
            al = t.return;
          }
    }
    function sl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (xl(e, n), r & 4 && Uc(5, n));
          break;
        case 1:
          if ((xl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Ys(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          (r & 64 && Gc(n), r & 512 && qc(n, n.return));
          break;
        case 3:
          if ((xl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              no(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && tl(n);
        case 26:
        case 5:
          (xl(e, n), t === null && r & 4 && Yc(n), r & 512 && qc(n, n.return));
          break;
        case 12:
          xl(e, n);
          break;
        case 31:
          (xl(e, n), r & 4 && fl(e, n));
          break;
        case 13:
          (xl(e, n),
            r & 4 && pl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || nl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || U), (i = nl));
            var a = U;
            ((nl = r),
              (U = t) && !a ? Cl(e, n, (n.subtreeFlags & 8772) != 0) : xl(e, n),
              (nl = i),
              (U = a));
          }
          break;
        case 30:
          break;
        default:
          xl(e, n);
      }
    }
    function cl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), cl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && St(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var W = null,
      ll = !1;
    function ul(e, t, n) {
      for (n = n.child; n !== null;) (dl(e, t, n), (n = n.sibling));
    }
    function dl(e, t, n) {
      if (We && typeof We.onCommitFiberUnmount == `function`)
        try {
          We.onCommitFiberUnmount(Ue, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (U || Jc(n, t),
            ul(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          U || Jc(n, t);
          var r = W,
            i = ll;
          (Zd(n.type) && ((W = n.stateNode), (ll = !1)),
            ul(e, t, n),
            pf(n.stateNode),
            (W = r),
            (ll = i));
          break;
        case 5:
          U || Jc(n, t);
        case 6:
          if (
            ((r = W),
            (i = ll),
            (W = null),
            ul(e, t, n),
            (W = r),
            (ll = i),
            W !== null)
          )
            if (ll)
              try {
                (W.nodeType === 9
                  ? W.body
                  : W.nodeName === `HTML`
                    ? W.ownerDocument.body
                    : W
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                W.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          W !== null &&
            (ll
              ? ((e = W),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(W, n.stateNode));
          break;
        case 4:
          ((r = W),
            (i = ll),
            (W = n.stateNode.containerInfo),
            (ll = !0),
            ul(e, t, n),
            (W = r),
            (ll = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Wc(2, n, t), U || Wc(4, n, t), ul(e, t, n));
          break;
        case 1:
          (U ||
            (Jc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Kc(n, t, r)),
            ul(e, t, n));
          break;
        case 21:
          ul(e, t, n);
          break;
        case 22:
          ((U = (r = U) || n.memoizedState !== null), ul(e, t, n), (U = r));
          break;
        default:
          ul(e, t, n);
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function ml(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new il()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new il()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function hl(e, t) {
      var n = ml(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function gl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((W = c.stateNode), (ll = !1));
                  break a;
                }
                break;
              case 5:
                ((W = c.stateNode), (ll = !1));
                break a;
              case 3:
              case 4:
                ((W = c.stateNode.containerInfo), (ll = !0));
                break a;
            }
            c = c.return;
          }
          if (W === null) throw Error(i(160));
          (dl(o, s, a),
            (W = null),
            (ll = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (vl(t, e), (t = t.sibling));
    }
    var _l = null;
    function vl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (gl(t, e),
            yl(e),
            r & 4 && (Wc(3, e, e.return), Uc(3, e), Wc(5, e, e.return)));
          break;
        case 1:
          (gl(t, e),
            yl(e),
            r & 512 && (U || n === null || Jc(n, n.return)),
            r & 64 &&
              nl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = _l;
          if (
            (gl(t, e),
            yl(e),
            r & 512 && (U || n === null || Jc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[xt] ||
                            o[A] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Pd(o, r, n),
                          (o[A] = e),
                          Dt(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Vf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[A] = e), Dt(o), (r = o));
                  }
                  e.stateNode = r;
                } else Hf(a, e.type, e.stateNode);
              else e.stateNode = If(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Xc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Hf(a, e.type, e.stateNode)
                    : If(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (gl(t, e),
            yl(e),
            r & 512 && (U || n === null || Jc(n, n.return)),
            n !== null && r & 4 && Xc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (gl(t, e),
            yl(e),
            r & 512 && (U || n === null || Jc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              $t(a, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Xc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (rl = !0));
          break;
        case 6:
          if ((gl(t, e), yl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (a = _l),
            (_l = gf(t.containerInfo)),
            gl(t, e),
            (_l = a),
            yl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          rl && ((rl = !1), bl(e));
          break;
        case 4:
          ((r = _l),
            (_l = gf(e.stateNode.containerInfo)),
            gl(t, e),
            yl(e),
            (_l = r));
          break;
        case 12:
          (gl(t, e), yl(e));
          break;
        case 31:
          (gl(t, e),
            yl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 13:
          (gl(t, e),
            yl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              ($l = Pe()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = nl,
            d = U;
          if (
            ((nl = u || a),
            (U = d || l),
            gl(t, e),
            (U = d),
            (nl = u),
            yl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || nl || U || Sl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), hl(e, n))));
          break;
        case 19:
          (gl(t, e),
            yl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (gl(t, e), yl(e));
      }
    }
    function yl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Zc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              el(e, Qc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && ($t(o, ``), (n.flags &= -33)), el(e, Qc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              $c(e, Qc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function bl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (bl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function xl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (sl(e, t.alternate, t), (t = t.sibling));
    }
    function Sl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Wc(4, t, t.return), Sl(t));
            break;
          case 1:
            Jc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Kc(t, t.return, n),
              Sl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (Jc(t, t.return), Sl(t));
            break;
          case 22:
            t.memoizedState === null && Sl(t);
            break;
          case 30:
            Sl(t);
            break;
          default:
            Sl(t);
        }
        e = e.sibling;
      }
    }
    function Cl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Cl(i, a, n), Uc(4, a));
            break;
          case 1:
            if (
              (Cl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    to(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Gc(a), qc(a, a.return));
            break;
          case 27:
            tl(a);
          case 26:
          case 5:
            (Cl(i, a, n), n && r === null && o & 4 && Yc(a), qc(a, a.return));
            break;
          case 12:
            Cl(i, a, n);
            break;
          case 31:
            (Cl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 13:
            (Cl(i, a, n), n && o & 4 && pl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Cl(i, a, n), qc(a, a.return));
            break;
          case 30:
            break;
          default:
            Cl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function wl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ma(n)));
    }
    function Tl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ma(e)));
    }
    function El(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) (Dl(e, t, n, r), (t = t.sibling));
    }
    function Dl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (El(e, t, n, r), i & 2048 && Uc(9, t));
          break;
        case 1:
          El(e, t, n, r);
          break;
        case 3:
          (El(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ma(e))));
          break;
        case 12:
          if (i & 2048) {
            (El(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else El(e, t, n, r);
          break;
        case 31:
          El(e, t, n, r);
          break;
        case 13:
          El(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? El(e, t, n, r)
                : ((a._visibility |= 2),
                  Ol(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? El(e, t, n, r)
                : kl(e, t),
            i & 2048 && wl(o, t));
          break;
        case 24:
          (El(e, t, n, r), i & 2048 && Tl(t.alternate, t));
          break;
        default:
          El(e, t, n, r);
      }
    }
    function Ol(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Ol(a, o, s, c, i), Uc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Ol(a, o, s, c, i))
              : u._visibility & 2
                ? Ol(a, o, s, c, i)
                : kl(a, o),
              i && l & 2048 && wl(o.alternate, o));
            break;
          case 24:
            (Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o));
            break;
          default:
            Ol(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function kl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (kl(n, r), i & 2048 && wl(r.alternate, r));
              break;
            case 24:
              (kl(n, r), i & 2048 && Tl(r.alternate, r));
              break;
            default:
              kl(n, r);
          }
          t = t.sibling;
        }
    }
    var Al = 8192;
    function jl(e, t, n) {
      if (e.subtreeFlags & Al)
        for (e = e.child; e !== null;) (Ml(e, t, n), (e = e.sibling));
    }
    function Ml(e, t, n) {
      switch (e.tag) {
        case 26:
          (jl(e, t, n),
            e.flags & Al &&
              e.memoizedState !== null &&
              Gf(n, _l, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          jl(e, t, n);
          break;
        case 3:
        case 4:
          var r = _l;
          ((_l = gf(e.stateNode.containerInfo)), jl(e, t, n), (_l = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Al), (Al = 16777216), jl(e, t, n), (Al = r))
              : jl(e, t, n));
          break;
        default:
          jl(e, t, n);
      }
    }
    function Nl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Pl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Fl(e), (e = e.sibling));
    }
    function Fl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Pl(e), e.flags & 2048 && Wc(9, e, e.return));
          break;
        case 3:
          Pl(e);
          break;
        case 12:
          Pl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Il(e))
            : Pl(e);
          break;
        default:
          Pl(e);
      }
    }
    function Il(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Wc(8, t, t.return), Il(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Il(t)));
            break;
          default:
            Il(t);
        }
        e = e.sibling;
      }
    }
    function Ll(e, t) {
      for (; al !== null;) {
        var n = al;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Wc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ma(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (al = r));
        else
          a: for (n = e; al !== null;) {
            r = al;
            var i = r.sibling,
              a = r.return;
            if ((cl(r), r === n)) {
              al = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (al = i));
              break a;
            }
            al = a;
          }
      }
    }
    var Rl = {
        getCacheForType: function (e) {
          var t = sa(P),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return sa(P).controller.signal;
        },
      },
      zl = typeof WeakMap == `function` ? WeakMap : Map,
      G = 0,
      K = null,
      q = null,
      J = 0,
      Y = 0,
      Bl = null,
      Vl = !1,
      Hl = !1,
      Ul = !1,
      Wl = 0,
      X = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return G & 2 && J !== 0 ? J & -J : D.T === null ? ft() : dd();
    }
    function mu() {
      if (Jl === 0)
        if (!(J & 536870912) || N) {
          var e = Ze;
          ((Ze <<= 1), !(Ze & 3932160) && (Ze = 262144), (Jl = e));
        } else Jl = 536870912;
      return ((e = co.current), e !== null && (e.flags |= 32), Jl);
    }
    function hu(e, t, n) {
      (((e === K && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, J, Jl, !1)),
        at(e, n),
        (!(G & 2) || e !== K) &&
          (e === K && (!(G & 2) && (Kl |= n), X === 4 && yu(e, J, Jl, !1)),
          rd(e)));
    }
    function gu(e, t, n) {
      if (G & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || tt(e, t),
        a = r ? Au(e, t) : Ou(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Hl && !r && yu(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !vu(n))) {
            ((a = Ou(e, t, !1)), (o = !1));
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = Xl;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)
                ) {
                  if (Ul && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Kl |= o), (a = 4));
                    break a;
                  }
                  ((o = Zl),
                    (Zl = a),
                    o !== null &&
                      (Zl === null ? (Zl = o) : Zl.push.apply(Zl, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Su(e, 0), yu(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                yu(r, t, Jl, !Vl);
                break a;
              case 2:
                Zl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = $l + 300 - Pe()), 10 < a)) {
              if ((yu(r, t, Jl, !Vl), et(r, 0, !0) !== 0)) break a;
              ((su = t),
                (r.timeoutHandle = Kd(
                  _u.bind(
                    null,
                    r,
                    n,
                    Zl,
                    nu,
                    Ql,
                    t,
                    Jl,
                    Kl,
                    Yl,
                    Vl,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: cn,
        }),
          Ml(t, a, d));
        var m =
          (a & 62914560) === a
            ? $l - Pe()
            : (a & 4194048) === a
              ? eu - Pe()
              : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((su = a),
            (e.cancelPendingCommit = m(
              Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            yu(e, a, o, !l));
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!kr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      ((t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Ke(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && st(e, n, t);
    }
    function bu() {
      return G & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (q !== null) {
        if (Y === 0) var e = q.return;
        else ((e = q), ($i = Qi = null), Mo(e), (La = null), (Ra = 0), (e = q));
        for (; e !== null;) (Hc(e.alternate, e), (e = e.return));
        q = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (K = e),
        (q = n = _i(e.current, null)),
        (J = t),
        (Y = 0),
        (Bl = null),
        (Vl = !1),
        (Hl = tt(e, t)),
        (Ul = !1),
        (Yl = Jl = ql = Kl = Gl = X = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Ke(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Wl = t), si(), n);
    }
    function Cu(e, t) {
      ((I = null),
        (D.H = Vs),
        t === Da || t === ka
          ? ((t = Fa()), (Y = 3))
          : t === Oa
            ? ((t = Fa()), (Y = 4))
            : (Y =
                t === ac
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (Bl = t),
        q === null && ((X = 1), $s(e, Ti(t, e.current))));
    }
    function wu() {
      var e = co.current;
      return e === null
        ? !0
        : (J & 4194048) === J
          ? lo === null
          : (J & 62914560) === J || J & 536870912
            ? e === lo
            : !1;
    }
    function Tu() {
      var e = D.H;
      return ((D.H = Vs), e === null ? Vs : e);
    }
    function Eu() {
      var e = D.A;
      return ((D.A = Rl), e);
    }
    function Du() {
      ((X = 4),
        Vl || ((J & 4194048) !== J && co.current !== null) || (Hl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) ||
          K === null ||
          yu(K, J, Jl, !1));
    }
    function Ou(e, t, n) {
      var r = G;
      G |= 2;
      var i = Tu(),
        a = Eu();
      ((K !== e || J !== t) && ((nu = null), Su(e, t)), (t = !1));
      var o = X;
      a: do
        try {
          if (Y !== 0 && q !== null) {
            var s = q,
              c = Bl;
            switch (Y) {
              case 8:
                (xu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                co.current === null && (t = !0);
                var l = Y;
                if (((Y = 0), (Bl = null), Pu(e, s, c, l), n && Hl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = Y), (Y = 0), (Bl = null), Pu(e, s, c, l));
            }
          }
          (ku(), (o = X));
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        ($i = Qi = null),
        (G = r),
        (D.H = i),
        (D.A = a),
        q === null && ((K = null), (J = 0), si()),
        o
      );
    }
    function ku() {
      for (; q !== null;) Mu(q);
    }
    function Au(e, t) {
      var n = G;
      G |= 2;
      var r = Tu(),
        a = Eu();
      K !== e || J !== t
        ? ((nu = null), (tu = Pe() + 500), Su(e, t))
        : (Hl = tt(e, t));
      a: do
        try {
          if (Y !== 0 && q !== null) {
            t = q;
            var o = Bl;
            b: switch (Y) {
              case 1:
                ((Y = 0), (Bl = null), Pu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ja(o)) {
                  ((Y = 0), (Bl = null), Nu(t));
                  break;
                }
                ((t = function () {
                  ((Y !== 2 && Y !== 9) || K !== e || (Y = 7), rd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                Y = 7;
                break a;
              case 4:
                Y = 5;
                break a;
              case 7:
                ja(o)
                  ? ((Y = 0), (Bl = null), Nu(t))
                  : ((Y = 0), (Bl = null), Pu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (q.tag) {
                  case 26:
                    s = q.memoizedState;
                  case 5:
                  case 27:
                    var c = q;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((Y = 0), (Bl = null));
                      var l = c.sibling;
                      if (l !== null) q = l;
                      else {
                        var u = c.return;
                        u === null ? (q = null) : ((q = u), Fu(u));
                      }
                      break b;
                    }
                }
                ((Y = 0), (Bl = null), Pu(e, t, o, 5));
                break;
              case 6:
                ((Y = 0), (Bl = null), Pu(e, t, o, 6));
                break;
              case 8:
                (xu(), (X = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        ($i = Qi = null),
        (D.H = r),
        (D.A = a),
        (G = n),
        q === null ? ((K = null), (J = 0), si(), X) : 0
      );
    }
    function ju() {
      for (; q !== null && !Me();) Mu(q);
    }
    function Mu(e) {
      var t = Pc(e.alternate, e, Wl);
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (q = t));
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = vc(n, t, t.pendingProps, t.type, void 0, J);
          break;
        case 11:
          t = vc(n, t, t.pendingProps, t.type.render, t.ref, J);
          break;
        case 5:
          Mo(t);
        default:
          (Hc(n, t), (t = q = vi(t, Wl)), (t = Pc(n, t, Wl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (q = t));
    }
    function Pu(e, t, n, r) {
      (($i = Qi = null), Mo(t), (La = null), (Ra = 0));
      var i = t.return;
      try {
        if (ic(e, i, t, n, J)) {
          ((X = 1), $s(e, Ti(n, e.current)), (q = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((q = i), t);
        ((X = 1), $s(e, Ti(n, e.current)), (q = null));
        return;
      }
      t.flags & 32768
        ? (N || r === 1
            ? (e = !0)
            : Hl || J & 536870912
              ? (e = !1)
              : ((Vl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = co.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Vl);
          return;
        }
        e = t.return;
        var n = Bc(t.alternate, t, Wl);
        if (n !== null) {
          q = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          q = t;
          return;
        }
        q = t = e;
      } while (t !== null);
      X === 0 && (X = 5);
    }
    function Iu(e, t) {
      do {
        var n = Vc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (q = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          q = e;
          return;
        }
        q = e = n;
      } while (e !== null);
      ((X = 6), (q = null));
    }
    function Lu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (G & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= oi),
          ot(e, n, o, s, c, l),
          e === K && ((q = K = null), (J = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = o),
          (lu = a),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(Re, function () {
                return (Uu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = D.T), (D.T = null), (a = O.p), (O.p = 2), (s = G), (G |= 4));
          try {
            ol(e, t, n);
          } finally {
            ((G = s), (O.p = a), (D.T = r));
          }
        }
        ((iu = 1), Ru(), zu(), Bu());
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = D.T), (D.T = null));
          var r = O.p;
          O.p = 2;
          var i = G;
          G |= 4;
          try {
            vl(t, e);
            var a = zd,
              o = Pr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Nr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Fr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Mr(s, h),
                      v = Mr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((G = i), (O.p = r), (D.T = n));
          }
        }
        ((e.current = t), (iu = 2));
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = D.T), (D.T = null));
          var r = O.p;
          O.p = 2;
          var i = G;
          G |= 4;
          try {
            sl(e, t.alternate, t);
          } finally {
            ((G = i), (O.p = r), (D.T = n));
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        ((iu = 0), Ne());
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          dt(n),
          (t = t.stateNode),
          We && typeof We.onCommitFiberRoot == `function`)
        )
          try {
            We.onCommitFiberRoot(Ue, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = D.T), (i = O.p), (O.p = 2), (D.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((D.T = t), (O.p = i));
          }
        }
        (su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === fu
              ? du++
              : ((du = 0), (fu = e))
            : (du = 0),
          id(0, !1));
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ma(t)));
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu());
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = dt(su),
        r = D.T,
        a = O.p;
      try {
        ((O.p = 32 > n ? 32 : n), (D.T = null), (n = lu), (lu = null));
        var o = au,
          s = su;
        if (((iu = 0), (ou = au = null), (su = 0), G & 6)) throw Error(i(331));
        var c = G;
        if (
          ((G |= 4),
          Fl(o.current),
          Dl(o, o.current, s, n),
          (G = c),
          id(0, !1),
          We && typeof We.onPostCommitFiberRoot == `function`)
        )
          try {
            We.onPostCommitFiberRoot(Ue, o);
          } catch {}
        return !0;
      } finally {
        ((O.p = a), (D.T = r), Vu(e, t));
      }
    }
    function Wu(e, t, n) {
      ((t = Ti(n, t)),
        (t = tc(e.stateNode, t, 2)),
        (e = Ya(e, t, 2)),
        e !== null && (at(e, 2), rd(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (ru === null || !ru.has(r)))
            ) {
              ((e = Ti(n, e)),
                (n = nc(2)),
                (r = Ya(t, n, 2)),
                r !== null && (rc(n, r, t, e), at(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new zl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Ul = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        K === e &&
          (J & n) === n &&
          (X === 4 || (X === 3 && (J & 62914560) === J && 300 > Pe() - $l)
            ? !(G & 2) && Su(e, 0)
            : (ql |= n),
          Yl === J && (Yl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = rt()), (e = ui(e, t)), e !== null && (at(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return Ae(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu &&
        e.next === null &&
        (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ke(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = J),
                  (a = et(
                    r,
                    r === K ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || tt(r, a) || ((n = !0), ld(r, a)));
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Pe(), n = null, r = Zu; r !== null;) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (Zu = i) : (n.next = i),
            i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ke(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = K),
        (n = J),
        (n = et(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (Y === 2 || Y === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && je(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || tt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && je(r), dt(n))) {
          case 2:
          case 8:
            n = Le;
            break;
          case 32:
            n = Re;
            break;
          case 268435456:
            n = Be;
            break;
          default:
            n = Re;
        }
        return (
          (r = cd.bind(null, e)),
          (n = Ae(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && je(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = J;
      return (
        (r = et(
          e,
          e === K ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Pe()),
            e.callbackNode != null && e.callbackNode === n
              ? cd.bind(null, e)
              : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        G & 6 ? Ae(Ie, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = _a;
        (e === 0 && ((e = Xe), (Xe <<= 1), !(Xe & 261888) && (Xe = 256)),
          (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : sn(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[ht] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[ht] || null)
            ? fd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new kn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Ds(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < ti.length; hd++) {
      var gd = ti[hd];
      ni(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (ni(qr, `onAnimationEnd`),
      ni(Jr, `onAnimationIteration`),
      ni(Yr, `onAnimationStart`),
      ni(`dblclick`, `onDoubleClick`),
      ni(`focusin`, `onFocus`),
      ni(`focusout`, `onBlur`),
      ni(Xr, `onTransitionRun`),
      ni(Zr, `onTransitionStart`),
      ni(Qr, `onTransitionCancel`),
      ni($r, `onTransitionEnd`),
      jt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      jt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      jt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      jt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      At(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      At(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      At(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      At(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      At(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      At(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(_d),
      );
    function yd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ri(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ri(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[_t];
      n === void 0 && (n = t[_t] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          Ot.forEach(function (t) {
            t !== `selectionchange` &&
              (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !vn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = Ct(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      hn(function () {
        var r = a,
          i = un(n),
          s = [];
        a: {
          var c = ei.get(e);
          if (c !== void 0) {
            var l = kn,
              u = e;
            switch (e) {
              case `keypress`:
                if (wn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = qn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Rn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Rn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Rn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = In;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Ln;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Yn;
                break;
              case qr:
              case Jr:
              case Yr:
                l = zn;
                break;
              case $r:
                l = Xn;
                break;
              case `scroll`:
              case `scrollend`:
                l = jn;
                break;
              case `wheel`:
                l = Zn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Bn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Jn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Qn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = gn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== ln &&
                (u = n.relatedTarget || n.fromElement) &&
                (Ct(u) || u[gt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Ct(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = In),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Jn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : Tt(l)),
                (h = u == null ? c : Tt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                Ct(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g;) ((p = d(p)), h--);
                  for (; 0 < g - h;) ((m = d(m)), g--);
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Od(s, c, l, d, !1),
                u !== null && f !== null && Od(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? Tt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = vr;
            else if (fr(c))
              if (yr) v = Or;
              else {
                v = Er;
                var y = Tr;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && rn(r.elementType) && (v = vr)
                  : (v = Dr));
            if ((v &&= v(e, r))) {
              pr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Yt(c, `number`, c.value));
          }
          switch (((y = r ? Tt(r) : window), e)) {
            case `focusin`:
              (fr(y) || y.contentEditable === `true`) &&
                ((Lr = y), (Rr = r), (zr = null));
              break;
            case `focusout`:
              zr = Rr = Lr = null;
              break;
            case `mousedown`:
              Br = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Br = !1), Vr(s, n, i));
              break;
            case `selectionchange`:
              if (Ir) break;
            case `keydown`:
            case `keyup`:
              Vr(s, n, i);
          }
          var b;
          if (er)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            cr
              ? or(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (rr &&
              n.locale !== `ko` &&
              (cr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && cr && (b = Cn())
                : ((bn = i),
                  (xn = `value` in bn ? bn.value : bn.textContent),
                  (cr = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Vn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = sr(n)), b !== null && (x.data = b)))),
            (b = nr ? lr(e, n) : ur(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Vn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            md(s, e, r, n, i));
        }
        yd(s, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = gn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = gn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = gn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = gn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || $t(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              $t(e, `` + r);
          break;
        case `className`:
          Lt(e, `class`, r);
          break;
        case `tabIndex`:
          Lt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Lt(e, n, r);
          break;
        case `style`:
          nn(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Lt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = sn(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = sn(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = cn);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = sn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), It(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Rt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Rt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          It(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = an.get(n) || n), It(e, n, r));
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          nn(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? $t(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && $t(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = cn);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!kt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[ht] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : It(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Jt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Xt(e, !!r, n, !0) : Xt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          Qt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (rn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          qt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Xt(e, !!n, n ? [] : ``, !1) : Xt(e, !!n, t, !0))
              : Xt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          Zt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (rn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Wd
          ? !1
          : ((Wd = e), !0)
        : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[xt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), St(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[xt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      St(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = O.d;
    O.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = wt(e);
      t !== null && t.tag === 5 && t.type === `form` ? ks(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Kt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              Dt(t),
              r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Kt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Kt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Kt(n.imageSizes) + `"]`))
          : (i += `[href="` + Kt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            Dt(t),
            r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Kt(r) +
            `"][href="` +
            Kt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)),
            Pd(r, `link`, e),
            Dt(r),
            n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = Et(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (Dt(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = Et(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            Dt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = Et(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            Dt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var a = (a = ge.current) ? gf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = Et(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = Et(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = Et(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Af(e) {
      return `href="` + Kt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          Dt(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Kt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Kt(n.href) + `"]`);
            if (r) return ((t.instance = r), Dt(r), r);
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Dt(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Af(n.href);
            var o = e.querySelector(jf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Dt(o), o);
            ((r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Dt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), Dt(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = h({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Dt(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[xt] ||
            a[A] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Dt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            Dt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: le,
      _currentValue2: le,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = it(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = it(0)),
        (this.hiddenUpdates = it(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = hi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = pa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ka(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = pi), e) : pi;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ja(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ya(e, r, t)),
        n !== null && (hu(n, e, t), Xa(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ui(e, 67108864);
        (t !== null && hu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = ut(t);
        var n = ui(e, t);
        (n !== null && hu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        ((O.p = 2), up(e, t, n, r));
      } finally {
        ((O.p = a), (D.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        ((O.p = 8), up(e, t, n, r));
      } finally {
        ((O.p = a), (D.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null;) {
            var a = wt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = $e(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Ke(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(G & 6) && ((tu = Pe() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ui(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = un(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = Ct(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Fe()) {
            case Ie:
              return 2;
            case Le:
              return 8;
            case Re:
            case ze:
              return 32;
            case Be:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = wt(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ep(e) {
      var t = Ct(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                pt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                pt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((ln = r), n.target.dispatchEvent(r), (ln = null));
        } else return ((t = wt(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = wt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ds(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null);)
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[ht] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[ht] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), bu(), (t[gt] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = ft();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.5`) throw Error(i(527, Lp, `19.2.5`));
    O.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.5`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: D,
      reconcilerVersion: `19.2.5`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((Ue = zp.inject(Rp)), (We = zp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Xs,
        s = Zs,
        c = Qs;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp)),
        (e[gt] = t.current),
        Sd(e),
        new Fp(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = c(u(), 1),
  v = c(g(), 1),
  y = `modulepreload`,
  b = function (e) {
    return `/` + e;
  },
  x = {},
  S = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      r = o(
        t.map((t) => {
          if (((t = b(t, n)), t in x)) return;
          x[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : y),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  C = `popstate`;
function w(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function ee(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return re(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : ie(t);
  }
  return oe(t, n, null, e);
}
function T(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function E(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function te() {
  return Math.random().toString(36).substring(2, 10);
}
function ne(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.unstable_mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function re(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? ae(t) : t),
    state: n,
    key: (t && t.key) || r || te(),
    unstable_mask: i,
  };
}
function ie({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function ae(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function oe(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = `PUSH`;
    let r = w(e) ? e : re(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = ne(r, l),
      f = h.createHref(r.unstable_mask || r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = w(e) ? e : re(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = ne(r, l),
      d = h.createHref(r.unstable_mask || r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    return se(e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(C, d),
        (c = e),
        () => {
          (i.removeEventListener(C, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function se(e, t = !1) {
  let n = `http://localhost`;
  (typeof window < `u` &&
    (n =
      window.location.origin === `null`
        ? window.location.href
        : window.location.origin),
    T(n, `No window.location.(origin|href) available to create URL`));
  let r = typeof e == `string` ? e : ie(e);
  return (
    (r = r.replace(/ $/, `%20`)),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r, n)
  );
}
function ce(e, t, n = `/`) {
  return D(e, t, n, !1);
}
function D(e, t, n, r) {
  let i = we((typeof t == `string` ? ae(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = le(e);
  de(a);
  let o = null;
  for (let e = 0; o == null && e < a.length; ++e) {
    let t = Ce(i);
    o = be(a[e], t, r);
  }
  return o;
}
function O(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle,
  };
}
function le(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      (T(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (c.relativePath = c.relativePath.slice(r.length)));
    }
    let l = Ne([r, c.relativePath]),
      u = n.concat(c);
    (e.children &&
      e.children.length > 0 &&
      (T(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
      ),
      le(e.children, t, u, l, o)),
      !(e.path == null && !e.index) &&
        t.push({ path: l, score: ve(l, e.index), routesMeta: u }));
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of ue(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function ue(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = ue(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function de(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? ye(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var fe = /^:[\w-]+$/,
  pe = 3,
  k = 2,
  me = 1,
  he = 10,
  ge = -2,
  _e = (e) => e === `*`;
function ve(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(_e) && (r += ge),
    t && (r += k),
    n
      .filter((e) => !_e(e))
      .reduce((e, t) => e + (fe.test(t) ? pe : t === `` ? me : he), r)
  );
}
function ye(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function be(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = xe(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l,
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = xe(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: Ne([a, u.pathname]),
        pathnameBase: Fe(Ne([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = Ne([a, u.pathnameBase])));
  }
  return o;
}
function xe(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Se(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let i = s[r];
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)),
        e
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function Se(e, t = !1, n = !0) {
  E(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function Ce(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      E(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function we(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var Te = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Ee(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? ae(e) : e,
    a;
  return (
    n
      ? ((n = Me(n)),
        (a = n.startsWith(`/`) ? De(n.substring(1), `/`) : De(n, t)))
      : (a = t),
    { pathname: a, search: Ie(r), hash: Le(i) }
  );
}
function De(e, t) {
  let n = Pe(t).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function Oe(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ke(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Ae(e) {
  let t = ke(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function je(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = ae(e))
    : ((i = { ...e }),
      T(
        !i.pathname || !i.pathname.includes(`?`),
        Oe(`?`, `pathname`, `search`, i),
      ),
      T(
        !i.pathname || !i.pathname.includes(`#`),
        Oe(`#`, `pathname`, `hash`, i),
      ),
      T(!i.search || !i.search.includes(`#`), Oe(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`;) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = Ee(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var Me = (e) => e.replace(/\/\/+/g, `/`),
  Ne = (e) => Me(e.join(`/`)),
  Pe = (e) => e.replace(/\/+$/, ``),
  Fe = (e) => Pe(e).replace(/^\/*/, `/`),
  Ie = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Le = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  Re = class {
    constructor(e, t, n, r = !1) {
      ((this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
function ze(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function Be(e) {
  return Ne(e.map((e) => e.route.path).filter(Boolean)) || `/`;
}
var Ve =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
function He(e, t) {
  let n = e;
  if (typeof n != `string` || !Te.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    i = !1;
  if (Ve)
    try {
      let e = new URL(window.location.href),
        r = n.startsWith(`//`) ? new URL(e.protocol + n) : new URL(n),
        a = we(r.pathname, t);
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0);
    } catch {
      E(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: i, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Ue = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(Ue);
var We = [`GET`, ...Ue];
new Set(We);
var Ge = _.createContext(null);
Ge.displayName = `DataRouter`;
var Ke = _.createContext(null);
Ke.displayName = `DataRouterState`;
var qe = _.createContext(!1);
function Je() {
  return _.useContext(qe);
}
var Ye = _.createContext({ isTransitioning: !1 });
Ye.displayName = `ViewTransition`;
var Xe = _.createContext(new Map());
Xe.displayName = `Fetchers`;
var Ze = _.createContext(null);
Ze.displayName = `Await`;
var Qe = _.createContext(null);
Qe.displayName = `Navigation`;
var $e = _.createContext(null);
$e.displayName = `Location`;
var et = _.createContext({ outlet: null, matches: [], isDataRoute: !1 });
et.displayName = `Route`;
var tt = _.createContext(null);
tt.displayName = `RouteError`;
var nt = `REACT_ROUTER_ERROR`,
  rt = `REDIRECT`,
  it = `ROUTE_ERROR_RESPONSE`;
function at(e) {
  if (e.startsWith(`${nt}:${rt}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function ot(e) {
  if (e.startsWith(`${nt}:${it}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new Re(t.status, t.statusText, t.data);
    } catch {}
}
function st(e, { relative: t } = {}) {
  T(ct(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = _.useContext(Qe),
    { hash: i, pathname: a, search: o } = A(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : Ne([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function ct() {
  return _.useContext($e) != null;
}
function lt() {
  return (
    T(
      ct(),
      `useLocation() may be used only in the context of a <Router> component.`,
    ),
    _.useContext($e).location
  );
}
var ut = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function dt(e) {
  _.useContext(Qe).static || _.useLayoutEffect(e);
}
function ft() {
  let { isDataRoute: e } = _.useContext(et);
  return e ? Nt() : pt();
}
function pt() {
  T(
    ct(),
    `useNavigate() may be used only in the context of a <Router> component.`,
  );
  let e = _.useContext(Ge),
    { basename: t, navigator: n } = _.useContext(Qe),
    { matches: r } = _.useContext(et),
    { pathname: i } = lt(),
    a = JSON.stringify(Ae(r)),
    o = _.useRef(!1);
  return (
    dt(() => {
      o.current = !0;
    }),
    _.useCallback(
      (r, s = {}) => {
        if ((E(o.current, ut), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = je(r, JSON.parse(a), i, s.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : Ne([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s));
      },
      [t, n, a, i, e],
    )
  );
}
_.createContext(null);
function mt() {
  let { matches: e } = _.useContext(et);
  return e[e.length - 1]?.params ?? {};
}
function A(e, { relative: t } = {}) {
  let { matches: n } = _.useContext(et),
    { pathname: r } = lt(),
    i = JSON.stringify(Ae(n));
  return _.useMemo(() => je(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function ht(e, t) {
  return gt(e, t);
}
function gt(e, t, n) {
  T(
    ct(),
    `useRoutes() may be used only in the context of a <Router> component.`,
  );
  let { navigator: r } = _.useContext(Qe),
    { matches: i } = _.useContext(et),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route;
  {
    let e = (l && l.path) || ``;
    Ft(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
    );
  }
  let u = lt(),
    d;
  if (t) {
    let e = typeof t == `string` ? ae(t) : t;
    (T(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
    ),
      (d = e));
  } else d = u;
  let f = d.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m = ce(e, { pathname: p });
  (E(
    l || m != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `,
  ),
    E(
      m == null ||
        m[m.length - 1].route.element !== void 0 ||
        m[m.length - 1].route.Component !== void 0 ||
        m[m.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let h = Ct(
    m &&
      m.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: Ne([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : Ne([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`),
                      ).pathname
                    : e.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
  );
  return t && h
    ? _.createElement(
        $e.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              unstable_mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        h,
      )
    : h;
}
function _t() {
  let e = Mt(),
    t = ze(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = _.createElement(
      _.Fragment,
      null,
      _.createElement(`p`, null, `💿 Hey developer 👋`),
      _.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        _.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        _.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`,
      ),
    )),
    _.createElement(
      _.Fragment,
      null,
      _.createElement(`h2`, null, `Unexpected Application Error!`),
      _.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? _.createElement(`pre`, { style: i }, n) : null,
      o,
    )
  );
}
var vt = _.createElement(_t, null),
  yt = class extends _.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e,
          );
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = ot(e.digest);
        t && (e = t);
      }
      let t =
        e === void 0
          ? this.props.children
          : _.createElement(
              et.Provider,
              { value: this.props.routeContext },
              _.createElement(tt.Provider, {
                value: e,
                children: this.props.component,
              }),
            );
      return this.context ? _.createElement(xt, { error: e }, t) : t;
    }
  };
yt.contextType = qe;
var bt = new WeakMap();
function xt({ children: e, error: t }) {
  let { basename: n } = _.useContext(Qe);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = at(t.digest);
    if (e) {
      let r = bt.get(t);
      if (r) throw r;
      let i = He(e.location, n);
      if (Ve && !bt.get(t))
        if (i.isExternal || e.reloadDocument)
          window.location.href = i.absoluteURL || i.to;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, {
              replace: e.replace,
            }),
          );
          throw (bt.set(t, n), n);
        }
      return _.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return e;
}
function St({ routeContext: e, match: t, children: n }) {
  let r = _.useContext(Ge);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    _.createElement(et.Provider, { value: e }, n)
  );
}
function Ct(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    (T(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`,
    ),
      (i = i.slice(0, Math.min(i.length, e + 1))));
  }
  let o = !1,
    s = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          (n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]));
          break;
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              unstable_pattern: Be(r.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null;
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || vt),
      o &&
        (s < 0 && c === 0
          ? (Ft(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t;
        return (
          (t = u
            ? f
            : d
              ? p
              : n.route.Component
                ? _.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          _.createElement(St, {
            match: n,
            routeContext: { outlet: e, matches: m, isDataRoute: r != null },
            children: t,
          })
        );
      };
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? _.createElement(yt, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: l,
        })
      : h();
  }, null);
}
function wt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tt(e) {
  let t = _.useContext(Ge);
  return (T(t, wt(e)), t);
}
function Et(e) {
  let t = _.useContext(Ke);
  return (T(t, wt(e)), t);
}
function Dt(e) {
  let t = _.useContext(et);
  return (T(t, wt(e)), t);
}
function Ot(e) {
  let t = Dt(e),
    n = t.matches[t.matches.length - 1];
  return (
    T(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function kt() {
  return Ot(`useRouteId`);
}
function At() {
  return Et(`useNavigation`).navigation;
}
function jt() {
  let { matches: e, loaderData: t } = Et(`useMatches`);
  return _.useMemo(() => e.map((e) => O(e, t)), [e, t]);
}
function Mt() {
  let e = _.useContext(tt),
    t = Et(`useRouteError`),
    n = Ot(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function Nt() {
  let { router: e } = Tt(`useNavigate`),
    t = Ot(`useNavigate`),
    n = _.useRef(!1);
  return (
    dt(() => {
      n.current = !0;
    }),
    _.useCallback(
      async (r, i = {}) => {
        (E(n.current, ut),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })));
      },
      [e, t],
    )
  );
}
var Pt = {};
function Ft(e, t, n) {
  !t && !Pt[e] && ((Pt[e] = !0), E(!1, n));
}
_.memo(It);
function It({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
  return gt(e, void 0, { state: n, isStatic: r, onError: i, future: t });
}
function Lt({ to: e, replace: t, state: n, relative: r }) {
  T(
    ct(),
    `<Navigate> may be used only in the context of a <Router> component.`,
  );
  let { static: i } = _.useContext(Qe);
  E(
    !i,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`,
  );
  let { matches: a } = _.useContext(et),
    { pathname: o } = lt(),
    s = ft(),
    c = je(e, Ae(a), o, r === `path`),
    l = JSON.stringify(c);
  return (
    _.useEffect(() => {
      s(JSON.parse(l), { replace: t, state: n, relative: r });
    }, [s, l, r, t, n]),
    null
  );
}
function Rt(e) {
  T(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`,
  );
}
function zt({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  unstable_useTransitions: o,
}) {
  T(
    !ct(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
  );
  let s = e.replace(/^\/*/, `/`),
    c = _.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        unstable_useTransitions: o,
        future: {},
      }),
      [s, i, a, o],
    );
  typeof n == `string` && (n = ae(n));
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      unstable_mask: m,
    } = n,
    h = _.useMemo(() => {
      let e = we(l, s);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              unstable_mask: m,
            },
            navigationType: r,
          };
    }, [s, l, u, d, f, p, r, m]);
  return (
    E(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    h == null
      ? null
      : _.createElement(
          Qe.Provider,
          { value: c },
          _.createElement($e.Provider, { children: t, value: h }),
        )
  );
}
function Bt({ children: e, location: t }) {
  return ht(Vt(e), t);
}
_.Component;
function Vt(e, t = []) {
  let n = [];
  return (
    _.Children.forEach(e, (e, r) => {
      if (!_.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === _.Fragment) {
        n.push.apply(n, Vt(e.props.children, i));
        return;
      }
      (T(
        e.type === Rt,
        `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        T(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`,
        ));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = Vt(e.props.children, i)), n.push(a));
    }),
    n
  );
}
var Ht = `get`,
  Ut = `application/x-www-form-urlencoded`;
function Wt(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function Gt(e) {
  return Wt(e) && e.tagName.toLowerCase() === `button`;
}
function Kt(e) {
  return Wt(e) && e.tagName.toLowerCase() === `form`;
}
function qt(e) {
  return Wt(e) && e.tagName.toLowerCase() === `input`;
}
function Jt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Yt(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !Jt(e);
}
var Xt = null;
function Zt() {
  if (Xt === null)
    try {
      (new FormData(document.createElement(`form`), 0), (Xt = !1));
    } catch {
      Xt = !0;
    }
  return Xt;
}
var Qt = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function $t(e) {
  return e != null && !Qt.has(e)
    ? (E(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ut}"`,
      ),
      null)
    : e;
}
function en(e, t) {
  let n, r, i, a, o;
  if (Kt(e)) {
    let o = e.getAttribute(`action`);
    ((r = o ? we(o, t) : null),
      (n = e.getAttribute(`method`) || Ht),
      (i = $t(e.getAttribute(`enctype`)) || Ut),
      (a = new FormData(e)));
  } else if (Gt(e) || (qt(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`,
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? we(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Ht),
      (i =
        $t(e.getAttribute(`formenctype`)) ||
        $t(o.getAttribute(`enctype`)) ||
        Ut),
      (a = new FormData(o, e)),
      !Zt())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
      } else t && a.append(t, r);
    }
  } else if (Wt(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
    );
  else ((n = Ht), (r = null), (i = Ut), (o = e));
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var tn = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  nn = /[&><\u2028\u2029]/g;
function rn(e) {
  return e.replace(nn, (e) => tn[e]);
}
function an(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function on(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u`
            ? `server://singlefetch/`
            : window.location.origin,
        )
      : e;
  return (
    n
      ? i.pathname.endsWith(`/`)
        ? (i.pathname = `${i.pathname}_.${r}`)
        : (i.pathname = `${i.pathname}.${r}`)
      : i.pathname === `/`
        ? (i.pathname = `_root.${r}`)
        : t && we(i.pathname, t) === `/`
          ? (i.pathname = `${Pe(t)}/_root.${r}`)
          : (i.pathname = `${Pe(i.pathname)}.${r}`),
    i
  );
}
async function sn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await S(() => import(e.module), []);
    return ((t[e.id] = n), n);
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function cn(e) {
  return e != null && typeof e.page == `string`;
}
function ln(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`;
}
async function un(e, t, n) {
  return hn(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await sn(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(ln)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` },
      ),
  );
}
function dn(e, t, n, r, i, a) {
  let o = (e, t) => (n[t] ? e.route.id !== n[t].route.id : !0),
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id];
          if (!c || !c.hasLoader) return !1;
          if (o(t, a) || s(t, a)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof r == `boolean`) return r;
          }
          return !0;
        })
      : [];
}
function fn(e, t, { includeHydrateFallback: n } = {}) {
  return pn(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1),
  );
}
function pn(e) {
  return [...new Set(e)];
}
function mn(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function hn(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !cn(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(mn(i));
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
  }, []);
}
function gn() {
  let e = _.useContext(Ge);
  return (
    an(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`,
    ),
    e
  );
}
function _n() {
  let e = _.useContext(Ke);
  return (
    an(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`,
    ),
    e
  );
}
var vn = _.createContext(void 0);
vn.displayName = `FrameworkContext`;
function yn() {
  let e = _.useContext(vn);
  return (
    an(e, `You must render this element inside a <HydratedRouter> element`),
    e
  );
}
function bn(e, t) {
  let n = _.useContext(vn),
    [r, i] = _.useState(!1),
    [a, o] = _.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = _.useRef(null);
  (_.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 },
      );
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    _.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]));
  let p = () => {
      i(!0);
    },
    m = () => {
      (i(!1), o(!1));
    };
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: xn(s, p),
            onBlur: xn(c, m),
            onMouseEnter: xn(l, p),
            onMouseLeave: xn(u, m),
            onTouchStart: xn(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}];
}
function xn(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function Sn({ page: e, ...t }) {
  let n = Je(),
    { router: r } = gn(),
    i = _.useMemo(() => ce(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return i
    ? n
      ? _.createElement(wn, { page: e, matches: i, ...t })
      : _.createElement(Tn, { page: e, matches: i, ...t })
    : null;
}
function Cn(e) {
  let { manifest: t, routeModules: n } = yn(),
    [r, i] = _.useState([]);
  return (
    _.useEffect(() => {
      let r = !1;
      return (
        un(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function wn({ page: e, matches: t, ...n }) {
  let r = lt(),
    { future: i } = yn(),
    { basename: a } = gn(),
    o = _.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = on(e, a, i.unstable_trailingSlashAwareDataRequests, `rsc`),
        o = !1,
        s = [];
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (o = !0)
          : s.push(e.route.id);
      return (
        o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      );
    }, [a, i.unstable_trailingSlashAwareDataRequests, e, r, t]);
  return _.createElement(
    _.Fragment,
    null,
    o.map((e) =>
      _.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
  );
}
function Tn({ page: e, matches: t, ...n }) {
  let r = lt(),
    { future: i, manifest: a, routeModules: o } = yn(),
    { basename: s } = gn(),
    { loaderData: c, matches: l } = _n(),
    u = _.useMemo(() => dn(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = _.useMemo(() => dn(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = _.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        l = !1;
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id];
          !t ||
            !t.hasLoader ||
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let d = on(e, s, i.unstable_trailingSlashAwareDataRequests, `data`);
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`),
          ),
        [d.pathname + d.search]
      );
    }, [s, i.unstable_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = _.useMemo(() => fn(d, a), [d, a]),
    m = Cn(d);
  return _.createElement(
    _.Fragment,
    null,
    f.map((e) =>
      _.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
    p.map((e) =>
      _.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n }),
    ),
    m.map(({ key: e, link: t }) =>
      _.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function En(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
_.Component;
var Dn =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  Dn && (window.__reactRouterVersion = `7.14.2`);
} catch {}
function On({
  basename: e,
  children: t,
  unstable_useTransitions: n,
  window: r,
}) {
  let i = _.useRef();
  i.current ??= ee({ window: r, v5Compat: !0 });
  let a = i.current,
    [o, s] = _.useState({ action: a.action, location: a.location }),
    c = _.useCallback(
      (e) => {
        n === !1 ? s(e) : _.startTransition(() => s(e));
      },
      [n],
    );
  return (
    _.useLayoutEffect(() => a.listen(c), [a, c]),
    _.createElement(zt, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      unstable_useTransitions: n,
    })
  );
}
function kn({
  basename: e,
  children: t,
  history: n,
  unstable_useTransitions: r,
}) {
  let [i, a] = _.useState({ action: n.action, location: n.location }),
    o = _.useCallback(
      (e) => {
        r === !1 ? a(e) : _.startTransition(() => a(e));
      },
      [r],
    );
  return (
    _.useLayoutEffect(() => n.listen(o), [n, o]),
    _.createElement(zt, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: n,
      unstable_useTransitions: r,
    })
  );
}
kn.displayName = `unstable_HistoryRouter`;
var An = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  jn = _.forwardRef(function (
    {
      onClick: e,
      discover: t = `render`,
      prefetch: n = `none`,
      relative: r,
      reloadDocument: i,
      replace: a,
      unstable_mask: o,
      state: s,
      target: c,
      to: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) {
    let {
        basename: h,
        navigator: g,
        unstable_useTransitions: v,
      } = _.useContext(Qe),
      y = typeof l == `string` && An.test(l),
      b = He(l, h);
    l = b.to;
    let x = st(l, { relative: r }),
      S = lt(),
      C = null;
    if (o) {
      let e = je(o, [], S.unstable_mask ? S.unstable_mask.pathname : `/`, !0);
      (h !== `/` && (e.pathname = e.pathname === `/` ? h : Ne([h, e.pathname])),
        (C = g.createHref(e)));
    }
    let [w, ee, T] = bn(n, p),
      E = Rn(l, {
        replace: a,
        unstable_mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        unstable_defaultShouldRevalidate: f,
        unstable_useTransitions: v,
      });
    function te(t) {
      (e && e(t), t.defaultPrevented || E(t));
    }
    let ne = !(b.isExternal || i),
      re = _.createElement(`a`, {
        ...p,
        ...T,
        href: (ne ? C : void 0) || b.absoluteURL || x,
        onClick: ne ? te : e,
        ref: En(m, ee),
        target: c,
        "data-discover": !y && t === `render` ? `true` : void 0,
      });
    return w && !y
      ? _.createElement(_.Fragment, null, re, _.createElement(Sn, { page: x }))
      : re;
  });
jn.displayName = `Link`;
var Mn = _.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l,
) {
  let u = A(a, { relative: c.relative }),
    d = lt(),
    f = _.useContext(Ke),
    { navigator: p, basename: m } = _.useContext(Qe),
    h = f != null && Jn(u) && o === !0,
    g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    v = d.pathname,
    y =
      f && f.navigation && f.navigation.location
        ? f.navigation.location.pathname
        : null;
  (t ||
    ((v = v.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (g = g.toLowerCase())),
    y && m && (y = we(y, m) || y));
  let b = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
    x = v === g || (!r && v.startsWith(g) && v.charAt(b) === `/`),
    S =
      y != null &&
      (y === g || (!r && y.startsWith(g) && y.charAt(g.length) === `/`)),
    C = { isActive: x, isPending: S, isTransitioning: h },
    w = x ? e : void 0,
    ee;
  ee =
    typeof n == `function`
      ? n(C)
      : [
          n,
          x ? `active` : null,
          S ? `pending` : null,
          h ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let T = typeof i == `function` ? i(C) : i;
  return _.createElement(
    jn,
    {
      ...c,
      "aria-current": w,
      className: ee,
      ref: l,
      style: T,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(C) : s,
  );
});
Mn.displayName = `NavLink`;
var Nn = _.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = Ht,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) => {
    let { unstable_useTransitions: h } = _.useContext(Qe),
      g = Vn(),
      v = Hn(s, { relative: l }),
      y = o.toLowerCase() === `get` ? `get` : `post`,
      b = typeof s == `string` && An.test(s);
    return _.createElement(`form`, {
      ref: m,
      method: y,
      action: v,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o,
              p = () =>
                g(r || e.currentTarget, {
                  fetcherKey: t,
                  method: s,
                  navigate: n,
                  replace: i,
                  state: a,
                  relative: l,
                  preventScrollReset: u,
                  viewTransition: d,
                  unstable_defaultShouldRevalidate: f,
                });
            h && n !== !1 ? _.startTransition(() => p()) : p();
          },
      ...p,
      "data-discover": !b && e === `render` ? `true` : void 0,
    });
  },
);
Nn.displayName = `Form`;
function Pn({ getKey: e, storageKey: t, ...n }) {
  let r = _.useContext(vn),
    { basename: i } = _.useContext(Qe),
    a = lt(),
    o = jt();
  Kn({ getKey: e, storageKey: t });
  let s = _.useMemo(() => {
    if (!r || !e) return null;
    let t = Gn(a, o, i, e);
    return t === a.key ? null : t;
  }, []);
  if (!r || r.isSpaMode) return null;
  let c = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: e }, ``);
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ];
      typeof n == `number` && window.scrollTo(0, n);
    } catch (t) {
      (console.error(t), sessionStorage.removeItem(e));
    }
  }).toString();
  return _.createElement(`script`, {
    ...n,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${c})(${rn(JSON.stringify(t || Un))}, ${rn(JSON.stringify(s))})`,
    },
  });
}
Pn.displayName = `ScrollRestoration`;
function Fn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function In(e) {
  let t = _.useContext(Ge);
  return (T(t, Fn(e)), t);
}
function Ln(e) {
  let t = _.useContext(Ke);
  return (T(t, Fn(e)), t);
}
function Rn(
  e,
  {
    target: t,
    replace: n,
    unstable_mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    unstable_defaultShouldRevalidate: c,
    unstable_useTransitions: l,
  } = {},
) {
  let u = ft(),
    d = lt(),
    f = A(e, { relative: o });
  return _.useCallback(
    (p) => {
      if (Yt(p, t)) {
        p.preventDefault();
        let t = n === void 0 ? ie(d) === ie(f) : n,
          m = () =>
            u(e, {
              replace: t,
              unstable_mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              unstable_defaultShouldRevalidate: c,
            });
        l ? _.startTransition(() => m()) : m();
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l],
  );
}
var zn = 0,
  Bn = () => `__${String(++zn)}__`;
function Vn() {
  let { router: e } = In(`useSubmit`),
    { basename: t } = _.useContext(Qe),
    n = kt(),
    r = e.fetch,
    i = e.navigate;
  return _.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = en(e, t);
      a.navigate === !1
        ? await r(a.fetcherKey || Bn(), n, a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync,
          })
        : await i(a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
    },
    [r, i, t, n],
  );
}
function Hn(e, { relative: t } = {}) {
  let { basename: n } = _.useContext(Qe),
    r = _.useContext(et);
  T(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...A(e || `.`, { relative: t }) },
    o = lt();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      (e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : Ne([n, a.pathname])),
    ie(a)
  );
}
var Un = `react-router-scroll-positions`,
  Wn = {};
function Gn(e, t, n, r) {
  let i = null;
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: we(e.pathname, n) || e.pathname },
        t,
      )),
    (i ??= e.key),
    i
  );
}
function Kn({ getKey: e, storageKey: t } = {}) {
  let { router: n } = In(`useScrollRestoration`),
    { restoreScrollPosition: r, preventScrollReset: i } =
      Ln(`useScrollRestoration`),
    { basename: a } = _.useContext(Qe),
    o = lt(),
    s = jt(),
    c = At();
  (_.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`;
      }
    ),
    [],
  ),
    qn(
      _.useCallback(() => {
        if (c.state === `idle`) {
          let t = Gn(o, s, a, e);
          Wn[t] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || Un, JSON.stringify(Wn));
        } catch (e) {
          E(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`,
          );
        }
        window.history.scrollRestoration = `auto`;
      }, [c.state, e, a, o, s, t]),
    ),
    typeof document < `u` &&
      (_.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || Un);
          e && (Wn = JSON.parse(e));
        } catch {}
      }, [t]),
      _.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          Wn,
          () => window.scrollY,
          e ? (t, n) => Gn(t, n, a, e) : void 0,
        );
        return () => t && t();
      }, [n, a, e]),
      _.useLayoutEffect(() => {
        if (r !== !1) {
          if (typeof r == `number`) {
            window.scrollTo(0, r);
            return;
          }
          try {
            if (o.hash) {
              let e = document.getElementById(
                decodeURIComponent(o.hash.slice(1)),
              );
              if (e) {
                e.scrollIntoView();
                return;
              }
            }
          } catch {
            E(
              !1,
              `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`,
            );
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [o, r, i])));
}
function qn(e, t) {
  let { capture: n } = t || {};
  _.useEffect(() => {
    let t = n == null ? void 0 : { capture: n };
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t);
      }
    );
  }, [e, n]);
}
function Jn(e, { relative: t } = {}) {
  let n = _.useContext(Ye);
  T(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = In(`useViewTransitionState`),
    i = A(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = we(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = we(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return xe(i.pathname, o) != null || xe(i.pathname, a) != null;
}
var Yn = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3clinearGradient%20id='python-original-a'%20gradientUnits='userSpaceOnUse'%20x1='70.252'%20y1='1237.476'%20x2='170.659'%20y2='1151.089'%20gradientTransform='matrix(.563%200%200%20-.568%20-29.215%20707.817)'%3e%3cstop%20offset='0'%20stop-color='%235A9FD4'/%3e%3cstop%20offset='1'%20stop-color='%23306998'/%3e%3c/linearGradient%3e%3clinearGradient%20id='python-original-b'%20gradientUnits='userSpaceOnUse'%20x1='209.474'%20y1='1098.811'%20x2='173.62'%20y2='1149.537'%20gradientTransform='matrix(.563%200%200%20-.568%20-29.215%20707.817)'%3e%3cstop%20offset='0'%20stop-color='%23FFD43B'/%3e%3cstop%20offset='1'%20stop-color='%23FFE873'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23python-original-a)'%20d='M63.391%201.988c-4.222.02-8.252.379-11.8%201.007-10.45%201.846-12.346%205.71-12.346%2012.837v9.411h24.693v3.137H29.977c-7.176%200-13.46%204.313-15.426%2012.521-2.268%209.405-2.368%2015.275%200%2025.096%201.755%207.311%205.947%2012.519%2013.124%2012.519h8.491V67.234c0-8.151%207.051-15.34%2015.426-15.34h24.665c6.866%200%2012.346-5.654%2012.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037%209.557c2.55%200%204.634%202.117%204.634%204.721%200%202.593-2.083%204.69-4.634%204.69-2.56%200-4.633-2.097-4.633-4.69-.001-2.604%202.073-4.721%204.633-4.721z'%20transform='translate(0%2010.26)'/%3e%3cpath%20fill='url(%23python-original-b)'%20d='M91.682%2028.38v10.966c0%208.5-7.208%2015.655-15.426%2015.655H51.591c-6.756%200-12.346%205.783-12.346%2012.549v23.515c0%206.691%205.818%2010.628%2012.346%2012.547%207.816%202.297%2015.312%202.713%2024.665%200%206.216-1.801%2012.346-5.423%2012.346-12.547v-9.412H63.938v-3.138h37.012c7.176%200%209.852-5.005%2012.348-12.519%202.578-7.735%202.467-15.174%200-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809%2087.927c2.561%200%204.634%202.097%204.634%204.692%200%202.602-2.074%204.719-4.634%204.719-2.55%200-4.633-2.117-4.633-4.719%200-2.595%202.083-4.692%204.633-4.692z'%20transform='translate(0%2010.26)'/%3e%3cradialGradient%20id='python-original-c'%20cx='1825.678'%20cy='444.45'%20r='26.743'%20gradientTransform='matrix(0%20-.24%20-1.055%200%20532.979%20557.576)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23B8B8B8'%20stop-opacity='.498'/%3e%3cstop%20offset='1'%20stop-color='%237F7F7F'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cpath%20opacity='.444'%20fill='url(%23python-original-c)'%20d='M97.309%20119.597c0%203.543-14.816%206.416-33.091%206.416-18.276%200-33.092-2.873-33.092-6.416%200-3.544%2014.815-6.417%2033.092-6.417%2018.275%200%2033.091%202.872%2033.091%206.417z'/%3e%3c/svg%3e`,
  Xn = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23130754'%20d='M46.236%207.567h13.99v29.047h-13.99Zm0%2059.668h13.99V96.28h-13.99Z'/%3e%3cpath%20fill='%23ffca00'%20d='M46.236%2045.092h13.99v13.705h-13.99Z'/%3e%3cpath%20fill='%23130754'%20d='M23.763%2031.446h13.989V128h-13.99ZM68.245%2091.2h13.99v29.046h-13.99Zm0-59.72h13.99v29.047h-13.99Z'/%3e%3cpath%20fill='%23e70488'%20d='M68.245%2069.011h13.99v13.705h-13.99Z'/%3e%3cpath%20fill='%23130754'%20d='M90.248%200h13.99v96.554h-13.99Z'/%3e%3c/svg%3e`,
  Zn = `/assets/matplotlib.svg`,
  Qn = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M109.766%207.281a7.691%207.691%200%2001-1.09%204.282%207.583%207.583%200%2001-3.262%202.949%207.49%207.49%200%2001-4.34.62%207.525%207.525%200%2001-3.953-1.913A7.642%207.642%200%200195.137%205a7.606%207.606%200%20012.629-3.531%207.509%207.509%200%20014.136-1.461%207.51%207.51%200%20015.422%201.996%207.627%207.627%200%20012.438%205.273zm0%200'%20fill='%23767677'/%3e%3cpath%20d='M65.758%2096.79c-20.098%200-37.649-7.364-46.766-18.267a49.95%2049.95%200%200018.102%2024.254%2049.251%2049.251%200%200028.676%209.215%2049.279%2049.279%200%200028.675-9.215%2049.917%2049.917%200%200018.094-24.254C103.406%2089.426%2085.855%2096.79%2065.758%2096.79zm0%200M65.75%2025.883c20.098%200%2037.652%207.367%2046.766%2018.265a49.95%2049.95%200%2000-18.102-24.253%2049.27%2049.27%200%2000-28.672-9.22%2049.27%2049.27%200%2000-28.672%209.22A49.909%2049.909%200%200018.97%2044.148C28.102%2033.27%2045.652%2025.883%2065.75%2025.883zm0%200'%20fill='%23f37726'/%3e%3cpath%20d='M38.164%20117.984a9.671%209.671%200%2001-1.371%205.399%209.5%209.5%200%2001-9.59%204.504%209.405%209.405%200%2001-4.98-2.418%209.671%209.671%200%2001-2.809-4.797%209.73%209.73%200%2001.313-5.567%209.624%209.624%200%20013.328-4.453%209.466%209.466%200%200112.043.688%209.63%209.63%200%20013.066%206.648zm0%200'%20fill='%23989798'/%3e%3cpath%20d='M21.285%2023.418a5.53%205.53%200%2001-3.14-.816%205.627%205.627%200%2001-2.618-5.672%205.612%205.612%200%20011.407-2.95%205.593%205.593%200%20012.789-1.664%205.46%205.46%200%20013.238.184%205.539%205.539%200%20012.586%201.969%205.66%205.66%200%2001-.399%207.129%205.557%205.557%200%2001-3.867%201.82zm0%200'%20fill='%236f7070'/%3e%3c/svg%3e`,
  $n = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cg%20fill='%2361DAFB'%3e%3ccircle%20cx='64'%20cy='64'%20r='11.4'/%3e%3cpath%20d='M107.3%2045.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4%201.1-4.8%201.5-7.1%202.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7%200-15.9%205.2-24.9%2013.9-9-8.7-17.9-13.9-24.9-13.9-2.4%200-4.5.5-6.4%201.6-6.4%203.7-8.7%2013-6.6%2026.1.4%202.3.9%204.7%201.5%207.1-2.4.7-4.7%201.4-6.9%202.3C8.2%2050%201.4%2056.6%201.4%2064s6.9%2014%2019.3%2018.8c2.2.8%204.5%201.6%206.9%202.3-.6%202.4-1.1%204.8-1.5%207.1-2.1%2013.2.2%2022.5%206.6%2026.1%201.9%201.1%204%201.6%206.4%201.6%207.1%200%2016-5.2%2024.9-13.9%209%208.7%2017.9%2013.9%2024.9%2013.9%202.4%200%204.5-.5%206.4-1.6%206.4-3.7%208.7-13%206.6-26.1-.4-2.3-.9-4.7-1.5-7.1%202.4-.7%204.7-1.4%206.9-2.3%2012.5-4.8%2019.3-11.4%2019.3-18.8s-6.8-14-19.3-18.8zM92.5%2014.7c4.1%202.4%205.5%209.8%203.8%2020.3-.3%202.1-.8%204.3-1.4%206.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13%207.4-7.3%2014.9-12.3%2021-12.3%201.3%200%202.5.3%203.5.9zM81.3%2074c-1.8%203.2-3.9%206.4-6.1%209.6-3.7.3-7.4.4-11.2.4-3.9%200-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10%201.6-3.3%203.4-6.7%205.3-10%201.8-3.2%203.9-6.4%206.1-9.6%203.7-.3%207.4-.4%2011.2-.4%203.9%200%207.6.1%2011.2.4%202.2%203.2%204.2%206.4%206%209.6%201.9%203.3%203.7%206.7%205.3%2010-1.7%203.3-3.4%206.6-5.3%2010zm8.3-3.3c1.5%203.5%202.7%206.9%203.8%2010.3-3.4.8-7%201.4-10.8%201.9%201.2-1.9%202.5-3.9%203.6-6%201.2-2.1%202.3-4.2%203.4-6.2zM64%2097.8c-2.4-2.6-4.7-5.4-6.9-8.3%202.3.1%204.6.2%206.9.2%202.3%200%204.6-.1%206.9-.2-2.2%202.9-4.5%205.7-6.9%208.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9%201.1-3.3%202.3-6.8%203.8-10.3%201.1%202%202.2%204.1%203.4%206.1%201.2%202.2%202.4%204.1%203.6%206.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3%203.4-.8%207-1.4%2010.8-1.9-1.2%201.9-2.5%203.9-3.6%206-1.2%202.1-2.3%204.2-3.4%206.2zM64%2030.2c2.4%202.6%204.7%205.4%206.9%208.3-2.3-.1-4.6-.2-6.9-.2-2.3%200-4.6.1-6.9.2%202.2-2.9%204.5-5.7%206.9-8.3zm22.2%2021l-3.6-6c3.8.5%207.4%201.1%2010.8%201.9-1.1%203.3-2.3%206.8-3.8%2010.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7%2035c-1.7-10.5-.3-17.9%203.8-20.3%201-.6%202.2-.9%203.5-.9%206%200%2013.5%204.9%2021%2012.3-3.5%203.8-7%208.2-10.4%2013-5.8.5-11.3%201.4-16.5%202.5-.6-2.3-1-4.5-1.4-6.6zM7%2064c0-4.7%205.7-9.7%2015.7-13.4%202-.8%204.2-1.5%206.4-2.1%201.6%205%203.6%2010.3%206%2015.6-2.4%205.3-4.5%2010.5-6%2015.5C15.3%2075.6%207%2069.6%207%2064zm28.5%2049.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3%201.4-6.6%205.2%201.2%2010.7%202%2016.5%202.5%203.4%204.8%206.9%209.1%2010.4%2013-7.4%207.3-14.9%2012.3-21%2012.3-1.3%200-2.5-.3-3.5-.9zM96.3%2093c1.7%2010.5.3%2017.9-3.8%2020.3-1%20.6-2.2.9-3.5.9-6%200-13.5-4.9-21-12.3%203.5-3.8%207-8.2%2010.4-13%205.8-.5%2011.3-1.4%2016.5-2.5.6%202.3%201%204.5%201.4%206.6zm9-15.6c-2%20.8-4.2%201.5-6.4%202.1-1.6-5-3.6-10.3-6-15.6%202.4-5.3%204.5-10.5%206-15.5%2013.8%204%2022.1%2010%2022.1%2015.6%200%204.7-5.8%209.7-15.7%2013.4z'/%3e%3c/g%3e%3c/svg%3e`,
  er = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23F0DB4F'%20d='M1.408%201.408h125.184v125.185H1.408z'/%3e%3cpath%20fill='%23323330'%20d='M116.347%2096.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32%204.784-4.355%207.925-3.403%202.023.678%203.938%202.237%205.093%204.724%205.402-3.498%205.391-3.475%209.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902%202.748-8.877%205.235-5.926%206.724-4.236%2018.492%202.975%2023.335%207.104%205.332%2017.54%206.545%2018.873%2011.531%201.297%206.104-4.486%208.08-10.234%207.378-4.236-.881-6.592-3.034-9.139-6.949-4.688%202.713-4.688%202.713-9.508%205.485%201.143%202.499%202.344%203.63%204.26%205.795%209.068%209.198%2031.76%208.746%2035.83-5.176.165-.478%201.261-3.666.38-8.581zM69.462%2058.943H57.753l-.048%2030.272c0%206.438.333%2012.34-.714%2014.149-1.713%203.558-6.152%203.117-8.175%202.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52%205.83c1.583%203.249%203.915%206.069%206.902%207.901%204.462%202.678%2010.459%203.499%2016.731%202.059%204.082-1.189%207.604-3.652%209.448-7.401%202.666-4.915%202.094-10.864%202.07-17.444.06-10.735.001-21.468.001-32.237z'/%3e%3c/svg%3e`,
  tr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23fff'%20d='M22.67%2047h99.67v73.67H22.67z'/%3e%3cpath%20data-name='original'%20fill='%23007acc'%20d='M1.5%2063.91v62.5h125v-125H1.5zm100.73-5a15.56%2015.56%200%20017.82%204.5%2020.58%2020.58%200%20013%204c0%20.16-5.4%203.81-8.69%205.85-.12.08-.6-.44-1.13-1.23a7.09%207.09%200%2000-5.87-3.53c-3.79-.26-6.23%201.73-6.21%205a4.58%204.58%200%2000.54%202.34c.83%201.73%202.38%202.76%207.24%204.86%208.95%203.85%2012.78%206.39%2015.16%2010%202.66%204%203.25%2010.46%201.45%2015.24-2%205.2-6.9%208.73-13.83%209.9a38.32%2038.32%200%2001-9.52-.1%2023%2023%200%2001-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34%209.34%200%20011.15-.73L82%20101l3.59-2.08.75%201.11a16.78%2016.78%200%20004.74%204.54c4%202.1%209.46%201.81%2012.16-.62a5.43%205.43%200%2000.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48%2016.48%200%2001-3.43-6.25%2025%2025%200%2001-.22-8c1.33-6.23%206-10.58%2012.82-11.87a31.66%2031.66%200%20019.49.26zm-29.34%205.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19%2049.19%200%2001.12-5.17C29.08%2059%2039%2059%2051%2059h21.83z'/%3e%3c/svg%3e`,
  nr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3ccircle%20cx='64'%20cy='64'%20r='64'/%3e%3cpath%20fill='url(%23a)'%20d='M106.317%20112.014%2049.167%2038.4H38.4v51.179h8.614v-40.24l52.54%2067.884a64.216%2064.216%200%200%200%206.763-5.209z'/%3e%3cpath%20fill='url(%23b)'%20d='M81.778%2038.4h8.533v51.2h-8.533z'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='109'%20x2='144.5'%20y1='116.5'%20y2='160.5'%20gradientTransform='scale(.71111)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='121'%20x2='120.799'%20y1='54'%20y2='106.875'%20gradientTransform='scale(.71111)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23fff'/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  rr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='url(%23a)'%20d='M66.958.825a6.07%206.07%200%200%200-6.035%200L11.103%2029.76c-1.895%201.072-2.96%203.095-2.96%205.24v57.988c0%202.143%201.183%204.167%202.958%205.24l49.82%2028.934a6.07%206.07%200%200%200%206.036%200l49.82-28.935c1.894-1.072%202.958-3.096%202.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z'/%3e%3cpath%20fill='url(%23b)'%20d='M116.897%2029.76%2066.841.825A8.161%208.161%200%200%200%2065.302.23L9.21%2096.798a6.251%206.251%200%200%200%201.657%201.43l50.057%2028.934c1.42.833%203.076%201.072%204.615.595l52.66-96.925a3.702%203.702%200%200%200-1.302-1.072z'/%3e%3cpath%20fill='url(%23c)'%20d='M116.898%2098.225c1.42-.833%202.485-2.262%202.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104%2029.639l53.606%2098.355c.71-.12%201.54-.358%202.25-.715z'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='34.513'%20x2='27.157'%20y1='15.535'%20y2='30.448'%20gradientTransform='translate(-129.242%20-73.715)%20scale(6.18523)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%233F873F'/%3e%3cstop%20offset='.33'%20stop-color='%233F8B3D'/%3e%3cstop%20offset='.637'%20stop-color='%233E9638'/%3e%3cstop%20offset='.934'%20stop-color='%233DA92E'/%3e%3cstop%20offset='1'%20stop-color='%233DAE2B'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='30.009'%20x2='50.533'%20y1='23.359'%20y2='8.288'%20gradientTransform='translate(-129.242%20-73.715)%20scale(6.18523)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.138'%20stop-color='%233F873F'/%3e%3cstop%20offset='.402'%20stop-color='%2352A044'/%3e%3cstop%20offset='.713'%20stop-color='%2364B749'/%3e%3cstop%20offset='.908'%20stop-color='%236ABF4B'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='21.917'%20x2='40.555'%20y1='22.261'%20y2='22.261'%20gradientTransform='translate(-129.242%20-73.715)%20scale(6.18523)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='.092'%20stop-color='%236ABF4B'/%3e%3cstop%20offset='.287'%20stop-color='%2364B749'/%3e%3cstop%20offset='.598'%20stop-color='%2352A044'/%3e%3cstop%20offset='.862'%20stop-color='%233F873F'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  ir = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M126.67%2098.44c-4.56%201.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89%2076%2081.85%2085.2%2075.14%2094.77c-2.4%203.42-4.92%204.91-9.4%203.7l26.92-36.13L67.6%2029.71c4.31-.84%207.29-.41%209.93%203.45%205.83%208.52%2012.26%2016.63%2018.67%2025.21%206.45-8.55%2012.8-16.67%2018.8-25.11%202.41-3.42%205-4.72%209.33-3.46-3.28%204.35-6.49%208.63-9.72%2012.88-4.36%205.73-8.64%2011.53-13.16%2017.14-1.61%202-1.35%203.3.09%205.19C109.9%2076%20118.16%2087.1%20126.67%2098.44zM1.33%2061.74c.72-3.61%201.2-7.29%202.2-10.83%206-21.43%2030.6-30.34%2047.5-17.06C60.93%2041.64%2063.39%2052.62%2062.9%2065H7.1c-.84%2022.21%2015.15%2035.62%2035.53%2028.78%207.15-2.4%2011.36-8%2013.47-15%201.07-3.51%202.84-4.06%206.14-3.06-1.69%208.76-5.52%2016.08-13.52%2020.66-12%206.86-29.13%204.64-38.14-4.89C5.26%2085.89%203%2078.92%202%2071.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78%2011.02-26.43%2027.57z'/%3e%3c/svg%3e`,
  ar = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M64.004%2025.602c-17.067%200-27.73%208.53-32%2025.597%206.398-8.531%2013.867-11.73%2022.398-9.597%204.871%201.214%208.352%204.746%2012.207%208.66C72.883%2056.629%2080.145%2064%2096.004%2064c17.066%200%2027.73-8.531%2032-25.602-6.399%208.536-13.867%2011.735-22.399%209.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004%2064c-17.066%200-27.73%208.531-32%2025.602C6.402%2081.066%2013.87%2077.867%2022.402%2080c4.871%201.215%208.352%204.746%2012.207%208.66%206.274%206.367%2013.536%2013.738%2029.395%2013.738%2017.066%200%2027.73-8.53%2032-25.597-6.399%208.531-13.867%2011.73-22.399%209.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128%2071.371%2047.868%2064%2032.004%2064zm0%200'%20fill='%2338bdf8'/%3e%3c/svg%3e`,
  or = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cg%20color='%23000'%20font-weight='400'%20font-family='sans-serif'%3e%3cpath%20style='line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:%23000;solid-opacity:1'%20d='M16.219%2015.762a1.129%201.129%200%2000-1.076%201.399l24.394%2098.742a1.129%201.129%200%20001.879.544l73.386-70.59a1.129%201.129%200%2000-.47-1.899L16.55%2015.806a1.129%201.129%200%2000-.331-.044zm1.584%202.754l94.024%2027.07-70.566%2067.877-23.458-94.947z'%20overflow='visible'/%3e%3cpath%20style='line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:%23000;solid-opacity:1'%20d='M65.137%2029.84a1.129%201.129%200%2000-.807.315L27.654%2065.46a1.129%201.129%200%2000.471%201.898L76.984%2081.44a1.129%201.129%200%20001.409-1.355L66.21%2030.698a1.129%201.129%200%2000-1.073-.858zm-.651%203.3L75.734%2078.73l-45.104-13L64.486%2033.14z'%20overflow='visible'/%3e%3cpath%20style='line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:%23000;solid-opacity:1'%20d='M46.914%2047.313a1.129%201.129%200%2000-1.076%201.399l6.054%2024.531a1.129%201.129%200%20001.88.543l18.222-17.563a1.129%201.129%200%2000-.472-1.898l-24.277-6.968a1.129%201.129%200%2000-.331-.044zm1.583%202.751l20.522%205.89L53.614%2070.8l-5.117-20.736z'%20overflow='visible'/%3e%3cpath%20style='line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:%23000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:%23000;solid-opacity:1'%20d='M40.902%2022.809a1.129%201.129%200%2000-.807.316L21.873%2040.687a1.129%201.129%200%2000.472%201.898l24.273%206.969a1.129%201.129%200%20001.408-1.356l-6.051-24.53a1.129%201.129%200%2000-1.073-.86zm-.65%203.3l5.114%2020.736-20.517-5.89%2015.403-14.847zM89.453%2036.793a1.129%201.129%200%2000-.806.316L70.423%2054.67a1.129%201.129%200%2000.472%201.899l24.274%206.968a1.129%201.129%200%20001.408-1.356l-6.05-24.53a1.129%201.129%200%2000-1.074-.859zm-.65%203.3l5.114%2020.737L73.4%2054.94l15.403-14.846zM52.944%2071.864a1.129%201.129%200%2000-.74.315L33.982%2089.742a1.129%201.129%200%2000.472%201.898l24.278%206.968a1.129%201.129%200%20001.407-1.355l-6.055-24.531a1.129%201.129%200%2000-1.14-.858zm-.582%203.3l5.118%2020.737-20.522-5.89%2015.404-14.846z'%20overflow='visible'/%3e%3c/g%3e%3c/svg%3e`,
  sr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23E44D26'%20d='M19.037%20113.876L9.032%201.661h109.936l-10.016%20112.198-45.019%2012.48z'/%3e%3cpath%20fill='%23F16529'%20d='M64%20116.8l36.378-10.086%208.559-95.878H64z'/%3e%3cpath%20fill='%23EBEBEB'%20d='M64%2052.455H45.788L44.53%2038.361H64V24.599H29.489l.33%203.692%203.382%2037.927H64zm0%2035.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928%2021.609%2028.193%207.826.063-.017z'/%3e%3cpath%20fill='%23fff'%20d='M63.952%2052.455v13.763h16.947l-1.597%2017.849-15.35%204.143v14.319l28.215-7.82.207-2.325%203.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z'/%3e%3c/svg%3e`,
  cr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%231572B6'%20d='M18.814%20114.123L8.76%201.352h110.48l-10.064%20112.754-45.243%2012.543-45.119-12.526z'/%3e%3cpath%20fill='%2333A9DC'%20d='M64.001%20117.062l36.559-10.136%208.601-96.354h-45.16v106.49z'/%3e%3cpath%20fill='%23fff'%20d='M64.001%2051.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332%203.711-3.4%2038.114h-30.95V51.429z'/%3e%3cpath%20fill='%23EBEBEB'%20d='M64.083%2087.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937%2021.717%2028.331%207.863.063-.018v-14.39z'/%3e%3cpath%20fill='%23fff'%20d='M81.127%2064.675l-1.666%2018.522-15.426%204.164v14.39l28.354-7.858.208-2.337%202.406-26.881H81.127z'/%3e%3cpath%20fill='%23EBEBEB'%20d='M64.048%2023.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047%2027.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z'/%3e%3c/svg%3e`,
  lr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23a9bacd'%20d='M125%2050c-4-32-24-50-62-50C29%200%203%2024%203%2064c0%2039%2024%2064%2064%2064%2032%200%2055-19%2058-50H87c-2%2011-8%2020-20%2020-21%200-24-16-24-33%200-23%208-35%2022-35%2013%200%2020%207%2022%2020z'%20/%3e%3c/svg%3e`,
  ur = `data:image/svg+xml,%3csvg%20viewBox='0%200%20128%20128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2300599c'%20d='M118.766%2095.82c.89-1.543%201.441-3.28%201.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32%2031.94Zm0%200'/%3e%3cpath%20fill='%23004482'%20d='m68.36%20126.586%2046.933-27.094c1.352-.781%202.582-2.129%203.473-3.672l-55.32-31.94L8.12%2095.82c.89%201.543%202.121%202.89%203.473%203.672l46.933%2027.094c2.703%201.562%207.13%201.562%209.832%200Zm0%200'/%3e%3cpath%20fill='%23659ad2'%20d='M118.766%2031.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359%201.172c-2.703-1.563-7.129-1.563-9.832%200L11.594%2028.27C8.89%2029.828%206.68%2033.66%206.68%2036.78v54.196c0%201.562.55%203.3%201.441%204.843L63.445%2063.88Zm0%200'/%3e%3cpath%20fill='%23fff'%20d='M63.445%2026.035c-20.867%200-37.843%2016.977-37.843%2037.844s16.976%2037.844%2037.843%2037.844c13.465%200%2026.024-7.247%2032.77-18.91L79.84%2073.335c-3.38%205.84-9.66%209.465-16.395%209.465-10.433%200-18.922-8.488-18.922-18.922%200-10.434%208.49-18.922%2018.922-18.922%206.73%200%2013.017%203.629%2016.39%209.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91zM92.88%2057.57v4.207h-4.207v4.203h4.207v4.207h4.203V65.98h4.203v-4.203h-4.203V57.57H92.88zm15.766%200v4.207h-4.204v4.203h4.204v4.207h4.207V65.98h4.203v-4.203h-4.203V57.57h-4.207z'/%3e%3c/svg%3e`,
  dr = `/assets/postgresql.svg`,
  fr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='53.974'%20x2='94.163'%20y1='54.974'%20y2='71.829'%20gradientTransform='translate(29.387%2060.096)%20scale(1.1436)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23249361'/%3e%3cstop%20offset='1'%20stop-color='%233ecf8e'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='36.156'%20x2='54.484'%20y1='30.578'%20y2='65.081'%20gradientTransform='translate(29.387%2060.096)%20scale(1.1436)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20d='M102.24%20186.21c-3.267%204.117-9.904%201.862-9.977-3.397l-1.156-76.906h51.715c9.365%200%2014.587%2010.817%208.763%2018.149z'%20transform='translate(-27.722%20-60.338)'/%3e%3cpath%20fill='url(%23b)'%20fill-opacity='.2'%20d='M102.24%20186.21c-3.267%204.117-9.904%201.862-9.977-3.397l-1.156-76.906h51.715c9.365%200%2014.587%2010.817%208.763%2018.149z'%20transform='translate(-27.722%20-60.338)'/%3e%3cpath%20fill='%233ecf8e'%20d='M53.484%202.128c3.267-4.117%209.905-1.862%209.977%203.396l.508%2076.907H12.902c-9.365%200-14.587-10.817-8.764-18.149z'/%3e%3c/svg%3e`,
  pr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23ffa000'%20d='M17.474%20103.276%2033.229%202.462a2.91%202.91%200%200%201%205.44-.924l16.294%2030.39%206.494-12.366a2.91%202.91%200%200%201%205.15%200l43.97%2083.714H17.474Z'/%3e%3cpath%20fill='%23f57c00'%20d='M71.903%2064.005%2054.955%2031.913l-37.481%2071.363Z'/%3e%3cpath%20fill='%23ffca28'%20d='M110.577%20103.276%2098.51%2028.604a2.913%202.913%200%200%200-1.984-2.286%202.906%202.906%200%200%200-2.94.714l-76.112%2076.243%2042.115%2023.618a8.728%208.728%200%200%200%208.51%200l42.478-23.618Z'/%3e%3cpath%20fill='%23fff'%20fill-opacity='.2'%20d='M98.51%2028.604a2.913%202.913%200%200%200-1.984-2.286%202.906%202.906%200%200%200-2.94.713L78.479%2042.178%2066.6%2019.562a2.91%202.91%200%200%200-5.15%200l-6.494%2012.365L38.662%201.538A2.91%202.91%200%200%200%2035.605.044a2.907%202.907%200%200%200-2.384%202.425L17.474%20103.276h-.051l.05.058.415.204%2075.676-75.764a2.91%202.91%200%200%201%204.932%201.571l11.965%2074.003.116-.073L98.51%2028.603Zm-80.898%2074.534L33.228%203.182A2.91%202.91%200%200%201%2035.613.756a2.911%202.911%200%200%201%203.057%201.495l16.292%2030.39%206.495-12.366a2.91%202.91%200%200%201%205.15%200L78.245%2042.41%2017.61%20103.138Z'/%3e%3cpath%20fill='%23a52714'%20d='M68.099%20126.18a8.728%208.728%200%200%201-8.51%200l-42.015-23.55-.102.647%2042.115%2023.61a8.728%208.728%200%200%200%208.51%200l42.48-23.61-.11-.67-42.37%2023.575z'%20opacity='.2'/%3e%3c/svg%3e`,
  mr = `/assets/docker.svg`,
  hr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M64.002%208.576%20128%20119.424H0Zm0%200'/%3e%3c/svg%3e`,
  gr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%23F34F29'%20d='M124.737%2058.378L69.621%203.264c-3.172-3.174-8.32-3.174-11.497%200L46.68%2014.71l14.518%2014.518c3.375-1.139%207.243-.375%209.932%202.314%202.703%202.706%203.461%206.607%202.294%209.993l13.992%2013.993c3.385-1.167%207.292-.413%209.994%202.295%203.78%203.777%203.78%209.9%200%2013.679a9.673%209.673%200%2001-13.683%200%209.677%209.677%200%2001-2.105-10.521L68.574%2047.933l-.002%2034.341a9.708%209.708%200%20012.559%201.828c3.778%203.777%203.778%209.898%200%2013.683-3.779%203.777-9.904%203.777-13.679%200-3.778-3.784-3.778-9.905%200-13.683a9.65%209.65%200%20013.167-2.11V47.333a9.581%209.581%200%2001-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056%2020.333%203.264%2058.123a8.133%208.133%200%20000%2011.5l55.117%2055.114c3.174%203.174%208.32%203.174%2011.499%200l54.858-54.858a8.135%208.135%200%2000-.001-11.501z'/%3e%3c/svg%3e`,
  _r = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cg%20fill='%23181616'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M64%205.103c-33.347%200-60.388%2027.035-60.388%2060.388%200%2026.682%2017.303%2049.317%2041.297%2057.303%203.017.56%204.125-1.31%204.125-2.905%200-1.44-.056-6.197-.082-11.243-16.8%203.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67%206.063.425%209.257%206.223%209.257%206.223%205.386%209.23%2014.127%206.562%2017.573%205.02.542-3.903%202.107-6.568%203.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843%200-6.593%202.36-11.98%206.223-16.21-.628-1.52-2.695-7.662.584-15.98%200%200%205.07-1.623%2016.61%206.19C53.7%2035%2058.867%2034.327%2064%2034.304c5.13.023%2010.3.694%2015.127%202.033%2011.526-7.813%2016.59-6.19%2016.59-6.19%203.287%208.317%201.22%2014.46.593%2015.98%203.872%204.23%206.215%209.617%206.215%2016.21%200%2023.194-14.127%2028.3-27.574%2029.796%202.167%201.874%204.097%205.55%204.097%2011.183%200%208.08-.07%2014.583-.07%2016.572%200%201.607%201.088%203.49%204.148%202.897%2023.98-7.994%2041.263-30.622%2041.263-57.294C124.388%2032.14%2097.35%205.104%2064%205.104z'/%3e%3cpath%20d='M26.484%2091.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395%201.04-.188.44.197.69.61.537.91zm2.446%202.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14%201.24.28.394.426.472.984.17%201.255zM31.312%2098.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025%201.35.507.368.545.368%201.19-.01%201.452zm3.261%203.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366%201.045-.264%201.564.23.527.486.686%201.18.333%201.543zm4.5%201.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7%201.512-.485.683.206%201.13.756.988%201.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877%200-.503.568-.91%201.29-.924.717-.013%201.306.387%201.306.88zm4.598-.782c.086.485-.413.984-1.126%201.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997%201.122-1.126.714-.123%201.354.17%201.444.663zm0%200'/%3e%3c/g%3e%3c/svg%3e`,
  vr = `data:image/svg+xml,%3csvg%20viewBox='0%200%20128%20128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23f37036'%20d='M113.117%2026.066C92.168-1.062%2053.191-6.07%2026.062%2014.883c-27.125%2020.953-32.128%2059.93-11.175%2087.055%2020.957%2027.124%2059.937%2032.124%2087.058%2011.167%2027.114-20.953%2032.118-59.918%2011.172-87.039Zm0%200'/%3e%3cpath%20fill='%23fff'%20d='M91.078%2024.164a10.038%2010.038%200%200%200-5.781%202.426%2010.028%2010.028%200%200%200-1.54%2013.465%2010.028%2010.028%200%200%200%2013.276%202.715h.002v.001l.156.155a10.63%2010.63%200%200%200%201.965-1.45A10.341%2010.341%200%200%200%2099%2027.107v-.002l-8.844%208.789-.156-.155%208.844-8.793a10.038%2010.038%200%200%200-7.766-2.78zM79.434%2038.551c-4.24-.007-11.163%204.799-28.067%2021.703l.084.086c-.092-.032-.185-.035-.185-.035l-6.364%206.308a1.035%201.035%200%200%200%20.93%201.762l10.914-2.328a.307.307%200%200%200%20.092-.17l.242.25-3.72%203.69h-.18l-22.086%2022.26%207.086%206.824a1.254%201.254%200%200%200%201.476.149%201.327%201.327%200%200%200%20.645-1.356l-1.035-4.5a.534.534%200%200%201%200-.62%20117.285%20117.285%200%200%200%2026.738-17.583l-4.535-4.537.086-.014-2.69-2.689.172-.174.182.186-.094.091%207.137%207.293v-.003c13.68-12.954%2023.39-23.367%2020.865-30.375a3.83%203.83%200%200%200-1.107-2.208v.004a3.778%203.778%200%200%200-.483-.306c-.083-.088-.156-.178-.244-.264l-.066.066a3.778%203.778%200%200%200-.582-.29l.289-.292c-1.796-1.6-3.28-2.924-5.5-2.93zM30.94%2092.21l-5.171%205.172v.004a1.03%201.03%200%200%200-.457%201.125%201.035%201.035%200%200%200%20.921.789l12.672.875-7.965-7.965z'/%3e%3cpath%20fill='%23f37036'%20d='M91.95%2023.31a11.047%2011.047%200%200%200-7.759%203.17%2010.988%2010.988%200%200%200-2.39%2011.641c-4.741-2.03-11.155%201.51-31.106%2021.457a.932.932%200%200%200-.037.094%201.242%201.242%200%200%200-.119.062l-6.309%206.364a1.97%201.97%200%200%200-.363%202.324%202.012%202.012%200%200%200%201.707.984l.313-.203%208.424-1.797-4.03%204.067a.873.873%200%200%200-.054.166l-19.75%2019.799a.798.798%200%200%200-.192.238l-5.086%205.09a1.967%201.967%200%200%200-.414%202.043%201.995%201.995%200%200%200%201.656%201.265l12.618.88a1.01%201.01%200%200%200%20.52-.415.886.886%200%200%200%200-1.035l-.026-.025a2.243%202.243%200%200%200%20.705-.58%202.237%202.237%200%200%200%20.406-1.876l-.984-4.187a126.725%20126.725%200%200%200%2026.334-16.861%201.091%201.091%200%200%200%20.248.103c.254-.019.492-.128.672-.308%2013.55-12.83%2021.515-21.622%2021.515-28.602a8.03%208.03%200%200%200-.431-2.85%2010.957%2010.957%200%200%200%203.845.83l-.015.004a11.219%2011.219%200%200%200%205.183-1.45.775.775%200%200%200%20.004.001.835.835%200%200%200%20.617-.055%209.398%209.398%200%200%200%202.07-1.652%2010.873%2010.873%200%200%200%203.258-7.758%2010.873%2010.873%200%200%200-3.257-7.758.93.93%200%200%200-.118-.091%2011.045%2011.045%200%200%200-7.656-3.078zm-.087%201.772a9.27%209.27%200%200%201%205.586%201.914l-8.068%208.117a.84.84%200%200%200-.076.098.83.83%200%200%200-.239.55.832.832%200%200%200%20.313.65h.002l6.1%206.1a9.044%209.044%200%200%201-10.028-1.913c-2.586-2.6-3.336-6.504-1.953-9.891%201.383-3.39%204.68-5.605%208.363-5.625zm7.12%203.432a8.87%208.87%200%200%201%202.033%205.674%209.15%209.15%200%200%201-2.688%206.464%209.989%209.989%200%200%201-1.098.895L92.307%2036.7l-.963-.963.265-.265%207.373-6.96zm-.366%204.193a.777.777%200%200%200-.55.031.731.731%200%200%200-.36.426.73.73%200%200%200%20.05.559%202.226%202.226%200%200%201-.257%202.328.64.64%200%200%200-.195.488c.004.184.07.36.195.492a.58.58%200%200%200%20.414%200%20.68.68%200%200%200%20.672-.207%203.573%203.573%200%200%200%20.465-3.777v.004a.777.777%200%200%200-.434-.344zM79.34%2039.43a5.584%205.584%200%200%201%203.31%201.226%204.756%204.756%200%200%200-2.681%201.34L57.162%2064.701l-4.476-4.476c11.828-11.772%2019.06-17.921%2023.556-19.936a5.584%205.584%200%200%201%203.098-.86zm3.965%202.96a2.895%202.895%200%200%201%202.043.844%202.786%202.786%200%200%201%20.879%202.121%202.869%202.869%200%200%201-.985%202.07l-24.25%2021.106-2.617-2.617%2022.887-22.68a2.895%202.895%200%200%201%202.043-.843zm2.994%206.698c-1.69%206.702-10.647%2015.783-19.987%2024.607l-3.777-3.773L86.3%2049.088zM51.367%2061.547l.274.27%203.513%203.513-9.63%202.06%205.843-5.843zm5.793%205.84.004.004%201.168%201.195a1.086%201.086%200%200%200%20.018.084l.078.012.248.254.82.84-5.385.66%203.05-3.05zm3.867%204.076%203.578%203.576A126.992%20126.992%200%200%201%2038.75%2091.695a1.44%201.44%200%200%200-.777%201.653l1.035%204.5a.31.31%200%200%201%200%20.363.31.31%200%200%201-.414%200l-6.102-6.152L51.3%2072.975l9.728-1.512zm-29.933%2021.94.869.814%204.492%204.492-10.016-.648%204.655-4.659z'/%3e%3c/svg%3e`,
  yr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='6'%20x2='235'%20y1='33'%20y2='344'%20gradientTransform='translate(0%20.937)%20scale(.3122)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2341d1ff'/%3e%3cstop%20offset='1'%20stop-color='%23bd34fe'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='194.651'%20x2='236.076'%20y1='8.818'%20y2='292.989'%20gradientTransform='translate(0%20.937)%20scale(.3122)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23ffea83'/%3e%3cstop%20offset='.083'%20stop-color='%23ffdd35'/%3e%3cstop%20offset='1'%20stop-color='%23ffa800'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20d='M124.766%2019.52%2067.324%20122.238c-1.187%202.121-4.234%202.133-5.437.024L3.305%2019.532c-1.313-2.302.652-5.087%203.261-4.622L64.07%2025.187a3.09%203.09%200%200%200%201.11%200l56.3-10.261c2.598-.473%204.575%202.289%203.286%204.594Zm0%200'/%3e%3cpath%20fill='url(%23b)'%20d='M91.46%201.43%2048.954%209.758a1.56%201.56%200%200%200-1.258%201.437l-2.617%2044.168a1.563%201.563%200%200%200%201.91%201.614l11.836-2.735a1.562%201.562%200%200%201%201.88%201.836l-3.517%2017.219a1.562%201.562%200%200%200%201.985%201.805l7.308-2.223c1.133-.344%202.223.652%201.985%201.812l-5.59%2027.047c-.348%201.692%201.902%202.614%202.84%201.164l.625-.968%2034.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185%202.352a1.558%201.558%200%200%201-1.793-1.965l7.95-27.562A1.56%201.56%200%200%200%2091.46%201.43Zm0%200'/%3e%3c/svg%3e`,
  br = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cg%20fill='%2300979c'%20fill-rule='evenodd'%3e%3cpath%20d='M.3%2066.5v-9.6c.2-.1.2-.3.2-.5%203-13.1%2011.2-21%2024.2-24.1%201.1-.3%202.3-.2%203.4-.6h6.4c.1.2.4.1.6.1%206.4.7%2012.2%203%2017.3%207%204.4%203.3%207.8%207.5%2010.9%2012%20.4.6.6.6%201%200%201.8-2.6%203.7-5.1%205.9-7.4%205.3-5.7%2011.7-9.7%2019.5-11.1%201.1-.3%202.4-.2%203.5-.6h6.2c.1.2.3.1.5.1%201.9.2%203.7.6%205.5%201.1%2013.4%203.9%2022.9%2016.2%2022.1%2030.1-.6%2011.7-6.5%2020.1-16.8%2025.4-5.1%202.8-10.7%203.5-16.5%203.4-7.6-.1-14.2-2.7-19.9-7.7-4-3.5-7.1-7.7-10-12.1-.4-.6-.6-.5-1%20.1-1.8%202.7-3.7%205.4-5.9%208-3.9%204.4-8.4%208-14%209.9-6.9%202.4-13.9%202.5-20.9.6-10.1-2.9-17-9.3-20.8-19.1-.6-1.6-.9-3.4-1.4-5zm31.8%2014.7c5.7.2%2010.6-1.7%2014.8-5.6%204.3-4%207.4-9%2010.5-13.9.1-.3.1-.5-.1-.8-2.6-4.1-5.3-8.2-8.9-11.6-6.9-6.6-15-8.8-24.1-5.9-7.5%202.5-12.3%207.8-13.4%2015.8-1.1%207.5%201.8%2013.5%207.8%2018%204%202.9%208.5%204.1%2013.4%204zm63.4%200c2.2%200%204.4-.1%206.5-.7%207.9-2.4%2013.1-7.3%2014.6-15.5%201.5-8.1-1.6-14.6-8.4-19.2-7.5-5.2-18.4-4.7-26%201-5.1%203.8-8.5%208.9-11.9%2014.2-.2.3-.1.5%200%20.8%202.7%204.3%205.4%208.6%208.9%2012.3%204.4%204.7%209.7%207.4%2016.3%207.1zm0%200'/%3e%3cpath%20d='M32%2058.5c3.2%200%206.5.1%209.7%200%20.8%200%20.9.2.9%201-.1.9-.1%201.8%200%202.7.1.8-.1%201-1%201H28.8c-2.2%200-4.4-.1-6.6%200-.7%200-.9-.2-.9-1%20.1-.9.1-1.8%200-2.8%200-.7.2-.9.9-.9%203.2.1%206.5%200%209.8%200zm63-6.4c.8%200%201.6.1%202.3%200%20.5%200%20.7.2.7.7-.1%201.4%200%202.8-.1%204.2%200%20.7.2.9.9.9%201.3-.1%202.7%200%204.1-.1.6%200%20.8.1.8.8v4.6c0%20.5-.2.7-.7.7-1.4-.1-2.8%200-4.3-.1-.6%200-.8.2-.8.8.1%201.4%200%202.8.1%204.2%200%20.6-.2.9-.8.9-1.5-.1-3-.1-4.5%200-.6%200-.8-.2-.8-.8.1-1.5%200-2.9.1-4.4%200-.5-.2-.7-.7-.7-1.4.1-2.8%200-4.2.1-.8%200-.9-.3-.9-.9%200-1.4.1-2.8%200-4.2-.1-.8.3-1%201-1%201.4.1%202.7%200%204.1.1.5%200%20.7-.2.7-.7-.1-1.4%200-2.9-.1-4.3%200-.6.2-.8.8-.8.8.1%201.5%200%202.3%200zm29.852-27.623c-.133.199-.18.265-.223.332-.242.363-.055%201.097-.664%201.086-.54-.012-.403-.684-.594-1.051-.05-.098-.11-.188-.277-.461%200%20.504.008.789%200%201.078-.008.195.035.441-.274.457-.312.016-.293-.234-.297-.43-.007-.68-.007-1.355-.003-2.031%200-.23-.036-.496.324-.504.27-.004.504-.015.617.336.144.43.195.91.527%201.324.317-.402.371-.867.492-1.293.102-.347.317-.37.598-.37.356.003.34.253.344.488.004.68.004%201.355-.004%202.035-.004.191.023.445-.281.449-.305%200-.282-.242-.285-.442-.008-.289%200-.574%200-1.003zm-3.712-1.532c.087%200%20.18-.015.262%200%20.325.063.828-.187.934.2.144.543-.426.27-.668.386-.242.117-.195.332-.2.528-.011.468-.007.937-.007%201.406%200%20.258-.05.473-.383.46-.305-.01-.293-.234-.293-.437a36.975%2036.975%200%2001-.004-1.316c.012-.375.016-.727-.523-.676-.188.016-.352-.039-.352-.277%200-.328.254-.262.442-.27.265-.012.527-.004.793-.004zm0%200'/%3e%3c/g%3e%3c/svg%3e`,
  xr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23EBBB14'/%3e%3cstop%20offset='1'%20stop-color='%23B25400'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23F9E583'/%3e%3cstop%20offset='1'%20stop-color='%23DE9800'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23F9E68B'/%3e%3cstop%20offset='1'%20stop-color='%23F3CD32'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20x='72'%20y='8'%20width='36'%20height='112'%20rx='8'%20fill='url(%23a)'/%3e%3crect%20x='46'%20y='36'%20width='36'%20height='84'%20rx='8'%20fill='url(%23b)'/%3e%3crect%20x='20'%20y='64'%20width='36'%20height='56'%20rx='8'%20fill='url(%23c)'/%3e%3c/svg%3e`,
  Sr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cg%20fill='%23E8762D'%3e%3crect%20x='59'%20y='38'%20width='10'%20height='52'/%3e%3crect%20x='38'%20y='59'%20width='52'%20height='10'/%3e%3c/g%3e%3cg%20fill='%23C72037'%3e%3crect%20x='94'%20y='20'%20width='6'%20height='30'/%3e%3crect%20x='82'%20y='32'%20width='30'%20height='6'/%3e%3c/g%3e%3cg%20fill='%235B879B'%3e%3crect%20x='28'%20y='20'%20width='6'%20height='30'/%3e%3crect%20x='16'%20y='32'%20width='30'%20height='6'/%3e%3c/g%3e%3cg%20fill='%231F457E'%3e%3crect%20x='94'%20y='78'%20width='6'%20height='30'/%3e%3crect%20x='82'%20y='90'%20width='30'%20height='6'/%3e%3c/g%3e%3cg%20fill='%235C6692'%3e%3crect%20x='28'%20y='78'%20width='6'%20height='30'/%3e%3crect%20x='16'%20y='90'%20width='30'%20height='6'/%3e%3c/g%3e%3cg%20fill='%23EB9129'%3e%3crect%20x='61'%20y='2'%20width='6'%20height='22'/%3e%3crect%20x='53'%20y='10'%20width='22'%20height='6'/%3e%3c/g%3e%3cg%20fill='%2359879B'%3e%3crect%20x='61'%20y='104'%20width='6'%20height='22'/%3e%3crect%20x='53'%20y='112'%20width='22'%20height='6'/%3e%3c/g%3e%3cg%20fill='%237199A6'%3e%3crect%20x='10'%20y='53'%20width='4'%20height='22'/%3e%3crect%20x='1'%20y='62'%20width='22'%20height='4'/%3e%3c/g%3e%3cg%20fill='%230F3A6C'%3e%3crect%20x='114'%20y='53'%20width='4'%20height='22'/%3e%3crect%20x='105'%20y='62'%20width='22'%20height='4'/%3e%3c/g%3e%3c/svg%3e`,
  Cr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cg%20fill='%230a7a8c'%3e%3cpath%20d='M64%208C36%208%2016%2017%2016%2028v72c0%2011%2020%2020%2048%2020s48-9%2048-20V28c0-11-20-20-48-20Z'%20opacity='.22'/%3e%3cellipse%20cx='64'%20cy='28'%20rx='48'%20ry='20'/%3e%3cpath%20d='M16%2052c0%2011%2020%2020%2048%2020s48-9%2048-20v14c0%2011-20%2020-48%2020S16%2077%2016%2066V52Zm0%2038c0%2011%2020%2020%2048%2020s48-9%2048-20v10c0%2011-20%2020-48%2020S16%20111%2016%20100V90Z'/%3e%3c/g%3e%3c/svg%3e`,
  wr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cdefs%3e%3cclipPath%20id='c'%3e%3ccircle%20cx='64'%20cy='64'%20r='58'/%3e%3c/clipPath%3e%3c/defs%3e%3ccircle%20cx='64'%20cy='64'%20r='58'%20fill='%23e8eef3'/%3e%3cg%20clip-path='url(%23c)'%3e%3cpath%20d='M0%20128V92c14%200%2018-30%2032-30s18%2022%2032%2022%2020-44%2034-44%2016%2030%2030%2030v58Z'%20fill='%237db0bc'/%3e%3cpath%20d='M0%20128v-24c16%200%2020-18%2036-18s20%2014%2034%2014%2018-24%2032-24%2014%2016%2026%2016v36Z'%20fill='%234c7bb0'/%3e%3cpath%20d='M0%20128v-12c18%200%2024-10%2040-10s22%208%2036%208%2016-12%2028-12%2012%208%2024%208v18Z'%20fill='%2335456e'/%3e%3c/g%3e%3ccircle%20cx='64'%20cy='64'%20r='58'%20fill='none'%20stroke='%2335456e'%20stroke-width='5'/%3e%3c/svg%3e`,
  Tr = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cdefs%3e%3clinearGradient%20id='g'%20x1='0'%20y1='0'%20x2='1'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%230a7a8c'/%3e%3cstop%20offset='1'%20stop-color='%237c5cf6'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M58%2010c3%2026%2014%2037%2040%2040-26%203-37%2014-40%2040-3-26-14-37-40-40%2026-3%2037-14%2040-40Z'%20fill='url(%23g)'/%3e%3cpath%20d='M100%2072c2%2014%208%2020%2022%2022-14%202-20%208-22%2022-2-14-8-20-22-22%2014-2%2020-8%2022-22Z'%20fill='url(%23g)'/%3e%3c/svg%3e`,
  Er = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20fill='%2313111c'%20d='M63.9316%200C39.994%200%2019.1642%2013.1447%208.1641%2032.5762c8.5963-.018%2025.3379-.0274%2025.3379-.0274h.0039v-.0078c19.7886%200%2020.523.0886%2024.3886.25l2.3946.088c8.3375.278%2018.585%201.1746%2026.6484%207.2753%204.3769%203.3089%2010.6958%2010.6115%2014.4629%2015.8145%203.4826%204.8123%204.485%2010.3442%202.1172%2015.6445-2.1795%204.8712-6.868%207.7773-12.5469%207.7773H2.0859s.529%202.2429%201.3223%204.7188h121.33A63.7981%2063.7981%200%200%200%20128%2064.0274C128.0012%2028.6694%2099.3164%200%2063.9316%200zM33.4863%2038.9668c-9.0846%200-18.9606.0232-28.5781.0488-1.245%203.3605-2.4447%206.6179-3.0293%209.2676h49.8203v6.4883H.5938A65.0891%2065.0891%200%200%200%200%2061.2168h97.2246c-.3395-.6633-.7959-1.2605-1.2558-1.8457-16.6213-21.4739-25.5615-19.6127-38.3516-20.1582-4.2643-.1754-7.1574-.2461-24.1309-.2461zM.0508%2067.7128c.1025%201.7315.2628%203.4379.496%205.1231h90.4239c4.031%200%206.2867-2.2853%207.0195-5.123H.0508zM5.627%2090.5392S20.6168%20127.3462%2063.9316%20128c25.889%200%2048.1338-15.375%2058.2383-37.461H5.627z'/%3e%3c/svg%3e`,
  Dr = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  Or = o((e, t) => {
    t.exports = Dr();
  }),
  j = Or(),
  figmaLogo = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2038%2057'%20fill='none'%3e%3cpath%20d='M19%2028.5C19%2023.2533%2023.2533%2019%2028.5%2019C33.7467%2019%2038%2023.2533%2038%2028.5C38%2033.7467%2033.7467%2038%2028.5%2038C23.2533%2038%2019%2033.7467%2019%2028.5Z'%20fill='%231ABCFE'/%3e%3cpath%20d='M0%2047.5C0%2042.2533%204.25329%2038%209.5%2038H19V47.5C19%2052.7467%2014.7467%2057%209.5%2057C4.25329%2057%200%2052.7467%200%2047.5Z'%20fill='%230ACF83'/%3e%3cpath%20d='M19%200V19H28.5C33.7467%2019%2038%2014.7467%2038%209.5C38%204.25329%2033.7467%200%2028.5%200H19Z'%20fill='%23FF7262'/%3e%3cpath%20d='M0%209.5C0%2014.7467%204.25329%2019%209.5%2019H19V0H9.5C4.25329%200%200%204.25329%200%209.5Z'%20fill='%23F24E1E'/%3e%3cpath%20d='M0%2028.5C0%2033.7467%204.25329%2038%209.5%2038H19V19H9.5C4.25329%2019%200%2023.2533%200%2028.5Z'%20fill='%23A259FF'/%3e%3c/svg%3e`,
  canvaLogo = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAJvUlEQVR4nIVXfYxU1RX/nXvvezOzO8OyLLssn/JlEASsQFJbQ7L0A0lp0agY/2irTdNa6x9ttJI0rc00aZsWrIlJU6NNmn7HqBSalqYUK6vGVBsIwuICWmUFu7vAArs7s/PmvXvfPc15b1lRsb2bu+/NzHv3/M45v/O75xI+bDATens1Nmxw2ee9L3XpMNgI0hsIvBKs5hBzNzFAoGFKMagYR8nyfkrM3+u3Xnc2e28/G/QgBcmTHxx0ReNPPaVxxx1pdv/8weWKeBsYt1O5UgYRYC3gUpC1yADoAKQMlAqhUoYaq9e0w07t/fbzt649lq/JGndQ+v8B7GeDDeRQrSr1yc/uYKL7qVwB6nXAp+7d94jIQ2UAWHnyXv6zSgHNxuhCGWq8DmP5kbP9ux9Etep79rPplbU/FMCBAwHWrbP456GFyvo9PL1tBcZHGQx5yVz+vGKgA0ArE7QnwAPOA+MOSFJik8LplExQaie6MNZfSILNA19aPrD28QPBwXvW2Q8C2J97Hr5wcHXq8RK3lsrcbCQgBOD3Al1AhIQZQ2LRMpAyICBYAUrhalY4ZwEtQCxsYMqhqkd1bXHjya+sOnJ5JOjynBf3H1rowH0oBGVvYyvGhTmSdg+gHUAZwGkr7xLuam3ButYWdBVC2JTxVq2JP4w0cLxuscgEqFnApAQBYagYmIatG69XHb93+cAlTpiM7USp5Nynfg+1tojnlhQFzAxFuYNzCfiPZ1x0Ho/O7sSWuV1YOE3gvHd8M7bYdWIYd/WfwxJt0EgB5SkgF1sdlMuqHu1BtboqIyQzGfRCA3Clj2/ZwdOmr0jHLyakEWYuEyEFYz4RTjuPxVpj93VLsapjembs7fEJ/OntM/jXaASfAvcunoX1C2bii6vnAylw1+ERrAwMah5QqQoQNZKwOGPFdaWtOw6j+kDP96GzFJT/cnC5D1S/VyzxAJP85WmdScAZz1hjNPasWYbu1lJm/K8DQ9h87J08N6SR0TT2GPjUclzV3oqReozO3SewyBGUI2hLMI7YJITAKgqcXfHyQ6uOKVmMSW2jlmkgD0ceRJ6gPFAQjomBlPHM6qVTxp89dQabj5zCYh1gmQ4wmxXWaAOkhMFaM3umFGp8LjQ4aYEwFRCAtiCdwhXMNKgk3JZVU/mPh7u0p9uoXgd5MuQhQOA9YR4rXIgc/rxkLha15fk+Pd7Ap/vewcKwgLoFBhOgYQmNBIBVmB4G2XPNJMWrdY8lEkaXk1FLJBwZ0RRjcdvGb/27SwXEG1WxUiHrnUpBKvOe0O4JryceW1pasHHBrCmS/fbEEJAQQqvQTJSEE9OswvEGcHNrMQu/jEOnxnF6LEUHK1BuOJvGEinrXVG1VdjyRkWp2qC8yowqCVVKEMGcIcibHvfMn4lQZ5nCUC3Cd07VcBUCjMQCgqAThelOATXGN67tREtB4/WhOu574RwWBwGiBOKthB8mT4OAQODkfWwwKqWViB3YEYmOsGdoIoxlNg2u72qb8r5vqA7UgUpJIbJSXpIuQpRtMwavDDRw8swgvvzqKDo8MA8K3nFmWIxmhrOpSHkHFauVxjjM8XEKeEViXEC0Stk1Pe6eVkJna3EKwNHhCEg0UlIIXM4ViVzigWuY8O2+CSBhrCxpGA/IzhH4TIgQTHo+OUnbFCahOUY56oZ3UvKKFWWq2yLS12Bc212Cyb6T3ZnxxnkHWAPPCibNvZcoyBRV/og2CItCQIBTRuCFfHnoTSIgCIGUYQylE4cgQbdRlkCawOKOKDMDAakMQFchZ7SIRewYw2OcRUBIJZ5dqpgMBOcg/ORnLazPAHAWrbz+kQMQEmdXBaOdGiYK5nlnPUR5mWCyCGgUWEQyH6lnRA2FzjjniKhUxgHGe66XZkv2EgMZ4XIi5saBMFG+YENl4nTYBIkaJBTm+VgIILFGbqABJPG7Gi/fTXMa3AACfQXjk/eijC0EvD7q0UmE2SFAU+GfigAXXQiKo0EVNNXRMCkgiIiDSCGINCjSQGxw9rysKPkHiqHC4pYAIzWFYqwRNPNpYpkqmzpWmO4Vnj/N+Mmmabh7XQveHgJanEIYKwSxXEkml8RmTEeViYLnxGi+oEEYiZcaXanBkZMeiez3k2PNghIwolCyGqaZL3hpCoBWpzAxTvhMu8Htm2ZkFVKcyI2HTULYVO/OSFKjnzNUc/t0VK8phBVJNDEJI7GMCL85yvjecIIl8wsZgBtXtwK2kRkvOiFc3qkoZpSkX0qBfxxyeOPJLtRrKR77XRNr5mugnonOZP6Ji4k23tZqFDf2qSMPLz1rIr2z5NslAk6iEU5GBHWNvb1RTsKUMbc7wO67K9j3LDKvK6xR8QolpzFwmvC314CXf96BpYuL+MUvL2IuyToKBfE+UihkU7uya4O2vPPhI0vPZnpXmFDb1Whd8m+CyLCASGsKN7UZ3PdriyOvxdCakKbAzTdVsOfRCtBQeLEfePEo4cIw4c6PhRj4/Ux8dF0rdu0aw64nLBZ2aOhxNWU8jDQHMRkX1WRr3p6VeE+VTW+V3IbPn/tpWOi430YXEvIUSn1rEJzNa/vxHWVcfXWuCzJGR1MMDrnst85OjVldkgNg1zM17Pj6BFbcQOA68tDLlpxIP8BJhTrCyI088sP+2Q9Ue9hk7UdWSFVWN/Vd7DOqssLZCSttlJRUoIBmExgdYzz03QLWrw/R1pZvTpePt960ePJXE9j7A4tlmwBM5LWf556gU9gStQbW1/qDY4+tqqLqxXbWEW3dyvrppym95ZZooWvaPk2lMrumJc77Quk1ZLy61+P6TYT1n1CYO08hDIGxix7HD6d45WcOlXnA7GsAruXqlymfKC2zDagQeER1z8GqHx9vH9gK1k+D0ql2u6eHTW8vuS2frK82Tr0UUKlsU2kzKCCRRwIKRUY8AYz0eTTGRKIZLWDMXATMWABo2aAmPIJJ/Vde9ja2oW4Nna/Vif2NPzox64iEvtp7eVs+OdauPRAcPLjO3nlDtNAz7SmYworYxUzEDgwj9SldchAwpEXQot1y2IoZqsmZ7ssuqHzWWjoib1p1OzX9+X5AbxbPv7r2QPDEwSsdTN4XiSpYnVgb71Be31/QBjZ1YE6l9ZC6l96ONLPS0j+k8JqZleyTJNpApqgrSLyEKX2k5fiMB6sgf7nn//NwunWSE3L/hZXxcsW0TfrGIpmKaH7WCQuFOM5EyJCBUTrbumXBxI/VCLyTON2+/Y2Z2eH0Us7fb+vKp+NsMFV7oC8h/tqSWhf7cCPJ8Zz9SqX8HCLuVlkHwcOK0kECjpLi58hF+x5+szs7nudei0Ze+Xj+XyTG5jXZQEWpAAAAAElFTkSuQmCC`,
  kr = [
    {
      key: `data`,
      title: `Data analysis`,
      desc: `Turning messy datasets into clear narratives: dashboards, statistical analysis and visualisations that support real decisions.`,
      tools: [
        [`Python`, Yn],
        [`Pandas`, Xn],
        [`SQL`, Cr],
        [`Power BI`, xr],
      ],
    },
    {
      key: `build`,
      title: `Full-stack development`,
      desc: `Building web apps end to end, from the interface people click on to the server and database behind it.`,
      tools: [
        [`TypeScript`, tr],
        [`JavaScript`, er],
        [`React`, $n],
        [`Next.js`, nr],
        [`Node.js`, rr],
        [`Express`, ir],
        [`Tailwind`, ar],
        [`HTML`, sr],
        [`CSS`, cr],
        [`C`, lr],
        [`C++`, ur],
      ],
    },
    {
      key: `tools`,
      title: `AI, cloud & tools`,
      desc: `The services and tooling behind shipped products: AI models, databases, hosting, containers and version control.`,
      tools: [
        [`Figma`, figmaLogo],
        [`Canva`, canvaLogo],
        [`Supabase`, fr],
        [`Firebase`, pr],
        [`Vercel`, hr],
        [`Git`, gr],
        [`GitHub`, _r],
        [`Vite`, yr],
      ],
    },
  ],
  Ar = (e, t) => ({
    src: `/img/${e}-${t[t.length - 1]}.webp`,
    srcSet: t.map((t) => `/img/${e}-${t}.webp ${t}w`).join(`, `),
  }),
  jr = [
    {
      name: `Website Persediaan Neptunus Aquatic`,
      desc: `Sistem informasi persediaan barang berbasis website untuk pengelolaan stok dan inventaris toko akuatik secara efisien dan terstruktur.`,
      type: `Web App`,
      year: `2026`,
      img: Ar(`project-neptunus`, [640, 1200]),
      imgAlt: `Website Persediaan Neptunus Aquatic`,
    },
    {
      name: `BPS Mobile Data Collection`,
      desc: `Aplikasi dan pendataan lapangan Badan Pusat Statistik untuk survei, verifikasi data, dan pencatatan statistik wilayah kerja.`,
      type: `Mobile & Field Survey`,
      year: `2026`,
      img: Ar(`project-bps`, [640, 1200]),
      imgAlt: `BPS Mobile Data Collection`,
    },
  ],
  Mr = {
    name: `Certificates`,
    gallery: [
      {
        ...Ar(`cert-it-essential`, [480, 1080]),
        w: 1080,
        h: 742,
        title: `Cisco IT Essentials - 96.7%`,
      },
      {
        ...Ar(`cert-bps`, [480, 1080]),
        w: 1080,
        h: 742,
        title: `Mitra Statistik - Badan Pusat Statistik`,
      },
      {
        ...Ar(`cert-kominfo`, [480, 1080]),
        w: 1080,
        h: 742,
        title: `Pelatihan Kominfo Digital Talent`,
      },
      {
        ...Ar(`cert-himasif`, [480, 1080]),
        w: 1080,
        h: 742,
        title: `Sertifikat Himasif Universitas Bani Saleh`,
      },
      {
        ...Ar(`cert-pelatihan-1`, [480, 1080]),
        w: 1080,
        h: 742,
        title: `Sertifikat Pelatihan Keahlian Komputer`,
      },
      {
        ...Ar(`cert-pelatihan-2`, [480, 1080]),
        w: 1080,
        h: 742,
        title: `Sertifikat Workshop & Seminar IT`,
      },
    ],
  },
  Nr = [
    {
      key: `findmoy`,
      name: `FindMoy`,
      product: `KCMS`,
      tagline: `Khmer-first AI comment moderation`,
      status: `Early access`,
      domain: `findmoy.app`,
      desc: `KCMS reads Facebook Page comments in Khmer, Khmerlish and English, then flags scams, abuse and spam in context. A person on the team confirms every action, and every hide is reversible with a full audit trail.`,
      features: [
        `Reads Khmer, Khmerlish and English in context`,
        `Flags safe, offensive or harmful, with the reason`,
        `Human review, reversible, with an audit trail`,
      ],
      stack: [`Facebook Pages`, `AI moderation`, `Dashboard`],
      accent: `#0a7a8c`,
      url: `https://findmoy.app`,
      detail: { label: `How it works`, url: `/project/findmoy` },
      poster: { ...Ar(`findmoy-poster`, [640, 1080]), w: 1080, h: 1350 },
    },
    {
      key: `passkru`,
      name: `PassKru`,
      product: ``,
      tagline: `Ace your teacher-exam preparation`,
      status: `In development`,
      domain: `passkru.com`,
      desc: `A learning platform designed to help teacher-exam candidates prepare effectively with personalized study plans based on each learner's needs.`,
      features: [
        `Practice questions & quizzes`,
        `Flashcards & mock exams`,
        `Personalized study plans`,
      ],
      stack: [`React`, `Node.js`, `PostgreSQL`],
      accent: `#2f5bea`,
      url: `https://pass-kru67.vercel.app/`,
      detail: { label: `Startup details`, url: `/project/passkru_startup` },
      poster: { ...Ar(`passkru-poster`, [640, 1080]), w: 1080, h: 1528 },
    },
  ],
  Pr = [
    {
      label: `Email`,
      value: `christinlatip59@gmail.com`,
      href: `mailto:christinlatip59@gmail.com`,
    },
    {
      label: `LinkedIn`,
      value: `linkedin.com/in/christinlatip`,
      href: `https://www.linkedin.com/in/christinlatip`,
    },
    {
      label: `WhatsApp`,
      value: `+62 895-3346-86750`,
      href: `https://wa.me/62895334686750`,
    },
  ],
  Fr = () =>
    typeof window < `u` &&
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function Ir() {
  (0, _.useEffect)(() => {
    if (Fr() || !(`IntersectionObserver` in window)) return;
    let e = document.documentElement;
    e.classList.add(`reveal-ready`);
    let t = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          e.isIntersecting &&
            (e.target.classList.add(`is-visible`), t.unobserve(e.target));
        });
      },
      { rootMargin: `0px 0px -8% 0px`, threshold: 0.12 },
    );
    return (
      document
        .querySelectorAll(`[data-reveal]:not(.is-visible)`)
        .forEach((e) => t.observe(e)),
      () => {
        (t.disconnect(), e.classList.remove(`reveal-ready`));
      }
    );
  }, []);
}
function Lr() {
  let { hash: e } = lt();
  (0, _.useEffect)(() => {
    e &&
      document
        .getElementById(decodeURIComponent(e.slice(1)))
        ?.scrollIntoView({ behavior: `instant`, block: `start` });
  }, [e]);
}
var Rr = (e) => ({ "--i": e }),
  zr = () =>
    (0, j.jsx)(`svg`, {
      className: `icon`,
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: (0, j.jsx)(`path`, { d: `M7 17 17 7M8 7h9v9` }),
    }),
  Br = ({ dir: e }) =>
    (0, j.jsx)(`svg`, {
      className: `icon`,
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: (0, j.jsx)(`path`, {
        d: e === `left` ? `m15 5-7 7 7 7` : `m9 5 7 7-7 7`,
      }),
    }),
  Vr = ({ open: e }) =>
    (0, j.jsx)(`svg`, {
      className: `icon`,
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: e
        ? (0, j.jsx)(`path`, { d: `M6 6l12 12M18 6 6 18` })
        : (0, j.jsx)(`path`, { d: `M4 7h16M4 12h16M4 17h16` }),
    }),
  Hr = () =>
    (0, j.jsx)(`svg`, {
      className: `icon`,
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: (0, j.jsx)(`path`, { d: `M6 6l12 12M18 6 6 18` }),
    }),
  Ur = [
    { href: `#about`, label: `About` },
    { href: `#achievements`, label: `Achievements` },
    { href: `#skills`, label: `Skills` },
    { href: `#projects`, label: `Projects` },
    { href: `#certificates`, label: `Certificates` },
  ];
function Wr() {
  let [e, t] = (0, _.useState)(!1),
    [n, r] = (0, _.useState)(!1),
    [i, a] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      let e = window.scrollY,
        n = () => {
          let n = window.scrollY;
          if ((t(n > 40), Math.abs(n - e) > 4)) {
            let t = n > 120 && n > e;
            (r(t), t && a(!1));
          }
          e = n;
        };
      return (
        n(),
        window.addEventListener(`scroll`, n, { passive: !0 }),
        () => window.removeEventListener(`scroll`, n)
      );
    }, []),
    (0, _.useEffect)(() => {
      if (!i) return;
      let e = (e) => e.key === `Escape` && a(!1),
        t = (e) => !e.target.closest(`.nav`) && a(!1);
      return (
        window.addEventListener(`keydown`, e),
        window.addEventListener(`pointerdown`, t),
        () => {
          (window.removeEventListener(`keydown`, e),
            window.removeEventListener(`pointerdown`, t));
        }
      );
    }, [i]),
    (0, j.jsxs)(`header`, {
      className: `nav${e ? ` is-scrolled` : ``}${n ? ` is-hidden` : ``}${i ? ` is-open` : ``}`,
      children: [
        (0, j.jsx)(`a`, {
          href: `#top`,
          className: `nav-brand`,
          children: `Christin Latip`,
        }),
        (0, j.jsx)(`nav`, {
          "aria-label": `Sections`,
          children: (0, j.jsxs)(`ul`, {
            className: `nav-links`,
            children: [
              Ur.map((e) =>
                (0, j.jsx)(
                  `li`,
                  {
                    children: (0, j.jsx)(`a`, {
                      href: e.href,
                      onClick: () => a(!1),
                      children: e.label,
                    }),
                  },
                  e.href,
                ),
              ),
              (0, j.jsx)(`li`, {
                className: `nav-links-contact`,
                children: (0, j.jsxs)(`a`, {
                  href: `#contact`,
                  onClick: () => a(!1),
                  children: [`Contact `, (0, j.jsx)(zr, {})],
                }),
              }),
            ],
          }),
        }),
        (0, j.jsxs)(`div`, {
          className: `nav-end`,
          children: [
            (0, j.jsxs)(`a`, {
              href: `#contact`,
              className: `nav-cta`,
              onClick: () => a(!1),
              children: [`Contact `, (0, j.jsx)(zr, {})],
            }),
            (0, j.jsx)(`button`, {
              type: `button`,
              className: `nav-menu-btn`,
              "aria-expanded": i,
              "aria-label": i ? `Close menu` : `Open menu`,
              onClick: () => a((e) => !e),
              children: (0, j.jsx)(Vr, { open: i }),
            }),
          ],
        }),
      ],
    })
  );
}
var Gr = (() => {
    let e = [
        [260, 250, 1],
        [1180, 190, 0.8],
        [900, 760, 1.15],
      ],
      t = [];
    return (
      e.forEach(([e, n, r], i) => {
        for (let a = 1; a <= 7; a++) {
          let o = a * 46 * r,
            s = ``;
          for (let t = 0; t <= 64; t++) {
            let r = (t / 64) * Math.PI * 2,
              c =
                o *
                (1 +
                  0.16 * Math.sin(r * 3 + i * 2 + a * 0.35) +
                  0.08 * Math.cos(r * 5 - i));
            s += `${t ? `L` : `M`}${(e + Math.cos(r) * c * 1.25).toFixed(1)} ${(n + Math.sin(r) * c).toFixed(1)}`;
          }
          t.push(s + `Z`);
        }
      }),
      t
    );
  })(),
  Kr = ({ d: e }) =>
    (0, j.jsx)(`svg`, {
      className: `icon`,
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: (0, j.jsx)(`path`, { d: e }),
    }),
  qr = {
    pin: `M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z`,
    cap: `M2 9l10-5 10 5-10 5L2 9Zm4 2.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M22 9v6`,
    code: `m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14`,
  },
  Jr = [26.6, 27.8, 29.2, 30.1, 29.9, 29, 28.5, 28.4, 28.1, 27.7, 27.1, 26.3],
  Yr = (e) => ({
    src: `/img/${e}-933.webp?v=2`,
    srcSet: `/img/${e}-600.webp?v=2 600w, /img/${e}-933.webp?v=2 933w`,
  }),
  Xr = `(max-width: 1024px) 100vw, 90vh`,
  Zr = ({ where: e }) =>
    (0, j.jsxs)(`ul`, {
      className: `hero-meta hero-meta-${e}`,
      children: [
        (0, j.jsxs)(`li`, {
          children: [(0, j.jsx)(Kr, { d: qr.pin }), `Bekasi, Jawa Barat`],
        }),
        (0, j.jsxs)(`li`, {
          children: [
            (0, j.jsx)(Kr, { d: qr.cap }),
            `S1 Sistem Informasi, Univ. Bani Saleh`,
          ],
        }),
        (0, j.jsxs)(`li`, {
          children: [
            (0, j.jsx)(Kr, { d: qr.code }),
            `Information Systems, Data & IT Dev`,
          ],
        }),
      ],
    });
function Qr() {
  let e = (0, _.useRef)(null),
    t = (0, _.useRef)(null),
    n = (0, _.useRef)(null),
    r = (0, _.useRef)(null),
    [i, a] = (0, _.useState)(() => (Fr() ? `static` : `intro`)),
    [o, s] = (0, _.useState)(`photo`),
    c = (0, _.useRef)(o);
  (0, _.useEffect)(() => {
    let i = !1,
      o = Fr(),
      s = async (e) => {
        let t = new Image();
        return ((t.src = e.currentSrc || e.src), await t.decode(), t);
      },
      l = () => {
        a("static");
      },
      u = window.requestIdleCallback
        ? window.requestIdleCallback(l, { timeout: 800 })
        : setTimeout(l, 200);
    return () => {
      ((i = !0),
        window.cancelIdleCallback
          ? window.cancelIdleCallback(u)
          : clearTimeout(u),
        r.current?.destroy(),
        (r.current = null));
    };
  }, []);
  let l = () => {
      let e = o === `photo` ? `alt` : `photo`;
      ((c.current = e),
        s(e),
        r.current?.show(e),
        i === `intro` && !r.current && a(`static`));
    },
    u = Math.max(...Jr),
    d = Math.min(...Jr),
    f = Jr.map(
      (e, t) =>
        `${(t / (Jr.length - 1)) * 100},${28 - ((e - d) / (u - d)) * 24}`,
    ).join(` `);
  return (0, j.jsxs)(`section`, {
    id: `top`,
    className: `hero`,
    children: [
      (0, j.jsx)(`svg`, {
        className: `hero-contours`,
        viewBox: `0 0 1440 900`,
        preserveAspectRatio: `xMidYMid slice`,
        "aria-hidden": `true`,
        children: Gr.map((e, t) => (0, j.jsx)(`path`, { d: e }, t)),
      }),
      (0, j.jsxs)(`div`, {
        className: `hero-intro`,
        children: [
          (0, j.jsxs)(`h1`, {
            className: `hero-name`,
            children: [
              (0, j.jsx)(`span`, { children: `CHRISTIN` }),
              ` `,
              (0, j.jsx)(`span`, { children: `LATIP` }),
            ],
          }),
          (0, j.jsx)(Zr, { where: `top` }),
        ],
      }),
      (0, j.jsx)(`div`, {
        className: `hero-stage`,
        children: (0, j.jsx)(`div`, {
          className: `hero-portrait is-idle`,
          children: (0, j.jsx)(`img`, {
            className: `hero-profile-img`,
            src: `/img/profile.png`,
            alt: `Portrait of Christin Latip`,
            fetchPriority: `high`,
          }),
        }),
      }),
      (0, j.jsxs)(`aside`, {
        className: `hero-panels`,
        "aria-label": `At a glance`,
        children: [
          (0, j.jsxs)(`div`, {
            className: `hud`,
            children: [
              (0, j.jsx)(`p`, {
                className: `hud-label`,
                children: `Currently`,
              }),
              (0, j.jsx)(`p`, {
                className: `hud-title`,
                children: `S1 Sistem Informasi`,
              }),
              (0, j.jsx)(`p`, {
                className: `hud-sub`,
                children: `Universitas Bani Saleh (IPK 3.59)`,
              }),
            ],
          }),
          (0, j.jsxs)(`div`, {
            className: `hud`,
            children: [
              (0, j.jsx)(`p`, {
                className: `hud-label`,
                children: `Latest project`,
              }),
              (0, j.jsx)(`p`, {
                className: `hud-title`,
                children: `Website Persediaan Neptunus`,
              }),
              (0, j.jsx)(`p`, {
                className: `hud-sub`,
                children: `Tugas Akhir, 2026`,
              }),
            ],
          }),
          (0, j.jsxs)(`div`, {
            className: `hud`,
            children: [
              (0, j.jsx)(`p`, {
                className: `hud-label`,
                children: `At a glance`,
              }),
              (0, j.jsxs)(`dl`, {
                className: `hud-stats`,
                children: [
                  (0, j.jsxs)(`div`, {
                    children: [
                      (0, j.jsx)(`dt`, { children: `Projects` }),
                      (0, j.jsx)(`dd`, { children: jr.length }),
                    ],
                  }),
                  (0, j.jsxs)(`div`, {
                    children: [
                      (0, j.jsx)(`dt`, { children: `Skills` }),
                      (0, j.jsx)(`dd`, { children: kr.length }),
                    ],
                  }),
                  (0, j.jsxs)(`div`, {
                    children: [
                      (0, j.jsx)(`dt`, { children: `Certificates` }),
                      (0, j.jsx)(`dd`, { children: `6` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, j.jsxs)(`div`, {
        className: `hero-bar`,
        children: [
          (0, j.jsx)(Zr, { where: `bar` }),
          (0, j.jsxs)(`button`, {
            type: `button`,
            className: `hero-switch`,
            onClick: l,
            "aria-pressed": o === `alt`,
            children: [
              (0, j.jsx)(`span`, {
                className: `switch-icon`,
                "aria-hidden": `true`,
                children: (0, j.jsx)(`svg`, {
                  className: `icon`,
                  viewBox: `0 0 24 24`,
                  children: (0, j.jsx)(`path`, {
                    d: `M4 8h13m0 0-3.5-3.5M17 8l-3.5 3.5M20 16H7m0 0 3.5-3.5M7 16l3.5 3.5`,
                  }),
                }),
              }),
              (0, j.jsxs)(`span`, {
                children: [
                  (0, j.jsx)(`span`, {
                    className: `hero-switch-title`,
                    children: o === `photo` ? `Show aura` : `Show steav`,
                  }),
                  (0, j.jsx)(`span`, {
                    className: `hero-switch-sub`,
                    children: `Switch portrait`,
                  }),
                ],
              }),
            ],
          }),
          (0, j.jsx)(`div`, {
            style: { gridColumn: 3, justifySelf: `end` },
            children: (0, j.jsxs)(`a`, {
              href: `#projects`,
              className: `hero-cta`,
              children: [`View projects `, (0, j.jsx)(zr, {})],
            }),
          }),
        ],
      }),
    ],
  });
}
function $r() {
  return (0, j.jsx)(`svg`, {
    className: `contours`,
    viewBox: `0 0 1440 900`,
    preserveAspectRatio: `xMidYMid slice`,
    "aria-hidden": `true`,
    children: Gr.map((e, t) => (0, j.jsx)(`path`, { d: e }, t)),
  });
}
function ei({ title: e, label: t, sub: n }) {
  return (0, j.jsxs)(`div`, {
    className: `sec-head`,
    "data-reveal": `wipe`,
    children: [
      (0, j.jsx)(`h2`, { className: `cond sec-title`, children: e }),
      (0, j.jsxs)(`div`, {
        className: `sec-meta`,
        "data-reveal": !0,
        style: Rr(1),
        children: [
          (0, j.jsx)(`p`, { className: `hud-label`, children: t }),
          n && (0, j.jsx)(`p`, { className: `sec-sub`, children: n }),
        ],
      }),
    ],
  });
}
function ti() {
  return (0, j.jsxs)(`section`, {
    id: `about`,
    className: `section tone tone-ink`,
    children: [
      (0, j.jsx)($r, {}),
      (0, j.jsx)(ei, {
        title: `About`,
        label: `Who I am`,
        sub: `Bekasi, Jawa Barat`,
      }),
      (0, j.jsxs)(`div`, {
        className: `about`,
        children: [
          (0, j.jsxs)(`div`, {
            className: `about-text`,
            children: [
              (0, j.jsx)(`p`, {
                "data-reveal": !0,
                children: `Mahasiswa S1 Sistem Informasi Universitas Bani Saleh dengan IPK 3,59/4,00. Memiliki pengalaman sebagai Field Enumerator di Badan Pusat Statistik (BPS) serta pengalaman magang di bidang IT Development.`,
              }),
              (0, j.jsx)(`p`, {
                "data-reveal": !0,
                style: Rr(1),
                children: `Aktif dalam organisasi kampus pada bidang Humas, menguasai pengelolaan data, Microsoft Office, Figma, Canva, dan Visual Studio Code.`,
              }),
            ],
          }),
          (0, j.jsxs)(`dl`, {
            className: `facts`,
            children: [
              (0, j.jsxs)(`div`, {
                className: `hud`,
                "data-reveal": !0,
                style: Rr(1),
                children: [
                  (0, j.jsx)(`dt`, {
                    className: `hud-label`,
                    children: `Studying`,
                  }),
                  (0, j.jsx)(`dd`, {
                    children: `S1 Sistem Informasi, Univ. Bani Saleh`,
                  }),
                ],
              }),
              (0, j.jsxs)(`div`, {
                className: `hud`,
                "data-reveal": !0,
                style: Rr(2),
                children: [
                  (0, j.jsx)(`dt`, {
                    className: `hud-label`,
                    children: `Based in`,
                  }),
                  (0, j.jsx)(`dd`, { children: `Bekasi, Jawa Barat` }),
                ],
              }),
              (0, j.jsxs)(`div`, {
                className: `hud`,
                "data-reveal": !0,
                style: Rr(3),
                children: [
                  (0, j.jsx)(`dt`, {
                    className: `hud-label`,
                    children: `Works across`,
                  }),
                  (0, j.jsx)(`dd`, {
                    children: `Information Systems, IT Dev, Data`,
                  }),
                ],
              }),
              (0, j.jsxs)(`div`, {
                className: `hud`,
                "data-reveal": !0,
                style: Rr(4),
                children: [
                  (0, j.jsx)(`dt`, {
                    className: `hud-label`,
                    children: `Experience`,
                  }),
                  (0, j.jsx)(`dd`, { children: `BPS & PT Fajar Mas Murni` }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var ni = [
  {
    key: `neptunus`,
    kicker: `Tugas Akhir / Skripsi`,
    place: `Final Project`,
    badge: `Featured`,
    event: `Universitas Bani Saleh`,
    desc: `Pengembangan Sistem Informasi Persediaan Barang berbasis website pada Toko Neptunus Aquatic untuk mengotomatisasi pencatatan stok, transaksi kasir, dan laporan inventaris secara real-time.`,
    facts: [
      { label: `Instansi`, value: `Universitas Bani Saleh` },
      { label: `Tahun`, value: `2026` },
      { label: `Peran`, value: `Full Stack Developer` },
    ],
    tags: [`Web Development`, `Inventory System`, `PHP & MySQL`],
    images: [
      {
        name: `neptunus-landing`,
        alt: `Website Neptunus Aquatic Landing Page`,
      },
      {
        name: `neptunus-dashboard`,
        alt: `Dashboard Grafik dan Inventaris Neptunus Aquatic`,
      },
      {
        name: `neptunus-katalog`,
        alt: `Katalog Produk dan Kasir Neptunus Aquatic`,
      },
    ],
  },
];
function ri({ images: e }) {
  let [t, n] = (0, _.useState)(0),
    [r, i] = (0, _.useState)(!1),
    a = e.length;
  (0, _.useEffect)(() => {
    if (a <= 1 || r || Fr()) return;
    let e = setTimeout(() => n((e) => (e + 1) % a), 4500);
    return () => clearTimeout(e);
  }, [t, r, a]);
  let o = (e) => n((t) => (t + e + a) % a);
  return (0, j.jsxs)(`div`, {
    className: `carousel`,
    onMouseEnter: () => i(!0),
    onMouseLeave: () => i(!1),
    onFocus: () => i(!0),
    onBlur: () => i(!1),
    children: [
      e.map((e, n) =>
        (0, j.jsx)(
          `img`,
          {
            src: `/img/${e.name}-1080.webp`,
            srcSet: `/img/${e.name}-480.webp 480w, /img/${e.name}-1080.webp 1080w`,
            sizes: `(max-width: 900px) 92vw, 46vw`,
            alt: e.alt,
            "aria-hidden": n !== t,
            className: n === t ? `is-current` : void 0,
            style: e.pos ? { objectPosition: e.pos } : void 0,
            loading: n === 0 ? void 0 : `lazy`,
            decoding: `async`,
          },
          e.name,
        ),
      ),
      a > 1 &&
        (0, j.jsxs)(`div`, {
          className: `carousel-ui`,
          children: [
            (0, j.jsx)(`button`, {
              type: `button`,
              className: `carousel-btn`,
              onClick: () => o(-1),
              "aria-label": `Previous photo`,
              children: (0, j.jsx)(Br, { dir: `left` }),
            }),
            (0, j.jsx)(`div`, {
              className: `carousel-dots`,
              children: e.map((e, r) =>
                (0, j.jsx)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => n(r),
                    "aria-label": `Photo ${r + 1} of ${a}`,
                    "aria-current": r === t,
                    className: r === t ? `is-current` : void 0,
                  },
                  e.name,
                ),
              ),
            }),
            (0, j.jsx)(`button`, {
              type: `button`,
              className: `carousel-btn`,
              onClick: () => o(1),
              "aria-label": `Next photo`,
              children: (0, j.jsx)(Br, { dir: `right` }),
            }),
          ],
        }),
    ],
  });
}
var ii = () =>
  (0, j.jsx)(`svg`, {
    className: `icon`,
    viewBox: `0 0 24 24`,
    "aria-hidden": `true`,
    children: (0, j.jsx)(`path`, {
      d: `M8 3h8l-2 6h-4L8 3Zm4 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z`,
    }),
  });
function ai() {
  return (0, j.jsxs)(`section`, {
    id: `achievements`,
    className: `section`,
    children: [
      (0, j.jsx)($r, {}),
      (0, j.jsx)(ei, {
        title: `Achievements`,
        label: `Competitions`,
        sub: `Hackathons & awards`,
      }),
      (0, j.jsx)(`ul`, {
        className: `achievements`,
        children: ni.map((e) =>
          (0, j.jsxs)(
            `li`,
            {
              className: `hud achievement`,
              "data-reveal": !0,
              children: [
                (0, j.jsxs)(`div`, {
                  className: `achievement-media`,
                  children: [
                    (0, j.jsx)(ri, { images: e.images }),
                    (0, j.jsxs)(`span`, {
                      className: `achievement-badge`,
                      children: [(0, j.jsx)(ii, {}), e.badge],
                    }),
                  ],
                }),
                (0, j.jsxs)(`div`, {
                  className: `achievement-body`,
                  children: [
                    (0, j.jsx)(`p`, {
                      className: `hud-label`,
                      children: e.kicker,
                    }),
                    (0, j.jsxs)(`h3`, {
                      className: `cond`,
                      children: [
                        e.place,
                        (0, j.jsx)(`span`, { children: e.event }),
                      ],
                    }),
                    (0, j.jsx)(`p`, {
                      className: `achievement-desc`,
                      children: e.desc,
                    }),
                    (0, j.jsx)(`dl`, {
                      className: `achievement-facts`,
                      children: e.facts.map((e) =>
                        (0, j.jsxs)(
                          `div`,
                          {
                            children: [
                              (0, j.jsx)(`dt`, { children: e.label }),
                              (0, j.jsx)(`dd`, { children: e.value }),
                            ],
                          },
                          e.label,
                        ),
                      ),
                    }),
                    (0, j.jsx)(`ul`, {
                      className: `tags`,
                      children: e.tags.map((e) =>
                        (0, j.jsx)(`li`, { children: e }, e),
                      ),
                    }),
                    e.link &&
                      (0, j.jsxs)(`div`, {
                        className: `achievement-actions`,
                        children: [
                          (0, j.jsxs)(jn, {
                            to: e.link,
                            className: `cut-btn is-solid`,
                            children: [`Read the story `, (0, j.jsx)(zr, {})],
                          }),
                          e.related &&
                            (0, j.jsx)(jn, {
                              to: e.related.url,
                              className: `venture-detail`,
                              children: e.related.label,
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            },
            e.key,
          ),
        ),
      }),
    ],
  });
}
var oi = { data: `Data`, design: `Design`, build: `Build`, tools: `Tools` };
function si() {
  return (0, j.jsxs)(`section`, {
    id: `skills`,
    className: `section`,
    "data-reveal-style": `scan`,
    children: [
      (0, j.jsx)($r, {}),
      (0, j.jsx)(ei, {
        title: `Skills`,
        label: `What I work with`,
        sub: `${kr.length} areas`,
      }),
      (0, j.jsx)(`div`, {
        className: `skills-grid`,
        children: kr.map((e, t) =>
          (0, j.jsxs)(
            `article`,
            {
              className: `hud skill`,
              "data-reveal": !0,
              style: Rr(t),
              children: [
                (0, j.jsx)(`p`, {
                  className: `hud-label`,
                  children: oi[e.key],
                }),
                (0, j.jsx)(`h3`, { className: `cond`, children: e.title }),
                (0, j.jsx)(`p`, { className: `skill-desc`, children: e.desc }),
                (0, j.jsx)(`ul`, {
                  className: `logos`,
                  children: e.tools.map(([e, t]) =>
                    (0, j.jsxs)(
                      `li`,
                      {
                        children: [
                          (0, j.jsx)(`img`, {
                            src: t,
                            alt: ``,
                            width: `20`,
                            height: `20`,
                            loading: `lazy`,
                            decoding: `async`,
                          }),
                          (0, j.jsx)(`span`, { children: e }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            },
            e.key,
          ),
        ),
      }),
    ],
  });
}
function ci({ p: e, i: t }) {
  return (0, j.jsxs)(`li`, {
    className: `project`,
    "data-reveal": !0,
    style: Rr(t % 2),
    children: [
      (0, j.jsx)(`div`, {
        className: `project-media burn`,
        children: (0, j.jsx)(`img`, {
          src: e.img.src,
          srcSet: e.img.srcSet,
          sizes: `(max-width: 900px) 92vw, 46vw`,
          width: `1200`,
          height: `630`,
          alt: e.imgAlt,
          loading: `lazy`,
          decoding: `async`,
        }),
      }),
      (0, j.jsxs)(`div`, {
        className: `project-row`,
        children: [
          (0, j.jsxs)(`p`, {
            className: `hud-label`,
            children: [e.type, ` · `, e.year],
          }),
          (0, j.jsx)(`h3`, { className: `cond`, children: e.name }),
        ],
      }),
      (0, j.jsx)(`p`, { className: `project-desc`, children: e.desc }),
      (e.path || e.url) &&
        (0, j.jsxs)(`div`, {
          className: `project-actions`,
          children: [
            e.path &&
              (0, j.jsxs)(jn, {
                to: e.path,
                className: `cut-btn project-btn`,
                children: [`Details `, (0, j.jsx)(zr, {})],
              }),
            e.url &&
              (0, j.jsxs)(`a`, {
                href: e.url,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `cut-btn`,
                children: [`Live site `, (0, j.jsx)(zr, {})],
              }),
          ],
        }),
    ],
  });
}
function li() {
  return (
    jr.map((e) => e.year).sort(),
    (0, j.jsxs)(`section`, {
      id: `projects`,
      className: `section`,
      children: [
        (0, j.jsx)($r, {}),
        (0, j.jsx)(ei, { title: `Projects` }),
        (0, j.jsx)(`ul`, {
          className: `projects-grid`,
          children: jr.map((e, t) => (0, j.jsx)(ci, { p: e, i: t }, e.name)),
        }),
      ],
    })
  );
}
var ui = () =>
    (0, j.jsx)(`svg`, {
      className: `icon`,
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: (0, j.jsx)(`path`, { d: `m5 13 4 4 10-10` }),
    }),
  di = ({ name: e }) =>
    (0, j.jsxs)(`div`, {
      className: `mock`,
      "aria-hidden": `true`,
      children: [
        (0, j.jsxs)(`div`, {
          className: `mock-side`,
          children: [
            (0, j.jsx)(`span`, { className: `mock-logo`, children: e[0] }),
            (0, j.jsx)(`i`, {}),
            (0, j.jsx)(`i`, {}),
            (0, j.jsx)(`i`, {}),
            (0, j.jsx)(`i`, {}),
          ],
        }),
        (0, j.jsxs)(`div`, {
          className: `mock-main`,
          children: [
            (0, j.jsxs)(`div`, {
              className: `mock-row`,
              children: [
                (0, j.jsx)(`span`, { className: `mock-pill` }),
                (0, j.jsx)(`span`, { className: `mock-pill wide` }),
              ],
            }),
            (0, j.jsxs)(`div`, {
              className: `mock-cards`,
              children: [
                (0, j.jsx)(`span`, {}),
                (0, j.jsx)(`span`, {}),
                (0, j.jsx)(`span`, {}),
              ],
            }),
            (0, j.jsx)(`div`, {
              className: `mock-chart`,
              children: [46, 68, 38, 82, 58, 94, 72].map((e, t) =>
                (0, j.jsx)(`i`, { style: { height: `${e}%` } }, t),
              ),
            }),
          ],
        }),
      ],
    });
function fi({ label: e, title: t, sub: n }) {
  return (0, j.jsxs)(`div`, {
    className: `sub-head`,
    "data-reveal": !0,
    children: [
      (0, j.jsx)(`p`, { className: `hud-label`, children: e }),
      (0, j.jsx)(`h3`, { className: `cond`, children: t }),
      n && (0, j.jsx)(`p`, { className: `sub-sub`, children: n }),
    ],
  });
}
function pi({ v: e, i: t }) {
  return (0, j.jsx)(`li`, {
    className: `venture`,
    "data-reveal": !0,
    style: { ...Rr(t), "--accent": e.accent },
    children: (0, j.jsxs)(`article`, {
      className: `hud venture-card${t % 2 ? ` is-reverse` : ``}`,
      children: [
        (0, j.jsxs)(`div`, {
          className: `venture-screen`,
          children: [
            e.poster
              ? (0, j.jsx)(`div`, {
                  className: `venture-poster`,
                  children: (0, j.jsx)(`img`, {
                    src: e.poster.src,
                    srcSet: e.poster.srcSet,
                    sizes: `(max-width: 900px) 70vw, 340px`,
                    width: e.poster.w,
                    height: e.poster.h,
                    alt: `${e.name} poster`,
                    loading: `lazy`,
                    decoding: `async`,
                  }),
                })
              : (0, j.jsxs)(`div`, {
                  className: `browser`,
                  children: [
                    (0, j.jsxs)(`div`, {
                      className: `browser-bar`,
                      "aria-hidden": `true`,
                      children: [
                        (0, j.jsx)(`span`, { className: `dot` }),
                        (0, j.jsx)(`span`, { className: `dot` }),
                        (0, j.jsx)(`span`, { className: `dot` }),
                        (0, j.jsx)(`span`, {
                          className: `browser-url`,
                          children: e.domain,
                        }),
                      ],
                    }),
                    (0, j.jsx)(di, { name: e.name }),
                  ],
                }),
            (0, j.jsx)(`span`, {
              className: `venture-status`,
              children: e.status,
            }),
            (0, j.jsx)(`span`, {
              className: `venture-domain`,
              children: e.domain,
            }),
          ],
        }),
        (0, j.jsxs)(`div`, {
          className: `venture-body`,
          children: [
            (0, j.jsxs)(`p`, {
              className: `hud-label`,
              children: [`Founder · SaaS`, e.product && ` · ${e.product}`],
            }),
            (0, j.jsx)(`h3`, { className: `cond`, children: e.name }),
            (0, j.jsx)(`p`, {
              className: `venture-tagline`,
              children: e.tagline,
            }),
            (0, j.jsx)(`p`, { className: `venture-desc`, children: e.desc }),
            (0, j.jsx)(`ul`, {
              className: `venture-features`,
              children: e.features.map((e) =>
                (0, j.jsxs)(`li`, { children: [(0, j.jsx)(ui, {}), e] }, e),
              ),
            }),
            (0, j.jsxs)(`div`, {
              className: `venture-foot`,
              children: [
                (0, j.jsx)(`ul`, {
                  className: `tags venture-stack`,
                  children: e.stack.map((e) =>
                    (0, j.jsx)(`li`, { children: e }, e),
                  ),
                }),
                e.url
                  ? (0, j.jsxs)(`div`, {
                      className: `venture-actions`,
                      children: [
                        e.detail &&
                          (e.detail.url.startsWith(`/`)
                            ? (0, j.jsx)(jn, {
                                to: e.detail.url,
                                className: `venture-detail`,
                                children: e.detail.label,
                              })
                            : (0, j.jsx)(`a`, {
                                href: e.detail.url,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                className: `venture-detail`,
                                children: e.detail.label,
                              })),
                        (0, j.jsxs)(`a`, {
                          href: e.url,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `cut-btn`,
                          children: [`Visit site `, (0, j.jsx)(zr, {})],
                        }),
                      ],
                    })
                  : (0, j.jsx)(`span`, {
                      className: `venture-soon`,
                      children: `Launching soon`,
                    }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var mi = () =>
  (0, j.jsx)(`ul`, {
    className: `ventures`,
    children: Nr.map((e, t) => (0, j.jsx)(pi, { v: e, i: t }, e.key)),
  });
function hi({ onOpen: e }) {
  let t = Mr.gallery,
    n = (0, _.useRef)(null),
    [r, i] = (0, _.useState)({ i: 0, p: 0 }),
    c = (0, _.useRef)(null),
    d = (0, _.useRef)(null),
    a = (0, _.useCallback)(() => {
      let e = n.current;
      if (!e) return;
      let t = e.scrollWidth - e.clientWidth,
        r = e.firstElementChild ? e.firstElementChild.getBoundingClientRect().width : 0,
        a = parseFloat(getComputedStyle(e).columnGap || `0`) || 0,
        o = r + a > 0 ? r + a : 1,
        s = 0;
      (t > 0 &&
        (s =
          e.scrollLeft >= t - 2
            ? Mr.gallery.length - 1
            : Math.round(e.scrollLeft / o)),
        i({
          i: Math.max(0, Math.min(Mr.gallery.length - 1, s)),
          p: t > 0 ? Math.min(1, Math.max(0, e.scrollLeft / t)) : 0,
        }));
    }, []),
    o = (0, _.useCallback)((e) => {
      let t = n.current;
      if (!t) return;
      let r = t.firstElementChild ? t.firstElementChild.getBoundingClientRect().width : 320,
        i = parseFloat(getComputedStyle(t).columnGap || `0`) || 0,
        a = r + i > 0 ? r + i : 1,
        o = c.current ?? Math.round(t.scrollLeft / a),
        s = Math.max(0, Math.min(Mr.gallery.length - 1, o + e));
      ((c.current = s),
        t.scrollTo({ left: s * a, behavior: `smooth` }),
        clearTimeout(d.current),
        (d.current = setTimeout(() => (c.current = null), 700)));
    }, []);
  (0, _.useEffect)(() => {
    let e = n.current;
    if (!e) return;
    (a(),
      e.addEventListener(`scroll`, a, { passive: !0 }),
      window.addEventListener(`resize`, a));
    return () => {
      (e.removeEventListener(`scroll`, a),
        window.removeEventListener(`resize`, a));
    };
  }, [a]);
  let s = Math.max(100 / t.length, r.p * 100);
  return (0, j.jsxs)(`div`, {
    className: `hud business`,
    "data-reveal": !0,
    children: (0, j.jsxs)(`div`, {
      className: `cert-deck`,
      children: [
        (0, j.jsx)(`button`, {
          type: `button`,
          className: `cert-arrow cert-arrow-prev`,
          onClick: () => o(-1),
          disabled: r.i === 0,
          "aria-label": `Previous certificate`,
          children: (0, j.jsx)(Br, { dir: `left` }),
        }),
        (0, j.jsxs)(`div`, {
          className: `gallery-wrap`,
          children: [
            (0, j.jsx)(`ul`, {
              ref: n,
              className: `gallery`,
              "aria-label": `Certificates`,
              children: t.map((t, n2) =>
                (0, j.jsxs)(
                  `li`,
                  {
                    className: `gallery-item`,
                    children: [
                      (0, j.jsxs)(`button`, {
                        type: `button`,
                        className: `burn`,
                        onClick: () => e(n2),
                        "aria-label": `Open ${t.title || `Certificate ${n2 + 1}`}`,
                        children: [
                          (0, j.jsx)(`img`, {
                            src: t.srcSet.split(` `)[0],
                            srcSet: t.srcSet,
                            sizes: `(max-width: 640px) 70vw, 470px`,
                            width: t.w,
                            height: t.h,
                            alt: t.title || ``,
                            loading: `lazy`,
                            decoding: `async`,
                          }),
                          (0, j.jsx)(`span`, {
                            className: `cert-overlay-badge`,
                            children: `Preview`,
                          }),
                        ],
                      }),
                      (0, j.jsxs)(`div`, {
                        className: `cert-info`,
                        children: [
                          (0, j.jsxs)(`div`, {
                            className: `cert-meta`,
                            children: [
                              (0, j.jsx)(`span`, {
                                className: `cert-tag`,
                                children: `Credential`,
                              }),
                              (0, j.jsx)(`span`, {
                                className: `cert-index`,
                                children: `#0${n2 + 1}`,
                              }),
                            ],
                          }),
                          (0, j.jsx)(`h4`, {
                            className: `cert-title`,
                            children: t.title,
                          }),
                        ],
                      }),
                    ],
                  },
                  t.src,
                ),
              ),
            }),
            (0, j.jsx)(`div`, {
              className: `cert-status`,
              children: (0, j.jsx)(`span`, {
                className: `cert-status-track`,
                role: `progressbar`,
                "aria-label": `Certificate position`,
                "aria-valuemin": 1,
                "aria-valuemax": t.length,
                "aria-valuenow": r.i + 1,
                "aria-valuetext": `${r.i + 1} / ${t.length}`,
                style: { "--p": `${s}%`, "--n": t.length },
                children: (0, j.jsx)(`span`, {
                  className: `cert-status-fill`,
                }),
              }),
            }),
          ],
        }),
        (0, j.jsx)(`button`, {
          type: `button`,
          className: `cert-arrow cert-arrow-next`,
          onClick: () => o(1),
          disabled: r.i >= t.length - 1,
          "aria-label": `Next certificate`,
          children: (0, j.jsx)(Br, { dir: `right` }),
        }),
      ],
    }),
  });
}

function gi({ onOpen: e }) {
  return (0, j.jsxs)(`section`, {
    id: `certificates`,
    className: `section`,
    "data-reveal-style": `scan`,
    children: [
      (0, j.jsx)($r, {}),
      (0, j.jsx)(ei, {
        title: `Certificates`,
        label: `Credentials`,
        sub: `${Mr.gallery.length} verified`,
      }),
      (0, j.jsx)(fi, {
        label: `Credentials`,
        title: `On the ground`,
        sub: `Certificates & Qualifications`,
      }),
      (0, j.jsx)(hi, { onOpen: e }),
    ],
  });
}
function _i({ index: e, setIndex: t }) {
  let n = Mr.gallery,
    r = (0, _.useRef)(null),
    i = (0, _.useCallback)(() => t(null), [t]),
    a = (0, _.useCallback)(
      (e) => t((t) => Math.min(n.length - 1, Math.max(0, t + e))),
      [t, n.length],
    );
  (0, _.useEffect)(() => {
    r.current?.focus();
    let e = (e) => {
      (e.key === `Escape` && i(),
        e.key === `ArrowRight` && a(1),
        e.key === `ArrowLeft` && a(-1));
    };
    return (
      window.addEventListener(`keydown`, e),
      (document.body.style.overflow = `hidden`),
      () => {
        (window.removeEventListener(`keydown`, e),
          (document.body.style.overflow = ``));
      }
    );
  }, [i, a]);
  let o = n[e];
  return (0, j.jsxs)(`div`, {
    className: `lightbox`,
    role: `dialog`,
    "aria-modal": `true`,
    "aria-label": `Poster viewer`,
    onClick: i,
    children: [
      (0, j.jsx)(`button`, {
        ref: r,
        type: `button`,
        className: `lb-btn lb-close`,
        onClick: i,
        "aria-label": `Close`,
        children: (0, j.jsx)(Hr, {}),
      }),
      e > 0 &&
        (0, j.jsx)(`button`, {
          type: `button`,
          className: `lb-btn lb-prev`,
          onClick: (e) => {
            (e.stopPropagation(), a(-1));
          },
          "aria-label": `Previous poster`,
          children: (0, j.jsx)(Br, { dir: `left` }),
        }),
      e < n.length - 1 &&
        (0, j.jsx)(`button`, {
          type: `button`,
          className: `lb-btn lb-next`,
          onClick: (e) => {
            (e.stopPropagation(), a(1));
          },
          "aria-label": `Next poster`,
          children: (0, j.jsx)(Br, { dir: `right` }),
        }),
      (0, j.jsx)(
        `img`,
        {
          src: o.src,
          width: o.w,
          height: o.h,
          alt: `Certificate ${e + 1}`,
          onClick: (e) => e.stopPropagation(),
        },
        o.src,
      ),
    ],
  });
}
function vi() {
  return (0, j.jsxs)(`section`, {
    id: `contact`,
    className: `section contact tone tone-ink`,
    "data-reveal-style": `scan`,
    children: [
      (0, j.jsx)($r, {}),
      (0, j.jsxs)(`div`, {
        "data-reveal": `wipe`,
        children: [
          (0, j.jsxs)(`h2`, {
            className: `cond contact-title`,
            children: [`Let's`, (0, j.jsx)(`br`, {}), `work.`],
          }),
          (0, j.jsx)(`p`, {
            className: `contact-sub`,
            "data-reveal": !0,
            style: Rr(1),
            children: `I'm open to projects, collaborations and internships.`,
          }),
        ],
      }),
      (0, j.jsx)(`ul`, {
        className: `contact-list`,
        children: Pr.map((e, t) =>
          (0, j.jsx)(
            `li`,
            {
              "data-reveal": !0,
              style: Rr(t),
              children: (0, j.jsxs)(`a`, {
                className: `hud`,
                href: e.href,
                target: e.href.startsWith(`http`) ? `_blank` : void 0,
                rel: `noopener noreferrer`,
                children: [
                  (0, j.jsx)(`span`, {
                    className: `hud-label`,
                    children: e.label,
                  }),
                  (0, j.jsx)(`span`, {
                    className: `contact-value`,
                    children: e.value,
                  }),
                  (0, j.jsx)(zr, {}),
                ],
              }),
            },
            e.label,
          ),
        ),
      }),
    ],
  });
}
function yi() {
  let [e, t] = (0, _.useState)(null);
  return (
    Ir(),
    Lr(),
    (0, j.jsxs)(`div`, {
      className: `portfolio`,
      children: [
        (0, j.jsx)(`a`, {
          href: `#about`,
          className: `skip-link`,
          children: `Skip to content`,
        }),
        (0, j.jsx)(Wr, {}),
        (0, j.jsxs)(`main`, {
          children: [
            (0, j.jsx)(Qr, {}),
            (0, j.jsxs)(`div`, {
              className: `paper`,
              children: [
                (0, j.jsx)(ti, {}),
                (0, j.jsx)(ai, {}),
                (0, j.jsx)(si, {}),
                (0, j.jsx)(li, {}),
                (0, j.jsx)(gi, { onOpen: t }),
                (0, j.jsx)(vi, {}),
                (0, j.jsxs)(`footer`, {
                  className: `footer tone tone-ink`,
                  children: [
                    (0, j.jsx)(`span`, {
                      className: `cond footer-name`,
                      children: `Christin Latip`,
                    }),
                    (0, j.jsx)(`span`, {
                      children: `Built with React and three.js in Bekasi`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e !== null && (0, j.jsx)(_i, { index: e, setIndex: t }),
      ],
    })
  );
}
var bi = (0, _.lazy)(() =>
    S(() => import(`./passkru-ngep.js`), __vite__mapDeps([0, 1, 2])),
  ),
  xi = (0, _.lazy)(() =>
    S(() => import(`./passkru-startup.js`), __vite__mapDeps([3, 1, 2])),
  ),
  Si = (0, _.lazy)(() =>
    S(() => import(`./findmoy.js`), __vite__mapDeps([4, 1, 2])),
  ),
  Ci = (0, _.lazy)(() =>
    S(() => import(`./project-detail.js`), __vite__mapDeps([5, 1, 2])),
  );
v.createRoot(document.getElementById(`root`)).render(
  (0, j.jsx)(_.StrictMode, {
    children: (0, j.jsx)(On, {
      children: (0, j.jsx)(_.Suspense, {
        fallback: null,
        children: (0, j.jsxs)(Bt, {
          children: [
            (0, j.jsx)(Rt, { path: `/`, element: (0, j.jsx)(yi, {}) }),
            (0, j.jsx)(Rt, {
              path: `/project/passkru_ngep`,
              element: (0, j.jsx)(bi, {}),
            }),
            (0, j.jsx)(Rt, {
              path: `/project/passkru_startup`,
              element: (0, j.jsx)(xi, {}),
            }),
            (0, j.jsx)(Rt, {
              path: `/project/findmoy`,
              element: (0, j.jsx)(Si, {}),
            }),
            (0, j.jsx)(Rt, {
              path: `/project/:slug`,
              element: (0, j.jsx)(Ci, {}),
            }),
          ],
        }),
      }),
    }),
  }),
);
export { mt as a, Lt as i, Or as n, u as o, jn as r, c as s, $r as t };
