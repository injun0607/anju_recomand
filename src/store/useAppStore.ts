import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, UserAnswers, RecommendationResult, QuestionProgress } from '@/lib/types';
import { getFromStorage, setToStorage } from '@/lib/utils';

interface AppStore extends AppState {
  // 액션들
  setCurrentQuestion: (questionId: string | null) => void;
  addAnswer: (questionId: string, answer: string | string[] | number | boolean) => void;
  setAnswers: (answers: UserAnswers) => void;
  clearAnswers: () => void;
  setRecommendations: (recommendations: RecommendationResult[]) => void;
  addRecommendation: (recommendation: RecommendationResult) => void;
  clearRecommendations: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  setQuestionProgress: (progress: QuestionProgress) => void;
  reset: () => void;
  
  // 계산된 값들
  getQuestionProgress: () => QuestionProgress;
  getCurrentAnswers: () => UserAnswers;
  getRecommendations: () => RecommendationResult[];
}

const initialState: AppState = {
  currentQuestion: null,
  answers: {},
  recommendations: [],
  isLoading: false,
  error: null,
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      // 현재 질문 설정
      setCurrentQuestion: (questionId) => {
        set({ currentQuestion: questionId });
      },

      // 답변 추가
      addAnswer: (questionId: string, answer: string | string[] | number | boolean) => {
        set((state: AppState) => ({
          answers: {
            ...state.answers,
            [questionId]: answer,
          },
        }));
        
        // 로컬 스토리지에 저장
        const currentAnswers = get().answers;
        setToStorage('anju_user_answers', {
          ...currentAnswers,
          [questionId]: answer,
        });
      },

      // 답변 전체 설정
      setAnswers: (answers: UserAnswers) => {
        set({ answers });
        setToStorage('anju_user_answers', answers);
      },

      // 답변 초기화
      clearAnswers: () => {
        set({ answers: {} });
        setToStorage('anju_user_answers', {});
      },

      // 추천 결과 설정
      setRecommendations: (recommendations: RecommendationResult[]) => {
        set({ recommendations });
        setToStorage('anju_recommendations', recommendations);
      },

      // 추천 결과 추가
      addRecommendation: (recommendation: RecommendationResult) => {
        set((state: AppState) => ({
          recommendations: [...state.recommendations, recommendation],
        }));
        
        const currentRecommendations = get().recommendations;
        setToStorage('anju_recommendations', [...currentRecommendations, recommendation]);
      },

      // 추천 결과 초기화
      clearRecommendations: () => {
        set({ recommendations: [] });
        setToStorage('anju_recommendations', []);
      },

      // 로딩 상태 설정
      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },

      // 에러 설정
      setError: (error: string | null) => {
        set({ error });
      },

      // 에러 초기화
      clearError: () => {
        set({ error: null });
      },

      // 질문 진행 상태 설정
      setQuestionProgress: (progress: QuestionProgress) => {
        setToStorage('anju_question_progress', progress);
      },

      // 전체 초기화
      reset: () => {
        set(initialState);
        setToStorage('anju_user_answers', {});
        setToStorage('anju_recommendations', []);
        setToStorage('anju_question_progress', {
          currentStep: 0,
          totalSteps: 0,
          completedSteps: [],
        });
      },

      // 질문 진행 상태 가져오기
      getQuestionProgress: () => {
        return getFromStorage('anju_question_progress', {
          currentStep: 0,
          totalSteps: 0,
          completedSteps: [],
        });
      },

      // 현재 답변 가져오기
      getCurrentAnswers: () => {
        return get().answers;
      },

      // 추천 결과 가져오기
      getRecommendations: () => {
        return get().recommendations;
      },
    }),
    {
      name: 'anju-app-storage',
      partialize: (state: AppStore) => ({
        answers: state.answers,
        recommendations: state.recommendations,
      }),
    }
  )
);

// 선택자 함수들
export const useCurrentQuestion = () => useAppStore((state: AppStore) => state.currentQuestion);
export const useAnswers = () => useAppStore((state: AppStore) => state.answers);
export const useRecommendations = () => useAppStore((state: AppStore) => state.recommendations);
export const useIsLoading = () => useAppStore((state: AppStore) => state.isLoading);
export const useError = () => useAppStore((state: AppStore) => state.error);

// 액션 훅들
export const useAppActions = () => {
  const store = useAppStore();
  
  return {
    setCurrentQuestion: store.setCurrentQuestion,
    addAnswer: store.addAnswer,
    setAnswers: store.setAnswers,
    clearAnswers: store.clearAnswers,
    setRecommendations: store.setRecommendations,
    addRecommendation: store.addRecommendation,
    clearRecommendations: store.clearRecommendations,
    setLoading: store.setLoading,
    setError: store.setError,
    clearError: store.clearError,
    setQuestionProgress: store.setQuestionProgress,
    reset: store.reset,
  };
}; 