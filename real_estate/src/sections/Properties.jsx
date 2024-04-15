import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import {
  FaBath,
  FaBed,
  FaCamera,
  FaHeart,
  FaMapMarkerAlt,
  FaPlus,
  FaShareAlt,
  FaUserCircle,
  FaVideo,
} from "react-icons/fa"
import { MdSpaceDashboard } from "react-icons/md"
import { useDarkMode } from "../components/DarkModeContext"
import { property } from "./../components/export"

const Properties = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  })

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h2 data-aos="zoom-in" className="text-red-500 uppercase">
            properties
          </h2>
          <h2
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest
          </h2>
        </div>

        {/* properties grid starts here */}

        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {property.map((item, index) => {
            return (
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl w-full"
              >
                <div
                  id="image-box"
                  className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                  style={{ backgroundImage: `url(${item.images})` }}
                >
                  <div
                    id="top"
                    className="flex justify-between items-end w-full"
                  >
                    <div>
                      <button className="px-3 py-1 bg-red-600 hover:bg-white transition-bg duration-300 hover:text-black text-white rounded-full text-[13px]  capitalize">
                        featured
                      </button>
                    </div>

                    <div className="flex justify-between items-center gap-3">
                      <button className="px-3 py-1 bg-red-600 hover:bg-white transition-bg duration-300 hover:text-black text-white rounded-full text-[13px]  capitalize">
                        sales
                      </button>
                      <button className="px-3 py-1 bg-red-600 hover:bg-white transition-bg duration-300 hover:text-black text-white rounded-full text-[13px]  capitalize">
                        active
                      </button>
                    </div>
                  </div>
                  <div
                    id="bottom"
                    className="flex justify-between items-end w-full"
                  >
                    <div className="flex justify-start items-center gap-2">
                      <FaMapMarkerAlt className="size-4 text-white" />
                      <h2 className="text-white">{item.address}</h2>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                      <FaVideo className="size-4 text-white hover:scale-110 transition-scale duration-300 cursor-pointer" />
                      <FaCamera className="size-4 text-white hover:scale-110 transition-scale duration-300 cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                  <h2 className="text-xl text-black font-semibold dark:text-white">
                    {item.name}
                  </h2>
                  <h2 className="text-2xl text-red-600 font-bold dark:text-white">
                    {item.price}
                  </h2>
                  <div className="dark:text-white">
                    <p>{item.about}</p>
                  </div>
                  <div
                    id="icons"
                    className="flex justify-center items-start gap-4"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <FaBath className="size-5 text-red-400" />
                      <h2 className="dark:text-white">{item.bath}</h2>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <FaBed className="size-5 text-red-400" />
                      <h2 className="dark:text-white">{item.bed}</h2>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <MdSpaceDashboard className="size-5 text-red-400" />
                      <h2 className="dark:text-white">{item.area}</h2>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-200 mt-8"></div>

                  <div
                    id="owner-info"
                    className="flex justify-between items-center w-full mt-2"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <FaUserCircle className="size-5 text-red-400" />
                      <h2 className="dark:text-white">{item.owner}</h2>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaShareAlt className="size-4 text-red-400" />
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaHeart className="size-4 text-red-400" />
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaPlus className="size-4 text-red-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Properties
