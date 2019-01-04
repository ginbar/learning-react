import React from "react";

import "./ComponentListItem.css";

export default function ComponentListItem(props) {

    const { name, description, component: Component } = props;

    return (
        <div className="component-list-item">
            <div className="text">
                <h2>{name}</h2>
                <div>{description}</div>
            </div>
            <div className="component">
                <Component></Component>
            </div>
        </div>
    );
};