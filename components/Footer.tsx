export default function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-white/10 py-20 px-6 md:px-16 lg:px-32 bg-[#050505]"
        >
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-white text-center">
                    Contact
                </h3>

                <div className="mt-14 grid md:grid-cols-2 gap-10">

                    {/* CEO Card */}
                    <div className="bg-[#0e0e0e] border border-white/10 p-8 rounded-xl">
                        <h4 className="text-xl font-semibold text-white">
                            Prayanshu Thakur
                        </h4>

                        <p className="text-neutral-400 text-sm uppercase tracking-widest mt-2">
                            Founder & CEO
                        </p>

                        <div className="mt-6 space-y-3 text-neutral-300">
                            <p>+91 70897 71503</p>

                            <a
                                href="mailto:prayanshu@privateego.com"
                                className="block hover:text-white transition"
                            >
                                prayanshu@privateego.com
                            </a>
                        </div>
                    </div>

                    {/* CTO Card */}
                    <div className="bg-[#0e0e0e] border border-white/10 p-8 rounded-xl">
                        <h4 className="text-xl font-semibold text-white">
                            Rathlavath Ramesh
                        </h4>

                        <p className="text-neutral-400 text-sm uppercase tracking-widest mt-2">
                            CTO & Co-Founder
                        </p>

                        <div className="mt-6 space-y-3 text-neutral-300">
                            <p>+91 6301857629</p>
                        </div>
                    </div>

                </div>

                <p className="mt-20 text-neutral-600 text-xs tracking-widest uppercase text-center">
                    © {new Date().getFullYear()} EGO AI. All rights reserved.
                </p>
            </div>
        </footer>
    );
}