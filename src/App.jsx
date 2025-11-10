import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShowDetailsMovie from "../components/ShowDetailsMovie"
import Backoffice from "./page/Backoffice"
import Landing from "./page/Landing"
import Login from "./page/Login"
import Movies from "./page/Movies"
import Signup from "./page/Signup"

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <ShowDetailsMovie />
    </BrowserRouter>

  )
}

export default App
