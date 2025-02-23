const LandscapeBox = ({ src }) => {
    return (
      <div className="w-[302px] h-[162px] cursor-pointer">
          <img src={src} className="w-full h-full object-cover object-center rounded-lg" />
      </div>
    )
  }
  
  export default LandscapeBox