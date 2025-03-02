const AuthLayout = ({ title, subTitle, children, bgSrc }) => {
  return (
    <div className={`relative min-h-screen bg-[url('/img/bg-img/bg-${bgSrc}.jpg')] bg-cover bg-top flex justify-center items-center`}>
        <div className="absolute inset-0 bg-black/30"></div>
            <div className="container relative z-10 py-44 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[37px] rounded-2xl bg-pageHeaderBackground/85 w-[529px] p-10">
                <div>
                    <img src="/public/logo/chill-logo.svg"/>
                </div>

                <div className="flex flex-col justify-center items-center font-lato">
                    <h1 className="text-3xl font-bold text-white">{ title }</h1>
                    <p className="text-lg font-normal text-white tracking[.2px]">{ subTitle }</p>
                </div>
                <form className="w-full flex flex-col justify-center items-center gap-[37px]">
                    {children}
                </form>
            </div>
        </div>
    </div>

  )
}

export default AuthLayout