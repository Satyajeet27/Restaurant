import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const MealButton = () => {
  return (
    <div className='flex items-center text-white w-fit text-nowrap'>
        <p className='bg-rose-500 px-4 py-2'>Choose Your Meal Plan</p>
        <div className="bg-rose-600 px-4  text-2xl py-2">
            <FaArrowRight />
        </div>
    </div>
  )
}

export default MealButton