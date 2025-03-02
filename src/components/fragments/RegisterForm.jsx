import CompleteInput from "../elements/input/CompleteInput"
import CompleteButtonForm from "../elements/button/CompleteButtonForm"
import AuthLayout from "../layouts/AuthLayout"
import { BiSolidHide } from "react-icons/bi"

const RegisterForm = () => {
  return (
    <AuthLayout title="Daftar" subTitle="Selamat Datang!" >
        <CompleteInput 
            id="username" 
            type="text" 
            placeholder="Masukkan username" 
            htmlFor="username" 
            labelText="Username" 
        />
        <CompleteInput 
            id="password" 
            type="password" 
            placeholder="Masukkan kata sandi" 
            htmlFor="password" 
            labelText="Kata Sandi" 
        >
            <BiSolidHide 
                className="absolute top-[50px] right-5 text-2xl text-light-disabled cursor-pointer" 
            />
        </CompleteInput>
        <CompleteInput 
            id="passwordConfirm" 
            type="password" 
            placeholder="Masukkan kata sandi" 
            htmlFor="passwordConfirm" 
            labelText="Konfirmasi Kata Sandi" 
        >
            <BiSolidHide 
                className="absolute top-[50px] right-5 text-2xl text-light-disabled cursor-pointer" 
            />
            <div className="w-full flex justify-between font-lato mt-1.5">
                <p className="text-light-secondary text-base tracking-[.2px] cursor-default">Sudah punya akun? <a className="text-white text-sm cursor-pointer">Masuk</a></p>
            </div>
        </CompleteInput>
        <CompleteButtonForm pathLink="/home" />
    </AuthLayout>
  )
}

export default RegisterForm