// 질문 타입
export type QuestionType = 'single' | 'multiple' | 'text' | 'boolean';

// 질문 옵션 인터페이스
export interface QuestionOption {
  id: string;
  text: string;
  value: string | number | boolean;
}

// 질문 플로우 인터페이스
export interface QuestionFlow {
  id: string;
  question: string;
  type: QuestionType;
  icon?: string;
  options?: QuestionOption[];
  nextQuestion?: string | ((answers: UserAnswers) => string);
  required?: boolean;
}

// 사용자 답변 인터페이스
export interface UserAnswers {
  [key: string]: string | string[] | number | boolean;
}

// 술 종류 타입
export type DrinkType = 'soju' | 'beer' | 'wine' | 'makgeolli' | 'whiskey' | 'cocktail';

// 맛 타입
export type Taste = 'spicy' | 'refreshing' | 'tangy' | 'creamy' | 'none';

// 분위기 타입
export type Mood = 'solo'| 'friends' | 'festival' | 'couple' | 'camping' ;

// 안주 카테고리
export type SideDishCategory = 'meat' | 'seafood' | 'vegetable' | 'soup' | 'noodle' | 'rice' | 'snack';

// 포만감 종류
export type Hunger = 'hungry' | 'soso' | 'little';

// 가격 종류
export type Price = 'low' | 'middle' | 'high' | 'premium';

// 제한사항 타입
export type Restriction = 'seafood' | 'intestines' | 'feet';

// 식감 타입
export type Texture = 'chewy' | 'soft' | 'crispy' | 'none';

// 조리 방법 타입
export type Cook = 'cook' | 'microwave' | 'none';

// 냄새 타입
export type Smell = 'normal' | 'sensitive' | 'none';

// 온도 타입
export type Temperature = 'warm' | 'cold' | 'none';

// 스타일 타입
export type Style = 'soup' |'stir-fried' | 'grill' | 'fried' | 'clean' | 'none';

// 느낌 타입
export type Feel = 'happy' | 'soso' | 'bad';

// 특별한 타입
export type Special = 'yes' | 'no' | 'middle';

// 옛날 타입
export type Retro = 'like' | 'soso' | 'none';

// 소셜 타입
export type Sns = 'like' | 'soso' | 'none';






// 안주 인터페이스
export interface SideDish {
  id: string;
  name: string;
  category: SideDishCategory;
  description: string;
  image?: string;
  tags:{
    drinkType: DrinkType[];
    taste: Taste[];
    mood: Mood[];
    hunger: Hunger[];
    price: Price[];
    restrictions: Restriction[];
    texture: Texture[];
    cook: Cook[];
    smell: Smell[];
    temperature: Temperature[];
    style: Style[];
    feel: Feel[];
    special: Special[];
    retro: Retro[];
    sns: Sns[];
  }
  
}

// 추천 결과 인터페이스
export interface RecommendationResult {
  sideDishes: SideDish[];
  drinkType: DrinkType;
  reasoning: string;
  confidence: number; // 0-1
}

// 추천 로직 인터페이스
export interface RecommendationLogic {
  drinkType: DrinkType;
  Taste: Taste[];
  restrictions: Restriction[];
  result: SideDish[];
}

// 사용자 세션 인터페이스
export interface UserSession {
  id: string;
  answers: UserAnswers;
  recommendations: RecommendationResult[];
  createdAt: Date;
  updatedAt: Date;
}

// 앱 상태 인터페이스
export interface AppState {
  currentQuestion: string | null;
  answers: UserAnswers;
  recommendations: RecommendationResult[];
  isLoading: boolean;
  error: string | null;
}

// 질문 진행 상태
export interface QuestionProgress {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
} 