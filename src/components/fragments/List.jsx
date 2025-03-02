import potrait from "../../potrait.json"
import PotraitBox from "../elements/potraitBox/PotraitBox"

const List = ({ title }) => {
  return (
    <div className="flex flex-col gap-8 py-20 bg-pageHeaderBackground">
        <div className="w-7xl mx-auto flex justify-start">
            <h3 className="font-lato font-bold text-[32px] text-white cursor-default">{title}</h3>
        </div>
        <div className="w-7xl mx-auto grid grid-cols-[repeat(6,minmax(95px,200px))] gap-x-4 gap-y-8">
          {potrait.map((l, index) => (
              index < 12 && <PotraitBox key={l.id} src={l.img} width="[200px]" height="[300px]" />
            ))}
        </div>
    </div>
  )
}

export default List