const ButtonFormGoogle = ({ text }) => {
  return (
    <button 
        className="w-full px-5 py-3.5 flex justify-center items-center gap-5 bg-transparent text-white border border-outlineBorder tracking-[.2px] font-lato font-[600] text-[16px] rounded-3xl cursor-pointer"
    >
      <img 
        src="/public/logo/google-icon.svg" 
        className="w-[18px]"
      />
      <span 
        className="tracking-[.2px] text-white font-lato font-[600] text-[16px]"
      >
        {text}
      </span>
    </button>
  )
}

export default ButtonFormGoogle