import React, { Component } from 'react';

export default class ExampleForm extends Component {
    state = {
        str : ' ',
        num : ' '
    }
    /*
        event.target 
        event.currentTarget
    */
    handleChange = (e) => {
        this.setState({
            [e.target.str]: e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        // it prevents page reloading
        // e.preventDefault();
        console.log(e.target.name);
        console.log("************");
        console.log(this.state.str);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    type="text"
                    placeholder="number"
                    value={this.state.num}
                    onChange={this.handleChange}
                    name="num"
                />
                <button type="submit">submit</button>
            </form>
        );
    }
}