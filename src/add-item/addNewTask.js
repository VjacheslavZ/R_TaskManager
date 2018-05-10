import React from 'react';
import {Input} from "../formElements/input";


export const AddNewTask = (props) => {
    
    console.log(props);
    
    return(
        <div>
            <form action="" className='task-list__add-inputs'>

                <input
                    type='text'
                    className='task-description'
                    name='task-name'
                    placeholder='Task name'
                />

                <input
                    type='text'
                    className='task-description'
                    name='task-description'
                    placeholder='Task name'
                />
{/*
                <Input type='text'
                       className='task-description'
                       name='task-description'
                       placeholder='Task description'/>
                <Input type='text'
                       className='task-description'
                       name='task-description'
                       placeholder='Task description'/>*/}

                <button type="submit">OK</button>
            </form>
        </div>
    )
};