import React, { Component, Children } from "react";

import "./ComponentList.css";

export default class ComponentList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="component-list">
                {Children.map(this.props.children, (child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ul>
        );
    }

};