import { heroImg } from "../assets/images"
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
// w-full flex xl:flex-row flex-col justify-center min-h-screen  p-2 gap-10 max-container

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen  p-2 gap-10 max-container">

      <div className="relative xl-w-2/5 flex flex-col justify-center items-center text-center w-full max-xl:padding-x max-sm:mt-[70px] bg-[../assets/images/group-dog-walking-scaled.jpg]">
        <p className="text-xl font-bold font-montserrat text-earth-green">Kitchener & Waterloo</p>
        <h1 className="text-6xl font-bold font-roboto my-6 max-sm:text-[30px] max-md:text-[40px] max-lg:text-[50px]
        ">
          Dog Walking & <span className="text-earth-green xl:whitespace-nowrap">Pet Sitting</span>
          </h1>
        <p className="text-lg font-montserrat text-slate-gray leading-8 mb-6 md:max-w-sm">Keep your pets healthy and happy when you’re busy or away on vacation!</p>
        <img src="" alt="" />
        <p className="text-lg font-montserrat text-slate-gray mb-4">Book a free meet & greet today</p>
        <Button label={"Free Meet & Green"} iconURL={arrowRight} />
      </div>
        <img src={heroImg}
        width={800}
         alt="" />
    </section>
  )
}

export default Hero