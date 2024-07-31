import IconThree from '../components/IconThree'
import { faDog, faBriefcaseMedical, faCat, faHouse } from '@fortawesome/free-solid-svg-icons'

const Icons = () => {
  return (
    <section id="icons">
        <div className="max-container">
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-4">
            <IconThree iconImg={faBriefcaseMedical} title={"Medication & CPR"} content={"Tailored dog walks, in groups or one-on-one, focusing on fun and safety."} />
            <IconThree iconImg={faCat} title={"Cats & Small Animals"}
            content={'Specialized care for your cats and small pets, creating a safe, cozy, and loving environment.'} />
            <IconThree iconImg={faDog} title={"Group & Private Walk"} content={"Tailored dog walks, in groups or one-on-one, focusing on fun, safety, and health!"} />
            <IconThree iconImg={faHouse} title={"Boarding & Housesitting"} content={"Reliable boarding and attentive house sitting—ensuring your pets feel at home and giving you peace of mind."} />
          </div>
        </div>
    </section>
  )
}

export default Icons