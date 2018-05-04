import React from 'react';
import { NavLink } from  'react-router-dom';
import { CategoryList } from './category-list';
import { map, filter, mapKeys } from 'lodash';

export const CategoryItem = ({ category, categories, selectCat, url}) => {
    return (
        <li>

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
