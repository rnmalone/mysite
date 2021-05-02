import { FACEBOOK_URL, GITHUB_URL, LINKEDIN_URL } from '../config/client.config'
import { Social } from "../../types";

const SOCIALS: Social[] = [
    {
        label: 'Github',
        icon: 'fab fa-github',
        url: GITHUB_URL
    },
    {
        label: 'Facebook',
        icon: 'fab fa-facebook-f',
        url: FACEBOOK_URL
    },
    {
        label: 'LinkedIn',
        icon: 'fab fa-linkedin-in',
        url: LINKEDIN_URL
    }
]

export default SOCIALS