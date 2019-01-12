import React from "react";

import './Header.css';
import '../App.css';

export default function Header({ title, subtitle, navRoutes }) {

    function handleClick(url) {
        window.history.pushState({}, '', url);
        window.dispatchEvent(new Event('pushState'));
    }

    return (
        <header className="template">
            <div className="inner-content">
                <div className="header-title">
                    <h1 className="pointer-on-hover"
                        onClick={handleClick.bind(null, '/')}>
                        {title}
                    </h1>
                    <h2>{subtitle}</h2>
                </div>
                <div className="header-nav">
                    <nav>
                        <ul>
                            {navRoutes.map(({ text, link }) =>
                                <li key={link}>
                                    <a onClick={handleClick.bind(null, link)}>
                                        {text}
                                    </a>
                                </li>)}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};