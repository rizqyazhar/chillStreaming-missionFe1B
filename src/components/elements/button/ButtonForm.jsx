import { Link } from "react-router-dom"

const ButtonForm = ({ text, pathLink }) => {
  return (
    <Link 
        to={ pathLink }
        className="w-full px-3 md:px-5 py-2 md:py-3.5 flex justify-center items-center bg-extraBackground opacity-100 text-white border border-outlineBorder tracking-[.2px] font-lato font-[600] text-[10px] md:text-[16px] rounded-3xl cursor-pointer"
    >
        {text}
    </Link>
  )
}

export default ButtonForm