import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function BasicExample(props) {
    return (
        
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
       
    );
}

export default BasicExample;