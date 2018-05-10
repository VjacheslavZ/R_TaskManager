import { combineReducers } from 'redux';
import { categories } from './categories';
import { todos } from './todos';
import { addCategory } from '../reducers/add-category'
import { addNewTask } from "./add-task";


export const reducer = combineReducers({
    categories,
    todos,
    addCategory,
    addNewTask
});