import React from "react";

export default function SocialMedia(props) {
    return (
        <ul className="no-style-link-list">
            {props.links.map((link, index) =>
                (<li key={index}>
                    <a href={link.url}>{link.text}</a>
                </li>))}
        </ul>
    );
}