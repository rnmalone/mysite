import {Social} from "../../@types/social";
import { GITHUB_URL } from '../config/server.config';

const SOCIALS: Social[] = [
    {
        label: 'Github',
        icon: 'fab fa-github',
        url: GITHUB_URL
    },
    {
        label: 'Facebook',
        icon: 'fab fa-facebook-f',
        url: ''
    },
    {
        label: 'LinkedIn',
        icon: 'fab fa-linkedin-in',
        url: ''
    }
]

export default SOCIALS