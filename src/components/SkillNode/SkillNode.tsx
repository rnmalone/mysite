import React from 'react';
import { Icon, Image, SkillDisplay } from "../../../types";

import './SkillNode.scss'

interface ISkillNodeComponent {
    id?: string;
    display: SkillDisplay;
    name?: string;
}

export default function SkillNode({
                                      id,
                                      display,
                                      name
                                  }: ISkillNodeComponent) {

    const iconDisplay = display as Icon;
    const imageDisplay = display as Image;

    return (
        <div
            id={ id }
            className="SkillNode"
        >
            {
                'icon' in iconDisplay! ?
                    <i style={ { color: iconDisplay.color! } } className={ iconDisplay.icon! }/>
                    : null
            }
            {
                'url' in imageDisplay! ?
                    <img src={ imageDisplay.url! } alt={ name } width={ 60 }/>
                    : null
            }
            { name && <span>{ name }</span> }
        </div>
    )
}