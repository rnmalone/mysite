import React from 'react';
import {IComponentProps} from "../../models/generic";
import './CoreLayout.scss';
import {useWindowSize} from "../../lib/hooks";
import { str } from 'client/lib';


export default function CoreLayout({children}: IComponentProps) {
    const {isMobile} = useWindowSize()

    return (
        <>
            <main role="main">
                <h1>{str('app.title')}</h1>
                <div className="container">
                    <div id={"contents"}>
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}
