import React from 'react';
import ModalComponent from './index';
import { Button } from 'react-bootstrap';

const Buttons = ({ onConfirm, onReject, id, removeTodo }) => {
    const confDeleteTask = () => {
        removeTodo(id)
    };
    return(
        <div className="text-center">
            <Button bsStyle="danger" /*onClick={ onConfirm }*/ onClick={confDeleteTask}>OK</Button>
            <Button onClick={ onReject }>Cancel</Button>
        </div>
    )
};

export const Confirm = ({ show, hideModal, onConfirm, onReject, removeTodo, id }) => {
    return (
        <ModalComponent buttons={
            <Buttons onConfirm={ onConfirm }
                     onReject={ onReject }
                     removeTodo={ removeTodo }
                     id={id}/>
        }>
            <p>Are U sure you want to delete this task?</p>
        </ModalComponent>
    );
};

export default Confirm;



