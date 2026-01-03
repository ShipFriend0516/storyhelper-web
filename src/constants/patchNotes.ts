export interface PatchNote {
  version: string;
  date: string;
  title: string;
  blogUrl: string;
}

export const patchNotes: PatchNote[] = [
  {
    version: "1.6.2",
    date: "2026-01-03",
    title: "접근성 강화 및 UI/UX 개선",
    blogUrl:
      "https://shipfriend.dev/posts/storyhelper-v1-6-2-%ED%8C%A8%EC%B9%98%EB%85%B8%ED%8A%B8",
  },
  {
    version: "1.6.0",
    date: "2025-08-13",
    title: "기능 토글 인디케이터 추가 및 버전 관리 개선",
    blogUrl:
      "https://shipfriend.dev/posts/%ED%8B%B0%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%83%9D%EC%82%B0%EC%84%B1-%ED%99%95%EC%9E%A5%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-storyhelper-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C",
  },

  // 추가 패치노트를 여기에 작성하세요
];

// 최신 패치노트를 가져오는 헬퍼 함수
export const getLatestPatchNote = (): PatchNote | null => {
  return patchNotes.length > 0 ? patchNotes[0] : null;
};
