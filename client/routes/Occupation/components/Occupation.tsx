import React from 'react';
import {useQuery} from "@apollo/client";
import {Page} from "../../../layouts";

import occQuery from '../../../api/occupation.graphql'
import {str} from "../../../lib";

export default function Occupation() {
    const { data, error } = useQuery(occQuery);

    if(error) {
        console.error('Error fetching occupation data ' + JSON.stringify(error));
    }

    return (
        <Page id="occupation" className="Occupation">
            <h2>{str('pages.occupation.title')}</h2>
            <div>

            </div>
        </Page>
    )
}