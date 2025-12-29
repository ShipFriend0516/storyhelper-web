'use client';

import { Star, Users, Zap, Lock, DollarSign, ArrowRight, ChevronDown } from 'lucide-react';
import { useExtensionVersion } from '@/hooks/useExtensionVersion';

export default function HeroSection() {
  const { version } = useExtensionVersion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage-100 to-mint-100 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-2 text-sm font-medium text-sage-700">
            <span className="flex h-2 w-2 rounded-full bg-forest-500"></span>
            <span className="flex items-center gap-2">
              {version && <span className="text-xs opacity-75">v{version}</span>}
              {version && <span className="text-gray-400">|</span>}
              <Users className="h-4 w-4" />
              200+ 활성 사용자 |
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              5.0/5.0 평점
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            티스토리 블로그 생산성을
            <br />
            <span className="bg-gradient-to-r from-sage-600 to-forest-600 bg-clip-text text-transparent">
              10배 높이는 확장프로그램
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg leading-8 text-gray-600 sm:text-xl">
            SEO 최적화부터 글자 수 카운팅까지,
            <br className="hidden sm:block" />
            StoryHelper와 함께라면 간단합니다
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://chromewebstore.google.com/detail/storyhelper-최고의-티스토리-생산성/inmbdknioncgblpeiiohmdihhidnjpfp"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sage-500 to-forest-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:w-auto"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Chrome에 추가하기
              {version && <span className="text-xs opacity-75">v{version}</span>}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-sage-300 bg-white px-8 py-4 text-base font-semibold text-sage-700 transition-all hover:border-sage-500 hover:bg-sage-50 sm:w-auto"
            >
              기능 살펴보기
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          {/* Feature Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <Zap className="h-4 w-4 text-amber-500" />
              10초 설치
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <Lock className="h-4 w-4 text-forest-600" />
              개인정보 수집 없음
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <DollarSign className="h-4 w-4 text-sage-600" />
              완전 무료
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-4 top-20 h-72 w-72 rounded-full bg-sage-200 opacity-20 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-4 bottom-20 h-72 w-72 rounded-full bg-mint-200 opacity-20 blur-3xl"></div>
    </section>
  );
}
