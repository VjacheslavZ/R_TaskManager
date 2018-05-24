import * as constants from './constants';
import { createAction } from '../helpers';
/*sidebar*/
export const selectCategory = createAction(constants.CATEGORY_SELECT);
/*task item*/
export const toggleDone = createAction(constants.TODO_DONE_TOGGLE);
export const saveTodo = createAction(constants.TODO_SAVE);
export const removeTodo = createAction(constants.TODO_REMOVE);
/*add new category*/
export const addCategory = createAction(constants.CATEGORY_ADD);
export const addCategoryChange = createAction(constants.CATEGORY_ADD_CHANGE);
/*add new task in task list*/
export const addNewTask = createAction(constants.TASK_ADD);
/*edit one task*/
export const addNewTaskNameChange = createAction(constants.TASK_ADD_NAME_CHANGE);
export const addNewTaskDescChange = createAction(constants.TASK_ADD_DESC_CHANGE);
/*actions for popUp*/
export const confirmTaskDeletion = createAction(constants.TASK_DELETE_CONFIRM);
export const rejectTaskDeletion = createAction(constants.TASK_DELETE_REJECT);
export const showModal = createAction(constants.MODAL_SHOW);