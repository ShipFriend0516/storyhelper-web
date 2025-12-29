'use client';

import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "설치 후 작동하지 않아요",
      answer: "기능 활성화 후 페이지를 새로고침 해주세요. 확장프로그램 설정을 변경한 후에는 반드시 새로고침이 필요합니다."
    },
    {
      question: "단축키가 작동하지 않아요",
      answer: "브라우저 기본 단축키와 겹치는 경우 작동하지 않을 수 있습니다. 다른 단축키로 변경해보세요. Chrome 설정에서 확장프로그램 단축키를 확인할 수 있습니다."
    },
    {
      question: "개인정보는 안전한가요?",
      answer: "StoryHelper는 어떠한 데이터도 수집하거나 외부로 전송하지 않습니다. 모든 기능은 로컬에서 동작하며, 사용자의 개인정보는 완벽하게 보호됩니다."
    },
    {
      question: "네이버 블로그에서도 사용할 수 있나요?",
      answer: "현재는 티스토리 전용입니다. 티스토리 플랫폼에 최적화된 기능들을 제공하고 있습니다."
    },
    {
      question: "무료인가요?",
      answer: "네, 완전 무료입니다. 모든 기능을 제한 없이 사용하실 수 있으며, 향후에도 무료로 제공될 예정입니다."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-gray-600">
            궁금하신 점이 있으신가요?
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-sage-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-100 bg-sage-50 p-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-2 border-sage-200 bg-gradient-to-br from-sage-50 to-mint-50 p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-gray-900">
            다른 질문이 있으신가요?
          </h3>
          <p className="mb-6 text-gray-600">
            GitHub 또는 이메일로 문의주시면 빠르게 답변드리겠습니다
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:sjw4371@naver.com"
              className="inline-flex items-center gap-2 text-sage-700 hover:text-sage-800"
            >
              <Mail className="h-5 w-5" />
              sjw4371@naver.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
