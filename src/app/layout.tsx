import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ConsultationFab from "@/components/common/ConsultationFab";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "팜한농 청양대리점 - 지역 맞춤형 농업 솔루션",
  description: "충남 청양의 주요 작물에 최적화된 팜한농 비료, 농약 추천. 노동력 절감과 고효율 농업을 위한 최고의 선택.",
  icons: {
    icon: "/favicon.ico", // Assuming default exists, or will need to create/ignore
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ConsultationFab />
      </body>
    </html>
  );
}
