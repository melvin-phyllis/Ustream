import AddMovieinput from "./AddMovieinput"
import CalalogueListMovie from "./CalalogueListMovie"
import UpdateMovieModal from "./UpdateMovieModal"


const Catalogue = () => {




    return (
        <>
            <main className="flex-1 rounded-3xl border border-white/5 bg-slate-950/50 p-6 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="flex flex-col gap-8">
                    
                    <section>
                        <CalalogueListMovie />
                    </section>
                </div>
            </main>

            <AddMovieinput />
            <UpdateMovieModal />

        </>
    )
}

export default Catalogue
