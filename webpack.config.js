const path = require('path');
const { ProvidePlugin } = require('webpack');

module.exports = {
    entry: './src/index.js',
    optimization: {
        minimize: true,
    },
    output: {
        filename: 'tonweb.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'commonjs2',
            name: "tonweb"
        },
    },
    module: {
        rules: [
          {
            test: /\.js$/, // Áp dụng cho các file .js
            exclude: /node_modules/, // Loại trừ thư mục node_modules
            use: {
              loader: 'babel-loader', // Sử dụng Babel loader
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-syntax-bigint', './babel-plugin-transform-bigint']
              }
            }
          }
        ]
      },
    resolve: {
        fallback: {
            buffer: require.resolve('buffer/'),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify/browser"),
            url: require.resolve("url"),
            vm: require.resolve("vm-browserify")
        },
    },
    plugins: [
        new ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
};