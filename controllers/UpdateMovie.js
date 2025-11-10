import axios from "axios"

const UpdateMovie = async (e, id, movie, formRef, updateMovie) => {

    try {

        e?.preventDefault()

        const userID = JSON.parse(localStorage.getItem("user"))?.id || null

        if (!userID) return
        await axios.patch(`${import.meta.env.VITE_DATABASE_URL}/Movies/${userID}/${id}.json`, movie)


        updateMovie(id, movie)

        formRef?.current?.reset()
    } catch (error) {

        console.log(error)
    }

}

export default UpdateMovie
