import React from 'react';

import {NavBar} from '../navBar/navBar'


export const CategorySection = (props) =>({
    generateItem(item){
        return <NavBar text={item.text}
                       url={item.url}
                       submenu={item.submenu}
                       key={item.id + 5}
                       id={item.id}/>
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
        "url": "#",
        "id": 0
    },
    {
        "text": "Link 2",
        "url": "#",
        "id": 1
    },
    {
        "text": "Link 3",
        "url": "#",
        "id": 2,
        "submenu": [
            {
                "text": "Sublink 1",
                "url": "#",
                "id": 3
            },
            {
                "text": "Sublink 2",
                "url":"#",
                "id": 5
            }
        ]
    }
];