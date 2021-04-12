import express from 'express';
import cors from 'cors';
import compress from 'compression';
import webpackConfig from '../config/webpack.config';
import webpack, { Configuration } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import schema from './schema/schema'
import resolvers from './resolvers'
import { assets, clientRenderer, localeMiddleware } from "./middleware";
import { LoggingPlugin } from "./lib/plugins";
import { locale } from './routes';
import { logger } from "./lib";

const { ApolloServer } = require('apollo-server-express');

export interface IContext {
    connection: unknown
}

const __DEV__ = process.env.NODE_ENV === 'development'

export default function startServer() {
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        tracing: process.env.NODE_ENV === 'dev',
        plugins: [
            LoggingPlugin,
            responseCachePlugin()
        ],
        cacheControl: {
            defaultMaxAge: 86400,
        },
        context: () => ({})
    })

    const webpackCompiler = webpack(webpackConfig as Configuration);

    let config = require('../config/project.config');
    const app = express();

    app.disable('etag');

    app.set('views', config.paths.public());

    Object.assign(app.locals, config.globals, config.server.templateLocals);

    app.use(cors());
    app.use(compress());

    config = require('../config/project.config');

    app.set('view engine', 'pug');
    server.applyMiddleware({ app, path: '/v1/api' })

    if(__DEV__) {

        logger.info('Enabling webpack dev and hot reloading middleware.');

        app.use(webpackDevMiddleware(webpackCompiler, {
            publicPath: config.client.basePath
        }));

        app.use(webpackHotMiddleware(webpackCompiler, {
            path: '/__hot_reload'
        }));

        const assetsMiddleware = assets({ webpackCompiler });

        webpackCompiler.hooks.done.tap('HashedAssetPlugin', assetsMiddleware.hashedAssetsUpdated);


        app.use(assetsMiddleware)
        app.use(express.static(config.paths.public()));
    } else {
        app.use(express.static(config.paths.build()))
        app.use(assets({ buildStatsDir: config.paths.public() }))
    }

    app.use('/assets', express.static(config.paths.server('assets')))
    app.get('/locale', locale)

    // @ts-ignore
    app.use('*', localeMiddleware)
    app.use('*', clientRenderer);

    app.listen(config.server.port)
}

