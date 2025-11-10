import { useEffect, useRef, useState } from "react"
import UpdateMovie from "../controllers/UpdateMovie"
import MovieStore from "../store/MovieStore"



const UpdateMovieModal = () => {

    const formRef = useRef(null)

    const { Movie, MovieList ,updateMovie} = MovieStore()

    const [movie, setMovie] = useState({

        title: "",
        shortDescription: "",
        detailedDescription: "",
        imageLink: "",
        category: "",


    })



    const HandleChange = (e) => {
        const { name, value } = e.target
        setMovie(prev => ({ ...prev, [name]: value }))
    }


    useEffect(() => {
        if (Movie) {
            setMovie({
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
            <input type="checkbox" id="my_modal_9" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle" role="dialog">
                <div className="modal-box max-w-2xl border border-white/10 bg-slate-950/80 p-0 text-white shadow-2xl shadow-black/60 backdrop-blur-2xl">
                    <div className="rounded-t-3xl bg-linear-to-r from-emerald-500/20 via-cyan-500/20 to-transparent px-6 py-5">
                        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Modification du contenu</p>
                        <h3 className="text-2xl font-semibold text-white"></h3>
                        <p className="text-sm text-white/70">Modifiez les informations du film sélectionné.</p>
                    </div>
                    <form ref={formRef} className="space-y-4 px-6 pb-6 pt-4 text-sm font-medium text-white/80" onSubmit={(e) => UpdateMovie(e,Movie.id, movie, formRef,updateMovie)} >
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Modifier le titre</span>
                            <input
                                type="text"
                                name="title"
                                onChange={(e) => HandleChange(e)}
                                value={movie?.title}
                                placeholder="Ex: Mystic City"
                                className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Modifier la description courte</span>
                            <input
                                type="text"
                                name="shortDescription"
                                value={movie?.shortDescription}
                                onChange={(e) => HandleChange(e)}
                                placeholder="Une phrase resume"
                                className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Modifier la description détaillée</span>
                            <textarea
                                name="detailedDescription"
                                onChange={(e) => HandleChange(e)}
                                value={movie?.detailedDescription}
                                placeholder="Description complete du film..."
                                className="textarea textarea-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                                rows={4}
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Modifier le lien de l'image</span>
                            <input
                                type="url"
                                name="imageLink"
                                onChange={(e) => HandleChange(e)}
                                value={movie?.imageLink}
                                placeholder="https://exemple.com/affiche.jpg"
                                className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Modifier la catégorie</span>
                            <select name="category" id="category" value={movie?.category} className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none" onChange={(e) => HandleChange(e)}>
                                <option value="action">Action</option>
                                <option value="animation">Animation</option>
                                <option value="comédie">Comédie</option>
                                <option value="drame">Drame</option>
                                <option value="horreur">Horreur</option>
                                <option value="romance">Romance</option>
                                <option value="policier">Policier</option>
                            </select>
                        </label>
                        <div className="modal-action flex items-center justify-center gap-3 pt-2">
                            <button
                                type="submit"
                                className="btn border-none bg-linear-to-r from-emerald-400 to-cyan-400 px-8 text-slate-950 hover:brightness-110"
                            >
                                Mettre à jour le film
                            </button>
                            <label
                                htmlFor="my_modal_9"
                                className="btn border border-white/20 bg-transparent text-white hover:border-emerald-300 hover:text-emerald-200"
                            >
                                Annuler
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateMovieModal
