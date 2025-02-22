import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
        <nav className="min-w-screen px-20 py-6 bg-pageHeaderBackground flex justify-between">
            <div className="flex items-center gap-20">
              <div>
                <img src="/public/logo/chill-logo.svg" className="w-[103.55px]" />
              </div>
              <div className="font-lato font-medium text-lg tracking-[.2px] text-white flex gap-20">
                <a href="">Series</a>
                <a href="">Film</a>
                <a href="">Daftar Saya</a>
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