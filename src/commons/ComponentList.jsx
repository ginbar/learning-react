import React, { Component, Children } from "react";

export default class ComponentList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {Children.map(this.props.children, (child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ul>
        );
    }

};