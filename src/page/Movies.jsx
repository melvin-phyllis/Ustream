import { useEffect, useState } from "react"
import { GrView } from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import useSWR from 'swr'
import Footer from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import Search from "../../components/Search"
import GetAllMovies from "../../controllers/GetAllMovies"
import LoginMilldewers from "../../controllers/LoginMilldewers"
import ShowMovie from "../../controllers/ShowMovie"
import MovieStore from "../../store/MovieStore"

const Movies = () => {

    const navigate = useNavigate()



    const [movies, setMovies] = useState([])

    const [loading, setLoading] = useState()

    const { getMovie } = MovieStore()

    const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_DATABASE_URL}`, GetAllMovies, { refreshInterval: 1000 })


    useEffect(() => {
        LoginMilldewers(navigate, setLoading, "/movies")
        GetAllMovies()
    }, [])


    useEffect(() => { setMovies(data) }, [data])



    return (
        <>
            <div className=" bg-linear-to-b from-slate-950 via-indigo-950 to-slate-900 ">
                <header className="bg-slate-950/70 shadow-lg shadow-indigo-900/30">
                    <Navbar />
                </header>


                <main className="space-y-10  py-10 min-h-screen ">

                    <div className="flex justify-end md:mr-10">

                        <Search  setMovies={setMovies} data={data} />

                    </div>

                    <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6 p-4">

                    {movies?.length > 0 ? (<>{movies.map((card) => (

                        <article key={card?.id} className="card  group h-full relative overflow-visible border border-white/10 bg-linear-to-b from-slate-900/90 via-slate-900/70 to-black  text-white shadow-2xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/60 hover:z-50 hover:scale-105">
                            <figure className="relative">
                                <img
                                    className="h-56 w-full rounded-3xl object-cover grayscale-15 transition duration-300 group-hover:grayscale-0 group-hover:scale-105"
                                    src={card?.imageLink || "https://flowbite.com/docs/images/examples/image-1@2x.jpg"}
                                    alt="Shoes"
                                />
                                <div className="absolute top-4 right-3 flex gap-2">
                                    <button className=" btn-xs  btn btn-outline btn-primary" onClick={() => ShowMovie(card, getMovie)}><GrView /></button>
                                </div>
                                <div className="absolute bottom-4 left-4 rounded-full bg-white/ px-3 py-1 text-xs uppercase tracking-wide text-white/80 backdrop-blur">{card?.category}</div>
                            </figure>
                            <div className="card-body  hidden group-hover:block absolute left-1/2 bottom-0 w-full -translate-x-1/2 translate-y-1/2 gap-4 rounded-3xl border border-white/10 bg-slate-950/95 p-6 text-white shadow-2xl shadow-black/70 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-300">
                                <div>
                                    <h2 className="card-title text-2xl font-semibold">{card?.title}</h2>
                                    <p className="text-sm text-white/70 line-clamp-4" >{card?.shortDescription}</p>
                                </div>

                            </div>
                        </article>

                    ))} </>) : (<>
                        <div className="text-5xl text-white font-bold text-center md:col-span-4 lg:col-span-6">
                            <span className="uppercase ">Aucun Film n'a encore ete ajouter</span>
                        </div></>)}
            </div>
        </main >
            <footer className="bg-slate-950/80 text-slate-200">
                <Footer />
            </footer>
            </div >
        </>
    )
}
export default Movies
