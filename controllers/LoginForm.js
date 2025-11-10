import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import Save_user from "./Save_user"

const LoginForm = async (e, forminput,navigate) => {
    try {
        e.preventDefault()

        const data = await signInWithEmailAndPassword(auth, forminput?.email, forminput?.password)
        const user = data?.user

        if (!user.emailVerified) {
            sendEmailVerification(user)
            return alert("valider votre compte avant de vous connecter")
        }

        const body = {
            id: user?.uid,
            status: "online"
        }

        localStorage.setItem("user", JSON.stringify({ id: user?.uid, username: forminput?.username }))
        const req = await Save_user(body)


        console.log(req?.data)

        if (req?.message === "utilisateur enregistrer") {
           navigate("/")
        }
    } catch (error) {
        console.log(error)
    }
}

export default LoginForm
