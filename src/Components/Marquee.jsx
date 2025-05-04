import React from 'react'
import {motion} from "motion/react"

function Marquee() {
  return (
    <div className='bg- text-white flex  whitespace-nowrap shrink-0 w-fit overflow-hidden p-4 rounded-t-2xl mt-15'>
        <motion.div
               initial={{x:0}}
               animate={{x:"-50%"}}
               transition={{duration:10, ease:"linear", repeat:Infinity}}
               className='flex bg-clip-text text-transparent bg-gradient-to-b from--50 to-zinc-900'
        >
        <motion.span 
 
        className='text-9xl font-["Neue_Haas_Grotesk_Text_Pro] '>
            Lightning-Fast Performance .Built with Passion.
        </motion.span>

        <motion.span 
        className='text-9xl font-["Neue_Haas_Grotesk_Text_Pro]  '>
            Lightning-Fast Performance. Built with Passion.
        </motion.span>
        </motion.div>
    </div>
  )
}

export default Marquee