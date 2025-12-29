# Notion API 설정 가이드

피드백 폼이 Notion 데이터베이스에 데이터를 저장하도록 설정하는 방법입니다.

## 1. Notion Integration 생성

1. [Notion Integrations](https://www.notion.so/my-integrations) 페이지로 이동
2. **"+ New integration"** 버튼 클릭
3. Integration 정보 입력:
   - **Name**: StoryHelper Feedback (또는 원하는 이름)
   - **Associated workspace**: 사용할 워크스페이스 선택
   - **Capabilities**: "Read content", "Update content", "Insert content" 체크
4. **"Submit"** 클릭
5. **Internal Integration Token** 복사 (나중에 사용)

## 2. Notion Database 생성

1. Notion에서 새 페이지 생성
2. 페이지 제목: "StoryHelper 피드백" (또는 원하는 이름)
3. `/database` 입력하여 **Table** 데이터베이스 생성
4. 다음 속성(Properties) 추가:

### 필수 속성

| 속성 이름 | 타입 | 설명 |
|---------|------|------|
| 삭제 이유 | Title | 기본 제목 (자동 생성됨) |
| 카테고리 | Select | 삭제 이유 카테고리 |
| 상세 내용 | Text | 기타 사유 상세 내용 |
| 제출 시간 | Date | 피드백 제출 시간 |

### 카테고리 Select 옵션 추가

"카테고리" 속성 클릭 → "Edit property" → 다음 옵션 추가:
- 기능이 필요 없어졌습니다
- 다른 확장프로그램을 사용합니다
- 성능/버그 문제
- 기타

## 3. Database에 Integration 연결

1. 생성한 데이터베이스 페이지 우측 상단 **"•••"** (더보기) 클릭
2. **"+ Add connections"** 클릭
3. 1단계에서 생성한 Integration 선택
4. **"Confirm"** 클릭

## 4. Database ID 복사

데이터베이스 URL에서 ID 추출:
```
https://www.notion.so/your-workspace/abc123def456?v=...
                                   ^^^^^^^^^^^^
                                   이 부분이 Database ID
```

또는:
1. 데이터베이스 페이지에서 **"Share"** → **"Copy link"** 클릭
2. URL에서 `?` 앞부분이 Database ID
   - 예: `https://notion.so/abc123def456?v=...` → `abc123def456`

## 5. 환경변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```bash
# 1단계에서 복사한 Integration Token
NOTION_API_KEY=secret_your_integration_token_here

# 4단계에서 복사한 Database ID
NOTION_DATABASE_ID=abc123def456
```

## 6. 로컬 개발 서버 재시작

```bash
pnpm dev
```

## 7. 테스트

1. 브라우저에서 `http://localhost:3000/feedback` 접속
2. 피드백 폼 작성 및 제출
3. Notion 데이터베이스에서 데이터 확인

## 배포 (Vercel)

Vercel 프로젝트 설정에서 환경변수 추가:
1. Vercel Dashboard → 프로젝트 선택 → Settings → Environment Variables
2. `NOTION_API_KEY`와 `NOTION_DATABASE_ID` 추가
3. 재배포

---

## 문제 해결

### "Could not find database" 에러
- Database에 Integration이 연결되었는지 확인
- Database ID가 정확한지 확인

### "Unauthorized" 에러
- Integration Token이 정확한지 확인
- `.env.local` 파일 저장 후 서버 재시작 확인

### 속성 이름 오류
- Notion Database의 속성 이름이 정확히 일치하는지 확인:
  - `삭제 이유` (Title)
  - `카테고리` (Select)
  - `상세 내용` (Text)
  - `제출 시간` (Date)
