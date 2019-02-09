import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['take out','take snow', 'take rain']

const element = <ol>
    {/* If array has duplicate entries key as task will fail so we use index */}
    {tasks.map((task,index) => <li key ={index}>{task}</li>)}
    {/* <li>{task[0]}</li> */}
</ol>

ReactDOM.render(element,document.getElementById("root"));
