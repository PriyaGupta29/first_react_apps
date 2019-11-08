import React, { Component } from 'react';
import Operators from './Operators';

class MainOperators extends Component {
    constructor(){
        super();
        this.state = {
            num1 :'',
            num2 :'',
        }
    }
 
    handleChange =(e) =>{        
        this.setState({num1:e.target.value });
    }
    handleChange2 =(e) =>{        
        this.setState({num2:e.target.value });
    }

    render() {
        const {num1, num2} = this.state;
        return (
            <div className="form-container">
                <div className="heading">Calculator</div><br />
                <input type="number" value={num1} className="input-boxes" onChange={this.handleChange}
                    name="num1" placeholder="Enter first number" /><br />
                <input type="number" value={num2} className="input-boxes" onChange={this.handleChange2}
                    name="num2" placeholder="Enter second number" /><br />
                <Operators num1Prop = {num1} num2Prop = {num2}/>
            </div>
        )
    }
}

export default MainOperators;
