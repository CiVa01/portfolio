(function () {
  "use strict";

  const cvData = window.cvData;
  const birthDate = window.cvBirthDate || { day: 18, month: 3, year: 2001 };

  if (!cvData) {
    return;
  }

  const body = document.body;
  const buttons = document.querySelectorAll("[data-language-toggle]");
  const backHomeBtn = document.getElementById("back-home");
  const exportBtn = document.getElementById("export-pdf");
  const initialParams = new URLSearchParams(window.location.search);
  const initialLang = initialParams.get("lang") === "nl" ? "nl" : "en";

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

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
    const age = calculateAgeFromBirthDate(birthDate);
    return `${data.header.name}, ${age}`;
  }

  function renderSideList(title, items, withDots) {
    const rows = items
      .map((item) => {
        if (typeof item === "string") {
          return `<li${withDots ? ' class="dot"' : ""}>${escapeHtml(item)}</li>`;
        }

        return `<li>
          ${item.period ? `<p class="period">${escapeHtml(item.period)}</p>` : ""}
          ${item.institution ? `<p class="strong">${escapeHtml(item.institution)}</p>` : ""}
          ${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ""}
          ${item.extra ? `<p>${escapeHtml(item.extra)}</p>` : ""}
          ${item.title ? `<p class="strong">${escapeHtml(item.title)}</p>` : ""}
          ${item.body ? `<p>${escapeHtml(item.body)}</p>` : ""}
        </li>`;
      })
      .join("");

    return `<h2 class="side-title">${escapeHtml(title)}</h2><ul class="side-list">${rows}</ul>`;
  }

  function renderMainItems(items) {
    return items
      .map((item) => {
        const bullets = item.bullets
          ? `<ul class="entry-bullets">${item.bullets
              .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
              .join("")}</ul>`
          : "";

        return `<article class="entry${item.highlight ? " highlighted" : ""}">
          <div class="entry-header">
            <h3>${escapeHtml(item.title)}</h3>
            ${item.period ? `<span class="badge">${escapeHtml(item.period)}</span>` : ""}
          </div>
          ${item.role ? `<p class="entry-meta">${escapeHtml(item.role)}</p>` : ""}
          ${item.meta ? `<p class="entry-meta">${escapeHtml(item.meta)}</p>` : ""}
          ${item.body ? `<p class="entry-body">${escapeHtml(item.body)}</p>` : ""}
          ${bullets}
        </article>`;
      })
      .join("");
  }

  function animateRenderedBlocks() {
    const motionReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const blocks = document.querySelectorAll(".hero-card, .card, .side-block");

    blocks.forEach((block) => {
      block.classList.remove("is-visible");
      block.classList.add("animate-in");
    });

    if (motionReduced) {
      blocks.forEach((block) => {
        block.classList.add("is-visible");
      });
      return;
    }

    blocks.forEach((block, index) => {
      block.style.animationDelay = `${Math.min(index * 55, 350)}ms`;
      requestAnimationFrame(() => {
        block.classList.add("is-visible");
      });
    });
  }

  function renderLanguage(lang) {
    const data = cvData[lang];
    body.setAttribute("data-language", lang);
    document.documentElement.setAttribute("lang", lang);

    document.getElementById("photo-label").textContent = data.ui.photoLabel;
    backHomeBtn.textContent = data.ui.backLabel;
    exportBtn.textContent = data.ui.exportLabel;
    document.getElementById("name-title").textContent = buildDisplayName(data);
    document.getElementById("tagline").textContent = data.header.tagline;

    document.getElementById("sidebar-contact").innerHTML = renderSideList(
      data.ui.sectionTitles.contact,
      data.sidebar.contact.map((entry) => `${entry.value}`),
      false,
    );
    document.getElementById("sidebar-education").innerHTML = renderSideList(
      data.ui.sectionTitles.education,
      data.sidebar.education,
      false,
    );
    document.getElementById("sidebar-skills").innerHTML = renderSideList(
      data.ui.sectionTitles.skills,
      data.sidebar.skills,
      true,
    );
    document.getElementById("sidebar-languages").innerHTML = renderSideList(
      data.ui.sectionTitles.languages,
      data.sidebar.languages,
      true,
    );
    document.getElementById("sidebar-other").innerHTML = renderSideList(
      data.ui.sectionTitles.other,
      data.sidebar.other,
      false,
    );
    document.getElementById("sidebar-board").innerHTML = renderSideList(
      data.ui.sectionTitles.board,
      data.sidebar.board,
      false,
    );

    document.getElementById("profile-section").innerHTML = `
      <h2 class="main-title">${escapeHtml(data.ui.sectionTitles.profile)}</h2>
      <p class="profile-text">${escapeHtml(data.content.profile)}</p>
    `;

    document.getElementById("work-section").innerHTML = `
      <h2 class="main-title">${escapeHtml(data.ui.sectionTitles.work)}</h2>
      <div class="entries">${renderMainItems(data.content.work)}</div>
    `;

    document.getElementById("projects-section").innerHTML = `
      <h2 class="main-title">${escapeHtml(data.ui.sectionTitles.projects)}</h2>
      <div class="entries">${renderMainItems(data.content.projects)}</div>
    `;

    document.getElementById("papers-section").innerHTML = `
      <h2 class="main-title">${escapeHtml(data.ui.sectionTitles.papers)}</h2>
      <div class="entries">${renderMainItems(data.content.papers)}</div>
    `;

    buttons.forEach((button) => {
      const isActive = button.getAttribute("data-language-toggle") === lang;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);

    animateRenderedBlocks();
  }

  function wrapText(doc, text, width) {
    return doc.splitTextToSize(text, width);
  }

  function downloadPdf(lang) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      window.print();
      return;
    }

    const { jsPDF } = window.jspdf;
    const data = cvData[lang];
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const leftWidth = 175;
    const rightStartX = leftWidth + 34;
    const rightWidth = pageWidth - rightStartX - 34;

    function drawFrame() {
      doc.setFillColor(30, 52, 84);
      doc.rect(0, 0, leftWidth, pageHeight, "F");

      doc.setDrawColor(57, 168, 209);
      doc.setLineWidth(1.5);
      doc.circle(87, 88, 42, "S");

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(95, 207, 247);
      doc.text(data.ui.photoLabel, 87, 92, { align: "center" });
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
        const wrapped = wrapText(doc, line, leftWidth - 32);
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
    leftY = writeLeftSection(
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
    wrapText(doc, data.content.profile, rightWidth).forEach((line) => {
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
          ? wrapText(doc, entry.body, rightWidth - 26)
          : [];
        const bulletLines = (entry.bullets || []).flatMap((bullet) =>
          wrapText(doc, "- " + bullet, rightWidth - 36),
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
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      renderLanguage(button.getAttribute("data-language-toggle"));
    });
  });

  exportBtn.addEventListener("click", () => {
    const currentLanguage = body.getAttribute("data-language") || "en";
    downloadPdf(currentLanguage);
  });

  backHomeBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  renderLanguage(initialLang);
})();
