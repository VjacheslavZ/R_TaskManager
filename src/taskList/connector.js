import { connect } from 'react-redux';
import { addNewTask,
         addNewTaskNameChange,
         addNewTaskDescChange } from '../actions';


export const addNewTaskConnector = connect(
    (state) => ({
        taskName: state.addNewTask.taskName,/*to props*/
        taskDesc: state.addNewTask.taskDesc,
        category: "/react",
    }),{
        onAddTask: addNewTask,
        addNewTaskNameChange: addNewTaskNameChange,
        addNewTaskDescChange: addNewTaskDescChange
});