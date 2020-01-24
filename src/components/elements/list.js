import React from 'react';

const List = ({list}) => {
    return (
        <ul>
           {
                list.length>0 && list.map((val, index)=> {
                    return (  
                       <li key={index}>
                        {val.item?val.item:'List'}
                       </li>
                    )
                })
           }
        </ul>
    )
    
}
export default List;