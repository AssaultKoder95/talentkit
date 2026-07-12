import Link from "next/link";
import { Briefcase, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-slate-800 p-1.5 rounded-lg text-white">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold text-white">TalentKit</span>
                        </div>
                        <p className="max-w-xs text-sm">
                            AI-native career platform. Get matched with roles that fit — land your dream job faster.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <a href="mailto:hello@talentkit.ai" className="text-sm hover:text-white transition-colors">
                            hello@talentkit.ai
                        </a>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8 gap-4">
                    <p className="text-sm">© 2026 TalentKit. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" target="_blank" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-white">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" target="_blank" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-white">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
