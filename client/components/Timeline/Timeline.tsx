import React from 'react';
import shortid from "shortid";

import './Timeline.scss';

export interface IEvent {
    location: string;
    timeframe: string;
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
            <div className="Timeline__container">
                {
                    events.map((event) => (
                        <article key={ shortid() } className="Timeline__event">
                            <div className="Timeline__event__header">
                                <div>
                                    <h5>{ event.location }</h5>
                                    <span className="Timeline__event__timeframe">{event.timeframe}</span>
                                    <h6>{ event.title }</h6>
                                </div>
                                <img src={ event.imageSrc } alt={ event.title }/>
                            </div>
                            <p>{ event.text }</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}