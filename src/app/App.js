import React from "react";

function app() {
    // let title = <h1>hello world</h1>
    let time = new Date().toTimeString().slice(0,9);
    let currentTime = new Date().toLocaleTimeString();
    let timeAll = new Date().toDateString();
    return <div>
        <p>现在时间是{time}</p>
        <p>{currentTime}</p>
        <p>{timeAll}</p>
    </div>
}

export default app