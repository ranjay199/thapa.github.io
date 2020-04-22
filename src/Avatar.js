import React, {Component} from 'react';
import './Avatar.css';

import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component {
    constructor(){
        super();
        this.state = {
            name: "Welcome to Avatar World thapa"
        }

    }

    namechange(){
        this.setState({
            name: "Subscribe to Thapa Technical channel"
        })
    }
    render(){

    const avatarlistarray = [
        {
            id:1,
            name:"vinod",
            work:"web developer"
        },
        {
            id:2,
            name:"Thapa",
            work:"FrontEnd developer"
        },
        {
            id:3,
            name:"Bahadur",
            work:"Database"
        },
        {
            id:4,
            name:"Naran",
            work:"BackEnd"
        }
    ]

    const arrayavatarcard = avatarlistarray.map( (avatarcard, i) =>
    {
        return (
        <Avatarlist key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
        )}
    )



    return ( 
        <div className="mainpage">
            <h1>{this.state.name}</h1>
        {arrayavatarcard}
 
    <button onClick= { () => this.namechange() }>Subscribe</button>
    </div>
    
    );
}

}

export default Avatar;