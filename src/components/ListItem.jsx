import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItem = ( { content, iconImg } ) => {
  return (
    <li className='flex mb-4 items-center'>
      <FontAwesomeIcon icon={iconImg} className='text-earth-green text-[30px] mr-4' />
      <p className='inline font-montserrat text-[18px] italic text-slate-gray'>{content}</p>
    </li>
  )
}

export default ListItem