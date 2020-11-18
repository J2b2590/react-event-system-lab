// Code Keypad Component Here
import React, { Component } from 'react';

class keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    handleKeyup = (e) =>{
        console.log("Entering password...")
    }

    render() { 
        return ( 
            <div>
                <input type="password" onKeyUp={this.handleKeyup}></input>
            </div>
         );
    }
}
 
export default keypad;