module.exports = {
  presets: [
    require.resolve("@docusaurus/core/lib/babel/preset"),
    "@emotion/babel-preset-css-prop",
  ],
  plugins: ["macros"],
};
