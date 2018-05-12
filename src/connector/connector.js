import { connect } from 'react-redux'
import { toggleDone, saveTodo, removeTodo } from '../actions'


export const mapStateToProps = (state) => {
    return {
        dataList: state.todos.items,
        selectCatId: state.categories.selectedCategory
    };
};

/*ACTIONS*/
const mapDispatchToProps = {
    toggleDone,
    saveTodo,
    removeTodo
};


export const contentConnector = connect(mapStateToProps, mapDispatchToProps);