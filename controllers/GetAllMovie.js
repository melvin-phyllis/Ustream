import axios from "axios"

const GetAllMovie = async (setMovieList) => {
    try {


        const id = JSON.parse(localStorage.getItem("user"))?.id || null

     

        const req = await axios.get(`${import.meta.env.VITE_DATABASE_URL}/Movies/${id}.json`)

        if (!req?.data) return alert("Ajouter Des fils et Serie")

        const movieList = Object.keys(req.data).map(key => ({ id: key, ...req.data[key] }))



        setMovieList(movieList)


    } catch (error) {
        console.log(error)
    }
}

export default GetAllMovie
