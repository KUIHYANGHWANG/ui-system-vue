# 🎨 UI System (Vue-based Publishing Structure)

<p align="left">
  <a href="#korean">🇰🇷 한국어 가이드</a> | 
  <a href="#english">🇺🇸 English Guide</a>
</p>

---

<div id="korean">

## 🇰🇷 프로젝트 개요 (KOR)

단순한 마크업 작업을 넘어, **Vue.js 기반의 컴포넌트 설계**를 통해 디자인 시스템의 일관성을 유지하고 개발 효율성을 극대화하는 퍼블리싱 가이드를 지향합니다. 재사용 가능한 구조와 논리적인 스타일링을 통해 **비즈니스 로직과 UI 레이어의 완벽한 분리**를 목표로 합니다.

### 🧱 핵심 설계 원칙

- **Component-Driven Design:** Atomic Design 패턴을 지향하여 최소 단위(Atoms)부터 결합 단위(Organisms)까지 체계적으로 관리합니다.
- **Scalability (확장성):** Props를 통한 유연한 스타일 제어와 슬롯(Slots)을 활용한 가변적인 컨텐츠 대응 구조를 설계합니다.
- **Maintainability (유지보수성):** SCSS의 변수화 및 Mixin 시스템을 활용하여 디자인 변경 시 코드 수정을 최소화합니다.

### ⚙️ 기술 스택

- **Framework:** Vue.js (3.x)
- **Styling:** SCSS (BEM 방법론 준수, 전역 변수 시스템 구축)
- **Environment:** ESLint, Prettier

</div>

---

<div id="english">

## 🇺🇸 Project Overview (ENG)

Beyond simple markup, this project aims to establish a **Vue.js-based component architecture** to ensure design consistency and maximize development efficiency. The goal is to achieve a perfect separation between **business logic and the UI layer** through reusable structures and logical styling.

### 🧱 Core Concepts & Structure

- **Component-Driven Design:** Adopts Atomic Design patterns to systematically manage everything from the smallest units (Atoms) to complex assemblies (Organisms).
- **Scalability:** Ensures flexible UI control using Props and creates adaptable content structures through Slots.
- **Maintainability:** Minimizes code debt and maintenance efforts by utilizing SCSS variables and mixin systems.

### ⚙️ Tech Stack

- **Framework:** Vue.js (3.x)
- **Styling:** SCSS (Compliant with BEM methodology, Global variable system)
- **Environment:** ESLint, Prettier

</div>

---

## 🛠 주요 설계 특징 (Key Engineering Features)

1. **Semantic Markup:** 웹 접근성(A11y)과 SEO를 고려한 시맨틱 태그 활용.
2. **Flexible Grid System:** Responsive layout implementation using a hybrid of Flexbox and CSS Grid.
3. **Style Encapsulation:** `scoped` 스타일링과 CSS Variables를 활용한 테마 대응 가능 구조.

---

_본 저장소는 퍼블리싱 효율화를 위한 UI 가이드라인을 지속적으로 업데이트합니다._
_This repository continuously updates UI guidelines for publishing efficiency._
