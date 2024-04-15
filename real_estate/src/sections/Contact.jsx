import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useDarkMode } from "../components/DarkModeContext"

const Contact = () => {
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
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h2 className="text-2xl text-black font-semibold dark:text-white">
            Send a message today
          </h2>
          <input
            type="text"
            placeholder="Enter your full name here..."
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="email"
            placeholder="Enter your email here..."
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="number"
            placeholder="Enter your mobile number here..."
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Enter your message here..."
            style={{ resize: "none" }}
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          ></textarea>
          <button
            className="bg-red-600 w-full text-md px-8 py-3 text-white 
            dark:hover:bg-red-900
            font-semibold rounded-xl hover:bg-black dark:bg-red-700  cursor-pointer uppercase"
            style={{ transition: "background 0.3s ease-in-out" }}
          >
            send email
          </button>
        </div>

        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h2
            data-aos="zoom-in"
            data-aos-duration="200"
            className="text-red-500 dark:text-white uppercase"
          >
            reach us
          </h2>
          <h2
            data-aos="zoom-in"
            data-aos-duration="400"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <div>
            <p
              data-aos="zoom-in"
              data-aos-duration="600"
              className="text-xl text-gray-600 text-justify dark:text-white "
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>

          <button
            className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer uppercase"
            style={{ transition: "background 0.3s ease-in-out" }}
          >
            send email
          </button>
        </div>
      </section>
    </div>
  )
}

export default Contact
