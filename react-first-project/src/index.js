import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'
import TickTack from './component/TickTack'

ReactDOM.render(<App />, document.getElementById('app'))                       // dom에 render학 메인 app component, rendering 할 곳
ReactDOM.render(<TickTack />, document.getElementById('time'))