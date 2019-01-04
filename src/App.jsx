import React, { Component } from "react";

import Header from "./template/Header.jsx";
import Router from "./template/Router";
import Footer from "./template/Footer.jsx";

import Development from "./views/Development";
import Components from "./views/Components";
import Redux from "./views/Redux";
import NotFound from "./views/NotFound";

import './App.css';

export default function App(props) {
    return (
        <div className="app">
            <div className="content">
                <Header
                    title="Learning React"
                    // subtitle="A proof of concept React app"
                    navRoutes={[
                        { text: 'Development', link: '/development' },
                        { text: 'Components', link: '/components' },
                        { text: 'Redux', link: '/redux' },]}>
                </Header>
                <div className="view-content">
                    <div className="inner-content">
                        <Router
                            mode="url"
                            routes={[
                                { link: '/', view: Development },
                                { link: '/development', view: Development },
                                { link: '/components', view: Components },
                                { link: '/redux', view: Redux },
                            ]}
                            otherwise={NotFound}>
                        </Router>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};