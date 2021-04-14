import { Request, Response } from 'express';
import { __DEV__ } from "../config/server.config";
const config = require('../../config/project.config')

export default function clientRenderer(request: Request, response: Response) {

    const createClientConfig = () => ({
        apiBaseUri: config.server.apiBaseUri,
        localeUrl: config.server.localeUrl,
        appInsightsKey: config.client.appInsightsKey,
        __DEV__: false
    })

    response.render('index', {
        scriptId: response.locals.scriptId,
        initialClientState: JSON.stringify({
            locale: response.locals.locale,
            localeMessages: response.locals.localeMessages,
            supportedLanguages: response.locals.supportedLanguages,
            ...createClientConfig()
        })
    })
}
