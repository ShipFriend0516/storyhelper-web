export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'StoryHelper',
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
    description: 'SEO 최적화부터 글자 수 카운팅까지, StoryHelper로 티스토리 블로그 생산성을 10배 향상시키세요.',
    image: 'https://storyhelper.shipfriend.dev/opengraph-image.png',
    url: 'https://storyhelper.shipfriend.dev',
    author: {
      '@type': 'Person',
      name: 'shipfriend.dev',
      url: 'https://shipfriend.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'shipfriend.dev',
      url: 'https://shipfriend.dev',
    },
    downloadUrl: 'https://chromewebstore.google.com/detail/storyhelper-최고의-티스토리-생산성/inmbdknioncgblpeiiohmdihhidnjpfp',
    softwareVersion: '1.6.0',
    datePublished: '2024-01-01',
    dateModified: '2025-08-16',
    featureList: [
      '단축키로 빠른 작업',
      '이미지 최적화 도구',
      '실시간 글자 수 확인',
      '자동 SEO 검증',
    ],
    screenshot: 'https://storyhelper.shipfriend.dev/opengraph-image.png',
    inLanguage: 'ko-KR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
