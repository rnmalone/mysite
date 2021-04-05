import React, {CSSProperties, useEffect, useState} from 'react';

import '../styles/SkillNode.scss'

interface ISkillNode {
    id: string;
    image: string;
    name: string;
}

export default function SkillNode({
                                      id,
                                      image,
                                      name
                                  }: ISkillNode) {

    return (
        <div
            id={id}
            className="SkillNode"
        >
            <div className="SkillNode__inner">
                <img src={image} alt={name}/>
                <span>{name}</span>
            </div>
        </div>
    )
}