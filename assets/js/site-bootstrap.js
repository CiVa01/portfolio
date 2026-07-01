(function () {
  "use strict";

  const SiteBootstrap = {
    setPageMetadata() {
      const body = document.body;
      if (!body) return;

      if (!body.dataset.page) {
        const path = window.location.pathname.toLowerCase();
        if (path.endsWith("/index.html") || path.endsWith("/")) {
          body.dataset.page = "home";
        } else if (path.includes("/about")) {
          body.dataset.page = "about";
        } else if (path.includes("/works")) {
          body.dataset.page = "works";
        } else if (path.includes("/papers")) {
          body.dataset.page = "papers";
        } else if (path.includes("/cv")) {
          body.dataset.page = "cv";
        }
      }
    },

    normalizeExternalLinks(root = document) {
      root.querySelectorAll("a[href]").forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;

        let resolved;
        try {
          resolved = new URL(href, window.location.href);
        } catch {
          return;
        }

        if (!["http:", "https:"].includes(resolved.protocol)) return;
        if (resolved.hostname === window.location.hostname) return;

        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    },

    init() {
      this.setPageMetadata();
      this.normalizeExternalLinks();
    },
  };

  window.SiteBootstrap = Object.freeze(SiteBootstrap);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => SiteBootstrap.init());
  } else {
    SiteBootstrap.init();
  }
})();
