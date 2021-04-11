import React, { Children, cloneElement, useEffect, useMemo, useState } from 'react';
import {useWindowSize} from "../../lib/hooks";
import {IComponentProps} from "../../models/generic";
import debounce from 'lodash.debounce';
import { transitionTime } from 'client/config/client.config';
import { Page } from "../../layouts";

import './PageGallery.scss';

export default function PageGallery({ children }: IComponentProps) {
    const { height, isMobile } = useWindowSize();
    const [viewed, setViewed] = useState<number>(0);
    const offsetY = viewed * height;

    useEffect(() => {
        const handleScroll = debounce(({ deltaY }) => {
            setViewed((i) => {
                // deltaY is 100 when scrolling down or -100 when scrolling up
                const newPage = i + (deltaY / 100)

                if (newPage >= 0 && newPage < children?.length) {
                    return newPage
                }

                return i
            })
        }, transitionTime)

        const handleArrowKeys = debounce((evt) => {
            if (evt.key === 'ArrowDown') setViewed((currentIndex) => currentIndex + 1)
            if (evt.key === 'ArrowUp') setViewed((currentIndex) => currentIndex - 1)
        } ,transitionTime)

        if(!isMobile) {
            window.addEventListener('mousewheel', handleScroll)
            window.addEventListener('keydown', handleArrowKeys)
            setViewed(0)
        } else {
            window.removeEventListener('mousewheel', handleScroll)
            window.removeEventListener('keydown', handleArrowKeys)
        }

        return () => {
            window.removeEventListener('mousewheel', handleScroll)
            window.removeEventListener('keydown', handleArrowKeys)
        }
    }, [isMobile])

    console.log(isMobile)

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