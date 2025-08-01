import { DrinkType, SideDishCategory } from './types';

// 술 종류 정보
export const DRINK_TYPES: Record<DrinkType, { name: string; description: string; icon: string }> = {
  soju: {
    name: '소주',
    description: '한국의 대표적인 증류주',
    icon: '🍶'
  },
  beer: {
    name: '맥주',
    description: '시원하고 가벼운 발효주',
    icon: '🍺'
  },
  wine: {
    name: '와인',
    description: '고급스러운 포도주',
    icon: '🍷'
  },
  makgeolli: {
    name: '막걸리',
    description: '전통적인 쌀 발효주',
    icon: '🥛'
  },
  whiskey: {
    name: '위스키',
    description: '강렬한 증류주',
    icon: '🥃'
  },
  cocktail: {
    name: '칵테일',
    description: '다양한 재료로 만든 혼합주',
    icon: '🍸'
  }
};

// 안주 카테고리 정보
export const SIDE_DISH_CATEGORIES: Record<SideDishCategory, { name: string; description: string; icon: string }> = {
  meat: {
    name: '육류',
    description: '고기류 안주',
    icon: '🥩'
  },
  seafood: {
    name: '해산물',
    description: '생선, 조개류 안주',
    icon: '🐟'
  },
  vegetable: {
    name: '채소',
    description: '야채류 안주',
    icon: '🥬'
  },
  soup: {
    name: '국물',
    description: '국, 탕류 안주',
    icon: '🍲'
  },
  noodle: {
    name: '면류',
    description: '면 요리 안주',
    icon: '🍜'
  },
  rice: {
    name: '밥류',
    description: '밥 요리 안주',
    icon: '🍚'
  },
  snack: {
    name: '간식',
    description: '가벼운 간식류',
    icon: '🍿'
  }
};

// 매운 정도 레이블
export const SPICY_LEVELS = {
  0: '안매움',
  1: '약간매움',
  2: '매움',
  3: '매우매움'
} as const;

// 인기도 레이블
export const POPULARITY_LABELS = {
  1: '매우 낮음',
  2: '낮음',
  3: '보통',
  4: '높음',
  5: '매우 높음',
  6: '인기',
  7: '매우 인기',
  8: '폭발적 인기',
  9: '레전드',
  10: '신화'
} as const;

// 앱 설정
export const APP_CONFIG = {
  name: '안주 추천',
  description: '당신에게 딱 맞는 안주를 추천해드립니다',
  version: '1.0.0',
  maxRecommendations: 5,
  questionTimeout: 30000, // 30초
  animationDuration: 300,
} as const;

// API 엔드포인트
export const API_ENDPOINTS = {
  questions: '/api/questions',
  recommendations: '/api/recommendations',
  share: '/api/share',
  history: '/api/history',
} as const;

// 로컬 스토리지 키
export const STORAGE_KEYS = {
  userAnswers: 'anju_user_answers',
  recommendations: 'anju_recommendations',
  sessionId: 'anju_session_id',
  preferences: 'anju_preferences',
} as const;

// 에러 메시지
export const ERROR_MESSAGES = {
  networkError: '네트워크 오류가 발생했습니다. 다시 시도해주세요.',
  serverError: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  invalidAnswer: '올바른 답변을 선택해주세요.',
  timeout: '시간이 초과되었습니다. 다시 시작해주세요.',
  noRecommendations: '추천할 수 있는 안주가 없습니다.',
} as const;

// 성공 메시지
export const SUCCESS_MESSAGES = {
  recommendationComplete: '추천이 완료되었습니다!',
  answerSaved: '답변이 저장되었습니다.',
  shared: '공유가 완료되었습니다.',
} as const; 