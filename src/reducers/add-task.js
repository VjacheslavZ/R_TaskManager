import * as constants from '../actions/constants';

const initialState = {
    text: '',
};

export const addNewTask = function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case (constants.TASK_ADD): {
            return Object.assign({}, state, {
                text: payload,
            });
        }

        default: {
            return state;
        }
    }
}