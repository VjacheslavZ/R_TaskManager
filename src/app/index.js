import React, {Component} from 'react';

import { CategoryList } from '../category/category';
import { CategorySection } from '../categorySection/categorySection';

class Root extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            // navMenu: [],
        };

        this.toggleDone = this.toggleDone.bind(this);
        this.saveItem = this.saveItem.bind(this);
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
                                {
                                    checkState(this.state.navMenu)
                                }
                            </div>

                            <CategoryList dataList={this.state.list}
                                          toggleDone={ this.toggleDone }
                                          saveItem={ this.saveItem }
                            />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

function checkState(state) {
    if(state){
        return(
            <CategorySection items={state}/>
        )
    }
}

export default Root;