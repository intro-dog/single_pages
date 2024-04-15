import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { GrLanguage } from "react-icons/gr"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    {
      link: "Overview",
      path: "home",
    },
    {
      link: "Feature",
      path: "feature",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Pricing",
      path: "pricing",
    },
  ]

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <span className="w-10 inline-block items-center uppercase">
                {" "}
                xyz
              </span>
            </a>

            {/* showing navitem using map */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <a key={link} href={path} className="block hover:text-gray-300">
                  {link}
                </a>
              ))}
            </ul>
          </div>

          {/* language and signup */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span className="capitalize">language</span>
            </a>

            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600 capitalize">
              sign up
            </button>
          </div>

          {/* hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary transform hover:scale-110 transition-scale duration-300" />
              ) : (
                <FaBars className="w-6 h-6 text-primary transform hover:scale-110 transition-scale duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* navitems when hamburger menu is open on mobile */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-lg ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-gray-300">
            {link}
          </a>
        ))}
      </div>
    </>
  )
}

export default Navbar
