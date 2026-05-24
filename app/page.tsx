import type { FC } from "react";

const TELEGRAM_URL = "https://t.me/postmortemx";
const EMAIL = "bequadx@mail.ru";
const CV_URL =
  "https://drive.google.com/file/d/1zV_W9MEzkIs_Ei9-J4DfR6w3dRiMvzbZ/view?usp=sharing";

const cases = [
  {
    id: "01",
    title: "Кейс 1",
    shots: 3,
  },
  {
    id: "02",
    title: "Кейс 2",
    shots: 0,
  },
];

const gradientBtn =
  "linear-gradient(0.205turn, rgba(84,169,235,1) 0%, rgba(110,187,247,1) 100%)";

const ContactButtons: FC<{ centered?: boolean }> = ({ centered = false }) => (
  <div className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2.5 text-white rounded-full text-[20px] font-medium hover:opacity-90 transition-opacity"
      style={{ background: gradientBtn }}
    >
      Написать в телегу
    </a>
    <a
      href={`mailto:${EMAIL}`}
      className="px-5 py-2.5 border border-gray-300 rounded-full text-[20px] font-medium hover:bg-gray-50 transition-colors"
    >
      Написать на почту
    </a>
    <a
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2.5 border border-gray-300 rounded-full text-[20px] font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
    >
      <span aria-hidden>⬇</span> Скачать резюме
    </a>
  </div>
);

const Avatar: FC<{ size: "lg" | "sm" }> = ({ size }) => {
  const dim = size === "lg" ? "w-24 h-24" : "w-9 h-9";
  return (
    <div
      className={`${dim} rounded-full bg-gray-200 flex-shrink-0 overflow-hidden`}
    >
      {/* Place <Image src="/avatar.jpg" alt="Gleb Galyamov" fill className="object-cover" /> here */}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="flex flex-col items-center text-center px-6 pt-16 pb-12">
        <Avatar size="lg" />

        <h1 className="text-[31px] font-bold mt-6 mb-3 leading-tight">
          Глеб Галямов, продуктовый дизайнер
        </h1>

        <p className="text-[20px] font-normal text-[#888] max-w-md mb-8 leading-relaxed">
          Проектирую B2B и B2E продукты, CRM-системы и мобильные приложения
          с&nbsp;учётом пользовательского опыта и бизнес-процессов
        </p>

        <ContactButtons centered />
      </section>

      {/* ── Cases ── */}
      <section className="px-4 md:px-8 pb-24 max-w-5xl mx-auto space-y-4">
        {cases.map((c) => (
          <div key={c.id}>
            <div className="bg-[#f0f0f0] rounded-2xl p-5 min-h-[200px] md:min-h-[320px]">
              <span className="text-sm font-medium">{c.title}</span>
            </div>

            {c.shots > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {Array.from({ length: c.shots }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#f0f0f0] rounded-2xl aspect-[4/3] p-4"
                  >
                    <span className="text-sm font-medium">Shot</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Avatar size="sm" />
            <span className="text-[20px] font-medium">Gleb Galyamov</span>
          </div>
          <ContactButtons />
        </div>
      </footer>
    </main>
  );
}
