import React, { Component } from "react";
import HashChangeListener from "../utils/HashChangeListener";

import './Summary.css';


/**
 * Summary
 */
class Summary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hash: window.location.hash.replace('#', '') || '/'
        };
    }


    onHashchange(event) {
        const [_, hash] = event.newURL.split('#');
        this.setState({ hash: hash });
    }


    render() {
        return (
            <div className="summary">
                <h1>{this.props.title}</h1>
                <ul>{this.props.routes.map(({ text, link }, index) =>
                    (<li key={link}
                        className={link === this.state.hash
                            // If the hash hasn't been set 
                            || this.state.hash === '/' && index === 0
                            ? 'selected'
                            : ''}>
                        <a href={`#${link}`}>{text}</a>
                    </li>))}
                </ul>
            </div>
        );
    }

}

// Mixing with HashChangeListener
Object.assign(Summary.prototype, HashChangeListener);

export default Summary;