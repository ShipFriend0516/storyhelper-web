import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const reasonLabels: Record<string, string> = {
  'no-longer-needed': '기능이 필요 없어졌습니다',
  'using-alternative': '다른 확장프로그램을 사용합니다',
  'performance-issues': '성능/버그 문제',
  'other': '기타',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { reason, otherReason } = body;

    // Validate input
    if (!reason) {
      return NextResponse.json(
        { error: '삭제 이유를 선택해주세요' },
        { status: 400 }
      );
    }

    if (reason === 'other' && !otherReason?.trim()) {
      return NextResponse.json(
        { error: '기타 사유를 입력해주세요' },
        { status: 400 }
      );
    }

    const reasonText = reasonLabels[reason] || reason;
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      console.error('NOTION_DATABASE_ID is not set');
      return NextResponse.json(
        { error: '서버 설정 오류' },
        { status: 500 }
      );
    }

    // Create page in Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        // Title property (required for most databases)
        '삭제 이유': {
          title: [
            {
              text: {
                content: reasonText,
              },
            },
          ],
        },
        // Select property for reason category
        '카테고리': {
          select: {
            name: reasonText,
          },
        },
        // Rich text for additional details
        ...(reason === 'other' && otherReason
          ? {
              '상세 내용': {
                rich_text: [
                  {
                    text: {
                      content: otherReason,
                    },
                  },
                ],
              },
            }
          : {}),
        // Date property for timestamp
        '제출 시간': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return NextResponse.json(
      { message: '피드백이 성공적으로 저장되었습니다', data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Notion API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}
