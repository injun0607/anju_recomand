'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAppStore, useAppActions } from '@/store/useAppStore';
import { getRecommendations } from '@/data/side-dishes';
import { DRINK_TYPES } from '@/lib/constants';
import { generateKakaoShareUrl } from '@/lib/utils';
import { DrinkType, SideDish } from '@/lib/types';

interface RecommendedDish extends SideDish {
  score: number;
  rawScore: number;
  maxScore: number;
}

// useSearchParams를 사용하는 내부 컴포넌트
function ResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { answers, setRecommendations } = useAppStore();
  const { reset } = useAppActions();

  const [recommendedDishes, setRecommendedDishes] = useState<RecommendedDish[]>([]);
  const [selectedDrinkType, setSelectedDrinkType] = useState<DrinkType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 중간 결과인지 확인
  const isIntermediate = searchParams.get('intermediate') === 'true';

  const goHome = () => {
    router.push('/anjus');
  }
  // 추천 로직 실행
  const generateRecommendations = useCallback(() => {
    if (!answers || Object.keys(answers).length === 0) {
      router.push('/anjus/questions');
      return;
    }

    setIsLoading(true);

    // 중간 결과인 경우 더 적은 수의 추천 결과 제공
    const maxResults = isIntermediate ? 5 : 5;
    const recommendations = getRecommendations(answers, maxResults);

    setRecommendedDishes(recommendations);
    setSelectedDrinkType(answers['drink-type'] as DrinkType);
    setIsLoading(false);

    // 추천 결과 저장
    setRecommendations([{
      sideDishes: recommendations,
      drinkType: answers['drink-type'] as DrinkType,
      reasoning: isIntermediate
        ? `지금까지의 답변으로 추천하는 안주들입니다. 더 정확한 결과를 원하시면 계속 진행해보세요!`
        : `선택하신 ${DRINK_TYPES[answers['drink-type'] as DrinkType]?.name}와 잘 어울리는 안주들을 추천드립니다.`,
      confidence: isIntermediate ? 0.65 : 0.85
    }]);
  }, [answers, router, setRecommendations, isIntermediate]);

  // 카카오톡 공유
  const handleShare = () => {
    if (recommendedDishes.length > 0 && selectedDrinkType) {
      const shareUrl = generateKakaoShareUrl(
        DRINK_TYPES[selectedDrinkType].name,
        recommendedDishes
      );
      window.open(shareUrl, '_blank');
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
            <h1 className="text-xl font-bold text-[#333333] cursor-pointer" onClick={goHome}>🍺 안주 추천</h1>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={handleShare}>
                카카오톡 공유
              </Button>
              <Button variant="outline" onClick={handleRestart}>
                다시 시작
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 추천 안주 목록 */}
        <div className="space-y-8 mb-8">
          {/* 1등 카드 - 1층을 다 사용 */}
          {recommendedDishes.length > 0 && (
            <Card className="hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow bg-white border-0 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#FF6363] text-white w-8 h-8 rounded-full text-lg font-bold flex items-center justify-center">
                      1
                    </div>
                    <CardTitle className="text-xl text-[#333333] !text-4xl">{recommendedDishes[0].name}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-lg text-[#888888]">
                  {recommendedDishes[0].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* 매칭 점수 */}
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-medium text-[#888888]">매칭도:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-[#FF6363] h-3 rounded-full transition-all duration-300"
                          style={{ width: `${recommendedDishes[0].score}%` }}
                        ></div>
                      </div>
                      <span className="text-base font-bold text-[#FF6363]">{recommendedDishes[0].score}%</span>
                    </div>
                  </div>

                  {/* 주요 특징 */}
                  <div className="space-y-2">
                    <span className="text-base font-medium text-[#888888]">주요 특징:</span>
                    <div className="flex flex-wrap gap-2">
                      {recommendedDishes[0].tags.drinkType.slice(0, 2).map((drink: string) => (
                        <span key={drink} className="text-sm bg-[#7AC8A4]/10 text-[#7AC8A4] px-3 py-1 rounded-full">
                          {drink === 'soju' ? '소주' :
                            drink === 'beer' ? '맥주' :
                              drink === 'wine' ? '와인' :
                                drink === 'makgeolli' ? '막걸리' : drink}
                        </span>
                      ))}
                      {recommendedDishes[0].tags.taste.slice(0, 2).map((taste: string) => (
                        <span key={taste} className="text-sm bg-[#FF6363]/10 text-[#FF6363] px-3 py-1 rounded-full">
                          {taste === 'spicy' ? '매운맛' :
                            taste === 'refreshing' ? '깔끔한맛' :
                              taste === 'tangy' ? '새콤한맛' :
                                taste === 'creamy' ? '크리미한맛' : taste}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 분위기 */}
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-medium text-[#888888]">분위기:</span>
                    <div className="flex flex-wrap gap-2">
                      {recommendedDishes[0].tags.mood.slice(0, 2).map((mood: string) => (
                        <span key={mood} className="text-sm bg-[#7AC8A4]/10 text-[#7AC8A4] px-3 py-1 rounded-full">
                          {mood === 'friends' ? '친구들과' :
                            mood === 'couple' ? '연인과' :
                              mood === 'solo' ? '혼술' :
                                mood === 'festival' ? '회식' : mood}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 가격대 */}
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-medium text-[#888888]">가격대:</span>
                    <div className="flex flex-wrap gap-2">
                      {recommendedDishes[0].tags.price.map((price: string) => (
                        <span key={price} className="text-sm bg-[#FF6363]/10 text-[#FF6363] px-3 py-1 rounded-full">
                          {price === 'low' ? '저렴' :
                            price === 'middle' ? '보통' :
                              price === 'high' ? '고급' :
                                price === 'premium' ? '프리미엄' : price}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 2등부터는 2개씩 나열 */}
          <div className="grid md:grid-cols-2 gap-6">
            {recommendedDishes.slice(1).map((dish, index) => {
              const actualIndex = index + 1; // 2등부터 시작하므로 +1
              
              return (
                <Card key={dish.id} className="hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow bg-white border-0 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="text-[#aaaaaa] pr-2 rounded-full text-md font-bold flex items-center justify-center">
                          {actualIndex + 1}
                        </div>
                        <CardTitle className="text-xl text-[#333333]">{dish.name}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base text-[#888888]">
                      {dish.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {/* 매칭 점수 */}
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-[#888888]">매칭도:</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#FF6363] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${dish.score}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-[#FF6363]">{dish.score}%</span>
                        </div>
                      </div>

                      {/* 주요 특징 */}
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-[#888888]">주요 특징:</span>
                        <div className="flex flex-wrap gap-1">
                          {dish.tags.drinkType.slice(0, 2).map((drink: string) => (
                            <span key={drink} className="text-xs bg-[#7AC8A4]/10 text-[#7AC8A4] px-2 py-1 rounded">
                              {drink === 'soju' ? '소주' :
                                drink === 'beer' ? '맥주' :
                                  drink === 'wine' ? '와인' :
                                    drink === 'makgeolli' ? '막걸리' : drink}
                            </span>
                          ))}
                          {dish.tags.taste.slice(0, 2).map((taste: string) => (
                            <span key={taste} className="text-xs bg-[#FF6363]/10 text-[#FF6363] px-2 py-1 rounded">
                              {taste === 'spicy' ? '매운맛' :
                                taste === 'refreshing' ? '깔끔한맛' :
                                  taste === 'tangy' ? '새콤한맛' :
                                    taste === 'creamy' ? '크리미한맛' : taste}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 분위기 */}
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-[#888888]">분위기:</span>
                        <div className="flex flex-wrap gap-1">
                          {dish.tags.mood.slice(0, 2).map((mood: string) => (
                            <span key={mood} className="text-xs bg-[#7AC8A4]/10 text-[#7AC8A4] px-2 py-1 rounded">
                              {mood === 'friends' ? '친구들과' :
                                mood === 'couple' ? '연인과' :
                                  mood === 'solo' ? '혼술' :
                                    mood === 'festival' ? '회식' : mood}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 가격대 */}
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-[#888888]">가격대:</span>
                        <div className="flex flex-wrap gap-1">
                          {dish.tags.price.map((price: string) => (
                            <span key={price} className="text-xs bg-[#FF6363]/10 text-[#FF6363] px-2 py-1 rounded">
                              {price === 'low' ? '저렴' :
                                price === 'middle' ? '보통' :
                                  price === 'high' ? '고급' :
                                    price === 'premium' ? '프리미엄' : price}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="w-full text-center space-y-4">
          {isIntermediate ? (
            <div className="flex flex-col space-y-4">
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
            <div className="flex flex-col space-y-4">
              {/* 1층: 공유하기 버튼 */}
              <div className="flex justify-center w-full max-w-md mx-auto">
                <Button onClick={handleShare} size="lg" className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold transform hover:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg">
                  카카오톡으로 공유하기
                </Button>
              </div>

              {/* 2층: 다시 추천받기 버튼 */}
              <div className="flex justify-center w-full max-w-md mx-auto">
                <Button variant="secondary" onClick={handleRestart} size="lg" className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                  다시 추천받기
                </Button>
              </div>
            </div>
          )}

          {!isIntermediate && (
            <p className="text-[#888888] text-sm">
              다른 사람들과 함께 즐거운 시간 보내세요! 🍻
            </p>
          )}
        </div>
      </main>
    </div>
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

// 메인 컴포넌트
export default function ResultsPage() {
  return (
    <Suspense fallback={<ResultsLoading />}>
      <ResultsContent />
    </Suspense>
  );
} 