import PotraitBox from "../elements/potraitBox/PotraitBox"
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import potrait from "../../potrait.json"


const PotraitBoxs = ({ title }) => {
  return (
    <div className="flex flex-col gap-8 py-10">
        <div className="w-7xl mx-auto flex justify-start">
            <h3 className="font-lato font-bold text-[32px] text-white cursor-default">{title}</h3>
        </div>
        <div className="relative w-7xl mx-auto grid grid-cols-[repeat(5,minmax(95px,234px))] gap-x-7">
          <div className="absolute -left-[22px] top-40 w-11 h-11 flex justify-center items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer">
            <FaArrowLeft className="text-lg text-white "/>
          </div>
          {potrait.map((l, index) => (
              index < 5 && <PotraitBox key={l.id} src={l.img} />
            ))}
          <div className="absolute -right-[22px] top-40 w-11 h-11 flex justify-center items-center rounded-full border border-outlineBorder bg-bodyBackground cursor-pointer">
            <FaArrowRight className="text-lg text-white"/>
          </div>
        </div>
    </div>
  )
}

export default PotraitBoxs