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
                <input className="col-12" id="inputTodo" type="text" placeholder="Enter todo"></input>
                <button className="col-12" onClick={(e)=>this.getValue(e)} type="button">Add</button>
            </div>
        )
    }
}

export default InputTodo;