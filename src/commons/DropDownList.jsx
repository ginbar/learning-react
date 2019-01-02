import React from "react";

export default function DropDownList(props) {

    function handleClick(e) {
        console.log(e);
    }

    return (
        <ul>
            <li onClick={handleClick}>Item 1</li>
            <li onClick={handleClick}>Item 1</li>
            <li onClick={handleClick}>Item 1</li>
        </ul>
    );
};