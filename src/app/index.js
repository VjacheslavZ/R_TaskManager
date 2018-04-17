import React, {Component} from 'react';
import { CategoryList } from '../category/category';

class Root extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        };

        this.toggleDone = this.toggleDone.bind(this);
        this.saveItem = this.saveItem.bind(this);

    }

    componentWillMount(){
        this.getListTasks()
    }

    getListTasks(){
        fetch('data-home.json')
            .then(resp => resp.json())
            .then(list => {
                this.setState({
                    list
                })
            })
    }

    toggleDone(id) {
        const updatedItem = Object.assign(
            {}, this.state.list[id], {done: !this.state.list[id].done}
        );

        this.setState({
            list: Object.assign({}, this.state.list, { [id]: updatedItem })
        });
    }

    saveItem(id, taskText){
        const updatedItem = Object.assign(
            {}, this.state.list[id], { taskText }
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
                                <ul className="category-section__menu">
                                    <li><a href="#">Home</a>
                                        <ul>
                                            <li><a href="#">Home 1.1</a></li>
                                            <li><a href="#">Home 1.2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">About</a>
                                        <ul>
                                            <li><a href="#">About 1.1</a></li>
                                            <li><a href="#">About 1.2</a></li>
                                        </ul>
                                    </li>
                                </ul>
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
export default Root;