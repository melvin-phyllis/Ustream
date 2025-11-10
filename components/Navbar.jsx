import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Getuserlocal from "../controllers/Getuserlocal";
import Logout from "../controllers/Logout";




export const Navbar = () => {
    const [user, setUser] = useState({})
  
    useEffect(() => {
        const user = Getuserlocal()
        if (user !== null || user !== undefined) {
            setUser(user)
        }


    }, [])


    return (
        <nav className="bg-linear-to-r from-slate-950 via-indigo-950 to-slate-900 shadow-2xl shadow-indigo-900/40">
            <div className="navbar mx-auto w-full max-w-6xl px-4 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button
                            type="button"
                            tabIndex={0}
                            className="btn btn-ghost md:hidden"
                            aria-label="Ouvrir le menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content z-20 mt-4 w-52 rounded-2xl bg-slate-900/95 p-3 text-sm text-slate-100 shadow-2xl backdrop-blur"
                        >
                            <li >
                                <Link to={"/"} className="hover:text-emerald-300">Accueil</Link>
                            </li>
                            <li >
                                <Link to={"/movies"} className="hover:text-emerald-300">Movies</Link>
                            </li>
                            {!user ? (
                                <>
                                    <li>
                                        <Link
                                            to={"/login"}
                                            className="btn btn-ghost border border-white/20 text-slate-100 hover:border-emerald-300 hover:text-emerald-200"
                                        >
                                            Connexion
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/signup"}
                                            className="btn bg-linear-to-r from-emerald-400 to-cyan-400 font-semibold text-slate-950 shadow-emerald-500/30 transition hover:scale-105 hover:shadow-lg"
                                        >
                                            Inscription
                                        </Link>
                                    </li>
                                </>) : (
                                <>
                                    <li >
                                        <Link to={"/backoffice"} className="text-xs btn btn-dash btn-secondary font-semibold text-slate-200 transition ">Menu</Link>
                                    </li>
                                    <li><button type="button" onClick={() => Logout()} className="text-xs btn btn-dash btn-secondary font-semibold text-slate-200 transition ">Deconnexion</button></li>

                                </>)}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-black tracking-tight text-white">
                        Ustream
                    </a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-2 rounded-full bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.3em]">
                        <li >
                            <Link to={"/"} className="text-xs font-semibold text-slate-200 transition hover:text-emerald-300">Accueil</Link>
                        </li>
                        <li >
                            <Link to={"/movies"} className="text-xs font-semibold text-slate-200 transition hover:text-emerald-300">Movies</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end gap-3  ">
                    {!user ? (
                        <>
                            <li>
                                <Link
                                    to={"/login"}
                                    className="btn btn-ghost border border-white/20 text-slate-100 hover:border-emerald-300 hover:text-emerald-200"
                                >
                                    Connexion
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/signup"}
                                    className="btn bg-linear-to-r from-emerald-400 to-cyan-400 font-semibold text-slate-950 shadow-emerald-500/30 transition hover:scale-105 hover:shadow-lg"
                                >
                                    Inscription
                                </Link>
                            </li>
                        </>) : (
                        <>

                            <span>{user?.username} </span>
                            <div className="dropdown dropdown-end hidden md:flex">
                                <button type="button" tabIndex={0} className="btn btn-ghost ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                                </button>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content z-20 mt-4  rounded-2xl bg-slate-900/95 p-3 text-sm text-slate-100 shadow-2xl backdrop-blur"
                                >
                                    <li >
                                        <Link to={"/backoffice"} className="text-xs btn btn-dash btn-primary font-semibold text-slate-200 transition ">Menu</Link>
                                    </li>
                                    <li><button type="button" onClick={() => Logout()} className="text-xs btn btn-dash btn-secondary font-semibold text-slate-200 transition ">Deconnexion</button></li>

                                </ul>
                            </div>

                        </>)}
                </div>
            </div>
        </nav>
    );
};
