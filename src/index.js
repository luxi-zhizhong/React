import React from 'react';
import ReactDOM from 'react-dom';
import './asstes/css/index.css';
import * as serviceWorker from './test/serviceWorker';
import App from './app/App'

//传递的值都在保存props对象里面
let name = 'Recat';
let com = (
    <div>
        <h1>我成年了</h1>
    </div>
);

//表达式
//可以直接插入标签
    let is = true;

    //添加类名用className，因为class是关键字
    let red = 'red';
    let Dome = (
        <div>
            {/*//可以用标签，或者模板来嵌套*/}
            <h1 className={red}>{is ? com : <button>未成年</button>}</h1>
        </div>
    );


//jsx语法=>:导入APP对象要用尖括号</App>，插到root元素里面
ReactDOM.render(//接收两个参数，模板和要插入元素的elementID
  Dome,
  document.getElementById('root')
);


serviceWorker.unregister();
