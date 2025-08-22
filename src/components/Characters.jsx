

import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function CustomCursor({ isHovering3D }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={cursorRef}
      className='fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference'
      animate={{
        x: position.x - (isHovering3D ? 12 : 15),
        y: position.y - (isHovering3D ? 12 : 15),
        scale: isHovering3D ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 27,
        ease: 0.9
      }}
    >
      <motion.div
        className={`rounded-full ${isHovering3D ? 'bg-violet-500' : 'bg-white'}`}
        animate={{
          width: isHovering3D ? '24px' : '40px',
          height: isHovering3D ? '24px' : '40px',
        }}
        transition={{ duration: 0.3 }}
      >
        {isHovering3D && (
          <motion.div
            className='absolute inset-0 rounded-full bg-transition border border-violet-500'
            initial={{
              scale: 0.6, opacity: 0
            }}
            animate={{
              scale: 2, opacity: 0.5
            }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        )}

      </motion.div>

    </motion.div>
  )
}

const Characters = () => {

  const [selectedAvator, setSelectedAvator] = useState("EVA");
  const [cursorInModelArea, setCursorInModelArea] = useState(false);


  const Avator = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 81,
      stable: 72,
      penetrate: 90,
      portable: 63,
      stars: 4,
    },
  }

  const currentAvator = Avator[selectedAvator];

  const handle3DAreaMouseEnter = () => {
    setCursorInModelArea(true)
  }

  const handle3DAreaMouseLeave = () => {
    setCursorInModelArea(false)
  }

  return (
    <div className='relative w-full md:h-screen h-[180vh] overflow-hidden mb-[9%] justify-center '>

      <CustomCursor
        isHovering3D={cursorInModelArea}

      />
      {/* Section title */}
      <div className='relative z-10 pt-6 text-center'>
        <h1 className='text-5xl font-bold tracking-widest md:mb-14 mb-8'
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.9)' }}
        >
          FIGHTERS
        </h1>
      </div>

      {/* Main Content Area */}
      <div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-3'>
        {/* left side */}
        <div className='w-full md:w-2/4 flex flex-col md:ml-10'>
          {/* Avatar info card */}
          <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 mb-4 border border-gray-900 shadow-[0_0_15px_rgba(167, 139, 250, 0.2)]'>

            <h1 className='text-2xl font-semibold mb-2'>{currentAvator.name}</h1>
            {/* Avator stats */}
            <div className='space-y-3 mb-9'>

              {/* Power stat */}
              <div className='flex items-center'>
                <span className='w-24 text-gray-300'>Power</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-purple-900 to-white'
                    style={{ width: `${currentAvator.power}%` }}
                  />
                </div>
                <span className='ml-3'>{currentAvator.power}</span>
              </div>
              {/* Stable stat */}
              <div className='flex items-center'>
                <span className='w-24 text-gray-300'>Stable</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-purple-900 to-white'
                    style={{ width: `${currentAvator.stable}%` }}
                  />
                </div>
                <span className='ml-3'>{currentAvator.stable}</span>
              </div>
              {/* Penetrate stat */}
              <div className='flex items-center'>
                <span className='w-24 text-gray-300'>Penetrate</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-purple-900 to-white'
                    style={{ width: `${currentAvator.penetrate}%` }}
                  />
                </div>
                <span className='ml-3'>{currentAvator.penetrate}</span>
              </div>
              {/* Portable stat */}
              <div className='flex items-center'>
                <span className='w-24 text-gray-300'>Portable</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-purple-900 to-white'
                    style={{ width: `${currentAvator.portable}%` }}
                  />
                </div>
                <span className='ml-3'>{currentAvator.portable}</span>
              </div>
            </div>
            {/* action buttons */}
            <div className='flex gap-3'>
              <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                Porficient
              </button>

              <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                Redemption
              </button>
            </div>
          </div>

          {/* avatar selection cards */}
          <div className='grid grid-cols-2 gap-3'>
            {/* VIKI card */}
            <div
              onClick={() => setSelectedAvator("VIKI")}
              className='relatve bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300' >
              {/* text */}
              <div className='text-lg mb-3'>VIKI</div>
              {/* img */}
              <div className='w-18 h-18 bg-gray-800/50 rounded-full flex items-center justify-center mb-3'>
                <img src="/images/VIKI.png" alt="viki" />
              </div>
              {/* star */}
              <div className='flex '>
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className='w-4 h-4 fill-purple-900' />
                ))}
              </div>
              {/* highlighting selected one */}
              {selectedAvator === "VIKI" && (
                <div className='absolute inset-0 border-2 rounded-lg pointer-events-none' />
              )}
            </div>

            {/* EVA card */}
            <div
              onClick={() => setSelectedAvator("EVA")}
              className='relatve bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300' >
              {/* text */}
              <div className='text-lg mb-3'>EVA</div>
              {/* img */}
              <div className='w-18 h-18 bg-gray-800/50 rounded-full flex items-center justify-center mb-3'>
                <img src="/images/EVA.png" alt="eva" />
              </div>
              {/* star */}
              <div className='flex '>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className='w-4 h-4 fill-purple-900' />
                ))}
              </div>
              {/* highlighting selected one */}
              {selectedAvator === "EVA" && (
                <div className='absolute inset-0 border-2 rounded-lg pointer-events-none' />
              )}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='relative md:w-2/4 w-full md:h-full h-180 mt-9 flex items-center justify-center overflow-hidden'
          onMouseEnter={handle3DAreaMouseEnter}
          onMouseLeave={handle3DAreaMouseLeave}

        >

          <AnimatePresence mode='wait'>
            {selectedAvator === "VIKI" ? (
              <motion.div
                key="VIKI"
                className='absolute inset-0'
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/IZeedCXoXUIj2SU5/scene.splinecode" />
              </motion.div>
            ) : (
              <motion.div
                key="EVA"
                className='absolute inset-0'
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/6D1QsarCF8WoWDP6/scene.splinecode" />


              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>


    </div>
  )
}

export default Characters