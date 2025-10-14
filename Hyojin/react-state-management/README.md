# 📌 Git Commit Convention

React-Codeground 실습에서 사용할 간단한 `Git Commit` 컨벤션

작업 종류에 따라 `이모지(emoji)` + `타입(type)` + `메시지` 형태로 작성

## ✅ 커밋 타입

| 이모지 | 타입(Type) | 의미                                 | 예시                              |
| ------ | ---------- | ------------------------------------ | --------------------------------- |
| ✨     | feat       | 새로운 기능 추가                     | `✨ feat: 로그인 버튼 추가`       |
| 🐛     | fix        | 버그 수정                            | `🐛 fix: NavBar 이동 오류 수정`   |
| 📝     | docs       | 문서 수정 (README, 주석 등)          | `📝 docs: README 실행 방법 추가`  |
| 🎨     | style      | UI 스타일 변경                       | `🎨 style: 배경 색상 변경`        |
| ♻️     | refactor   | 코드 리팩토링 (동작 동일, 구조 개선) | `♻️ refactor: 중복 코드 함수화`   |
| 🔧     | chore      | 설정/빌드/라이브러리 설치 등         | `🔧 chore: react-router-dom 설치` |

---

---

# 💻 Code Convention

React-Codeground 실습에서 사용할 간단한 Code Convention

일관된 코드 스타일을 유지하고 협업 시 가독성을 높이기 위한 기본 가이드

## ✅ 기본 규칙

구분 규칙 예시
📁 파일명 컴포넌트는 PascalCase, 함수/유틸은 camelCase 사용 StarRating.jsx, useFetch.js, formatDate.js

⚙️ 컴포넌트 선언 함수형 컴포넌트(function or 화살표 함수) 사용 export default function Button() { ... }

🧠 Hooks 순서 useState, useEffect 등 React Hooks는 항상 최상단에 위치 ✅ useState → useEffect → 함수 선언

📦 import 순서 외부 라이브러리 → 내부 코드 → 스타일/에셋 순으로 정렬 아래 예시 참고 👇

```js
// 1️⃣ 외부 라이브러리 (react, react-dom, third-party libs)
import { useState } from "react";
import PropTypes from "prop-types";

// 2️⃣ 내부 컴포넌트 / hooks / utils 등 (프로젝트 내 코드)
import Star from "./Star";
import useFetch from "../hooks/useFetch";
import { formatDate } from "../utils/date";

// 3️⃣ 스타일 / 에셋
import "./StarRating.css";
import starIcon from "../assets/star.svg";
```

---

---

# 🧩 ESLint & Prettier 스타일

항목 설정 설명
🔢 탭 간격 2칸 `"editor.tabSize": 2`

🔚 세미콜론 항상 사용 `"semi": true`

🧱 따옴표 큰따옴표 사용 `"singleQuote": false`

🎨 기본 포매터 Prettier 사용 `"editor.defaultFormatter": "esbenp.prettier-vscode"`
