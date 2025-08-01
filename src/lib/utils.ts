import { UserAnswers, SideDish, DrinkType, Preference, Restriction } from './types';

/**
 * 로컬 스토리지에서 데이터를 가져오는 함수
 */
export function getFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Storage get error:', error);
    return defaultValue;
  }
}

/**
 * 로컬 스토리지에 데이터를 저장하는 함수
 */
export function setToStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Storage set error:', error);
  }
}

/**
 * 로컬 스토리지에서 데이터를 삭제하는 함수
 */
export function removeFromStorage(key: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Storage remove error:', error);
  }
}

/**
 * 고유 ID를 생성하는 함수
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

/**
 * 현재 세션 ID를 가져오거나 생성하는 함수
 */
export function getSessionId(): string {
  const sessionId = getFromStorage('anju_session_id', '');
  if (!sessionId) {
    const newSessionId = generateId();
    setToStorage('anju_session_id', newSessionId);
    return newSessionId;
  }
  return sessionId;
}

/**
 * 사용자 답변을 기반으로 다음 질문을 결정하는 함수
 */
export function getNextQuestion(
  currentQuestionId: string,
  answers: UserAnswers,
  questionFlow: Record<string, any>
): string | null {
  const currentQuestion = questionFlow[currentQuestionId];
  
  if (!currentQuestion) return null;
  
  if (typeof currentQuestion.nextQuestion === 'function') {
    return currentQuestion.nextQuestion(answers);
  }
  
  return currentQuestion.nextQuestion || null;
}

/**
 * 안주 추천 점수를 계산하는 함수
 */
export function calculateRecommendationScore(
  sideDish: SideDish,
  drinkType: DrinkType,
  preferences: Preference[],
  restrictions: Restriction[]
): number {
  let score = 0;
  
  // 술 종류 호환성 체크
  if (sideDish.drinkCompatibility.includes(drinkType)) {
    score += 30;
  }
  
  // 선호도 매칭
  const preferenceMatches = preferences.filter(pref => 
    sideDish.preferences.includes(pref)
  ).length;
  score += preferenceMatches * 20;
  
  // 제한사항 체크 (제한사항이 있으면 점수 감점)
  const restrictionMatches = restrictions.filter(restriction => 
    sideDish.restrictions.includes(restriction)
  ).length;
  score -= restrictionMatches * 50;
  
  // 인기도 점수
  score += sideDish.popularity * 2;
  
  return Math.max(0, score);
}

/**
 * 안주 목록을 점수순으로 정렬하는 함수
 */
export function sortSideDishesByScore(
  sideDishes: SideDish[],
  drinkType: DrinkType,
  preferences: Preference[],
  restrictions: Restriction[]
): SideDish[] {
  return [...sideDishes].sort((a, b) => {
    const scoreA = calculateRecommendationScore(a, drinkType, preferences, restrictions);
    const scoreB = calculateRecommendationScore(b, drinkType, preferences, restrictions);
    return scoreB - scoreA;
  });
}

/**
 * 매운 정도를 텍스트로 변환하는 함수
 */
export function getSpicyLevelText(level: number): string {
  const levels = {
    0: '안매움',
    1: '약간매움',
    2: '매움',
    3: '매우매움'
  };
  return levels[level as keyof typeof levels] || '알 수 없음';
}

/**
 * 가격 범위를 텍스트로 변환하는 함수
 */
export function getPriceRangeText(min: number, max: number): string {
  if (min === max) {
    return `${min.toLocaleString()}원`;
  }
  return `${min.toLocaleString()}원 ~ ${max.toLocaleString()}원`;
}

/**
 * 카카오톡 공유 URL을 생성하는 함수
 */
export function generateKakaoShareUrl(
  drinkType: string,
  sideDishes: SideDish[]
): string {
  const text = `${drinkType}와 함께 즐기는 ${sideDishes.map(dish => dish.name).join(', ')}`;
  const url = encodeURIComponent(window.location.href);
  const encodedText = encodeURIComponent(text);
  
  return `https://story.kakao.com/share?url=${url}&text=${encodedText}`;
}

/**
 * 디바운스 함수
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * 쿠키를 설정하는 함수
 */
export function setCookie(name: string, value: string, days: number = 7): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

/**
 * 쿠키를 가져오는 함수
 */
export function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  
  return null;
}

/**
 * 클래스명을 조건부로 결합하는 함수
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 숫자를 한국어 형식으로 포맷하는 함수
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('ko-KR');
}

/**
 * 날짜를 한국어 형식으로 포맷하는 함수
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
} 