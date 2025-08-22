


const Hero = () => {
  return (
    <main className='relative w-full h-screen overflow-hidden flex justify-center -mt-9 mb-[10%]'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-[95%] object-cover absolute top-0 first-letter:left-0 -z-10'
        src="/videos/hero.mp4" />

      <div className='flex flex-col justify-center items-center gap-9'>
        <img src="/images/illu-text.png" alt="illu-text"
          className='md:w-[30rem] w-[20rem]'
        />

        <h1 className='md:text-2xl text-xl font-bold'>Explore, Capture, Conquer</h1>

        <div className='md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]' />

        <button className='h-10 px-15 bg-gradient-to-r from-purple-900 to-indigo-700 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300'>PLAY NOW</button>

        <div className='flex items-center justify-center gap-6 text-3xl font-extrabold text-gray-300'>
          <img className='md:h-18 h-15' src="/images/illu-logo.png" alt="illu-logo" /> ZERO
        </div>

        <p className='max-w-[80%] text-center text-[#babaff]'>
          Notice: Illuvium Games are in Beta. Participation involves risk. Read our full Disclaimer here.
        </p>
      </div>

      <div className='absolute bottom-18 lg:right-24 right-5 mt-24 animate-bounce sm:inline-block hidden'>
        <div className='flex flex-col items-center'>
          <div className='w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1'>
            <div className='w-1 h-3 bg-[#babaff] rounded-full animate-pulse'></div>
          </div>

          <p className='text-[#babaff] mt-2'>Scroll Down</p>
        </div>
      </div>
    </main>
  )
}

export default Hero