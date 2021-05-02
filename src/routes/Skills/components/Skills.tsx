import React from 'react';
import { SKILLS } from "../../../data";
import { SkillNode } from "../../../components";

import '../styles/Skills.scss';

export default function Skills() {
    return (
        <div id="Skills" className="Skills">
            <h2>Skills</h2>
            <p>Technology I use at enterprise level</p>
            <div className="Skills__grid">
                {
                    SKILLS.map((skill) => (
                        <SkillNode
                            key={ `skill-${ skill.name }` }
                            display={ skill.display! }
                            name={ skill.name! }
                            id={ skill.name! }
                        />
                    ))
                }
            </div>
        </div>
    )
}