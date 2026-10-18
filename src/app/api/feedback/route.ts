import { APIErrorCode, Client, isNotionClientError } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const reasonLabels: Record<string, string> = {
  'no-longer-needed': '기능이 필요 없어졌습니다',
  'dont-know-how-to-use': '사용 방법을 잘 모르겠습니다',
  'using-alternative': '다른 확장프로그램을 사용합니다',
  'performance-issues': '성능/버그 문제',
  'other': '기타',
};

const DETAIL_MAX_LENGTH = 1000;

// Extension metadata from the uninstall URL; invalid values are dropped, not rejected
function parseMeta(body: Record<string, unknown>) {
  const { v, days, lang } = body;
  return {
    version:
      typeof v === 'string' && /^\d+(\.\d+){0,3}$/.test(v) ? v : undefined,
    days:
      typeof days === 'number' && Number.isInteger(days) && days >= 0 && days <= 3650
        ? days
        : undefined,
    lang:
      typeof lang === 'string' &&
      lang.length <= 10 &&
      /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(lang)
        ? lang
        : undefined,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { reason, detail } = body;

    // Validate input
    if (typeof reason !== 'string' || !(reason in reasonLabels)) {
      return NextResponse.json(
        { error: '삭제 이유를 선택해주세요' },
        { status: 400 }
      );
    }

    const reasonText = reasonLabels[reason];
    const detailText =
      typeof detail === 'string' ? detail.trim().slice(0, DETAIL_MAX_LENGTH) : '';
    const meta = parseMeta(body);
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      console.error('NOTION_DATABASE_ID is not set');
      return NextResponse.json(
        { error: '서버 설정 오류' },
        { status: 500 }
      );
    }

    const baseProperties = {
      // Title property (required for most databases)
      '삭제 이유': {
        title: [{ text: { content: reasonText } }],
      },
      // Select property for reason category
      '카테고리': {
        select: { name: reasonText },
      },
      // Rich text for additional details
      ...(detailText
        ? { '상세 내용': { rich_text: [{ text: { content: detailText } }] } }
        : {}),
      // Date property for timestamp
      '제출 시간': {
        date: { start: new Date().toISOString() },
      },
    };

    const metaProperties = {
      ...(meta.version ? { '버전': { select: { name: meta.version } } } : {}),
      ...(meta.days !== undefined ? { '사용 기간(일)': { number: meta.days } } : {}),
      ...(meta.lang ? { '언어': { select: { name: meta.lang } } } : {}),
    };

    // Create page in Notion database
    try {
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: { ...baseProperties, ...metaProperties },
      });
    } catch (error) {
      // Metadata properties may not exist in the database yet; retry without them
      if (
        Object.keys(metaProperties).length > 0 &&
        isNotionClientError(error) &&
        error.code === APIErrorCode.ValidationError
      ) {
        console.warn('Retrying without metadata properties:', error.message);
        await notion.pages.create({
          parent: { database_id: databaseId },
          properties: baseProperties,
        });
      } else {
        throw error;
      }
    }

    return NextResponse.json(
      { message: '피드백이 성공적으로 저장되었습니다' },
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
