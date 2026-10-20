# 한국교통대학교 캠퍼스 꿀팁 가이드 (KNUT Campus Guide)

> **AI 데이터 서사 및 Vibe Coding (2026-10-20)**  
> **작성자**: LIU ZHIYUAN (유지원 · 2544412)  
> **대상**: 한국교통대학교 충주캠퍼스 신입생 및 외국인 유학생 (한/중 양방향 전환 지원)

**배포 주소**: https://liuzhiyuan011215-cmyk.github.io/knut-campus-guide/  
**저장소**: https://github.com/liuzhiyuan011215-cmyk/knut-campus-guide

---

## 1. 프로젝트 개요 및 데이터 정규화 특징

- **원본 데이터**: 전 수강생 수집 250건 (맛집 149건 + 숨은장소 101건)
- **정규화 결과 (`LIU ZHIYUAN_데이터.xlsx`)**:
  - **178행** (`맛집` 95곳 + `숨은장소` 83곳, 중복 44곳 통합, `추천 수` 총합 = **250건** 100% 일치 검증 완료)
  - **AI 환각(Hallucination) 방지 설계**: 원문에 명확히 기재된 정보만 `O / X / 숫자`로 기록하고, 어림수·무게제·다인분 가격 및 미기재 항목은 추측하지 않고 `'확인 안 됨'`으로 분리한 뒤 원문 표현을 `비고`에 보존
  - **웹 시스템의 2단 분리(Tiered Filter) 구현**: `혼밥 가능(O)` 또는 `예산` 필터 적용 시 **100% 확정 데이터**를 상단에, **비고 기재/미확인 참고 후보**를 하단에 분리 표시하여 2주차 정규화 원칙을 인터랙티브 UI로 구현
- **외국인 유학생 특화 기능**:
  - 우측 상단 **한국어 / 中文(유학생)** 원클릭 전환 (인터페이스 + 178개 전체 장소명·대표메뉴·영업시간·비고 전문 중문 번역 내장)
  - **유학생 필수 생활 꿀팁 5선** (`외국인등록증 ARC 발급`, `W5 NH농협 계좌 개설`, `인천공항 직통 시외버스`, `W5 복사실`, `E6 국원피트니스클럽`) 및 **유학생 친화 검증 12선** (키오스크 무인 주문, 중국어 소통 가능 식당 등) 탑재

---

## 2. 로컬 실행 방법

별도의 Node.js나 Python 서버 설치 없이 `index.html` 파일을 더블클릭하면 브라우저에서 즉시 실행됩니다.

---

## 3. GitHub Pages 배포 방법 (3분 완성)

1. **GitHub 새 저장소(Repository) 생성**
   - [https://github.com/new](https://github.com/new) 접속
   - Repository name: `knut-campus-guide` 입력
   - **Public** 선택 후 **Create repository** 클릭

2. **`index.html` 업로드 (웹에서 바로 업로드하거나 터미널 사용)**
   - **방법 A (웹 드래그 앤 드롭 — 가장 간단)**:
     - 생성된 저장소 화면에서 **uploading an existing file** 클릭
     - 이 폴더의 `index.html` 파일을 끌어다 놓고 하단 **Commit changes** 클릭
   - **방법 B (VS Code 터미널 명령어)**:
     ```bash
     cd "/Users/wangyanan/vs code/knut-campus-guide"
     git init
     git add index.html README.md
     git commit -m "feat: KNUT Campus Guide bilingual web app (178 normalized places)"
     git branch -M main
     git remote add origin https://github.com/<본인GitHub아이디>/knut-campus-guide.git
     git push -u origin main
     ```

3. **GitHub Pages 켜기**
   - 저장소 상단 메뉴 **Settings** → 좌측 메뉴 **Pages** 클릭
   - **Build and deployment** 아래 **Branch**를 `None`에서 **`main`** (폴더 `/ (root)`)으로 변경 후 **Save** 클릭
   - 약 1분 뒤 상단에 생성된 배포 링크(`https://<본인GitHub아이디>.github.io/knut-campus-guide/`)로 접속 및 과제 제출!

---

## 4. 수정 방법 (선택)

`index.html`은 빌드 결과물입니다. 디자인·문구를 고치려면 `src/template.html`, 데이터를 고치려면 `src/data.json`을 수정한 뒤 다시 만듭니다.

```bash
python3 src/build.py
```

데이터와 네이버 플레이스 실사진(`assets/`)이 `index.html` 하나에 들어가므로, GitHub에는 `index.html`만 올려도 됩니다.
