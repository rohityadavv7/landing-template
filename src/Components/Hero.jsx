import React from 'react'
import {motion, useTime, useTransform} from "motion/react"

function Hero() {


    const time = useTime()
    const rotate = useTransform(time, [0, 5000], [0, 360],{
        clamp:false
    })

    const bgRotate = useTransform(rotate,(r)=> {
        return `conic-gradient(from ${r}deg,#000,#E83F25)`
    })

  return (
    <div className='relative w-full flex flex-col p-4 items-center'>
        {/* GRADIENT */}
        <div className='h-1 z-0 w-[25%] mx-auto blur-lg bg-white'></div>
        <div className='absolute z-0 bg-white h-50 w-50 rounded-full blur-[36px] mix -top-35
        left-1/2 transform -translate-x-[50%]'></div> 
        <div className='absolute flex z-0 items-end justify-center mi h-130 w-130 transform -translate-x-1/2 rounded-full blur-[190px] bg-[#d74c29] left-[50%] -top-90 
        '>
            {/* <div className='h-40 w-40 bg-white'></div> */}
        </div>

        {/* Navbar */}
        <div className=' w-10/12 sm:w-9/12 text-sm md:text-md md:w-6/12 relative mt-10 shrink-0 font-["Neue_Montreal"] mx-auto flex justify-between
         text-white bg-black/40 z-100 border-[0.1px] px-6 md:px-10 rounded-4xl p-4'>

            {
                ["Home", "Feature","Pricing", "Contact us"].map((ele, index) => (
                    <a key={index}>{ele}</a>
                ))
            }

        </div>

        {/* MAIN */}

        <div className='flex flex-col items-center perspective-dramatic
        font-["Neue_Haas_Grotesk_Text_Pro"] space-y-2 md:space-y-4 mt-30'>
            <div className='text-white text-5xl md:text-8xl'>
                Look Again,
            </div>

            <div className='text-[40px] md:text-8xl tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-600 '>
                It hits Different.
            </div>

            <div className='h-0.5 md:h-1 w-11/12 md:w-full rotate-x-45 md:scale-x-120 text-white text-center bg-white blur-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nostrum!
            </div>

            <div className='mt-15 relative group rotate-border flex items-center justify-center rounded-full p-[1px] text-md md:text-xl'>
                
                <motion.div
                 style={{
                    background: bgRotate,
                    filter:"blur(10px)"
                }}
                className='-insett-1 group-hover:blur-none" h-full w-full -z-10 rounded-full absolute '></motion.div>
                
                <motion.button 
                whileTap={{scale:0.9}}
                className='px-10 relative z-100 font-["Grenette"] font-thin py-3  bg-zinc-900 bg--900 border-white text-white rounded-full '>
                    Book a Demo Call
                </motion.button>

                
            </div>
        </div>
    </div>
  )
}

export default Hero