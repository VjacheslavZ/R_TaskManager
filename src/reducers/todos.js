import * as constants from '../actions/constants';


const initialState = {
/*    items: {
        1: {id: 1, text: 'Выучить реакт', done: true, categoryId: 1},
        2: {id: 2, text: 'Выучить реакт-роутер', done: false, categoryId: 2},
        3: {id: 3, text: 'Выучить редакс', done: false, categoryId: 3},
        4: {id: 4, text: 'task 1', done: true, categoryId: 1},
        5: {id: 5, text: 'task 2', done: false, categoryId: 2},
        6: {id: 6, text: 'task 3', done: false, categoryId: 3},
    }*/

    items: [
        {
            "id":0,
            "category":"/react",
            "taskName":"task 0",
            "taskText":"task text 0",
            "isDone":true
        },
        {
            "id":1,
            "category":"/react/introducing-jsx",
            "taskName":"task 1111",
            "taskText":"task text 1",
            "isDone":false
        },
        {
            "id":2,
            "category":"/react/rendering-elements/components-and-props",
            "taskName":"task 2",
            "taskText":"task text 2",
            "isDone":false
        },
        {
            "id":3,
            "category":"/react/rendering-elements/components-and-props",
            "taskName":"task 3",
            "taskText":"task text 3",
            "isDone":false
        },
        {
            "id":8,
            "category":"/react/rendering-elements/components-and-props",
            "taskName":"task 8",
            "taskText":"task text 3",
            "isDone":false
        }
    ]
};


export const todos = function (state = initialState, action) {
    const { type, payload } = action;

    return state;
};

const getUpdatedListItem = (list, id, updatedItem) => Object.assign({}, list[id], updatedItem);