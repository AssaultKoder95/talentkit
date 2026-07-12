import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ValueProposition from "@/components/landing/ValueProposition";
import Features from "@/components/landing/Features";
import SocialProof from "@/components/landing/SocialProof";
import WaitlistForm from "@/components/landing/WaitlistForm";
import Footer from "@/components/landing/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200 selection:text-purple-900">
            <Navbar />
            <Hero />
            <SocialProof />
            <ValueProposition />
            <Features />
            <WaitlistForm />
            <Footer />
            <Analytics />
        </main>
    );
}
