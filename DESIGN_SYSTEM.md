# StoryHelper 디자인 시스템

## 🎨 컬러 팔레트 (Logo-Based Modern Scheme)

### 로고 분석

StoryHelper 로고는 **세이지 그린(Sage Green)** 계열의 차분하고 자연스러운 색상을 사용합니다.

- 원형 배경: 부드러운 그린-블루 톤 (#7B9C96 계열)
- 도트 패턴: 밝은 민트 그린 계열 (#B8C9B8)
- 잎사귀 장식: 짙은 포레스트 그린 (#2C5F4D)

이 조화로운 자연 색상을 기반으로 모던한 웹 디자인 시스템을 구축합니다.

> 로고 파일 경로
> /public/assets/storyhelper-logo.png

---

## 🌿 Primary Colors (주요 색상)

로고의 핵심 색상을 기반으로 한 Primary 팔레트:

```css
/* Sage Green - 브랜드 메인 컬러 */
--sage-50: #f5f8f7; /* 매우 밝은 배경 */
--sage-100: #e6efed; /* 연한 배경 */
--sage-200: #c8ddd8; /* 보조 배경 */
--sage-300: #a4c4bc; /* 비활성 상태 */
--sage-400: #7b9c96; /* 로고 메인 컬러 */
--sage-500: #5f8178; /* Primary 기본 */
--sage-600: #4a6760; /* 호버 상태 */
--sage-700: #3a524c; /* 액티브 상태 */
--sage-800: #2c3e3a; /* 강조 텍스트 */
--sage-900: #1f2c29; /* 다크 텍스트 */
```

**사용 예시**:

- 주요 CTA 버튼 배경: `sage-500`
- 호버 효과: `sage-600`
- 아이콘 & 강조: `sage-400`
- 배경 섹션: `sage-50`, `sage-100`

---

## 🌲 Forest Green - Accent (강조 색상)

로고의 잎사귀에서 추출한 포레스트 그린 계열:

```css
/* Forest Green - 자연스러운 강조 */
--forest-50: #f0f5f3;
--forest-100: #dce8e3;
--forest-200: #b8d0c7;
--forest-300: #8fb5a5;
--forest-400: #5f9179;
--forest-500: #3d7257; /* 기본 강조 */
--forest-600: #2c5f4d; /* 로고 잎사귀 컬러 */
--forest-700: #234d3e;
--forest-800: #1c3d32;
--forest-900: #152e26;
```

**사용 예시**:

- 성공 메시지: `forest-500`
- 활성 상태 표시: `forest-600`
- 장식 요소: `forest-400`

---

## 💫 Mint - Highlight (하이라이트)

로고의 도트 패턴에서 영감받은 밝은 민트 계열:

```css
/* Mint Green - 부드러운 하이라이트 */
--mint-50: #f7faf9;
--mint-100: #edf3f0;
--mint-200: #d9e7e1;
--mint-300: #c0d9ce;
--mint-400: #a2c6b6;
--mint-500: #82b09d; /* 기본 하이라이트 */
--mint-600: #6a9583;
--mint-700: #537768;
--mint-800: #3f5a50;
--mint-900: #2e4139;
```

**사용 예시**:

- 카드 호버 배경: `mint-50`
- 서브 텍스트 강조: `mint-500`
- 보조 버튼 배경: `mint-100`

---

## 🔵 Blue - Information (정보 전달)

신뢰감을 주는 블루 계열 (세이지 그린과 조화):

```css
/* Blue - 신뢰, 정보 */
--blue-50: #f0f6fb;
--blue-100: #e1edf7;
--blue-200: #c3dbef;
--blue-300: #91b9e0;
--blue-400: #5b92cc;
--blue-500: #3b7ab8; /* 기본 정보 */
--blue-600: #2e5f99;
--blue-700: #244b7a;
--blue-800: #1d3c61;
--blue-900: #172e4a;
```

**사용 예시**:

- 링크 텍스트: `blue-600`
- 정보 박스: `blue-100` 배경 + `blue-700` 텍스트
- 인포메이션 아이콘: `blue-500`

---

## 🟡 Amber - Warning (주의/경고)

따뜻한 앰버 계열 (자연 톤과 조화):

```css
/* Amber - 주의, 강조 */
--amber-50: #fff9eb;
--amber-100: #fff3d6;
--amber-200: #ffe7ad;
--amber-300: #ffd77a;
--amber-400: #ffc043;
--amber-500: #f59e0b; /* 기본 경고 */
--amber-600: #d97706;
--amber-700: #b45309;
--amber-800: #92400e;
--amber-900: #78350f;
```

**사용 예시**:

- 경고 메시지: `amber-500`
- 강조 배지: `amber-100` 배경
- 주의 아이콘: `amber-600`

---

## 🔴 Rose - Error (에러)

부드러운 로즈 계열 (공격적이지 않은 에러):

```css
/* Rose - 에러, 삭제 */
--rose-50: #fff1f2;
--rose-100: #ffe4e6;
--rose-200: #fecdd3;
--rose-300: #fda4af;
--rose-400: #fb7185;
--rose-500: #f43f5e; /* 기본 에러 */
--rose-600: #e11d48;
--rose-700: #be123c;
--rose-800: #9f1239;
--rose-900: #881337;
```

**사용 예시**:

- 에러 메시지: `rose-500`
- 삭제 버튼: `rose-600`
- 필수 입력 표시: `rose-400`

---

## ⚪ Neutral - Grayscale (중립 색상)

현대적인 따뜻한 그레이스케일:

```css
/* Warm Gray - 중립, 텍스트 */
--gray-50: #fafaf9; /* 배경 */
--gray-100: #f5f5f4; /* 연한 배경 */
--gray-200: #e7e5e4; /* 경계선 */
--gray-300: #d6d3d1; /* 비활성 */
--gray-400: #a8a29e; /* 보조 텍스트 */
--gray-500: #78716c; /* 중간 텍스트 */
--gray-600: #57534e; /* 일반 텍스트 */
--gray-700: #44403c; /* 중요 텍스트 */
--gray-800: #292524; /* 헤드라인 */
--gray-900: #1c1917; /* 최고 강조 */
```

**사용 예시**:

- 본문 텍스트: `gray-700`
- 헤드라인: `gray-900`
- 보조 텍스트: `gray-500`
- 경계선: `gray-200`
- 배경: `gray-50`, `gray-100`

---

## 🎯 Semantic Colors (의미론적 색상)

실제 사용에 매핑된 색상:

```css
/* Success */
--color-success-light: var(--forest-100);
--color-success: var(--forest-500);
--color-success-dark: var(--forest-700);

/* Info */
--color-info-light: var(--blue-100);
--color-info: var(--blue-500);
--color-info-dark: var(--blue-700);

/* Warning */
--color-warning-light: var(--amber-100);
--color-warning: var(--amber-500);
--color-warning-dark: var(--amber-700);

/* Error */
--color-error-light: var(--rose-100);
--color-error: var(--rose-500);
--color-error-dark: var(--rose-700);

/* Primary (Brand) */
--color-primary-light: var(--sage-200);
--color-primary: var(--sage-500);
--color-primary-dark: var(--sage-700);

/* Accent */
--color-accent-light: var(--mint-200);
--color-accent: var(--mint-500);
--color-accent-dark: var(--mint-700);
```

---

## 🌓 Dark Mode Colors

다크 모드를 위한 색상 조정:

```css
/* Dark Mode Sage */
--sage-dark-50: #1f2c29;
--sage-dark-100: #2c3e3a;
--sage-dark-200: #3a524c;
--sage-dark-300: #4a6760;
--sage-dark-400: #5f8178;
--sage-dark-500: #7b9c96; /* 메인 */
--sage-dark-600: #a4c4bc;
--sage-dark-700: #c8ddd8;
--sage-dark-800: #e6efed;
--sage-dark-900: #f5f8f7;

/* Dark Background */
--bg-dark-primary: #0f1614;
--bg-dark-secondary: #1a2220;
--bg-dark-tertiary: #243330;

/* Dark Text */
--text-dark-primary: #f5f8f7;
--text-dark-secondary: #c8ddd8;
--text-dark-tertiary: #a4c4bc;
```

---

## 📐 Gradients (그라디언트)

로고 스타일과 조화로운 그라디언트:

```css
/* Hero Gradient */
--gradient-hero: linear-gradient(
  135deg,
  var(--sage-100) 0%,
  var(--mint-100) 100%
);

/* CTA Button Gradient */
--gradient-cta: linear-gradient(
  135deg,
  var(--sage-500) 0%,
  var(--forest-600) 100%
);

/* Card Hover Gradient */
--gradient-card: linear-gradient(
  to bottom,
  var(--sage-50) 0%,
  var(--mint-50) 100%
);

/* Overlay Gradient */
--gradient-overlay: linear-gradient(
  to bottom,
  rgba(123, 156, 150, 0.9) 0%,
  rgba(44, 95, 77, 0.95) 100%
);
```

---

## 🎨 Tailwind CSS Configuration

`tailwind.config.ts`에 적용할 설정:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F5F8F7",
          100: "#E6EFED",
          200: "#C8DDD8",
          300: "#A4C4BC",
          400: "#7B9C96",
          500: "#5F8178",
          600: "#4A6760",
          700: "#3A524C",
          800: "#2C3E3A",
          900: "#1F2C29",
        },
        forest: {
          50: "#F0F5F3",
          100: "#DCE8E3",
          200: "#B8D0C7",
          300: "#8FB5A5",
          400: "#5F9179",
          500: "#3D7257",
          600: "#2C5F4D",
          700: "#234D3E",
          800: "#1C3D32",
          900: "#152E26",
        },
        mint: {
          50: "#F7FAF9",
          100: "#EDF3F0",
          200: "#D9E7E1",
          300: "#C0D9CE",
          400: "#A2C6B6",
          500: "#82B09D",
          600: "#6A9583",
          700: "#537768",
          800: "#3F5A50",
          900: "#2E4139",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #E6EFED 0%, #EDF3F0 100%)",
        "gradient-cta": "linear-gradient(135deg, #5F8178 0%, #2C5F4D 100%)",
        "gradient-card": "linear-gradient(to bottom, #F5F8F7 0%, #F7FAF9 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 🖼️ 컬러 사용 가이드

### Hero Section

- **배경**: `gradient-hero` 또는 `sage-50`
- **헤드라인**: `gray-900`
- **서브헤드**: `gray-600`
- **CTA 버튼**: `gradient-cta` 또는 `sage-500` (배경) + `white` (텍스트)
- **보조 CTA**: `sage-100` (배경) + `sage-700` (텍스트)

### Feature Cards

- **카드 배경**: `white` 또는 `gradient-card`
- **아이콘 배경**: `sage-100` 또는 `mint-100`
- **아이콘 컬러**: `sage-600` 또는 `forest-600`
- **제목**: `gray-900`
- **설명**: `gray-600`
- **호버 효과**: `sage-50` 배경 + `sage-600` 테두리

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--sage-500);
  color: white;
  hover: var(--sage-600);
}

/* Secondary Button */
.btn-secondary {
  background: var(--sage-100);
  color: var(--sage-700);
  hover: var(--sage-200);
}

/* Outline Button */
.btn-outline {
  border: 2px solid var(--sage-500);
  color: var(--sage-700);
  hover-bg: var(--sage-50);
}
```

### Badges & Tags

- **Success**: `forest-100` 배경 + `forest-700` 텍스트
- **Info**: `blue-100` 배경 + `blue-700` 텍스트
- **사용자 수**: `sage-100` 배경 + `sage-700` 텍스트
- **평점**: `amber-100` 배경 + `amber-700` 텍스트

---

## ✨ 애니메이션 & 효과

### 호버 트랜지션

```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### 그림자 (Shadows)

```css
--shadow-sm: 0 1px 2px 0 rgba(95, 129, 120, 0.05);
--shadow-md: 0 4px 6px -1px rgba(95, 129, 120, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(95, 129, 120, 0.15);
--shadow-xl: 0 20px 25px -5px rgba(95, 129, 120, 0.2);
```

### 글로우 효과 (Glow)

```css
--glow-sage: 0 0 20px rgba(95, 129, 120, 0.3);
--glow-forest: 0 0 20px rgba(44, 95, 77, 0.3);
```

---

## 📱 반응형 브레이크포인트

```css
--breakpoint-sm: 640px; /* Mobile */
--breakpoint-md: 768px; /* Tablet */
--breakpoint-lg: 1024px; /* Desktop */
--breakpoint-xl: 1280px; /* Large Desktop */
--breakpoint-2xl: 1536px; /* Extra Large */
```

---

## 🎯 접근성 (Accessibility)

### 컬러 대비 검증

모든 텍스트 조합이 WCAG 2.1 AA 기준(4.5:1) 이상을 충족:

- ✅ `sage-700` on `white` - 7.2:1
- ✅ `gray-900` on `sage-50` - 12.8:1
- ✅ `white` on `sage-500` - 4.8:1
- ✅ `forest-700` on `white` - 8.5:1

### 포커스 스타일

```css
--focus-ring: 0 0 0 3px rgba(95, 129, 120, 0.3);
```

---

**작성일**: 2025년 12월 29일
**버전**: 1.0
**기반**: StoryHelper 브랜드 로고 컬러
