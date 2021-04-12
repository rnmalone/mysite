import React from 'react';
import { useQuery } from "@apollo/client";
import occQuery from '../../../api/occupation.graphql'
import { str } from "../../../lib";
import { Timeline } from "../../../components";
import { OccupationResponse } from "../../../../types/responses";
import { IEvent } from "../../../components/Timeline/Timeline";

export default function Occupation() {
    const { data, error } = useQuery<OccupationResponse>(occQuery);

    if (error) {
        console.error('Error fetching occupation data ' + JSON.stringify(error));
    }

    return (
        <div className="Occupation">
            <h2>{ str('pages.occupation.title') }</h2>
            <Timeline
                events={ data?.occupation! as IEvent[] || [] }
            />
        </div>
    )
}