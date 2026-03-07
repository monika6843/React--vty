import React from 'react'
import{Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='parent'>

      <div className="card">
         <div>
         <div className="top">
            <img src={props.logo}alt="sdfg"/>
            <button>Save <Bookmark size={15} /></button>
         </div>
         <div className="center">
            <h3>{props.company} <span> {props.posted}</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
               <h4>{props.tag1}</h4>
               <h4>{props.tag3}</h4>
            </div>
         </div>
         </div>
         <div className="bottom">
         
               <div>
                  <h3>{props.pay}</h3>
                  <p>{props.location}</p>
               </div>
               <button>Apply Now</button>
            </div>
         </div>
      </div>
     


  )
}

export default Card

