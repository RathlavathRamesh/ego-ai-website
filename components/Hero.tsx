export default function Hero() {
    return (
        <section className="section text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10"></div>
            <div className="container-custom">
                <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                    Sovereign AI Application Layer
                    <br />
                    for Governments & Organizations
                </h1>

                <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    We build open-source full stack AI application systems enabling
                    countries, organizations, and individuals to securely deploy and own
                    their complete data and intelligence pipeline.
                </p>
            </div>
        </section>
    );
}