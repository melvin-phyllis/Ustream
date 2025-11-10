import { useEffect, useState } from "react"
import Footer from "../../components/Footer"

import { Loading } from "../../components/Loading"
import { Navbar } from "../../components/Navbar"
import SwiperSwipe from "../../components/SwiperSwipe"


const Landing = () => {

    const [loading, setLoading] = useState(true)


    useEffect(() => {
         setTimeout(() => setLoading(false), 2000)
    }, [])

    if (loading) {
        return (<Loading />)
    }

    return (
        <div className=" bg-linear-to-b from-slate-950 via-indigo-950 to-slate-900 ">
            <header className="bg-slate-950/70 shadow-lg shadow-indigo-900/30">
                <Navbar />
            </header>
            <main className="space-y-10  py-10  ">
                <SwiperSwipe />
                <SwiperSwipe />
                <SwiperSwipe />
                <SwiperSwipe />
                <SwiperSwipe />
                <SwiperSwipe />
                <SwiperSwipe />
                <SwiperSwipe />
            </main>
            <footer className="bg-slate-950/80 text-slate-200">
                <Footer />
            </footer>
        </div>
    )
}

export default Landing
