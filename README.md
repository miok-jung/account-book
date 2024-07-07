# Account Book

## 24. 05

- First setting
- Language (Korean, Japanese, English) Setting
- Remove unnecessary code

## 24. 06

- Definition Size
- Create Common Classes

### 커밋규칙

- feat: 새로운 규칙
- fix: 버그 수정
- docs: 문서 수정
- chore: 자잘한 수정
- style: 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)

<hr />

#### 그 외 정리

1. Code Formatting

- 수직적 : 코드 라인 간의 간격, 코드 간의 그룹화
- 수평적 : 들여쓰기, 코드 간 간격, 코드 행 넓이 등

2. Comment Anchors
   현재 Comment는 직접 정의한 내용을 토대로 주석을 정의하였으므로, 이를바탕을 통해 좀 더 편리하게 볼 수 있음을 확인하면 된다.

```json
"주석명": {
    "behavior": 'region' | 'link'
    // region은 앵커주석에서 접기가 가능하며 반드시 !주석명으로 종료 태그가 있어야 그 기능을 활용할 수 있다.
    // link 앵커의 경우 외부 링크 혹은 코드 링크로 바로 이동할 수 있는 절대 경로를 제공한다. 아래와 같이 코드도 절대경로로 이동을 바로 할 수 있게 가능하다.
    // LINK: src/css/app.scss:19
}
```

ANCHOR - 파일의 섹션을 나타내는 데 사용됩니다.
TODO - 완료를 기다리는 항목
FIXME - 버그 수정이 필요한 항목
STUB - 생성된 기본 스니펫에 사용됨
NOTE - 특정 코드 섹션에 대한 중요한 참고 사항
REVIEW - 추가 검토가 필요한 항목
SECTION - 영역을 정의하는 데 사용됨(계층적 앵커 참조)
LINK - 편집기 내에서 열 수 있는 파일에 연결하는 데 사용됩니다('링크 앵커' 참조).
EXAMPLE: 설명에 대한 예시를 정리
