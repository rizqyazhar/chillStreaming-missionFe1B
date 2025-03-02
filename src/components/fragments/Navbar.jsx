import { MdKeyboardArrowDown } from "react-icons/md"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className="max-w-screen px-20 py-6 bg-pageHeaderBackground flex justify-between">
            <div className="flex items-center gap-20">
              <Link to="/home">
                <img src="/logo/chill-logo.svg" className="w-[103.55px]" />
              </Link>
              <div className="font-lato font-medium text-lg tracking-[.2px] text-white flex gap-20">
                <Link to="/series">Series</Link>
                <Link to="/films">Film</Link>
                <Link to="/mylist">Daftar Saya</Link>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/public/img/icon/avatar.svg" className="max-w-10"/>
              <a href="">
                  <MdKeyboardArrowDown className="text-3xl text-white"/> 
              </a>
            </div>
        </nav>
    </>
  )
}

export default Navbar