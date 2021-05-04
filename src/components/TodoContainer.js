import React from "react";

import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  state = {
    todos: [
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
  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (id == item.id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  };
  handleInput = (inputValue) => {
    let { todos } = this.state;
    let todoElement = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      title: inputValue,
      completed: false
    };
    this.state.todos.push(todoElement);
    let newTodos = this.state.todos;
    this.setState({
      todos: newTodos
    });
  };
  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id)
    });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          todos: json.slice(0, 9)
        });
      });
  }
  render() {
    return (
      <div className="w3-container">
        <Header />
        <InputTodo handleInput={this.handleInput} />
        <TodoList
          todos={this.state.todos}
          handleChangeProperty={this.handleChange}
          remove={this.remove}
        />
      </div>
    );
  }
}

export default TodoContainer;
