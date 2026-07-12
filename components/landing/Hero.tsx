"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById("waitlist");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
            {/* Minimalist Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Special Offer Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-orange-200 text-orange-800 font-medium text-sm mb-8 shadow-sm"
                    >
                        <Zap className="w-4 h-4 text-orange-500" />
                        Early adopters get 50% off annual plans*
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-8"
                    >
                        AI-Native Hiring Agency. <br className="hidden md:block" />
                        <span className="text-indigo-600">
                            Hire Smarter, Faster.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Stop sifting through hundreds of resumes. Our AI finds, screens, and matches top candidates so you can build your dream team in days, not weeks.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#waitlist"
                            onClick={scrollToWaitlist}
                            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-slate-300 hover:-translate-y-1"
                        >
                            Join the Waitlist
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>

                    {/* Social Proof Text Below CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium"
                    >
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>AI-powered candidate matching</span>
                        </div>
                    </motion.div>
                </div>

                {/* Mockup / Visual Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-20 relative max-w-5xl mx-auto"
                >
                    <div className="rounded-2xl md:rounded-[2.5rem] bg-white p-4 md:p-6 shadow-2xl border border-slate-100 ring-1 ring-slate-900/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />

                        {/* Minimalist UI abstract representation */}
                        <div className="relative bg-slate-50 rounded-xl md:rounded-3xl border border-slate-200 overflow-hidden flex flex-col h-[400px]">
                            {/* Header */}
                            <div className="h-16 border-b border-slate-200 bg-white flex items-center px-6 gap-4">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>

                            {/* Chat Simulation area */}
                            <div className="flex-1 p-6 md:p-10 flex flex-col gap-6 relative">
                                {/* Incoming */}
                                <div className="flex items-start gap-4 max-w-sm">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0" />
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                                        <p className="text-slate-600 text-sm">Hi, I'm interested in the Senior Engineer role!</p>
                                    </div>
                                </div>

                                {/* Outgoing - Automated */}
                                <div className="flex items-start gap-4 max-w-sm self-end flex-row-reverse">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm text-white">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-none shadow-sm relative">
                                        <div className="absolute -top-3 -right-2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 border border-indigo-400">
                                            <Zap className="w-3 h-3" /> Auto
                                        </div>
                                        <p className="text-white text-sm">Thanks for your interest! Your skills match perfectly. Let's schedule a quick call to discuss next steps.</p>
                                    </div>
                                </div>

                                {/* Floating Elements for aesthetics */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/2 left-1/4 -translate-y-1/2 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="text-sm font-semibold text-slate-700">Top Match — 94%</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
