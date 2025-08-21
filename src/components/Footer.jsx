

import { Facebook, Linkedin, TwitterIcon, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-33 md:px-16 px-9 border-t-[0.3px] border-[#babaff]'>
      <img
        className='h-9'
        src="public\images\illu-text.png" alt="footer-text" />

      <img className='h-18 sm:inline-block hidden' src="public\images\illu-logo.png" alt="logo" />

      <div className='flex gap-3'>
        <a className='text-2xl md:text-3xl hover:text-purple-900' href="#"><TwitterIcon /></a>
        <a className='text-2xl md:text-3xl hover:text-purple-900' href="#"><Youtube /></a>
        <a className='text-2xl md:text-3xl hover:text-purple-900' href="#"><Linkedin /></a>
        <a className='text-2xl md:text-3xl hover:text-purple-900' href="#"><Facebook /></a>

      </div>
    </footer>
  )
}

export default Footer