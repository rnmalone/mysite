import React, { Children, cloneElement, useEffect, useMemo, useState } from 'react';
import {useWindowSize} from "../../lib/hooks";
import {IComponentProps} from "../../models/generic";
import debounce from 'lodash.debounce';
import { transitionTime } from 'client/config/client.config';
import { Page } from "../../layouts";

import './PageGallery.scss';

export default function PageGallery({ children }: IComponentProps) {
    const { height } = useWindowSize();
    const [viewed, setViewed] = useState<number>(2);
    const offsetY = viewed * height;

    useEffect(() => {
        window.addEventListener('mousewheel', debounce(({ deltaY }) => {
            setViewed((i) => {
                // deltaY is 100 when scrolling down or -100 when scrolling up
                const newPage = i + (deltaY / 100)

                if(newPage >= 0 && newPage < children?.length) {
                    return newPage
                }

                return i
            })
        }), transitionTime)

        window.addEventListener('keydown', (evt) => {
            if(evt.key === 'ArrowDown') setViewed((currentIndex) => currentIndex + 1)
            if(evt.key === 'ArrowUp') setViewed((currentIndex) => currentIndex - 1)
        })
    }, [])

    return (
        <div className="PageGallery">
            <div
                className="PageGallery__inner"
                style={{ transform: `translateY(-${offsetY}px)` }}
            >
                {
                    Children.map(children, (child) => (
                        <Page>
                            {cloneElement(child, {})}
                        </Page>
                    ))
                }
            </div>
        </div>
    )
}