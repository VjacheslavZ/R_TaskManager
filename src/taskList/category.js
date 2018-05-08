import React from 'react';
import {map, filter} from 'lodash';
import {Switch, Route} from 'react-router-dom';
import {List} from './taskListItem'


export const TaskList = (props) => {
    return (
        <div className="task-list">
            <div className="task-list__add-new">
                <span>Add new task</span>
                <div>
                    <form action="" className='task-list__add-inputs'>
                        <input type="text" className='task-name' name='task-name' placeholder='Task name'/>
                        <input type="text" className='task-description' name='task-description' placeholder='Task description'/>
                        <button type="submit">OK</button>
                    </form>
                </div>
            </div>
            <span> Tasks</span>

            <Switch>
                <Route path='/' component={(route) => (
                    <TasksList {...props} {...route} />
                )}/>
            </Switch>
        </div>
    );
};


const TasksList = (props) => {
    const {dataList, toggleDone, saveTodo, removeTodo} = props;
    const locUrl = props.location.pathname;
    const sortedCategory = [];

    filter(dataList, (task) => {
        if (task.category === locUrl) {
            sortedCategory.push(task)
        }
    });

    return (
        <ul className="task-list__todo">
            {
                sortedCategory.length ?
                    map(sortedCategory, task => (
                            <List data={task}
                                  key={task.id}
                                  toggleDone={toggleDone}
                                  saveTodo={saveTodo}
                                  removeTodo={removeTodo}/>
                        )
                    )
                    :
                    <h3>No tasks</h3>
            }
        </ul>
    )
};




