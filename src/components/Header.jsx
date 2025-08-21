import { MenuIcon, Rocket, ShoppingBag, UserCircle2 } from "lucide-react"
import NavLink from "../utils/NavLink"
import { GiArena } from "react-icons/gi"
import { useState } from "react"



const Header = () => {

  const [showMenu, setShowMenu] = useState(false);


  return (
    <header className="py-1 px-7 flex justify-between items-center sticky bg-black top-0 z-50 w-full border-b-[0.3px] border-[#babaff]">

      {/* Left section */}
      <div className="flex lg:gap-15 gap-4 items-center">
        <img className="w-12 md:w-15" src="public/images/logo.png" alt="logo" />

        <div className="hidden md:flex gap-6 items-center">
          <button className="h-9 px-6 bg-gradient-to-r from-purple-900 to-indigo-400 rounded-xl font-medium text-nowrap hover:opacity-70 transition-all duration-300">
            Play Now
          </button>
          <button className="h-9 px-6 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl font-medium text-nowrap hover:opacity-70 transition-all duration-300">
            NFT Store
          </button>
        </div>
      </div>

      {/* Right section desktop */}
      <nav className="hidden md:flex gap-3">
        <NavLink
          icon={<UserCircle2 size={20} />}
          text="Avator"
        />
        <NavLink
          icon={<GiArena size={20} />}
          text="Arena"
        />
        <NavLink
          icon={<Rocket size={20} />}
          text="Beyond"
        />
        <NavLink
          icon={<ShoppingBag size={20} />}
          text="Shop"
        />
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-3xl p-2 cursor-pointer md:hidden">
        <MenuIcon />
      </button>

      {showMenu && (
        <div className="fixed top-15 right-0 left-0 bg-black p-5 transition-all duration-600 md:hidden">
          <nav className="flex flex-col gap-3 items-center">
            <NavLink
              icon={<UserCircle2 size={20} />}
              text="Avator"
            />
            <NavLink
              icon={<GiArena size={20} />}
              text="Arena"
            />
            <NavLink
              icon={<Rocket size={20} />}
              text="Beyond"
            />
            <NavLink
              icon={<ShoppingBag size={20} />}
              text="Shop"
            />
          </nav>

          <div className="flex flex-col gap-3 w-full mt-4">
            <button className="bg-purple-900 py-3 rounded-lg hover:opacity-70">
              Play Now
            </button>
            <button className="bg-gray-500 py-3 rounded-lg hover:opacity-70">
              NFT Store
            </button>
          </div>


        </div>
      )}


    </header>
  )
}

export default Header