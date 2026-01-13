import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20 pb-10">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Mesh */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#009640] opacity-20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#E3001B] opacity-10 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-8 animate-fade-in shadow-2xl">
                    <span className="flex h-2 w-2 rounded-full bg-[#E3001B]"></span>
                    청양군 농업인 맞춤형 솔루션
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] animate-slide-up">
                    성공 농사의 시작,<br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22c55e]">
                        팜한농 청양대리점
                    </span>
                    과 함께
                </h1>

                {/* Sub headline */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed animate-slide-up [animation-delay:200ms]">
                    청양의 기후와 작물에 최적화된 비료와 농법을 제안합니다. <br className="hidden md:block" />
                    팜한농만의 <span className="text-white font-semibold">차별화된 기술력</span>으로 노동력은 줄이고 수확량은 획기적으로 높이세요.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up [animation-delay:400ms]">
                    <Link
                        href="#products"
                        className="group flex items-center justify-center gap-2 bg-[#009640] hover:bg-[#008535] text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95"
                    >
                        내 작물 맞춤 처방받기
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#comparison"
                        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-white text-lg font-bold px-8 py-4 rounded-full transition-all"
                    >
                        기술력 확인하기
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-fade-in [animation-delay:600ms]">
                    {[
                        "노동력 절감", "수확량 증대", "지역 맞춤형", "전문가 상담"
                    ].map((text) => (
                        <div key={text} className="flex items-center justify-center gap-2 text-gray-400 font-medium">
                            <CheckCircle2 size={16} className="text-[#009640]" />
                            {text}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
