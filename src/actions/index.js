import * as constants from './constants';
import { createAction } from '../helpers';


export const selectCategory = createAction(constants.CATEGORY_SELECT);

export const toggleDone = createAction(constants.TODO_DONE_TOGGLE);
export const saveTodo = createAction(constants.TODO_SAVE);
export const removeTodo = createAction(constants.TODO_REMOVE);

export const addCategory = createAction(constants.CATEGORY_ADD);
export const addCategoryChange = createAction(constants.CATEGORY_ADD_CHANGE);

export const addNewTask = createAction(constants.TASK_ADD);
export const addNewTaskNameChange = createAction(constants.TASK_ADD_NAME_CHANGE);
export const addNewTaskDescChange = createAction(constants.TASK_ADD_DESC_CHANGE);