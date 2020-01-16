import React, { Component } from 'react';

export default class ExampleState2 extends Component{

    //2
    constructor(props){
        super(props);
        this.state = {
            number : 1,
            foo: {
                foobar : "hello",
                foobar2 : 4
            }
        }
        /*
        this.setNumber = this.setNumber.bind(this);
        this.setFoobar = this.setFoobar.bind(this);
        */
    }

    //1
    state = {
        number: 0,
        foo: 'bar'
    }

    //immutable.js OR immer.js

    setNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    setFoobar = () => {
        this.setState({
            foo: {
                ...this.state.foo,
                foobar : "hello!"
            }
        });
    }

    setFoobar2 = () => {
        this.setState( 
            (state) => ({
                foo: {
                    ...state.foo,
                    foobar2 : state.foo.foobar2 + 1
                }
            })
        );
    }

    

    /*
    setNumber(){
        this.setState({
            number: this.state.number + 1
        });
    }

    
    setFoobar(){
        this.setState({
            ...this.state.number,
            foo: {
                ...this.state.foo,
                foobar : "hello!"
            }
        });
    }
    */

    render(){
        return(
            <div>
                <div> { this.state.number } </div>
                <div> { this.state.foo.foobar } </div>
                <div> { this.state.foo.foobar2 } </div>
                <button onClick={this.setNumber} >Number</button>
                <button onClick={this.setFoobar} >Foobar</button>
                <button onClick={this.setFoobar2} >Foobar2</button>
            </div>
        );
    }
}