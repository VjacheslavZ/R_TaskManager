import React from 'react';
import { CategoryItem } from './category-item';
import { map, compact, isEmpty } from 'lodash';


export const CategoryList = ({ categories, parentId, selectCat }) => {
    const children = compact(map(categories, cat => {
        if (cat.parentId === parentId) {
            return(
                <ul className="category-section__menu" key={cat.id}>
                    <CategoryItem key={cat.id}
                                  category={ cat }
                                  url={cat.url}
                                  categories={ categories }
                                  selectCat={ selectCat }
                    />
                </ul>

            )
        }
    }));

    if (!isEmpty(children)) {
        return ( <ul>{ children }</ul> );
    }

    return null;
};


