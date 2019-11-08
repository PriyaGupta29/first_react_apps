import React,{Component} from 'react';
import './Addition.css';
import Operators from './TwoWayOperators';

class TwoWay extends Component{
    constructor(){
        super();
        this.state = {
            num1 : '',
            num2 : '',
            showOp: false,
            result: false,
            showBtn: true,
            showSubmit: false,
            operation: ''
        }
    }

    showOptions = () => {
        this.setState({
            showOp: true,
            showBtn: false,
            showSubmit: true
        })
    }

    getOperationSelected = (e) =>{
        this.setState({
            operation: e.target.value
        })
    }

    doCalculation = (e) => {
        const operation = this.state.operation;
        let result = 1;
        const {num1, num2} = this.state;
        switch(operation){
            case 'Addition':
                result = Number(num1) + Number(num2);
                break;
            case 'Subtraction':
                result = Number(num1) - Number(num2);
                break;
            case 'Multiplication':
                result = Number(num1) * Number(num2);
                break;
            case 'Division':
                result = Number(num1) / Number(num2);
                break;
            default: 
                result = 'No option selected';
        }
        this.setState({
            result: result
        })
    }
 
    handleChange =(e) =>{        
        this.setState({num1:e.target.value });
    }
    handleChange2 =(e) =>{        
        this.setState({num2:e.target.value });
    }

    render(){
        const {num1, num2, showOp, showBtn, showSubmit, result} = this.state;
        return (
            <div className="form-container">
                <div className="heading">Calculator</div><br />
                <input type="number" value={num1} className="input-boxes" onChange={this.handleChange}
                    name="num1" placeholder="Enter first number" /><br />
                <input type="number" value={num2} className="input-boxes" onChange={this.handleChange2}
                    name="num2" placeholder="Enter second number" /><br />
                {
                    showOp && <Operators getOperationSelected={this.getOperationSelected}/>
                }
                {
                    showBtn && <button className="button-style" onClick={this.showOptions}>Show Available Operations</button>
                }
                {
                    showSubmit && <button className="button-style" onClick={this.doCalculation}>Calculate</button>
                }
                {
                    result && <input type="text" className="input-boxes" value={result} readOnly/>
                }
            </div>
        )
    }
}

export default TwoWay;