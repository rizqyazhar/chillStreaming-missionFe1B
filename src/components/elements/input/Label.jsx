const Label = ({ htmlFor, labelText }) => {
  return (
    <label 
        htmlFor={htmlFor} 
        className="font-lato font-medium text-lg text-white tracking-[.2px]"
        >{labelText}
    </label>
  )
}

export default Label