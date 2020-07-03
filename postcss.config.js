module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env'),
    require('autoprefixer'),
    require('postcss-clean')({
      level: 2, // Merge duplicated declarations
    }),
  ],
};
