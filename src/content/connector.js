import { connect } from 'react-redux'
import { toggleDone } from '../actions'

export const mapStateToProps = (state) => {
    return{
        dataList: state.todos.items,
        selectCatId: state.selectedCat
    };
};

const mapDispatchToProps = {
    toggleDone
};

export const contentConnector = connect(mapStateToProps, mapDispatchToProps);