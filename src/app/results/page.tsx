'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
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

export default function ResultsPage() {
  const router = useRouter();
  const { answers, setRecommendations } = useAppStore();
  const { reset } = useAppActions();
  
  const [recommendedDishes, setRecommendedDishes] = useState<RecommendedDish[]>([]);
  const [selectedDrinkType, setSelectedDrinkType] = useState<DrinkType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 추천 로직 실행
  const generateRecommendations = useCallback(() => {
    if (!answers || Object.keys(answers).length === 0) {
      router.push('/questions');
      return;
    }

    setIsLoading(true);

    // 새로운 점수 시스템으로 추천 생성
    const recommendations = getRecommendations(answers, 5);
    
    setRecommendedDishes(recommendations);
    setSelectedDrinkType(answers['drink-type'] as DrinkType);
    setIsLoading(false);

    // 추천 결과 저장
    setRecommendations([{
      sideDishes: recommendations,
      drinkType: answers['drink-type'] as DrinkType,
      reasoning: `선택하신 ${DRINK_TYPES[answers['drink-type'] as DrinkType]?.name}와 잘 어울리는 안주들을 추천드립니다.`,
      confidence: 0.85
    }]);
  }, [answers, router, setRecommendations]);

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
    router.push('/questions');
  };

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">추천 결과를 분석하는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-gray-900">🍺 안주 추천 결과</h1>
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
        {/* 결과 요약 */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">
              🎉 추천 결과
            </CardTitle>
            <CardDescription className="text-lg">
              {selectedDrinkType && (
                <>
                  <span className="text-2xl mr-2">
                    {DRINK_TYPES[selectedDrinkType].icon}
                  </span>
                  {DRINK_TYPES[selectedDrinkType].name}와 함께 즐기기 좋은 안주를 추천드립니다!
                </>
              )}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* 추천 안주 목록 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recommendedDishes.map((dish, index) => (
            <Card key={dish.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🍽️</span>
                    <CardTitle className="text-xl">{dish.name}</CardTitle>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                    #{index + 1}
                  </div>
                </div>
                <CardDescription className="text-base">
                  {dish.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* 매칭 점수 */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600">매칭도:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${dish.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold text-blue-600">{dish.score}%</span>
                    </div>
                  </div>

                  {/* 주요 특징 */}
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">주요 특징:</span>
                    <div className="flex flex-wrap gap-1">
                      {dish.tags.drinkType.slice(0, 2).map((drink: string) => (
                        <span key={drink} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {drink === 'soju' ? '소주' : 
                           drink === 'beer' ? '맥주' : 
                           drink === 'wine' ? '와인' : 
                           drink === 'makgeolli' ? '막걸리' : drink}
                        </span>
                      ))}
                                             {dish.tags.taste.slice(0, 2).map((taste: string) => (
                         <span key={taste} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
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
                    <span className="text-sm font-medium text-gray-600">분위기:</span>
                    <div className="flex flex-wrap gap-1">
                                             {dish.tags.mood.slice(0, 2).map((mood: string) => (
                         <span key={mood} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
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
                    <span className="text-sm font-medium text-gray-600">가격대:</span>
                    <div className="flex flex-wrap gap-1">
                                             {dish.tags.price.map((price: string) => (
                         <span key={price} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
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
          ))}
        </div>

        {/* 액션 버튼 */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <Button onClick={handleShare} size="lg" className="px-8">
              카카오톡으로 공유하기
            </Button>
            <Button variant="outline" onClick={handleRestart} size="lg" className="px-8">
              다시 추천받기
            </Button>
          </div>
          
          <p className="text-gray-600 text-sm">
            다른 사람들과 함께 즐거운 시간 보내세요! 🍻
          </p>
        </div>
      </main>
    </div>
  );
} 