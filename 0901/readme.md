# 📋 Serverless Survey Web App (GAS & Google Sheets Integration)

Google Apps Script(GAS)와 Google Sheets를 연동하여 서버 구축 없이 빠른 데이터 수집 및 관리가 가능한 미니 설문조사 웹 애플리케이션입니다.

---

## 📌 1. 프로젝트 개요
* **개발 기간:** 2026.09
* **주요 기능:** 사용자 설문 데이터 수집 및 구글 스프레드시트 DB 자동 적재
* **기술 스택:** HTML5, CSS3, JavaScript, Google Apps Script (GAS), Google Sheets

---

## 💡 2. 기획 및 디자인 개선 서사 (Story)

### 1) 기획 의도 및 목표
* 기존의 복잡한 서버/DB 설정 과정 없이, 유연하게 데이터를 수집할 수 있는 서버리스 파이프라인 구축을 목표로 함.
* 사용자가 직관적으로 설문에 참여할 수 있도록 모던하고 깔끔한 UI 제공.

### 2) UI/UX 디자인 피드백 및 개선 과정
* **초기 스티치(Stitch) 감성 디자인:**  
  CSS 테두리(`border: dashed`)와 박스 그림자 효과를 활용하여 아날로그적인 점선 테두리 디자인을 시도함.
* **모던 폼 디자인으로의 전환:**  
  실제 서비스 형태인 네이버 폼/구글 폼 스타일의 깔끔한 가독성이 사용자 경험(UX) 관점에서 더 우수하다고 판단하여 디자인 변경 진행.
* **최종 디자인 특징:**  
  - 부드러운 박스 그림자(`box-shadow`)와 둥근 모서리(`border-radius: 16px`) 적용
  - 네이버 시그니처 그린 컬러(#03c75a) 포인트를 활용한 시각적 안정감 부여
  - `placeholder` 활용으로 인풋 입력 가독성 향상

---

## 🛠️ 3. 주요 트러블슈팅 (Troubleshooting)

### 이슈 1: Google Apps Script 웹앱 실행 시 '페이지를 찾을 수 없습니다' 에러
* **원인:**  
  1) `Code.gs`에서 `HtmlService.createHtmlOutputFromFile('index')` 호출 시, GAS 내부 파일명의 확장자 처리 규칙 미숙지로 인한 파일 매칭 오류.  
  2) 복수 구글 계정 로그인 상태에서 세션 충돌로 인한 404/접근 권한 오류 발생.
* **해결:**  
  1) GAS 에디터 내 HTML 파일명을 `.html`을 제외한 `index`로 정확히 지정하여 핸들링.  
  2) 시크릿 창 테스트 및 최초 실행 시 OAuth 사용자 권한 승인 절차를 완료하여 정상 동작 확인.

---

## 📊 4. 데이터베이스(구글 시트) 연동 결과

웹앱 폼을 통해 제출된 데이터는 Google Apps Script의 `SpreadsheetApp` API를 통해 구글 스프레드시트의 새 행으로 즉시 적재됩니다.

https://docs.google.com/spreadsheets/d/1j9L2dZp-S6vdB1-vIup9Qy7wcb8_oC5AD5d7K1XNTrY/edit?gid=0#gid=0

| A열 (이름) | B열 (만족도) | C열 (개선 의견) |
|---|---|---|
| 홍길동 | 매우 만족 | 강의 내용이 알차고 좋았습니다. |
