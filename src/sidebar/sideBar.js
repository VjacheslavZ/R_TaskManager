import React from 'react';
import { map } from 'lodash';


const CategoryItem = ({ category, categories, selectCat }) => {
    return (
        <li >
            <button onClick={ () => selectCat(category.id) }>{ category.name }</button>
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
                                 categories={ categories }
                                 selectCat={ selectCat }/>
            )
        }
    </ul>
);

export const Sidebar = ({ categories, selectCat }) => {
    return (
        <div className="">
            <span> Tasks</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCat }/>
        </div>
    )
};