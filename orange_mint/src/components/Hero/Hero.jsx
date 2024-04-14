import { useState } from "react"
import OrangeImg from "../../assets/orangebg.png"
import Navbar from "../Navbar/Navbar"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Hero = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <main className="md:px-12 md: py-6 bg-primaryDark">
      <section className="relative z-50 min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md cursor-default">
        <div className="container">
          {/* Navbar */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          {/* Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px] ">
            {/* text content */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4 ">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-5xl font-bold uppercase text-shadow"
              >
                A Healthy Fruit
              </h1>
              <div data-aos="fade-up" data-aos-delay="500" className="text-sm">
                <p>
                  Orange is a healthy fruit that is rich in vitamin C and
                  antioxidants. It is good for your skin and helps in boosting
                  your immune system.
                </p>
              </div>

              <button
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="0"
                className="relative z-50 border border-white px-4 py-2 rounded-lg hover:bg-primaryDark"
              >
                Shop now
              </button>
            </div>

            {/* image section */}

            <div data-aos="zoom-in">
              <img
                src={OrangeImg}
                alt="Orange"
                className=" z-10 w-[400px] img-shadow"
              />
            </div>

            {/* blank div section */}
            <div className="md:hidden"></div>
          </div>
        </div>

        {/* background large text */}

        <h1
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1800"
          className="large-text"
        >
          Orange
        </h1>
        {/*Sidebar section */}
        {sidebar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10 ">
            <div className="w-full h-full flex justify-center items-center ">
              <div className="text-white flex flex-col  items-center gap-6">
                {/* line  */}

                <div className="w-[1px] h-[70px] bg-white"></div>

                <div className="increase-text inline-block p-2 rounded-full border border-white ">
                  <FaFacebookF className=" text-2xl" />
                </div>

                <div className="increase-text inline-block p-2 rounded-full border border-white ">
                  <FaLinkedinIn className=" text-2xl" />
                </div>

                <div className="increase-text inline-block p-2 rounded-full border border-white ">
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default Hero
