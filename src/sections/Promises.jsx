import { aboutUs } from "../assets/images"
import { faShield, faStar, faKitMedical, faPaw  } from "@fortawesome/free-solid-svg-icons"
import TitleHeader from "../components/TitleHeader"
import IconPromise from "../components/IconPromise"

const Promises = () => {
  return (
    <section id="about-us" className="flex justify-between items-center  max-lg:flex-col-reverse gap-12 w-full max-container "> 
      <div className="w-1/2">
        <img src={aboutUs}
        alt="kitchener pet sitting"
        />
      </div>
      <div className="flex flex-col w-1/2 max-lg:w-3/4">
        <TitleHeader subheader={"About Us"} title={"Our Promise To You"} iconImg={faPaw} />
        <p className="para sm:max-w-xl break-normal">
          We provide dependable and compassionate pet care services, treating your pets as part of our family.
        </p>
        <div className="">
            <IconPromise key={"event"} iconTitle={"Certified in Pet First Aid & CPR"}
            content={"Trained and certified in Pet First Aid & CPR techniques, equipped to handle emergency situations and provide immediate care for your pet’s well-being."}
            iconImg={faKitMedical} />
            <IconPromise key={"event"} iconTitle={"Insured and Bonded"}
            content={"Our services guarantees financial protection and trust, securing the safety of your pets, and your home."}
            iconImg={faShield} />
            <IconPromise key={"event"} iconTitle={"5-Star Rave Reviews"}
            content={"We take pride in providing the best care for you and your furry friend."}
            iconImg={faStar} />
        </div>
      </div>
    </section>
  )
}

export default Promises