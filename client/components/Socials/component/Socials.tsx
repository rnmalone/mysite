import React from 'react';
import { useQuery } from "@apollo/client";

import socialsQuery from '../../../api/graphql/socials.graphql';
import '../styles/Socials.scss';
import { SocialsResponse } from "../../../../types/responses";
import { appInsights } from "../../../lib";
import { Social } from "../../../../types";
import { EventType } from "../../../@types/insights";

export default function Socials({ setDOMHash }: { setDOMHash(): void }) {
    const { data, error } = useQuery<SocialsResponse>(socialsQuery, {
        onCompleted: setDOMHash
    })

    const handleSocialClick = (socialType: Social['label']) => {
        return () => {
            appInsights?.trackEvent({
                name: EventType.SOCIAL,
                properties: {
                    socialType
                }
            })
        }
    }

    if (error) {
        console.error('Error fetching Socials ' + JSON.stringify(error))
    }

    if (!data) {
        return null
    }

    return (
        <div className="Socials">
            {
                data.socials.map(({
                                      label,
                                      icon,
                                      url
                                  }) => (
                    <a
                        className={ `Socials__icon ${ icon }` }
                        key={ `social-${ label }` }
                        target="_blank"
                        onClick={handleSocialClick(label)}
                        aria-label={ label! }
                        href={ url! }
                        rel="noopener"
                    />
                ))
            }
        </div>
    )
}