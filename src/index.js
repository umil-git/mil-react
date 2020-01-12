import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


//import RenderEx from './test/RenderEx';
import PropsTest from './test/PropsTest';
import CountTest from './test/CountTest'

import * as serviceWorker from './serviceWorker';
//ReactDOM.render(<App />, document.getElementById('root'));


//ReactDOM.render(<RenderEx />, document.getElementById('RenderEx'));
ReactDOM.render(<PropsTest what="what???!"/>, document.getElementById("PropsTest"));
ReactDOM.render(<CountTest />, document.getElementById("CountTest"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
