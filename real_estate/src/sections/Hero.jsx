import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import heroimg from "../assets/images/hero1.webp"
import { useDarkMode } from "../components/DarkModeContext"

const Hero = () => {
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
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find Your Dream Home
          </h1>
          <div
            data-aos="zoom-in"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quasi ipsa ducimus, atque necessitatibus ratione nobis mollitia
              harum architecto magnam?{" "}
            </p>
          </div>
        </section>
      </div>

      {/* form */}
      <form
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white uppercase">
              location
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or zip code"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border=[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white uppercase">
              type{" "}
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option disabled selected>
                Select Property{" "}
              </option>
              <option value="Option1">Rentals</option>
              <option value="Option2">Sale</option>
              <option value="Option3">Commercial</option>
              <option value="Option4">Land</option>
              <option value="Option5">Residential</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white uppercase">
              category{" "}
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option disabled selected>
                Property Category{" "}
              </option>
              <option value="Option1">Apartments</option>
              <option value="Option2">House</option>
              <option value="Option3">Duples</option>
              <option value="Option4">Land</option>
              <option value="Option5">Condos</option>
            </select>
          </div>

          <div className="w-full">
            <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer hover:scale-110 transition-scale duration-300 uppercase">
              submit
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Hero
