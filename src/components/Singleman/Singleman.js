import React from 'react';
import '../../bootstrap/css/bootstrap.min.css';
import './Singleman.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus} from '@fortawesome/free-solid-svg-icons'

const Singleman = (props) => {
    const person = props.data;
    
    
    return (
        <div>
            <div className = "container">
                
                    
                    <div className="single-user">
                        <div className="row">
                        <div className="imageSize">
                            <img className="img-fluid  img-thumbnail rounded-circle" src={props.data.image} alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h2>{props.data.name}</h2>
                            <h3>{props.data.username}</h3>
                            <h3>${props.data.yearlyincome}</h3>
                            <h3>{props.data.address.street}</h3>
                            <h3>{props.data.phone}</h3>
                            
                            <button onClick={() => {
                                props.handleButton(props.data)
                            }} className="main-button">   <FontAwesomeIcon icon={faUserPlus}/>    ADD</button>
                        </div>
                        <div className="col-md-3">
                            <h2>: name</h2>
                            <h3>: username</h3>
                            <h3>: yearly income</h3>
                            <h3>: address</h3>
                            <h3>: phone</h3>
                        </div>
                        </div>
                    </div>
                    
                
                
            </div>
            

        </div>
    );
};

export default Singleman;