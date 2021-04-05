import React, {ReactElement} from 'react';

import './Page.scss';

interface IPage {
    children: ReactElement | ReactElement[];
    id: string;
    className: string;
}

export default function Page({ children, id, className }: IPage) {

    return (
        <div id={id} className={`Page ${className}`}>
            {children}
        </div>
    )
}