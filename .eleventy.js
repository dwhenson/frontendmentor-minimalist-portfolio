module.exports = (config) => {
  // Returns work items, sorted by display order
  // config.addCollection("projects", (collection) => {
  //   return sortByDisplayOrder(collection.getFilteredByGlob("./src/projects/*.md"));
  // });

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
