import React, { Component } from "react";


/**
 * 
 */
export default class Router extends Component {

    constructor(props) {
        super(props);

        this.routes = new Map(props.routes
            .map(route => [route.link, route.view]));

        this.notFoundView = props.otherwise;
        this.state = {};
    }


    render() {
        let View = this.routes.get(this.state.link);
        if (!View) View = this.notFoundView;
        if (!View) return null;
        return <View></View>;
    }

};