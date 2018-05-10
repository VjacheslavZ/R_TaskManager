import {map} from "lodash";

export const createAction = type => (payload) => ({
    type,
    payload
});

export const getNewId = function (list) {
    const ids = map(list, item => item.id)

    return ids[ids.length - 1] + 1;
}