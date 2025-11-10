import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import Save_user from "./Save_user"

const SignupForm = async (e, forminput,navigate) => {
    try {
        e?.preventDefault()

        if (forminput?.password !== forminput?.comfirmpassword) return (alert("les deux mot de passe doivent etre identique"))



        const req = await createUserWithEmailAndPassword(auth, forminput?.email, forminput?.password)
        const user = req?.user

        await sendEmailVerification(user)

        const body = {
            id: user?.uid,
            username: forminput?.username,
            status: "online"
        }
        const data = await Save_user(body)
        
        if (data?.message === "utilisateur enregistrer") {
            navigate("/login")
        }
    } catch (error) {
        console.log(error.message)
        const messageError = error.message
        messageError == "Firebase: Error (auth/email-already-in-use)." ? alert("L'emal est deja utiliser veuiller en utiliser un autre ") : alert("une erreur c'est produite")
    }
}

export default SignupForm
