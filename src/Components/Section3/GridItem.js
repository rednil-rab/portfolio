import React from 'react';

export default function GridItem(props) {
    const handleClick = () => {
        window.open(props.link);
    }
    return (
            <div className="project-div">
           <div 
            className='work-item'
            onClick={() => handleClick()} 
            style={{ backgroundImage: `url(${props.image})` }}>
            
            </div>
            <h2>{props.description}</h2>
            </div>
 


    )

}