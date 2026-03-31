import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1 = () => {
  return (
    <div className='py-10  h-[90vh] flex item-center gap-10 '>
      <Leftcontent />
      <Rightcontent />
      
    </div>
  )
}

export default Page1
