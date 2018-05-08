import React from 'react';
import {Input} from "../formElements/input";


export const AddNewTask = (props) => {
    return(
        <div>
            <form action="" className='task-list__add-inputs'>
                <Input type='text'
                       className='task-name'
                       name='task-name'
                       placeholder='Task name'/>
                <Input type='text'
                       className='task-description'
                       name='task-description'
                       placeholder='Task description'/>

                <button type="submit">OK</button>
            </form>
        </div>
    )
};