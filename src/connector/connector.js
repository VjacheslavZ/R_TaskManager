import { toggleDone, saveTodo, removeTodo } from '../actions'
import { itemsForSelectedCategory } from '../selectors';
import { createConnectorForSelector } from '../helpers';
import { createSelector } from 'reselect';
import { confirmTaskDeletion } from '../actions';
import { showModal } from '../components/modal/modal';


const contentSelector = createSelector(
    itemsForSelectedCategory,
    (todos) => ({
        todos: todos.items.toJS()
    })
);

export const contentConnector = createConnectorForSelector(contentSelector);

export const todoConnector = createConnectorForSelector(null, {
    toggleDone,
    saveTodo: saveTodo,
    removeTodo: removeTodo,
    showModal
});

export const confirmModalConnector = createConnectorForSelector(null, {
    onConfirm: () => confirmTaskDeletion()
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
