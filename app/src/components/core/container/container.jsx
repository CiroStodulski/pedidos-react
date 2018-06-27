import React from 'react';
import './container.css';

export default props => (

    <div className="container  body-content">
        <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-8">
                {props.children}
            </div>
            <div className="col-md-2">

            </div>
        </div>
    </div>

)