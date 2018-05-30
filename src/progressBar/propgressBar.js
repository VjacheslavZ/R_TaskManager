import React from 'react';
import { withRouter } from 'react-router'
import {filter} from 'lodash';

export const ProgressBar = (props) => {
    const { location } = props;

    return(
        <Progress {...props} location={location}/>
    )
};

const Progress = (props) => {
    const url = props.location.pathname;
    const tasks = props.todos;
    const statusTasks = [];
    const statusTasksDone = [];

    filter(tasks, (task) => {
        if(task.category === url) {
            statusTasks.push(task.isDone);

            if(task.isDone){
                statusTasksDone.push(task.isDone)
            }
        }
    });

    const progress = Math.floor( (100/statusTasks.length) * statusTasksDone.length );

    const style = {
        width: progress + "%"
    };

    return(
        <div className="myProgress">
            <div className="myBar" style={style}>
            </div>
        </div>
    )
};