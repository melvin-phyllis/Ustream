import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import Update_Status from "./Update_Status"

const Logout = async () => {
    try {

        if (typeof window !== "undefined") {
            const userLocal = localStorage.getItem("user")
            const user = userLocal ? JSON.parse(userLocal)?.id : null
            console.log('user', user)
            const data = await Update_Status(user, { status: "offline" })

            if (data?.message == "Deconnexion reussi") {

                await signOut(auth)

                localStorage.removeItem("user")
                sessionStorage.removeItem("user")

                location.href ="/"
            }
        }


    } catch (error) {

        console.log(error)
    }
}

export default Logout
