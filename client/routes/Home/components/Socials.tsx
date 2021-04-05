import React from 'react';
import {useQuery} from "@apollo/client";
import {Social} from "../../../../@types/social";

import socialsQuery from '../../../api/socials.graphql';
import '../styles/Socials.scss';

export default function Socials() {
    const { data, error } = useQuery<{ socials: Social[] }>(socialsQuery)

    if(error) {
        console.error('Error fetching Socials ' + JSON.stringify(error))
    }

    if(!data) {
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
                        className={`Socials__icon ${icon}`}
                        key={`social-${label}`}
                        tabIndex={0}
                        target="_blank"
                        aria-label={label}
                        href={url}
                    />
                ))
            }
        </div>
    )
}