'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { QUESTIONS, FIRST_QUESTION_ID, QUESTION_ORDER } from '@/data/questions';
import { useAppStore, useAppActions } from '@/store/useAppStore';
import { QuestionFlow } from '@/lib/types';

export default function QuestionsPage() {
  const router = useRouter();
  //여기선 상태만 가져오고
  const { currentQuestion, answers } = useAppStore();
  //데이터 핸들링은 이 함수들로 하는것같네
  const { setCurrentQuestion, addAnswer, goToPreviousQuestion, canGoBack, reset } = useAppActions();

  const [currentQuestionData, setCurrentQuestionData] = useState<QuestionFlow | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | string[]>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // 진행 상황 계산
  const calculateProgress = useCallback(() => {
    const currentIndex = QUESTION_ORDER.indexOf(currentQuestion || FIRST_QUESTION_ID);
    const totalQuestions = QUESTION_ORDER.length;

    setCurrentStep(currentIndex + 1);
    setTotalSteps(totalQuestions);

    // 완료된 단계 계산 (5, 10, 15, 20 단위)
    const completed = [];
    if (currentIndex >= 4) completed.push(5);
    if (currentIndex >= 9) completed.push(10);
    if (currentIndex >= 14) completed.push(15);
    if (currentIndex >= 19) completed.push(20);
    setCompletedSteps(completed);
  }, [currentQuestion]);

  const goHome = () => {
    // 홈으로 돌아갈 때 상태 초기화
    reset();
    router.push('/anjus');
  }

  // 현재 질문이 단계 마지막인지 확인
  const isStageEnd = () => {
    const currentIndex = QUESTION_ORDER.indexOf(currentQuestion || FIRST_QUESTION_ID);
    return [4, 9, 14, 19].includes(currentIndex);
  };

  // 중간 결과 확인 가능한 질문인지 확인 (5번째 질문)
  const canShowIntermediateResults = () => {
    const currentIndex = QUESTION_ORDER.indexOf(currentQuestion || FIRST_QUESTION_ID);
    return currentIndex === 4 || currentIndex === 9; // 5번째 질문 (인덱스 4)
  };

  // 중간 결과 확인
  const handleShowIntermediateResults = () => {
    if (!currentQuestion) return;

    // 현재 답변 저장
    if (selectedAnswers[currentQuestion]) {
      addAnswer(currentQuestion, selectedAnswers[currentQuestion]);
    }

    // 중간 결과 페이지로 이동 (쿼리 파라미터로 표시)
    router.push('/anjus/results?intermediate=true');
  };

  // 다음 질문으로 이동
  const goToNextQuestion = () => {
    if (!currentQuestion) return;

    const question = QUESTIONS[currentQuestion];
    if (!question) return;

    // 답변 저장
    if (selectedAnswers[currentQuestion]) {
      addAnswer(currentQuestion, selectedAnswers[currentQuestion]);
    }

    // 다음 질문 결정 (순서대로)
    const currentIndex = QUESTION_ORDER.indexOf(currentQuestion);
    let nextQuestionId: string | null = null;

    if (currentIndex !== -1 && currentIndex < QUESTION_ORDER.length - 1) {
      nextQuestionId = QUESTION_ORDER[currentIndex + 1];
    }

    if (nextQuestionId) {
      setCurrentQuestion(nextQuestionId);
      setSelectedAnswers({});
    } else {
      // 마지막 질문이면 결과 페이지로 이동
      router.push('/anjus/results');
    }
  };

  // 이전 질문으로 이동
  const handleGoBack = () => {
    if (!canGoBack()) return;

    // 현재 답변 저장
    if (selectedAnswers[currentQuestion!]) {
      addAnswer(currentQuestion!, selectedAnswers[currentQuestion!]);
    }

    // 이전 질문으로 이동
    goToPreviousQuestion();

    // 이전 질문의 답변을 selectedAnswers에 복원
    const previousQuestionId = QUESTION_ORDER[QUESTION_ORDER.indexOf(currentQuestion!) - 1];
    if (previousQuestionId && answers[previousQuestionId]) {
      const previousAnswer = answers[previousQuestionId];
      setSelectedAnswers({
        [previousQuestionId]: Array.isArray(previousAnswer) ? previousAnswer : String(previousAnswer)
      });
    } else {
      setSelectedAnswers({});
    }
  };

  // 답변 선택
  const handleAnswerSelect = (questionId: string, answer: string) => {
    const question = QUESTIONS[questionId];

    if (question?.type === 'multiple') {
      // 다중 선택인 경우
      setSelectedAnswers(prev => {
        const currentAnswers = prev[questionId] || [];
        const newAnswers = Array.isArray(currentAnswers) ? [...currentAnswers] : [];

        // "다 좋아(none)" 옵션을 선택한 경우
        if (answer === 'none') {
          if (newAnswers.includes('none')) {
            // 이미 선택되어 있으면 해제
            return {
              ...prev,
              [questionId]: newAnswers.filter(a => a !== 'none')
            };
          } else {
            // 선택하면 다른 모든 옵션 해제하고 "다 좋아"만 선택
            return {
              ...prev,
              [questionId]: ['none']
            };
          }
        } else {
          // 다른 옵션을 선택한 경우
          if (newAnswers.includes(answer)) {
            // 이미 선택된 답변이면 제거
            const filteredAnswers = newAnswers.filter(a => a !== answer);
            return {
              ...prev,
              [questionId]: filteredAnswers
            };
          } else {
            // 새로운 답변이면 추가 (단, "다 좋아" 옵션은 제거)
            const filteredAnswers = newAnswers.filter(a => a !== 'none');
            return {
              ...prev,
              [questionId]: [...filteredAnswers, answer]
            };
          }
        }
      });
    } else {
      // 단일 선택인 경우
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: answer
      }));
    }
  };

  // 답변 확인 (단계 마지막에서)
  const handleConfirmAnswers = () => {
    goToNextQuestion();
  };

  // 초기화
  useEffect(() => {
    if (!currentQuestion) {
      setCurrentQuestion(FIRST_QUESTION_ID);
    }
  }, [currentQuestion, setCurrentQuestion]);

  // 현재 질문 데이터 설정 및 이전 답변 복원
  useEffect(() => {
    if (currentQuestion) {
      const questionData = QUESTIONS[currentQuestion];
      setCurrentQuestionData(questionData);
      calculateProgress();

      // 현재 질문의 이전 답변을 복원
      if (answers[currentQuestion]) {
        const currentAnswer = answers[currentQuestion];
        setSelectedAnswers({
          [currentQuestion]: Array.isArray(currentAnswer) ? currentAnswer : String(currentAnswer)
        });
      } else {
        setSelectedAnswers({});
      }
    }
  }, [currentQuestion, calculateProgress, answers]);

  // 진행 상황은 메모리에서만 관리하므로 별도 저장 불필요



  if (!currentQuestionData) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6363] mx-auto mb-4"></div>
          <p className="text-[#888888]">질문을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-[#333333] cursor-pointer" onClick={goHome}>안주 추천</h1>
            </div>
          </div>
        </div>
      </header>

      {/* 진행 상황 바 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-[#FF6363] h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 질문 카드 */}
        <Card className="mb-8 bg-white border-0 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-2xl">
          <CardHeader className="text-center pb-6">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center mb-4 font-bold text-[#FF6363]">
                <span className="text-2xl">{currentStep} / {totalSteps}</span>
              </div>
            </div>
            <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#333333]">
              {currentQuestionData.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
            <div className="grid gap-2 sm:gap-4">
              {currentQuestionData.options?.map((option, index) => (
                <Card
                  key={option.id}
                  className={`group cursor-pointer transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-2 rounded-2xl ${currentQuestionData.type === 'multiple'
                      ? (selectedAnswers[currentQuestionData.id] || []).includes(String(option.value))
                        ? 'border-[#FF6363] bg-[#FF6363]/5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] scale-[1.03]'
                        : 'border-gray-200 hover:border-[#FF6363]/50 bg-white hover:bg-[#FF6363]/2'
                      : selectedAnswers[currentQuestionData.id] === String(option.value)
                        ? 'border-[#FF6363] bg-[#FF6363]/5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] scale-[1.03]'
                        : 'border-gray-200 hover:border-[#FF6363]/50 bg-white hover:bg-[#FF6363]/2'
                    }`}
                  onClick={() => handleAnswerSelect(currentQuestionData.id, String(option.value))}
                >
                  <CardContent className="p-3 sm:p-4 lg:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${currentQuestionData.type === 'multiple'
                            ? (selectedAnswers[currentQuestionData.id] || []).includes(String(option.value))
                              ? 'bg-[#FF6363] text-white'
                              : 'bg-gray-200 text-[#888888] group-hover:bg-[#FF6363]/20 group-hover:text-[#FF6363]'
                            : selectedAnswers[currentQuestionData.id] === String(option.value)
                              ? 'bg-[#FF6363] text-white'
                              : 'bg-gray-200 text-[#888888] group-hover:bg-[#FF6363]/20 group-hover:text-[#FF6363]'
                          }`}>
                          {String.fromCharCode(65 + index)} {/* A, B, C, D... */}
                        </div>
                        <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#333333]">{option.text}</span>
                      </div>
                      <div className={`transition-all duration-300 ${currentQuestionData.type === 'multiple'
                          ? (selectedAnswers[currentQuestionData.id] || []).includes(String(option.value))
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-75'
                          : selectedAnswers[currentQuestionData.id] === String(option.value)
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-75'
                        }`}>
                        {currentQuestionData.type === 'multiple' ? (
                          (selectedAnswers[currentQuestionData.id] || []).includes(String(option.value)) && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF6363] rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )
                        ) : (
                          selectedAnswers[currentQuestionData.id] === String(option.value) && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF6363] rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 버튼 영역 */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          {/* 힌트 */}
          {!selectedAnswers[currentQuestionData.id] ||
            (currentQuestionData.type === 'multiple' &&
              (!selectedAnswers[currentQuestionData.id] || selectedAnswers[currentQuestionData.id].length === 0)) && (
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-[#7AC8A4]/10 px-4 py-2 rounded-full border border-[#7AC8A4]/20">
                  <span className="text-[#7AC8A4]">💡</span>
                  <p className="text-[#7AC8A4] text-xs sm:text-sm font-medium">
                    {currentQuestionData.type === 'multiple'
                      ? '위의 옵션 중 하나 이상을 선택해주세요'
                      : '위의 옵션 중 하나를 선택해주세요'}
                  </p>
                </div>
              </div>
            )}

          {/* 버튼들 - 같은 행에 배치 */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 items-center py-2 sm:py-4 gap-4 sm:gap-0">
            {/* 뒤로가기 버튼 - 왼쪽 (PC에서만 표시) */}
            <div className="hidden sm:block text-left">
              {canGoBack() && (
                <Button
                  onClick={handleGoBack}
                  variant="outline"
                  size="lg"
                  className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                >
                  이전 질문
                </Button>
              )}
            </div>

            {/* 메인 버튼들 - 중앙 */}
            <div className="flex justify-center">
              {/* 5번째 질문에서 중간 결과 확인 옵션 */}
              {canShowIntermediateResults() ? (
                <div className="flex flex-col space-y-2 sm:space-y-4 w-full max-w-md">
                  <Button
                    onClick={goToNextQuestion}
                    disabled={
                      !selectedAnswers[currentQuestionData.id] ||
                      (currentQuestionData.type === 'multiple' && selectedAnswers[currentQuestionData.id].length === 0)
                    }
                    variant="primary"
                    size="lg"
                    className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold transform hover:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg"
                  >
                    계속하기
                  </Button>
                  <Button
                    onClick={handleShowIntermediateResults}
                    disabled={
                      !selectedAnswers[currentQuestionData.id] ||
                      (currentQuestionData.type === 'multiple' && selectedAnswers[currentQuestionData.id].length === 0)
                    }
                    size="lg"
                    className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold transform hover:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg"
                    variant="secondary"
                  >
                    지금 바로 결과 확인하기
                  </Button>

                  {/* 모바일 전용 뒤로가기 버튼 */}
                  <div className="block sm:hidden">
                    {canGoBack() && (
                      <Button
                        onClick={handleGoBack}
                        variant="outline"
                        size="lg"
                        className="w-full px-4 py-2 text-sm font-bold border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                      >
                        이전 질문
                      </Button>
                    )}
                  </div>
                </div>
              ) : isStageEnd() ? (
                <div className="flex flex-col space-y-2 w-full max-w-md">
                  <Button
                    onClick={handleConfirmAnswers}
                    disabled={
                      !selectedAnswers[currentQuestionData.id] ||
                      (currentQuestionData.type === 'multiple' && selectedAnswers[currentQuestionData.id].length === 0)
                    }
                    size="lg"
                    className="px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold transform hover:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg"
                    variant="secondary"
                  >
                    답변 확인하기
                  </Button>

                  {/* 모바일 전용 뒤로가기 버튼 */}
                  <div className="block sm:hidden">
                    {canGoBack() && (
                      <Button
                        onClick={handleGoBack}
                        variant="outline"
                        size="lg"
                        className="w-full px-4 py-2 text-sm font-bold border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                      >
                        이전 질문
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col xs:space-y-2 w-full max-w-md">                  
                  <Button
                    onClick={goToNextQuestion}
                    disabled={
                      !selectedAnswers[currentQuestionData.id] ||
                      (currentQuestionData.type === 'multiple' && selectedAnswers[currentQuestionData.id].length === 0)
                    }
                    variant="primary"
                    size="lg"
                    className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold transform hover:scale-[0.98] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-lg"
                  >
                    다음 질문
                  </Button>

                  {/* 모바일 전용 뒤로가기 버튼 */}
                  <div className="block sm:hidden">
                    {canGoBack() && (
                      <Button
                        onClick={handleGoBack}
                        variant="outline"
                        size="lg"
                        className="w-full px-4 py-2 text-sm font-bold border-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                      >
                        이전 질문
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="hidden sm:block"></div>
          </div>
        </div>
      </main>
    </div>
  );
} 