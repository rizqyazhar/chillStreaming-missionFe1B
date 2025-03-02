import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "./components/layouts/HomeLayout"
import Login from "./pages/Login"
import Register from "./pages/register"
import MyList from "./pages/MyList"
import Series from "./pages/Series"
import Films from "./pages/Films"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<HomeLayout/>} />
        <Route path="/mylist" element={<MyList/>} />
        <Route path="/series" element={<Series/>} />
        <Route path="/films" element={<Films/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App