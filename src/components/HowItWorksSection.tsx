import { Download, Settings, Rocket } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "설치",
      description: "Chrome 웹 스토어에서 원클릭 설치",
      Icon: Download,
      detail: "10초 이내 설치 완료"
    },
    {
      number: "02",
      title: "설정",
      description: "확장프로그램에서 원하는 기능 활성화",
      Icon: Settings,
      detail: "간편한 ON/OFF 토글"
    },
    {
      number: "03",
      title: "사용",
      description: "티스토리 글쓰기 페이지에서 바로 사용 시작",
      Icon: Rocket,
      detail: "새로고침 후 즉시 적용"
    }
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            사용 방법은 정말 간단해요
          </h2>
          <p className="text-lg text-gray-600">
            3단계만으로 StoryHelper를 사용할 수 있습니다
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-sage-200 via-mint-200 to-forest-200 lg:block"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.Icon;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                      <div className={`inline-block rounded-2xl border-2 border-sage-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                        index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                      }`}>
                        <div className="mb-4 text-5xl font-bold text-sage-200">
                          {step.number}
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="mb-3 text-gray-700">
                          {step.description}
                        </p>
                        <p className="text-sm text-sage-600">
                          {step.detail}
                        </p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-sage-100 to-mint-100 shadow-lg">
                      <Icon className="h-10 w-10 text-sage-600" />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden flex-1 lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
