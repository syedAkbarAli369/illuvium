

import { BoxIcon } from 'lucide-react'
import { BiLinkExternal } from 'react-icons/bi'

const Arena = () => {
  return (
    <div className='mt-0 md:min-h-[90%] p-0 lg:p-9 md:mt-0 '>
      <div className='relative z-10 pt-6 text-center'>
        <h1
          className='text-5xl font-bold tracking-widest mb-27'
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167, 139, 250, 0.5)' }}
        >Arena</h1>
      </div>

      <div className='lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
        {/* left */}
        <div className='md:col-span-1 space-y-4 md:space-y-6'>
          {/* Card 1 top left */}
          <div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105'>
            {/* card bg with gradient */}
            <div className='absolute h-full w-full'>
              <img src="public\images\bento-card1.png" alt="bento1" />
              <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-300 transition-all duration-300 text-nowrap flex justify-center items-center gap-3'>
                <BoxIcon /> NFT Store
              </button>
            </div>
          </div>

          {/* Card 2 - bottom left */}
          <div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105 mt-6'>
            <video
              className='h-full w-full object-cover '
              src="public\videos\bento-card2.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

        </div>

        {/* right col takes 2/3 of the space */}

        <div className='md:col-span-2 space-y-4 md:space-y-6'>
          {/* top row with 3 small cards */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6'>
            {/* card 3 - first small card */}
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 mt-3'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
                src='public\videos\bento-card3.mp4' />
              <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl md:text-2xl'>Scroiox</h1>
            </div>
            {/* card 3 - second small card */}
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 mt-3'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
                src='public\videos\bento-card4.mp4' />
              <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl md:text-2xl'>Floralynx</h1>
            </div>
            {/* card 3 - third small card */}
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 mt-3'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
                src='public\videos\bento-card5.mp4' />
              <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl md:text-2xl'>Titanor</h1>
            </div>
          </div>

          {/* card 6 bottom large card */}
          <div className='relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-105 mt-6'>

            <img src="public\images\bento-card5.png" alt="card6" />

            <button className='absolute bottom-0 h-15 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-300 transition-all duration-300 text-nowrap flex items-center justify-center gap-3'>
              <BiLinkExternal /> Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Arena