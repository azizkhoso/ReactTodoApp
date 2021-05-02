import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component{
    handleChangeProperty(){
        //Code here
    }
    render(){
        return (
            <ul className="w3-ul w3-border w3-hoverable">
                {this.props.todos.map(item => 
                    (
                        <TodoItem key={item.id} data={item} handleChangeProperty={this.props.handleChangeProperty} remove={this.props.remove}/>
                    )
                )}
            </ul>
        )
    }
}

export default TodoList;