import { aboutUs } from "../assets/images"
import ListItem from "../components/ListItem"
import { faCircleCheck, faPaw } from "@fortawesome/free-solid-svg-icons"
import TitleHeader from "../components/TitleHeader"

const AboutUs = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-12 w-full max-container"> 
      <div className="flex flex-col">
        <TitleHeader subheader={"About Us"} title={"About KW PetSitting"} iconImg={faPaw} />
        <p className="para sm:max-w-xl break-normal">
          Hey there!
          I’m Sarah, and animals have been my lifelong joy. Having grown up surrounded by them, I’ve forged strong connections and a deep understanding of their needs.
          <p>
          <br></br>
           Each dog I care for isn’t just a pet; they’re a special individual with their own quirks and needs. When your furry friend stays with me, they become family. I take pride in providing a second home filled with love and safety.
          My customers have left glowing reviews about the care their pets receive—I’d love to extend that same care to your beloved pet too!
          </p>
        </p>
        <ul className="mt-5 flex flex-col justify-center">
            <ListItem iconImg={faCircleCheck} content={"Insured & bonded – Background checks for your peace of mind."} />
            <ListItem iconImg={faCircleCheck} content={"Trustyworthy - Prioritizing safety, comfort and reliability."} />
            <ListItem iconImg={faCircleCheck} content={"Flexible scheduling to accommodate for different routines and requirements"} />
        </ul>
      </div>
      <div className="w-1/2">
        <img src={aboutUs}
        alt="kitchener pet sitting"
        />
      </div>
    </section>
  )
}

export default AboutUs