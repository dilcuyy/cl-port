import { n as e } from "./index-DJQkPPgL.js";
import {
  a as t,
  c as n,
  i as r,
  n as i,
  o as a,
  r as o,
  s,
} from "./CaseStudy-C-yjvvF6.js";
var c = e(),
  l = [
    {
      name: `passkru-ngep-1`,
      w: 1080,
      h: 1440,
      alt: `Holding the champion trophy and the 1st Place Award board`,
      caption: `Champion trophy, medal and certificate`,
    },
    {
      name: `passkru-ngep-2`,
      w: 1080,
      h: 810,
      alt: `The PassKru team with their medals and the 1st Place Award`,
      caption: `Team PassKru at Next-Gen's Day`,
    },
    {
      name: `passkru-ngep-3`,
      w: 1080,
      h: 810,
      alt: `PassKru team at the NGEP award ceremony`,
      caption: `Showcase and award ceremony`,
    },
  ],
  u = (e) => ({
    src: `/img/${e}-1080.webp`,
    srcSet: `/img/${e}-480.webp 480w, /img/${e}-1080.webp 1080w`,
  });
function d() {
  return (0, c.jsxs)(r, {
    title: `PassKru, 1st Place at NGEP`,
    accent: `#2f5bea`,
    crumb: `Achievement · 01`,
    end: {
      title: (0, c.jsxs)(c.Fragment, {
        children: [`From pitch`, (0, c.jsx)(`br`, {}), `to product.`],
      }),
      sub: `The prototype that won NGEP is now PassKru, a teacher-exam prep platform in development.`,
      actions: (0, c.jsxs)(c.Fragment, {
        children: [
          (0, c.jsx)(s, {
            to: `/project/passkru_startup`,
            solid: !0,
            children: `The startup`,
          }),
          (0, c.jsx)(a, {
            href: `https://pass-kru67.vercel.app/`,
            children: `Try PassKru`,
          }),
        ],
      }),
    },
    children: [
      (0, c.jsx)(o, {
        eyebrow: `Competition winner · 2026`,
        title: (0, c.jsxs)(c.Fragment, {
          children: [
            `1st place`,
            (0, c.jsx)(`br`, {}),
            (0, c.jsx)(`em`, { children: `NGEP Batch 3` }),
          ],
        }),
        lede: `Our team PassKru won 1st place in the Next-Gen Engagement Program (NGEP) Batch 3, pitching our MVP and business plan against teams from three departments at CADT.`,
        tags: [`Startup`, `Competition`, `Ed-tech`, `2026`],
        actions: (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(s, {
              to: `/project/passkru_startup`,
              solid: !0,
              children: `About PassKru`,
            }),
            (0, c.jsx)(a, {
              href: `https://ngep.idt.edu.kh/`,
              children: `NGEP program`,
            }),
          ],
        }),
        media: (0, c.jsx)(`figure`, {
          className: `case-media`,
          children: (0, c.jsx)(`div`, {
            className: `case-frame`,
            children: (0, c.jsx)(`img`, {
              ...u(`passkru-ngep-2`),
              sizes: `(max-width: 960px) 92vw, 45vw`,
              width: `1080`,
              height: `810`,
              alt: `The PassKru team with their medals and the 1st Place Award`,
              fetchPriority: `high`,
            }),
          }),
        }),
      }),
      (0, c.jsx)(n, {
        items: [
          { value: `1st`, label: `Place, out of every team in the batch` },
          { value: `B3`, label: `Next-Gen Engagement Program, Batch 3` },
          { value: `3`, label: `Departments competing` },
          { value: `25.09`, label: `Next-Gen's Day, Innovation Center, CADT` },
        ],
      }),
      (0, c.jsx)(t, {
        label: `The win`,
        title: `What we pitched`,
        sub: `A working prototype and a business plan, judged at the Next-Gen's Day showcase and award ceremony.`,
        children: (0, c.jsx)(i, {
          items: [
            {
              icon: `target`,
              title: `The problem`,
              desc: `Teacher-exam candidates had no single place to prepare. Practice, past papers and exam news were spread across many sources.`,
            },
            {
              icon: `plan`,
              title: `The product`,
              desc: `PassKru: practice questions, quizzes, flashcards, mock exams and a study plan built around each learner.`,
            },
            {
              icon: `chart`,
              title: `The plan`,
              desc: `An MVP we could demo live, plus the business plan for taking it to candidates across Cambodia.`,
            },
          ],
        }),
      }),
      (0, c.jsx)(t, {
        label: `Gallery`,
        title: `On the day`,
        sub: `Friday 25 September 2026, Cosmos Hall, Innovation Center, CADT.`,
        children: (0, c.jsx)(`div`, {
          className: `case-gallery`,
          children: l.map((e, t) =>
            (0, c.jsxs)(
              `figure`,
              {
                children: [
                  (0, c.jsx)(`img`, {
                    ...u(e.name),
                    sizes:
                      t === 0
                        ? `(max-width: 600px) 92vw, 40vw`
                        : `(max-width: 600px) 92vw, 52vw`,
                    width: e.w,
                    height: e.h,
                    alt: e.alt,
                    loading: `lazy`,
                    decoding: `async`,
                  }),
                  (0, c.jsx)(`figcaption`, { children: e.caption }),
                ],
              },
              e.name,
            ),
          ),
        }),
      }),
    ],
  });
}
export { d as default };
