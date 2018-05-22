import { combineReducers } from 'redux';
import { categories } from './categories';
import { todos } from './todos';
import { addCategory } from '../reducers/add-category'
import { addNewTask } from "./add-task";
import modal from '../components/modal/modal';

export const reducer = combineReducers({
    todos,
    addCategory,
    categories,
    addNewTask,
    modal
});