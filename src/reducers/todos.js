import * as constants from '../actions/constants';


const initialState = {
    items: {
        0: {
            "id": 0,
            "category": "/react",
            "taskName": "task 0",
            "taskText": "task text 0",
            "isDone": true
        },
        1: {
            "id": 1,
            "category": "/react/introducing-jsx",
            "taskName": "task 1111",
            "taskText": "task text 1",
            "isDone": false
        },
        2: {
            "id": 2,
            "category": "/react/rendering-elements/components-and-props",
            "taskName": "task 2",
            "taskText": "task text 2",
            "isDone": false
        },
        3: {
            "id": 3,
            "category": "/react/rendering-elements/components-and-props",
            "taskName": "task 3",
            "taskText": "task text 3",
            "isDone": false
        },
        8: {
            "id": 8,
            "category": "/react/rendering-elements/components-and-props",
            "taskName": "task 8",
            "taskText": "task text 3",
            "isDone": false
        }
    }
};


export const todos = function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case constants.TODO_DONE_TOGGLE: {
            const id = payload;

            const modifiedItem = getUpdatedListItem(state.items, id, {
                isDone: !state.items[id].isDone
            });

            const modifiedItemList = Object.assign({}, state.items, {[id]: modifiedItem});

            return Object.assign({}, state, {items: modifiedItemList});
        }
        case constants.TODO_SAVE: {
            const {id, newTaskText, newTaskName} = payload;

            const modifiedItem = getUpdatedListItem(state.items, id, {
                taskName: newTaskName,
                taskText: newTaskText
            });

            const modifiedItemList = Object.assign({}, state.items, {
                [id]: modifiedItem
            });

            return Object.assign({}, state, {
                items: modifiedItemList
            });
        }
        case constants.TODO_REMOVE: {
            const id = payload;
            const modifiedItem = state.items;

            delete modifiedItem[id];

            const modifiedItemList = Object.assign({}, state.items, {
                [id]: modifiedItem
            });

            return Object.assign({}, state, {
                items: modifiedItemList
            })
        }
    }

    return state;
};

const getUpdatedListItem = (list, id, updatedItem) => Object.assign({}, list[id], updatedItem);