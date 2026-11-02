import { n as e, o as t, r as n, s as r, t as i } from "./index-DJQkPPgL.js";
var a = r(t(), 1),
  o = e(),
  s = ({ d: e }) =>
    (0, o.jsx)(`svg`, {
      className: `icon`,
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: (0, o.jsx)(`path`, { d: e }),
    }),
  c = () => (0, o.jsx)(s, { d: `M7 17 17 7M8 7h9v9` }),
  l = () => (0, o.jsx)(s, { d: `M19 12H5m6-6-6 6 6 6` }),
  u = {
    plan: `M4 5h16M4 12h10M4 19h7m8-4 2 2-5 5-3-3`,
    quiz: `M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3m.1 4h0M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z`,
    cards: `M3 7h14v12H3zM7 3h14v12`,
    timer: `M12 13V9m-3-7h6M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z`,
    target: `M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`,
    paper: `M14 3H6v18h12V7l-4-4Zm0 0v4h4M9 13h6M9 17h4`,
    mentor: `M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0`,
    news: `M4 5h13v14H6a2 2 0 0 1-2-2V5Zm13 4h3v8a2 2 0 0 1-4 0M8 9h5M8 13h5`,
    chart: `M4 20V10m6 10V4m6 16v-7m4 7H2`,
    lang: `M4 5h8M8 3v2m2 0c0 4-3 7-6 8m2-4c1 2 3 3 5 3m3 9 4-10 4 10m-7-3h6`,
    flag: `M5 21V4m0 0h11l-2 4 2 4H5`,
    hand: `M9 11V5a2 2 0 0 1 4 0v6m0-2a2 2 0 0 1 4 0v4a7 7 0 0 1-7 7 6 6 0 0 1-5-3l-2-4a2 2 0 0 1 3-2l2 2`,
    queue: `M4 6h16M4 12h16M4 18h10`,
    game: `M6 9h4M8 7v4m7-1h.01M18 12h.01M7 5h10a5 5 0 0 1 5 5v2a5 5 0 0 1-9 3h-2a5 5 0 0 1-9-3v-2a5 5 0 0 1 5-5Z`,
    code: `m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14`,
    book: `M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Zm0 14a2 2 0 0 1 2-2h13`,
    robot: `M12 3v3m-6 3h12v10H6zm3 4h.01M15 13h.01M9 17h6M3 12v3m18-3v3`,
    cart: `M3 4h2l2.4 11h11L21 8H6.5M9 20h.01M18 20h.01`,
    lock: `M6 11h12v10H6zm2 0V8a4 4 0 0 1 8 0v3`,
    terminal: `M4 5h16v14H4zm3 4 3 3-3 3m5 0h5`,
    sound: `M4 10v4h4l5 4V6L8 10H4Zm12-1a4 4 0 0 1 0 6`,
    moon: `M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10Z`,
    down: `M12 4v14m-6-6 6 6 6-6M5 21h14`,
    pause: `M8 5v14m8-14v14`,
    users: `M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 10a7 7 0 0 1 14 0m1-10a3 3 0 1 0 0-6m2 16a6 6 0 0 0-3-5`,
    signal: `M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01`,
  };
