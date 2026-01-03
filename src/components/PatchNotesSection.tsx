"use client";

import { Calendar, ExternalLink } from "lucide-react";

interface PatchNote {
  version: string;
  date: string;
  title: string;
  blogUrl: string;
}

const patchNotes: PatchNote[] = [
  {
    version: "1.6.2",
    date: "2026-01-03",
    title: "접근성 강화 및 UI/UX 개선",
    blogUrl:
      "https://shipfriend.dev/posts/storyhelper-v1-6-2-%ED%8C%A8%EC%B9%98%EB%85%B8%ED%8A%B8",
  },
  // 추가 패치노트를 여기에 작성하세요
];

export default function PatchNotesSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            패치노트
          </h2>
          <p className="text-lg text-gray-600">
            StoryHelper의 업데이트 내역을 확인하세요
          </p>
        </div>

        <div className="space-y-6">
          {patchNotes.map((note, index) => (
            <a
              key={index}
              href={note.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border-2 border-gray-200 bg-white transition-all hover:border-sage-300 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-sage-100 to-mint-100 px-3 py-1 text-sm font-semibold text-sage-800">
                      v{note.version}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{note.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sage-600">
                    <span className="text-sm font-medium">자세히 보기</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {note.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {patchNotes.length === 0 && (
          <div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center">
            <p className="text-gray-500">아직 패치노트가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
}
