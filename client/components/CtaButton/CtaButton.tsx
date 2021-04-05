import React from 'react';

import './CtaButton.scss';

interface ICtaButton {
    text: string;
    label: string;
    onClick(): void;
}

export default function CtaButton({
    text,
    label,
    onClick
                                  }: ICtaButton) {
    return (
        <button
            className="CtaButton"
            aria-label={label}
            onClick={onClick}
        >
            {text}
        </button>
    )
}