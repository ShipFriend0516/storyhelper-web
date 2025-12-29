import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/ShipFriend0516/StoryHelper/main/package.json',
      {
        next: { revalidate: 3600 }, // 1시간 캐시
        headers: {
          'Accept': 'application/json',
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch package.json');
    }

    const packageJson = await response.json();

    return NextResponse.json({
      version: packageJson.version,
      name: packageJson.name
    });
  } catch (error) {
    console.error('Version fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch version' },
      { status: 500 }
    );
  }
}
