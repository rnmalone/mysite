const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const defaultConfig = require('./webpack.base');
const config = require('./project.config');
const ProgressBar = require('../../scripts/progress');


const progress = new ProgressBar();

const APP_ENTRY = config.paths.src('main.tsx');
const TEMPLATE = config.paths.public('index.html');

module.exports = merge(defaultConfig, {
    // Webpack will default some settings for development mode
    mode: 'development',

    // These are the "entry points" to our application.
    // This means they will be the "root" imports that are included in JS bundle.
    // The first two entry points enable "hot" CSS and auto-refreshes for JS.
    entry: [
        '@babel/polyfill',
        APP_ENTRY
    ],
    devtool: 'cheap-module-eval-source-map',

    // Config for webpack-dev-server
    devServer: {
        // Path to unbuilt files
        contentBase: config.paths.src(),
        // Hot-reload changes
        hot: true,
        // Allows react-router to function
        historyApiFallback: true,
        // Where to serve files from
        port: config.dev.port,
        host: config.dev.host,
        // Omit logging from terminal
        stats: 'errors-only'
    },

    output: {
        // Webpack uses `publicPath` to determine where the app is being served from.
        // In development, we always serve from the root. This makes config easier.
        publicPath: '/',
        // remove /* filename */ comments to generated require()s in the output.
        pathinfo: false
    },

    plugins: [
        // Generates an `index.html` file with the <script> injected.
        // Add the built files as imports into the html template
        new HtmlWebpackPlugin({
            title: config.templateLocals.title,
            template: TEMPLATE
        }),
        // Useful plugin to show a loading bar on startup
        new webpack.ProgressPlugin({
            entries: true,
            modules: true,
            modulesCount: 100,
            profile: true,
            handler: progress.trigger
        })
    ]

});
