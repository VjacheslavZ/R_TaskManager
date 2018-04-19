import React, {Component} from 'react';
import {CategoryItem} from '../categorySectionItem/categorySectionItem'

export const CategorySection = (props) => {

    console.log(props)

    return(
        <div className="category-section">
            <span>Category</span>

            <ul className="category-section__menu">

                <CategoryItem/>

                <li>
                    <a href="/home">Home</a>
                    <ul>
                        <li><a href="/home2">Home 1.1</a></li>
                        <li><a href="#">Home 1.2</a></li>
                    </ul>
                </li>

                <li><a href="#">About</a>



                </li>
            </ul>
        </div>
    )
};



var arr =
    {
        "0":{
            "id":0,
            "name": "QUICK START",
            "link": "qStart",
            "parent": "null"
        },
        "1":{
            "id":1,
            "name": "Introducing JSX",
            "link": "InJSX",
            "parent": 0,
        },
        "2":{
            "id":2,
            "name": "Components and Props",
            "link": "CoAndProps",
            "parent": 0,
        },
        "3":{
            "id":3,
            "name": "ADVANCED GUIDES",
            "link": "AdGuides",
            "parent": null,
        },
        "4":{
            "id":4,
            "name": "JSX In Depth",
            "link": "JsxInDe",
            "parent": 3,
        },
        "5":{
            "id":5,
            "name": "Components and Props",
            "link": "CoAndPropsAdvansed",
            "parent": 3,
        },
        "6":{
            "id":6,
            "name": "Refs and the DOM",
            "link": "refAndDom",
            "parent": 3,
        },
    }
;

