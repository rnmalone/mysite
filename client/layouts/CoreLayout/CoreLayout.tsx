import React from 'react';
import {IComponentProps} from "../../models/generic";
import './CoreLayout.scss';


export default function CoreLayout({children}: IComponentProps) {

    return (
        <main role="main">
            {children}
        </main>
    )
}
