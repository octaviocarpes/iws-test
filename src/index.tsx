import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/fonts/Montserrat-Black.ttf';
import './styles/fonts/Montserrat-Regular.ttf';
import './styles/fonts/Montserrat-Medium.ttf';
import './styles/fonts/Montserrat-Bold.ttf';
import './styles/fonts/Montserrat-ExtraBold.ttf';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
