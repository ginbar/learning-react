import React from "react";

import SocialMedia from "../commons/SocialMedia";
import PoweredBy from "../commons/PoweredBy";

import './Footer.css';
import '../App.css';

export default function Footer(props) {
    return (
        <footer className="template">
            <div className="inner-content">
                <h1>
                    Learning React&nbsp; 
                    <span className="copy-left">&copy;</span>&nbsp; 
                    {(new Date()).getFullYear()}
                </h1>
                <h2>Powered by</h2>
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
                <h2>Channels</h2>
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