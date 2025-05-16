import React from 'react'
import disney from "../assets/Images/disney.png"
import marvel from "../assets/Images/marvel.png"
import nationalG from "../assets/Images/nationalG.png"
import pixar from "../assets/Images/pixar.png"
import starwar from "../assets/Images/starwar.png"

import starwarV from "../assets/Videos/star-wars.mp4"
import disneyV from "../assets/Videos/disney.mp4"
import marvelV from "../assets/Videos/marvel.mp4"
import nationalGeographicV from "../assets/Videos/national-geographic.mp4"
import pixarV from "../assets/Videos/pixar.mp4"


const ProductionHouse = () => {
    const ProductionHouseList =[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:nationalG,
            video:nationalGeographicV
        },
        {
            id:5,
            image:starwar,
            video:starwarV
        },
    ]
  return (
    <div className='flex overflow-hidden relative p-2 px-5 md:px-16 gap-2 md:gap-3 mt-5 '>
      {ProductionHouseList.map((item)=>(
        <div className=' overflow-hidden border-2 border-gray-600 rounded-lg
            hover:scale-110 shadow-lg shadow-black transition-all duration-300 ease-in-out cursor-pointer' key={item.id} >
            <video className='absolute overflow-hidden z-0 top-0 rounded-lg opacity-0 hover:opacity-50' src={item.video} autoPlay loop playsInline muted />
            <img  src={item.image} alt="" className='w-full z-[1] ' />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse
