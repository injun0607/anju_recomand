'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DrinkType, SideDish } from '@/lib/types';
import { DRINK_TYPES } from '@/lib/constants';
import { generateKakaoShareUrl } from '@/lib/utils';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  drinkType: DrinkType | null;
  recommendedDishes: SideDish[];
}

export function ShareModal({ isOpen, onClose, drinkType, recommendedDishes }: ShareModalProps) {
  const [isSharing, setIsSharing] = useState(false);

  if (!isOpen) return null;

  const handleKakaoShare = () => {
    if (recommendedDishes.length > 0 && drinkType) {
      setIsSharing(true);
      const shareUrl = generateKakaoShareUrl(
        DRINK_TYPES[drinkType].name,
        recommendedDishes
      );
      window.open(shareUrl, '_blank');
      setIsSharing(false);
      onClose();
    }
  };

  const handleXShare = () => {
    if (recommendedDishes.length > 0 && drinkType) {
      setIsSharing(true);
      const drinkName = DRINK_TYPES[drinkType].name;
      const topDish = recommendedDishes[0].name;
      const text = `🍺 ${drinkName}와 함께 먹기 좋은 안주 추천받았어요!\n\n🥇 1위: ${topDish}\n\n안주 추천 받아보세요! 👇`;
      const url = window.location.href;
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      window.open(shareUrl, '_blank');
      setIsSharing(false);
      onClose();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // 복사 성공 알림 (간단한 토스트 메시지)
      alert('링크가 복사되었습니다!');
      onClose();
    } catch (err) {
      console.error('링크 복사 실패:', err);
      alert('링크 복사에 실패했습니다.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-[#333333]">
            공유하기
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* 카카오톡 공유 */}
          <Button
            onClick={handleKakaoShare}
            disabled={isSharing}
            className="w-full h-14 bg-[#FEE500] hover:bg-[#FDD835] text-[#3C1E1E] font-bold text-lg rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">💬</span>
              <span>카카오톡으로 공유</span>
            </div>
          </Button>

          {/* X(트위터) 공유 */}
          <Button
            onClick={handleXShare}
            disabled={isSharing}
            className="w-full h-14 bg-[#000000] hover:bg-[#1A1A1A] text-white font-bold text-lg rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">𝕏</span>
              <span>X(트위터)로 공유</span>
            </div>
          </Button>

          {/* 링크 복사 */}
          <Button
            onClick={handleCopyLink}
            disabled={isSharing}
            variant="outline"
            className="w-full h-14 border-2 border-[#E5E7EB] hover:border-[#D1D5DB] text-[#333333] font-bold text-lg rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🔗</span>
              <span>링크 복사</span>
            </div>
          </Button>

          {/* 취소 버튼 */}
          <Button
            onClick={onClose}
            variant="ghost"
            className="w-full h-12 text-[#888888] hover:text-[#666666] hover:bg-[#F9FAFB] font-medium rounded-xl transition-all duration-300"
          >
            취소
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
