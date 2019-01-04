import React from "react";

import SocialMedia from "../commons/SocialMedia";
import PoweredBy from "../commons/PoweredBy";

import './Footer.css';
import '../App.css';

export default function Footer(props) {
    return (
        <footer className="template">
            <div className="inner-content">
                <h2>
                    Learning React {(new Date()).getFullYear()}
                </h2>
                <PoweredBy links={[
                    {
                        text: 'React',
                        url: 'https://reactjs.org'
                    },
                    {
                        text: 'Heroku',
                        url: 'https://www.heroku.com/'
                    },
                ]}></PoweredBy>
                <SocialMedia links={[
                    {
                        text: 'GitHub',
                        url: 'https://github.com/ginbar/learning-react'
                    }
                ]}></SocialMedia>
            </div>
        </footer>
    );
};