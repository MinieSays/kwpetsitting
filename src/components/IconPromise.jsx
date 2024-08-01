import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const IconPromise = ({ iconTitle, content, iconImg }) => {
  return (
    <div className="flex max-md:w-full max-lg:w-4/5 mt-6 gap-6">
        <div className="flex">
        <FontAwesomeIcon icon={iconImg} className="text-5xl text-earth-green mr-4" />
        </div>
        <div>
        <p className="max-md:text-md text-xl font-semibold">{iconTitle}</p>
        <p className="max-md:text-sm text-slate-gray text-md">{content}</p>
        </div>
    </div>
  )
}

export default IconPromise