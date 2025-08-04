import { QuestionFlow } from '@/lib/types';

export const QUESTIONS: Record<string, QuestionFlow> = {
  // 술 종류 선택
  'drink-type': {
    id: 'drink-type',
    question: '오늘은 어떤 술 마실 거야?',
    type: 'single',
    icon: '🍺',
    options: [
      {
        id: 'soju',
        text: '소주가 끌려',
        value: 'soju',
      },
      {
        id: 'beer',
        text: '맥주가 끌려',
        value: 'beer',
      },
      {
        id: 'wine',
        text: '와인이 끌려',
        value: 'wine',
      },
      {
        id: 'makgeolli',
        text: '막걸리가 끌려',
        value: 'makgeolli',
      },
      {
         id: 'whiskey',
         text: '위스키가 끌려',
         value: 'whiskey',
       },
       {
         id: 'cocktail',
         text: '칵테일이 끌려',
         value: 'cocktail',
       }
    ]
  },

  // 맛 관련 질문
  'taste': {
    id: 'taste',
    question: '어떤 맛이 당겨?',
    type: 'single',
    icon: '👅',
    options: [
      {
        id: 'spicy',
        text: '매콤한 게 좋아',
        value: 'spicy',
      },
      {
        id: 'refreshing',
        text: '담백한 게 당겨',
        value: 'refreshing',
      },
      {
        id: 'tangy',
        text: '새콤한 맛이 땡겨',
        value: 'tangy',
      },
      {
        id: 'creamy',
        text: '부드러운 맛 원해',
        value: 'creamy',
      },
      {
        id: 'none',
        text: '다 좋아',
        value: 'none',
      }
    ]
  },

  //분위기 질문
  'mood': {
    id: 'mood',
    question: '오늘 술자리는 누구랑 함께해?',
    type: 'single',
    icon: '😊',
    options: [
      {
        id: 'solo',
        text: '혼자 마실 거야',
        value: 'solo',
      },
      {
        id: 'friends',
        text: '친구들이랑 함께야',
        value: 'friends',
      },
      {
        id: 'couple',
        text: '연인이랑 있어',
        value: 'couple',
      },
      {
        id: 'camping',
        text: '야외나 캠핑 중이야',
        value: 'camping',
      },
      {
        id: 'festival',
        text: '회식 자리야',
        value: 'festival',
      }
    ]
  },

  //포만감 질문
  'hunger': {
    id: 'hunger',
    question: '지금 배고픔 정도는 어때?',
    type: 'single',
    icon: '🍽️',
    options: [
      {
        id: 'hungry',
        text: '엄청 배고파',
        value: 'hungry',
      },
      {
        id: 'soso',
        text: '약간 출출해',
        value: 'soso',
      },
      {
        id: 'little',
        text: '그냥 술이 주인공이야',
        value: 'little',
      }
    ]
  },

  //가격 질문
  'price': {
    id: 'price',
    question: '예산은 어느 정도 생각하고 있어?',
    type: 'single',
    icon: '💰',
    options: [
      {
        id: 'low',
        text: '2만원 이하로 생각 중이야',
        value: 'low',
      },
      {
        id: 'middle',
        text: '2~5만원 정도 괜찮아',
        value: 'middle',
      },
      {
        id: 'high',
        text: '5~10만원까지 가능해',
        value: 'high',
      },
      {
        id: 'premium',
        text: '예산은 상관없어',
        value: 'premium',
      }
    ]
  },

  //못먹는 재료 질문
  'restrictions': {
    id: 'restrictions',
    question: '혹시 싫어하는 재료가 있어? (복수 선택 가능)',
    type: 'multiple',
    icon: '🚫',
    options: [
      {
        id: 'seafood',
        text: '해산물은 좀 피하고 싶어',
        value: 'seafood',
      },
      {
        id: 'intestines',
        text: '내장류는 별로야',
        value: 'intestines',
      },
      {
        id: 'feet',
        text: '발/족류는 안 땡겨',
        value: 'feet',
      },
      {
        id: 'none',
        text: '다 좋아',
        value: 'none',
      }
    ]
  },

  //식감 질문
  'texture': {
    id: 'texture',
    question: '어떤 식감을 좋아해?',
    type: 'single',
    icon: '🥢',
    options: [
      {
        id: 'crispy',
        text: '바삭한 게 좋아',
        value: 'crispy',
      },
      {
        id: 'soft',
        text: '부드러운 식감이 좋아',
        value: 'soft',
      },
      {
        id: 'chewy',
        text: '쫄깃한 식감이 좋아',
        value: 'chewy',
      },
      {
        id: 'none',
        text: '다 좋아',
        value: 'none',
      }
    ]
  },

  //조리 가능 여부
  'cook': {
    id: 'cook',
    question: '오늘 안주는 어디서 먹을 거야?',
    type: 'single',
    icon: '👨‍🍳',
    options: [
      {
        id: 'cook',
        text: '집에서 먹을 거야',
        value: 'cook',
      },
      {
        id: 'microwave',
        text: '야외에서 먹을 거야',
        value: 'microwave',
      },
      {
        id: 'eat',
        text: '술집에서 마셔',
        value: 'eat',
      },
      {
        id:'neighbor',
        text: '친구 집에서 마실 거야',
        value: 'neighbor',
      },
      {
        id: 'none',
        text: '어디든 괜찮아',
        value: 'none',
      }
    ]
  },

  //냄새 신경 여부
  'smell': {
    id: 'smell',
    question: '오늘 안주는 어떤 분위기에 어울렸으면 해?',
    type: 'single',
    icon: '👃',
    options: [
      {
        id: 'sensitive',
        text: '조용하고 편한 분위기가 좋아',
        value: 'sensitive',
      },
      {
        id: 'normal',
        text: '활기차고 화려한 분위기가 좋아',
        value: 'normal',
      },
      {
        id: 'peaceful',
        text: '소박하고 정겨운 느낌이 좋아',
        value: 'peaceful',
      },
      {
        id: 'none',
        text: '다 좋아',
        value: 'none',
      }
    ]
  },

  //안주 온도 질문
  'temperature': {
    id: 'temperature',
    question: '따뜻한 안주 vs 차가운 안주, 뭐가 좋아?',
    type: 'single',
    icon: '🌡️',
    options: [
      {
        id: 'cold',
        text: '차가운 안주가 좋아',
        value: 'cold',
      },
      {
        id: 'warm',
        text: '따뜻한 안주가 좋아',
        value: 'warm',
      },
      {
        id: 'none',
        text: '다 좋아',
        value: 'none',
      }
    ]
  },

  //안주 스타일 질문
  'style': {
    id: 'style',
    question: '어떤 스타일의 안주가 좋아? (복수 선택 가능)',
    type: 'multiple',
    icon: '🎨',
    options: [
      {
        id: 'soup',
        text: '국물 있는 안주가 좋아',
        value: 'soup',
      },
      {
        id: 'stir-fried',
        text: '볶음류가 좋아',
        value: 'stir-fried',
      },
      {
        id: 'grill',
        text: '구이류가 땡겨',
        value: 'grill',
      },
      {
        id: 'fried',
        text: '튀김이 먹고 싶어',
        value: 'fried',
      },
      {
        id: 'clean',
        text: '깔끔한 게 좋아',
        value: 'clean',
      },
      {
        id: 'none',
        text: '다 좋아',
        value: 'none',
      }
    ]
  },

  //오늘 하루 기분 질문
  'feel': {
    id: 'feel',
    question: '오늘 하루는 어땠어?',
    type: 'single',
    icon: '💭',
    options: [
      {
        id: 'happy',
        text: '기분 좋은 하루였어',
        value: 'happy',
      },
      {
        id: 'soso',
        text: '그냥 그런 하루였어',
        value: 'soso',
      },
      {
        id: 'bad',
        text: '좀 위로받고 싶어',
        value: 'bad',
      },
    ]
  },

  //특별한것 선호도 질문
  'special': {
    id: 'special',
    question: '평소보다 특별한 걸 먹고 싶어?',
    type: 'single',
    icon: '⭐',
    options: [
      {
        id: 'yes',
        text: '평소엔 잘 안 먹는 걸로 추천해줘',
        value: 'yes',
      },
      {
        id: 'no',
        text: '익숙한 걸로 추천해줘',
        value: 'no',
      },
      {
        id: 'middle',
        text: '너무 특별하지도 평범하지도 않은 걸로',
        value: 'middle',
      },
    ]
  },

  //레트로 선호도 질문
  'retro': {
    id: 'retro',
    question: '복고 감성 나는 옛날 스타일 안주 어때?',
    type: 'single',
    icon: '📻',
    options: [
      {
        id: 'like',
        text: '좋아! 그런 분위기 좋아해',
        value: 'like',
      },
      {
        id: 'soso',
        text: '그냥 그래',
        value: 'soso',
      },
      {
        id: 'none',
        text: '다 좋아',
        value: 'none',
      },
    ]
  },

  //최근 유행하는 안주 선호도 질문 
  'sns': {
    id: 'sns',
    question: '요즘 유행하는 안주는 어때?',
    type: 'single',
    icon: '📱',
    options: [
      {
        id: 'like',
        text: '유행 안주 궁금해',
        value: 'like',
      },
      {
        id: 'soso',
        text: '난 유행보단 내 취향',
        value: 'soso',
      },
      {
        id: 'none',
        text: '다 좋아',
        value: 'none',
      },
    ]
  }
};

// 첫 번째 질문 ID
export const FIRST_QUESTION_ID = 'drink-type';

// 질문 순서
export const QUESTION_ORDER = [
  'drink-type',
  'taste',
  'mood',
  'hunger',
  'price',
  'restrictions',
  'texture',
  'cook',
  'smell',
  'temperature',
  'style',
  'feel',
  'special',
  'retro',
  'sns',
];

// 질문 플로우를 가져오는 함수
export function getQuestion(questionId: string): QuestionFlow | null {
  return QUESTIONS[questionId] || null;
}

// 다음 질문 ID 가져오기
export function getNextQuestionId(currentQuestionId: string): string | null {
  const currentIndex = QUESTION_ORDER.indexOf(currentQuestionId);
  if (currentIndex === -1 || currentIndex >= QUESTION_ORDER.length - 1) {
    return null;
  }
  return QUESTION_ORDER[currentIndex + 1];
} 