import React from 'react';
import { useQuery } from "@apollo/client";

import socialsQuery from '../../../api/socials.graphql';
import '../styles/Socials.scss';
import { SocialsResponse } from "../../../../types/responses";

export default function Socials({ setDOMHash }: { setDOMHash(): void }) {
    const { data, error } = useQuery<SocialsResponse>(socialsQuery, {
        onCompleted: setDOMHash
    })

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
                        aria-label={ label! }
                        href={ url! }
                        rel="noopener"
                    />
                ))
            }
        </div>
    )
}