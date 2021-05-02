import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { useTabTrap, useWindowSize } from "../../../lib/hooks";
import { IComponentProps } from "../../../models/generic";
import debounce from 'lodash.debounce';
import { transitionTime } from '../../../config/client.config';
import { Page } from "../../../layouts";

import '../styles/PageGallery.scss';

interface IPageGallery {
    domHash: string
}

/**
 * Scroll or key through each full page at a time
 *
 * @param children
 * @param domHash
 * @constructor
 */
export default function PageGallery({ children, domHash }: IPageGallery & IComponentProps) {
    const ref: React.RefObject<HTMLDivElement> = useRef(null);
    const { height, isMobile } = useWindowSize();
    const [viewed, setViewed] = useState<number>(0);
    const { setElements } = useTabTrap(!isMobile);
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
        }, transitionTime)

        if (!isMobile) {
            // window.addEventListener('mousewheel', handleScroll)
            window.addEventListener('scroll', handleScroll)
            window.addEventListener('keydown', handleArrowKeys)
            setViewed(0)
        } else {
            window.removeEventListener('mousewheel', handleScroll)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('keydown', handleArrowKeys)
        }

        return () => {
            window.removeEventListener('mousewheel', handleScroll)
            window.removeEventListener('keydown', handleArrowKeys)
        }
    }, [isMobile])


    // @ts-ignore
    useEffect(() => {
        if (!isMobile) {
            const [minY, maxY] = [offsetY, offsetY + height]
            // @ts-ignore
            const focusableElements: any = [...ref?.current?.querySelectorAll(
                'button, [role="button"], [href], input, select, textarea, a, [tabindex]:not([tabindex="-1"])'
            )].filter((element) => {
                const { y } = element.getBoundingClientRect();
                // As the content scrolls up we lose the relative position of the element in the doc
                const yActual = viewed > 0 ? ((viewed - 1) * height) + y : y

                return yActual > minY && yActual < maxY
            })

            setElements(focusableElements)
        }
    }, [viewed, domHash, isMobile])

    return (
        <div ref={ ref } className="PageGallery">
            <div
                className="PageGallery__inner"
                style={ { transform: `translateY(-${ offsetY }px)` } }
            >
                {
                    Children.map(children, (child, index) => (
                        <Page id={ `page-${ index }` }>
                            { cloneElement(child, {}) }
                        </Page>
                    ))
                }
            </div>
        </div>
    )
}