import { MdKeyboardArrowDown } from "react-icons/md"

const GenreTab = () => {
  return (
    <div className="flex items-center gap-0.5 cursor-pointer md:hidden">
        <span>Genre</span>
        <MdKeyboardArrowDown className="h-full"/>
    </div>
  )
}

export default GenreTab