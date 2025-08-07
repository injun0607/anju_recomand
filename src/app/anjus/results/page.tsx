'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ShareModal } from '@/components/ui/ShareModal';
import { useAppStore, useAppActions } from '@/store/useAppStore';
import { getRecommendations } from '@/data/side-dishes';
import { DRINK_TYPES } from '@/lib/constants';
import { generateKakaoShareUrl } from '@/lib/utils';
import { Drink, SideDish } from '@/lib/types';

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
  const [selectedDrinkType, setSelectedDrinkType] = useState<Drink | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

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
  }, [answers, router, setRecommendations, isIntermediate]);

  // 공유 모달 열기
  const handleShare = () => {
    setIsShareModalOpen(true);
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
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 추천 안주 목록 */}
        <div className="space-y-8 mb-8">
          {/* 1등 카드 - 1층을 다 사용 */}
          {recommendedDishes.length > 0 && (
            <Card className="hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow bg-white border-0 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-2xl">
              <div className="flex flex-col md:flex-row">
                {/* 상단/왼쪽: 이미지 영역 */}
                <div className="w-full md:w-1/2 aspect-square rounded-t-2xl md:rounded-l-none md:rounded-r-2xl flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src={recommendedDishes[0].image || '/images/dishes/friedChicken.png'} 
                    alt={recommendedDishes[0].name} 
                    className="max-w-full max-h-full object-contain p-4"
                    onError={(e) => {
                      e.currentTarget.src = '/images/dishes/friedChicken.png';
                    }}
                  />
                </div>

                {/* 하단/오른쪽: 정보 영역 */}
                <div className="w-full md:w-1/2 p-6 md:p-8">
                  <div className="flex items-center space-x-2 mb-4 md:mb-6">
                    <div className="bg-[#FF6363] text-white w-10 h-10 md:w-12 md:h-12 rounded-full text-xl md:text-2xl font-bold flex items-center justify-center">
                      1
                    </div>
                    <CardTitle className="text-2xl md:text-4xl text-[#333333]">{recommendedDishes[0].name}</CardTitle>
                  </div>
                  <CardDescription className="text-base md:text-xl text-[#888888] mb-4 md:mb-6">
                    {recommendedDishes[0].description}
                  </CardDescription>
                  
                  <div className="space-y-3 md:space-y-4">
                    {/* 매칭 점수 */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm md:text-base font-medium text-[#888888]">매칭도:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 md:w-32 bg-gray-200 rounded-full h-2 md:h-3">
                          <div
                            className="bg-[#FF6363] h-2 md:h-3 rounded-full transition-all duration-300"
                            style={{ width: `${recommendedDishes[0].score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm md:text-base font-bold text-[#FF6363]">{recommendedDishes[0].score}%</span>
                      </div>
                    </div>

                    {/* 주요 특징 */}
                    <div className="flex space-x-2 space-y-2">
                      <span className="text-sm md:text-base font-medium text-[#888888]">주요 특징:</span>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {[...recommendedDishes[0].tags.drink, ...recommendedDishes[0].tags.taste].slice(0, 3).map((tag: string, index: number) => (
                          <span key={`${tag}-${index}`} className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full ${
                            recommendedDishes[0].tags.drink.includes(tag as any) 
                              ? 'bg-[#7AC8A4]/10 text-[#7AC8A4]' 
                              : 'bg-[#FF6363]/10 text-[#FF6363]'
                          }`}>
                            {tag === 'soju' ? '소주' :
                              tag === 'beer' ? '맥주' :
                                tag === 'wine' ? '와인' :
                                  tag === 'makgeolli' ? '막걸리' :
                                    tag === 'spicy' ? '매운맛' :
                                      tag === 'refreshing' ? '깔끔한맛' :
                                        tag === 'tangy' ? '새콤한맛' :
                                          tag === 'creamy' ? '크리미한맛' : tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 분위기 */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm md:text-base font-medium text-[#888888]">분위기:</span>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {recommendedDishes[0].tags.mood.slice(0, 2).map((mood: string) => (
                          <span key={mood} className="text-xs md:text-sm bg-[#7AC8A4]/10 text-[#7AC8A4] px-2 md:px-3 py-1 rounded-full">
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
                      <span className="text-sm md:text-base font-medium text-[#888888]">가격대:</span>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {recommendedDishes[0].tags.price.map((price: string) => (
                          <span key={price} className="text-xs md:text-sm bg-[#FF6363]/10 text-[#FF6363] px-2 md:px-3 py-1 rounded-full">
                            {price === 'low' ? '저렴' :
                              price === 'middle' ? '보통' :
                                price === 'high' ? '고급' :
                                  price === 'premium' ? '프리미엄' : price}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* 2등부터는 2개씩 나열 */}
          <div className="grid md:grid-cols-2 gap-6">
            {recommendedDishes.slice(1).map((dish, index) => {
              const actualIndex = index + 1; // 2등부터 시작하므로 +1
              
              return (
                <Card key={dish.id} className="hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow bg-white border-0 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-2xl">
                  <div className="flex flex-col md:flex-row">
                    {/* 상단/왼쪽: 이미지 영역 */}
                    <div className="w-full md:w-1/2 aspect-square rounded-t-2xl md:rounded-l-none md:rounded-r-2xl flex items-center justify-center relative overflow-hidden group">
                      <img 
                        src={dish.image || '/images/dishes/friedChicken.png'} 
                        alt={dish.name} 
                        className="max-w-full max-h-full object-contain p-3"
                        onError={(e) => {
                          e.currentTarget.src = '/images/dishes/friedChicken.png';
                        }}
                      />
                    </div>

                    {/* 하단/오른쪽: 정보 영역 */}
                    <div className="w-full md:w-1/2 p-4 md:p-6">
                      <div className="flex items-center space-x-2 mb-3 md:mb-4">
                        <div className="text-[#aaaaaa] pr-2 rounded-full text-sm md:text-md font-bold flex items-center justify-center">
                          {actualIndex + 1}
                        </div>
                        <CardTitle className="text-lg md:text-xl text-[#333333]">{dish.name}</CardTitle>
                      </div>
                      <CardDescription className="text-sm md:text-base text-[#888888] mb-3 md:mb-4">
                        {dish.description}
                      </CardDescription>
                      
                      <div className="space-y-2 md:space-y-3">
                        {/* 매칭 점수 */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xs md:text-sm font-medium text-[#888888]">매칭도:</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 md:w-20 bg-gray-200 rounded-full h-1.5 md:h-2">
                              <div
                                className="bg-[#FF6363] h-1.5 md:h-2 rounded-full transition-all duration-300"
                                style={{ width: `${dish.score}%` }}
                              ></div>
                            </div>
                            <span className="text-xs md:text-sm font-bold text-[#FF6363]">{dish.score}%</span>
                          </div>
                        </div>

                        {/* 주요 특징 */}
                        <div className="flex space-x-2 space-y-1 md:space-y-2">
                          <span className="text-xs md:text-sm font-medium text-[#888888]">주요 특징:</span>
                          <div className="flex flex-wrap gap-1">
                            {[...dish.tags.drink, ...dish.tags.taste].slice(0, 3).map((tag: string, index: number) => (
                              <span key={`${tag}-${index}`} className={`text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded ${
                                dish.tags.drink.includes(tag as any) 
                                  ? 'bg-[#7AC8A4]/10 text-[#7AC8A4]' 
                                  : 'bg-[#FF6363]/10 text-[#FF6363]'
                              }`}>
                                {tag === 'soju' ? '소주' :
                                  tag === 'beer' ? '맥주' :
                                    tag === 'wine' ? '와인' :
                                      tag === 'makgeolli' ? '막걸리' :
                                        tag === 'spicy' ? '매운맛' :
                                          tag === 'refreshing' ? '깔끔한맛' :
                                            tag === 'tangy' ? '새콤한맛' :
                                              tag === 'creamy' ? '크리미한맛' : tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 분위기 */}
                        <div className="flex items-center space-x-2">
                          <span className="text-xs md:text-sm font-medium text-[#888888]">분위기:</span>
                          <div className="flex flex-wrap gap-1">
                            {dish.tags.mood.slice(0, 2).map((mood: string) => (
                              <span key={mood} className="text-xs bg-[#7AC8A4]/10 text-[#7AC8A4] px-1.5 md:px-2 py-0.5 md:py-1 rounded">
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
                          <span className="text-xs md:text-sm font-medium text-[#888888]">가격대:</span>
                          <div className="flex flex-wrap gap-1">
                            {dish.tags.price.map((price: string) => (
                              <span key={price} className="text-xs bg-[#FF6363]/10 text-[#FF6363] px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                                {price === 'low' ? '저렴' :
                                  price === 'middle' ? '보통' :
                                    price === 'high' ? '고급' :
                                      price === 'premium' ? '프리미엄' : price}
                              </span>
                            ))}
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
                  공유하기
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

      {/* 공유 모달 */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        drinkType={selectedDrinkType}
        recommendedDishes={recommendedDishes}
      />
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