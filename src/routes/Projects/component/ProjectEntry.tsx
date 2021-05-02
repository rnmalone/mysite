import React from 'react';
import { SkillNode } from "../../../components";
import onUse from "../../../lib/onUse";
import { SkillDisplay } from "../../../../types";

import '../styles/ProjectEntry.scss';


interface IProjectEntry {
    name: string;
    thumbnail: string;
    description: string;
    url: string;
    technologies: SkillDisplay[]
}

export default function ProjectEntry({ name, thumbnail, technologies, description, url }: IProjectEntry) {

    const linkTo = (url: string) => () => void window.open(url, '_blank')!.focus();

    return (
        <div
            className="ProjectEntry"
            key={ `project-${ name }` }
        >
            <div className="ProjectEntry__img-container">
                <img
                    src={ thumbnail }
                    alt={ `${ name } thumbnail` }
                    role="button"
                    tabIndex={ 0 }
                    { ...onUse(linkTo(url)) }
                />
            </div>
            <div className="ProjectEntry__info">
                <div className="ProjectEntry__info__name">
                    <h6>{ name }</h6>
                    {
                        technologies.map((entry) => (
                            <SkillNode
                                display={ entry }
                            />
                        ))
                    }
                </div>
                <span>{ description }</span>
            </div>
        </div>
    )
}