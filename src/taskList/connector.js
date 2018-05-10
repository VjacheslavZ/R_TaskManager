import { connect } from 'react-redux';
import { addNewTask } from '../actions';


export const addNewTaskConnector = connect(
    (state) => ({
        taskName: state.addNewTask.taskName,
        taskText: state.addNewTask.taskText,
        category: "/react",
    }),{
        onAddTask: addNewTask
});