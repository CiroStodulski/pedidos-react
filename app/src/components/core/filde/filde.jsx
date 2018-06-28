import React from 'react';

export default props => (
    <div className="custom-fieldset">
        <h4>
            {props.title}
        </h4>
        <hr className="custom-fieldset-line" />
        {props.button }
    </div>
)