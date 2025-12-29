"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle, MessageCircle, Lock } from "lucide-react";
import Link from "next/link";

// Zod schema for form validation
const feedbackSchema = z
  .object({
    reason: z.enum([
      "no-longer-needed",
      "using-alternative",
      "performance-issues",
      "other",
    ]),
    otherReason: z.string().optional(),
  })
  .refine(
    (data) => {
      // If "other" is selected, otherReason must be provided
      if (data.reason === "other") {
        return data.otherReason && data.otherReason.trim().length > 0;
      }
      return true;
    },
    {
      message: "기타 사유를 입력해주세요",
      path: ["otherReason"],
    }
  );

type FeedbackFormData = z.infer<typeof feedbackSchema>;

const reasonOptions = [
  {
    value: "no-longer-needed" as const,
    label: "기능이 필요 없어졌습니다",
  },
  {
    value: "using-alternative" as const,
    label: "다른 확장프로그램을 사용합니다",
  },
  {
    value: "performance-issues" as const,
    label: "성능/버그 문제",
  },
  {
    value: "other" as const,
    label: "기타",
  },
];

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

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

          {selectedReason === "other" && (
            <div className="mb-6">
              <label
                htmlFor="otherReason"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                자세한 내용을 알려주세요
              </label>
              <textarea
                id="otherReason"
                {...register("otherReason")}
                rows={4}
                className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
                placeholder="의견을 입력해주세요..."
              />
              {errors.otherReason && (
                <p className="mt-2 text-sm text-rose-600">
                  {errors.otherReason.message}
                </p>
              )}
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
