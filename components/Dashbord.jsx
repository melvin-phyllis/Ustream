

const Dashbord = () => {
    return (
        <>
            <main className="flex-1 rounded-3xl border border-white/5 bg-slate-950/50 p-6 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="flex flex-col gap-8">
                    <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/5 bg-white/5 p-5">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Dashbord</p>
                            <h1 className="text-2xl font-semibold">Gestion du carrousel</h1>
                            <p className="text-sm text-white/70">Glissez-déposez vos cartes pour créer la grille parfaite.</p>
                        </div>

                    </header>

                    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        <article className="rounded-3xl border border-white/5 bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-wide text-white/60">Total titres</p>
                            <p className="text-3xl font-semibold">128</p>
                            <p className="text-xs text-emerald-300">+12 cette semaine</p>
                        </article>
                        <article className="rounded-3xl border border-white/5 bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-wide text-white/60">Carousel actif</p>
                            <p className="text-3xl font-semibold">5 items</p>
                            <p className="text-xs text-white/60">Dernière mise à jour: 09:24</p>
                        </article>
                        <article className="rounded-3xl border border-white/5 bg-white/5 p-4 sm:col-span-2 xl:col-span-1">
                            <p className="text-xs uppercase tracking-wide text-white/60">Taux de complétion</p>
                            <div className="mt-2 h-2 rounded-full bg-white/10">
                                <div className="h-full w-4/5 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400"></div>
                            </div>
                            <p className="mt-2 text-3xl font-semibold">80%</p>
                        </article>
                    </section>

                </div>
            </main>
        </>
    )
}

export default Dashbord
