import { connect } from 'react-redux';
import { selectCategory, addCategory, addCategoryChange } from '../actions';


const mapStateToProps = (state) => {
    return {
        categories: state.categories.list,
    };
};


const mapDispatchToProps = {
    selectCategory
};


export const sidebarConnector = connect(mapStateToProps, mapDispatchToProps);