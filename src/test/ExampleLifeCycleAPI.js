import React, { Component } from 'react';

export default class ExampleLifeCycleAPI extends Component {
    state = {
        number : 0
    }

    constructor(props) {
        super(props);
        console.log("--LifeCycle--");
    }

    /*  componentWillMount deprecated  */

    componentDidMount(){
        console.log('componentDidMount');
    }

    /* componentWillReceiveProps deprecated */
    static getDrivedStateFromProps(nextProps, prevState){
        /* 
        if(nextProps.value !== prevState.value){
            return { value: nextProps.value };
        }
        */
    }

    /* Virtual DOM render */
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) {
            return false;
        }
        return true;
    }
    /*   componentWillUpdate deprecated   */
    getSnapshotBeforeUpdate(prevProps, prevState){

    }
    render(){
        return("...");
    }

}






