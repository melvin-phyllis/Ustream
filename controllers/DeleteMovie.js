import axios from "axios"

const DeleteMovie = async (id, MovieList, setMovieList) => {
    try {

        console.log(id)

        const userLocal = localStorage.getItem("user")

        const userID = userLocal ? JSON.parse(userLocal)?.id : null

        if (!userID) return alert("impossible de supprimer l'element")

        await axios.delete(`${import.meta.env.VITE_DATABASE_URL}/Movies/${userID}/${id}.json`)

        const Array = MovieList?.filter(item => item?.id !== id)

        setMovieList(Array)


    } catch (error) {
        console.log(error)
    }
}

export default DeleteMovie
