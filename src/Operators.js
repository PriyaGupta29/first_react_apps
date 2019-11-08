import React, {Component} from 'react';
import './Addition.css';

class Operators extends Component{
    constructor(props){
        super(props);
        this.state = {
            calculationResult: ''
        }
    }

    calculate = (event) => {
        let result = 0;
        const {num1Prop, num2Prop} = this.props;
        const operation = this.refs.performOperation.value;

        switch(operation){
            case 'Addition':
                result = Number(num1Prop) + Number(num2Prop);
                break;
            case 'Subtraction':
                result = Number(num1Prop) - Number(num2Prop);
                break;
            case 'Multiplication':
                result = Number(num1Prop) * Number(num2Prop);
                break;
            case 'Division':
                result = Number(num1Prop) / Number(num2Prop);
                break;
            default: 
                result = 'No option selected';
        }
        
        this.setState({
            calculationResult: result
        })
    }

    render(){
        const {calculationResult} = this.state;
        return(
            <div>
                <select ref="performOperation" className="select-style">
                    <option value="not-selected" disabled defaultValue>Please select...</option>
                    <option value="Addition">Addition</option>
                    <option value="Subtraction">Subtraction</option>
                    <option value="Multiplication">Multiplication</option>
                    <option value="Division">Division</option>
                </select><br/>
                <button className="button-style" onClick={this.calculate}>Calculate</button><br/>
                <input type="text" className="input-boxes" name="calculationResult" readOnly placeholder="Result" value={calculationResult}/>
            </div>
        )
    }
}

export default Operators;
