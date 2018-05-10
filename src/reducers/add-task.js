import * as constants from '../actions/constants';

const initialState = {
    taskName: '',
    taskDesc: '',
};

export const addNewTask = function (state = initialState, action) {
    const {type, payload} = action;
    console.log(action)
    switch (type) {
        case constants.TASK_ADD_NAME_CHANGE: {
            return Object.assign({}, state, {
                taskName: payload,
            });
        }

        case constants.TASK_ADD_DESC_CHANGE: {
            return Object.assign({}, state, {
                taskDesc: payload,
            });
        }

        case constants.TASK_ADD:
            // return initialState;
        default: {
            return state;
        }
    }
};