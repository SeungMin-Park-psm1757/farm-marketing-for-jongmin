export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    features: string[];
    imageUrl: string; // Using placeholder or generic image for now
    crops: string[]; // Target crops
    tags: string[]; // e.g., "Labor Saving", "Eco-friendly"
}

export const products: Product[] = [
    {
        id: "longstar-plus",
        name: "롱스타플러스",
        category: "비료",
        description: "한 번 시비로 수확까지! 노동력을 획기적으로 절감하는 완효성 비료.",
        features: [
            "생육 기간에 맞춰 양분이 공급됨",
            "웃거름 생략 가능으로 노동력 절감",
            "환경 오염 저감 효과"
        ],
        imageUrl: "/images/longstar.jpg", // Placeholder
        crops: ["고추", "마늘", "양파"],
        tags: ["노동력절감", "완효성"]
    },
    {
        id: "once-fertilizer",
        name: "한번에측조",
        category: "비료",
        description: "이앙과 동시에 비료 살포! 100% 코팅 비료로 안심하고 사용.",
        features: [
            "이앙 동시 처리로 가지거름, 이삭거름 생략",
            "국내 유일 100% 코팅 완효성 비료",
            "도장 억제 및 미질 향상"
        ],
        imageUrl: "/images/once.jpg",
        crops: ["벼"],
        tags: ["노동력절감", "이앙동시"]
    },
    {
        id: "power-growth",
        name: "광분해 한번에에코",
        category: "비료",
        description: "국내 최초 광분해 코팅 기술 적용! 토양에 남지 않아 환경 친화적.",
        features: [
            "햇빛에 의해 코팅막이 자연 분해",
            "폐플라스틱 문제 해결",
            "완효성 비료의 장점 그대로 유지"
        ],
        imageUrl: "/images/eco.jpg",
        crops: ["벼", "고추", "마늘"],
        tags: ["친환경", "광분해", "신기술"]
    },
    {
        id: "speed-calcium",
        name: "관주용 칼슘박사",
        category: "영양제",
        description: "빠른 흡수, 확실한 효과! 고품질 농산물 생산을 위한 필수 선택.",
        features: [
            "칼슘 결핍 예방 및 치료",
            "저장성 및 당도 향상",
            "뿌리 발육 촉진"
        ],
        imageUrl: "/images/calcium.jpg",
        crops: ["고추", "토마토", "멜론", "수박"],
        tags: ["품질향상", "칼슘"]
    }
];

export const cheongyangCrops = [
    { id: "pepper", name: "고추", icon: "🌶️" },
    { id: "tomato", name: "토마토", icon: "🍅" },
    { id: "melon", name: "멜론", icon: "🍈" },
    { id: "garlic", name: "마늘/양파", icon: "🧄" },
    { id: "rice", name: "벼(수도)", icon: "🌾" },
];

export function recommendProducts(cropName: string): Product[] {
    if (!cropName) return [];
    // Simple filter logic
    return products.filter(p => p.crops.includes(cropName));
}
