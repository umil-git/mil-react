import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


import ExampleRender from './test/ExampleRender';
import ExampleProps from './test/ExampleProps';
import ExampleState from './test/ExampleState'
import ExampleState2 from './test/ExampleState2';

import * as serviceWorker from './serviceWorker';
//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<ExampleRender />, document.getElementById('ExampleRender'));
ReactDOM.render(<ExampleProps what="what???!"/>, document.getElementById("ExampleProps"));
ReactDOM.render(<ExampleState />, document.getElementById("ExampleState"));
ReactDOM.render(<ExampleState2 />, document.getElementById("ExampleState2"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
