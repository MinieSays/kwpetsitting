
const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border
     font-montserrat bg-earth-green leading-nonehover:-translate-y-1 hover:scale-105
            hover:bg-green-600  duration-300 transition-all ease-in-out rounded-full ease-in-out text-white font-semibold">
      {label}
      {
        iconURL &&  <img src={iconURL} 
        alt="Right Icon"
        className="ml-2 rounded-full w-5 h-5" />
      }
    </button>
  )
}

export default Button