import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import {
  FaArrowUp,
  FaBuilding,
  FaFacebookF,
  FaFax,
  FaInstagram,
  FaMobile,
  FaMoon,
  FaSun,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Link } from "react-scroll"
import prop7 from "../assets/images/prop7.jpg"
import prop8 from "../assets/images/prop8.jpg"
import { useDarkMode } from "../components/DarkModeContext"

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, [])

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h2 className="text-white text-2xl font-semibold capitalize">
            about us
          </h2>
          <div className="text-slate-200 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptates nulla quo maxime quos natus!
            </p>
          </div>

          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>

          <h2 className="text-white mt-8 capitalize">
            Copyright Real Estate, All Rights Reserved
          </h2>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h2 className="text-white text-2xl font-semibold capitalize">
            contact us
          </h2>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <div className="text-slate-200">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <div className="text-slate-200">
              <p>+123 456 789</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <div className="text-slate-200">
              <p>1234 56789</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <MdEmail className="text-white size-5" />
            <div className="text-slate-200">
              <p>example@example.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h2 className="text-white text-2xl font-semibold capitalize">
            latest properties
          </h2>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt="image"
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h2 className="text-lg text-white capitalize">
                villa with amazing view
              </h2>
              <div className="text-slate-400">
                <p>$ 287.98</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt="image"
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h2 className="text-lg text-white capitalize">
                smart apartment from beach
              </h2>
              <div className="text-slate-400">
                <p>$ 487.18</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top */}
      <div
        id="icon-box"
        className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" smooth={true} offset={-100} spy={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      {/* dark mode */}

      <div>
        <button
          className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-28 hover:scale-110"
          style={{
            transition: "transform 0.3s ease",
          }}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FaMoon size={25} className="text-black" />
          ) : (
            <FaSun size={25} className="text-black" />
          )}
        </button>
      </div>
    </>
  )
}

export default Footer
