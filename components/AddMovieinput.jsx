
import { useRef, useState } from "react"
import AddMovie from "../controllers/AddMovie"
import MovieStore from "../store/MovieStore"



const AddMovieinput = () => {

    const formRef = useRef(null)



    const { updateMovieList } = MovieStore()

    const [movie, setMovie] = useState({
        title: "",
        shortDescription: "",
        detailedDescription: "",
        imageLink: "",
        category: "",
        status: "private"

    })



    const HandleChange = (e) => {
        const { name, value } = e.target
        setMovie(prev => ({ ...prev, [name]: value }))


    }

    const [load, setLoad] = useState(false)
    return (
        <>
            <aside className="flex h-fit flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-4 text-sm text-white/80">
                <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/50">Actions</p>
                    <p className="text-sm text-white/70">Ajoutez des contenus des que l'idee vous vient.</p>
                </div>
                <label htmlFor="my_modal_6" className="btn rounded-2xl bg-emerald-400 text-2xl font-bold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300">
                    Ajouter
                </label>
            </aside>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle" role="dialog">
                <div className="modal-box max-w-2xl border border-white/10 bg-slate-950/80 p-0 text-white shadow-2xl shadow-black/60 backdrop-blur-2xl">
                    <div className="rounded-t-3xl bg-linear-to-r from-emerald-500/20 via-cyan-500/20 to-transparent px-6 py-5">
                        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Nouveau contenu</p>
                        <h3 className="text-2xl font-semibold text-white">Ajouter un film</h3>
                        <p className="text-sm text-white/70">Completez les informations pour enrichir votre carrousel.</p>
                    </div>
                    <form ref={formRef} className="space-y-4 px-6 pb-6 pt-4 text-sm font-medium text-white/80" onSubmit={(e) => AddMovie(e, movie, updateMovieList, formRef, setLoad)} >
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Titre du film</span>
                            <input
                                type="text"
                                name="title"
                                onChange={(e) => HandleChange(e)}
                                placeholder="Ex: Mystic City"
                                className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Courte description</span>
                            <input
                                type="text"
                                name="shortDescription"
                                onChange={(e) => HandleChange(e)}
                                placeholder="Une phrase resume" required
                                className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Description detaillee</span>
                            <textarea
                                name="detailedDescription"
                                onChange={(e) => HandleChange(e)}
                                placeholder="Description complete du film..."
                                className="textarea textarea-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                                rows={4} required
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Lien de l'image</span>
                            <input
                                type="url"
                                name="imageLink"
                                onChange={(e) => HandleChange(e)}
                                placeholder="https://exemple.com/affiche.jpg"
                                className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none"
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text text-slate-300">Categorie</span>


                            <select name="category" id="category" required className="input input-bordered w-full bg-slate-950/60 text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none" onChange={(e) => HandleChange(e)}>
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
                                disabled={load ? true : false}
                                className={`btn btn-primary w-full bg-linear-to-r   border-none text-slate-950 font-semibold mt-5 ${!load ? "from-emerald-400 to-cyan-400" : "bg-gray-400"}`}
                            >
                                {load ? (<>Chargement ...<span className="loading loading-dots loading-lg"></span></>) : "Enregistrer le film"}
                            </button>
                            <label
                                htmlFor="my_modal_6"
                                className="btn border border-white/20 bg-transparent text-white hover:border-emerald-300 hover:text-emerald-200"
                            >
                                Fermer
                            </label>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}


export default AddMovieinput
