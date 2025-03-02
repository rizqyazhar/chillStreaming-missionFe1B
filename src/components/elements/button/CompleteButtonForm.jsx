import ButtonForm from "./ButtonForm"
import ButtonFormGoogle from "./buttonFormGoogle"

const CompleteButtonForm = ({ pathLink }) => {
  return (
    <div className="w-full flex flex-col items-center">
        <ButtonForm text="Masuk" pathLink={pathLink} />
        <p className="font-lato tracking-[.2px] text-light-secondary text-[10px] md:text-sm my-2  cursor-default">Atau</p>
        <ButtonFormGoogle text="Masuk dengan Google" />
    </div>
  )
}

export default CompleteButtonForm