import LandscapeBox from "../elements/landscapeBox/LandscapeBox"
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import landscape from "../../landscape.json"


const LandscapeBoxs = ({ title }) => {
  return (
    <div className="relative w-full flex flex-col gap-5 md:gap-6 py-5 md:py-10">
        <div className="w-full px-5 md:px-10 flex justify-start">
            <h3 className="font-lato font-bold text-xl md:text-[32px] text-white cursor-default">{ title }</h3>
        </div>
        <div className="absolute left-4 bottom-[99px] w-11 h-11 hidden md:flex md:justify-center md:items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer">
          <FaArrowLeft className="text-lg text-white "/>
        </div>
        <div className="absolute right-4 bottom-[99px] w-11 h-11 hidden md:flex md:justify-center md:items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer">
          <FaArrowRight className="text-lg text-white"/>
        </div>
        <div className="w-full h-40 px-5 md:px-10 grid grid-cols-[repeat(4,minmax(95px,309px))] grid-rows-1 md:grid-cols-[repeat(4,minmax(95px,302px))] gap-x-56 md:gap-x-6 overflow-x-auto md:overflow-visible">
            {landscape.map((l, index) => (
              index < 4 && <LandscapeBox key={l.id} src={l.img} />
            ))}
        </div>
    </div>
  )
}

export default LandscapeBoxs