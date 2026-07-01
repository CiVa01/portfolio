(function () {
  "use strict";

  const DEFAULT_PAGE = "home";

  const boundaryMap = {
    home: [
      { name: "hero", selector: '[data-component="hero"]' },
      { name: "about-preview", selector: '[data-component="about-preview"]' },
      {
        name: "projects-preview",
        selector: '[data-component="projects-preview"]',
      },
      { name: "papers-preview", selector: '[data-component="papers-preview"]' },
      {
        name: "contact-gallery",
        selector: '[data-component="contact-gallery"]',
      },
    ],
    about: [
      { name: "about-hero", selector: '[data-component="about-hero"]' },
      { name: "education", selector: '[data-component="education"]' },
      {
        name: "work-experience",
        selector: '[data-component="work-experience"]',
      },
      {
        name: "other-experience",
        selector: '[data-component="other-experience"]',
      },
    ],
    works: [
      { name: "works-hero", selector: '[data-component="works-hero"]' },
      {
        name: "project-magic-wand",
        selector: '[data-component="project-magic-wand"]',
      },
      {
        name: "project-lawyair",
        selector: '[data-component="project-lawyair"]',
      },
      {
        name: "project-migration-viz",
        selector: '[data-component="project-migration-viz"]',
      },
    ],
    papers: [
      { name: "papers-hero", selector: '[data-component="papers-hero"]' },
      { name: "paper-thesis", selector: '[data-component="paper-thesis"]' },
      { name: "paper-meg", selector: '[data-component="paper-meg"]' },
      { name: "paper-ethics", selector: '[data-component="paper-ethics"]' },
      { name: "papers-footer", selector: '[data-component="papers-footer"]' },
    ],
    cv: [
      { name: "cv-shell", selector: '[data-component="cv-shell"]' },
      { name: "cv-hero", selector: '[data-component="cv-hero"]' },
      { name: "cv-main-column", selector: '[data-component="cv-main-column"]' },
      { name: "cv-sidebar", selector: '[data-component="cv-sidebar"]' },
      { name: "cv-profile", selector: '[data-component="cv-profile"]' },
      { name: "cv-work", selector: '[data-component="cv-work"]' },
      { name: "cv-projects", selector: '[data-component="cv-projects"]' },
      { name: "cv-papers", selector: '[data-component="cv-papers"]' },
    ],
  };

  const ReactBoundaryMap = Object.freeze(boundaryMap);

  function detectPage() {
    const body = document.body;
    const page = (body && body.dataset && body.dataset.page) || DEFAULT_PAGE;
    return Object.prototype.hasOwnProperty.call(ReactBoundaryMap, page)
      ? page
      : DEFAULT_PAGE;
  }

  function resolveMounts(page) {
    const entries = ReactBoundaryMap[page] || [];
    return entries
      .map(function (entry) {
        const node = document.querySelector(entry.selector);
        if (!node) {
          return null;
        }

        return {
          name: entry.name,
          selector: entry.selector,
          node: node,
        };
      })
      .filter(Boolean);
  }

  function init() {
    const page = detectPage();
    const mounts = resolveMounts(page);
    const body = document.body;

    if (body) {
      body.setAttribute("data-react-boundaries", String(mounts.length));
    }

    window.ReactMigration = Object.freeze({
      page: page,
      map: ReactBoundaryMap,
      mounts: mounts,
      getMountsForPage: resolveMounts,
    });
  }

  window.ReactBoundaryMap = ReactBoundaryMap;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
