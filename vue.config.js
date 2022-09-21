const path = require("path");

let previewBrowser = false
let path2 = ''

if (previewBrowser) {
    path2 = './'
} else {
    path2 = '../dist'
}

module.exports = { publicPath: path2, outputDir: '../dist', filenameHashing: false, productionSourceMap: false,
configureWebpack: {
    devtool: "source-map",
    optimization: {
      minimize: false
    },
    resolve: {
      alias: {
        // bind version of jquery-ui
        "jquery-ui": "jquery-ui-dist/jquery-ui.js",
        // bind to modules;
        modules: path.join(__dirname, "node_modules")
      }
    }
  }
}