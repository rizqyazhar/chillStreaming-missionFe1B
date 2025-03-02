import CompleteInput from "../elements/input/CompleteInput"
import CompleteButtonForm from "../elements/button/CompleteButtonForm"
import AuthLayout from "../layouts/AuthLayout"
import { BiSolidHide } from "react-icons/bi"

const LoginForm = () => {
  return (
    <AuthLayout title="Masuk" subTitle="Selamat Datang Kembali!" bgSrc="login" >
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
                className="absolute top-7 md:top-[50px] right-3 md:right-5 text-xs md:text-2xl text-light-disabled cursor-pointer" 
            />
            <div className="w-full flex justify-between font-lato mt-1.5">
                <p className="text-light-secondary text-[10px] md:text-base tracking-[.2px] cursor-default">Belum punya akun? <a className="text-white text-[10px] md:text-sm cursor-pointer">Daftar</a></p>
                <p className="text-white text-[10px] md:text-base cursor-pointer"><a to="">Lupa kata sandi?</a></p>
            </div>
        </CompleteInput>
        <CompleteButtonForm pathLink="/home" />
    </AuthLayout>
  )
}

export default LoginForm