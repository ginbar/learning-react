import React, { Component } from "react";

export default class Clock extends Component {
    
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        
        this.description = <p>
            A simple digital clock.
        </p>;
    }

    render() {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        );
    }

    componentDidMount() {
        this._refreshEventId = setInterval(
            () => this.tick(), 
            this.props.refresh); 
    }

    componentWillUnmount() {
        clearInterval(this._refreshEventId);
    }

    tick() {
        this.setState({ date: new Date() });
    }
};