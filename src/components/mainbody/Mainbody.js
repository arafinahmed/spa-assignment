import React, { useState } from 'react';
import user10 from '../../Data/user10';
import '../../bootstrap/css/bootstrap.min.css'
import './Mainbody.css'
import Singleman from '../Singleman/Singleman';
import Countsection from '../Countsection/Countsection';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const Mainbody = () => {
    
    
    const myUser = user10;
    const [person, setPerson] = useState(myUser);
    const [sendit, setSendit] = useState([]);
    

    const handleButton = (manush) => {
        const newS = [...sendit];
        let c = 0;
        for(let i=0; i<newS.length; i++){
            if(newS[i]==manush){
                c = 1;
            }
        }
        if(c==0){
            const newNewC = [...newS, manush];
            setSendit(newNewC);
            console.log(sendit);
        }
        
    }
    
    
    
    
    
    
    
    return (
        <div className="main-body">
            <div className="main-page">
            {
                    person.map(pro => 
                    <Singleman 
                    handleButton = {handleButton}
                    data = {pro}></Singleman>)
                }
            </div>
            <div className="count-section">
                    <Countsection sendkaro= {sendit}></Countsection>

            </div>
            
        </div>
    );
};

export default Mainbody;