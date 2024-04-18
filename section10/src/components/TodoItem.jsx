import "./TodoItem.css";
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input 
                type="checkbox"
                readOnly
                checked={isDone}
                onChange={onChangeCheckbox}
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

// export default memo(TodoItem);
// onUpdate나 onDelete 같은 객체 타입의 값, 함수는 매번 새롭게 전달이 될 때마다
// 다른 주소 값을 가지게 되기 때문에 memo 메서드가 판단하기에 props가 바뀌었다고 판단한다.

// React.memo는 props의 값을 얕은 비교로 변화를 판단한다.
// 객체 타입의 값을 props로 받고 있는 컴포넌트는 memo 메서드를 적용하기만 해서 최적화가 제대로 이루어지지 않는다.

// 해결방법
// (1) App 컴포넌트에서 객체 타입의 props(함수)들 자체를 메모이제이션 -> useCallback 필요
// (2) React.memo 메서드에 두 번째 인수ㅗ 콜백 함수를 추가로 전달해서 최적화 기능을 커스터마이징 한다.
//  - 컴포넌트가 리렌더링 될 때마다 컴포넌트 props가 바뀌었는지 스스로 판단하지 않고, 콜백함수의 매개변수로
//    과거의 prevProps와 현재의 nextProps를 인수로 받고 반환값에 따라 props 변화를 판단한다.
//  - 컴포넌트를 인수로 받아서 해당 컴포넌트에 최적화(메모이제이션) 같은 추가 기능을 덧붙여서 새로운 컴포넌트를
//    반환해주는 React.memo와 같은 메서드들을 리액트에서는 특별히 고차 컴포넌트(HOC, Higher Order Component)
//    라고 부른다.
//  - 한번 호출하는 것만으로도 컴포넌트에 새로운 기능을 부여할 수 있기에 복잡한 리액트 앱 구축 시 꽤나 자주 사용함
//  - 참고자료 : https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/

// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps) => {
    // 변환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
    // true  -> props 바뀌지 않음 -> 리렌더링 X
    // false -> props 바뀜       -> 리렌더링 O

    if (prevProps.id !== nextProps.id) return false;
    if (prevProps.isDone !== nextProps.idDone) return false;
    if (prevProps.content !== nextProps.content) return false;
    if (prevProps.date !== nextProps.date) return false;

    return true;
});