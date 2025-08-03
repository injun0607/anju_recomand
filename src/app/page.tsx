'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  const router = useRouter();

  const services = [
    {
      id: 'anjus',
      title: '🍺 안주 추천',
      description: '술과 함께 즐기기 좋은 안주를 추천받아보세요!',
      status: 'active',
      path: '/anjus/questions'
    },
    {
      id: 'foods',
      title: '🍕 음식 추천',
      description: '맛있는 음식을 추천받아보세요!',
      status: 'coming-soon',
      path: '/foods'
    },
    {
      id: 'movies',
      title: '🎬 영화 추천',
      description: '취향에 맞는 영화를 추천받아보세요!',
      status: 'coming-soon',
      path: '/movies'
    },
    {
      id: 'music',
      title: '🎵 음악 추천',
      description: '기분에 맞는 음악을 추천받아보세요!',
      status: 'coming-soon',
      path: '/music'
    },
    {
      id: 'books',
      title: '📚 책 추천',
      description: '흥미로운 책을 추천받아보세요!',
      status: 'coming-soon',
      path: '/books'
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.status === 'active') {
      router.push(service.path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">🎯 추천 서비스</h1>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 환영 메시지 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            당신에게 맞는 추천을 받아보세요! 🎉
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 추천 서비스를 통해 당신만의 맞춤형 추천을 경험해보세요.
          </p>
        </div>

        {/* 서비스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                service.status === 'active' 
                  ? 'hover:scale-105' 
                  : 'opacity-60 cursor-not-allowed'
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {service.status === 'active' ? (
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    시작하기
                  </Button>
                ) : (
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <span className="text-sm">🚧</span>
                    <span className="text-sm font-medium">준비 중</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💡 추천 서비스란?
            </h3>
            <p className="text-gray-600 mb-6">
              AI 기반의 개인화된 추천 시스템으로 당신의 취향과 상황에 맞는 
              최적의 선택을 도와드립니다. 간단한 질문에 답하시면 
              맞춤형 추천 결과를 받으실 수 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-2">
                <span>🎯</span>
                <span>개인화된 추천</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>⚡</span>
                <span>빠른 결과</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>🔒</span>
                <span>안전한 서비스</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
