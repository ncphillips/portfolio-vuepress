const themeConfig = require("./theme");

module.exports = {
  title: "Acme",
  description: "creative agency",
  base: "/",
  themeConfig: themeConfig,
  markdown: {
    anchor: {
      permalink: false
    },
    config: md => {
      md.set({ breaks: true });
    }
  }
};
