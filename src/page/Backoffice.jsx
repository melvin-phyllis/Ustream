﻿import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Catalogue from "../../components/Catalogue"
import Dashbord from "../../components/Dashbord"
import Footer from "../../components/Footer"
import { Loading } from "../../components/Loading"
import LoginMilldewers from "../../controllers/LoginMilldewers"
import Logout from "../../controllers/Logout"

const Backoffice = () => {

    const navigate = useNavigate()



    const [nav, setNav] = useState(0)
    const NavChange = (number) => {
        setNav(number)
    }

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        LoginMilldewers(navigate, setLoading, "/backoffice")

    }, [])


    if (loading) {
        return (<Loading />)
    }
    return (
        <>
            <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-4 py-10 text-white">
                <header className="flex mb-10  flex-col  flex-wrap  justify-between gap-1 rounded-3xl shadow-2xl border border-white/5 bg-white/5 p-5">
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li className=" hover:text-red-300 "><Link to={"/"} >Accueil</Link></li>
                            <li  className="text-xl menu-disabled"><a>Menu</a></li>

                        </ul>
                    </div>
                    <div className="p-10 flex gap-10">
                        <label htmlFor="my_modal_7" className="btn text-xs font-semibold bg-white/5 text-white/40">Navigation</label>
                        <div>

                            <h1 className="text-2xl font-semibold">Gestion de votre compte</h1>
                        </div>
                    </div>
                </header>

                <div className="mx-auto flex flex-col-reverse gap-6 md:flex-row">
                    <input type="checkbox" id="my_modal_7" className="modal-toggle " />
                    <div className="modal modal-start " role="dialog">
                        <div className="modal-box   border-white/5 bg-white/5 p-6 text-sm font-medium uppercase tracking-wide text-white/70 backdrop-blur xl:flex">
                            <aside className=" w-56 flex-col gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 text-sm font-medium uppercase tracking-wide text-white/70 backdrop-blur xl:flex">
                                <p >Navigation</p>
                                <div className="flex flex-col gap-3">
                                    <button
                                        type="button "
                                        onClick={() => NavChange(1)}
                                        className="flex btn btn-outline btn-primary items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-left text-base text-white/80 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                                    >
                                        <span>Dashboard</span>
                                        <span className="text-xs text-white/40">&gt;</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => NavChange(2)}
                                        className="flex btn btn-outline btn-primary items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-left text-base text-white/80 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                                    >
                                        <span>Catalogue</span>
                                        <span className="text-xs text-white/40">&gt;</span>
                                    </button>
                                    <button type="button" className="btn btn-dash btn-secondary" onClick={() => Logout()}>Deconnecter</button>
                                </div>
                            </aside>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
                    <div className="w-full flex flex-col-reverse gap-6 md:flex-row">
                        {nav === 1 ? (
                            <Dashbord />
                        ) : nav === 2 ? (
                            <Catalogue />
                        ) : (
                            <div className="flex min-h-[420px] w-full items-center justify-center">
                                <div className="w-full rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center shadow-inner shadow-black/40 backdrop-blur">
                                    <p className="text-xs uppercase tracking-[0.4em] text-white/50">Centre de controle</p>
                                    <h1 className="mt-4 text-3xl font-semibold text-white">
                                        Bienvenue dans le Backoffice
                                    </h1>
                                    <p className="mt-3 text-sm text-white/70">
                                        Selectionnez un module dans le menu de gauche pour commencer a gerer votre plateforme.
                                    </p>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Backoffice
