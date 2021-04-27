import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component{
    handleChangeProperty(){
        //Code here
    }
    render(){
        return (
            <div className="col-12">
                {this.props.todos.map(item => 
                    (
                        <TodoItem key={item.id} data={item} handleChangeProperty={this.props.handleChangeProperty} remove={this.props.remove}/>
                    )
                )}
            </div>
        )
    }
}

export default TodoList;