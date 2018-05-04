import React, {Component} from 'react';
// import { CategoryList } from '../category/category';
import { Sidebar } from '../sidebar';

import { sidebarConnector } from '../sidebar/connector';

const MySidebar = sidebarConnector(Sidebar);

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
                                <MySidebar selectCat={ this.selectCat }/>
                            </div>

{/*                            <CategoryList dataList={this.state.list}
                                          toggleDone={ this.toggleDone }
                                          saveItem={ this.saveItem}
                                          selectCatId= { this.state.selectedCat }*/}
                            />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export default Root;