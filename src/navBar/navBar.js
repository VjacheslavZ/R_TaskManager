import React from 'react';

import {NavBarLink} from '../navBarLink/navBarLink';
import {CategorySection} from '../categorySection/categorySection';

export const NavBar = (props) => ({
    generateLink(){
        return <NavBarLink
                    url={this.props.url}
                    text={this.props.text}
                    id={this.props.id}
                    key={this.props.id}
        />;
    },
    generateSubmenu(){
        return <CategorySection items={props.submenu} />
    },
    generateContent(){
        const content = [this.generateLink()];

        if(this.props.submenu){
            content.push(this.generateSubmenu());
        }
        return content;
    },

    render(){
        const content = this.generateContent();
        return (
            <li key={this.props.id}>
                {content}
            </li>
        );
    }
});