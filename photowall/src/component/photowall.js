import React from 'react';
import Photo from './photo';

function Photowall(props){
    return <div className = "photo-grid">
    {props.posts.map(
        (post,index) =>
           <Photo key={index} post = {post} onRemovePhoto={props.onRemovePhoto}/> 
        )}
    </div> 
}



export default Photowall