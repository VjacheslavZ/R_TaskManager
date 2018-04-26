import React, {Component} from 'react';

import { CategoryList } from '../category/category';
import { CategorySection } from '../categorySection/categorySection';

import { Sidebar } from '../sidebar/sideBar';

const categories = {
    1:
        {
            id: 1,
            name: 'React',
            url: "/react",
            parentId: null},
    2:
        {
            id: 2,
            name: 'Introducing JSX',
            url: "/react/introducing-jsx",
            parentId: 1},
    3:
        {
            id: 3,
            name: 'Rendering Elements',
            url: "/react/rendering-elements",
            parentId: 1},
    4:
        {
            id: 4,
            name: 'Components and Props',
            url: "/react/rendering-elements/components-and-props",
            parentId: 3},
    5:
        {
            id: 5,
            name: 'State and Lifecycle',
            url: "/react/rendering-elements/state-and-lifecycle",
            parentId: 3},

    6:
        {
            id: 6,
            name: 'ADVANCED',
            url: "/advanced",
            parentId: null},
    7:
        {
            id: 7,
            name: 'JSX In Depth',
            url: "/advanced/jsx-in-depth",
            parentId: 6},
    8:
        {
            id: 8,
            name: 'Type checking With PropTypes',
            url: "/advanced/type-checking-with-propTypes",
            parentId: 6},
};


const todos = {
    1: {
        id: 1,
        text: 'Выучить реакт',
        done: true,
        categoryId: 1},
    2: {id: 2,
        text: 'Выучить реакт-роутер',
        done: false,
        categoryId: 2},
    3: {id: 3,
        text: 'Выучить редакс',
        done: false,
        categoryId: 3},
    4: {id: 4,
        text: 'task 1',
        done: true,
        categoryId: 1},
    5: {id: 5,
        text: 'task 2',
        done: false,
        categoryId: 2},
    6: {id: 6,
        text: 'task 3',
        done: false,
        categoryId: 3},
};



class Root extends Component {


    constructor() {
        super();
        this.state = {
            list: [],
            // navMenu: [],
            todos,
            categories,
            selectedCat: 1
        };

        this.toggleDone = this.toggleDone.bind(this);
        this.saveItem = this.saveItem.bind(this);

        this.selectCat = this.selectCat.bind(this);
    }

    componentWillMount(){
        this.getNavMenu();
        this.getListTasks();
    }

    getListTasks(){
        fetch('data-tasks.json')
            .then(resp => resp.json())
            .then(list => {
                this.setState({
                    list,
                })
            })
    }

    getNavMenu(){
        fetch('data-categories.json')
            .then(resp => resp.json())
            .then(navMenu => {
                this.setState({
                    navMenu,
                })
            });
    }

    toggleDone(id) {
        const updatedItem = Object.assign(
            {}, this.state.list[id], {done: !this.state.list[id].done}
        );

        this.setState({
            list: Object.assign({}, this.state.list, { [id]: updatedItem })
        });
    }

    saveItem(id, taskText, taskName){
        const updatedItem = Object.assign(
            {}, this.state.list[id], { taskText, taskName }
        );

        this.setState({
            list: Object.assign(
                {}, this.state.list, { [id]: updatedItem
            })
        });
    }

    selectCat(id) {
        this.setState({
            selectedCat: id
        });
    }

    render(){
        return(

            <main className='my-content'>
                <div className='bg'>
                    <div className='main-wrap'>
                        <div className='top-section'>
                            <span>Progress</span>
                            <div className="myProgress">
                                <div className="myBar">
                                </div>
                            </div>
                        </div>
                        <div className="main-section">

                            <div className="category-section">
                                <span>Category</span>
                                {/*{*/}
                                    {/*checkState(this.state.navMenu)*/}
                                {/*}*/}

                                { this.state.selectedCat }

                                <Sidebar categories={ this.state.categories }
                                         selectCat={ this.selectCat }
                                />


                            </div>

                            <CategoryList dataList={this.state.list}
                                          toggleDone={ this.toggleDone }
                                          saveItem={ this.saveItem}
                                          selectCatId= { this.state.selectedCat }
                            />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

// function checkState(state) {
//     if(state){
//         return(
//             <CategorySection items={state}/>
//         )
//     }
// }

export default Root;