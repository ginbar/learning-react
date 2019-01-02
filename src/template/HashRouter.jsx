import React, { Component } from "react";

export default class HashRouter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            link: location.hash.replace('#', '') || '/'
        };

        this.routes = new Map(props.routes
            .map(route => [route.link, route.view]));

        this.notFoundView = props.otherwise;
        this.onHashchange = this.onHashchange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.onHashchange);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.onHashchange);
    }

    render() {
        let View = this.routes.get(this.state.link);
        if (!View) View = this.notFoundView;
        if (!View) return null;
        return <View></View>;
    }

    onHashchange(event) {
        const [_, hash] = event.newURL.split('#');
        this.setState({ link: hash });
    }
};