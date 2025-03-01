import PotraitBoxs from "./PotraitBoxs"
import LandscapeBoxs from "./LandscapeBoxs"

const Main = () => {
  return (
    <main className="max-w-screen bg-pageHeaderBackground pb-20">
        <LandscapeBoxs />
        <PotraitBoxs title="Top Rating Film dan Series Hari ini" />
        <PotraitBoxs title="Film Trending" />
        <PotraitBoxs title="Rilis Baru" />
    </main>    
  )
}

export default Main