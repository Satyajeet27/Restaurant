import React from 'react'
import "./About.css"
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <div className='about-img-bg rounded-b-3xl'>
        <img src="/assets/vector-wave.png" className='sm:min-w-max' alt="" srcset="" />
        <div className="container">
        <h2 className='text-4xl text-slate-600 font-semibold text-center pb-6'>About Us</h2>
        <div className="bg-rose-100 flex flex-col opacity-85 py-8">
            <p className='p-8'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas molestias culpa facilis veritatis? Minus aspernatur ea accusamus ipsa ratione, hic soluta dolor excepturi quidem voluptatum? Recusandae illum, molestias illo accusamus natus ipsa consequuntur esse repudiandae pariatur, id ea, dolor inventore. Consectetur repudiandae et, facilis quaerat laudantium voluptates illo dolore ipsam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas molestias culpa facilis veritatis? Minus aspernatur ea accusamus ipsa ratione, hic soluta dolor excepturi quidem voluptatum? Recusandae illum, molestias illo accusamus natus ipsa consequuntur esse repudiandae pariatur, id ea, dolor inventore. Consectetur repudiandae et, facilis quaerat laudantium voluptates illo dolore ipsam.
            </p>
            <div className="self-center">
            <button className='flex text-white gap-2 font-semibold text-lg bg-rose-600 items-center py-2 px-6'><span><FaUser /></span> My Account</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About