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
            <div className="w3-row">
                <input className="w3-input w3-border w3-col s8" id="inputTodo" type="text" placeholder="Enter todo"></input>
                <button className="w3-button w3-green w3-col s4" onClick={(e)=>this.getValue(e)} type="button">Add</button>
            </div>
        )
    }
}

export default InputTodo;