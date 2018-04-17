import React, {Component, PureComponent, Fragment} from 'react';

import { Info } from '../categoryShortInfo/categoryShortInfo'
import { Control } from "../categoryControls/categoryControls";


export class List extends PureComponent{
    constructor(){
        super();
        this.state = {
            editMode: false
        };
        this.toggleMode = this.toggleMode.bind(this);
    }

    toggleMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render(){
        const {editMode} = this.state;
        const {toggleMode} = this;
        console.log(this.props);
        return(
            <li>
                <div className="category-list__info">
                    {

                        editMode
                        ? <EditItem {...this.props}
                                    toggleMode={ toggleMode }/>
                        : <Item {...this.props}
                                toggleMode={ toggleMode }/>
                    }

                </div>

                <div className="category-list__full-desc">
                    <textarea/>
                </div>
            </li>
        )
    }
}

const Item = ({data,toggleDone, toggleMode}) => (

    <Fragment>
        <input type="checkbox"
            defaultChecked={data.isDone}
            onChange={ () => toggleDone(data.id) }
        />

        <div className="category-list__short-info">
            <span className="category-list__task-name">{data.taskName}</span>
            <span className="category-list__task-text">{data.taskText}</span>
        </div>

        <div className="category-list__control">
            <button className="category-list__edit" onClick={ toggleMode }>EDIT</button>
            <button className="category-list__dell">DELL</button>
        </div>
    </Fragment>
);

const EditItem = ({data, saveItem, toggleMode}) => {
    let textField = null;

    // console.log(data, saveItem, toggleMode);

    const onSave = () => {
        const { id } = data;
        const text = textField.value;

        saveItem(id, text);
        toggleMode();
    };

    return(
        <Fragment>
            <input type="text"
                   ref={ input => { textField = input; } }
                   defaultValue={ data.taskText }
            />

            <div className="category-list__control">
                <button className="category-list__edit" onClick={ onSave }>Save </button>
                <button className="category-list__dell" onClick={ toggleMode }> Cansel </button>
            </div>
        </Fragment>
    )
};






//--------------------------------------------
export const ListOld = (props) => {
    const {id, isDone, ...data} = props.data;

    return(
        <li>
            <div className="category-list__info">

                <input type="checkbox" defaultChecked={isDone}/>

                <Info description={data}/>
                <Control id={id}
                />
            </div>

            <div className="category-list__full-desc">
                <textarea/>
            </div>
        </li>
    )
};


