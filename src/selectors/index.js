import { createImmutableSelector } from '../helpers';
import {selectedCategory} from './categories';

const todos = (state) => state.todos;

const items = createImmutableSelector(
    todos,
    todos => {return todos.get('items')}
);

const selectCatId = createImmutableSelector(
    todos,
    todos => {return todos.get('')}
)

/*selectCatId: state.categories.selectedCategory*/


export const itemsForSelectedCategory = createImmutableSelector(
    [items, selectedCategory],
    (items, selectedCategory) => {
        return items/*.filter(item => item.get('categoryId') === selectedCategory)*///url
    }
);