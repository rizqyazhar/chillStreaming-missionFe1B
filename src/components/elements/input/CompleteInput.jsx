import Input from "./Input"
import Label from "./Label"

const CompleteInput = ({ id, type, placeholder, htmlFor, labelText, children }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor={htmlFor} labelText={labelText}/>
        <Input id={id} type={type} placeholder={placeholder}/>
        <>{children}</>
    </div>
  )
}

export default CompleteInput