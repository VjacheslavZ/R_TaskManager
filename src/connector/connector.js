import { itemsForSelectedCategory } from '../selectors';
import { createConnectorForSelector } from '../helpers';
import { createSelector } from 'reselect';

import { toggleDone,
         saveTodo,
         removeTodo,
         showModal,
         confirmTaskDeletion,
         rejectTaskDeletion } from '../actions'

export const todoConnector = createConnectorForSelector(null, {
    toggleDone,
    saveTodo: saveTodo,
    showModal: showModal
});

export const confirmModalConnector = createConnectorForSelector(null, {
    onConfirm: () => confirmTaskDeletion(),
    onReject: () => rejectTaskDeletion(),
    removeTodo: removeTodo,
});



























/*const contentSelector = createSelector(
    itemsForSelectedCategory,
    (todos) => ({
        todos: todos.toJS()
    })
);*/

/*
/!*props to wrapped component*!/
export const mapStateToProps = (state) => {
    return {
        dataList: state.todos.items,
        selectCatId: state.categories.selectedCategory
    };
};

/!*ACTIONS*!/
const mapDispatchToProps = {
    toggleDone,
    saveTodo,
    removeTodo
};

export const contentConnector = connect(mapStateToProps, mapDispatchToProps);*/
