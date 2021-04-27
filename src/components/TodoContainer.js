import React from "react";

import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component{
    state= {
        todos:[
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            }, 
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            }, 
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }

        ]
    };
    handleChange = (id) =>{
        this.setState({
            todos: this.state.todos.map((item)=>{
                if(id==item.id){
                    item.completed = !item.completed;
                }
                return item;
            })
        });
    }
    handleInput = (inputValue)=>{
        let todoElement = {
            id: this.state.todos.length+1,
            title: inputValue,
            completed: false
        }
        this.state.todos.push(todoElement);
        let newTodos = this.state.todos;
        this.setState({
            todos: newTodos
        });
    }
    render(){
        return (
            <div>
                <Header />
                <InputTodo handleInput={this.handleInput}/>
                <TodoList todos={this.state.todos} handleChangeProperty={this.handleChange}/>
            </div>
        );
    }
}

export default TodoContainer;