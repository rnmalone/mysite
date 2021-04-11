import React from 'react';
import profile from '../../../assets/images/profile.jpg'
import '../styles/Home.scss';
import {str} from "../../../lib";
import Socials from "../../../components/Socials";

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
        </div>
    )
}