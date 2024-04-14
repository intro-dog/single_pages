import bannerImg from "../../assets/website/banner.jpg"
import PlayStoreImg from "../../assets/website/play_store.png"
import AppStoreImg from "../../assets/website/app_store.png"

const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  with: "100%",
  height: "100%",
}

const AppBanner = () => {
  return (
    <>
      <div className="container my-14">
        <div
          style={bannerStyle}
          className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        >
          <div>
            <div data-aos="fade-up" className="space-y-6 max-w-xl mx-auto">
              <h2 className="tex-3xl text-center sm:text-4xl font-semibold">
                Download the app
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-center sm:px-20"
              >
                <p>
                  Get the best offers on your favorite products. Download the
                  app now!
                </p>
              </div>
              {/* images links */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex justify-center items-center gap-4"
              >
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="app store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppBanner
