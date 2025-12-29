import { Keyboard, Image, BarChart3, CheckCircle } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      Icon: Keyboard,
      title: "단축키로 빠르게",
      description: "자주 사용하는 기능을 나만의 단축키로 설정하여 작업 속도를 2배 향상시키세요",
      bgColor: "bg-sage-100",
      iconColor: "text-sage-600"
    },
    {
      Icon: Image,
      title: "이미지 최적화 도구",
      description: "2가지 전문 도구로 이미지를 최적화하여 페이지 로딩 속도와 SEO 점수를 개선하세요",
      bgColor: "bg-mint-100",
      iconColor: "text-mint-700"
    },
    {
      Icon: BarChart3,
      title: "실시간 글자 수 확인",
      description: "글을 쓰는 동안 실시간으로 글자 수를 확인하여 최적의 콘텐츠 길이를 유지하세요",
      bgColor: "bg-forest-100",
      iconColor: "text-forest-700"
    },
    {
      Icon: CheckCircle,
      title: "자동 SEO 검증",
      description: "H1 태그 중복, 이미지 대체 텍스트 누락 등 SEO 실수를 자동으로 감지하고 알려줍니다",
      bgColor: "bg-sage-100",
      iconColor: "text-sage-700"
    }
  ];

  return (
    <section id="features" className="bg-gray-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            강력한 기능으로 생산성 향상
          </h2>
          <p className="text-lg text-gray-600">
            StoryHelper가 제공하는 4가지 핵심 기능을 만나보세요
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl ${feature.bgColor}`}>
                  <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sage-500 to-forest-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            v1.6.0 업데이트 | 2025년 8월 16일 | 93.84KB
          </p>
        </div>
      </div>
    </section>
  );
}
