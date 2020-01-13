import React, { Component } from 'react';

//outside
const number_outside = 1;
const str_outside = "outside";

export default class ExampleRender extends Component {

    render(){
        //inside 
        const number_inside = 2;
        const str_inside = "inside";
        return (
            //Fragment
            <div>
                <div> { number_outside } </div>
                <div> { str_outside } </div>
                <br />
                <div> { number_inside } </div>
                <div> { str_inside } </div>
            </div>
        );
    }
}