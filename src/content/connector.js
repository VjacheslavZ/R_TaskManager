import { connect } from 'react-redux'
import { toggleDone, saveTodo } from '../actions'

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        dataList: state.todos.items,
        selectCatId: state.categories.selectedCategory
    };
};

const mapDispatchToProps = {
    toggleDone,
    saveTodo
};

export const contentConnector = connect(mapStateToProps, mapDispatchToProps);