import React from 'react';

function TodoItem(props){
    return <li>
        <input type="checkbox" checked={props.data.isCompleted} onChange={()=>props.handleChangeProperty(props.data.id)}/>
        {props.data.title}
        <button type="button" onClick={()=>props.remove(props.data.id)}> X </button>
        </li>
    }

export default TodoItem;