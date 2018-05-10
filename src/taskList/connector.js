import { connect } from 'react-redux';
import { addNewTask,
         addNewTaskNameChange,
         addNewTaskDescChange } from '../actions';


export const addNewTaskConnector = connect(
    (state) => ({
        taskName: state.addNewTask.text,/*to props*/
        taskText: state.addNewTask.text,
        category: "/react",
    }),{
        onAddTask: addNewTask,
        addNewTaskNameChange: addNewTaskNameChange,
        addNewTaskDescChange: addNewTaskDescChange
});