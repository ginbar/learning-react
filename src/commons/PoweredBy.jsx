import React from "react";

export default function PoweredBy(props) {
    return (
        <ul className="no-style-link-list">
            {props.links.map(({ url, text }, index) =>
                (<li key={index}>
                    <a href={url}>{text}</a>
                </li>))}
        </ul>
    );
}