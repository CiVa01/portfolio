(function () {
  "use strict";

  function getJQuery() {
    return window.jQuery || window.$ || null;
  }

  const LegacyAdapters = {
    getJQuery,

    hasPlugin(pluginName) {
      const $ = getJQuery();
      return Boolean($ && $.fn && typeof $.fn[pluginName] === "function");
    },

    runScrolly(selector, options) {
      const $ = getJQuery();
      if (!$ || !this.hasPlugin("scrolly")) {
        return false;
      }

      $(selector).scrolly(options || {});
      return true;
    },

    runScrollex(selector, options) {
      const $ = getJQuery();
      if (!$ || !this.hasPlugin("scrollex")) {
        return false;
      }

      $(selector).scrollex(options || {});
      return true;
    },

    init() {
      const body = document.body;
      if (!body) {
        return;
      }

      if (body.getAttribute("data-legacy-adapters") === "ready") {
        return;
      }

      body.setAttribute("data-legacy-adapters", "ready");
    },
  };

  window.LegacyAdapters = Object.freeze(LegacyAdapters);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      LegacyAdapters.init();
    });
  } else {
    LegacyAdapters.init();
  }
})();
