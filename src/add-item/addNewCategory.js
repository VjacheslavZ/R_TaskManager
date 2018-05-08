import React from 'react'
import {Input} from "../formElements/input";


export const AddNewCategory = (props) => {
    return(
        <div className='category-section__new-category'>
            <span>Add new category</span>
            <form action="category-section__new-category">

                <Input type="text"
                       placeholder='category name'
                       name='category-name'/>

                <button type="submit">OK</button>
            </form>
        </div>
    )
}

