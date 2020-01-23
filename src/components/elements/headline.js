import React from 'react';

const Headline = ({text}) => {
    return (
        <h1>
            {
                text ? text : 'Heading Text Goes Here'
            }
        </h1>
    )
    
}
export default Headline;