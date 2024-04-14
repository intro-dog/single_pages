import { ServicesData } from "../../data/ServicesData"

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 data-aos="fade-up" className="text-3xl font-bold text-dark">
          Fresh and <span className="text-primary">Tasty Fruits</span>{" "}
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm opacity-50"
        >
          <p>
            Fruits are rich in vitamin C and other nutrients. They are good for
            your skin and help in boosting your immune system.
          </p>
        </div>
      </div>

      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ServicesData.map(({ id, image, title, subtitle, aosDelay }) => (
          <div
            className="p-4 text-center space-y-6"
            key={id}
            data-aos="fade-up"
            data-aos-delay={aosDelay}
          >
            <img
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
              src={image}
              alt={title}
            />
            <div className="space-y-2">
              <h2 className="text-3xl text-center font-bold text-primary">
                {title}
              </h2>
              <div className="text-center text-sm text-dark">
                <p>{subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
