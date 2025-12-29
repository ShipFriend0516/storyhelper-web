export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              StoryHelper
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              티스토리 블로그 생산성을 높이는
              <br />
              최고의 Chrome 확장프로그램
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="flex h-2 w-2 rounded-full bg-forest-400"></span>
              <span>200+ 활성 사용자</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              링크
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/storyhelper-최고의-티스토리-생산성/inmbdknioncgblpeiiohmdihhidnjpfp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Chrome 웹 스토어
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  기능 소개
                </a>
              </li>
              <li>
                <a
                  href="mailto:sjw4371@naver.com"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              연락처
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sjw4371@naver.com"
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  sjw4371@naver.com
                </a>
              </li>
              <li className="text-sm text-gray-300">
                개발자: shipfriend.dev
              </li>
              <li className="text-sm text-gray-400">
                버전 1.6.0
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              © {currentYear} shipfriend.dev. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-forest-900 px-3 py-1 text-xs text-forest-300">
                정책 위반 이력 없음
              </span>
              <span className="rounded-full bg-sage-900 px-3 py-1 text-xs text-sage-300">
                개인정보 수집 없음
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
