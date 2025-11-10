import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Bounce, ToastContainer } from "react-toastify"
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </BrowserRouter>

  )
}

export default App
