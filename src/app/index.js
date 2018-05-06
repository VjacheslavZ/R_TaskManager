import React, {Component} from 'react';
import { ContentList } from '../category/category';
import { Sidebar } from '../sidebar';

import { sidebarConnector } from '../sidebar/connector';
import { contentConnector } from '../content/connector'

const MySidebar = sidebarConnector(Sidebar);
const MyContentList = contentConnector(ContentList);

class Root extends Component {
    constructor() {
        super();
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