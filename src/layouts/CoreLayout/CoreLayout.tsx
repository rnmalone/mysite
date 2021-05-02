import React, { ReactElement } from 'react';

import './CoreLayout.scss';

export default function CoreLayout({ children }: { children: ReactElement | ReactElement[] }) {

    return (
        <main role="main">
            { children }
            <div className="lines">
                <div className="line"/>
                <div className="line"/>
                <div className="line"/>
            </div>
        </main>
    )
}
