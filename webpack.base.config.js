var webpack = require('webpack');
var path = require('path');
<<<<<<< HEAD
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var dir = path.resolve(__dirname, '');

module.exports = {
    entry: {
        index: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', dir + '/src/index.js'],
        vendor: [
            'jquery',
            'vue'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: dir + '/bulid',
        publicPath: "bulid/"
    },
    resolve: {
        extensions: ['', '.js'],
        root: [
            __dirname,
            path.join(__dirname, "node_modules")
        ]
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'url?limit=8192'
        }]
    },
    babel: {
        "presets": ['es2015']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Vue: 'vue'
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
        //===设置抽出css文件名===
        // new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
        //     disable: false,
        //     allChunks: true
        // })
        //===公共模块提取开始===
        //new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        //new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
        //===公共模块提取结束===
    ]
=======
//var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var dir = "";

module.exports = {
  entry: {
    index: './' + dir + 'src/index.js',
    vendor: [
      'jquery',
      'vue'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: dir + 'bulid',
    publicPath: "bulid/"
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      __dirname,
      path.join(__dirname, "node_modules")
    ]
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
        // loader: ExtractTextPlugin.extract(
        //     "style-loader",
        //     "css-loader?sourceMap"
        // )
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'url?limit=8192'
    }]
  },
  babel: {
    "presets": ['es2015']
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Vue: 'vue'
    }),
    //===设置抽出css文件名===
    // new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
    //     disable: false,
    //     allChunks: true
    // })
    //===公共模块提取开始===
    //new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
    //new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
    //===公共模块提取结束===
  ]
>>>>>>> 0d369ad3e8ce439bf388cb643ab7c1e34ea5dd6f
};
