import axios from "axios"

const updateStatus = async (id, updateMovie, MovieList, status) => {
    try {
        const userID = JSON.parse(localStorage.getItem("user"))?.id || null

        let info = ""
        if (status === "public") {
            info = "private"
        } else if (status === "private") {
            info = "public"
        }
        const movie = {
            id: id,
            status: info || "public"
        }


        await axios.patch(`${import.meta.env.VITE_DATABASE_URL}/Movies/${userID}/${id}.json`, movie)

        updateMovie(id, movie)

        console.log(MovieList)
    } catch (error) {

        console.log(error)
    }
}

export default updateStatus
