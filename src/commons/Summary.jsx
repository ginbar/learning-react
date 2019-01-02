import React from "react";

import './Summary.css'

export default function Summary({ title, routes }) {
    return (
        <div className="summary">
            <h2>{title}</h2>
            <ul>
                {routes.map(({ text, link }) =>
                    (<li key={link}><a href={`#${link}`}>{text}</a></li>))}
            </ul>
        </div>
    );
};