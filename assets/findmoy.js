import { n as e } from "./index-DJQkPPgL.js";
import {
  a as t,
  c as n,
  i as r,
  n as i,
  o as a,
  r as o,
} from "./CaseStudy-C-yjvvF6.js";
var s = e(),
  c = [
    {
      title: `A comment arrives`,
      desc: `A customer asks about stock under your post. It lands in one queue with everything else from your Page.`,
      live: !0,
    },
    {
      title: `Scams get held`,
      desc: `A link promising money is flagged as a likely scam, with the reason shown. You hide it or keep it.`,
      live: !0,
    },
    {
      title: `Reply in one tap`,
      desc: `For everyday questions, one of your saved answers is suggested. You read it, then send it.`,
    },
    {
      title: `Stock beside the chat`,
      desc: `The item the customer means shows up next to the conversation, with when you last checked it.`,
    },
    {
      title: `The order is recorded`,
      desc: `Turn the conversation into an order and mark it paid, without opening another app.`,
    },
  ],
  l = [
    {
      icon: `lang`,
      title: `Khmer as people write it`,
      desc: `Khmer script, Khmerlish and a mix of both, read directly. Nothing is translated to English first, so the meaning survives.`,
    },
    {
      icon: `flag`,
      title: `A reason with every flag`,
      desc: `Each comment arrives marked safe, offensive or harmful, with the words that triggered it. You see why before you decide.`,
    },
    {
      icon: `hand`,
      title: `You still decide`,
      desc: `FindMoy never hides or replies on its own. A person on your team makes the call, and every action can be undone.`,
    },
    {
      icon: `queue`,
      title: `Busy pages, fully read`,
      desc: `Every comment is checked as it arrives. Scams and abuse rise to the top; criticism of your shop is never hidden for you.`,
    },
  ],
  u = [
    { name: `Facebook comments`, status: `Live`, live: !0 },
    { name: `Messenger`, status: `Building` },
    { name: `TikTok`, status: `Soon` },
    { name: `Telegram`, status: `Soon` },
    { name: `Website chat`, status: `Soon` },
  ],
  d = [
    {
      q: `Do I need to install anything?`,
      a: `No. You connect your Facebook Page once in the browser and FindMoy starts reading new comments. Nothing goes on your phone.`,
    },
    {
      q: `Does it delete comments by itself?`,
      a: `No. FindMoy flags comments and shows the reason. Hiding, replying or leaving a comment is up to a person on your team, and a hide can always be reversed.`,
    },
    {
      q: `What if a customer complains about my shop?`,
      a: `Business criticism stays visible. The blocklist targets insults aimed at people and scams, not customers who are unhappy with you.`,
    },
    {
      q: `Does it understand Khmerlish?`,
      a: `Yes. Khmer script, Khmer written in Latin letters, and both mixed in one sentence are read as written, including everyday misspellings.`,
    },
    {
      q: `When do stock and orders arrive?`,
      a: `They are on the roadmap, not live yet. Moderation works today, the shared inbox is being built, and products, stock and orders come after.`,
    },
  ];
