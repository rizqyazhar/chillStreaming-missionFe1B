const ButtonFormGoogle = ({ text }) => {
  return (
    <button 
        className="w-full px-3 md:px-5 py-2 md:py-3.5 flex justify-center items-center gap-3 md:gap-5 bg-transparent text-white border border-outlineBorder tracking-[.2px] font-lato font-[600] text-[10px] md:text-[16px] rounded-3xl cursor-pointer"
    >
      <img 
        src="/logo/google-icon.svg" 
        className="w-2.5 md:w-[18px]"
      />
      <span 
        className="tracking-[.2px] text-white font-lato font-[600]"
      >
        {text}
      </span>
    </button>
  )
}

export default ButtonFormGoogle