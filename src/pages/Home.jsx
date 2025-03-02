import HomeLayout from "../components/layouts/HomeLayout"
import Header from "../components/fragments/Header"
import Main from "../components/fragments/Main"
import LandscapeBoxs from "../components/fragments/LandscapeBoxs"
import PotraitBoxs from "../components/fragments/PotraitBoxs"

const Home = () => {
  return (
    <HomeLayout>
        <Header />
        <Main>
            <LandscapeBoxs title="Melanjutkan Tonton Film" />
            <PotraitBoxs title="Top Rating Film dan Series Hari ini" />
            <PotraitBoxs title="Film Trending" />
            <PotraitBoxs title="Rilis Baru" />
        </Main>
    </HomeLayout>
  )
}

export default Home