import React from 'react';
import { PROJECTS } from "../../../data";
import ProjectEntry from "./ProjectEntry";

import '../styles/Projects.scss'

export default function Projects() {
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <div className="Projects__items">
                {
                    PROJECTS.map((project) => (
                        <ProjectEntry
                            name={ project.name }
                            description={ project.description }
                            technologies={ project.technologies }
                            thumbnail={ project.thumbnail }
                            url={ project.url }
                        />
                    ))
                }
            </div>
        </div>
    )
}