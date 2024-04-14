import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import aboutimg from "../assets/images/about.jpg"
import { useDarkMode } from "../components/DarkModeContext"

const About = () => {
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
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimg}
          alt="about image"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-8">
        <h2
          data-aos="zoom-in"
          className="text-red-500 dark:text-white uppercase"
        >
          who we are
        </h2>
        <h2
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black text-[40px] font-semibold leading-10 dark:text-white"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
          repellat!
        </h2>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-xl text-gray-600 dark:text-white text-justify"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            delectus nulla accusantium inventore culpa earum suscipit omnis
            natus qui accusamus, vitae quibusdam, facere reiciendis mollitia.
          </p>
        </div>
        <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer hover:scale-110 transition-all duration-300 uppercase">
          read more
        </button>
      </div>
    </section>
  )
}

export default About
