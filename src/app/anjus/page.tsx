'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DRINK_TYPES } from '@/lib/constants';
import Link from 'next/link';

export default function AnjuHomePage() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={goHome}>🍺 안주 추천</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                홈
              </Link>
              <Link href="/anjus/questions" className="text-gray-600 hover:text-gray-900">
                추천받기
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                소개
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 히어로 섹션 */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            당신에게 딱 맞는 안주를 추천해드립니다
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            간단한 질문에 답하시면 현재 상황과 취향에 맞는 최적의 안주를 추천해드립니다.
          </p>
          <Link href="/anjus/questions">
            <Button size="lg" className="text-lg px-8 py-4">
              추천받기 시작하기
            </Button>
          </Link>
        </section>

        {/* 특징 섹션 */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            왜 안주 추천을 사용해야 할까요?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">🧠</div>
                <CardTitle>지능형 추천</CardTitle>
                <CardDescription>
                  AI 기반 알고리즘으로 당신의 취향과 상황을 분석하여 최적의 안주를 추천합니다.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">⚡</div>
                <CardTitle>빠른 결과</CardTitle>
                <CardDescription>
                  몇 분 안에 질문을 완료하고 즉시 추천 결과를 받아보세요.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-3xl mb-2">🎯</div>
                <CardTitle>맞춤형 추천</CardTitle>
                <CardDescription>
                  술 종류, 매운 정도, 알레르기 등 모든 요소를 고려한 맞춤형 추천입니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* 술 종류 섹션 */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            어떤 술과 함께 즐기실 건가요?
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(DRINK_TYPES).map(([key, drink]) => (
              <Card key={key} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="text-4xl mb-2">{drink.icon}</div>
                  <h4 className="font-semibold text-gray-900">{drink.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{drink.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 통계 섹션 */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              안주 추천의 성과
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">다양한 안주</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-600">술 종류</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">만족도</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1분</div>
                <div className="text-gray-600">평균 소요시간</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                지금 바로 시작해보세요!
              </h3>
              <p className="text-xl mb-8 opacity-90">
                더 이상 안주 고민하지 마세요. 당신에게 딱 맞는 안주를 찾아드립니다.
              </p>
              <Link href="/anjus/questions">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                  무료로 추천받기
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">🍺 안주 추천</h4>
              <p className="text-gray-400">
                당신에게 딱 맞는 안주를 추천해드리는 서비스입니다.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">서비스</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/anjus/questions" className="hover:text-white">추천받기</Link></li>
                <li><Link href="/about" className="hover:text-white">서비스 소개</Link></li>
                <li><Link href="/faq" className="hover:text-white">자주 묻는 질문</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">지원</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white">문의하기</Link></li>
                <li><Link href="/privacy" className="hover:text-white">개인정보처리방침</Link></li>
                <li><Link href="/terms" className="hover:text-white">이용약관</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">연결</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/github" className="hover:text-white">GitHub</Link></li>
                <li><Link href="/twitter" className="hover:text-white">Twitter</Link></li>
                <li><Link href="/instagram" className="hover:text-white">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 안주 추천. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 