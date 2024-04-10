import './App.css'
import Sign from './components/Signup/Sign'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import SingleMovieDetail from "./pages/SingleMovieDetail";
import {Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"


const user = localStorage.getItem("token");
const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    {user && <Route path="/" exact element={<Main />} />}
    <Route path='/signup' element={<Sign/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/" element={<Navigate replace to="/login" />} />
    <Route path="/detail/:imdbid" element = {<SingleMovieDetail/>}/>
  </Route>
))
function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
