"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex -space-x-4 mb-6"
                    >
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className={`w-12 h-12 rounded-full border-4 border-slate-50 flex items-center justify-center text-slate-700 font-bold bg-slate-200 z-${10 - i}`}
                                style={{
                                    backgroundImage: `url("https://api.dicebear.com/7.x/notionists/svg?seed=TalentKit${i}&backgroundColor=e2e8f0")`
                                }}
                            />
                        ))}
                        <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-slate-900 text-white flex items-center justify-center text-xs font-bold z-0">
                            +50
                        </div>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-bold text-slate-800"
                    >
                        Join 50+ candidates <br className="hidden sm:block" /> already on the waitlist
                    </motion.h3>
                </div>
            </div>
        </section>
    );
}
