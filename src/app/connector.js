import { createConnectorForSelector } from '../helpers';
import {createSelector} from "reselect";
import {itemsForSelectedCategory} from "../selectors";

const contentSelector = createSelector(
    itemsForSelectedCategory,
    (todos) => ({
        todos: todos.items.toJS()
    })
);

export const contentConnector = createConnectorForSelector(contentSelector);
