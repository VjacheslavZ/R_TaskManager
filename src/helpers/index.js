import { connect } from 'react-redux';
import Immutable from "immutable";
import { createSelectorCreator, defaultMemoize } from 'reselect';
import {map} from "lodash";

export const createAction = type => (payload) => ({
    type,
    payload
});

export const createImmutableSelector = createSelectorCreator(defaultMemoize, Immutable.is);

export const getNewId = function (list) {
    const ids = map(list, item => item.id);

    return ids[ids.length - 1] + 1;
};