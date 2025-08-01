# 🍺 안주 추천 사이트 (Anju Recommendation)

## 📋 프로젝트 개요

안주를 정하기 어려운 사람들을 위한 자동 안주 추천 웹사이트입니다. 심리검사 형태의 질문을 통해 사용자의 현재 상황과 선호도를 파악하여 최적의 안주를 추천해드립니다.

## 🎯 주요 기능

### 1. 🧠 지능형 안주 추천 시스템
- **단계별 질문 기반 추천**: 사용자의 상황과 선호도에 맞는 맞춤형 안주 추천
- **술 종류별 최적화**: 소주, 맥주, 와인, 막걸리 등 술 종류별 특화된 안주 추천
- **알레르기 및 기호 고려**: 못 먹는 음식 종류를 고려한 안전한 추천

### 2. 📱 사용자 경험 (UX)
- **직관적인 질문 플로우**: 단계별 진행 상황 표시
- **실시간 추천**: 질문 완료 즉시 결과 제공
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원

### 3. 🔗 소셜 기능
- **카카오톡 공유**: 추천 결과를 친구들과 공유
- **결과 저장**: 사용자의 추천 히스토리 관리

### 4. 🛠️ 관리자 기능 (추후 개발)
- **질문 흐름 커스터마이징**: 관리자가 질문과 추천 로직을 직접 수정
- **안주 데이터베이스 관리**: 새로운 안주 추가 및 기존 안주 정보 수정

## 🏗️ 기술 스택

### Frontend
- **Next.js 14**: React 기반 풀스택 프레임워크
- **TypeScript**: 타입 안정성 및 개발 생산성 향상
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **Framer Motion**: 부드러운 애니메이션 효과
- **React Hook Form**: 폼 상태 관리
- **Zustand**: 상태 관리

### Backend (추후 확장)
- **Next.js API Routes**: 서버리스 API
- **Prisma**: 데이터베이스 ORM
- **PostgreSQL**: 관계형 데이터베이스
- **Redis**: 캐싱 및 세션 관리

## 📁 프로젝트 구조

```
anju_recommand/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── (routes)/          # 페이지 라우트
│   │   ├── api/               # API 엔드포인트
│   │   ├── globals.css        # 전역 스타일
│   │   └── layout.tsx         # 루트 레이아웃
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   ├── ui/               # 기본 UI 컴포넌트
│   │   ├── forms/            # 폼 관련 컴포넌트
│   │   └── features/         # 기능별 컴포넌트
│   ├── lib/                  # 유틸리티 함수
│   │   ├── utils.ts          # 공통 유틸리티
│   │   ├── constants.ts      # 상수 정의
│   │   └── types.ts          # TypeScript 타입 정의
│   ├── hooks/                # 커스텀 훅
│   ├── store/                # 상태 관리
│   └── data/                 # 정적 데이터
│       ├── questions.ts      # 질문 데이터
│       ├── drinks.ts         # 술 종류 데이터
│       └── side-dishes.ts    # 안주 데이터
├── public/                   # 정적 파일
├── prisma/                   # 데이터베이스 스키마 (추후)
├── contracts/                # 스마트 컨트랙트 (추후)
├── docs/                     # 문서
└── tests/                    # 테스트 파일
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone [repository-url]
cd anju_recommand

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 확인
open http://localhost:3000
```

### 환경 변수 설정

```bash
# .env.local 파일 생성
cp .env.example .env.local

# 필요한 환경 변수 설정
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your_database_url
KAKAO_APP_KEY=your_kakao_app_key
```

## 📊 데이터 구조

### 질문 플로우 예시
```typescript
interface QuestionFlow {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'text';
  options?: QuestionOption[];
  nextQuestion?: string | ((answers: any) => string);
}

interface QuestionOption {
  id: string;
  text: string;
  value: any;
}
```

### 안주 추천 로직
```typescript
interface RecommendationLogic {
  drinkType: DrinkType;
  preferences: Preference[];
  restrictions: Restriction[];
  result: SideDish[];
}
```

## 🧪 테스트

```bash
# 단위 테스트 실행
npm run test

# E2E 테스트 실행
npm run test:e2e

# 테스트 커버리지 확인
npm run test:coverage
```

## 📦 배포

### Vercel 배포 (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

### Docker 배포
```bash
# Docker 이미지 빌드
docker build -t anju-recommand .

# 컨테이너 실행
docker run -p 3000:3000 anju-recommand
```

## 🔄 개발 로드맵

### Phase 1: MVP (현재)
- [x] 프로젝트 초기 설정
- [ ] 기본 질문 플로우 구현
- [ ] 안주 추천 로직 구현
- [ ] 반응형 UI 구현

### Phase 2: 기능 확장
- [ ] 카카오톡 공유 기능
- [ ] 사용자 히스토리 저장
- [ ] 데이터베이스 연동
- [ ] 관리자 패널

### Phase 3: 고급 기능
- [ ] 블록체인 연동
- [ ] AI 기반 추천 시스템
- [ ] 커뮤니티 기능
- [ ] 모바일 앱

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트 관련 문의사항이 있으시면 이슈를 생성해주세요.

---

**🍺 좋은 안주로 좋은 시간 보내세요!**
