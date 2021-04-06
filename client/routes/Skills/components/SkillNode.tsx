import React, {CSSProperties, useEffect, useState} from 'react';

import '../styles/SkillNode.scss'
import {ISkillNode, SkillIcon} from "../../../../@types/skill";

interface ISkillNodeComponent {
    id: string;
    display: ISkillNode['display'];
    name: string;
}

export default function SkillNode({
                                      id,
                                      display,
                                      name
                                  }: ISkillNodeComponent) {



    return (
        <div
            id={id}
            className="SkillNode"
        >
            {
                'icon' in display ?
                    <i style={{ color: display.color }} className={display.icon} />
                    : <img src={display.url} />
            }
            <span>{name}</span>
        </div>
    )
}