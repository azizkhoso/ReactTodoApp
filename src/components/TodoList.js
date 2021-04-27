import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component{
    handleChangeProperty(){
        //Code here
    }
    render(){
        return (
            <ul>
                {this.props.todos.map(item => 
                    (
                        <TodoItem key={item.id} data={item} handleChangeProperty={this.props.handleChangeProperty}/>
                    )
                )}
            </ul>
        )
    }
}

export default TodoList;