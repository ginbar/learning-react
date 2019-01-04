import React from "react";

export default function SocialMedia(props) {
    return (
        <div>
            <h2>Channels</h2>
            <ul>
                {props.links.map((link, index) =>
                    (<li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>))}
            </ul>
        </div>
    );
}