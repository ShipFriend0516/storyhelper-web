import { X, Check, Frown, Sparkles } from 'lucide-react';

export default function ProblemSolutionSection() {
  const problems = [
    "SEO 규칙을 지키기 어려움 (H1 중복, 이미지 alt 누락)",
    "이미지 최적화에 시간 소요",
    "글자 수를 수동으로 확인해야 함",
    "반복 작업이 많아 비효율적"
  ];

  const solutions = [
    "자동 SEO 검증으로 실수 방지",
    "원클릭 이미지 최적화",
    "실시간 글자 수 표시",
    "단축키로 빠른 작업 처리"
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            블로거의 고민, 해결해드립니다
          </h2>
          <p className="text-lg text-gray-600">
            티스토리 블로그 운영하면서 이런 불편함 느끼셨나요?
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Problems */}
          <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                <Frown className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">기존의 불편함</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-500">
                    <X className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="rounded-2xl border-2 border-sage-200 bg-gradient-to-br from-sage-50 to-mint-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-100">
                <Sparkles className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">StoryHelper 해결책</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-forest-500">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="font-medium text-gray-900">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
