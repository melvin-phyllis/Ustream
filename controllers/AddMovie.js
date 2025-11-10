import axios from "axios"

const AddMovie = async (e, movie, updateMovieList,formRef) => {
    try {
        e?.preventDefault()

        const id = JSON.parse(localStorage.getItem('user'))?.id || null
        if (!id) return
        console.log(movie)


        const req = await axios.post(`${import.meta.env.VITE_DATABASE_URL}/Movies/${id}.json`, movie)

        updateMovieList({ id: req?.data.name, ...movie })

        formRef?.current?.reset()

    } catch (error) {
        console.log(error)

    }
}

export default AddMovie
