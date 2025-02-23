import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoVolumeMuteSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="relative min-w-screen flex justify-center items-end">
        <div className="w-full">
            <img src="/img/landscape/img-38.svg" className="w-full object-cover"/> 
        </div>
        <div className="absolute w-7xl mb-20 flex flex-col gap-10 font-lato text-white">
          <div className="w-[668px] h-[148px] flex flex-col justify-between">
            <h3 className="font-bold text-5xl">Duty After School</h3>
            <p className="text-lg">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
          </div>
          <div className="flex justify-between">
              <div className="flex gap-2.5">
                <button className="w-[93px] h-[45px] font-bold text-base bg-primary-300 rounded-full cursor-pointer">Mulai</button>
                <button className="flex justify-center gap-2 rounded-full items-center font-bold tracking-wide w-[185px] h-[45px] bg-paperBackground cursor-pointer">
                  <span><IoMdInformationCircleOutline className="text-2xl" /></span>Selengkapnya
                </button>
                <span className="w-[52px] h-[45px] flex justify-center items-center border border-light-secondary rounded-full text-lg cursor-default">18 +</span>
              </div>
              <div>
                <button className="w-11 h-11 rounded-full border border-light-secondary flex justify-center items-center cursor-pointer">
                  <IoVolumeMuteSharp />
                </button>
              </div>
          </div>
        </div>
    </header>
  )
}

export default Header