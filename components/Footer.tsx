export default function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-white/10 py-16 px-6 md:px-16 lg:px-32 bg-[#050505]"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-xl font-bold text-white">Contact</h3>

                <p className="mt-6 text-neutral-400 text-lg font-medium">
                    prayanshu@privateego.com
                </p>

                <p className="mt-12 text-neutral-600 text-xs tracking-widest uppercase">
                    © {new Date().getFullYear()} EGO AI. All rights reserved.
                </p>
            </div>
        </footer>
    );
}