import React from 'react';
import './Countsection.css'
const Countsection = (props) => {
    const details = props.sendkaro;
    
    const l = details.length;
    let income = 0;
    
    for(let i=0; i<l; i++){
        income += details[i].yearlyincome;
    }
    
    return (
        <div>
            <h3>Total Friends: <span className="rightshift" > {l}</span></h3>
            <h3>Total income: <span className="rightshift" > ${income}</span></h3>
        </div>
    );
};

export default Countsection;