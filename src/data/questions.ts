import { QuestionFlow } from '@/lib/types';

export const QUESTIONS: Record<string, QuestionFlow> = {
  // 술 종류 선택
  'drink-type': {
    id: 'drink-type',
    question: '어떤 술을 마실 예정인가요?',
    type: 'single',
    icon: '🍺',
    options: [
      {
        id: 'soju',
        text: '소주',
        value: 'soju',
      },
      {
        id: 'beer',
        text: '맥주',
        value: 'beer',
      },
      // {
      //   id: 'wine',
      //   text: '와인',
      //   value: 'wine',
      // },
      {
        id: 'makgeolli',
        text: '막걸리',
        value: 'makgeolli',
      },
      // {
      //   id: 'whiskey',
      //   text: '위스키',
      //   value: 'whiskey',
      // },
      // {
      //   id: 'cocktail',
      //   text: '칵테일',
      //   value: 'cocktail',
      // }
    ]
  },

  // 맛 관련 질문
  'taste': {
    id: 'taste',
    question: '오늘은 어떤 맛이 땡기시나요?',
    type: 'single',
    icon: '👅',
    options: [
      {
        id: 'spicy',
        text: '매콤한맛',
        value: 'spicy',
      },
      {
        id: 'refreshing',
        text: '깔끔담백한맛',
        value: 'refreshing',
      },
      {
        id: 'tangy',
        text: '새콤한맛',
        value: 'tangy',
      },
      {
        id: 'creamy',
        text: '부드러운맛',
        value: 'creamy',
      },
      {
        id: 'none',
        text: '추천해줘',
        value: 'none',
      }
    ]
  },

  //분위기 질문
  'mood': {
    id: 'mood',
    question: '오늘은 어떤 분위기인가요?',
    type: 'single',
    icon: '😊',
    options: [
      {
        id: 'solo',
        text: '혼술',
        value: 'solo',
      },
      {
        id: 'friends',
        text: '친구들이랑',
        value: 'friends',
      },
      {
        id: 'couple',
        text: '연인이랑',
        value: 'couple',
      },
      {
        id: 'camping',
        text: '야외/캠핑',
        value: 'camping',
      },
      {
        id: 'festival',
        text: '회식자리',
        value: 'festival',
      }
    ]
  },

  //포만감 질문
  'hunger': {
    id: 'hunger',
    question: '현재 얼마나 배고프신가요?',
    type: 'single',
    icon: '🍽️',
    options: [
      {
        id: 'hungry',
        text: '아주 많이!',
        value: 'hungry',
      },
      {
        id: 'soso',
        text: '약간 출출',
        value: 'soso',
      },
      {
        id: 'little',
        text: '술이 주인공!',
        value: 'little',
      }
    ]
  },

  //가격 질문
  'price': {
    id: 'price',
    question: '오늘 예산은 어느 정도인가요?',
    type: 'single',
    icon: '💰',
    options: [
      {
        id: 'low',
        text: '2만원 이하',
        value: 'low',
      },
      {
        id: 'middle',
        text: '2-5만원',
        value: 'middle',
      },
      {
        id: 'high',
        text: '5-10만원',
        value: 'high',
      },
      {
        id: 'premium',
        text: '상관 없다!',
        value: 'premium',
      }
    ]
  },

  //못먹는 재료 질문
  'restrictions': {
    id: 'restrictions',
    question: '싫어하시는 재료가 있나요? (여러개 선택 가능)',
    type: 'multiple',
    icon: '🚫',
    options: [
      {
        id: 'seafood',
        text: '어패류/해산물',
        value: 'seafood',
      },
      {
        id: 'intestines',
        text: '내장류(곱창/간 등)',
        value: 'intestines',
      },
      {
        id: 'feet',
        text: '발/족류(닭발/족발)',
        value: 'feet',
      },
      {
        id: 'none',
        text: '상관 없다!',
        value: 'none',
      }
    ]
  },

  //식감 질문
  'texture': {
    id: 'texture',
    question: '선호하는 식감이 있으신가요?',
    type: 'single',
    icon: '🥢',
    options: [
      {
        id: 'crispy',
        text: '바삭한 식감',
        value: 'crispy',
      },
      {
        id: 'soft',
        text: '부드러운 식감',
        value: 'soft',
      },
      {
        id: 'chewy',
        text: '쫄깃한 식감',
        value: 'chewy',
      },
      {
        id: 'none',
        text: '상관 없다!',
        value: 'none',
      }
    ]
  },

  //조리 가능 여부
  'cook': {
    id: 'cook',
    question: '조리가 필요한 안주는 괜찮으신가요?',
    type: 'single',
    icon: '👨‍🍳',
    options: [
      {
        id: 'cook',
        text: '직접 조리해도 괜찮아요',
        value: 'cook',
      },
      {
        id: 'microwave',
        text: '전자레인지 정도는 괜찮아요',
        value: 'microwave',
      },
      {
        id: 'eat',
        text: '바로 먹고싶어요',
        value: 'eat',
      },
      {
        id: 'none',
        text: '상관 없다!',
        value: 'none',
      }
    ]
  },

  //냄새 신경 여부
  'smell': {
    id: 'smell',
    question: '음식 냄새에 민감하신가요?',
    type: 'single',
    icon: '👃',
    options: [
      {
        id: 'sensitive',
        text: '네, 민감해요',
        value: 'sensitive',
      },
      {
        id: 'normal',
        text: '보통이에요',
        value: 'normal',
      },
      {
        id: 'not-care',
        text: '상관없어요',
        value: 'not-care',
      }
    ]
  },

  //안주 온도 질문
  'temperature': {
    id: 'temperature',
    question: '차가운 안주 VS 따뜻한 안주',
    type: 'single',
    icon: '🌡️',
    options: [
      {
        id: 'cold',
        text: '차가운 안주',
        value: 'cold',
      },
      {
        id: 'warm',
        text: '따뜻한 안주',
        value: 'warm',
      },
      {
        id: 'none',
        text: '상관 없다!',
        value: 'none',
      }
    ]
  },

  //안주 스타일 질문
  'style': {
    id: 'style',
    question: '어떤 안주스타일이 좋으신가요? (여러개 선택 가능)',
    type: 'multiple',
    icon: '🎨',
    options: [
      {
        id: 'soup',
        text: '국물 있는 안주',
        value: 'soup',
      },
      {
        id: 'stir-fried',
        text: '볶음류 안주',
        value: 'stir-fried',
      },
      {
        id: 'grill',
        text: '구이류 안주',
        value: 'grill',
      },
      {
        id: 'fried',
        text: '튀김류 안주',
        value: 'fried',
      },
      {
        id: 'clean',
        text: '깔끔한 안주',
        value: 'clean',
      },
      {
        id: 'none',
        text: '상관 없다!',
        value: 'none',
      }
    ]
  },

  //오늘 하루 기분 질문
  'feel': {
    id: 'feel',
    question: '오늘 하루 어땟어요?',
    type: 'single',
    icon: '💭',
    options: [
      {
        id: 'happy',
        text: '기분 좋아요',
        value: 'happy',
      },
      {
        id: 'soso',
        text: '그냥 그래요',
        value: 'soso',
      },
      {
        id: 'bad',
        text: '힘들었다. 위로가 필요해요',
        value: 'bad',
      },
    ]
  },

  //특별한것 선호도 질문
  'special': {
    id: 'special',
    question: '평소보다 특별한 걸 먹고 싶나요?',
    type: 'single',
    icon: '⭐',
    options: [
      {
        id: 'yes',
        text: '평소엔 잘 안먹었던 걸로',
        value: 'yes',
      },
      {
        id: 'no',
        text: '익숙한 걸로 추천해줘',
        value: 'no',
      },
      {
        id: 'middle',
        text: '중간 정도 추천해줘',
        value: 'middle',
      },
    ]
  },

  //레트로 선호도 질문
  'retro': {
    id: 'retro',
    question: '레트로 감성 안주 어때요?',
    type: 'single',
    icon: '📻',
    options: [
      {
        id: 'like',
        text: '좋아요',
        value: 'like',
      },
      {
        id: 'soso',
        text: '그냥 그래요',
        value: 'soso',
      },
      {
        id: 'none',
        text: '상관 없다!',
        value: 'none',
      },
    ]
  },

  //최근 유행하는 안주 선호도 질문 
  'sns': {
    id: 'sns',
    question: '최근 유행하는 안주 어때요?',
    type: 'single',
    icon: '📱',
    options: [
      {
        id: 'like',
        text: '좋아요',
        value: 'like',
      },
      {
        id: 'soso',
        text: '그냥 그래요',
        value: 'soso',
      },
      {
        id: 'none',
        text: '상관 없다!',
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