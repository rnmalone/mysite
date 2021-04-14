import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useInView } from "../../lib/hooks";
import { appInsights } from "../../lib";
import { EventType } from "../../@types/insights";

import './Page.scss';

interface IPage {
    children: ReactElement | ReactElement[];
    id: string;
}

export default function Page({ children, id }: IPage) {
    const [childId, setChildId] = useState<string | undefined>()
    const ref = useRef(null)
    const onInView = useCallback(debounce(() => {
        appInsights?.trackEvent({
            name: EventType.PAGE_VIEW,
            properties: {
                page: childId
            }
        })
    }, 100), [childId])

    // Get the id of the child so we can track it in azure when it gets viewed
    useEffect(() => {
        const self = document.getElementById(id)

        if(self?.children.length) {
            setChildId(self?.children.item(0)?.id)
        }

    }, [])

    useInView(ref, onInView, [childId]);

    return (
        <div ref={ref} id={id} className="Page">
            { children }
        </div>
    )
}