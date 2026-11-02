# JK Portfolio

React · TypeScript · Tailwind CSS 기반 개발자 포트폴리오입니다. 메인, 일정, 이력서 화면과 A4 PDF 출력을 제공합니다.

## 실행

Node.js 24.15 이상과 npm을 사용합니다. `.nvmrc`는 Node 24를 지정합니다.

```sh
npm ci
npm run dev
```

```sh
npm run check        # 포맷 → ESLint → 테스트 → 타입 검사 및 프로덕션 빌드
npm run format       # Prettier 및 Tailwind 클래스 정렬
npm run test:watch   # 테스트 감시 모드
npm run preview     # build 폴더의 프로덕션 결과 확인
```

패키지와 버전은 `package.json`, 정확한 설치 결과는 `package-lock.json`에서 관리합니다. 중복 잠금 파일인 `yarn.lock`은 제거했습니다.

## 내용 수정

화면 컴포넌트에 경력 내용을 직접 작성하지 않습니다. 아래 데이터만 수정하면 해당 화면에 반영됩니다.

| 수정할 내용                        | 파일                    | 반영 위치                       |
| ---------------------------------- | ----------------------- | ------------------------------- |
| 이름, 연락처, 소개, 경력 시작 연도 | `src/data/portfolio.ts` | 메인 소개, 이력서, 출력         |
| 프로젝트                           | `src/data/projects.ts`  | 메인 슬라이드, 타임라인, 이력서 |
| 학력, 회사 경력                    | `src/data/resume.ts`    | 이력서                          |
| 기술, 취미, 아이콘                 | `src/data/skills.ts`    | 메인 기술, 이력서               |
| 일정                               | `src/data/events.ts`    | 달력                            |

### 프로젝트 추가·수정·삭제

`projects.ts`의 배열에 항목을 추가하거나 삭제합니다. 배열 순서가 표시 순서이며, `id`는 다른 항목과 겹치지 않는 고정 식별자를 사용합니다.

```ts
{
  id: 'new-project',
  title: '프로젝트 이름',
  period: { start: '2026.11', end: '현재' },
  subtitle: '프로젝트 부가 설명',
  skills: ['React', 'TypeScript', 'Tailwind CSS'],
  highlights: ['이력서에 표시할 업무 내용'],
  details: ['EXPERIENCE와 TIMELINE에 동일하게 표시할 상세 내용'],
  featured: true,
  tone: 'slate',
}
```

- `featured: false`이면 슬라이드에서만 제외됩니다. 타임라인과 이력서는 전체 프로젝트를 표시합니다.
- `tone`은 `gold`, `slate`, `green`, `rose`, `blue` 중 하나입니다.
- `skills`와 기간은 화면들이 함께 사용합니다. 기존 화면마다 달랐던 기간은 이력서에 있던 값을 기준으로 통합했습니다.
- EXPERIENCE와 TIMELINE은 `ProjectContent.tsx`를 함께 사용해 제목, 기간, 부가 설명, 기술, 상세 업무가 동일합니다. 프로젝트 내용은 `projects.ts` 한 곳에서 수정합니다.
- 소개의 `{previousYears}`는 경력 시작 연도를 기준으로 계산됩니다. `<br>`, `<h3>` 같은 HTML 문자열은 넣지 않고 문단·업무를 배열 항목으로 작성합니다.
- 신규 이미지는 `src/images`에 추가하고 데이터 파일에서 import합니다.

### 종일 일정 기간

