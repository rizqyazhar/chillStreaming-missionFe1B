import { MdKeyboardArrowDown } from "react-icons/md"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className="max-w-screen px-5 py-1.5 md:px-10 md:py-6 bg-pageHeaderBackground flex justify-between">
            <div className="flex items-center gap-3 md:gap-20">
              <Link to="/home">
                <picture>
                  <source srcSet="/logo/chill-logo.svg" media="(min-width: 768px)"/>
                  <img 
                    src="/logo/mobile-chilllogo.svg"
                    className="w-full" 
                  />
                </picture>
              </Link>
              <div className="font-lato font-medium text-[10px] md:text-lg tracking-[.2px] text-white flex gap-3 md:gap-20">
                <Link to="/series">Series</Link>
                <Link to="/films">Film</Link>
                <Link to="/mylist">Daftar Saya</Link>
              </div>
            </div>
            <div className="flex gap-1 md:gap-2 items-center">
              <img src="/public/img/icon/avatar.svg" className="w-5 md:w-10"/>
              <a href="">
                  <MdKeyboardArrowDown className="text-base md:text-3xl text-white"/> 
              </a>
            </div>
        </nav>
    </>
  )
}

export default Navbar