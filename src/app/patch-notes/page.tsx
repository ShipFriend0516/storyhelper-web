import type { Metadata } from "next";
import PatchNotesSection from "@/components/PatchNotesSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "패치 노트",
  description: "StoryHelper 확장프로그램의 업데이트 내역과 새로운 기능을 확인하세요.",
  alternates: {
    canonical: "https://storyhelper.shipfriend.dev/patch-notes",
  },
  openGraph: {
    title: "패치 노트 | StoryHelper",
    description: "StoryHelper 확장프로그램의 업데이트 내역과 새로운 기능을 확인하세요.",
    url: "https://storyhelper.shipfriend.dev/patch-notes",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function PatchNotesPage() {
  return (
    <main className="min-h-screen">
      <PatchNotesSection />
      <Footer />
    </main>
  );
}
