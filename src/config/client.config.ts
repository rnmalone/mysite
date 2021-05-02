import vars from '../styles/core/vars.scss'
import { SassExtractor } from "../lib/utils";


export const REACT_APP_INSIGHTS_KEY = process.env.REACT_APP_INSIGHTS_KEY || '';

export const transitionTime = 100; //ms
// export const transitionTime = SassExtractor.getTime(vars.transitionTime) * 1000; //ms
export const mobileThreshold = SassExtractor.getPx(vars.mobileThreshold);

export const EMAIL = process.env.EMAIL || 'rory.malone@hotmail.com';
export const CV_PATH = process.env.CV_PATH || '/assets/pdf/rorymalone.pdf'

export const GITHUB_URL = 'https://github.com/rnmalone'
export const FACEBOOK_URL = 'https://www.facebook.com/rory.malone2/'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/rory-malone-592225a3/'