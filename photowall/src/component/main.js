import React, {Component} from 'react';
import Title from './title'
import Photowall from './photowall'

const posts = [{
    id:"0",
    description:'Avengers 1',
    imageLink: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiihpbMma7gAhWxdd8KHdc_DNAQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D48fKIXlxaXk&psig=AOvVaw1k8NppnwJdsNFIdXKIi_3p&ust=1549786173623337"

},
{
    id:"1",
    description:'Avengers Age of ultron',
    imageLink: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjanpXkma7gAhWpmeAKHTb2BcYQjRx6BAgBEAQ&url=https%3A%2F%2Fmovieweb.com%2Favengers-age-ultron-infinity-war-marvel-cinematic-universe-retrospective%2F&psig=AOvVaw0xjN7_XEjLaDvfzpDQGVpU&ust=1549786232743191"

},
{
    id:"2",
    description:'Avengers Infinity War',
    imageLink:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjT84_wma7gAhXBV98KHUzXAJgQjRx6BAgBEAQ&url=https%3A%2F%2Fitunes.apple.com%2Fus%2Fmovie%2Favengers-infinity-war%2Fid1370224078&psig=AOvVaw2T-0ZhftjzR_eQxwJSgoCC&ust=1549786264007326"

}

]

class Main extends Component{
    render(){
        return <div>
                    <Title title={"Photowall"}/>
                    <Photowall posts = {posts}/>
               </div>
    }
}

export default Main