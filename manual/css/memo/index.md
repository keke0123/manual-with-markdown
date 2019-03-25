# Css Tip

* ## 목차
    * sup, sub

---

## sup

> sup, sub css 설정법

일반적인 방법으로 설정하면 line-height 가 일그러져서 쓰기 안좋다.

```css
sup, sub {
    position: relative;
    vertical-align: baseline;
    top: -0.4em;
}

sub {
    top: 0.4em;
}

```