import { useEffect, useState } from "react"
import MovieStore from "../store/MovieStore"

const ShowDetailsMovie = () => {

    const { Movie } = MovieStore()


    const img = "https://img.20mn.fr/_T_jQkHKQfSOc0lP3wyT1w/1444x920_chose-4-fantastiques"

    const [movie, setMovie] = useState({


        title: "",
        shortDescription: "",
        detailedDescription: "",
        imageLink: "",
        category: "",


    })

    useEffect(() => {
        if (Movie) {
            setMovie(
                {
                    title: Movie?.title,
                    shortDescription: Movie?.shortDescription,
                    detailedDescription: Movie?.detailedDescription,
                    imageLink: Movie?.imageLink,
                    category: Movie?.category,
                })
        }
    }, [Movie])


    return (
        <>


            <dialog id="my_modal_4" className="modal modal-bottom">
                <div className="modal-box h-screen md:w-3/4 max-w-5xl mx-auto max-h-none rounded-none p-0 text-white bg-slate-950/95 shadow-2xl shadow-black/70 animate-modal-pop">
                    <div className="flex items-center justify-between border-b border-white/10 px-8 py-4 backdrop-blur">
                        <div>
                            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Fiche détaillée</p>
                            <h2 className="text-xl font-semibold">{movie?.title} </h2>
                        </div>
                        <form method="dialog">
                            <button
                                className="btn btn-circle btn-ghost border border-white/20 text-white hover:bg-white/10"
                                aria-label="Fermer"
                            >
                                ✕
                            </button>
                        </form>
                    </div>

                    <div className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden">
                        <img
                            src={movie?.imageLink || null}
                            className="absolute inset-0 h-full w-full object-cover"
                            alt="Affiche du film"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end gap-4 px-8 pb-10">
                            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">

                                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1">{movie?.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-xl">{movie?.title}</h1>
                            <p className="max-w-2xl text-sm md:text-base text-white/80">
                                {movie?.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm font-medium">

                                <button className="btn btn-outline border-white/40 text-white/90 hover:bg-white/10">
                                    Ajouter à la liste
                                </button>
                                <button className="btn btn-outline border-white/30 text-white/80 hover:bg-white/10">
                                    J'aime
                                </button>
                            </div>
                        </div>
                    </div>

                    <section className="grid gap-8 px-8 py-10 md:grid-cols-[2fr,1fr]">
                        <article className="space-y-3 text-sm leading-relaxed text-white/80">
                            <p>
                                {movie?.detailedDescription}
                            </p>

                        </article>

                    </section>
                </div>

                <form method="dialog" className="modal-backdrop bg-black/80">
                    <button>Fermer</button>
                </form>
            </dialog>
        </>
    )
}

export default ShowDetailsMovie
