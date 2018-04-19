import React from 'react';

import {NavBar} from '../navBar/navBar'


export const CategorySection = (props) =>({
    generateItem(item){
        return <NavBar text={item.text}
                           url={item.url}
                           submenu={item.submenu} />
    },

    render() {
        const items = props.items.map(this.generateItem);

        return (
            <ul className="category-section__menu">
                {items}
            </ul>
        );
    }
});


var data = [
    {
        "text": "Link 1",
        "url": "#"
    },
    {
        "text": "Link 2",
        "url": "#"
    },
    {
        "text": "Link 3",
        "url": "#",
        "submenu": [
            {
                "text": "Sublink 1",
                "url": "#",
                "submenu": [
                    {
                        "text": "SubSublink 1",
                        "url": "#"
                    }
                ]
            },
            {
                "text": "Sublink 2",
                "url":"#",
                "submenu": [
                    {
                        "text": "SubSublink 2",
                        "url": "#"
                    }
                ]
            }
        ]
    }
];