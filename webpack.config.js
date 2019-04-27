module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./assets/**/*.js`,
    mode: "development",
  
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/assets/js/bundle.js`,
      // 出力ファイル名
      filename: "main.js"
    }
  };