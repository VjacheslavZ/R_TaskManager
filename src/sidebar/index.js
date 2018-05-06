import React from 'react';
import { CategoryList } from './category-list';


export const Sidebar = ({ categories, selectCategory }) => {
    return (
        <div>
            <span>Categories</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCategory }
            />
        </div>
    )
};