import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { CoreLayout } from './layouts';
import Routes from './routes';
import { ViewportProvider } from './containers';

import './styles/main.scss';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <ViewportProvider>
        <CoreLayout>
            <Routes/>
        </CoreLayout>
    </ViewportProvider>,
    MOUNT_NODE
);

