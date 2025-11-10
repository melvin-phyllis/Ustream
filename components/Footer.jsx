import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" bg-linear-to-b from-slate-950 via-indigo-950 to-slate-900 text-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-center text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">Ustream - Projet perso</h3>

                    <p className="text-xs uppercase tracking-wide text-slate-500">
                        &copy; {currentYear} Akou Melvin — Dev Full Stack Junior
                    </p>
                </div>



                <div className="space-y-3 text-sm text-slate-300">
                    <h4 className="text-sm font-semibold text-white">Suivez-nous</h4>
                    <div className="flex  justify-center gap-3">
                        <Link
                            to="https://www.linkedin.com/in/melvin-akou/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-blue-500/60 px-4 py-2 transition hover:border-blue-400 hover:text-blue-300"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            to="https://github.com/melvin-phyllis"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-blue-500/60 px-4 py-2 transition hover:border-blue-400 hover:text-blue-300"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
