import { useNavigate } from "react-router-dom"
import LoginGoogle from "../controllers/LoginGoogle"

const LoginBtnGoogle = () => {

    const navigate = useNavigate()
    return (
        <>
            <button
                type="button"
                onClick={() => LoginGoogle(navigate)}
                className="btn w-full border border-white/20 bg-transparent text-white hover:border-emerald-300 hover:text-emerald-200"
            >
                Continuer avec Google
            </button>
        </>
    )
}

export default LoginBtnGoogle
