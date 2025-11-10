// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const featuredShows = [
    {
        id: "arcane",
        title: "Arcane",
        category: "Animation",
        description: "Les quartiers de Piltover et Zaun s'affrontent pour la magie.",
        badge: "Nouveau",
        accent: "#7c3aed",
        poster:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "dune",
        title: "Dune: Part Two",
        category: "Sci-Fi",
        description: "Paul rejoint les Fremen pour mener la revolte sur Arrakis.",
        badge: "Top 10",
        accent: "#f97316",
        poster:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "lastofus",
        title: "The Last of Us",
        category: "Drame",
        description: "Ellie et Joel cherchent un remede dans un monde devaste.",
        badge: "Tendance",
        accent: "#22d3ee",
        poster:
            "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "loki",
        title: "Loki",
        category: "Marvel",
        description: "Le Dieu de la malice tente de reecrire la chronologie.",
        badge: "Exclu",
        accent: "#84cc16",
        poster:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "oppenheimer",
        title: "Oppenheimer",
        category: "Biopic",
        description: "Le destin du pere de la bombe atomique.",
        badge: "Oscars",
        accent: "#facc15",
        poster:
            "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "spiderverse",
        title: "Across the Spider-Verse",
        category: "Animation",
        description: "Miles et Gwen explorent le multivers arachneen.",
        badge: "4K",
        accent: "#fb7185",
        poster:
            "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "interstellar",
        title: "Interstellar",
        category: "Sci-Fi",
        description:
            "Une equipe franchit un trou de ver a la recherche d'une nouvelle maison.",
        badge: "Classique",
        accent: "#38bdf8",
        poster:
            "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "houseofthedragon",
        title: "House of the Dragon",
        category: "Fantasy",
        description: "La dynastie Targaryen au coeur d'une guerre de succession.",
        badge: "Exclu",
        accent: "#f87171",
        poster:
            "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    },
];

function SwiperSwipe() {
    return (
        <section className="relative left-1/2  -translate-x-1/2 space-y-6 px-4  sm:px-8 lg:px-16">
            <div className=" text-white">

                <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Continuez votre session
                </h2>
                <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
                    Une selection fraichement mise a jour pour reprendre vos series la ou vous
                    vous etes arrete.
                </p>
            </div>

            <Swiper
                slidesPerView={1.1}
                spaceBetween={16}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 28,
                    },
                }}
                freeMode
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[FreeMode, Pagination]}
                className="pb-12 "
            >
                {featuredShows.map((show) => (
                    <SwiperSlide key={show.id}>
                        <article className="group relative overflow-hidden rounded-3xl bg-slate-900/70 shadow-2xl ring-1 ring-white/5 transition hover:ring-emerald-300/60">
                            <img
                                src={show.poster}
                                alt={`Affiche ${show.title}`}
                                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-60 lg:h-50"
                                loading="lazy"
                            />
                            <div className="absolute inset-x-0 bottom-0 space-y-2 bg-linear-to-t from-slate-950/95 via-slate-950/40 to-transparent px-4 pb-5 pt-8 text-white">
                                <span
                                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-950"
                                    style={{ backgroundColor: show.accent }}
                                >
                                    {show.badge}
                                </span>
                                <div className="space-y-1">
                                    <p className="text-[0.7rem] uppercase tracking-[0.4em] text-slate-300">
                                        {show.category}
                                    </p>
                                    <h3 className="text-lg font-semibold">{show.title}</h3>
                                    <p className="text-sm text-slate-300">{show.description}</p>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default SwiperSwipe;
