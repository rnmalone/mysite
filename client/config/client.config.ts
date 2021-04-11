import vars from '../styles/core/vars.scss'
import { SassExtractor } from "../lib/utils";

export const {
    apiBaseUri,
    localeUrl
} = window.__INITIAL_STATE__


export const transitionTime = 100; //ms
// export const transitionTime = SassExtractor.getTime(vars.transitionTime) * 1000; //ms
export const mobileThreshold = SassExtractor.getPx(vars.mobileThreshold);

export const EMAIL = process.env.EMAIL || 'rory.malone@hotmail.com';
export const CV_PATH = process.env.CV_PATH || '/assets/pdf/rorymalone.pdf'