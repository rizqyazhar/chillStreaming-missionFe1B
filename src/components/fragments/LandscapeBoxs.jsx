import LandscapeBox from "../elements/landscapeBox/LandscapeBox"
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import landscape from "../../landscape.json"


const LandscapeBoxs = ({ title }) => {
  return (
    <div className="w-full flex flex-col gap-6 py-10">
        <div className="w-7xl mx-auto flex justify-start">
            <h3 className="font-lato font-bold text-[32px] text-white cursor-default">{ title }</h3>
        </div>
        <div className="relative w-7xl mx-auto grid grid-cols-[repeat(4,minmax(95px,302px))] gap-x-6">
            <div className="absolute -left-[22px] top-[60px] w-11 h-11 flex justify-center items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer">
              <FaArrowLeft className="text-lg text-white "/>
            </div>
            {landscape.map((l, index) => (
              index < 4 && <LandscapeBox key={l.id} src={l.img} />
            ))}
            <div className="absolute -right-[22px] top-[60px] w-11 h-11 flex justify-center items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer">
              <FaArrowRight className="text-lg text-white"/>
            </div>
        </div>
    </div>
  )
}

export default LandscapeBoxs