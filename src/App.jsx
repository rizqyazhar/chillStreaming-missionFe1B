import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/register"
import MyList from "./pages/MyList"
import Series from "./pages/Series"
import Films from "./pages/Films"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {path: "/login", element: <Login/>},
  {path: "/register", element: <Register/>},
  {path: "/home", element: <Home/>},
  {path: "/mylist", element: <MyList/>},
  {path: "/series", element: <Series/>},
  {path: "/films", element: <Films/>}
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App