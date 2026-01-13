import { Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">

                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="text-3xl font-black tracking-tighter flex mb-2">
                                <span className="text-[#E3001B]">Farm</span>
                                <span className="text-[#009640]">Hannong</span>
                            </div>
                        </Link>
                        <p className="max-w-md text-lg text-slate-300 font-medium">
                            청양의 농업 파트너, 이종민입니다.<br />
                            최고의 기술력과 제품으로 성공적인 농사를 지원합니다.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="tel:01046621185" className="px-5 py-2.5 bg-[#009640] text-white rounded-lg font-bold hover:bg-[#008535] transition-colors flex items-center gap-2">
                                <Phone size={18} />
                                전화 연결
                            </a>
                            <a href="https://www.farmhannong.com" target="_blank" className="px-5 py-2.5 bg-slate-800 text-slate-200 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
                                본사 홈페이지 <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:text-right">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-lg">Contact Info</h4>
                            <ul className="space-y-3">
                                <li className="flex lg:justify-end items-center gap-2">
                                    <span className="text-slate-500">대리점 팀장</span>
                                    <strong className="text-slate-200">이종민</strong>
                                </li>
                                <li className="flex lg:justify-end items-center gap-2">
                                    <span className="text-slate-500">Mobile</span>
                                    <strong className="text-slate-200">010-4662-1185</strong>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-white font-bold text-lg">Menu</h4>
                            <ul className="space-y-2">
                                <li><Link href="#products" className="hover:text-white transition-colors">추천 제품</Link></li>
                                <li><Link href="#comparison" className="hover:text-white transition-colors">기술력 비교</Link></li>
                                <li><Link href="#contact" className="hover:text-white transition-colors">상담 문의</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
                    <p>© {new Date().getFullYear()} FarmHannong Cheongyang Agency. All rights reserved.</p>
                    <p>Designed for Farmers.</p>
                </div>
            </div>
        </footer>
    );
}
