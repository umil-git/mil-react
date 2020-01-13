import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


import ExampleRender from './test/RenderEx';
import ExampleProps from './test/ExampleProps';
import ExampleCount from './test/ExampleCount'

import * as serviceWorker from './serviceWorker';
//ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<ExampleRender />, document.getElementById('ExampleRender'));
ReactDOM.render(<ExampleProps what="what???!"/>, document.getElementById("ExampleProps"));
ReactDOM.render(<ExampleCount />, document.getElementById("ExampleCount"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
