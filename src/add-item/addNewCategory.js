import React from 'react'


export const AddNewCategory = (props) => {
    const { name, onAdd, onNameChange} = props;
    
    console.log(name)

    const onSubmit = (ev) => {
        ev.preventDefault();

        if(name){
            return onAdd(name);
        }
    };

    const onChange = (ev) => {
        onNameChange(ev.target.value);
    };

    return(
        <div className='category-section__new-category'>
            <span>Add new category</span>
            <form action="category-section__new-category" onSubmit={ onSubmit }>

                <input
                    type='text'
                    placeholder='category name'
                    onChange={ onChange }
                    value={ name }
                />

                <button type="submit">OK</button>
            </form>
        </div>
    )
};

