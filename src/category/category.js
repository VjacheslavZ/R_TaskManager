import React from 'react';
import { map, filter } from 'lodash';
import { Switch, Route } from  'react-router-dom';

import { List } from '../categoryList/categoryList'

export const ContentList = (props) => {
    return(
        <div className="category-list">
            <span> Tasks</span>
            <Switch>
                <Route path='/:category' component ={(route)=>(
                    <Tasks {...props} {...route} />
                )}/>
            </Switch>
        </div>
    );
};

const Tasks = (props) =>{
    const {dataList, toggleDone, saveTodo} = props;
    const locUrl = props.location.pathname;
    const sortedCategory =[];

    filter(dataList, (task)=>{
        if(task.category === locUrl){
            sortedCategory.push(task)
        }
    });
    return(
        <ul className="category-list__todo">
            {
                sortedCategory.length ?
                    map(sortedCategory, task => (
                            <List data={task}
                                  key={task.id}
                                  toggleDone={ toggleDone }
                                  saveTodo = { saveTodo }/>
                        )
                    )
                :
                    <h3>No tasks</h3>
            }
        </ul>
    )
};




