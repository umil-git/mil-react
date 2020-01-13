import React, { Component } from 'react';

export default class ExampleProps extends Component {
    
    render(){
        return(
            <div>
                Props 1 : <b> {this.props.what} </b><br />
                Props 2 : <b> {this.props.what_2} </b>
            </div>
        );
    }
}

ExampleProps.defaultProps = {
    what_2: 'no'
}
