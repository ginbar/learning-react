import React from "react";

export default function PoweredBy(props) {
    return (
        <div>
            <h2>Powered by</h2>
            <ul>
                {props.links.map(({ url, text }, index) =>
                    (<li key={index}>
                        <a href={url}>{text}</a>
                    </li>))}
            </ul>
        </div>
    );
}