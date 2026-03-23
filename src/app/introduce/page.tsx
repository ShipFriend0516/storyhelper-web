"use client";

import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen } from "lucide-react";

const steps = [
  {
    title: "확장프로그램 아이콘 클릭",
    description:
      "크롬 우측 상단의 확장프로그램 목록에서 Storyhelper 아이콘을 클릭하세요.",
    tip: "퍼즐 조각 아이콘을 눌러 확장프로그램 목록을 열 수 있어요.",
    imageSrc: "/guide/step-1.png",
  },
  {
    title: "원하는 기능 토글하기",
    description:
      "팝업에서 사용하고 싶은 기능의 토글을 켜세요. 필요 없는 기능은 꺼둘 수 있어요.",
    tip: "각 기능은 독립적으로 켜고 끌 수 있어요.",
    imageSrc: "/guide/step-2.png",
  },
  {
    title: "페이지 새로고침",
    description:
      "티스토리 글쓰기 페이지를 새로고침(F5)해야 변경사항이 적용됩니다.",
    tip: "기능을 바꿀 때마다 새로고침이 필요해요.",
    imageSrc: "/guide/step-3.png",
  },
  {
    title: "이미지 도구바 추가됨",
    description:
      "이미지 관련 기능이 티스토리 에디터 상단 도구바에 자연스럽게 추가됩니다.",
    tip: "이미지를 선택하면 추가 도구 버튼이 나타나요.",
    imageSrc: "/guide/step-4.png",
  },
  {
    title: "SEO 검증 기능",
    description:
      "SEO 검증 기능은 화면 우측 하단에 나타납니다. 글을 작성하면서 실시간으로 확인할 수 있어요.",
    tip: "SEO 점수가 실시간으로 업데이트돼요.",
    imageSrc: "/guide/step-5.png",
  },
  {
    title: "텍스트 카운터",
    description:
      "텍스트 카운터는 화면 우측 상단에 위치합니다. 글자 수를 실시간으로 확인할 수 있어요.",
    tip: "목표 글자 수를 설정해두면 더 편리하게 관리할 수 있어요.",
    imageSrc: "/guide/step-6.png",
  },
  {
    title: "인디케이터로 빠르게 토글",
    description:
      "화면 왼쪽 하단의 인디케이터를 통해서도 기능을 켜고 끌 수 있어요. 팝업을 열지 않고도 빠르게 조정할 수 있답니다.",
    tip: "인디케이터는 현재 활성화된 기능 수를 함께 보여줘요.",
    imageSrc: "/guide/step-7.png",
  },
];

export default function IntroducePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const confettiFired = useRef(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [spotlightVisible, setSpotlightVisible] = useState(false);
  const [spotlightOpacity, setSpotlightOpacity] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;
  const step = steps[currentStep];

  useEffect(() => {
    setImgError(false);
    setImgLoading(true);

    if (isLastStep && !confettiFired.current) {
      confettiFired.current = true;
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6ba896", "#4a7c6f", "#a8c5bc", "#8fb8ae", "#2d6a5f"],
      });

      // 1) 화면 중앙에 스포트라이트 등장
      setTimeout(() => {
        setSpotlightPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
        setSpotlightVisible(true);
        setSpotlightOpacity(1);

        // 2) 버튼 위치로 이동
        setTimeout(() => {
          if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setSpotlightPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
          }
        }, 150);

        // 3) 페이드아웃
        setTimeout(() => setSpotlightOpacity(0), 2800);
        setTimeout(() => setSpotlightVisible(false), 3400);
      }, 900);
    }
  }, [currentStep, isLastStep]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && !isLastStep) setCurrentStep((s) => s + 1);
      if (e.key === "ArrowLeft" && !isFirstStep) setCurrentStep((s) => s - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLastStep, isFirstStep]);

  return (
    <main className="min-h-screen bg-linear-to-br from-sage-50 to-mint-50">
      {/* Spotlight overlay */}
      {spotlightVisible && (
        <div
          className="fixed inset-0 z-50 pointer-events-none"
          style={{ opacity: spotlightOpacity, transition: "opacity 0.6s ease" }}
        >
          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.72)",
              left: `${spotlightPos.x - 110}px`,
              top: `${spotlightPos.y - 110}px`,
              transition: "left 1.1s cubic-bezier(0.4, 0, 0.2, 1), top 1.1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      )}
      {/* Top header */}
      <div className="border-b border-sage-100 bg-white/70 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-sage-600" />
            <span className="font-semibold text-gray-800">
              Storyhelper 시작 가이드
            </span>
          </div>
          <span className="text-sm text-gray-400">
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-100">
        <div
          className="h-full bg-linear-to-r from-sage-500 to-forest-600 transition-all duration-300"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-16">
          {/* Image */}
          <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
            {/* Skeleton */}
            {imgLoading && !imgError && (
              <div className="absolute inset-0 animate-pulse">
                <div className="h-full w-full rounded-2xl bg-gray-100" />
              </div>
            )}

            {imgError ? (
              <div className="flex flex-col items-center gap-3 text-gray-300">
                <div className="h-16 w-16 rounded-full bg-gray-100" />
                <span className="text-sm">스크린샷 준비 중</span>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={step.imageSrc}
                alt={step.title}
                onLoad={() => setImgLoading(false)}
                onError={() => { setImgLoading(false); setImgError(true); }}
                className={`max-h-full w-full object-contain transition-opacity duration-300 ${imgLoading ? "opacity-0" : "opacity-100"}`}
              />
            )}
          </div>

          {/* Text content */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-sage-100 px-3 py-1 text-sm font-semibold text-sage-700">
              Step {String(currentStep + 1).padStart(2, "0")}
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {step.title}
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              {step.description}
            </p>
            {step.tip && (
              <div className="rounded-xl bg-white px-5 py-4 text-sm text-sage-700 shadow-sm">
                <span className="font-semibold">TIP.</span> {step.tip}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-sage-100 pt-8">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                aria-label={`${i + 1}번 슬라이드로 이동`}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  i === currentStep
                    ? "w-6 bg-sage-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentStep((s) => s - 1)}
              disabled={isFirstStep}
              className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 px-5 py-2.5 font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
              이전
            </button>

            {isLastStep ? (
              <a
                ref={buttonRef}
                href="https://www.tistory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-51 flex cursor-pointer items-center gap-2 rounded-lg bg-linear-to-r from-sage-500 to-forest-600 px-5 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                티스토리 바로가기
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <button
                onClick={() => setCurrentStep((s) => s + 1)}
                className="flex cursor-pointer items-center gap-2 rounded-lg bg-linear-to-r from-sage-500 to-forest-600 px-5 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                다음
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Final CTA */}
        {isLastStep && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-800">
              그럼 이제 글을 작성하러 가볼까요?
            </p>
            <p className="mt-2 text-sm text-gray-500">
              궁금한 점이 있으면 언제든지 문의주세요.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
