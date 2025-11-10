import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import { TostifySucces } from "../Toast/Tostify"
import Update_Status from "./Update_Status"

const Logout = async () => {
    try {

        if (typeof window !== "undefined") {
            const userLocal = localStorage.getItem("user")
            const user = userLocal ? JSON.parse(userLocal)?.id : null

            const data = await Update_Status(user, { status: "offline" })

            if (data?.message == "Deconnexion reussi") {

                await signOut(auth)

                localStorage.removeItem("user")
                sessionStorage.removeItem("user")

                location.href = "/"
                TostifySucces("Deconnexion reussi")
            }
        }


    } catch (error) {

        console.log(error)
    }
}

export default Logout
