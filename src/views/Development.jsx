import React from "react";

import Summary from "../commons/Summary";
import HashRouter from "../template/HashRouter";

import Intro from "./Intro";

import "./Development.css";

export default function Development(props) {

    const summaryRoutes = [
        {
            text: 'Intro',
            link: '/intro',
            view: Intro
        },
        {
            text: 'React',
            link: '/react',
            view: function () { return <div>React</div>; }
        },
        {
            text: 'Toolchain',
            link: '/toolchain',
            view: function () { return <div>Toolchain</div>; }
        },
        {
            text: 'Components',
            link: '/components',
            view: function () { return <div>Components</div>; }
        },
        {
            text: 'CSS',
            link: '/css',
            view: function () { return <div>CSS</div>; }
        }
    ];

    const hashRoutes = summaryRoutes.concat({
        link: '/',
        view: Intro
    });

    return (
        <div className="development-view">
            <div className="development-content">
                <HashRouter routes={hashRoutes}></HashRouter>
            </div>
            <div className="development-summary">
                <Summary title="Summary" routes={summaryRoutes}></Summary>
            </div>
        </div>
    );
};