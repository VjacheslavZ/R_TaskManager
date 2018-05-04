import React from 'react';
import { CategoryList } from './category-list';

export const Sidebar = ({ categories, selectCat }) => {
    return (
        <div>
            <span>Categories</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCat }
            />
        </div>
    )
};