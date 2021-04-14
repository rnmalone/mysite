import { Request, Response } from 'express';

const config = require('../../config/project.config')

export default function clientRenderer(request: Request, response: Response) {

    console.log(request)

    const createClientConfig = () => ({
        apiBaseUri: config.server.apiBaseUri,
        localeUrl: config.server.localeUrl
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
