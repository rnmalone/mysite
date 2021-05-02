import React from 'react';
import '../styles/Home.scss';
import { Socials } from '../../../components';
import profile from '../../../assets/images/profile.jpg'

export default function Home() {

    return (
        <div id="Home" className="Home">
            <div className="Home__img-container">
                <img alt="me" src={profile}/>
            </div>
            <h1>Rory Malone</h1>
            <h6>Full Stack Developer</h6>
            <p id="about">
                I'm a full stack developer building high quality full stack solutions
                used by thousands of high profile clients, with a real focus on helping others
                deliver top quality and performant code.
            </p>
            <Socials/>
        </div>
    )
}