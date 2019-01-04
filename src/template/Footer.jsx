import React from "react";

import SocialMedia from "../commons/SocialMedia";

import './Footer.css';
import '../App.css';

export default function Footer(props) {
    return (
        <footer className="template">
            <div className="inner-content">
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