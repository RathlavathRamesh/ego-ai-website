export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 py-4 px-6 md:px-16 lg:px-32 sticky top-0 z-50 glass">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-tighter text-white">
                    EGO AI
                </h1>

                <a
                    href="#contact"
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}