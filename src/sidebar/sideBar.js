import React from 'react';
import { NavLink } from  'react-router-dom';
import { map, filter, mapKeys } from 'lodash';

const CategoryItem = ({ category, categories, selectCat, url}) => {
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

const CategoryList = ({ categories, parentId, selectCat }) => {
    const countSubTasks = [];

    // console.log(categories);

    // map(categories, item => {
    //     forEach(item, (value, key) =>{
    //         console.log(value, key);
    //
    //     })
    // });

    // mapKeys(categories, function(value, key) {
    //     map(categories, item => {
    //         if(item.parentId == key){
    //             countSubTasks.push(item.parentId)
    //         }
    //     });
    // });


    console.log(countSubTasks);

    return(
        <ul className="category-section__menu" data-sh={countSubTasks.length}>
            {
                map(categories, cat =>
                    cat.parentId === parentId
                    && <CategoryItem key={cat.id}
                                     category={ cat }
                                     url={cat.url}
                                     categories={ categories }
                                     selectCat={ selectCat }
                    />
                )
            }
        </ul>
    )
};

export const Sidebar = ({ categories, selectCat }) => {
    return (
        <div>
            <span>Tasks</span>
            <CategoryList categories={ categories }
                          parentId={ null }
                          selectCat={ selectCat }/>
        </div>
    )
};