`events.ts`의 날짜는 `YYYY-MM-DD` 형식이며 종일 일정은 `allDay: true`로 지정합니다. FullCalendar의 `end`는 종료일을 포함하지 않습니다. 예를 들어 2026.02.11부터 2027.02.28까지 표시하려면 `start: '2026-02-11'`, `end: '2027-03-01'`을 사용합니다. [FullCalendar 날짜 규칙](https://fullcalendar.io/docs/event-parsing)

## 구조

```text
src/
  index.html              # 개발·빌드용 HTML 원본
  main.tsx                # React createRoot 및 BrowserRouter
  App.tsx                 # 라우트와 공통 메뉴
  page/                   # 메인, 달력, 이력서, 출력 확인 화면
  components/
    main/                 # 소개, 기술, 프로젝트, 타임라인
    profile/              # 연락처, 아이콘 목록, 공통 이력 목록
    CalendarToolbar.tsx   # 반응형 달력 조작부
    FloatingNavigation.tsx
    SkillTags.tsx
  data/                   # 화면에서 공유하는 콘텐츠
  types/portfolio.ts      # 콘텐츠 타입
  utile/                  # cn, 경력 연차 계산
  styles/
    app.css               # Tailwind 테마, 전역 스타일, Swiper 연동
    print.css             # A4 인쇄 전용 CSS
scripts/
  publish-build-to-pages.ts
```

모바일에서는 메인 섹션과 이력서를 한 열로 표시하며, 달력 조작부는 줄바꿈됩니다. PDF 출력은 화면 너비와 관계없이 A4 레이아웃을 사용합니다. 메뉴는 키보드, Escape, 바깥 클릭을 지원합니다.

### 클래스 작성

`src/utile/cn.ts`가 `clsx`와 `extendTailwindMerge`를 조합합니다. 공통 테마 색상도 병합 설정에 등록되어 있습니다. 긴 클래스는 기능별로 나누고, 조건부 클래스는 문자열 보간 대신 `cn()`으로 합칩니다.

```tsx
className={cn(
  'flex min-h-11 items-center gap-3 rounded-full px-4 py-3',
  'text-sm font-medium shadow-lg',
  active ? 'bg-gold text-black' : 'bg-white text-neutral-800',
)}
```

Prettier가 `cn()` 안의 Tailwind 클래스도 정렬합니다. 화면 스타일은 Tailwind로 작성하며, 별도 CSS는 전역 애니메이션, 외부 컴포넌트 연동, 인쇄처럼 필요한 경우에 사용합니다. Sass는 설치하거나 사용하지 않습니다.

## 빌드와 배포

```sh
npm run build
```

1. 전체 TypeScript 소스·설정·스크립트의 타입을 검사합니다.
2. Vite가 `src/index.html`을 기준으로 `build`에 빌드합니다.
3. 배포 스크립트가 Vite manifest와 파일 존재를 검사합니다.
4. 루트의 `index.html`, `404.html`, `static`, manifest, 아이콘을 갱신합니다.

루트의 `index.html`과 `static`은 GitHub Pages용 **자동 생성 결과**입니다. 직접 수정하지 않습니다. 브라우저에 배포하는 JavaScript만 빌드 과정에서 생성되며, 관리하는 앱·설정·배포 스크립트는 모두 `.ts`·`.tsx`입니다. HTML 원본을 `src`에 두므로 빌드를 반복해도 배포 결과가 소스 HTML을 덮어쓰지 않습니다.

기존 `/`, `/about`, `/calender`, `/profile`, `/test` 주소를 유지하며 `/calendar`도 지원합니다. 루트 `404.html`은 동일한 SPA를 로드해 직접 진입한 주소를 처리합니다. 기존 `?p=` 형식의 링크도 유지합니다. Firebase Hosting은 기존과 같이 `build`를 사용합니다. 빌드 명령은 원격 배포를 실행하지 않습니다.

## 마이그레이션 메모

- React 19.3.1, Vite 8, Tailwind CSS 4, React Router 8, FullCalendar 7, Swiper 14로 전환했습니다.
- TypeScript는 현재 `typescript-eslint`가 지원하는 6.0.3을 사용합니다. TypeScript 7은 해당 파서가 공식 지원한 뒤 함께 올립니다.
- Create React App, Sass, Material UI/Emotion, 외부 타임라인 라이브러리를 제거했습니다. 아이콘은 Lucide를 사용합니다.
- DOM에 HTML 문자열을 삽입하던 이력서 내용을 타입이 있는 텍스트 데이터로 전환했습니다.
- 기존 방문자 배지는 브라우저에서 도메인 이름 확인에 실패해 깨진 이미지를 표시하므로 제거했습니다.

공식 참고: [React 버전](https://react.dev/versions), [Tailwind Vite 설치](https://tailwindcss.com/docs/installation/using-vite), [Vite 설정](https://vite.dev/config/shared-options), [FullCalendar React](https://fullcalendar.io/docs/react), [Swiper React](https://swiperjs.com/react).
