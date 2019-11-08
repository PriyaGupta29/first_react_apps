import React, {Component} from 'react';
import './Addition.css';

class Operators extends Component{
    render(){
        return(
            <div>
                <select className="select-style" defaultValue="not-selected" onChange={this.props.getOperationSelected}>
                    <option value="not-selected" disabled>Please select...</option>
                    <option value="Addition">Addition</option>
                    <option value="Subtraction">Subtraction</option>
                    <option value="Multiplication">Multiplication</option>
                    <option value="Division">Division</option>
                </select>
            </div>
        )
    }
}

export default Operators;
