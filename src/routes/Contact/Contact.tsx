import { CtaButton, Socials } from "../../components";
import { appInsights, download } from "../../lib";
import React from "react";
import { CV_FILE_NAME, EMAIL } from "../../config/client.config";
import CV from '../../assets/pdf/rorymalone.pdf';
import { EventType } from "../../@types/insights";

import './Contact.scss';

export default function Contact() {

    const handleDownloadClick = () => {
        download(CV, CV_FILE_NAME)

        appInsights?.trackEvent({
            name: EventType.CV_CLICKED
        })
    }

    return (
        <div id="Contact" className="Contact">
            <h1>Get In Touch</h1>
            <Socials/>
            <a href={ `mailto:${ EMAIL }` }>{ EMAIL }</a>
            <CtaButton
                text="Download My CV"
                label="Download My CV"
                onClick={ handleDownloadClick }
            />
        </div>
    )
}