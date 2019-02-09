import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['take out','take snow', 'take rain']

const element = React.createElement('ol',null,tasks.map(
    (task,index)=>
    // Key should be unique.
    React.createElement('li',{key: index},task)
    ))

// const element = React.createElement('ol',null,
// React.createElement('li',null,"take out"),
// React.createElement('li',null,"take snow"),
// React.createElement('li',null,"take rain")
// )

ReactDOM.render(element,document.getElementById("root"));
