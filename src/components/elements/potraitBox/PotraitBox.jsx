const PotraitBox = ({ src }) => {
  return (
    <div className="w-[234px] h-[365px] cursor-pointer">
        <img src={src} className="w-full h-full object-cover object-center rounded-lg" />
    </div>
  )
}

export default PotraitBox