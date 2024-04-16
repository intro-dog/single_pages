import { motion } from "framer-motion"
import aboutImg from "../../public/image1.png"
import aboutImg2 from "../../public/image2.png"
import { fadeIn } from "../data/variants"
import AboutComponent from "./../shared/AboutComponent"
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <AboutComponent
          img={aboutImg}
          title="We have been improving our product"
          span={"for many years."}
          content=" A good example of a paragraph contains a topic sentence, details
              and a conclusion.There are many different kinds of animals that
            live in the wild."
          btn="Get Started"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col md:flex-row-reverse justify-between items-center gap-8"
      >
        <AboutComponent
          img={aboutImg2}
          title="You can Practice at any"
          span="time convinent for you."
          content="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in the wild."
          btn="Get Started"
        />
      </motion.div>
    </div>
  )
}

export default About
