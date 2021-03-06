module.exports = (config) => {
  const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

  // Transforms
  const htmlMinTransform = require("./src/transforms/html-min-transform.js");

  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === "production";

  // Returns work items, sorted by display order
  config.addCollection("projects", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/projects/*.md"));
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }

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
