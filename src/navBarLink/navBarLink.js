import React from "react";

export const NavBarLink = (props) => ({
    render: function() {
        return (
            <a href={props.url}> { props.text } </a>
        );
    }
});