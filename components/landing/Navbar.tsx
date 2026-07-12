"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById("waitlist");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <div className="bg-slate-900 p-2 rounded-xl text-white">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <span className="text-xl font-bold text-slate-900">
                            TalentKit
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="#waitlist"
                                onClick={scrollToWaitlist}
                                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md font-medium transition-all shadow-sm"
                            >
                                Join the Waitlist
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
