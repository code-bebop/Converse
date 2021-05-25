# 캔버스 메인 홈페이지 클론 코딩 프로젝트

이 프로젝트는 약 1년 전 퍼블리셔를 목표로 할 적에 진행했던 프로젝트이다.

캔버스 홈페이지의 메인 홈페이지를 HTML, CSS, JS 로만 클론 코딩했다. 이 프로젝트를 통해 CSS 방법론, 미디어 쿼리, 간단한 JS 사용법 등을 연마했다.

물론 1년이나 된 프로젝트이다 보니 미숙한 부분이 많이 보이지만, 그걸 다 고치면 아예 새로운 프로젝트가 될 것 같았고, 1년 전의 내 수준을 있는 그대로 보여줌으로써 현재의 수준과의 대비를 주어 실력이 많이 향상되었음을 어필하고 싶어 크리티컬한 부분(SEO에 관한 부분)을 제외하고 수정하지 않았다.

## 주로 사용된 기술

### BEM 방식 클래스 네이밍

이 프로젝트 이전에도 여러 개의 클론 코딩 프로젝트를 진행했었다. 거기서 깨달은 건 클래스 네임이 금방 개판이 되어 CSS 코드를 짜는 것에 굉장한 악영향을 끼친다는 것이었다.

그래서 찾은 것이 "CSS 방법론"이라는 것이었다. CSS 방법론은 유지보수가 쉽고 일관성 있는 클래스 네임을 위해 고안된 일종의 CSS 가이드라인이다. 여러가지 CSS 방법론이 있었는데, 개중에서도 BEM 방식을 채택했다. 

```html
<nav calss="gnb">
    <a class="gnb__link">홈</a>
    <a class="gnb__link">소개</a>
    <a class="gnb__link gnb__link--selected">오시는 길</a>
    <a class="gnb__link">연혁</a>
</nav>
```

이 같은 요소에 css로 적용하려면 다음과 같아진다.

```css
.gnb {
    display: flex;
    justify-content: center;
}
.gnb__link {
    text-decoration: none;
    color: inherit;
    font-size: 12px;
}
.gnb__link--selected {
    color: pink;
    font-weight: bold;
}
```

Block__Element--Modifieder 의 형태로 클래스 네임을 짓기 때문에 클래스 네임이 중복될 일이 적어지고, 체계적이고 일관적으로 클래스 네임을 짓기 때문에 유지보수 또한 용이해지며 일종의 가이드라인이 제시된 것이기에 개발 속도 또한 빨라진다.

### SCSS

이 프로젝트 이전에는 css만 사용했었는데, 이 프로젝트에서 scss를 처음으로 사용했다. 순수 css를 사용할 때에는 중복을 제거할 수 있을 것 같은데 그러지 못 해서 코드의 양이 잔뜩 늘어나고, 재사용성도 떨어지고, 불편한 점이 이만저만이 아니었다. 물론 그런 불편함을 해결해주는 게 있었으니 그게 바로 "SCSS" 이다.

```css
.gnb {
    display: flex;
    justify-content: center;
}
.gnb__link {
    text-decoration: none;
    color: inherit;
    font-size: 12px;
}
.gnb__link--selected {
    color: pink;
    font-weight: bold;
}
```

위의 CSS 코드는 gnb 라는 클래스 네임이 계속 중복되고 있다. 이를 SCSS는 암퍼샌드(&) 선택자로 중첩시켜 중복을 제거할 수 있다.

```scss
.gnb {
    display: flex;
    justify-content: center;
    &__link {
        text-decoration: none;
   	    color: inherit;
	    font-size: 12px;
        &--selected {
            color: pink;
            font-weight: bold;
        }
    }
}
```

중복이 제거되었을 뿐 아니라 이 요소들이 모두 gnb에 속하는 요소라는 것도 암시하고 있다.

또한 보다시피 BEM 방법론과 SCSS를 같이 사용하면 시너지가 있어 개발효율이 굉장히 올라간 것을 느낄 수 있었다.

### 미디어 쿼리

퍼블리싱에 주력한 프로젝트이기 때문에 미디어 쿼리에도 신경썼다. Desktop을 베이스로 해서 CSS를 짰다.

이 과정에서

1. 어떻게 해야 기존에 있는 요소를 재사용하여 모바일 요소로 보이게 할 수 있는지

2. 모바일 친화적인 UI를 위해 무엇을 고려해야 하는지

등을 배울 수 있었다.

### JQuery

JS에 빠질 수 없이 대두되는 라이브러리, JQuery도 사용되었다. 간단한 애니메이션을 쉽게 적용하고자 JQuery를 사용하였고, 사이트의 최상단에 있는 슬라이드는 Slick 라이브러리로 만들었다.

JQuery를 사용하면서 라이브러리가 무엇인지, 그리고 왜 사용하는지에 대해 이해할 수 있었고 라이브러리를 사용해서 개발기간을 대폭 단축시킬 수 있다는 점도 알게 되었다.

## 아쉬운 점

### SEO 미준수와 퍼포먼스 저하

위에서도 언급했듯이, a 태그에 href가 빠져있고 img 태그에는 alt 속성이 빠져있는 둥 SEO에 치명적인 부분들이 몇 있었다. 그 부분은 수정했다.

그에 더해 img 태그에 width, height가 명시되어 있지 않았고, img 태그의 src로 gif파일이 지정되어 있어 퍼포먼스 저하가 일어나고 있었다.

### 배보다 배꼽이 큰 JQuery

사실 JQuery에서 사용한 기능은 eventHandler와 class control 뿐이었다. 이 부분은 바닐라 JS로도 충분히 가능했었는데 굳이 Jquery를 사용해서 비용을 높인 것이다.

당시에는 JS를 배운지 얼마 되지 않아서 이런 일이 발생했던 것 같기도 하다.

