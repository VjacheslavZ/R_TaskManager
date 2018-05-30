import { connect } from 'react-redux';
import {createConnectorForSelector} from "../helpers";

import {
    addNewTask,
    addNewTaskNameChange,
    addNewTaskDescChange,
    toggleDone,
    saveTodo,
    showModal } from '../actions';

export const addNewTaskConnector = connect(
    (state) => ({
        taskName: state.addNewTask.taskName,/*to props*/
        taskText: state.addNewTask.taskText,
        category: "/react",
    }),{
        onAddTask: addNewTask,
        addNewTaskNameChange: addNewTaskNameChange,
        addNewTaskDescChange: addNewTaskDescChange
});

export const todoConnector = createConnectorForSelector(null, {
    toggleDone,
    saveTodo: saveTodo,
    showModal: showModal
});