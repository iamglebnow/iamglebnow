import type { FC } from "react";

const TELEGRAM_URL = "https://t.me/postmortemx";
const EMAIL = "bequadx@mail.ru";
const CV_URL =
  "https://drive.google.com/file/d/1zV_W9MEzkIs_Ei9-J4DfR6w3dRiMvzbZ/view?usp=sharing";

const cases = [
  {
    index: "01",
    title: "Кейс 1",
    description: "B2B · CRM",
  },
  {
    index: "02",
    title: "Кейс 2",
    description: "Mobile · B2E",
  },
];

const ContactLinks: FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex flex-wrap gap-x-6 gap-y-3 ${className}`}>
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm tracking-wide uppercase border-b border-black pb-0.5 hover:opacity-40 transition-opacity duration-200"
    >
      Telegram
    </a>
    <a
      href={`mailto:${EMAIL}`}
      className="text-sm tracking-wide uppercase border-b border-black pb-0.5 hover:opacity-40 transition-opacity duration-200"
    >
      Email
    </a>
    <a
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm tracking-wide uppercase border-b border-black pb-0.5 hover:opacity-40 transition-opacity duration-200"
    >
      Download CV
    </a>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="px-6 pt-20 pb-28 md:px-16 md:pt-28 md:pb-36 lg:px-24">
        <div className="max-w-5xl">
          {/* eyebrow */}
          <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-10 md:mb-14">
            Product Designer
          </p>

          {/* name */}
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight text-black mb-8 md:mb-10">
            Gleb
            <br />
            Galyamov
          </h1>

          {/* tagline */}
          <p className="text-base md:text-lg text-[#888] max-w-sm leading-relaxed mb-14 md:mb-20">
            Specialising in B2B &amp; B2E products, CRM systems, and mobile
            applications — with a focus on UX and business processes.
          </p>

          <ContactLinks />
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-28 md:pb-36">
        <div className="flex items-baseline gap-4 mb-14 md:mb-20 border-t border-black pt-8">
          <span className="text-xs tracking-[0.2em] uppercase text-[#888]">
            Selected Work
          </span>
        </div>

        <div className="space-y-24 md:space-y-32">
          {cases.map((c) => (
            <article key={c.index} className="group">
              {/* meta row */}
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-xs text-[#888] tracking-widest">
                  {c.index}
                </span>
                <span className="text-xs text-[#888] tracking-wide uppercase">
                  {c.description}
                </span>
              </div>

              {/* screenshot placeholder */}
              <div className="w-full aspect-[16/9] bg-gray-200 mb-8 group-hover:opacity-80 transition-opacity duration-200" />

              {/* title */}
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {c.title}
              </h2>
            </article>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-black">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <span className="text-sm font-bold tracking-tight">
            Gleb Galyamov
          </span>
          <ContactLinks />
        </div>
      </footer>
    </main>
  );
}
