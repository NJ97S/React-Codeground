# 📌 Git Commit Convention

React-Codeground 실습에서 사용할 간단한 `Git Commit` 컨벤션

작업 종류에 따라 `이모지(emoji)` + `타입(type)` + `메시지` 형태로 작성

---

## ✅ 커밋 타입

| 이모지 | 타입(Type) | 의미 | 예시 |
|--------|------------|------|------|
| ✨     | feat       | 새로운 기능 추가 | `✨ feat: 로그인 버튼 추가` |
| 🐛     | fix        | 버그 수정 | `🐛 fix: NavBar 이동 오류 수정` |
| 📝     | docs       | 문서 수정 (README, 주석 등) | `📝 docs: README 실행 방법 추가` |
| 🎨     | style      | 코드 스타일 변경 (기능 영향 없음) | `🎨 style: ESLint 규칙 적용` |
| ♻️     | refactor   | 코드 리팩토링 (동작 동일, 구조 개선) | `♻️ refactor: 중복 코드 함수화` |
| 🔧     | chore      | 설정/빌드/라이브러리 설치 등 | `🔧 chore: react-router-dom 설치` |

---

## 📌 커밋 메시지 템플릿

아래와 같이 **한 줄 요약** + **이유/의도**를 함께 작성하는 것을 권장합니다.