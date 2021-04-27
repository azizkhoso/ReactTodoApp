import React from 'react';

function TodoItem(props){
    return <div>
        <input type="checkbox" width="90%" checked={props.data.isCompleted} onChange={()=>props.handleChangeProperty(props.data.id)}/>
        {props.data.title}
        <button type="button" className="btn-xs" width="10%" onClick={()=>props.remove(props.data.id)}> X </button>
        </div>
    }

export default TodoItem;