export default function ProblemSolution() {
    return (
        <section className="section bg-[#020202]">
            <div className="container-custom space-y-20">

                <div className="glass p-10 rounded-3xl border-white/5">
                    <h2 className="text-3xl font-bold tracking-tight text-white text-center">
                        The Problem
                    </h2>

                    <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto text-center leading-relaxed">
                        Countries and organizations seeking data privacy and model
                        sovereignty often deploy open-source foundational models on-premise.
                        However, they lack the required application layer systems to unlock
                        the full potential of AI in secure and scalable environments.
                    </p>
                </div>

                <div className="glass p-10 rounded-3xl border-white/5">
                    <h2 className="text-3xl font-bold tracking-tight text-white text-center">
                        Our Solution
                    </h2>

                    <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto text-center leading-relaxed">
                        We are building open-source, full stack AI application layer systems
                        starting with memory and research layers, evolving into advanced
                        AI agent orchestration. Our systems ensure secure deployment while
                        allowing complete ownership of the data pipeline.
                    </p>
                </div>

            </div>
        </section>
    );
}