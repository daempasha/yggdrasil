import React, { useState } from 'react';
import './todolist.styles.scss';
import { Button } from 'antd';

function Todo(props) {
    const {index} = props;
    return (
        <div className={`item ${index % 2 === 0 ? 'white' : 'grey'}`}>
            Heello
        </div>
    )
}

function TodoList(props){
    const [todo, setTodo] = useState([])

    const addTodo = () => {
        setTodo([...todo, {
            key: 'test', 
            text: 'test',
            checked: false
        }])
    }
    return (
        <div className='todo'>
            <Button shape="circle" type="primary" onClick={() => addTodo()}>+</Button>

            <div className='notes-container'>
                {todo.map((obj, index) => (<Todo index={index} />))}
            </div>
        </div>
    )
}

export default TodoList;