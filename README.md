# 성적 계산기 (Grade Calculator)

중간고사·수행평가·기말고사 점수와 반영 비율을 입력하면 **최종 점수와 등급(A·B·C·D·E)** 을 자동으로 계산하고, **원하는 등급에 필요한 점수**까지 알려주는 무료 웹 도구입니다. 차트 시각화와 PDF 저장·링크 공유를 지원합니다.

🔗 데모: https://gradecalculator-5ui.pages.dev/

## 주요 기능
- 평가 항목별 **반영 비율(%)** 설정
- 중간·기말고사의 **객관식·서술형 분리/통합 입력** (한쪽만 입력 시 예상 점수 산출)
- 가중 합산 **최종 점수 + 등급** 표시
- **목표 점수 시뮬레이터** — 남은 시험에서 받아야 할 점수 역산
- 막대·도넛 **차트 시각화**, **PDF 다운로드**, **링크 공유**
- **다크/라이트 모드**, 모바일 반응형, 종이 느낌의 디자인

## 구성
| 파일 | 설명 |
|---|---|
| `index.html` | 메인 도구 + 사용법/FAQ 본문 |
| `about.html` `privacy.html` `terms.html` `contact.html` | 소개·개인정보처리방침·이용약관·연락처 |
| `site.css` `site.js` | 공통 네비게이션·푸터·테마 |
| `ads.txt` `robots.txt` `sitemap.xml` | 광고/검색 표준 파일 |

## AdSense / 배포 설정 (적용 완료)
- 게시자 ID: `ca-pub-8068020303579476` (모든 HTML + `ads.txt`)
- 도메인: `https://gradecalculator-5ui.pages.dev` (canonical · `robots.txt` · `sitemap.xml`)
- 문의 이메일: `aaronkim9935@gmail.com` (`contact.html`)
- 광고: AdSense 자동 광고(Auto ads) 사용. 특정 위치에 광고 단위를 넣으려면 AdSense에서 광고 단위 생성 후 `<ins>` 코드를 삽입.

## 라이선스
개인 프로젝트. 사용된 오픈소스 라이브러리(Chart.js, jsPDF, html2canvas)는 각 라이선스를 따릅니다.
