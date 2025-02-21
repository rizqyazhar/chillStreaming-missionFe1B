const ButtonForm = ({ text }) => {
  return (
    <button 
        className="w-full px-5 py-3.5 bg-extraBackground opacity-100 text-white border border-outlineBorder tracking-[.2px] font-lato font-[600] text-[16px] rounded-3xl cursor-pointer"
    >
        {text}
    </button>
  )
}

export default ButtonForm