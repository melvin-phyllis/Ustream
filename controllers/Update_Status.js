import axios from "axios"


const Update_Status = async (id, status) => {
    try {
        
        const req = await axios.patch(`${import.meta.env.VITE_DATABASE_URL}/Users/${id}.json`, status)



        return ({ message: "Deconnexion reussi" })

    } catch (error) {
        console.log(error)

        return ({ message: "une erreru c'est produite" })
    }
}

export default Update_Status
