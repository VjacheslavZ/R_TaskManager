import React, {Component} from 'react';
import { CategoryList } from '../category/category';
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

const todos = [
    {
        "id":0,
        "category":"/react",
        "taskName":"task 0",
        "taskText":"task text 0",
        "isDone":true
    },
    {
        "id":1,
        "category":"/react/introducing-jsx",
        "taskName":"task 1111",
        "taskText":"task text 1",
        "isDone":false
    },
    {
        "id":2,
        "category":"/react/rendering-elements/components-and-props",
        "taskName":"task 2",
        "taskText":"task text 2",
        "isDone":false
    },
    {
        "id":3,
        "category":"/react/rendering-elements/components-and-props",
        "taskName":"task 3",
        "taskText":"task text 3",
        "isDone":false
    },
    {
        "id":8,
        "category":"/react/rendering-elements/components-and-props",
        "taskName":"task 8",
        "taskText":"task text 3",
        "isDone":false
    }
];


class Root extends Component {
    constructor() {
        super();
        this.state = {
            list: todos,
            categories,
            selectedCat: 1
        };

        this.toggleDone = this.toggleDone.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.selectCat = this.selectCat.bind(this);
    }
    /*componentWillMount(){
        this.getNavMenu();
        this.getListTasks();
    }
    getListTasks(){
        fetch('data-tasks.json')
            .then(resp => resp.json())
            .then(list => {
                this.setState({
                    list
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
    */
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
                                <span>Category: {selectedCatName(this.state)}</span>
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

function selectedCatName(data) {
    const selectedCatId = data.selectedCat,
          selectedCatName = data.categories[selectedCatId].name;

    return `${selectedCatName} id:${selectedCatId}`
}


export default Root;