import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage-600 to-forest-700 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            지금 바로 시작하세요
          </h2>
          <p className="mb-10 text-lg text-sage-100 sm:text-xl">
            200명 이상의 블로거가 이미 StoryHelper로
            <br className="hidden sm:block" />
            생산성을 향상시키고 있습니다
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://chromewebstore.google.com/detail/storyhelper-최고의-티스토리-생산성/inmbdknioncgblpeiiohmdihhidnjpfp"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-sage-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:w-auto"
            >
              <CheckCircle className="h-5 w-5" />
              지금 무료로 시작하기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-sage-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>설치 시간 10초</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>용량 93.84KB</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>한국어 지원</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-mint-300 opacity-20 blur-3xl"></div>
    </section>
  );
}
