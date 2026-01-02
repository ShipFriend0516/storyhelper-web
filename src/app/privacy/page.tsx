"use client";

import Link from "next/link";
import { Shield, Globe } from "lucide-react";
import { useState } from "react";

type Language = "ko" | "en";

export default function PrivacyPolicyPage() {
  const [language, setLanguage] = useState<Language>("ko");

  return (
    <main className="min-h-screen bg-gradient-to-br from-sage-50 to-mint-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sage-100 to-mint-100">
              <Shield className="h-8 w-8 text-sage-600" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Privacy Policy
            <span className="block text-3xl mt-2">개인정보처리방침</span>
          </h1>
          <div className="space-y-1 text-sm text-gray-600 mb-6">
            <p><strong>Last Updated / 최종 업데이트</strong>: 2026-01-02</p>
            <p><strong>Extension / 확장프로그램</strong>: StoryHelper v1.6.1</p>
          </div>

          {/* Language Selector */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <Globe className="h-5 w-5 text-sage-600" />
            <div className="inline-flex rounded-lg border-2 border-sage-200 bg-white p-1 shadow-md">
              <button
                onClick={() => setLanguage("ko")}
                className={`rounded-md px-6 py-2 text-sm font-semibold transition-all ${
                  language === "ko"
                    ? "bg-gradient-to-r from-sage-500 to-forest-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-sage-50"
                }`}
              >
                한국어 (KR)
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-md px-6 py-2 text-sm font-semibold transition-all ${
                  language === "en"
                    ? "bg-gradient-to-r from-sage-500 to-forest-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-sage-50"
                }`}
              >
                English (EN)
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="rounded-2xl border-2 border-sage-200 bg-white p-8 md:p-12 shadow-xl">
          <div className="prose prose-gray max-w-none">
            {/* English Version */}
            {language === "en" && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-sage-200">
                English
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                StoryHelper ("we", "our", or "the extension") is committed to protecting your privacy.
                This Privacy Policy explains how we handle information when you use our Chrome extension
                for Tistory blog writing enhancement.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                StoryHelper collects and stores minimal information locally on your device to provide its functionality:
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Locally Stored Data</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Feature Toggle States</strong>: Which features you have enabled or disabled (func_0 through func_4)</li>
                <li><strong>User Preferences</strong>: Your custom keyboard shortcut configurations</li>
                <li><strong>Temporary Content</strong>: Image alt text you input (stored temporarily while editing)</li>
                <li><strong>Extension Settings</strong>: Your personalized extension settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h3>
              <p className="text-gray-700 leading-relaxed mb-2">All collected information is used solely for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Providing core extension functionality</li>
                <li>Maintaining your preferences across browser sessions</li>
                <li>Enhancing your Tistory blog writing experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Storage and Security</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Local Storage Only</strong>: All data is stored exclusively in your browser's local storage
                (chrome.storage.local) on your device.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>No External Transmission</strong>: We do NOT:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Send any data to external servers</li>
                <li>Share your information with third parties</li>
                <li>Track your browsing activity</li>
                <li>Collect personal identification information</li>
                <li>Use analytics or tracking tools</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Data Security</strong>: Your data remains on your device and is protected by your browser's security measures.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Retention and Deletion</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Data is stored only while you use the extension</li>
                <li>All extension data is automatically deleted when you uninstall StoryHelper</li>
                <li>You can clear extension data at any time through Chrome's extension settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Permissions Explanation</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                StoryHelper requires the following Chrome permissions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>storage</strong>: To save your feature preferences and settings locally on your device</li>
                <li><strong>Content Scripts on Tistory</strong>: To inject features into Tistory editor pages (<code className="bg-gray-100 px-2 py-1 rounded text-sm">*.tistory.com/manage/*</code>)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We request only the minimum permissions necessary for functionality.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h3>
              <p className="text-gray-700 leading-relaxed">
                StoryHelper does not integrate with any third-party services or APIs.
                The extension operates entirely within your browser.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Target Websites</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                StoryHelper only operates on the following Tistory URLs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">https://*.tistory.com/manage/newpost/*</code> (New post editor)</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">https://*.tistory.com/manage/page?returnURL=/manage/pages</code> (Page editor)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                The extension has no access to other websites or your general browsing activity.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                StoryHelper does not knowingly collect any information from children under the age of 13.
                The extension is designed for general blog writing purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted in this document
                with an updated "Last Updated" date.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                If you have questions about this Privacy Policy, please contact us through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>GitHub Issues: <a href="https://github.com/ShipFriend0516/StoryHelper/issues" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 underline">StoryHelper Issues</a></li>
                <li>Chrome Web Store Support Page</li>
              </ul>
            </section>
            )}

            {/* Korean Version */}
            {language === "ko" && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-sage-200">
                한국어
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">소개</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                StoryHelper(이하 "확장프로그램")는 사용자의 개인정보 보호를 최우선으로 생각합니다.
                본 개인정보처리방침은 티스토리 블로그 글쓰기 향상을 위한 Chrome 확장프로그램 사용 시 정보 처리 방식을 설명합니다.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">수집하는 정보</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                StoryHelper는 기능 제공을 위해 다음의 최소한의 정보를 사용자 기기에 로컬로 저장합니다:
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">로컬 저장 데이터</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>기능 활성화 상태</strong>: 활성화/비활성화한 기능 목록 (func_0 ~ func_4)</li>
                <li><strong>사용자 설정</strong>: 사용자 지정 키보드 단축키 설정</li>
                <li><strong>임시 콘텐츠</strong>: 입력한 이미지 대체 텍스트 (편집 중 임시 저장)</li>
                <li><strong>확장프로그램 설정</strong>: 개인화된 확장프로그램 설정값</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">정보 사용 목적</h3>
              <p className="text-gray-700 leading-relaxed mb-2">수집된 모든 정보는 다음 목적으로만 사용됩니다:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>확장프로그램 핵심 기능 제공</li>
                <li>브라우저 세션 간 사용자 설정 유지</li>
                <li>티스토리 블로그 글쓰기 경험 향상</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">데이터 저장 및 보안</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>로컬 저장소만 사용</strong>: 모든 데이터는 사용자 기기의 브라우저 로컬 저장소(chrome.storage.local)에만 저장됩니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>외부 전송 없음</strong>: 다음 사항을 <strong>절대 하지 않습니다</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>외부 서버로 데이터 전송</li>
                <li>제3자와 정보 공유</li>
                <li>브라우징 활동 추적</li>
                <li>개인 식별 정보 수집</li>
                <li>분석 도구 또는 추적 도구 사용</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>데이터 보안</strong>: 사용자 데이터는 기기에 보관되며 브라우저의 보안 조치로 보호됩니다.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">데이터 보유 및 삭제</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>확장프로그램 사용 중에만 데이터 저장</li>
                <li>StoryHelper 삭제 시 모든 확장프로그램 데이터 자동 삭제</li>
                <li>Chrome 확장프로그램 설정을 통해 언제든지 데이터 삭제 가능</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">권한 설명</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                StoryHelper는 다음 Chrome 권한을 요청합니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>storage (저장소)</strong>: 기능 설정 및 사용자 설정을 기기에 로컬로 저장하기 위함</li>
                <li><strong>티스토리 콘텐츠 스크립트</strong>: 티스토리 에디터 페이지(<code className="bg-gray-100 px-2 py-1 rounded text-sm">*.tistory.com/manage/*</code>)에 기능을 삽입하기 위함</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                기능 제공에 필요한 최소한의 권한만 요청합니다.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">제3자 서비스</h3>
              <p className="text-gray-700 leading-relaxed">
                StoryHelper는 어떠한 제3자 서비스나 API와도 통합되지 않습니다.
                확장프로그램은 전적으로 브라우저 내에서만 작동합니다.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">대상 웹사이트</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                StoryHelper는 다음 티스토리 URL에서만 작동합니다:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">https://*.tistory.com/manage/newpost/*</code> (새 글 에디터)</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">https://*.tistory.com/manage/page?returnURL=/manage/pages</code> (페이지 에디터)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                확장프로그램은 다른 웹사이트나 일반 브라우징 활동에 접근할 수 없습니다.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">아동 개인정보 보호</h3>
              <p className="text-gray-700 leading-relaxed">
                StoryHelper는 만 13세 미만 아동의 정보를 의도적으로 수집하지 않습니다.
                확장프로그램은 일반적인 블로그 글쓰기 목적으로 설계되었습니다.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">개인정보처리방침 변경</h3>
              <p className="text-gray-700 leading-relaxed">
                본 개인정보처리방침은 필요 시 업데이트될 수 있습니다.
                변경 사항은 본 문서에 "최종 업데이트" 날짜와 함께 게시됩니다.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">문의하기</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                본 개인정보처리방침에 대한 질문이 있으시면 다음을 통해 문의해 주세요:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>GitHub 이슈: <a href="https://github.com/ShipFriend0516/StoryHelper/issues" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 underline">StoryHelper Issues</a></li>
                <li>Chrome 웹 스토어 지원 페이지</li>
              </ul>
            </section>
            )}

            <hr className="my-12 border-t-2 border-sage-200" />

            {/* Data Processing Summary - English */}
            {language === "en" && (
            <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-sage-200">
                Data Processing Summary
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-sage-50">
                      <th className="border border-sage-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Item
                      </th>
                      <th className="border border-sage-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        Data Collected
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        Feature settings, user preferences
                      </td>
                    </tr>
                    <tr className="bg-sage-50/50">
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        Storage Location
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        Local browser storage only
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        External Transmission
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        None
                      </td>
                    </tr>
                    <tr className="bg-sage-50/50">
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        Third-Party Sharing
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        None
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        Data Retention
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        Until extension uninstalled
                      </td>
                    </tr>
                    <tr className="bg-sage-50/50">
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        User Control
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        Full control via Chrome settings
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Compliance - English */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-sage-200">
                Compliance
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">This privacy policy complies with:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Chrome Web Store Developer Program Policies</li>
                    <li>General Data Protection Regulation (GDPR) principles</li>
                    <li>California Consumer Privacy Act (CCPA) principles</li>
                  </ul>
                </div>
              </div>
            </section>
            </>
            )}

            {/* Data Processing Summary - Korean */}
            {language === "ko" && (
            <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-sage-200">
                데이터 처리 요약
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-sage-50">
                      <th className="border border-sage-200 px-4 py-3 text-left font-semibold text-gray-900">
                        항목
                      </th>
                      <th className="border border-sage-200 px-4 py-3 text-left font-semibold text-gray-900">
                        상세
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        수집 데이터
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        기능 설정, 사용자 환경설정
                      </td>
                    </tr>
                    <tr className="bg-sage-50/50">
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        저장 위치
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        브라우저 로컬 저장소만
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        외부 전송
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        없음
                      </td>
                    </tr>
                    <tr className="bg-sage-50/50">
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        제3자 공유
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        없음
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        보유 기간
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        확장프로그램 삭제 시까지
                      </td>
                    </tr>
                    <tr className="bg-sage-50/50">
                      <td className="border border-sage-200 px-4 py-3 font-medium text-gray-800">
                        사용자 제어
                      </td>
                      <td className="border border-sage-200 px-4 py-3 text-gray-700">
                        Chrome 설정으로 완전 제어
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Compliance - Korean */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-sage-200">
                규정 준수
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">본 개인정보처리방침은 다음을 준수합니다:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Chrome 웹 스토어 개발자 프로그램 정책</li>
                    <li>개인정보 보호법 (대한민국)</li>
                    <li>GDPR 원칙</li>
                    <li>CCPA 원칙</li>
                  </ul>
                </div>
              </div>
            </section>
            </>
            )}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
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
