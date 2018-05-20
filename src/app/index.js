import React, {Component} from 'react';
import { TaskList } from '../taskList/category';
import { Sidebar } from '../sidebar';
import {ProgressBar} from "../progressBar/propgressBar";


import { sidebarConnector } from '../sidebar/connector';
import { contentConnector } from '../connector/connector'

const MySidebar = sidebarConnector(Sidebar);

const MyProgressBar = contentConnector(ProgressBar);
const MyContentList = contentConnector(TaskList);

class Root extends Component {
    render(){
        return(
            <main className='my-content'>
                <div className='bg'>
                    <div className='main-wrap'>
                        <div className='top-section'>
                            <span>Progress</span>

                            <MyProgressBar/>

                        </div>
                        <div className="main-section">

                            <div className="category-section">
                                <MySidebar/>
                            </div>

                            <MyContentList/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export default Root;