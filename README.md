<!-- 대표 화면과 데모 영상: GitHub에서 재생 가능한 링크형 임베드 -->
<a href="https://www.youtube.com/watch?v=EjaPMB0wIrY" target="_blank" rel="noopener noreferrer">
  <img src=".github/assets/uscheck_mainpage.png" alt="us-check Client 데모 화면" width="100%" />
</a>

<p align="center">
  <a href="https://www.youtube.com/watch?v=EjaPMB0wIrY" target="_blank" rel="noopener noreferrer">▶ YouTube 데모 영상 보기</a>
</p>

# us-check Client

> AI 추천과 파친코 방식의 선택 경험을 결합한 의성군 여행 코스 탐색 웹 애플리케이션입니다.

여행 취향을 자연어로 입력하면 추천 결과를 바탕으로 관광지·음식점·숙박시설을 골라 여행 코스를 구성합니다. 선택한 코스는 지도에서 확인하고, 여행일과 QR 확인 화면까지 이어서 관리할 수 있습니다.

## ✨ 주요 기능

| 기능 | 설명 |
| --- | --- |
| AI 여행 코스 요청 | 사용자가 입력한 여행 취향을 API로 전송해 추천 장소 데이터를 받아옵니다. |
| 파친코식 코스 선택 | 관광지, 음식점, 숙박시설별 후보를 슬롯 방식으로 추천하거나 직접 선택합니다. |
| 지도 기반 코스 확인 | 선택한 장소를 네이버 지도 마커로 표시하고, 장소별 상세 위치를 확인합니다. |
| 여행일·인원·금액 설정 | 여행일을 지정하고 음식점·숙박시설의 수량을 조정해 총 금액을 확인합니다. |
| QR 예약 확인 | 완료 화면에서 QR 코드를 확인하고 선택한 코스와 여행 정보를 다시 볼 수 있습니다. |
| 사업자 정보 등록 | 가게 정보와 이미지를 입력해 사업자 등록 API로 전송합니다. |

## 🧭 설계 방향

- **카테고리 기반 코스 구성:** API 추천 결과를 관광지·음식점·숙박시설로 분류해 각 카테고리에서 한 곳씩 선택합니다.
- **브라우저 상태 전달:** 검색어, 추천 결과, 선택 코스, 여행일, QR 정보를 `localStorage`에 저장해 화면 전환 사이에서 사용합니다.
- **환경변수로 외부 서비스 연결:** 백엔드 API 기본 URL과 네이버 지도 클라이언트 ID를 `REACT_APP_` 환경변수로 분리합니다.

## 🛠 기술 스택

| Category | 기술 |
| --- | --- |
| Frontend | React 18.3.1, React DOM 18.3.1 |
| Routing | React Router DOM 6.30.1 |
| UI & Motion | styled-components 6.1.19, Framer Motion 12.19.2, React Icons 5.5.0 |
| Map & Date | NAVER Maps JavaScript API, React Datepicker 8.4.0 |
| Networking & State | Fetch API, Axios 1.10.0, Web Storage (`localStorage`) |
| Testing & Build | React Scripts 5.0.1, Testing Library |

## 🏗️ 시스템 아키텍처

```mermaid
flowchart LR
    User["사용자"] --> App["React 웹 애플리케이션\nReact Router"]

    subgraph Browser["브라우저"]
        App <--> Storage[("localStorage\n검색어 · 추천 결과 · 선택 코스 · 여행일 · QR 정보")]
    end

    App -->|"POST /api/query/\n여행 추천 요청"| API["백엔드 API 서버\nREACT_APP_API_URL"]
    App -->|"GET /api/qr/\nQR 이미지 요청"| API
    App -->|"POST /api/business/\n사업자 정보 등록"| API
    App -->|"Maps SDK 동적 로드\nREACT_APP_NAVER_CLIENT_ID"| Naver["NAVER Maps JavaScript API"]

    classDef client fill:#e0f2fe,stroke:#0284c7,color:#0c4a6e
    classDef storage fill:#fef3c7,stroke:#d97706,color:#78350f
    classDef external fill:#dcfce7,stroke:#16a34a,color:#14532d
    class App client
    class Storage storage
    class API,Naver external
```

