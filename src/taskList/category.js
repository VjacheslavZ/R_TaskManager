import React, { Fragment } from 'react';
import { map, filter } from 'lodash';
import { Route } from 'react-router-dom';

import {List} from './taskListItem';
import { AddNewTask } from '../add-item/addNewTask';

import { addNewTaskConnector, todoConnector } from "./connector";

const MyAddNewTask = addNewTaskConnector(AddNewTask);
const Todo = todoConnector(List);

export const TaskList = (props) => {
    return (
        <div className="task-list">
            <Route path='/' component={(route) => (
                <Fragment>
                    <div className="task-list__add-new">
                        <span>Add new task</span>
                        <MyAddNewTask url={route.location.pathname}/>
                    </div>

                    <span>Tasks</span>
                    <TasksList {...props} {...route} />
                </Fragment>
            )}/>
        </div>
    );
};


const TasksList = (props) => {

    const {todos, removeTodo} = props;
    const locUrl = props.location.pathname;
    const sortedCategory = [];

    filter(todos, (task) => {
        if (task.category === locUrl) {
            sortedCategory.push(task)
        }
    });

    return (
        <ul className="task-list__todo">
            {
                sortedCategory.length ?
                    map(sortedCategory, task => (
                            <Todo data={task}
                                  key={task.id}
                                  removeTodo={removeTodo}/>
                        )
                    )
                    :
                    <h3>No tasks</h3>
            }
        </ul>
    )
};




