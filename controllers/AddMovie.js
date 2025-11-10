import axios from "axios"
import { TostifyError, TostifySucces } from "../Toast/Tostify"

const AddMovie = async (e, movie, updateMovieList, formRef, setLoad) => {
    try {

        setLoad(true)
        e?.preventDefault()

        const id = JSON.parse(localStorage.getItem('user'))?.id || null
        if (!id) return



        const req = await axios.post(`${import.meta.env.VITE_DATABASE_URL}/Movies/${id}.json`, movie)

        updateMovieList({ id: req?.data.name, ...movie })

        TostifySucces("Film Ajouter")
        formRef?.current?.reset()

    } catch (error) {
        console.log(error.message)
        TostifyError("Une erreru c'est produite")

    } finally {
        setLoad(false)
    }
}

export default AddMovie