function d({ title: e, accent: t, crumb: r, children: s, end: c }) {
  return (
    (0, a.useEffect)(() => {
      (window.scrollTo(0, 0), (document.title = `${e} | Christin Latip`));
    }, [e]),
    (0, o.jsxs)(`div`, {
      className: `case`,
      style: { "--accent": t },
      children: [
        (0, o.jsx)(i, {}),
        (0, o.jsx)(`header`, {
          className: `case-bar`,
          children: (0, o.jsxs)(`div`, {
            className: `case-wrap`,
            children: [
              (0, o.jsxs)(n, {
                to: `/`,
                className: `case-back`,
                children: [(0, o.jsx)(l, {}), `Portfolio`],
              }),
              (0, o.jsx)(n, {
                to: `/`,
                className: `cond case-brand`,
                children: `Christin Latip`,
              }),
              (0, o.jsx)(`span`, { className: `case-crumb`, children: r }),
            ],
          }),
        }),
        (0, o.jsx)(`main`, { className: `case-wrap`, children: s }),
        c &&
          (0, o.jsx)(`section`, {
            className: `case-end tone tone-ink`,
            style: { "--accent": `#ffd43b` },
            children: (0, o.jsxs)(`div`, {
              className: `case-wrap`,
              children: [
                (0, o.jsxs)(`div`, {
                  children: [
                    (0, o.jsx)(`h2`, { className: `cond`, children: c.title }),
                    c.sub && (0, o.jsx)(`p`, { children: c.sub }),
                  ],
                }),
                (0, o.jsx)(`div`, {
                  className: `case-actions`,
                  children: c.actions,
                }),
              ],
            }),
          }),
      ],
    })
  );
}
function f({ eyebrow: e, title: t, lede: n, tags: r, actions: i, media: a }) {
  return (0, o.jsxs)(`section`, {
    className: `case-hero`,
    children: [
      (0, o.jsxs)(`div`, {
        className: `case-in`,
        children: [
          (0, o.jsx)(`p`, {
            className: `hud-label case-eyebrow`,
            style: { "--i": 0 },
            children: e,
          }),
          (0, o.jsx)(`h1`, {
            className: `cond case-title`,
            style: { "--i": 1 },
            children: t,
          }),
          (0, o.jsx)(`p`, {
            className: `case-lede`,
            style: { "--i": 2 },
            children: n,
          }),
          r &&
            (0, o.jsx)(`ul`, {
              className: `tags`,
              style: { "--i": 3 },
              children: r.map((e) => (0, o.jsx)(`li`, { children: e }, e)),
            }),
          i &&
            (0, o.jsx)(`div`, {
              className: `case-actions`,
              style: { "--i": 4 },
              children: i,
            }),
        ],
      }),
      (0, o.jsx)(`div`, {
        className: `case-in`,
        children: (0, o.jsx)(`div`, { style: { "--i": 2 }, children: a }),
      }),
    ],
  });
}
function p({ label: e, title: t, sub: n, children: r }) {
  return (0, o.jsxs)(`section`, {
    className: `case-sec`,
    children: [
      (0, o.jsxs)(`div`, {
        className: `case-sec-head`,
        children: [
          (0, o.jsxs)(`div`, {
            children: [
              (0, o.jsx)(`p`, { className: `hud-label`, children: e }),
              (0, o.jsx)(`h2`, { className: `cond`, children: t }),
            ],
          }),
          n && (0, o.jsx)(`p`, { children: n }),
        ],
      }),
      r,
    ],
  });
}
var m = ({ items: e }) =>
    (0, o.jsx)(`div`, {
      className: `case-stats`,
      style: { "--n": e.length },
      children: e.map((e) =>
        (0, o.jsxs)(
          `div`,
          {
            className: `hud case-stat`,
            children: [
              (0, o.jsx)(`b`, { className: `cond`, children: e.value }),
              (0, o.jsx)(`span`, { children: e.label }),
            ],
          },
          e.label,
        ),
      ),
    }),
  h = ({ items: e, cols: t = 3 }) =>
    (0, o.jsx)(`div`, {
      className: `case-grid`,
      style: { "--cols": t },
      children: e.map((e) =>
        (0, o.jsxs)(
          `article`,
          {
            className: `hud case-card`,
            children: [
              e.icon &&
                (0, o.jsx)(`span`, {
                  className: `case-card-icon`,
                  children: (0, o.jsx)(s, { d: u[e.icon] }),
                }),
              (0, o.jsx)(`h3`, { className: `cond`, children: e.title }),
              (0, o.jsx)(`p`, { children: e.desc }),
            ],
          },
          e.title,
        ),
      ),
    }),
  g = ({ href: e, children: t, solid: n }) =>
    (0, o.jsxs)(`a`, {
      href: e,
      target: `_blank`,
      rel: `noopener noreferrer`,
      className: `cut-btn${n ? ` is-solid` : ``}`,
      children: [t, ` `, (0, o.jsx)(c, {})],
    }),
  _ = ({ to: e, children: t, solid: r }) =>
    (0, o.jsxs)(n, {
      to: e,
      className: `cut-btn${r ? ` is-solid` : ``}`,
      children: [t, ` `, (0, o.jsx)(c, {})],
    });
export { p as a, m as c, d as i, h as n, g as o, f as r, _ as s, c as t };
