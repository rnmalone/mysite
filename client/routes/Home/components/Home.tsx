import React from 'react';
import profile from '../../../assets/images/profile.jpg'
import '../styles/Home.scss';
import Socials from "./Socials";
import {CtaButton} from "../../../components";
import {str} from "../../../lib";
import {Page} from "../../../layouts";

export default function Home() {

    return (
        <div className="Home">
            <div className="Home__img-container">
                <img alt="me" src={profile}/>
            </div>
            <h1>Rory Malone</h1>
            <h6>Full Stack Engineer</h6>
            <p id="about">{str('pages.home.about')}</p>
            <Socials />
            <CtaButton
                text={str('pages.home.download.cv')}
                label={str('pages.home.download.cv')}
                onClick={() => {}}
            />
        </div>
    )
}