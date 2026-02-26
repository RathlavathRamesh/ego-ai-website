export default function Focus() {
    const items = [
        "AI Agents and Orchestration Systems",
        "Memory, Deep Research & Sovereign Web Search Systems",
        "Enterprise RAG, MCP and Fine-tuning for Local Use Cases",
    ];

    return (
        <section className="section bg-black/50">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-center tracking-tight text-white mb-16">
                    Current Focus Areas
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