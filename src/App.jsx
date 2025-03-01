import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "./components/layouts/HomeLayout"
import Login from "./pages/Login"
import Register from "./pages/register"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<HomeLayout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App