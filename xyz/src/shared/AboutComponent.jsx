const AboutComponent = ({ img, title, span, content, btn }) => {
  return (
    <>
      <div className="md:w-1/2">
        <img src={img} alt="about" />
      </div>

      {/* about content */}
      <div className="md:w-2/5">
        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
          {title} <span className="text-secondary">{span}</span>
        </h2>
        <div className="text-tartiary text-lg mb-7">
          <p>{content}</p>
        </div>
        <button className="btnPrimary capitalize">{btn}</button>
      </div>
    </>
  )
}

export default AboutComponent
