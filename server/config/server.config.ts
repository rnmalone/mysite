export const {
    GITHUB_URL = '',
    FACEBOOK_URL = '',
    LINKEDIN_URL = ''
} = process.env

export const BASE_CSP_HEADERS = {
    defaultSrc: '\'self\'',
    blockAllMixedContent: '',
    fontSrc: '\'self\' https://use.fontawesome.com',
    frameAncestors: '\'self\'',
    imgSrc: '\'self\'',
    objectSrc: '\'none\'',
    scriptSrc: '\'self\'',
    scriptSrcAttr: '\'none\'',
    styleSrcElem: '\'unsafe-inline\' https://use.fontawesome.com',
    upgradeInsecureRequests: ''
}

export const __DEV__ = process.env.NODE_ENV === 'development'
