"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle, Heart, MessageCircle, Lock } from "lucide-react";
import Link from "next/link";

// Reason keys are stored in Notion as categories — never rename existing keys
const reasonOptions = [
  {
    value: "not-blogging",
    label: "블로그를 더 이상 하지 않습니다",
    placeholder: null,
  },
  {
    value: "no-longer-needed",
    label: "기대한 기능이 없었습니다",
    placeholder: "어떤 기능을 기대하셨나요?",
  },
  {
    value: "dont-know-how-to-use",
    label: "사용 방법을 잘 모르겠습니다",
    placeholder: "어디서 막히셨나요?",
  },
  {
    value: "nothing-appeared",
    label: "에디터에 아무것도 나타나지 않았습니다",
    placeholder: "어떤 화면에서 사용하셨나요? (새 에디터, 구 에디터 등)",
  },
  {
    value: "performance-issues",
    label: "성능/버그 문제",
    placeholder: "어떤 문제가 있었나요?",
  },
  {
    value: "using-alternative",
    label: "다른 확장프로그램을 사용합니다",
    placeholder: "어떤 확장프로그램인가요?",
  },
  {
    value: "other",
    label: "기타",
    placeholder: "의견을 입력해주세요...",
  },
] as const;

type ReasonKey = (typeof reasonOptions)[number]["value"];

// Zod schema for form validation
const feedbackSchema = z.object({
  reason: z.enum(
    reasonOptions.map((option) => option.value) as [ReasonKey, ...ReasonKey[]],
    { message: "삭제 이유를 선택해주세요" }
  ),
  detail: z.string().max(1000, "1000자 이내로 입력해주세요").optional(),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export default function FeedbackPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });

  const selectedReason = watch("reason");

  const selectedOption = reasonOptions.find(
    (option) => option.value === selectedReason
  );

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);

    // Extension metadata passed via the uninstall URL (validated server-side)
    const params = new URLSearchParams(window.location.search);
    const days = params.get("days");
    const meta = {
      v: params.get("v") ?? undefined,
      days: days !== null && days !== "" ? Number(days) : undefined,
      lang: params.get("lang") ?? undefined,
    };

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reason: data.reason,
          // Options without an input field never send details
          detail: selectedOption?.placeholder ? data.detail : undefined,
          ...meta,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "피드백 전송에 실패했습니다");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Feedback submission error:", error);
      alert(
        error instanceof Error ? error.message : "피드백 전송에 실패했습니다"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sage-50 to-mint-50 py-20">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-2xl border-2 border-sage-200 bg-white p-12 text-center shadow-xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sage-100 to-mint-100">
                <CheckCircle className="h-10 w-10 text-sage-600" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              피드백 감사합니다!
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              소중한 의견을 남겨주셔서 감사합니다.
              <br />더 나은 서비스로 보답하겠습니다.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sage-500 to-forest-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sage-50 to-mint-50 py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sage-100 to-mint-100">
              <MessageCircle className="h-8 w-8 text-sage-600" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            피드백을 들려주세요
          </h1>
          <p className="text-lg text-gray-600">
            StoryHelper를 사용해주셔서 감사합니다.
            <br />더 나은 서비스를 위해 삭제 이유를 알려주시겠어요?
          </p>
          <div className="mt-4 rounded-lg bg-sage-50 px-4 py-3 text-sm text-gray-600">
            <p className="flex items-start gap-2">
              <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" />
              <span>
                제출하신 정보는 서비스 개선 목적으로만 사용되며, 개인을 식별할
                수 있는 정보는 수집하지 않습니다.
              </span>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border-2 border-sage-200 bg-white p-8 shadow-xl"
        >
          <div className="mb-6">
            <label className="mb-4 block text-lg font-semibold text-gray-900">
              확장프로그램을 삭제하시는 이유가 무엇인가요?
            </label>
            <div className="space-y-3">
              {reasonOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-sage-300 hover:bg-sage-50"
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register("reason")}
                    className="h-5 w-5 border-gray-300 text-sage-600 focus:ring-2 focus:ring-sage-500"
                  />
                  <span className="ml-3 text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
            {errors.reason && (
              <p className="mt-2 text-sm text-rose-600">
                {errors.reason.message}
              </p>
            )}
          </div>

          {selectedOption?.placeholder && (
            <div className="mb-6">
              <label
                htmlFor="detail"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                자세한 내용을 알려주세요{" "}
                <span className="font-normal text-gray-400">(선택)</span>
              </label>
              <textarea
                id="detail"
                {...register("detail")}
                rows={4}
                maxLength={1000}
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
                placeholder={selectedOption.placeholder}
              />
              {errors.detail && (
                <p className="mt-2 text-sm text-rose-600">
                  {errors.detail.message}
                </p>
              )}
            </div>
          )}

          {selectedOption && !selectedOption.placeholder && (
            <div className="mb-6 rounded-lg border border-sage-200 bg-gradient-to-br from-sage-50 to-mint-50 px-5 py-4">
              <p className="flex items-start gap-2 text-sm text-gray-700">
                <Heart className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" />
                <span>
                  그동안 StoryHelper와 함께해주셔서 감사합니다.
                  <br />
                  블로그를 다시 시작하시게 되면 StoryHelper도 꼭 다시
                  찾아주세요!
                </span>
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/"
              className="rounded-lg border-2 border-gray-200 px-6 py-3 text-center font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              취소
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-gradient-to-r from-sage-500 to-forest-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? "전송 중..." : "피드백 제출"}
            </button>
          </div>
        </form>

        <div className="mt-8 rounded-xl border border-sage-200 bg-gradient-to-br from-sage-50 to-mint-50 p-6">
          <p className="text-center text-sm text-gray-600">
            다시 사용하고 싶으시다면 언제든지{" "}
            <a
              href="https://chromewebstore.google.com/detail/storyhelper-최고의-티스토리-생산성/inmbdknioncgblpeiiohmdihhidnjpfp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sage-700 hover:text-sage-800"
            >
              Chrome 웹 스토어
            </a>
            에서 재설치하실 수 있습니다.
          </p>
        </div>
      </div>
    </main>
  );
}
