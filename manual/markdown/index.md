# MarkDown 문법 정리

* ## 목차
  * [제목 / Headers](##제목)
  * [인용 / Blockquotes](##인용)
  * [코드 블록 / Code Blocks](##코드-블록)
  * [인라인 코드 / Inline Code Blocks](##인라인-코드)
  * [강조 / Emphasis](##강조)
  * [수평선 / Horizontal Rules](##수평선)
  * [링크 / Links](##링크)
    * [외부링크 / External Links](###외부-링크)
    * [내부링크 / Internal (Anchored) Links](###내부-링크)
  * [리스트 / Lists](##리스트)
    * [순서 있는 리스트 / Ordered Lists](###순서-있는-리스트)
    * [순서 없는 리스트 / Unordered Lists](###순서-없는-리스트)
  * [테이블 / Tables](##테이블)
  * [이미지 / Adding Images](##이미지)
---
## 제목
>### 마크다운
```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
>### 실행결과
# h1
## h2
### h3
#### h4
##### h5
###### h6
---
## 인용
> ### 마크다운
```
> 인용문
>> 인용문안의 인용문
```
> ### 실행결과

> 인용문
>> 인용문안의 인용문
---
## 코드 블록
> ### 마크다운
```
``` or ~~~
` 혹은 ~ 세번 쓰면 code 블록 
``` or ~~~
```
```
~~~c
void f(){
    printf(%s, "이것은  c 코드 입니다.");
}
~~~
```
> ### 실행결과
```
` 혹은 ~ 세번 쓰면 code 블록
```
~~~c
void f(){
    printf(%s, "이것은  c 코드 입니다.");
}
~~~
---
## 인라인 코드
> ### 마크다운
```
`인라인 코드 블럭`
```
> ### 실행결과
`인라인 코드 블럭`
---
## 강조
> ### 마크다운
```
*기울여쓰기(italic)*
_기울여쓰기(italic)_

**굵게쓰기(bold)**
__굵게쓰기(bold)__
```
> ### 실행결과
*기울여쓰기(italic)*

_기울여쓰기(italic)_

**굵게쓰기(bold)**

__굵게쓰기(bold)__
---
## 수평선
> ### 마크다운
```
---
***
___
```
> ### 실행결과
---
***
___

---
## 링크
### 외부 링크
> ### 마크다운
```
인라인 링크
[Google](http://www.google.co.kr "구글")
참조 링크
[Google][1]
[Naver][2]
[1]:http://google.com/ "구글"
[2]:http://naver.com/ "네이버"
url 링크
<http://google.com/>
<example@gmail.com>

```
> ### 실행결과
인라인 링크 

[Google](http://www.google.co.kr "구글")

참조 링크

[Google][1]

[Naver][2]

[1]:http://google.com/ "구글"

[2]:http://naver.com/ "네이버"

url 링크

<http://google.com/>

<example@gmail.com>
### 내부 링크
> ### 마크다운
```
[목차](##목차)
~중략~
#index

주의!
# 는 Header 이며
띄어 쓰기는 '-' 로 구분
영어는 소문자만 가능
```
> ### 실행결과
[목차](##목차)
---
## 리스트
### 순서 있는 리스트
> ### 마크다운
```
들여쓰기는 띄어쓰기 3번 or 탭

1. list item 1
  1. list item 1-1
1. list item 2
2. list item 3
0. list item 4
3. list item 5
```
> ### 실행결과
1. list item 1
    1. list item 1-1
1. list item 2
2. list item 3
0. list item 4
3. list item 5
### 순서 없는 리스트
> ### 마크다운
```
'*', '+', '-' 로 시작
들여쓰기는 띄어쓰기 3번 or 탭

* list item 1
    * list item 1-1
    * list item 1-2
```
> ### 실행결과
* list item 1
    * list item 1-1
    * list item 1-2

---
## 테이블
> ### 마크다운
```
테이블 생성

Header 1 | Header 2
--- | ---
Content 1 | Content 2
Content 3 | Content 4

테이블 정렬

| Header 1 | Header 2 | Header 3 |
| :--- | :---: | ---: |
| Left | Center | Right |
```
> ### 실행결과
테이블 생성

Header 1 | Header 2
--- | ---
Content 1 | Content 2
Content 3 | Content 4

테이블 정렬

| Header 1 | Header 2 | Header 3 |
| :--- | :---: | ---: |
| Left | Center | Right |
---
## 이미지
> ### 마크다운
```
인라인 이미지

![alt text](../../assets/img/test.jpg "hello img")

링크 이미지

![alt text](https://cdn.pixabay.com/photo/2016/10/27/05/48/cappadocia-1773468_960_720.jpg)

참조 이미지

![alt text][1]
[1]:../../assets/img/test.jpg
```
> ### 실행결과
인라인 이미지

![alt text](../../assets/img/test.jpg "hello img")

링크 이미지

![alt text](https://cdn.pixabay.com/photo/2016/10/27/05/48/cappadocia-1773468_960_720.jpg)

참조 이미지

![alt text][sky-img]

[sky-img]:../../assets/img/test.jpg
---