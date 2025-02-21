import CompleteInput from "../elements/input/CompleteInput"
import CompleteButtonForm from "../elements/button/CompleteButtonForm"
import AuthLayout from "../layouts/AuthLayout"

const LoginForm = () => {
  return (
    <AuthLayout title="Masuk" subTitle="Selamat Datang Kembali!">
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
            <div className="w-full flex justify-between font-lato mt-1.5">
                <p className="text-light-secondary text-base tracking-[.2px] cursor-default">Belum punya akun? <a className="text-white text-sm cursor-pointer">Daftar</a></p>
                <p className="text-white text-base cursor-pointer"><a to="">Lupa kata sandi?</a></p>
            </div>
        </CompleteInput>
        <CompleteButtonForm />
    </AuthLayout>
  )
}

export default LoginForm