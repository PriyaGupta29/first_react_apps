import React from 'react';
import data from './Quiz.json';

const ReadJSON = () => {
    return (
        <div>
            <h1>Hello There</h1>
            {data.map((question, index) => {
                return(<h2 key={index}>{question.title}</h2>)
            })}
        </div>
    )
}

export default ReadJSON;