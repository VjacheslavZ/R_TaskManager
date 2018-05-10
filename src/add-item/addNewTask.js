import React from 'react';

export const AddNewTask = (props) => {

    const { taskName,
            taskDesc,
            onAddTask,
            addNewTaskNameChange,
            addNewTaskDescChange} = props;

    const onSubmit = (ev) => {
        ev.preventDefault();

        return onAddTask({taskName, taskDesc})
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
                    value={ taskDesc }
                    onChange={ onChangeDesc }
                />

                <button type="submit">OK</button>
            </form>
        </div>
    )
};