import React, { ReactElement } from 'react';

import './Page.scss';

interface IPage {
    children: ReactElement | ReactElement[];
}

export default function Page({ children }: IPage) {

    return (
        <div className="Page">
            { children }
        </div>
    )
}