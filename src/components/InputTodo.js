//import { Component } from "react";
import React from 'react';

class InputTodo extends React.Component{
    constructor(props){
        super(props);

    }
    getValue = (e) =>{
        let input = e.target.previousElementSibling;
        this.props.handleInput(input.value);
    }
    render(){
        return (
            <div>
                <input id="inputTodo" value={''} type="text" placeholder="Enter todo"></input>
                <button onClick={(e)=>this.getValue(e)} type="button">Add</button>
            </div>
        )
    }
}

export default InputTodo;