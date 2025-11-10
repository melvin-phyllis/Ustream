import { signInWithPopup } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import Save_user from "./Save_user"

const LoginGoogle = async (navigate) => {
    try {

        const provider = new GoogleAuthProvider()
console.log(auth)
        const req = await signInWithPopup(auth, provider)
        const user = req?.user

        const body = {
            id: user?.uid,
            username: user?.displayName,
            status: "online"
        }


        localStorage.setItem("user", JSON.stringify(body))
        const data = await Save_user(body)

        if (data?.message === "utilisateur enregistrer") {
            navigate("/")
        }

    } catch (error) {

        console.log(error)
    }
}

export default LoginGoogle
