import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/firebase-config"
import Save_user from "./Save_user"

const LoginMilldewers = (navigate, setLoading, page) => {
    if (typeof window !== "undefined") {

        const userLocal = localStorage.getItem("user")
        const user = userLocal ? JSON.parse(userLocal) : null

        if (!user) {

            if (page == "/login" || page == "/signup" || page == "/backoffice") {
                return setLoading(false)
            }
            return navigate("/")
        }

        const unbsicribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                if (page == "/login" || page == "/signup" || page == "/backoffice") {
                    return setLoading(false)
                }
                return navigate("/")
            }
            try {
                const req = await Save_user(user)

                if (req?.message == "utilisateur enregistrer") {
                  
                    console
                    if (page == "/backoffice") {
                        setTimeout(() => setLoading(false), 1000)
                        navigate("/backoffice")
                    }

                }

            } catch (error) {
                console.log(error)
            }
        })


        return () => unbsicribe()

    }
}

export default LoginMilldewers
