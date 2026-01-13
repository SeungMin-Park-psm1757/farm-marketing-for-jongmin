"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationFab() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="flex flex-col gap-3"
                    >
                        <Link
                            href="mailto:help@farmhannong.com" // Placeholder or specific link if available
                            className="flex items-center gap-2 bg-[#fee500] text-[#3c1e1e] p-3 rounded-full shadow-lg hover:brightness-95 font-medium min-w-[140px] justify-center"
                        >
                            <MessageCircle size={20} />
                            카카오톡 상담
                        </Link>
                        <Link
                            href="tel:01046621185"
                            className="flex items-center gap-2 bg-[#E3001B] text-white p-3 rounded-full shadow-lg hover:bg-[#c20017] font-medium min-w-[140px] justify-center"
                        >
                            <Phone size={20} />
                            전화 연결
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-xl transition-all duration-300 ${isOpen ? "bg-gray-800 rotate-90" : "bg-[#009640] hover:scale-105"
                    } text-white`}
                aria-label="상담 문의"
            >
                {isOpen ? <X size={24} /> : <Phone size={24} className="animate-pulse" />}
            </button>
        </div>
    );
}
