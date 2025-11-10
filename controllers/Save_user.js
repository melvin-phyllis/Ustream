import axios from "axios"

const Save_user = async (body) => {
    try {

        
        sessionStorage.setItem("UserStatus", "online")

        if (!body?.username) {

            await axios.patch(`${import.meta.env.VITE_DATABASE_URL}/Users/${body?.id}.json`, body)
            return ({ message: "utilisateur enregistrer" })
        }



        await axios.put(`${import.meta.env.VITE_DATABASE_URL}/Users/${body?.id}.json`, body)

        return ({ message: "utilisateur enregistrer" })

    } catch (error) {
        console.log(error)
        return ({ message: "une erreur c'est produite" })
    }
}

export default Save_user
