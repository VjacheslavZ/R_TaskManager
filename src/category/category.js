import React from 'react';
import { map } from 'lodash';
import { List } from '../categoryList/categoryList'

export const CategoryList = (props) => {
    const {dataList,saveItem,toggleDone} = props;

    return(
        <div className="category-list">
            <span> Tasks</span>
            <ul className="category-list__todo">

                {
                    map(dataList, task => (
                            <List data={task}
                                  key={task.id}
                                  toggleDone={ toggleDone }
                                  saveItem = { saveItem }/>
                        )
                    )
                }

            </ul>
        </div>
    );
};

