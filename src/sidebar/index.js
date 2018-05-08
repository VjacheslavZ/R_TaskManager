import React from 'react';
import { CategoryList } from './category-list';


export const Sidebar = ({ categories, selectCategory }) => {
    return (
        <div>
            <div className='category-section__new-category'>
                <span>Add new category</span>
                <form action="category-section__new-category">
                    <input type="text" placeholder='category name'/>
                    <button type="submit">OK</button>
                </form>
            </div>
            <span>Categories</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCategory }
            />
        </div>
    )
};