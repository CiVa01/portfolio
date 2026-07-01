"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { cvBirthDate, cvData } from "./cvData";

function calculateAgeFromBirthDate({ day, month, year }) {
  const now = new Date();
  let age = now.getFullYear() - year;
  const hasBirthdayPassedThisYear =
    now.getMonth() + 1 > month ||
    (now.getMonth() + 1 === month && now.getDate() >= day);

  if (!hasBirthdayPassedThisYear) {
    age -= 1;
  }

  return age;
}

function buildDisplayName(data) {
  const age = calculateAgeFromBirthDate(cvBirthDate);
  return `${data.header.name}, ${age}`;
}

const CONTACT_ICONS = {
  Portfolio: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.29 6.29l.89-.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Work: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Location: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

function HeroContacts({ items }) {
  return (
    <ul className="hero-contacts">
      {items.map((item, i) => (
        <li key={i} className="hero-contact-item">
          <span className="contact-icon">
            {CONTACT_ICONS[item.label] ?? CONTACT_ICONS.Email}
          </span>
          <span className="contact-value">{item.value}</span>
        </li>
      ))}
    </ul>
  );
}

function SideList({ title, items, withDots = false }) {
  return (
    <>
      <h2 className="side-title">{title}</h2>
      <ul className="side-list">
        {items.map((item, index) => {
          if (typeof item === "string") {
            return (
              <li key={`${item}-${index}`} className={withDots ? "dot" : ""}>
                {item}
              </li>
            );
          }

          return (
            <li key={`${item.title || item.institution || "entry"}-${index}`}>
              {item.period ? <p className="period">{item.period}</p> : null}
              {item.institution ? (
                <p className="strong">{item.institution}</p>
              ) : null}
              {item.detail ? <p>{item.detail}</p> : null}
              {item.extra ? <p>{item.extra}</p> : null}
              {item.title ? <p className="strong">{item.title}</p> : null}
              {item.body ? <p>{item.body}</p> : null}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function MainEntries({ items }) {
  return (
    <div className="entries">
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className={`entry${item.highlight ? " highlighted" : ""}`}
        >
          <div className="entry-header">
            <h3>{item.title}</h3>
            {item.period ? <span className="badge">{item.period}</span> : null}
          </div>
          {item.role ? <p className="entry-meta">{item.role}</p> : null}
          {!item.role && item.meta ? (
            <p className="entry-meta">{item.meta}</p>
          ) : null}
          {item.body ? <p className="entry-body">{item.body}</p> : null}
          {item.bullets ? (
            <ul className="entry-bullets">
              {item.bullets.map((bullet, bulletIndex) => (
                <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}

async function loadCircularPortrait() {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const size = 168; // 2× PDF circle diameter for crisp rendering
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      // Circular clip
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();

      // Replicate CSS: object-fit cover (landscape → fills height, crops sides)
      const aspect = img.naturalWidth / img.naturalHeight;
      const coverH = size;
      const coverW = size * aspect;
      const coverX = (size - coverW) / 2; // centred horizontally
      const coverY = 0;

      // Replicate CSS: scale(2) with transform-origin 50% 28%
      const ax = size * 0.5;
      const ay = size * 0.28;
      const s = 2;
      const finalX = ax - (ax - coverX) * s;
      const finalY = ay - (ay - coverY) * s;

      ctx.drawImage(img, finalX, finalY, coverW * s, coverH * s);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = () => resolve(null);
    img.src = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/gallery/myself/graduation.jpg`;
  });
}

async function downloadPdf(lang) {
  try {
    const { jsPDF } = await import("jspdf");
    const data = cvData[lang];
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const leftWidth = 175;
    const rightStartX = leftWidth + 34;
    const rightWidth = pageWidth - rightStartX - 34;

    const portraitDataUrl = await loadCircularPortrait();

    function drawFrame() {
      doc.setFillColor(30, 52, 84);
      doc.rect(0, 0, leftWidth, pageHeight, "F");

      // Photo circle: center (87, 88), radius 42
      if (portraitDataUrl) {
        doc.addImage(portraitDataUrl, "JPEG", 45, 46, 84, 84);
      }

      doc.setDrawColor(57, 168, 209);
      doc.setLineWidth(1.5);
      doc.circle(87, 88, 42, "S");
    }

    function wrapText(text, width) {
      return doc.splitTextToSize(text, width);
    }

    function writeLeftSection(y, title, lines) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(95, 207, 247);
      doc.text(title, 16, y);

      doc.setDrawColor(57, 168, 209);
      doc.setLineWidth(0.6);
      doc.line(16, y + 6, leftWidth - 16, y + 6);

      let currentY = y + 20;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.8);
      doc.setTextColor(230, 241, 250);

      lines.forEach((line) => {
        const wrapped = wrapText(line, leftWidth - 32);
        wrapped.forEach((part) => {
          doc.text(part, 16, currentY);
          currentY += 10;
        });
        currentY += 2;
      });

      return currentY + 8;
    }

    function writeSectionTitle(y, title) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(33, 57, 86);
      doc.text(title, rightStartX, y);
      doc.setDrawColor(203, 213, 224);
      doc.setLineWidth(0.6);
      doc.line(rightStartX, y + 6, rightStartX + rightWidth, y + 6);
      return y + 22;
    }

    let pageIndex = 0;

    function nextPage() {
      if (pageIndex > 0) {
        doc.addPage();
      }
      drawFrame();
      pageIndex += 1;
    }

    nextPage();

    let leftY = 152;
    leftY = writeLeftSection(
      leftY,
      data.ui.sectionTitles.contact,
      data.sidebar.contact.map((entry) => entry.value),
    );
    leftY = writeLeftSection(
      leftY,
      data.ui.sectionTitles.education,
      data.sidebar.education.flatMap((entry) => [
        entry.period,
        entry.institution,
        entry.detail,
        entry.extra || "",
      ]),
    );
    leftY = writeLeftSection(
      leftY,
      data.ui.sectionTitles.skills,
      data.sidebar.skills,
    );
    writeLeftSection(
      leftY,
      data.ui.sectionTitles.languages,
      data.sidebar.languages,
    );

    let y = 56;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.setTextColor(33, 57, 86);
    doc.text(buildDisplayName(data), rightStartX, y);

    y += 18;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(86, 102, 120);
    doc.text(data.header.tagline, rightStartX, y);

    y += 22;
    y = writeSectionTitle(y, data.ui.sectionTitles.profile);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(41, 55, 72);
    wrapText(data.content.profile, rightWidth).forEach((line) => {
      doc.text(line, rightStartX, y);
      y += 14;
    });
    y += 8;

    function ensureSpace(required) {
      if (y + required > pageHeight - 32) {
        nextPage();
        y = 56;
      }
    }

    function writeEntriesSection(title, entries) {
      ensureSpace(40);
      y = writeSectionTitle(y, title);

      entries.forEach((entry) => {
        const bodyLines = entry.body
          ? wrapText(entry.body, rightWidth - 26)
          : [];
        const bulletLines = (entry.bullets || []).flatMap((bullet) =>
          wrapText(`- ${bullet}`, rightWidth - 36),
        );
        const estimated =
          58 +
          bodyLines.length * 13 +
          bulletLines.length * 13 +
          (entry.meta || entry.role ? 14 : 0);

        ensureSpace(estimated);

        doc.setFillColor(
          entry.highlight ? 236 : 246,
          entry.highlight ? 247 : 248,
          entry.highlight ? 252 : 250,
        );
        doc.setDrawColor(215, 226, 236);
        doc.roundedRect(
          rightStartX,
          y - 14,
          rightWidth,
          estimated - 12,
          6,
          6,
          "FD",
        );

        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(32, 52, 80);
        doc.text(entry.title, rightStartX + 12, y + 4);

        if (entry.period) {
          doc.setFillColor(48, 143, 176);
          doc.roundedRect(
            rightStartX + rightWidth - 128,
            y - 6,
            116,
            18,
            3,
            3,
            "F",
          );
          doc.setFont("helvetica", "bold");
          doc.setFontSize(8.5);
          doc.setTextColor(255, 255, 255);
          doc.text(entry.period, rightStartX + rightWidth - 70, y + 6, {
            align: "center",
          });
        }

        let lineY = y + 20;
        if (entry.role || entry.meta) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(10);
          doc.setTextColor(72, 109, 136);
          doc.text(entry.role || entry.meta, rightStartX + 12, lineY);
          lineY += 14;
        }

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.3);
        doc.setTextColor(44, 56, 73);
        bodyLines.forEach((line) => {
          doc.text(line, rightStartX + 12, lineY);
          lineY += 13;
        });

        if (bulletLines.length > 0) {
          lineY += 2;
          bulletLines.forEach((line) => {
            doc.text(line, rightStartX + 14, lineY);
            lineY += 13;
          });
        }

        y += estimated;
      });
    }

    writeEntriesSection(data.ui.sectionTitles.work, data.content.work);
    writeEntriesSection(data.ui.sectionTitles.projects, data.content.projects);
    writeEntriesSection(data.ui.sectionTitles.papers, data.content.papers);

    const fileSuffix = lang === "nl" ? "nl" : "en";
    doc.save(`cis-van-aken-cv-${fileSuffix}.pdf`);
  } catch {
    window.print();
  }
}

export default function CvClient() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialLang = params.get("lang") === "nl" ? "nl" : "en";
    setLanguage(initialLang);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    document.body.setAttribute("data-language", language);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }, [language]);

  const data = useMemo(() => cvData[language], [language]);

  return (
    <>
      <nav className="top-bar">
        <div className="top-bar-inner">
          <div className="brand-row">
            <span className="brand-name">Cis van Aken</span>
            <a className="chip small ghost" id="back-home" href="/">
              To Portfolio
            </a>
          </div>

          <div className="toolbar" aria-label="CV actions">
            <div
              className="language-switch"
              role="group"
              aria-label="Language"
              data-language={language}
            >
              <button
                className={`chip small${language === "en" ? " active" : ""}`}
                type="button"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
              >
                Eng
              </button>
              <button
                className={`chip small${language === "nl" ? " active" : ""}`}
                type="button"
                aria-pressed={language === "nl"}
                onClick={() => setLanguage("nl")}
              >
                NL
              </button>
            </div>

            <button
              className="chip small accent icon"
              id="export-pdf"
              type="button"
              onClick={() => downloadPdf(language)}
              aria-label={data.ui.exportLabel}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M12 3v9m0 0 3.5-3.5M12 12 8.5 8.5M5 14.5v3h14v-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>PDF</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="app-shell" data-component="cv-shell">
        <header
          className="hero-card main-header animate-in is-visible"
          data-component="cv-hero"
        >
          <div className="hero-photo">
            <div className="photo-ring" aria-label="Portrait">
              <div className="photo-crop">
                <Image
                  src="/images/gallery/myself/graduation.jpg"
                  alt="Cis van Aken graduation portrait"
                  fill
                  sizes="320px"
                  className="photo-image"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h1 id="name-title">{buildDisplayName(data)}</h1>
            <p id="tagline" className="tagline">
              {data.header.tagline}
            </p>
            <div className="hero-details" id="sidebar-contact">
              <HeroContacts items={data.sidebar.contact} />
            </div>
          </div>
        </header>

        <div className="content-grid">
          <div className="main-column" data-component="cv-main-column">
            <section
              className="card main-section animate-in is-visible"
              id="profile-section"
            >
              <h2 className="main-title">{data.ui.sectionTitles.profile}</h2>
              <p className="profile-text">{data.content.profile}</p>
            </section>

            <section
              className="card main-section animate-in is-visible"
              id="work-section"
            >
              <h2 className="main-title">{data.ui.sectionTitles.work}</h2>
              <MainEntries items={data.content.work} />
            </section>

            <section
              className="card main-section animate-in is-visible"
              id="projects-section"
            >
              <h2 className="main-title">{data.ui.sectionTitles.projects}</h2>
              <MainEntries items={data.content.projects} />
            </section>

            <section
              className="card main-section animate-in is-visible"
              id="papers-section"
            >
              <h2 className="main-title">{data.ui.sectionTitles.papers}</h2>
              <MainEntries items={data.content.papers} />
            </section>
          </div>

          <aside
            className="card sidebar-card animate-in is-visible"
            data-component="cv-sidebar"
          >
            <section className="side-block" id="sidebar-education">
              <SideList
                title={data.ui.sectionTitles.education}
                items={data.sidebar.education}
              />
            </section>
            <section className="side-block" id="sidebar-skills">
              <SideList
                title={data.ui.sectionTitles.skills}
                items={data.sidebar.skills}
                withDots
              />
            </section>
            <section className="side-block" id="sidebar-languages">
              <SideList
                title={data.ui.sectionTitles.languages}
                items={data.sidebar.languages}
                withDots
              />
            </section>
            <section className="side-block" id="sidebar-other">
              <SideList
                title={data.ui.sectionTitles.other}
                items={data.sidebar.other}
              />
            </section>
            <section className="side-block" id="sidebar-board">
              <SideList
                title={data.ui.sectionTitles.board}
                items={data.sidebar.board}
              />
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
