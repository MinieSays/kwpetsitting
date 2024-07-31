import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconThree = ( { iconImg, title, content } ) => {
  return (
      <div className='flex items-center justify-center flex-col text-center'>
        <div>
          <FontAwesomeIcon icon={iconImg} className="text-5xl text-white p-8
           bg-earth-green rounded-full hover:bg-green-600 
            duration-300 transition-all ease-in-out" />
        </div>
        <div className='w-1/2'>
        <h3 className="text-2xl font-semibold font-montserrat mt-4 mb-3">
          {title}
        </h3>
        </div>
        <p className='font-montserrat text-slate-gray w-[70%]'>
          {content}
        </p>
      </div>
  )
}

export default IconThree