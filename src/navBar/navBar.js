import React from 'react';

import {NavBarLink} from '../navBarLink/navBarLink';
import {CategorySection} from '../categorySection/categorySection';

export const NavBar = (props) => ({
    generateLink(){
        return <NavBarLink
                    url={this.props.url}
                    text={this.props.text}
                    id={this.props.id}
                    key={this.props.id + 10} /*<=how get here key correct*/
        />;
    },
    generateSubmenu(){
        return <CategorySection items={props.submenu} key={props.id}/>
    },
    generateContent(){
        const content = [this.generateLink()];

        if(this.props.submenu){
            // const mainUrl = this.props.url;
            // const subMenuFullUrl = mainUrl + "/" + this.props.submenu[0].url;
            // this.props.submenu[0].url = subMenuFullUrl;
            content.push(this.generateSubmenu());
        }
        return content;
    },

    render(){
        const content = this.generateContent();

        return (
            <li>
                {content}
            </li>
        );
    }
});