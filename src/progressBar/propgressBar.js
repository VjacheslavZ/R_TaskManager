import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {filter} from 'lodash';


export const ProgressBar = (props) => {
    const { dataList } = props;

    return(
        <Switch>
            <Route path='/' component={(route) => (
                <Progress {...props} {...route} />
            )}>
            </Route>
        </Switch>

    )
};


const Progress = (props) => {

    const url = props.location.pathname;
    const tasks = props.dataList;
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

    const progress = (100/statusTasks.length) * statusTasksDone.length;

    let style = {
        width: progress + "%"
    };

    return(
        <div className="myProgress">
            <div className="myBar" style={style}>
            </div>
        </div>
    )
};