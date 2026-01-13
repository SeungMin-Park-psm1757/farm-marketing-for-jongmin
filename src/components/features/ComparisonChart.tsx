"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from "framer-motion";
import { Timer, Leaf, TrendingUp } from "lucide-react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function ComparisonChart() {
    const options: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    font: { family: "sans-serif", size: 12 },
                    boxWidth: 10,
                    usePointStyle: true,
                }
            },
            tooltip: {
                backgroundColor: '#1e293b',
                padding: 12,
                cornerRadius: 8,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: '#f1f5f9', borderDash: [4, 4] },
                ticks: { font: { size: 11 } }
            },
            x: {
                grid: { display: false },
                ticks: { font: { size: 11, weight: 'bold' } }
            }
        }
    };

    const data = {
        labels: ['비료 살포 (회)', '노동 시간 (h)', '비료량 (kg)'],
        datasets: [
            {
                label: '일반 관행',
                data: [4, 12, 60],
                backgroundColor: '#cbd5e1',
                borderRadius: 6,
                barPercentage: 0.6,
            },
            {
                label: '팜한농 솔루션',
                data: [1, 2, 45],
                backgroundColor: '#009640',
                borderRadius: 6,
                barPercentage: 0.6,
            },
        ],
    };

    return (
        <section id="comparison" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        숫자로 증명하는 <span className="text-[#009640]">압도적 기술 격차</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        팜한농의 기술력은 단순한 감이 아닙니다. 확실한 데이터로 노동력 절감 효과를 확인하세요.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Chart Area */}
                    <div className="bg-slate-50 p-8 rounded-[2.5rem] shadow-inner relative min-h-[400px]">
                        <div className="absolute top-8 left-8">
                            <span className="bg-white shadow-sm px-3 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider border border-slate-100">Performance</span>
                        </div>
                        <div className="h-[300px] mt-8">
                            <Bar options={options} data={data} />
                        </div>
                        <p className="text-xs text-center text-slate-400 mt-6">* 10a(300평) 기준 자사 시험 결과 (환경에 따라 상이할 수 있음)</p>
                    </div>

                    {/* Content Area */}
                    <div className="space-y-8">

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-[#E3001B]">
                                <Timer size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">노동력 획기적 절감</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    <span className="font-semibold text-slate-900">'한번에측조'</span>는 이앙과 동시에 비료를 처리합니다.
                                    더운 여름, 무거운 비료 포대를 들고 논에 들어갈 필요가 없습니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#009640]">
                                <Leaf size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">에코뮬라(EcoMula) 광분해</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    수확 후 햇빛에 의해 코팅 막이 자연 분해되는
                                    <span className="font-semibold text-slate-900"> 친환경 신기술</span>을 적용했습니다.
                                    토양 잔류 걱정 없이 지속 가능한 농업을 실현하세요.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <TrendingUp size={24} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">수확량 및 품질 향상</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    작물 생육 주기에 맞춘 정밀한 양분 용출(Sigmoid 용출)로
                                    도장은 억제하고 등숙률은 높여 고품질 다수확이 가능합니다.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
