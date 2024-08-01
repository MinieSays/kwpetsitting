import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const NextArrow = ( { onClick }   ) => {
  return (
    <div className="absolute right-0 top-[50%] translate-x-12" onClick={onClick}>
        <div className="text-slate-300">
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl cursor-pointer" />
        </div>
    </div>
  )
}

export default NextArrow