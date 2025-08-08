'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAppStore, useAppActions } from '@/store/useAppStore';
import { getRecommendations, ANJU_DATA } from '@/data/side-dishes';
import { DRINK_TYPES } from '@/lib/constants';

import { Drink, SideDish } from '@/lib/types';

interface RecommendedDish extends SideDish {
  score: number;
  rawScore: number;
  maxScore: number;
}

// Tag 관련 공통 함수들
const getTagDisplayName = (tag: string, type: 'drink' | 'taste' | 'mood' | 'price'): string => {
  switch (type) {
    case 'drink':
      switch (tag) {
        case 'soju': return '소주';
        case 'beer': return '맥주';
        case 'wine': return '와인';
        case 'makgeolli': return '막걸리';
        case 'whiskey': return '위스키';
        case 'cocktail': return '칵테일';
        default: return tag;
      }
    case 'taste':
      switch (tag) {
        case 'spicy': return '매운';
        case 'light': return '고소/담백';
        case 'tangy': return '새콤';
        case 'creamy': return '부드러운';
        default: return tag;
      }
    case 'mood':
      switch (tag) {
        case 'friends': return '가족/친구';
        case 'couple': return '연인';
        case 'solo': return '혼술';
        case 'festival': return '회식';
        case 'camping': return '야외/캠핑';
        default: return tag;
      }
    case 'price':
      switch (tag) {
        case 'low': return '2만원이하';
        case 'middle': return '5만원이하';
        case 'high': return '10만원이하';
        case 'premium': return '프리미엄';
        default: return tag;
      }
    default:
      return tag;
  }
};


const renderDrinkTags = (dish: RecommendedDish, isLarge: boolean = false) => {
  const tags = [...dish.tags.drink].slice(0, 3);

  return tags.map((tag: string, index: number) => {
    return (
      <span
        key={`${tag}-${index}`}
        className={`${isLarge ? 'text-xs lg:text-sm px-2 lg:px-3 py-1' : 'text-xs px-1.5 lg:px-2 py-0.5 lg:py-1'} 
        rounded-full bg-[#7AC8A4]/10 text-[#7AC8A4]`}
      >
        {getTagDisplayName(tag, 'drink')}
      </span>
    );
  });
};

const renderMoodTags = (dish: RecommendedDish, isLarge: boolean = false) => {
  return dish.tags.mood.slice(0, 2).map((mood: string) => (
    <span
      key={mood}
      className={`${isLarge ? 'text-xs lg:text-sm px-2 lg:px-3 py-1' : 'text-xs px-1.5 lg:px-2 py-0.5 lg:py-1'} 
      rounded-full bg-[#888888]/10 text-[#888888]`}
    >
      {getTagDisplayName(mood, 'mood')}
    </span>
  ));
};

const renderPriceTags = (dish: RecommendedDish, isLarge: boolean = false) => {
  return dish.tags.price.map((price: string) => (
    <span
      key={price}
      className={`${isLarge ? 'text-xs lg:text-sm px-2 lg:px-3 py-1' : 'text-xs px-1.5 lg:px-2 py-0.5 lg:py-1'} 
      rounded-full bg-[#888888]/10 text-[#888888]`}
    >
      {getTagDisplayName(price, 'price')}
    </span>
  ));
};

