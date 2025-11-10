import { useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import GetAllMovie from "../controllers/GetAllMovie";
import MovieStore from "../store/MovieStore";

import { GrView } from "react-icons/gr";
import DeleteMovie from "../controllers/DeleteMovie";

import GetMovie from "../controllers/GetMovie";
import ShowMovie from "../controllers/ShowMovie";
import updateStatus from "../controllers/updateStatus";


const CalalogueListMovie = () => {
    const { MovieList, setMovieList, getMovie, updateMovie } = MovieStore()

    useEffect(() => { GetAllMovie(setMovieList) }, [])
    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 pb-4">
                {MovieList.length > 0 ? (<>{MovieList.map((card) => (
                    <article className="card  group h-full relative overflow-visible border border-white/10 bg-linear-to-b from-slate-900/90 via-slate-900/70 to-black  text-white shadow-2xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/60 hover:z-50 hover:scale-105">
                        <figure className="relative">
                            <img
                                className="h-56 w-full rounded-3xl object-cover grayscale-15 transition duration-300 group-hover:grayscale-0 group-hover:scale-105"
                                src={card?.imageLink || "https://flowbite.com/docs/images/examples/image-1@2x.jpg"}
                                alt="Shoes"
                            />
                            <div className="absolute top-4 right-3 flex gap-2">
                                <button className=" btn-xs  btn btn-outline btn-primary" onClick={() => ShowMovie(card, MovieList)}><GrView /></button>
                                <button type="button" className="btn btn-outline btn-xs btn-error" onClick={() => DeleteMovie(card.id, MovieList, setMovieList)}><RiDeleteBin5Line /></button>
                            </div>
                            <div className="absolute bottom-4 left-4 rounded-full bg-white/ px-3 py-1 text-xs uppercase tracking-wide text-white/80 backdrop-blur">{card?.category}</div>
                        </figure>
                        <div className="card-body  hidden group-hover:block absolute left-1/2 bottom-0 w-full -translate-x-1/2 translate-y-1/2 gap-4 rounded-3xl border border-white/10 bg-slate-950/95 p-6 text-white shadow-2xl shadow-black/70 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div>
                                <h2 className="card-title text-2xl font-semibold">{card?.title}</h2>
                                <p className="text-sm text-white/70 line-clamp-4" >{card?.shortDescription}</p>
                            </div>
                            <div className="card-actions flex items-center justify-center mt-5 gap-3">
                                <button type="button" onClick={() => updateStatus(card?.id, updateMovie, MovieList, card?.status)} className={`btn btn-sm border-none bg-linear-to-r ${card?.status === "public" ? "btn-error" : card?.status === "private" && " from-emerald-400 to-cyan-400"}   text-black shadow-lg shadow-emerald-500/20 hover:opacity-90 hover:scale-105 transition-transform`} >{card?.status === "public" ? " rendre priver" : card?.status === "private" && "Publier"}</button>
                                <label htmlFor="my_modal_9" onClick={() => GetMovie(card, getMovie)} className="btn btn-sm border-none bg-linear-to-r from-emerald-400 to-cyan-400 text-black shadow-lg shadow-emerald-500/20 hover:opacity-90 hover:scale-105 transition-transform">Modifier</label>
                            </div>
                        </div>
                    </article>
                ))} </>) : (<><div>Aucun Article dISPONIBLE</div></>)}
            </div>

        </>
    )
}

export default CalalogueListMovie
