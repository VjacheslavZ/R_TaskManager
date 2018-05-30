import { createSelector } from 'reselect';
/*selector*/
const data = (state) => state.categories;

/*create memoize selector*/
export const list = createSelector(
    data,
    /*conversion function */
    data => data.get('list')
);

/*create memoize selector*/
export const selectedCategory = createSelector(
    data,
    data => {return data.get('selectedCategory')}
);