import * as constants from '../actions/constants';
import { map } from 'lodash'


const initialState = {
    list: {
        1:
            {
                id: 1,
                name: 'React',
                url: "/react",
                parentId: null},
        2:
            {
                id: 2,
                name: 'Introducing JSX',
                url: "/react/introducing-jsx",
                parentId: 1},
        3:
            {
                id: 3,
                name: 'Rendering Elements',
                url: "/react/rendering-elements",
                parentId: 1},
        4:
            {
                id: 4,
                name: 'Components and Props',
                url: "/react/rendering-elements/components-and-props",
                parentId: 3},
        5:
            {
                id: 5,
                name: 'State and Lifecycle',
                url: "/react/rendering-elements/state-and-lifecycle",
                parentId: 3},
        6:
            {
                id: 6,
                name: 'ADVANCED',
                url: "/advanced",
                parentId: null},
        7:
            {
                id: 7,
                name: 'JSX In Depth',
                url: "/advanced/jsx-in-depth",
                parentId: 6},
        8:
            {
                id: 8,
                name: 'Type checking With PropTypes',
                url: "/advanced/type-checking-with-propTypes",
                parentId: 6},
    },
    selectedCategory: 1
};


export const categories = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case constants.CATEGORY_SELECT:
            return Object.assign({}, state, {
                selectedCategory: payload
            });
        case constants.CATEGORY_ADD: {
            const lastId = getNewId(state.list);

            const newItem = {
                id: lastId,
                name: payload,
                parentId: null,
                url: "/react", //todo get url;
            };

            const updatedList = Object.assign({}, state.list, {
                [lastId]: newItem
            });

            return Object.assign({}, state, {
                list: updatedList
            });
        }
        default: {
            return state;
        }
    }
};


function getNewId(list) {
    const ids = map(list, item => item.id);

    return ids[ids.length - 1] + 1;
}