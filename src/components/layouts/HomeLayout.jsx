import Navbar from "../fragments/Navbar"
import Footer from "../fragments/Footer"

const HomeLayout = ({ children }) => {
  return (
    <>
        <Navbar />
          {children}
        <Footer />
    </>
  )
}

export default HomeLayout