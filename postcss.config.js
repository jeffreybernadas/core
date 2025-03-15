const autoprefixer = require("autoprefixer");
const tailwindPostcss = require("@tailwindcss/postcss");

module.exports = {
  plugins: [autoprefixer, tailwindPostcss],
};
