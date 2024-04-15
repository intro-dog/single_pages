import featureImg from "../../public/article.png"
import FeaturesArticle from "../shared/FeaturesArticle"

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
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
        </div>

        {/* features list */}
        <div className="w-full lg:w-3/4">
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
