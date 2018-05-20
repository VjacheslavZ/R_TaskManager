import * as constants from '../actions/constants';
import { getNewId } from "../helpers";
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
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
});

export const categories = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case constants.CATEGORY_SELECT:
            return state.set('selectedCategory', payload);
        case constants.CATEGORY_ADD: {
            const id = getNewId(state.get('list').toJS());

            return state.update(
                'list',
                value => {
                    const newCategory = Immutable.Map({
                        id,
                        name: payload,
                        parentId: null,
                        url: payload,
                    });

                    return value.set(id.toString(), newCategory)
                }
            );

        }
        default: {
            return state;
        }
    }
};
