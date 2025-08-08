import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AnjuHomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* 헤더 */}
      <header className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-[#333333] hover:text-[#FF6363] transition-colors">
                <img src="/logo-ko.svg" alt="안주 추천 로고" className="h-8 w-auto mr-2" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-[#888888] hover:text-[#333333] transition-colors">
                홈
              </Link>
              <Link href="/anjus/questions" className="text-[#888888] hover:text-[#333333] transition-colors">
                추천받기
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center">
          {/* 히어로 섹션 */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              오늘 어울리는 안주는?
            </h2>
            <p className="text-lg text-[#888888] mb-8 leading-relaxed">
              150개 이상의 안주중에서 어울리는 안주를 확인해보세요
            </p>
            <Link href="/anjus/questions">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-[#FF6363] hover:bg-[#FF6363]/85 text-white font-bold rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-150 hover:scale-[0.98] active:scale-[0.98]"
              >
                추천받기 시작하기
              </Button>
            </Link>
          </div>

          {/* 특징 카드 섹션 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform duration-150 hover:scale-[1.03]">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-semibold text-[#333333] mb-2">AI 기반 추천</h3>
              <p className="text-sm text-[#888888]">개인 취향에 맞는 맞춤형 안주 추천</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform duration-150 hover:scale-[1.03]">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-[#333333] mb-2">빠른 결과</h3>
              <p className="text-sm text-[#888888]">1분 만에 결과 확인 가능</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform duration-150 hover:scale-[1.03]">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-[#333333] mb-2">정확한 추천</h3>
              <p className="text-sm text-[#888888]">높은 만족도를 자랑하는 추천</p>
            </div>
          </div>
        </div>
      </main>

      {/* 간단한 푸터 */}
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#888888]">
          <p>&copy; 2024 안주 추천. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 