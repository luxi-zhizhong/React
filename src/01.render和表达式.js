import React from 'react'
import ReactDOM from 'react-dom'

//定义模板
let components = (
    <div>
        <h1>hello world</h1>
    </div>
)

//渲染对象必须用尖括号包裹 <components/>
ReactDOM.render(<components/>,document.getElementById('root'));
