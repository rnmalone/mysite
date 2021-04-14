import { CtaButton } from "../../components";
import { appInsights, download, str } from "../../lib";
import React from "react";
import { CV_PATH, EMAIL } from "../../config/client.config";
import { Socials } from "../../components";

import './Contact.scss';
import { EventType } from "../../@types/insights";

export default function Contact() {

    const handleDownloadClick = () => {
        download(CV_PATH)

        appInsights?.trackEvent({
            name: EventType.CV_CLICKED
        })
    }

    return (
        <div id="Contact" className="Contact">
            <h1>{ str('pages.contact.title') }</h1>
            <Socials/>
            <a href={ `mailto:${ EMAIL }` }>{ EMAIL }</a>
            <CtaButton
                text={ str('general.download.cv') }
                label={ str('general.download.cv') }
                onClick={ handleDownloadClick }
            />
        </div>
    )
}