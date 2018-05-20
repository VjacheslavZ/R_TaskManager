import { createImmutableSelector } from '../helpers';
import {selectedCategory} from './categories';

const todos = (state) => state.todos;

const items = createImmutableSelector(
    todos,
    todos => {return todos.get('items')}
);

export const itemsForSelectedCategory = createImmutableSelector(
    [items, selectedCategory],
    (items, selectedCategory) => {
        return {items, selectedCategory}
    }
);
