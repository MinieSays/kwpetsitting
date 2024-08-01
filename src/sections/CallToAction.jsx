import Button from "../components/Button"

const CallToAction = () => {
  return (
    <section id="callToAction" className=" bg-earth-brown bg-opacity-70" >
      <div className="flex items-center justify-around max-lg:flex-col max-container w-full ">
        <div className="p-12 max-lg:text-center">
          <h3 className="text-5xl font-semibold font-roboto mb-4 max-lg:text-2xl">
            Not Sure If We're For You?
          </h3>
          <p className="font-montserrat text-2xl max-lg:text-xl">
            Book a free meet to test out the waters!
          </p>
        </div>
        <div className="max-lg:pb-12">
          <Button label={'Book Now!'} />
        </div>
      </div>
    </section>
  )
}

export default CallToAction