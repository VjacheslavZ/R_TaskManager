import Immutable from 'immutable';
import { createAction, createImmutableSelector } from '../../helpers';
import { TASK_DELETE_CONFIRM, TASK_DELETE_REJECT, TODO_REMOVE } from '../../actions/constants';
import { MODAL_SHOW } from "../../actions/constants";
/*constants*/
const MODAL_HIDE = 'app/modals/MODAL_HIDE';

const initialState = Immutable.fromJS({
    show: false,
    title: '',
    id: ''
});

/*reducer*/
export default function reducer(state = initialState, action) {
    const actions = {
        [MODAL_SHOW]: () => {
            const {taskName, id} = action.payload;
            return state.set('show', true)
                        .set('title', taskName)
                        .set('id', parseInt(id));
        },
        [MODAL_HIDE]: () => {
            return state.set('show', false);
        },
        [TASK_DELETE_CONFIRM]: () => {
            return state.set('show', false)
        },
        [TASK_DELETE_REJECT]: () => {
            return state.set('show', false)
        },
        [TODO_REMOVE]: () => {
            return state.set('show', false)
        }
    };
    return action.type in actions ? actions[action.type]() : state;
}

/*actions*/
export const hideModal = createAction(MODAL_HIDE);

/*selectors*/
const data = state => state.modal;
export const isVisible = createImmutableSelector(
    data,
    data => data.get('show')
);
export const title = createImmutableSelector(
    data,
    data => data.get('title')
);
export const id = createImmutableSelector(
    data,
    data => data.get('id')
);

