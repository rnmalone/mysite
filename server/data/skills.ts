import {ISkillNode, SkillDisplayType} from "../../@types/skill";

const SKILLS: ISkillNode[] = [
    {
        id: 'react',
        display: {
            icon: 'fab fa-react',
            color: '#2ac0ca'
        },
        name: 'React',
    },
    {
        id: 'html',
        name: 'HTML5',
        display: {
            icon: 'fab fa-html5',
            color: '#ff2d2d'
        },
    },
    {
        id: 'scss',
        name: 'Sass',
        display: {
            icon: 'fab fa-sass',
            color: '#fa447c'
        },
    },
    {
        id: 'webpack',
        display: {
            url: ''
        },
        name: 'Webpack',
    },
    {
        id: 'redux',
        name: 'Redux',
        display: {
            url: ''
        },
    },
    {
        id: 'docker',
        name: 'Docker',
        display: {
            icon: 'fab fa-docker',
            color: '#2ac0ca'
        },
    },
    {
        id: 'azure',
        name: 'Microsoft Azure',
        display: {
            icon: 'fab fa-windows',
            color: '#3760f8'
        },
    },
    {
        id: 'unix',
        name: 'Unix',
        display: {
            icon: 'fab fa-linux',
            color: '#f2f2f2'
        },
    },
    {
        id: 'node',
        name: 'Node.JS',
        display: {
            icon: 'fab fa-node-js',
            color: '#309926'
        },
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        display: {
            url: ''
        },
    },
    {
        id: 'graphql',
        name: 'GraphQL',
        display: {
            url: ''
        },
    },
    {
        id: 'sql',
        name: 'SQL',
        display: {
            icon: 'fab fa-database',
            color: '#f38630'
        },
    }
];
export default SKILLS;