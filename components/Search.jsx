


const Search = ({ setMovies, data }) => {



    const Search = (e) => {

        const { value } = e.target



            const Newarray = data.filter(item => item?.title.toLowerCase().includes(value.toLowerCase()))

        setMovies(Newarray)


    }



    return (
        <>
            <label className="input input-bordered input-sm flex items-center gap-3 rounded-full bg-white/10 text-white/70 transition focus-within:bg-white/15">
                <svg className="h-[1em] opacity-70 text-emerald-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    type="search"
                    required

                    name="search"
                    onChange={(e) => Search(e)}
                    placeholder="Rechercher un film........."
                    className="w-70 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
                />
            </label>

        </>
    )
}

export default Search
