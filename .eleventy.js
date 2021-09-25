const util = require("util");

module.exports = (config) => {
  const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/images/");

  // Returns work items, sorted by display order
  config.addCollection("projects", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/projects/*.md"));
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  config.addFilter("dump", (obj) => {
    return util.inspect(obj);
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
