const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "A common form of lorem ipsum reads: Lorem impum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        "A common form of lorem ipsum reads: Lorem impum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        "A common form of lorem ipsum reads: Lorem impum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10">
      <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
        Here aer all our plans
      </h2>
      <div className="text-tartiary md:w-1/3 mx-auto px-4">
        <p>
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
      </div>

      {/* toggle pricing */}
      <div className="mt-16">
        <label
          htmlFor="toggle"
          className="inline-flex items-center cursor-pointer"
        >
          <span className="mr-8 text-2xl font-semibold">Monthly</span>
        </label>
      </div>
    </div>
  )
}

export default Pricing
