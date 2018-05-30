import { createConnectorForSelector } from '../helpers';
import {createSelector} from "reselect";
import {itemsForSelectedCategory} from "../selectors";

import {
    confirmTaskDeletion,
    rejectTaskDeletion,
    removeTodo} from "../actions";

const contentSelector = createSelector(
    itemsForSelectedCategory,
    (todos) => ({
        todos: todos.items.toJS()
    })
);

export const contentConnector = createConnectorForSelector(contentSelector);

export const confirmModalConnector = createConnectorForSelector(null, {
    onConfirm: () => confirmTaskDeletion(),
    onReject: () => rejectTaskDeletion(),
    removeTodo: removeTodo,
});