클라이언트는 화면 전환에 필요한 상태를 브라우저에 보관하고, 추천·QR·사업자 등록 요청만 `REACT_APP_API_URL`의 API 서버로 전송합니다. 지도 SDK는 네이버 지도 API에서 브라우저로 직접 불러옵니다.

## 📁 프로젝트 구조

```text
client/
├── public/                 # 정적 이미지와 HTML 템플릿
├── src/
│   ├── components/         # 재사용 UI 컴포넌트
│   ├── pages/              # 화면별 페이지와 지도·QR 컴포넌트
│   ├── styles/             # styled-components 스타일 정의
│   ├── App.js              # 라우팅 구성
│   └── index.js            # 애플리케이션 진입점
├── package.json            # 의존성 및 실행 스크립트
└── README.md
```

## 🚀 시작하기

### 📋 사전 요구사항

- Node.js 16.0.0 이상
- npm 또는 yarn 패키지 매니저
- 네이버 지도 API 키
- 백엔드 API 서버 (환경변수 설정 필요)

### ⚙️ 환경 설정

1. **저장소 클론**

   ```bash
   git clone [repository-url]
   cd client
   ```

2. **의존성 설치**

   ```bash
   npm install
   # 또는
   yarn install
   ```

3. **환경변수 설정**

   프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

   ```env
   REACT_APP_NAVER_CLIENT_ID=your_naver_map_client_id
   REACT_APP_API_URL=your_backend_api_url
   PUBLIC_URL=/
   ```

4. **API 키 발급**
   - [네이버 클라우드 플랫폼](https://www.ncloud.com/)에서 Maps API 키 발급

### 🏃‍♂️ 실행 방법

**개발 서버 실행**

```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속

**프로덕션 빌드**

```bash
npm run build
```

**테스트 실행**

```bash
npm test
```

### 🔧 주요 설정 파일

- `package.json` - 프로젝트 의존성 및 스크립트
- `public/index.html` - HTML 템플릿 (Kakao Maps SDK 포함)
- `src/App.js` - 라우팅 설정
- `src/styles/GlobalStyle.js` - 전역 스타일 설정

## 📱 사용 방법

### 1. 여행 계획 시작

- 메인페이지에서 원하는 여행 스타일을 자연어로 입력
- "가족과 함께하는 힐링 여행", "맛집 투어" 등

### 2. AI 추천 확인

- 로딩 페이지에서 AI가 분석한 추천 결과 대기
- 파친코 페이지에서 재미있게 여행지 선택

### 3. 상세 계획 수립

- 경로 페이지에서 선택한 장소들의 위치 확인
- 여행 날짜 설정 및 숙박/식당 수량 조정

### 4. 결제 및 예약

- 카카오페이/토스페이로 간편 결제
- QR 코드 발급으로 현장 이용

## 🎯 주요 기능 흐름

```
메인페이지 → AI 분석 → 파친코 선택 → 경로 확인 → 결제 → QR 발급
    ↓           ↓          ↓          ↓        ↓       ↓
  검색 입력   로딩 화면   게임 방식   지도 보기   간편결제  현장 이용
```

## 🏪 사업자 기능

### 가맹점 등록

- `/addstore` 경로에서 사업자 등록 가능
- 사업자번호, 위치정보, 가격 정보 등록
- 의성군 관광 네트워크 참여

## 🛡️ 보안 및 개인정보

- 구글 소셜 로그인을 통한 안전한 인증
- 결제 정보는 외부 결제 서비스(카카오페이/토스페이)를 통해 처리
- 개인정보는 여행 서비스 제공 목적으로만 사용
