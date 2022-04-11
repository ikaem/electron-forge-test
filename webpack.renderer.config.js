const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  // test: /\.css$/,
  // test: /\.s[ac]ss$/i,
  test: /\.(sa|sc|c)ss$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' },
    // // Creates `style` nodes from JS strings
    // 'style-loader',
    // // Translates CSS into CommonJS
    // 'css-loader',
    // // Compiles Sass to CSS
    // 'sass-loader',
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    // extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    // test
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', 'sass', 'scss'],
  },
};
