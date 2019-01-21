import React, { Component } from "react";

import Header from "./template/Header";
import BrowserRouter from "./template/routers/BrowserRouter";
import Footer from "./template/Footer";

import Development from "./views/Development";
import Components from "./views/Components";
import Redux from "./views/Redux";
import ReactNative from "./views/ReactNative";
import NotFound from "./views/NotFound";

import './App.css';

export default function App(props) {
    return (
        <div className="app">
            <div className="content">
                <Header
                    title="Learning React"
                    titleRoute={{ text: 'Route', link: '/' }}
                    navRoutes={[
                        { text: 'Development', link: '/development' },
                        { text: 'Components', link: '/components' },
                        { text: 'Redux', link: '/redux' },
                        { text: 'React Native', link: '/reactnative' }]}>
                </Header>
                <div className="view-content">
                    <div className="inner-content">
                        <BrowserRouter
                            routes={[
                                { link: '/', view: Development },
                                { link: '/development', view: Development },
                                { link: '/components', view: Components },
                                { link: '/redux', view: Redux },
                                { link: '/reactnative', view: ReactNative }
                            ]}
                            otherwise={NotFound}>
                        </BrowserRouter>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};