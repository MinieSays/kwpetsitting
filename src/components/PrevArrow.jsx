import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const PrevArrow = () => {
  return (
    <div className='absolute left-0 top-[50%] -translate-x-12'>
        <div className="text-slate-300">
            <FontAwesomeIcon icon={faArrowLeft} className="text-2xl cursor-pointer" />
        </div>
    </div>
  )
}

export default PrevArrow