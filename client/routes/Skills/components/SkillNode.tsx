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
            <div className="SkillNode__inner">
                {
                    'icon' in display ?
                        <i style={{ color: display.color }} className={display.icon} />
                        : null // TODO
                }
                <span>{name}</span>
            </div>
        </div>
    )
}