import Immutable from 'immutable';
import * as constants from '../actions/constants';
import { getNewId } from "../helpers";

const initialState = Immutable.fromJS({
    items: {
        1: {
            "id": 1,
            "category": "/react",
            "taskName": "task 0",
            "taskText": "task text 0",
            "isDone": true
        },
        2: {
            "id": 2,
            "category": "/react/introducing-jsx",
            "taskName": "task 1111",
            "taskText": "task text 1",
            "isDone": false
        },
        3: {
            "id": 3,
            "category": "/react/rendering-elements/components-and-props",
            "taskName": "task 2",
            "taskText": "task text 2",
            "isDone": false
        },
        4: {
            "id": 4,
            "category": "/react/rendering-elements/components-and-props",
            "taskName": "task 3",
            "taskText": "task text 3",
            "isDone": true
        },
        8: {
            "id": 8,
            "category": "/react/rendering-elements/components-and-props",
            "taskName": "task 8",
            "taskText": "task text 3",
            "isDone": false
        }
    },
    itemIdInModal: ''
});

export const todos = function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case constants.MODAL_SHOW: {
            const {id} = action.payload;
            return state.set('itemIdInModal', id)
        }
        case constants.TODO_DONE_TOGGLE: {
            return state.updateIn(
                ['items', `${payload}`, 'isDone'],
                (done) => !done
            )
        }
        case constants.TODO_SAVE: {
            const {id, newTaskText, newTaskName} = payload;

            return state.updateIn(['items', `${id}`, 'taskName'], () => newTaskName)
                        .updateIn(['items', `${id}`, 'taskText'], () => newTaskText)

        }
        case constants.TODO_REMOVE: {
            const id = state.get('itemIdInModal').toString();
            const newStateDel = state.deleteIn(["items",  id]);

            return newStateDel
        }

        case constants.TASK_ADD: {
            const {taskName, taskText, url} = payload;
            const lastId = getNewId(state.get('items').toJS());

            const newTask = Immutable.Map({
                id: lastId,
                taskName: taskName,
                taskText: taskText,
                category: url,
            });

            return state.update(
                'items',
                value => value.set(lastId.toString(), newTask)
            )
        }
        
        default: {
            return state;
        }
    }
};

