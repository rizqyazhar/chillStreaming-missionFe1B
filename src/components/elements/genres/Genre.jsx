import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import GenreList from "./GenreList"
import { useState } from "react";

const Genre = () => {
  const [showGenre, setShowGenre] = useState(false);
  return (
    <div className="relative flex justify-center items-center gap-2 w-28 h-11 rounded-lg mb-24 bg-paperBackground cursor-pointer" onClick={ (e) => {
      e.preventDefault();
      setShowGenre(!showGenre)
      
      } }>
        <p className="font-bold tracking-[.2px]">Genre</p>
        <MdOutlineKeyboardArrowDown className="text-xs w-6 h-6"/>
        { showGenre && <GenreList /> }
    </div>
  )
}

export default Genre