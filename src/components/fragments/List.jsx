import potrait from "../../potrait.json"
import PotraitBox from "../elements/potraitBox/PotraitBox"

const List = ({ title }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 pt-5 pb-10 md:py-20 bg-pageHeaderBackground">
        <div className="w-full px-5 flex justify-start">
            <h3 className="font-lato font-bold text-xl md:text-[32px] text-white cursor-default">{title}</h3>
        </div>
        <div className="w-full px-5 grid grid-cols-3 gap-4 md:grid-cols-[repeat(6,minmax(95px,200px))] md:gap-x-4 md:gap-y-8">
          {potrait.map((l, index) => (
              index < 12 && <PotraitBox key={l.id} src={l.img} width="[95px]" height="[145px]" md:width="[200px]" md:height="[300px]" />
            ))}
        </div>
    </div>
  )
}

export default List