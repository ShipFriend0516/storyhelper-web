"use client";

import { Calendar, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { getLatestPatchNote } from "@/constants/patchNotes";

export default function LatestUpdateSection() {
  const latestPatchNote = getLatestPatchNote();

  // 패치노트가 없으면 섹션을 렌더링하지 않음
  if (!latestPatchNote) {
    return null;
  }
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-sage-600" />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                최신 업데이트
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              StoryHelper의 새로운 기능을 확인해보세요
            </p>
          </div>

          {/* Latest Patch Note Card */}
          <a
            href={latestPatchNote.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border-2 border-sage-200 bg-gradient-to-br from-sage-50 to-mint-50 transition-all hover:border-sage-300 hover:shadow-xl"
          >
            <div className="p-8">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-sage-500 to-forest-600 px-4 py-1.5 text-sm font-semibold text-white">
                    v{latestPatchNote.version}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{latestPatchNote.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sage-600 transition-transform group-hover:translate-x-1">
                  <span className="text-sm font-medium">자세히 보기</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {latestPatchNote.title}
              </h3>
            </div>
          </a>

          {/* View All Link */}
          <div className="mt-8 text-center">
            <Link
              href="/patch-notes"
              className="inline-flex items-center gap-2 text-sage-700 transition-colors hover:text-sage-800"
            >
              <span className="font-semibold">모든 패치노트 보기</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
