import thumbnail2048 from '../assets/images/2048-thumbnail.png';
import thumbnailTemplate from '../assets/images/template-thumbnail.png';
import thumbnailFauxit from '../assets/images/fauxit-thumbnail.png';
import { GQL_ICON, REACT_ICON, SQL_ICON, TS_ICON } from "./skills";

const PROJECTS = [
    {
        name: '2048',
        description: 'Popular tactical mathematics game',
        thumbnail: thumbnail2048,
        url: 'https://2048-blue.vercel.app/',
        technologies: [
            REACT_ICON,
            TS_ICON
        ]
    },
    {
        name: 'Full stack template',
        description: 'Express Server hosting a react frontend with a GraphQL interface',
        thumbnail: thumbnailTemplate,
        url: 'https://github.com/rnmalone/react-template-fs',
        technologies: [
            REACT_ICON,
            TS_ICON,
            GQL_ICON
        ]
    },
    {
        name: 'Faux.IT (WIP)',
        description: 'Sales dashboard for a fake company',
        thumbnail: thumbnailFauxit,
        url: 'https://github.com/rnmalone/faux.it',
        technologies: [
            REACT_ICON,
            TS_ICON,
            GQL_ICON,
            SQL_ICON
        ]
    }
]

export default PROJECTS;