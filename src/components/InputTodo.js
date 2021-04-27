//import { Component } from "react";
import React from 'react';

class InputTodo extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <input type="text" placeholder="Enter todo"></input>
                <button type="button">Add</button>
            </div>
        )
    }
}

export default InputTodo;