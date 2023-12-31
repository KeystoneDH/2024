module.exports = function (eleventyConfig) {
   // Copy `_src/img/` to `_site/img`
   eleventyConfig.addPassthroughCopy("_src/img");
   eleventyConfig.addPassthroughCopy("_src/bundle.css");
 return {
   dir: {
     input: "_src",
     output: '_site'


  },


};
  


};
