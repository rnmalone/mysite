import { Skill } from "../../types/graph";

import gql from '../assets/images/gql.png'
import redux from '../assets/images/redux.png'
import ts from '../assets/images/ts.png'
import webpack from '../assets/images/webpack.png'

const SKILLS: Skill[] = [
    {
        id: 'react',
        display: {
            icon: 'fab fa-react',
            color: '#2ac0ca'
        },
        name: 'React',
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        display: {
            url: ts
        },
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
        id: 'redux',
        name: 'Redux',
        display: {
            url: redux
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
        name: 'Azure',
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
        id: 'graphql',
        name: 'GraphQL',
        display: {
            url: gql
        },
    },
    {
        id: 'sql',
        name: 'SQL',
        display: {
            icon: 'fas fa-database',
            color: '#f38630'
        },
    },
    {
        id: 'webpack',
        display: {
            url: webpack
        },
        name: 'Webpack',
    },
];
export default SKILLS;