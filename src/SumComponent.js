import React from 'react';
import './Addition.css';

const SumComponent = (props) => (
    <input type="number" name="sum" readOnly className="input-boxes" value={props.sum}/>
);

export default SumComponent;
