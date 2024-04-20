import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import Exam from './components/Exam';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },    
  {
    id: 1,
    isDone: false,
    content: "밥먹기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  },
];

// reducer : 변환기
// -> 상태를 실제로 변환시키는 변환기 역할
// Reducer 함수를 통해서 상태 관리 코드를 외부로 분리할 수 있어서
// 컴포넌트 내부를 비교적 간결하게 유지할 수 있다.
function reducer (state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => item.id === action.targetId 
        ? {...item, isDone: !item.isDone}
        : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

// Context 생성
// 특별한 경우가 아니면 context는 리렌더링 시 불필요한 재생성을 피하기 위해 외부에 선언한다.
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
// console.log(TodoContext);

function App() {
  // const [todos, setTodos] = useState(mockData);
  // dispatch: 발송하다, 급송하다.
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime(),
    // };

    // setTodos([newTodo, ...todos]);
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todo 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    // setTodos(todos.map((todo) => 
    //   todo.id === targetId
    //     ? {...todo, isDone: !todo.isDone}
    //     : todo
    // ));
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // setTodos(todos.filter(todo => todo.id !== targetId));
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  },[]);

  // Provider에 value props에 들어갈 객체 리터럴을 memoization
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={ todos }>
      <TodoDispatchContext.Provider
        value={ memoizedDispatch }
      >  
        <Editor/>
        <List />
      </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App;
