import React, {PureComponent, Fragment} from 'react';

export class List extends PureComponent {
    constructor() {
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

    render() {
        const {editMode} = this.state;
        const {toggleMode} = this;

        return (
            <li>
                <div className="task-list__info">
                    {
                        editMode
                            ? <EditItem {...this.props}
                                        toggleMode={toggleMode}/>
                            : <Item {...this.props}
                                    toggleMode={toggleMode}/>
                    }
                </div>
            </li>
        )
    }
}

const Item = ({data, toggleDone, toggleMode, removeTodo}) => {
    const deleteTask = () =>{
        const {id} = data;

        removeTodo(id)
    };

    return(
        <Fragment>
            <input type="checkbox"
                   defaultChecked={data.isDone}
                   onChange={() => toggleDone(data.id)}
            />

            <div className="task-list__short-info">
                <span className="task-list__task-name">{data.taskName}</span>
                <span className="task-list__task-text">{data.taskText}</span>
            </div>

            <div className="task-list__control">
                <button className="task-list__edit" onClick={toggleMode}>EDIT</button>
                <button className="task-list__dell" onClick={deleteTask}>DELL</button>
            </div>
        </Fragment>
    )
};

const EditItem = ({data, toggleMode, saveTodo}) => {
    let taskName = null;
    let taskText = null;

    const onSave = () => {
        const {id} = data;
        const newTaskText = taskText.value;
        const newTaskName = taskName.value;

        saveTodo({id, newTaskName, newTaskText});

        toggleMode();
    };

    return (
        <Fragment>
            <input type="text"
                   ref={input => {
                       taskName = input;
                   }}
                   defaultValue={data.taskName}
            />

            <input type="text"
                   ref={input => {
                       taskText = input;
                   }}
                   defaultValue={data.taskText}
            />

            <div className="task-list__control">
                <button className="task-list__edit" onClick={onSave}> Save</button>
                <button className="task-list__dell" onClick={toggleMode}> Cansel</button>
            </div>
        </Fragment>
    )
};

