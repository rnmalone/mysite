import { CtaButton } from "../../components";
import { download, str } from "../../lib";
import React from "react";
import { CV_PATH, EMAIL } from "../../config/client.config";

import './Contact.scss';
import Socials from "../../components/Socials";

export default function Contact() {
    return (
        <div className="Contact">
            <h1>Get in Touch</h1>
            <Socials />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <CtaButton
                text={str('pages.home.download.cv')}
                label={str('pages.home.download.cv')}
                onClick={download(CV_PATH)}
            />
        </div>
    )
}