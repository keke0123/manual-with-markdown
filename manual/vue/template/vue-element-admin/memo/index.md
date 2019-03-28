# Vue-element-admin Memo

* ## 목차
    * sidebar
    * icon
    * element-ui table
        * element-ui 의 table 간략 사용법
        * table 선택 후 삭제
    * build

---

## sidebar

> sidebar 사용법

layout/sidebar/index.vue 에서 permission_routes 의 object 를 for 문을 돌려서 메뉴를 만든것을 볼 수 있다. 여기서 permission_routes 는 store 에 정의 되어 있는데...

![sidebar-01](./img/sidebar-01.png)

store/index.vue 에 가보면 getters 라는 오브젝트가 보인다.

![sidebar-02](./img/sidebar-02.png)

이 오브젝트안에는 permission_routes 가 들어있는데 위와 아래의 이미지를 참고하여 보면  permission.routes 라는 것을 알 수 있고, 

![sidebar-03](./img/sidebar-03.png)

이 permission.routes 는 배열로 GenerateRoutes 라는 action 이 호출되었을때 생성된다는 것을 알 수 있고, (GenerateRoutes 가 언제 호출되는지는 이 내용과는 관계 없음으로 확인해보지 않았다.) 이 action 이 실행될때, asyncRoutes(accessedRoutes) 안에 담긴 내용은 설정해놓은 권한을 확인후 constantRoutes 와 합쳐져서 routes 에 담긴다는 것을 알 수 있다. 

![sidebar-04](./img/sidebar-04.png)

asyncRoutes 와 constantRoutes 는 router/index.js 에 명시 되어 있으며 권한을 설정하지 않을 거라면 constantRoutes 에 routes 내용을 명시해 주면 그 내용을 토대로 sidebar 가 생성된다는 것을 알 수 있다.

![sidebar-05](./img/sidebar-05.png)


## icon

> sidebar icon 사용법

router 

![icon-04](./img/icon-05.png)

## element-ui table

> element-ui 의 table 간략 사용법

기본적으로 el-table 에 list binding 시켜서 (ex. :data="list") table 을 만드는 방식이다.
list 는 기본적으로 [{...}, {...}] 이러한 형태이다. 그리고 el-table-column 의 prop 값이 column 을 결정짓고 prop 값을 주지 않을 거라면 아래 slot 을 이용한 custom 값을 줄수도 있다.

![table-02](./img/table-02.png)

custom 값을 줄때 slot-scope 의 값은 꼭 scope 일 필요는 없고 위의 이미지에 빨간줄 쳐진 (scope) 부분만 일치시켜주면 된다. 

![table-01](./img/table-01.png)

참고용으로 scope 의 object 를 console 로 출력해본 화면이다.

![table-03](./img/table-03.png)

json 데이타 값은 받아왔을때 전부 string type 이기 때문에 정렬을 위해선 data 의 type 을 바꾸는 parsing 이 필요하다. 그래서 component 가 생성될때 함수를 호출해 data 를 parsing 해주도록 하였다.

![table-04](./img/table-04.png)

파싱함수의 모습은 위의 그림과 같다. date 값은 파싱하면 사람이 날짜를 구분하기 힘든 숫자 값이 나오기 때문에 parseData 란 변수를 만들어서 담았다.

![table-05](./img/table-05.png)

파싱된 date 는 사람이 정확한 날짜를 알아보기 힘들기 때문에 정렬 방식에 쓰는 데이타는 parseDate 로 사용하였구, table 에 찍히는 custom data 는 기존의 object 안에 date 값을 사용하였다.

> table 선택 후 삭제

아래와 같이 테이블에 select box 를 만들어서 버튼을 눌렀을때 삭제 하는 방법이다.

![table-delete-01](./img/table-delete-01.png)

우선 element-ui 에서 제공하는 select box 와 select box 를 눌렀을때 함수를 호출해주는 방식을 사용하려면 아래의 그림과 같이 table 에는 selection-change 라는 이벤트를 만들고 type 이 selection 이라는 column 을 만들면 된다.

![table-delete-02](./img/table-delete-02.png)

selection event 에선 선택된 값을 변수에 저장 시켜주기만 하였다.
val 로는 체크한 값 전체가 array 로 넘어온다.

![table-delete-03](./img/table-delete-03.png)

버튼을 눌렀을때 함수를 호출하여 selectedData 에 저장된 배열과 현재 테이블에 뿌려주는 list 와 비교하여 id 값이 같을때 object 를 지워주는 방식을 사용하여 테이블의 삭제를 진행하였다. 나름의 최적화를 위해서 맞는 id 값이 있을때 selectedData 의 배열도 같이 지우도록 하였다.

![table-delete-04](./img/table-delete-04.png)

> 동적 테이블 할당을 위한 key array 만드는 방법

~~~javascript
this.listKeys = Object.keys(this.tempData.list[0])
~~~

---

## Build

> build 시 assets 의 파일 변환 관련

기본적으로 외부 파일은 @/src/assets 넣어서 사용한다.
build 시 webpack.prod.conf.js 의 설정 내용에 따라 /dist/js/chunk-[hash값]으로 변환된다.

![build-assets 관련](./img/build-assets.PNG)

---

## etc

> state attr 변경법

sortable 이라는 attr 을 제어하고 싶다면 sortable 에 bind 시키고 true, flase 값을 변수로 주면 제어 가능해 진다.

![state-attr-change](./img/state-attr-change-01.png)

