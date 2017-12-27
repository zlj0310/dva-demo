const path = require('path');
const pxtorem = require('postcss-pxtorem');


export default {
  entry: 'src/index.js',
  publicPath: "/",
  hash: false,
  theme: "src/theme.js",
  autoprefixer: null,
  disableCSSModules: false,
  extraBabelPlugins: [
    'transform-runtime',
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'lib', 'style': true }]
  ],
  // extraPostCSSPlugins: [
  //   pxtorem({
  //     rootValue: 100,
  //     propWhiteList: [],
  //   }),
  // ],
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
      ],
    },
  },
  xdllPlugin: {
    "exclude": [
      "babel-runtime"
    ],
    "include": [
      "dva/router",
      "dva/saga",
      "dva/fetch"
    ]
  }
}
