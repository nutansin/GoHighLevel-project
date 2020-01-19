import React from 'react';

const Image = ({source}) => {
    return (
        <div>
            {
                source ? <img src={source}/>:<span>Image Placeholder</span>
            }
        </div>
    )
}
export default Image;