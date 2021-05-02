import React from 'react';

function TodoItem(props){
    return <li className="w3-cell-row">
        <input type="checkbox" className="w3-input w3-check w3-text w3-border w3-cell" checked={props.data.isCompleted} onChange={()=>props.handleChangeProperty(props.data.id)}/>
        {props.data.title}
        <button type="button" className="w3-button w3-red w3-hover-black w3-cell" onClick={()=>props.remove(props.data.id)}> X </button>
        </li>
    }

export default TodoItem;