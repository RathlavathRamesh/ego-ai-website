export default function LongTerm() {
    const items = [
        "Foundational Model Co-Building",
        "Secure Deployment of Large Language Models (On-Premise / Hybrid)",
        "AI Infrastructure Advisory (GPU Clusters, Orchestration, Data Governance)",
    ];

    return (
        <section className="section">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-center tracking-tight text-white mb-16">
                    Long-Term Strategic Direction
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="glass p-8 glass-hover transition-all duration-300 rounded-xl"
                        >
                            <p className="text-lg font-medium leading-relaxed text-neutral-300">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}