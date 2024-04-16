import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { useEffect } from "react"
import featureImg from "../../public/article.png"
import FeaturesArticle from "../shared/FeaturesArticle"
import { fadeIn } from "./../data/variants"

const Features = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, [])

  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4"
        >
          <h3 className="text-3xl text-primary font-bold mb-3">
            Why we are better than others
          </h3>
          <div className="text-base text-tartiary">
            <p>
              A simple paragraph is comprised of three major components. The
              first sentence, which is often a declarative sentence, is called
              the 'topic sentence'.
            </p>
          </div>
        </motion.div>

        {/* features list */}
        <div data-aos="fade-up" className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <FeaturesArticle
              img={featureImg}
              title="Conventient study schedule."
            />
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featureImg} alt="feature" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5 r">
                  Conventient study schedule.
                </h5>
              </div>
            </div>

            <FeaturesArticle
              img={featureImg}
              title="Conventient study schedule."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
