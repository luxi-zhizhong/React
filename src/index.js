import React from 'react';
import ReactDOM from 'react-dom';
import './asstes/css/index.css';
import * as serviceWorker from './test/serviceWorker';
import App from './app/App'

//jsx语法导入APP对象边吃</App>，插到root元素里面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
