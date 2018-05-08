import React from 'react';
import { CategoryList } from './category-list';
import { AddNewCategory } from "../add-item/addNewCategory";
import { addCategoryConnector } from '../sidebar/connector'


const MyAddNewCategory = addCategoryConnector(AddNewCategory);

export const Sidebar = ({ categories, selectCategory }) => {
    return (
        <div>
            <MyAddNewCategory/>
            <span>Categories</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCategory }
            />
        </div>
    )
};