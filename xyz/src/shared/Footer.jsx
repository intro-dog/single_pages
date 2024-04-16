import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"
import { Link } from "react-scroll"
import { contact } from "../data/contact"
import { help } from "../data/help"
import { navItems } from "./../data/navbar"

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-white"
          >
            <span className="w-10 inline-block items-center uppercase">
              {" "}
              xyz
            </span>
          </a>
          <div>
            <p className="md:w-1/2">
              A simple paragraph is comprised of three major components. The
              first sentence,which is often a declarative sentence, is called
              the 'topic sentence'.
            </p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>

        {/* footer navigator */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              {navItems.map(({ link, path }, index) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={index}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              {help.map(({ title }, index) => (
                <a key={index} href="#" className="block hover:text-gray-300">
                  {title}
                </a>
              ))}
            </ul>
          </div>

          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              {contact.map(({ data }, index) => (
                <a key={index} href="#" className="block hover:text-gray-300">
                  {data}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>All right reserved © 2024</p>
        <div className="flex items-center space-x-5">
          <FaFacebookF
            size={20}
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <FaInstagram
            size={20}
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <FaTwitter
            size={20}
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <FaLinkedinIn
            size={20}
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
