import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Loading } from "../../components/Loading"
import LoginBtnGoogle from "../../components/LoginBtnGoogle"
import LoginForm from "../../controllers/LoginForm"
import LoginMilldewers from "../../controllers/LoginMilldewers"

const Login = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)

    const [load, setLoad] = useState(false)

    const [forminput, setForminput] = useState({

        email: "",
        comfirmpassword: ""
    })

    const HandleChange = (e) => {
        const { name, value } = e.target
        setForminput(prev => ({
            ...prev, [name]: value
        }))
    }

    useEffect(() => {
        LoginMilldewers(navigate, setLoading, "/signup")

    }, [])


    if (loading) {
        return (<Loading />)
    }
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-4 py-12 text-white sm:px-6 lg:px-12">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row">


                <section className="flex flex-1 items-center justify-center">
                    <div className="card w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-slate-100 shadow-2xl shadow-black/40 backdrop-blur">
                        <div className="card-body space-y-6">
                            <div className="space-y-2 text-center">
                                <h2 className="text-2xl font-semibold">Connexion</h2>
                                <p className="text-sm text-slate-400">
                                    Continuez vos series sans interruption.
                                </p>
                            </div>

                            <form className="space-y-7" onSubmit={(e) => LoginForm(e, forminput, navigate,setLoad)}>
                                <label className="form-control w-full">
                                    <span className="label-text text-slate-300">Adresse email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={(e) => HandleChange(e)}
                                        placeholder="vous@ustream.tv"
                                        className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500"
                                        required
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <span className="label-text text-slate-300">Mot de passe</span>
                                    <input
                                        type="password"
                                        onChange={(e) => HandleChange(e)}
                                        placeholder="••••••••"
                                        name="password"
                                        className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500"
                                        required
                                    />
                                </label>
                                <button
                                    type="submit"
                                    disabled={load ? true : false}
                                    className={`btn btn-primary w-full bg-linear-to-r   border-none text-slate-950 font-semibold mt-5 ${!load ? "from-emerald-400 to-cyan-400" : "bg-gray-400"}`}
                                >
                                    {load ? (<>Chargement ...<span className="loading loading-dots loading-lg"></span></>) : "Se connecter"}
                                </button>
                            </form>
                            <div className="divider divider-neutral">ou</div>
                            <LoginBtnGoogle />
                            <p className="text-center text-sm text-slate-400">
                                Nouveau sur Ustream ?{" "}
                                <Link to={"/signup"} className="text-emerald-300 hover:text-emerald-200">Creez un compte</Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Login
