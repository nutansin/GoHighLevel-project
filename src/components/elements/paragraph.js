import React from 'react';

const Paragraph = ({text}) => {
    return (
        <p>
            {
                text ? text : 'Paragraph Goes Here'
            }
        </p>
    )
    
}
export default Paragraph;