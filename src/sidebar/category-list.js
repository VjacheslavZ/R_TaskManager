import React from 'react';
import { CategoryItem } from './category-item';
import { map } from 'lodash';

export const CategoryList = ({ categories, parentId, selectCat }) => {
    return(
        <ul className="category-section__menu" >
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


