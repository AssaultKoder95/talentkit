"use client";

import { motion } from "framer-motion";
import { Brain, UserCheck, Workflow, LayoutDashboard, Users2, MessageSquareDashed, Clock4, Sparkles } from "lucide-react";

const features = [
    { text: "AI-powered candidate screening", icon: Brain },
    { text: "Skill-based matching algorithms", icon: UserCheck },
    { text: "Automated interview scheduling", icon: Workflow },
    { text: "Candidate analytics dashboard", icon: LayoutDashboard },
    { text: "Team collaboration tools", icon: Users2 },
    { text: "Custom hiring workflows", icon: MessageSquareDashed },
    { text: "24/7 candidate sourcing", icon: Clock4 },
    { text: "Diversity hiring insights", icon: Sparkles }
];

export default function Features() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        >
                            AI-Powered Hiring, <br />
                            <span className="text-indigo-400">Simple Setup</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-300 mb-10 max-w-xl"
                        >
                            Take control of your hiring pipeline without the manual overhead. Our AI handles screening, matching, and scheduling so you can focus on closing top talent.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.05) }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400">
                                        <feature.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-200 font-medium text-sm">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden shadow-2xl p-4">
                            {/* Visual proxy for dashboard */}
                            <div className="rounded-2xl bg-slate-900 border border-slate-800 h-[400px] p-6 flex flex-col gap-4 relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-indigo-500" />
                                        <div>
                                            <div className="h-4 w-24 bg-slate-700 rounded mb-1" />
                                            <div className="h-3 w-16 bg-slate-800 rounded" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex gap-4 mt-2">
                                    <div className="w-1/3 flex flex-col gap-3">
                                        <div className="h-12 rounded-xl bg-slate-800/50 border border-slate-700/50" />
                                        <div className="h-12 rounded-xl bg-slate-800 border border-slate-700" />
                                        <div className="h-12 rounded-xl bg-slate-800/50 border border-slate-700/50" />
                                    </div>
                                    <div className="w-2/3 flex flex-col gap-3">
                                        <div className="h-full rounded-xl bg-slate-800/80 border border-slate-700/50 p-6 flex flex-col gap-4">
                                            <div className="w-3/4 h-6 rounded bg-slate-700" />
                                            <div className="w-full h-4 rounded bg-slate-700/50 mt-4" />
                                            <div className="w-full h-4 rounded bg-slate-700/50" />
                                            <div className="w-1/2 h-4 rounded bg-slate-700/50" />

                                            <div className="mt-auto self-end px-4 py-2 bg-indigo-600 rounded-md text-white font-medium text-sm">
                                                Find Candidates
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
