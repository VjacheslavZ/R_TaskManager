import React from 'react';
import {Input} from "../formElements/input";


export const AddNewTask = (props) => {

    const {taskName, taskText, category, onAddTask, addNewTaskNameChange, addNewTaskDescChange} = props;
    
    console.log(props);

    const onSubmit = (ev) => {
        ev.preventDefault();

        onAddTask({taskName, taskText})
    };

    const onChangeName = (ev) => {
        addNewTaskNameChange(ev.target.value);
    };
    const onChangeDesc = (ev) => {
        addNewTaskDescChange(ev.target.value);
    };
    
    return(
        <div>
            <form action="" className='task-list__add-inputs' onSubmit={ onSubmit }>

                <input
                    type='text'
                    className='task-description'
                    name='task-name'
                    placeholder='Task name'
                    value={ taskName }
                    onChange={ onChangeName }
                />

                <input
                    type='text'
                    className='task-description'
                    name='task-description'
                    placeholder='Task name'
                    value={ taskText }
                    onChange={ onChangeDesc }


                />

                <button type="submit">OK</button>
            </form>
        </div>
    )
};