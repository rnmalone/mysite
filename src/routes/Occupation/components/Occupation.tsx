import React from 'react';
import { Timeline } from "../../../components";
import { OCCUPATION } from "../../../data";

export default function Occupation() {
    return (
        <div id="Occupation" className="Occupation">
            <h2>Occupation</h2>
            <Timeline
                events={ OCCUPATION }
            />
        </div>
    )
}