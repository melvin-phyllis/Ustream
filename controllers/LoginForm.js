import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import Save_user from "./Save_user"
import { TostifyError, TostifySucces } from "../Toast/Tostify"

const LoginForm = async (e, forminput, navigate, setLoad) => {
    try {

        setLoad(true)
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




        if (req?.message === "utilisateur enregistrer") {
            TostifySucces("Connexion Reussi")
            navigate("/")
        }
    } catch (error) {
        console.log(error.message)
        const messageError = error.message

        messageError == "Firebase: Error (auth/invalid-credential)." ? TostifyError("Mail ou Mots de passe incorrect"):TostifyError("Une erreur c'est produite")

    } finally {
        setLoad(false)
    }
}

export default LoginForm
