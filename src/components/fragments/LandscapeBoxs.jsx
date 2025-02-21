import LandscapeBox from "../elements/landscapeBox/LandscapeBox"

const LandscapeBoxs = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
        <div className="w-7xl mx-auto flex justify-start">
            <h3 className="font-lato font-bold text-[32px] text-black">Melanjutkan Tonton Film</h3>
        </div>
        <div className="w-7xl mx-auto grid grid-cols-[repeat(4,minmax(95px,302px))] gap-x-7">
            <LandscapeBox />
            <LandscapeBox />
            <LandscapeBox />
            <LandscapeBox />
        </div>
    </div>
  )
}

export default LandscapeBoxs