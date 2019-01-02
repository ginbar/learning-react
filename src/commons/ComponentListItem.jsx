import React from "react";

export default function ComponentListItem(props) {

    const { name, description, component: Component } = props;

    return (
        <div>
            <div>{name}</div>
            <div>{description}</div>
            <div><Component></Component></div>
        </div>
    );
};