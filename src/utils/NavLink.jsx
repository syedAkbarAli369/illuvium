

const NavLink = ({ icon, text }) => {
  return (
    <a href="#" className="flex items-center relative gap-1 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-900 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
      {icon}
      {text}
    </a>
  )
}

export default NavLink