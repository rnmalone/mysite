import React from 'react';
import shortid from "shortid";

import './Timeline.scss';

export interface IEvent {
    location: string;
    title: string;
    text: string;
    imageSrc: string;
}

interface ITimeline {
    events: IEvent[]
}

export default function Timeline({ events }: ITimeline) {
    return (
        <section className="Timeline">
            <span className="Timeline__line" />
            <div className="Timeline__container">
                {
                    events.map((event) => (
                        <article key={shortid()} className="Timeline__event">
                            <div className="Timeline__event__header">
                                <div>
                                    <h5>{event.location}</h5>
                                    <h6>{event.title}</h6>
                                </div>
                                <img src={event.imageSrc} />
                            </div>
                            <p>{event.text}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}