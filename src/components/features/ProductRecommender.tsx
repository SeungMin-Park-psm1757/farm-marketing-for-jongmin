"use client";

import { useState } from "react";
import { cheongyangCrops, recommendProducts } from "@/lib/data";
import { Plus, ArrowRight, Sprout } from "lucide-react";

export default function ProductRecommender() {
    const [selectedCrop, setSelectedCrop] = useState<string>(cheongyangCrops[0].id);
    const recommendations = recommendProducts(selectedCrop);

    return (
        <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-[#009640] text-sm font-bold mb-4">
                        <Sprout size={14} /> 맞춤형 처방 솔루션
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        우리 지역 주요 작물에<br />
                        <span className="text-[#009640]">가장 적합한 제품</span>을 확인하세요
                    </h2>
                    <p className="text-slate-500 text-lg">
                        재배하는 작물을 선택하시면 팜한농 청양대리점이 엄선한 최적의 솔루션을 제안해드립니다.
                    </p>
                </div>

                {/* Crop Selection */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {cheongyangCrops.map((crop) => (
                        <button
                            key={crop.id}
                            onClick={() => setSelectedCrop(crop.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 ${selectedCrop === crop.id
                                    ? "bg-white text-[#009640] shadow-xl shadow-green-900/5 ring-2 ring-[#009640] -translate-y-1"
                                    : "bg-white text-slate-400 hover:text-slate-600 hover:bg-slate-50 border border-slate-100"
                                }`}
                        >
                            <span className="text-2xl filter drop-shadow-sm">{crop.icon}</span>
                            {crop.name}
                        </button>
                    ))}
                </div>

                {/* Recommendations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recommendations.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-[2rem] p-2 hover:p-1 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-green-900/10"
                        >
                            <div className="bg-white rounded-[1.8rem] h-full border border-slate-100 overflow-hidden flex flex-col">
                                {/* Image Area */}
                                <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                        {/* Placeholder until real images are added */}
                                        <span className="font-bold text-6xl opacity-20">IMAGE</span>
                                    </div>
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                        <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                                            {product.category}
                                        </span>
                                        {product.tags.includes("신기술") && (
                                            <span className="bg-[#E3001B] text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
                                                NEW
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#009640] transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                        {product.description}
                                    </p>

                                    <div className="bg-slate-50 rounded-xl p-4 mb-6">
                                        <ul className="space-y-3">
                                            {product.features.slice(0, 3).map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                                                    <div className="mt-0.5 min-w-5 w-5 h-5 rounded-full bg-[#009640]/10 flex items-center justify-center text-[#009640]">
                                                        <Plus size={12} strokeWidth={4} />
                                                    </div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-2">
                                        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-[#009640] transition-colors group/btn">
                                            자세히 보기
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
