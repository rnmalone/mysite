import React, { Children, cloneElement, useEffect, useMemo, useState } from 'react';
import {useWindowSize} from "../../lib/hooks";
import {IComponentProps} from "../../models/generic";
import debounce from 'lodash.debounce';
import { transitionTime } from 'client/config/client.config';
import { Page } from "../../layouts";

import './PageGallery.scss';

export default function PageGallery({ children }: IComponentProps) {
    const { height } = useWindowSize();
    const [viewed, setViewed] = useState<number>(0);
    const offsetY = viewed * height;

    useEffect(() => {
        window.addEventListener('mousewheel', debounce(({ deltaY }) => {
            // deltaY is 100 when scrolling down or -100 when scrolling up
            setViewed((currentIndex) => currentIndex + (deltaY / 100))
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
                            {cloneElement(child as any, {})}
                        </Page>
                    ))
                }
            </div>
        </div>
    )
}