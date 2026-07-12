"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CheckCircle2, ChevronDown, Lock } from "lucide-react";

export default function WaitlistForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    // Form State
    const [form, setForm] = useState({
        name: "",
        email: "",
        handle: ""
    });

    const [errors, setErrors] = useState<Partial<typeof form>>({});

    const validate = () => {
        const newErrors: Partial<typeof form> = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Valid email is required";
        if (!form.handle.trim()) newErrors.handle = "Company name is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4545'}/waitlist`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form)
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || "Failed to join waitlist");
                }

                setSuccess(true);
            } catch (error: any) {
                console.error("Waitlist Error:", error);
                setErrors({ ...errors, email: error.message || "An error occurred. Please try again." });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <section id="waitlist" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Minimalist Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">

                    {!success ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <div className="text-center mb-10">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-4">
                                    <Zap className="w-4 h-4" />
                                    Limited Spots Available
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get Early Access</h2>
                                <p className="text-slate-500">
                                    By joining, you'll be among the first to access TalentKit and get exclusive early adopter benefits including discounted plans.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="handle" className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="handle"
                                            value={form.handle}
                                            onChange={(e) => setForm({ ...form, handle: e.target.value })}
                                            placeholder="Your company name"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    {errors.handle && <p className="mt-1 text-sm text-red-500">{errors.handle}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 mt-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md disabled:opacity-70 flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
                                    ) : (
                                        <>
                                            Secure My Spot
                                            <Zap className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium pt-2">
                                    <Lock className="w-4 h-4" />
                                    We respect your privacy. Your data is secure.
                                </div>
                            </form>

                            {/* Terms & Conditions Box */}
                            <div className="mt-8 border-t border-slate-100 pt-6">
                                <button
                                    onClick={() => setShowTerms(!showTerms)}
                                    className="w-full flex items-center justify-between text-left text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                                >
                                    <span>Terms for Early Adopter Access*</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${showTerms ? "rotate-180" : ""}`} />
                                </button>

                                <AnimatePresence>
                                    {showTerms && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 pb-2 text-xs text-slate-500 space-y-2">
                                                <p>*Conditions Apply for Early Adopter Access:</p>
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li>Offer valid only for the first 500 companies registered</li>
                                                    <li>Companies must sign up during the waitlist period</li>
                                                    <li>Requires active company verification once we launch</li>
                                                    <li>Early access includes core hiring features for the first year</li>
                                                    <li>Advanced features and higher usage limits available with premium plans (with special discounts for early adopters)</li>
                                                    <li>Offer cannot be transferred or exchanged for cash value</li>
                                                    <li>TalentKit reserves the right to modify terms with suitable notice</li>
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-10"
                        >
                            <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">You're on the list!</h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-sm mx-auto">
                                Check your email for confirmation. <br />You're <strong className="text-indigo-600">successfully added</strong> to the waitlist!
                            </p>
                        </motion.div>
                    )}

                </div>
            </div>
        </section>
    );
}
