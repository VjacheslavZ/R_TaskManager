import React from 'react';
import {NavBar} from '../navBar/navBar'

export const CategorySection = (props) =>({
    generateItem(item){
        return <NavBar text={item.text}
                       url={item.url}
                       submenu={item.submenu}
                       key={item.id}
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


/*var data = [
    {
        "text": "Today",
        "url": "today",
        "id": 0,
        "submenu": [
            {
                "text": "Try React",
                "url": "try-react",
                "id": 1
            }
        ]
    },
    {
        "text": "Work",
        "url": "work",
        "id": 2,
        "submenu": [
            {
                "text": "Introducing JSX",
                "url": "introducing-jsx",
                "id": 3
            }
        ]
    },
    {
        "text": "Notes",
        "url": "notes",
        "id": 7,
        "submenu": [
            {
                "text": "React",
                "url": "ref-react",
                "id": 8
            }
        ]
    }
];*/








