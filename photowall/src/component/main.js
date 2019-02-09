import React, {Component} from 'react';
import List from './list'
import Title from './title'

class Main extends Component{
    render(){
        return <div>
                    <Title title={"Hello User"}/>
                    <List tasks = {['take out', 'take rain']}/>
                    <List tasks = {['drive away', 'do laundry']}/>
               </div>
    }
}

export default Main