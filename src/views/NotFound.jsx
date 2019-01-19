import React from "react";

export default function NotFound(props) {

    // It doesn't hurt to use some inline style
    const divStyle = {
        height: '100%',
        display: 'flex',
        alignContent: 'center'
    };

    const h1Style = {
        color: '#eaedf2',
        textAlign: 'center'
    };

    return (
        <div style={divStyle}>
            <h1 style={h1Style}>Sorry, content wasn't found :(</h1>
        </div>
    );
};