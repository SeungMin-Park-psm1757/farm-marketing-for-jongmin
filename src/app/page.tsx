import Hero from "@/components/home/Hero";
import ProductRecommender from "@/components/features/ProductRecommender";
import ComparisonChart from "@/components/features/ComparisonChart";
import { Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />

      {/* Introduction / Value Prop - Redesigned */}
      <section className="relative py-24 bg-white text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center mb-6">
              <Quote size={48} className="text-[#009640]/20 rotate-180" />
            </div>
            <p className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
              "청양 농업인의 <span className="text-[#009640]">든든한 파트너</span>가 되겠습니다"
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              매년 반복되는 농사 고민, 이제 팜한농 청양대리점이 해결해드립니다. <br />
              최신 농업 기술과 지역 특화 제품으로 더 쉽고 풍요로운 농사를 약속합니다.
            </p>
          </div>
        </div>
      </section>

      <ProductRecommender />
      <ComparisonChart />
    </div>
  );
}
