import React from 'react';
import { List } from '../categoryList'

export const CategoryList = (lists) => {
    lists.map(function (item) {
        console.log(item)
    })
    return(
        <div className="category-list">
            <span> Tasks</span>
            <ul className="category-list__todo">
                <List/>
            </ul>
        </div>
    );
};

