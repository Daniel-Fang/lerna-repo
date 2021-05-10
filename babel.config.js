module.exports = function (api) {
  api.cache.never();
  console.log('Root Repo');
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: 3
        }
      ]
    ],
    targets: {
      browsers: 'Chrome 44'
    },
    ignore: [
      "./node_modules",
      "./packages/*/node_modules"
    ],
    babelrcRoots: [
      ".",
      "packages/*"
    ]
  }
}