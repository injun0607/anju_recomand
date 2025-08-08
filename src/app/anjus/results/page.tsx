import { Suspense } from 'react';
import { Metadata } from 'next';
import ResultsContent from './ResultsContent';
import { DRINK_TYPES } from '@/lib/constants';
import { Drink } from '@/lib/types';

// 동적 메타데이터 생성 함수
export async function generateMetadata({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}): Promise<Metadata> {
  const params = await searchParams;
  const drinkType = params.drink_type as string;
  const firstResult = params.first_result as string;
  
  // 기본 메타데이터
  let title = '안주 추천 결과 - 당신에게 맞는 안주를 찾아보세요';
  let description = '맞춤형 안주 추천 서비스로 최적의 안주를 찾아보세요!';
  let image = '/images/og-default.png'; // 기본 OG 이미지
  let url = 'https://yourdomain.com/anjus/results';
  
  // 공유된 결과가 있는 경우 동적 메타데이터 생성
  if (drinkType && firstResult) {
    try {
      const drinkName = DRINK_TYPES[drinkType as Drink]?.name || drinkType;
      
      title = `${firstResult} - ${drinkName}와 함께하는 완벽한 안주 추천`;
      description = `${drinkName}와 함께 먹기 좋은 안주를 추천받았어요! 1위는 ${firstResult}입니다. 당신도 맞춤형 안주를 추천받아보세요!`;
      image = '/images/dishes/friedChicken.png'; // 기본 이미지 사용
      url = `https://yourdomain.com/anjus/results?drink_type=${drinkType}&first_result=${firstResult}`;
    } catch (error) {
      console.error('Failed to parse shared results for metadata:', error);
    }
  }

  return {
    title,
    description,
    keywords: ['안주', '추천', '술', '맛집', '음식', '카페', '레스토랑'],
    authors: [{ name: '안주 추천' }],
    creator: '안주 추천',
    publisher: '안주 추천',
    robots: 'index, follow',
    openGraph: {
      title,
      description,
      url,
      siteName: '안주 추천',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: '안주 추천 결과',
          type: 'image/png',
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@anju_recommend',
      site: '@anju_recommend',
    },
    // 카카오톡 및 기타 플랫폼 전용 OG 태그
    other: {
      // 카카오톡 OG 태그
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': 'website',
      'og:site_name': '안주 추천',
      'og:locale': 'ko_KR',
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/png',
      'og:image:alt': '안주 추천 결과',
      
      // 트위터 카드
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:creator': '@anju_recommend',
      'twitter:site': '@anju_recommend',
      
      // 페이스북 OG 태그
      'fb:app_id': 'your-facebook-app-id', // 페이스북 앱 ID가 있다면 설정
      
      // 추가 메타 태그
      'theme-color': '#FF6363',
      'msapplication-TileColor': '#FF6363',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': '안주 추천',
      'application-name': '안주 추천',
      'mobile-web-app-capable': 'yes',
    },
  };
}

// 메인 컴포넌트
export default function ResultsPage() {
  return (
    <Suspense fallback={<ResultsLoading />}>
      <ResultsContent />
    </Suspense>
  );
}

// 로딩 컴포넌트
function ResultsLoading() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6363] mx-auto mb-4"></div>
        <p className="text-[#888888]">페이지를 로딩하는 중...</p>
      </div>
    </div>
  );
} 