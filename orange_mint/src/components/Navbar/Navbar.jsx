import { GiHamburgerMenu } from "react-icons/gi"
import NavLinks from "../NavLinks"

// eslint-disable-next-line react/prop-types
const Navbar = ({ sidebar, setSidebar }) => (
  <div className="absolute top-0 left-0 w-full py-2 text-white z-20 cursor-default">
    <div data-aos="fade" className="container">
      <div className="flex justify-between items-center">
        {/*logo section */}
        <h1 className="text-4xl font-bold uppercase">
          Orange <span className="font-normal text-2xl">Mint</span>
        </h1>

        {/*Navlinks section */}
        <NavLinks />
        {/*Hamburger section */}
        <div
          className="cursor-pointer transform hover:scale-110 transition-transform duration-300 text-3xl"
          onClick={() => setSidebar(!sidebar)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
