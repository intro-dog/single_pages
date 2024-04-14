import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useDarkMode } from "../components/DarkModeContext"
import { service } from "./../components/export"
const Services = () => {
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
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h2
            data-aos="zoom-in"
            className="text-red-500 dark:text-white uppercase"
          >
            our services
          </h2>
          <h2
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Top rel estate <br></br>
            services available
          </h2>
        </div>

        <div
          id="service-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {service.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="200"
              key={index}
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer "
              style={{ transition: "background 0.3s ease" }}
            >
              <div className="p-6 rounded-full bg-red-200">
                <item.icon className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
              <h2 className="text-black text-[22px] font-semibold dark:text-white">
                {" "}
                {item.title}
              </h2>
              <div className="text-lg text-slate-700 dark:text-white">
                <p>{item.desc}</p>
              </div>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white uppercase">
                read more
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
