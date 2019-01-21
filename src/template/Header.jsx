import React, { Component } from "react";
import PushStateListener from "../utils/PushStateListener";

import './Header.css';
import '../App.css';


/**
 * App header. 
 */
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { path: window.location.pathname };
    }


    handleClick({ link, text }) {
        window.history.pushState({}, text, link);
        window.dispatchEvent(new Event('pushstate'));
        this.setState({ path: link });
    }


    onPushstate() {
        this.setState({ path: window.location.pathname });
    }


    render() {
        return (
            <header className="template">
                <div className="inner-content">
                    <div className="header-title">
                        <h1 className="pointer-on-hover"
                            onClick={this.handleClick.bind(this, this.props.titleRoute)}>
                            {this.props.title}
                        </h1>
                        <h2>{this.props.subtitle}</h2>
                    </div>
                    <div className="header-nav">
                        <nav>
                            <ul>
                                {this.props.navRoutes.map((route, index) =>
                                    <li key={route.link}
                                        onClick={this.handleClick.bind(this, route)}
                                        className={this.state.path === route.link
                                            || this.state.path === '/' && index === 0
                                            ? 'selected-link'
                                            : ''}>
                                        <a>
                                            {route.text}
                                        </a>
                                    </li>)}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

// Mixing with PushStateListener
Object.assign(Header.prototype, PushStateListener);

export default Header;