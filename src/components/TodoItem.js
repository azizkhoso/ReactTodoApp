import React from 'react';

function TodoItem(props){
    return <li>
        <input type="checkbox" checked={props.data.isCompleted} onChange={()=>props.handleChangeProperty(props.data.id)}/>
        {props.data.title}
        </li>
    }

export default TodoItem;