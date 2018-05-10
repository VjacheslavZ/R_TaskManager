import * as constants from '../actions/constants';

const initialState = {
    taskName: '',
    taskText: '',
};

export const addNewTask = function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case constants.TASK_ADD_NAME_CHANGE: {
            return Object.assign({}, state, {
                taskName: payload,
            });
        }

        case constants.TASK_ADD_DESC_CHANGE: {
            return Object.assign({}, state, {
                taskText: payload,
            });
        }

        case constants.TASK_ADD:
            return initialState;

        default: {
            return state;
        }
    }
};