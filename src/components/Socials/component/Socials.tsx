import React from 'react';
import '../styles/Socials.scss';
import { appInsights } from "../../../lib";
import { Social } from "../../../../types";
import { EventType } from "../../../@types/insights";
import { SOCIALS } from '../../../data';

export default function Socials() {
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

    return (
        <div className="Socials">
            {
                SOCIALS.map(({
                                 label,
                                 icon,
                                 url
                             }) => (
                    <a
                        className={ `Socials__icon ${ icon }` }
                        key={ `social-${ label }` }
                        target="_blank"
                        onClick={ handleSocialClick(label) }
                        aria-label={ label! }
                        href={ url! }
                        rel="noopener"
                    />
                ))
            }
        </div>
    )
}