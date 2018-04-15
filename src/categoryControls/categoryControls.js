import React from 'react';

export const Control = (props) =>{
    return(
        <div className="category-list__control" key={props.id}>

            <button className="category-list__edit"
                onClick={() => props.onEditTask(props.id)}>
                EDIT
            </button>

            <button className="category-list__dell"
                onClick={() => props.onDellTask(props.id)}>
                DELL
            </button>

        </div>
    )
};