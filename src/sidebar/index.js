import React from 'react';
import { CategoryList } from './category-list';
import { AddNewCategory } from "../add-item/addNewCategory";


export const Sidebar = ({ categories, selectCategory }) => {
    return (
        <div>
            <AddNewCategory/>
            <span>Categories</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCategory }
            />
        </div>
    )
};