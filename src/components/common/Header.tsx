"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "추천 제품", href: "#products" },
        { name: "기술력 비교", href: "#comparison" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                    ? "bg-white/90 backdrop-blur-md border-gray-200 py-3 shadow-sm"
                    : "bg-transparent border-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex flex-col leading-none">
                        <div className="text-2xl font-black tracking-tighter flex">
                            <span className="text-[#E3001B]">Farm</span>
                            <span className="text-[#009640]">Hannong</span>
                        </div>
                        <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${isScrolled ? "text-gray-500" : "text-gray-200 group-hover:text-white"
                            }`}>
                            Cheongyang Agency
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-base font-semibold transition-all hover:-translate-y-0.5 ${isScrolled
                                    ? "text-gray-600 hover:text-[#009640]"
                                    : "text-white/90 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className={`btn-primary flex items-center gap-2 text-sm font-bold py-2.5 px-6 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 ${isScrolled ? "bg-[#009640] text-white" : "bg-white text-[#009640]"
                            }`}
                    >
                        <Phone size={18} fill="currentColor" className="opacity-80" />
                        <span>상담문의</span>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-full hover:bg-black/5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-gray-900" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 md:hidden flex flex-col gap-2 animate-slide-up">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 font-bold p-3 hover:bg-gray-50 rounded-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 my-2" />
                    <Link
                        href="#contact"
                        className="flex items-center justify-center gap-2 bg-[#009640] text-white p-3 rounded-xl font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Phone size={18} />
                        상담 문의하기
                    </Link>
                </div>
            )}
        </header>
    );
}
