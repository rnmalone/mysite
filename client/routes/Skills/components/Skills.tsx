import React from 'react';
import { str } from "../../../lib";
import { useQuery } from "@apollo/client";
import { ISkillNode } from "../../../../@types/skill";
import skillsQuery from '../../../api/skills.graphql'
import SkillNode from "./SkillNode";

import '../styles/Skills.scss';

export default function Skills() {
    const { data, error } = useQuery<{ skills: ISkillNode[] }>(skillsQuery)

    if (error) {
        console.error('Error fetching skills' + JSON.stringify(error))
    }

    return (
        <div id="skills" className="Skills">
            <h2>{ str('pages.skills.title') }</h2>
            <p>{ str('pages.skills.subtitle') }</p>
            <div className="Skills__grid">
                {
                    (data?.skills || []).map((skill) => (
                        <SkillNode
                            key={ `skill-${ skill.name }` }
                            display={ skill.display }
                            name={ skill.name }
                            id={ skill.name }
                        />
                    ))
                }
            </div>
        </div>
    )
}