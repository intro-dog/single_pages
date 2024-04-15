const FeaturesArticle = ({ img, title }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
      <div>
        <img src={img} alt="feature" />
        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
          {title}
        </h5>
      </div>
    </div>
  )
}

export default FeaturesArticle
