# 7. 훅스로 컴포넌트 개선하기

## 7.1 `useEffect` 소개하기

### 7.1.3 `useLayoutEffect`

`useLayoutEffect`는 렌더링 사이클의 특정 순간에 호출된다. 이벤트가 발생하는 순서는 다음과 같다.

1. 렌더링
2. `useLayoutEffect`가 호출됨
3. 브라우저의 화면 그리기 -> 이 시점에 컴포넌트에 해당하는 엘리먼트가 실제로 DOM에 추가됨
4. `useEffect`가 호출됨

예시를 들자면, 창의 크기가 바뀐 경우 엘리먼트의 너비와 높이를 얻을 때 사용할 수 있다.

```jsx
const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return [width, height];
};
```

### 7.1.4 훅스의 규칙

#### 훅스는 컴포넌트의 영역 안에서만 작동한다.

리액트 컴포넌트 내부에서만 훅스를 호출해야 한다. 훅스는 일반 자바스크립트가 아니라 리액트 패턴이다.

#### 기능을 여러 훅으로 나누면 좋다.

훅스는 순서대로 호출되기 때문에 각 훅을 작게 유지하면 좋다. 일단 호출되고 나면 리액트는 훅의 값을 배열에 저장하고 추적할 수 있게 해준다.

#### 최상위 수준에서만 훅을 호출해야 한다.

리액트 함수의 최상위 수준에서만 훅을 사용해야 한다. 조건문이나 루프, 내포된 함수 안에서 훅을 사용해서는 안된다.

### 7.1.5 `useReducer`로 코드 개선하기

Reducer 함수는 현재 상태를 받아서 새 상태를 반환하는 함수이다.

아래와 같은 함수가 있다고 해보자.

```jsx
const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked((checked) => !checked);
  }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};
```

여기서 `useState` 대신 `useReducer`를 사용하면 다음과 같다.

```jsx
const Checkbox = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};
```

> ❓ 왜 `useState`보다 `useReducer`가 좋다고 하는 건지 솔직히 이해 잘 안됐음...

### 7.1.7 컴포넌트 성능 개선

리액트 애플리케이션에서는 컴포넌트가 일반적으로 아주 많이 렌더링된다. 때문에 불필요한 렌더링을 피하고 렌더링이 전파되는 데 걸리는 시간을 줄이는 등의 활동이 성능 개선이 포함된다.

리액트는 불필요한 렌더링을 방지할 때 도움이 되는 `memo`, `useMemo`, `useCallback` 등의 도구를 제공한다.

순수 컴포넌트를 만들 때 `memo` 함수가 쓰인다. 인자가 같으면 순수 함수는 항상 같은 결과를 내놓는다. 순수 컴포넌트도 같은 방식으로 작동한다. 리액트에서 순수 컴포넌트는 같은 프로퍼티에 대해 항상 같은 출력으로 렌더링되는 컴포넌트를 말한다.

순수 컴포넌트는 인자가 같으면 항상 같은 결과를 낸다. 다시 말하면, 프로퍼티가 바뀌지 않는다면 다시 렌더링해야 할 필요가 없다는 것이다. 이럴 때 `memo` 함수를 사용하면 프로퍼티가 변경될 때만 다시 렌더링 되는 컴포넌트를 만들 수 있다.

```jsx
import React, { useState, memo } from "react";

const Cat = ({ name }) => {
  console.log(`rendering ${name}`);

  return <p>{name}</p>;
};

const PureCat = memo(Cat);
```

### 7.1.8 `shouldComponentUpdate`와 `PureComponent`

이전 버전의 리액트에서는 `memo` 대신 `shouldComponentUpdate`라는 메서드가 있었다. 이는 컴포넌트를 다시 렌더링하기 위해 어떤 prop이나 상태가 바뀌어야 하는 지 묘사한다.

> 💡 이전 버전에 대한 설명이니 가볍게 읽고 넘겨버리기~

### 7.1.9 언제 리팩터링할까?

일반적으로 `useMemo`, `useCallback`, `memo`가 과용되는 경향이 있다.

리액트는 빠르다. 성능 최적화를 위한 다른 리팩터링은 개발 단계의 마지막에 이뤄져야만 한다.

`useMemo`, `useCallback`가 좋은 생각인 것 같아서 아무데나 사용하면 오히려 성능이 떨어질 수 있다. 코드를 더 추가해야 하고 개발자의 공수도 들어간다.

다시 말하면, 성능을 위해 코드를 리팩터링 할 때는 목표를 설정하는 것이 가장 중요하다.
