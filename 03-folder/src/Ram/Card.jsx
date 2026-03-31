import React from 'react'
import { Bold, Search, ChartNoAxesGantt } from 'lucide-react'

const Card = () => {
  return (
    <div className='parent'>
      <div className='card'>

        {/* Top Navbar */}
        <div className='top'>
          
          <div className='logo'>
            <Bold size={22}/>
          </div>

          <div className='menu'>
            <button>Home</button>
            <button>Registration</button>
          </div>

          <div className='icons'>
            <ChartNoAxesGantt size={22}/>
            <Search size={22}/>
          </div>

        </div>


        {/* Center Section */}
        <div className="center">

          {/* Left Section */}
          <div className="left">
            <h1 className='id'>Welcome to my website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>

            <div className='btns'>
              <button>Register</button>
              <button>Learn More</button>
            </div>
          </div>


          {/* Image Section */}
          <div className="img1">
            <img 
              className="img"
              src="https://static.vecteezy.com/system/resources/thumbnails/073/677/309/small/a-beautiful-woman-with-blue-eyes-photo.jpeg"
              alt="avatar"
            />
          </div>


          {/* Right Section */}
          <div className="center1">
            <h1 className='id'>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Download CV</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Card
