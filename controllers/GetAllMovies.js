import axios from "axios"

const GetAllMovies = async (url) => {
    try {
        const req = await axios.get(`${url}/Movies.json`)

        if (!req?.data) return []


        const allMovies = Object.values(req.data).flatMap(userMovies =>
            Object.entries(userMovies).map(([id, movie]) => ({
                id,
                ...movie
            }))
        )


        const Array = allMovies.filter(item => item?.status == "public")
        
        return Array

    } catch (error) {
        console.log(error)
        return []
    }
}

export default GetAllMovies
