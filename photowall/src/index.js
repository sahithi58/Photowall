import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['take out','take snow', 'take rain']
// An element can only have one tag, with multiple sub tags in it.
//So to have ol and h1 tag we have to just add a div tag.
const element = 
<div>
    <h1>Hiii</h1>
    <ol>
        {tasks.map((task,index) => <li key ={index}>{task}</li>)}
    </ol>
</div>

ReactDOM.render(element,document.getElementById("root"));
