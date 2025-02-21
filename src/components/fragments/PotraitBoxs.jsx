import PotraitBox from "../elements/PotraitBox"

const PotraitBoxs = () => {
  return (
    <div className="flex flex-col gap-8 py-10">
        <div className="w-7xl mx-auto flex justify-start">
            <h3 className="font-lato font-bold text-[32px] text-black">Film Trending</h3>
        </div>
        <div className="w-7xl mx-auto grid grid-cols-[repeat(5,minmax(95px,234px))] gap-x-7">
            <PotraitBox />
            <PotraitBox />
            <PotraitBox />
            <PotraitBox />
            <PotraitBox />
        </div>
    </div>
  )
}

export default PotraitBoxs