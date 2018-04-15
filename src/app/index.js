import React, {Component} from 'react';
import { CategoryList } from '../category';

class Root extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };

        // this.onEditTask = this.onEditTask.bind(this);
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
    onEditTask(id){
        console.log(`${id} edit`);
    }
    onDellTask(id){
        console.log(`${id} dell`);
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
                                          onEditTask={this.onEditTask}
                                          onDellTask={this.onDellTask}
                            />

                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default Root;