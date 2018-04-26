import React from 'react';
import { NavLink } from  'react-router-dom';

import { map } from 'lodash';

let category;
let subCategory;


const CategoryItem = ({ category, categories, selectCat, url}) => {
    return (
        <li >
            <NavLink to={url} onClick={ () => selectCat(category.id) }>
                { category.name }
            </NavLink>
            {
                <CategoryList categories={ categories }
                              parentId={ category.id }
                              selectCat={ selectCat }/>
            }
        </li>
    );
};

const CategoryList = ({ categories, parentId, selectCat }) => (
    <ul className="category-section__menu">
        {
            map(categories, cat =>
                cat.parentId === parentId
                && <CategoryItem key={cat.id}
                                 category={ cat }
                                 url={cat.url}
                                 categories={ categories }
                                 selectCat={ selectCat }/>
            )
        }
    </ul>
);

export const Sidebar = ({ categories, selectCat }) => {
    return (
        <div>
            <span> Tasks</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCat }/>
        </div>
    )
};