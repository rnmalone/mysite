import React from 'react';
import '../styles/Home.scss';
import { str } from "../../../lib";
import { Socials } from "../../../components";

export default function Home() {

    return (
        <div className="Home">
            <div className="Home__img-container">
                <img alt="me" src="/assets/images/profile.jpg"/>
            </div>
            <h1>Rory Malone</h1>
            <h6>{ str('pages.home.subtitle') }</h6>
            <p id="about">{ str('pages.home.about') }</p>
            <Socials/>
        </div>
    )
}