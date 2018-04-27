import React from 'react';
import { map, filter } from 'lodash';
import { Switch, Route } from  'react-router-dom';

import { List } from '../categoryList/categoryList'

export const CategoryList = (props) => {
    // console.log(props)
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
    const {dataList, saveItem, toggleDone, selectCatId} = props;
    const category = props.match.params.category;
    const url = props

    console.log(props)

    const sortedCategory =[];
    filter(dataList, (task)=>{
        if(task.category === props.location.pathname){
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
                                  saveItem = { saveItem }/>
                        )
                    )
                :
                    <h3>No tasks</h3>
            }
        </ul>
    )
};




