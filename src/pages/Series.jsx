import HomeLayout from "../components/layouts/HomeLayout"
import LandscapeBoxs from "../components/fragments/LandscapeBoxs"
import PotraitBoxs from "../components/fragments/PotraitBoxs"
import Header from "../components/fragments/Header"
import Genre from "../components/elements/Genres/genre"
import Main from "../components/fragments/Main"

const Series = () => {
  return (
    <HomeLayout>
      <Header>
        <Genre />
      </Header>
      <Main>
        <LandscapeBoxs title="Melanjutkan Tonton Series" />
        <PotraitBoxs title="Series Persembahan Chill" />
        <PotraitBoxs title="Top Rating Series Hari Ini" />
        <PotraitBoxs title="Series Tranding" />
        <PotraitBoxs title="Rilis Baru" />
      </Main>    
    </HomeLayout>
  )
}

export default Series