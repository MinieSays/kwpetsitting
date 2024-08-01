import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const TitleHeader = ( {subheader, title, iconImg} ) => {
  return (
    <div className="flex justify-center flex-col max-md:items-center">
      <h3 className="max-md:text-md text-xl font-montserrat text-earth-green flex ">
       <div>
        <FontAwesomeIcon icon={iconImg} className="mr-4" /> 
        </div>
       {subheader}
      </h3>
        <h1 className="text-6xl font-roboto font-semibold max-sm:text-[32px]
         max-md:text-[32px] max-sm:leading-[82px] mb-4">{title}</h1>
    </div>
  )
}

export default TitleHeader