import React from 'react';

export const Control = (props) =>{
    return(
        <div className="category-list__control" key={props.id}>

            <button className="category-list__edit">
                EDIT
            </button>

            <button className="category-list__dell">
                DELL
            </button>

        </div>
    )
};