import React from 'react';
import {useQuery} from "@apollo/client";

import occQuery from '../../../api/occupation.graphql'
import {str} from "../../../lib";
import Timeline from "../../../components/Timeline";

export default function Occupation() {
    const { data, error } = useQuery(occQuery);

    if(error) {
        console.error('Error fetching occupation data ' + JSON.stringify(error));
    }

    return (
        <div className="Occupation">
            <h2>{str('pages.occupation.title')}</h2>
            <Timeline
                events={data?.occupation || []}
            />
        </div>
    )
}