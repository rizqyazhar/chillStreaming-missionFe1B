import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import GenreList from "./GenreList"

const Genre = () => {
  return (
    <div className="relative flex justify-center items-center gap-2 w-28 h-11 rounded-lg mb-24 bg-paperBackground cursor-pointer">
        <p className="font-bold tracking-[.2px]">Genre</p>
        <MdOutlineKeyboardArrowDown className="text-xs w-6 h-6"/>
        <GenreList />
    </div>
  )
}

export default Genre