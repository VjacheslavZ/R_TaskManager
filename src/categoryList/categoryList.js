import React from 'react'
import { Info } from '../categoryShortInfo/categoryShortInfo'
import { Control } from "../categoryControls/categoryControls";

export const List = (props) => {
    return(
        <li>
            <div className="category-list__info">
                <input type="checkbox" defaultChecked={props.data.isDone}/>
                <Info description={props.data}/>
                <Control id={props.data.id}
                         onEditTask={props.onEditTask}
                         onDellTask={props.onDellTask}
                />
            </div>

            <div className="category-list__full-desc">
                <textarea/>
            </div>
        </li>
    )
};