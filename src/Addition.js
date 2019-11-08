import React,{Component} from 'react';
import './Addition.css';

class Addition extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1 :'',
            num2 :'',
            sum : '',
        }
        this.calculateSum = this.calculateSum.bind(this);
    }

    calculateSum(){
        this.setState({
            sum: Number(this.state.num1) + Number(this.state.num2)
        })
    }
 
    handleChange =(e) =>{        
        this.setState({num1:e.target.value,sum:Number(e.target.value)+Number(this.state.num2)});
    }
    handleChange2 =(e) =>{        
        this.setState({num2:e.target.value });
        this.setState({sum:Number(e.target.value)+Number(this.state.num1)})
    }

    render(){
        const {num1,num2, sum } = this.state;
        return (
            <div>
                <div className="form-container">
                    <div className="heading">Addition</div><br/>
                    <input type="number" value={num1}  className="input-boxes" onChange={this.handleChange}
                    name="num1" placeholder="Enter first number"/><br/>
                    <input type="number" value={num2} className="input-boxes" onChange={this.handleChange2}
                    name="num2" placeholder="Enter second number"/><br/>
                    <br/><div>Sum is: </div>
                    <input type="number" name="sum"  readOnly className="input-boxes" value={sum}/>
                </div>
            </div>
        )
    }
}

export default Addition;