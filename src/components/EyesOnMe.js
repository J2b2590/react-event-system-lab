// Code EyesOnMe Component Here
import React, { Component } from 'react';

class eyesOnMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    focusHandler = (e) => {
        console.log("Good!")
    }

    blurHandler = () => {
        console.log("Hey! Eyes on me!")
    }


    render() { 
        return ( 
            <div>
                <button onFocus={this.focusHandler} onBlur={this.blurHandler}></button>
            </div>
         );
    }
}
 
export default eyesOnMe;