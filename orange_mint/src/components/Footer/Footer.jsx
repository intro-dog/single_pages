import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa"
import { mobile, address } from "../../data/Contacts"
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <div data-aos="fade-up" className="space-y-6">
            <h2 className="text-4xl font-bold ">Orange Mint</h2>

            <div className="text-sm max-w-[300px]">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis laborum, at harum suscipit ab expedita?
              </p>
            </div>
          </div>

          {/* navink section */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
            <h2 className="text-4xl font-bold">Quick Links</h2>
            <div className="grid grid-cols-2 gap-3">
              {/* first column links */}
              <div>
                <ul className="space-y-2">
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">Home</a>
                  </li>
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">About</a>
                  </li>
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">Contact</a>
                  </li>
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">Search Fruits</a>
                  </li>
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* second column links */}
              <div>
                <ul className="space-y-2">
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">Home</a>
                  </li>
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">About</a>
                  </li>
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">Contact</a>
                  </li>
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">Search Fruits</a>
                  </li>
                  <li className="hover:decoration-solid hover:underline">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* social links section */}
          <div data-aos="fade-up" data-aos-delay="500" className="space-y-6">
            <h2 className="text-4xl font-bold">Follow Us</h2>
            <div>
              <div>
                <p>{mobile}</p>
              </div>
              <div>
                <p>{address}</p>
              </div>
              <div className="flex items-center gap-3 my-4">
                <FaFacebook className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* copyright section */}
        </div>
        <div className="text-white text-center mt-8 pt-8">
          <p>&copy; 2024 Orange Mint. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
