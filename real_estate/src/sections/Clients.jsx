import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { FaStar } from "react-icons/fa"
import { useDarkMode } from "../components/DarkModeContext"
import { client } from "../components/export"

const Clients = () => {
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
        id="testimonials"
        className="lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h2
            data-aos="zoom-in"
            className="text-red-500 dark:text-white uppercase"
          >
            our clients
          </h2>
          <h2
            data-aos="zoom-in"
            className="text-black dark:text-white text-[40px] font-semibold leading-10"
          >
            What our clients<br></br>saying about us
          </h2>
        </div>

        <div
          id="clients-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full"
        >
          {client.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={200}
              key={index}
              className="bg-gray-100 dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full"
            >
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src={item.image}
                  alt="client"
                  className="w-[70px] transform hover:scale-110 transition-transform duration-300"
                />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h2>{item.name}</h2>
                  <h2 className="text-slaet-600 dark:text-white">
                    {item.text}
                  </h2>
                </div>
              </div>

              <div className="text-md text-justify text-slate-600 dark:text-white">
                <p>{item.feedback}</p>
              </div>
              <div className="flex justify-start items-center w-full gap-2">
                <FaStar className="size-4 text-yellow-400" />
                <FaStar className="size-4 text-yellow-400" />
                <FaStar className="size-4 text-yellow-400" />
                <FaStar className="size-4 text-yellow-400" />
                <FaStar className="size-4 text-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Clients
