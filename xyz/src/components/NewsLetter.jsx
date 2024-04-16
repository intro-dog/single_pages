import img from "../../public/hero.png"
import Banner from "./../shared/Banner"
const NewsLetter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      {/* use our banner and pass props */}

      <Banner
        banner={img}
        heading={"Each student an share their code for friends"}
        subheading={
          "A simple paragraph is comprised of three major components."
        }
        btn1={"I have a code"}
        btn2={"Discount"}
      />
    </div>
  )
}

export default NewsLetter
