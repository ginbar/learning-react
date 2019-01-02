import React from "react";

import ComponentList from "../commons/ComponentList";
import ComponentListItem from "../commons/ComponentListItem";

import Clock from "../commons/Clock";

export default function About(props) {
    return (
        <div>
            <p>This section contains a list of small components 
                I've built using with React.</p>
            <ComponentList>
                <ComponentListItem
                    name="Digital clock"
                    description="A simple digital clock."
                    component={Clock}>
                </ComponentListItem>
            </ComponentList>
        </div>
    );
};