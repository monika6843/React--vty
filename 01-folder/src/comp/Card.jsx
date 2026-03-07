import React from 'react'

const Card = (props) => {
  
  return (
   <div className='parent'>
      
    <div className='card'>
      <img className='img' src={props.img} alt={`${props.user} profile picture`}/>
   <h1>{props.user},{props.age}</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  .</p>
   <button>view profile</button>
    </div>
    
    </div>
    
  )
}

export default Card
