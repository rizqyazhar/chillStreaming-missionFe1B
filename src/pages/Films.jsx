import Footer from "../components/fragments/Footer"
import Navbar from "../components/fragments/Navbar"
import LandscapeBoxs from "../components/fragments/LandscapeBoxs"
import PotraitBoxs from "../components/fragments/PotraitBoxs"
import Header from "../components/fragments/Header"
import Genre from "../components/elements/Genres/genre"

const Films = () => {
  return (
    <>
        <Navbar />
        <Header>
            <Genre />
        </Header>
        <main className="max-w-screen bg-pageHeaderBackground pb-20">
            <LandscapeBoxs title="Melanjutkan Tonton Film" />
            <PotraitBoxs title="Film Persembahan Chill" />
            <PotraitBoxs title="Top Rating Film Hari Ini" />
            <PotraitBoxs title="Film Tranding" />
            <PotraitBoxs title="Rilis Baru" />
        </main>    
        <Footer />
    </>
  )
}

export default Films