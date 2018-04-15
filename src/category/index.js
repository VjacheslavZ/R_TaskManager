import React from 'react';
import { List } from '../categoryList'

export const CategoryList = (props) => {

    return(
        <div className="category-list">
            <span> Tasks</span>
            <ul className="category-list__todo">
                {
                    props.dataList.map(task =>
                        <List data={task}
                              key={task.id}
                              onEditTask = {props.onEditTask}
                              onDellTask = {props.onDellTask}
                              />
                    )
                }
            </ul>
        </div>
    );
};

