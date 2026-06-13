"use client";

import Image from "next/image";
import { type FC, useEffect, useRef, useState } from "react";

const TELEGRAM_URL = "https://t.me/iamglebnow";
const EMAIL = "iamglebnow@internet.ru";
const CV_URL =
  "https://drive.google.com/file/d/1zV_W9MEzkIs_Ei9-J4DfR6w3dRiMvzbZ/view?usp=sharing";

const cases = [
  { id: "01", shots: 3 },
  { id: "02", shots: 0 },
  { id: "03", shots: 2 },
  { id: "04", shots: 0 },
  { id: "05", shots: 3 },
];

const ContactButtons: FC<{ centered?: boolean }> = ({ centered = false }) => (
  <div className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="h-btn px-5 flex items-center text-white rounded-full text-ui font-medium bg-btn-primary hover:opacity-90 transition-opacity"
    >
      Написать в телегу
    </a>
    <a
      href={`mailto:${EMAIL}`}
      className="h-btn px-5 flex items-center border border-gray-300 rounded-full text-ui font-medium hover:bg-gray-50 transition-colors"
    >
      Написать на почту
    </a>
    <a
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="h-btn px-5 flex items-center gap-2 border border-gray-300 rounded-full text-ui font-medium hover:bg-gray-50 transition-colors"
    >
      <span aria-hidden>⬇</span> Скачать резюме
    </a>
  </div>
);

const Avatar: FC<{ size: "lg" | "sm" }> = ({ size }) => {
  const dim = size === "lg" ? "w-[140px] h-[140px]" : "w-[44px] h-[44px]";
  return (
    <div
      className={`${dim} rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative`}
    >
      <Image src="/avatar.jpg" alt="Gleb Galyamov" fill className="object-cover" />
    </div>
  );
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1160px] w-full mx-auto">
        {/* ── Hero ── */}
        <section
          ref={heroRef}
          className="flex flex-col items-center text-center pt-16 pb-12"
        >
          <Avatar size="lg" />

          <h1 className="text-h1 mt-6 mb-3">
            Глеб Галямов
          </h1>

          <p className="text-ui font-normal text-muted mb-8 leading-relaxed">
            Продуктовый дизайнер из Санкт-Петербурга с опытом работы более 4 лет.
            <br />
            Проектирую B2B продукты и CRM-системы — от мобильных приложений до сложных внутренних инструментов.
          </p>

          <ContactButtons centered />
        </section>

        {/* ── Cases ── */}
        <section className="pb-36 space-y-4">
          {cases.map((c) => (
            <div key={c.id}>
              <div className="bg-card rounded-2xl p-5 min-h-[200px] md:min-h-[320px]">
                <span className="text-sm font-medium">Heading</span>
              </div>

              {c.shots > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {Array.from({ length: c.shots }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-card rounded-2xl aspect-[4/3] p-4"
                    >
                      <span className="text-sm font-medium">Heading</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {/* ── Footer ── full-width, slides up when hero leaves viewport */}
      <footer
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 transition-transform duration-500 ease-out ${
          footerVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Avatar size="sm" />
            <span className="text-ui font-medium">Gleb Galyamov</span>
          </div>
          <ContactButtons />
        </div>
      </footer>
    </main>
  );
}
