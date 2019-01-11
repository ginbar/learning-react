import React, { Component } from "react";

import './Summary.css';

export default class Summary extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // window.addEventListener('')
    }

    render() {

        const { title, routes, mode = 'hash' } = this.props;
        const path = mode === 'hash'
            ? window.location.hash.replace('#', '') || '/'
            : window.location.pathname;

        return (
            <div className="summary">
                <h1>{title}</h1>
                <ul>
                    {routes.map(({ text, link }) =>
                        (<li key={link} className={link === path ? 'selected' : ''}>
                            <a href={`#${link}`}>{text}</a>
                        </li>))}
                </ul>
            </div>
        );
    }
};