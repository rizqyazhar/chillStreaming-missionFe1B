const Footer = () => {
  return (
    <footer className="max-w-screen border-t border-bodyBackground bg-pageHeaderBackground h-[284px] px-20 py-[60px] font-lato text-white grid grid-cols-3">
        <div className="flex flex-col gap-[26px] justify-center">
            <div>
                <img src="/logo/chill-logo.svg"/>
            </div>
            <p className="text-poppins">@2023 Chill All Rights Reserved.</p>
        </div>
        <div className="col-start-2 col-end-4 grid grid-cols-4">
            <div className="col-start-1 col-end-4 flex flex-col gap-[15px]">
                <h4 className="font-bold tracking-[.2px] cursor-default">Genre</h4>
                <div className="grid grid-cols-[repeat(4,max-content)] gap-x-7 gap-y-2.5 tracking-[.2px]">
                    <a href="">Aksi</a>
                    <a href="">Drama</a>
                    <a href="">Komedi</a>
                    <a href="">Sains & Alam</a>
                    <a href="">Anak-anak</a>
                    <a href="">Fantasi Ilmiah & Fantasi</a>
                    <a href="">Petualangan</a>
                    <a href="">Thriller</a>
                    <a href="">Anime</a>
                    <a href="">Kejahatan</a>
                    <a href="">Perang</a>
                    <a href="">Britania</a>
                    <a href="">KDrama</a>
                    <a href="">Romantis</a>
                </div>
            </div>
            <div className="col-start-4 col-end-5 flex flex-col gap-[15px]">
                <h4 className="font-bold tracking-[.2px] cursor-default">Bantuan</h4>
                <div className="grid grid-rows-4 gap-2.5 font-medium">
                    <a href="">FAQ</a>
                    <a href="">Kontak Kami</a>
                    <a href="">Privasi</a>
                    <a href="">Syarat & Ketentuan</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer