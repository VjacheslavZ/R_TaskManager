import React from "react";

export const NavBarLink = (props) => ({
    render() {
        return (
            <a href={props.url} key={props.id}> { props.text } </a>
        );
    }
});