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
  const { currentQuestion } = useAppStore();
  //데이터 핸들링은 이 함수들로 하는것같네
  const { setCurrentQuestion, addAnswer, setQuestionProgress } = useAppActions();
  
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

  // 현재 질문이 단계 마지막인지 확인
  const isStageEnd = () => {
    const currentIndex = QUESTION_ORDER.indexOf(currentQuestion || FIRST_QUESTION_ID);
    return [4, 9, 14, 19].includes(currentIndex);
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
      router.push('/results');
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
        
        if (newAnswers.includes(answer)) {
          // 이미 선택된 답변이면 제거
          return {
            ...prev,
            [questionId]: newAnswers.filter(a => a !== answer)
          };
        } else {
          // 새로운 답변이면 추가
          return {
            ...prev,
            [questionId]: [...newAnswers, answer]
          };
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

  // 현재 질문 데이터 설정
  useEffect(() => {
    if (currentQuestion) {
      const questionData = QUESTIONS[currentQuestion];
      setCurrentQuestionData(questionData);
      calculateProgress();
    }
  }, [currentQuestion, calculateProgress]);

  // 진행 상황 저장
  useEffect(() => {
    setQuestionProgress({
      currentStep,
      totalSteps,
      completedSteps
    });
  }, [currentStep, totalSteps, completedSteps, setQuestionProgress]);

  if (!currentQuestionData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">질문을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
             {/* 헤더 */}
       <header className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center py-6">
             <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                 <span className="text-xl">{currentQuestionData?.icon || '🍺'}</span>
               </div>
               <h1 className="text-2xl font-bold text-white">안주 추천</h1>
             </div>
             <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
               <span className="text-white font-semibold">
                 {currentStep} / {totalSteps}
               </span>
             </div>
           </div>
         </div>
       </header>

       {/* 진행 상황 바 */}
       <div className="bg-white shadow-md">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center space-x-2">
               <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
               <span className="text-sm font-semibold text-gray-700">진행 상황</span>
             </div>
             <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
               {Math.round((currentStep / totalSteps) * 100)}%
             </span>
           </div>
           <div className="relative">
             <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
               <div 
                 className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
                 style={{ width: `${(currentStep / totalSteps) * 100}%` }}
               ></div>
             </div>
             
             {/* 단계 마커 */}
             <div className="flex justify-between mt-4">
               {[5, 10, 15].map((stage) => (
                 <div key={stage} className="flex flex-col items-center">
                   <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                     completedSteps.includes(stage) 
                       ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg scale-110' 
                       : currentStep >= stage 
                       ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-md' 
                       : 'bg-gray-300'
                   }`}>
                     {completedSteps.includes(stage) && (
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     )}
                   </div>
                   <span className="text-xs font-medium text-gray-600 mt-2">{stage}</span>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>

             {/* 메인 콘텐츠 */}
       <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         {/* 질문 카드 */}
         <Card className="mb-8 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
           <CardHeader className="text-center pb-6">
             <div className="mb-4">
               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                 <span className="text-2xl">{currentQuestionData?.icon || '🍺'}</span>
               </div>
             </div>
             <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               {currentQuestionData.question}
             </CardTitle>
           </CardHeader>
           <CardContent className="px-8 pb-8">
             <div className="grid gap-4">
               {currentQuestionData.options?.map((option, index) => (
                 <Card
                   key={option.id}
                   className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 ${
                     currentQuestionData.type === 'multiple'
                       ? (selectedAnswers[currentQuestionData.id] || []).includes(String(option.value))
                         ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg scale-105'
                         : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                       : selectedAnswers[currentQuestionData.id] === String(option.value)
                       ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg scale-105'
                       : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                   }`}
                   onClick={() => handleAnswerSelect(currentQuestionData.id, String(option.value))}
                 >
                   <CardContent className="p-6">
                     <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-4">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                           currentQuestionData.type === 'multiple'
                             ? (selectedAnswers[currentQuestionData.id] || []).includes(String(option.value))
                               ? 'bg-blue-500 text-white'
                               : 'bg-gray-200 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                             : selectedAnswers[currentQuestionData.id] === String(option.value)
                             ? 'bg-blue-500 text-white'
                             : 'bg-gray-200 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                         }`}>
                           {String.fromCharCode(65 + index)} {/* A, B, C, D... */}
                         </div>
                         <span className="text-lg font-semibold text-gray-800">{option.text}</span>
                       </div>
                       <div className={`transition-all duration-300 ${
                         currentQuestionData.type === 'multiple'
                           ? (selectedAnswers[currentQuestionData.id] || []).includes(String(option.value))
                             ? 'opacity-100 scale-100'
                             : 'opacity-0 scale-75'
                           : selectedAnswers[currentQuestionData.id] === String(option.value)
                           ? 'opacity-100 scale-100'
                           : 'opacity-0 scale-75'
                       }`}>
                         {currentQuestionData.type === 'multiple' ? (
                           (selectedAnswers[currentQuestionData.id] || []).includes(String(option.value)) && (
                             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                               </svg>
                             </div>
                           )
                         ) : (
                           selectedAnswers[currentQuestionData.id] === String(option.value) && (
                             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
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
         <div className="flex flex-col items-center space-y-6">
           {/* 힌트 */}
           {!selectedAnswers[currentQuestionData.id] || 
            (currentQuestionData.type === 'multiple' && 
             (!selectedAnswers[currentQuestionData.id] || selectedAnswers[currentQuestionData.id].length === 0)) && (
             <div className="text-center">
               <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full border border-yellow-200">
                 <span className="text-yellow-600">💡</span>
                 <p className="text-yellow-700 text-sm font-medium">
                   {currentQuestionData.type === 'multiple' 
                     ? '위의 옵션 중 하나 이상을 선택해주세요' 
                     : '위의 옵션 중 하나를 선택해주세요'}
                 </p>
               </div>
             </div>
           )}

           {/* 버튼 */}
           <div className="flex justify-center">
             {isStageEnd() ? (
               <Button
                 onClick={handleConfirmAnswers}
                 disabled={
                   !selectedAnswers[currentQuestionData.id] || 
                   (currentQuestionData.type === 'multiple' && selectedAnswers[currentQuestionData.id].length === 0)
                 }
                 size="lg"
                 className="px-12 py-4 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
               >
                 <span className="mr-2">✅</span>
                 답변 확인하기
               </Button>
             ) : (
               <Button
                 onClick={goToNextQuestion}
                 disabled={
                   !selectedAnswers[currentQuestionData.id] || 
                   (currentQuestionData.type === 'multiple' && selectedAnswers[currentQuestionData.id].length === 0)
                 }
                 size="lg"
                 className="px-12 py-4 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
               >
                 <span className="mr-2">➡️</span>
                 다음 질문
               </Button>
             )}
           </div>

           {/* 진행 상황 표시 */}
           <div className="text-center">
             <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
               <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
               <span className="text-sm text-gray-600 font-medium">
                 {currentStep}번째 질문 중 {totalSteps}번째
               </span>
             </div>
           </div>
         </div>
      </main>
    </div>
  );
} 