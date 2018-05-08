import React from 'react';
import { CategoryList } from './category-list';


export const Sidebar = ({ categories, selectCategory }) => {
    return (
        <div>
            <div className='category-section__new-category'>
                <span>Add new category</span>
                <input type="text" placeholder='category name'/>
            </div>
            <span>Categories</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCategory }
            />
        </div>
    )
};