function f() {
  return (0, s.jsxs)(r, {
    title: `FindMoy, how it works`,
    accent: `#0a7a8c`,
    crumb: `SaaS · FindMoy`,
    end: {
      title: (0, s.jsxs)(s.Fragment, {
        children: [`Try it on`, (0, s.jsx)(`br`, {}), `your Page.`],
      }),
      sub: `Connect one Facebook Page, label a few comments, and see what a day on your Page really holds. Free, no card needed.`,
      actions: (0, s.jsx)(a, {
        href: `https://findmoy.app`,
        solid: !0,
        children: `Visit findmoy.app`,
      }),
    },
    children: [
      (0, s.jsx)(o, {
        eyebrow: `Founder · SaaS · Early access`,
        title: (0, s.jsxs)(s.Fragment, {
          children: [
            `FindMoy`,
            (0, s.jsx)(`br`, {}),
            (0, s.jsx)(`em`, { children: `comment to order` }),
          ],
        }),
        lede: `Khmer-first AI for Facebook sellers. FindMoy reads Page comments in Khmer, Khmerlish and English, flags scams and abuse with the reason, and leaves every decision to a person on your team.`,
        tags: [`Facebook Pages`, `AI moderation`, `Khmer NLP`, `Dashboard`],
        actions: (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(a, {
              href: `https://findmoy.app`,
              solid: !0,
              children: `Visit site`,
            }),
            (0, s.jsx)(`a`, {
              href: `#how`,
              className: `cut-btn`,
              children: `How it works`,
            }),
          ],
        }),
        media: (0, s.jsx)(`figure`, {
          className: `case-media case-media-poster`,
          children: (0, s.jsx)(`div`, {
            className: `case-frame`,
            children: (0, s.jsx)(`img`, {
              src: `/img/findmoy-poster-1080.webp`,
              srcSet: `/img/findmoy-poster-640.webp 640w, /img/findmoy-poster-1080.webp 1080w`,
              sizes: `(max-width: 960px) 92vw, 440px`,
              width: `1080`,
              height: `1350`,
              alt: `FindMoy poster: from comment to order, in one place`,
              fetchPriority: `high`,
            }),
          }),
        }),
      }),
      (0, s.jsx)(n, {
        items: [
          {
            value: `4→1`,
            label: `Apps per sale: comments, notebook, Messenger and order book in one place`,
          },
          {
            value: `3`,
            label: `Ways to write one question, understood as one meaning`,
          },
          {
            value: `0`,
            label: `Actions taken on your Page without a person deciding`,
          },
        ],
      }),
      (0, s.jsx)(`p`, {
        className: `case-note`,
        children: `These numbers describe how the product works, not customer results. FindMoy is early, and moderation is the part that is live today.`,
      }),
      (0, s.jsx)(`div`, {
        id: `how`,
        style: { scrollMarginTop: 72 },
        children: (0, s.jsx)(t, {
          label: `How it works`,
          title: `From comment to sale`,
          sub: `Without leaving the chat. The first two steps work today; the rest are on the way.`,
          children: (0, s.jsx)(`ol`, {
            className: `case-steps`,
            children: c.map((e, t) =>
              (0, s.jsxs)(
                `li`,
                {
                  className: `case-step`,
                  children: [
                    (0, s.jsx)(`span`, {
                      className: `cond case-step-num`,
                      children: String(t + 1).padStart(2, `0`),
                    }),
                    (0, s.jsxs)(`div`, {
                      children: [
                        (0, s.jsx)(`h3`, {
                          className: `cond`,
                          children: e.title,
                        }),
                        (0, s.jsx)(`p`, { children: e.desc }),
                      ],
                    }),
                    (0, s.jsx)(`span`, {
                      className: `case-pill${e.live ? ` is-live` : ``}`,
                      children: e.live ? `Live` : `Soon`,
                    }),
                  ],
                },
                e.title,
              ),
            ),
          }),
        }),
      }),
      (0, s.jsx)(t, {
        label: `Principles`,
        title: `Built for sellers`,
        sub: `Sellers work from their phones between customers. The queue, the reason and the decision all sit on one screen.`,
        children: (0, s.jsx)(i, { items: l, cols: 2 }),
      }),
      (0, s.jsx)(t, {
        label: `Channels`,
        title: `Where customers write`,
        sub: `FindMoy works where your customers already message you.`,
        children: (0, s.jsx)(`ul`, {
          className: `case-channels`,
          children: u.map((e) =>
            (0, s.jsxs)(
              `li`,
              {
                children: [
                  e.name,
                  (0, s.jsx)(`span`, {
                    className: `case-pill${e.live ? ` is-live` : ``}`,
                    children: e.status,
                  }),
                ],
              },
              e.name,
            ),
          ),
        }),
      }),
      (0, s.jsx)(t, {
        label: `FAQ`,
        title: `Sellers ask first`,
        children: (0, s.jsx)(`div`, {
          className: `case-faq`,
          children: d.map((e, t) =>
            (0, s.jsxs)(
              `details`,
              {
                open: t === 0,
                children: [
                  (0, s.jsxs)(`summary`, {
                    children: [
                      (0, s.jsx)(`b`, {
                        children: String(t + 1).padStart(2, `0`),
                      }),
                      e.q,
                    ],
                  }),
                  (0, s.jsx)(`p`, { children: e.a }),
                ],
              },
              e.q,
            ),
          ),
        }),
      }),
    ],
  });
}
export { f as default };
