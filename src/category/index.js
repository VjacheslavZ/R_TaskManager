import React from 'react';
import { List } from '../categoryList'

export const CategoryList = () => {
    return(
        <div className="category-list">
            <span> Tasks</span>
            <ul className="category-list__todo">
                <List/>
            </ul>
        </div>
    );
};

