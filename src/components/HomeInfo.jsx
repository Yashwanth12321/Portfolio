import React from 'react'
import { Link } from 'react-router-dom'

import {arrow} from "../assets/icons"


const InfoBox=({text,link,btnText})=>(
  <div className='info-box w-2/5'>
    <p className='font-medium sm:text-x1 text-center'>{text}</p>

    <Link to={link} className=' neo-brutalism-white  neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)

const renderContent={
  1:(
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-whit mx-5'>
      Hi, I am <span className='font-semibold'>Yashwanth</span> ✌️
      <br/>
      A Software engineer
    </h1>
  ),
  2:(


      <InfoBox 
      text="I got a simple goal, to be the proficient at what i want to do"
      link="/about"
      btnText="Learn more"

      />


    ),
  3:(
    <InfoBox 
    text="A mans excellence is projected by their experiences"
    link="/projects"
    btnText="Learn more"

    />  
  ),
  4:(
    <InfoBox 
    text="click here to connect with me"
    link="/contact"
    btnText="Let's network"

    />
  ),
}




const HomeInfo = ({CurrentStage}) => {
  return renderContent[CurrentStage]||null;
}

export default HomeInfo