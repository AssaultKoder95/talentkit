"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Clock, Star } from "lucide-react";

const benefits = [
    {
        title: "AI Job Matching",
        description: "Our AI analyzes your profile and matches you with roles that fit your skills and goals.",
        icon: Sparkles,
        color: "text-amber-500",
        bgColor: "bg-amber-100",
    },
    {
        title: "Smart Recommendations",
        description: "Get personalized job recommendations based on your experience, preferences, and career goals.",
        icon: Target,
        color: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        title: "Faster Applications",
        description: "Apply to matched roles with one click. No more filling out the same forms repeatedly.",
        icon: Clock,
        color: "text-emerald-500",
        bgColor: "bg-emerald-100",
    },
    {
        title: "Career Insights",
        description: "See how you rank, get interview prep tips, and track your application progress in real-time.",
        icon: Star,
        color: "text-purple-500",
        bgColor: "bg-purple-100",
    },
];

export default function ValueProposition() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Why TalentKit?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Transform your job search from endless applications into AI-powered career matches.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${benefit.bgColor} ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <benefit.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