// useSearchParams를 사용하는 내부 컴포넌트
export default function ResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { answers, setRecommendations } = useAppStore();
  const { reset } = useAppActions();

  const [recommendedDishes, setRecommendedDishes] = useState<RecommendedDish[]>([]);
  const [selectedDrinkType, setSelectedDrinkType] = useState<Drink | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 중간 결과인지 확인
  const isIntermediate = searchParams.get('intermediate') === 'true';
  
  // URL에서 공유된 결과 복원
  const sharedResults = searchParams.get('results');
  const sharedDrinkType = searchParams.get('drink') as Drink;

  const goHome = () => {
    router.push('/anjus');
  }

  // 추천 결과를 URL에 저장 가능한 형태로 변환 (간소화된 패턴)
  const serializeResults = (dishes: RecommendedDish[]) => {
    const drinkType = selectedDrinkType || 'unknown';
    const resultNames = dishes.map(dish => dish.name);
    
    // URL 파라미터로 변환
    const params = new URLSearchParams();
    params.set('drink_type', drinkType);
    
    resultNames.forEach((name, index) => {
      if (index === 0) {
        params.set('first_result', name);
      } else if (index === 1) {
        params.set('second_result', name);
      } else if (index === 2) {
        params.set('third_result', name);
      } else if (index === 3) {
        params.set('fourth_result', name);
      } else if (index === 4) {
        params.set('fifth_result', name);
      }
    });
    
    return params.toString();
  };

  // URL에서 추천 결과 복원 (간소화된 패턴)
  const deserializeResults = (serialized: string): { dishes: RecommendedDish[], drinkType: Drink } => {
    try {
      const params = new URLSearchParams(serialized);
      const drinkType = params.get('drink_type') as Drink;
      
      // 결과 이름들을 배열로 수집
      const resultNames = [
        params.get('first_result'),
        params.get('second_result'),
        params.get('third_result'),
        params.get('fourth_result'),
        params.get('fifth_result')
      ].filter(Boolean) as string[];
      
            // ANJU_DATA에서 해당 이름의 안주들을 찾아서 RecommendedDish 형태로 변환
      const dishes: RecommendedDish[] = resultNames
        .map((name, index) => {
          // ANJU_DATA에서 해당 이름의 안주 찾기
          const foundDish = ANJU_DATA.find(dish => dish.name === name);
          
          if (foundDish) {
            return {
              ...foundDish,
              score: 100 - (index * 10), // 순서에 따른 점수 부여
              rawScore: 100 - (index * 10),
              maxScore: 100
            };
          }
          return null; // 찾지 못한 경우 null 반환
        })
        .filter((dish): dish is RecommendedDish => dish !== null); // null 값 제거
      
      return { dishes, drinkType };
    } catch (error) {
      console.error('Failed to parse shared results:', error);
      return { dishes: [], drinkType: 'soju' as Drink };
    }
  };

  // 추천 로직 실행
  const generateRecommendations = useCallback(() => {
    // 공유된 결과가 있으면 복원
    if (sharedResults) {
      const { dishes, drinkType } = deserializeResults(sharedResults);
      if (dishes.length > 0) {
        setRecommendedDishes(dishes);
        setSelectedDrinkType(drinkType);
        setIsLoading(false);
        return;
      }
    }

    // 일반적인 경우: answers가 없으면 questions로 리다이렉트
    if (!answers || Object.keys(answers).length === 0) {
      router.push('/anjus/questions');
      return;
    }

    setIsLoading(true);

    // 중간 결과인 경우 더 적은 수의 추천 결과 제공
    const maxResults = isIntermediate ? 5 : 5;
    const recommendations = getRecommendations(answers, maxResults);

    setRecommendedDishes(recommendations);
    setSelectedDrinkType(answers['drink'] as Drink);
    setIsLoading(false);

    // 추천 결과 저장
    setRecommendations([{
      sideDishes: recommendations,
      drinkType: answers['drink'] as Drink,
      reasoning: isIntermediate
        ? `지금까지의 답변으로 추천하는 안주들입니다. 더 정확한 결과를 원하시면 계속 진행해보세요!`
        : `선택하신 ${DRINK_TYPES[answers['drink'] as Drink]?.name}와 잘 어울리는 안주들을 추천드립니다.`,
      confidence: isIntermediate ? 0.65 : 0.85
    }]);
  }, [answers, router, setRecommendations, isIntermediate, sharedResults, sharedDrinkType]);

  // Web Share API를 사용한 공유 기능
  const handleShare = async () => {
    const drinkName = selectedDrinkType ? DRINK_TYPES[selectedDrinkType]?.name : '술';
    const topDish = recommendedDishes[0];
    
    // 현재 결과를 URL에 포함시킨 공유 링크 생성 (간소화된 패턴)
    const serializedResults = serializeResults(recommendedDishes);
    const shareUrl = `${window.location.origin}/anjus/results?${serializedResults}`;

    const shareData = {
      title: '안주 추천 결과',
      text: `${drinkName}와 함께 먹기 좋은 안주를 추천받았어요! 1위는 ${topDish?.name}입니다. 당신도 맞춤형 안주를 추천받아보세요!`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Web Share API를 지원하지 않는 경우 클립보드에 복사
        const shareText = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`;
        await navigator.clipboard.writeText(shareText);
        alert('공유 링크가 클립보드에 복사되었습니다!');
      }
    } catch {
      console.log('공유가 취소되었습니다.');
    }
  };

  // 다시 시작
  const handleRestart = () => {
    reset();
    router.push('/anjus/questions');
  };

  // 계속 진행 (중간 결과에서)
  const handleContinue = () => {
    router.push('/anjus/questions');
  };

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6363] mx-auto mb-4"></div>
          <p className="text-[#888888]">추천 결과를 분석하는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-[#333333] cursor-pointer" onClick={goHome}>
              <img src="/logo-ko.svg" alt="안주 추천 로고" className="h-8 w-auto" />
            </h1>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={handleShare}>
                공유하기
              </Button>
              <Button variant="outline" onClick={handleRestart}>
                다시 시작
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* 추천 안주 목록 */}
        <div className="space-y-4 sm:space-y-8 mb-4 sm:mb-8">
          {/* 1등 카드 - 1층을 다 사용 */}
          {recommendedDishes.length > 0 && (
            <Card className="hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow bg-white border-0 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* 상단/왼쪽: 이미지 영역 */}
                <div className="w-full lg:w-1/2 p-4 aspect-square rounded-t-2xl lg:rounded-l-none lg:rounded-r-2xl flex items-center justify-center relative overflow-hidden group">
                  <img
                    src={recommendedDishes[0].image || '/images/dishes/friedChicken.png'}
                    alt={recommendedDishes[0].name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/images/dishes/friedChicken.png';
                    }}
                  />
                </div>

                {/* 하단/오른쪽: 정보 영역 */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                    <div className="bg-[#FF6363] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full text-xl lg:text-2xl font-bold flex items-center justify-center">
                      1
                    </div>
                    <CardTitle className="text-2xl lg:text-4xl text-[#333333]">{recommendedDishes[0].name}</CardTitle>
                  </div>
                  <CardDescription className="text-base lg:text-xl text-[#888888] mb-4 lg:mb-6">
                    {recommendedDishes[0].description}
                  </CardDescription>

                  <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {/* 매칭 점수 */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm lg:text-base font-medium text-[#888888]">매칭도</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 lg:w-32 bg-gray-200 rounded-full h-2 lg:h-3">
                          <div
                            className="bg-[#FF6363] h-2 lg:h-3 rounded-full transition-all duration-300"
                            style={{ width: `${recommendedDishes[0].score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm lg:text-base font-bold text-[#FF6363]">{recommendedDishes[0].score}%</span>
                      </div>
                    </div>

                    {/* 술종류 */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm lg:text-base font-medium text-[#888888]">술 종류</span>
                      <div className="flex flex-wrap gap-1 lg:gap-2">
                        {renderDrinkTags(recommendedDishes[0], true)}
                      </div>
                    </div>

                    {/* 분위기 */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm lg:text-base font-medium text-[#888888]">분위기</span>
                      <div className="flex flex-wrap gap-1 lg:gap-2">
                        {renderMoodTags(recommendedDishes[0], true)}
                      </div>
                    </div>

                    {/* 가격대 */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm lg:text-base font-medium text-[#888888]">가격대</span>
                      <div className="flex flex-wrap gap-1 lg:gap-2">
                        {renderPriceTags(recommendedDishes[0], true)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* 2등부터는 2개씩 나열 */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            {recommendedDishes.slice(1).map((dish, index) => {
              const actualIndex = index + 1; // 2등부터 시작하므로 +1

              return (
                <Card key={dish.id} className="hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow bg-white border-0 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-2xl">
                  <div className="flex flex-col lg:flex-row">
                    {/* 상단/왼쪽: 이미지 영역 */}
                    <div className="w-full lg:w-1/2 p-3 aspect-square rounded-t-2xl lg:rounded-l-none lg:rounded-r-2xl flex items-center justify-center relative overflow-hidden group">
                      <img
                        src={dish.image || '/images/dishes/friedChicken.png'}
                        alt={dish.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/images/dishes/friedChicken.png';
                        }}
                      />
                    </div>

                    {/* 하단/오른쪽: 정보 영역 */}
                    <div className="w-full lg:w-1/2 p-3 sm:p-4 lg:p-6">
                      <div className="flex items-center space-x-2 mb-3 lg:mb-4">
                        <div className="text-[#aaaaaa] pr-2 rounded-full text-sm lg:text-md font-bold flex items-center justify-center">
                          {actualIndex + 1}
                        </div>
                        <CardTitle className="text-lg lg:text-xl text-[#333333]">{dish.name}</CardTitle>
                      </div>
                      <CardDescription className="text-sm lg:text-base text-[#888888] mb-3 lg:mb-4">
                        {dish.description}
                      </CardDescription>

                      <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                        {/* 매칭 점수 */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xs lg:text-sm font-medium text-[#888888]">매칭도</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 lg:w-20 bg-gray-200 rounded-full h-1.5 lg:h-2">
                              <div
                                className="bg-[#FF6363] h-1.5 lg:h-2 rounded-full transition-all duration-300"
                                style={{ width: `${dish.score}%` }}
                              ></div>
                            </div>
                            <span className="text-xs lg:text-sm font-bold text-[#FF6363]">{dish.score}%</span>
                          </div>
                        </div>

                        {/* 주요 특징 */}
                        <div className="flex items-center space-x-2 lg:space-y-2">
                          <span className="text-xs lg:text-sm font-medium text-[#888888]">술 종류</span>
                          <div className="flex flex-wrap gap-1">
                            {renderDrinkTags(dish, false)}
                          </div>
                        </div>

                        {/* 분위기 */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xs lg:text-sm font-medium text-[#888888]">분위기</span>
                          <div className="flex flex-wrap gap-1">
                            {renderMoodTags(dish, false)}
                          </div>
                        </div>

                        {/* 가격대 */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xs lg:text-sm font-medium text-[#888888]">가격대</span>
                          <div className="flex flex-wrap gap-1">
                            {renderPriceTags(dish, false)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="w-full text-center space-y-3 sm:space-y-4">
          {isIntermediate ? (
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {/* 1층: 계속하기 버튼 */}
              <div className="flex justify-center w-full max-w-md mx-auto">
                <Button onClick={handleContinue} size="lg" className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold transform hover:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg">
                  더 정확한 결과를 위해 계속하기
                </Button>
              </div>

              {/* 2층: 처음부터 다시 시작 버튼 */}
              <div className="flex justify-center w-full max-w-md mx-auto">
                <Button variant="secondary" onClick={handleRestart} size="lg" className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                  처음부터 다시 시작
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {/* 1층: 공유하기 버튼 */}
              <div className="flex justify-center w-full max-w-md mx-auto">
                <Button onClick={handleShare} size="lg" className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold transform hover:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg">
                  공유하기
                </Button>
              </div>

              {/* 2층: 다시 추천받기 버튼 */}
              <div className="flex justify-center w-full max-w-md mx-auto">
                <Button variant="secondary" onClick={handleRestart} size="lg" className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transform hover:scale-[0.98] transition-all duration-300 hover:shadow-lg">
                  다시 추천받기
                </Button>
              </div>
            </div>
          )}

          {!isIntermediate && (
            <p className="text-[#888888] text-sm">
              술과 함께 즐거운 시간 보내세요!
            </p>
          )}
        </div>
      </main>

    </div>
  );
}
