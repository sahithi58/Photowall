import React, {Component} from 'react';
import Title from './title'
import Photowall from './photowall'

const posts = [{
    id:"0",
    description:'Avengers 1',
    imageLink:"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/ironman-spiderman-homecoming-poster-frontpage.jpg"
},
{
    id:"1",
    description:'Avengers Age of ultron',
    imageLink: "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"
},
{
    id:"2",
    description:'Avengers Infinity War',
    imageLink:"https://images-na.ssl-images-amazon.com/images/I/A1aHRPvn5JL._RI_SX300_.jpg"

}

]

class Main extends Component{
    constructor(){
        super()
        this.state ={
            posts: [{
                id:"0",
                description:'Avengers 1',
                imageLink:"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/ironman-spiderman-homecoming-poster-frontpage.jpg"
            },
            {
                id:"1",
                description:'Avengers Age of ultron',
                imageLink: "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"
            },
            {
                id:"2",
                description:'Avengers Infinity War',
                imageLink:"https://images-na.ssl-images-amazon.com/images/I/A1aHRPvn5JL._RI_SX300_.jpg"
            
            }]
            
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postsRemoved){
            console.log(postsRemoved.description);
            this.setState((state)=>({
                posts: state.posts.filter(post => post !== postsRemoved)
            }))
    }
    
    render(){
        return <div>
                    <Title title={"Photowall"}/>
                    <Photowall posts = {this.state.posts} onRemovePhoto ={this.removePhoto}/>
               </div>
    }
}

export default Main