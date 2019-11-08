import React,{Component} from 'react';
import SumComponent from './SumComponent';
import './Addition.css';

class InputFields extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1 :'',
            num2 :'',
        }
        //this.calculateSum = this.calculateSum.bind(this);
    }
 
    handleChange =(e) =>{        
        this.setState({num1:e.target.value });
    }
    handleChange2 =(e) =>{        
        this.setState({num2:e.target.value });
    }

    render(){
        const {num1,num2 } = this.state;
        const sum = Number(num1) + Number(num2);
        return (
            <div>
                <div className="form-container">
                    <div className="heading">Addition</div><br/>
                    <input type="number" value={num1} className="input-boxes" onChange={this.handleChange}
                    name="num1" placeholder="Enter first number"/><br/>
                    <input type="number" value={num2} className="input-boxes" onChange={this.handleChange2}
                    name="num2" placeholder="Enter second number"/><br/>
                    <br/><div>Sum is: </div>
                    <SumComponent sum={sum}/>
                </div>
            </div>
        )
    }
}

export default InputFields;