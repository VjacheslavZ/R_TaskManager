import React from "react";
import { NavLink } from  'react-router-dom';

export const NavBarLink = (props) => ({
    render() {
        return (
            <NavLink exact to={props.url}> { props.text } </NavLink>
        );
    }
});