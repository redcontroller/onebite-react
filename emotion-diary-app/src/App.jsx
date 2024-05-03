import './App.css';
import { useReducer, useRef, createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';
import { useEffect } from 'react';

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2024-04-29").getTime(),
//     emotionId: 1,
//     content: "1번 일기 내용",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2024-04-28").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용",
//   },
//   {
//     id: 3,
//     createdDate: new Date("2024-03-02").getTime(),
//     emotionId: 3,
//     content: "3번 일기 내용",
//   },
//   {
//     id: 4,
//     createdDate: new Date("2024-02-21").getTime(),
//     emotionId: 4,
//     content: "4번 일기 내용",
//   },
//   {
//     id: 5,
//     createdDate: new Date("2024-01-28").getTime(),
//     emotionId: 5,
//     content: "5번 일기 내용",
//   },
// ];

function reducer (state, action) {
  let nextState;
  switch (action.type) {
    case "INIT": 
      return action.data;
    case 'CREATE': {
      nextState = [action.data, ...state];
      break;
    }
    case 'UPDATE':{
      nextState = state.map((item)=> String(item.id) === String(action.data.id) ? action.data : item);
      break;
    }
    case 'DELETE':{
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  // data state의 값이 초기화 되기까지 loading 화면
  // 다른 페이지에서 새로고침 시에 useEffect를 통해 data 상태가 초기화되기 전에 다른 컴포넌트에서 데이터를 불러오면 데이터가 없는 상태가 된다.
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    // 저장된 값이 없으면 Error가 발생하므로 undefined/null 인지 검사
    if(!storedData) {
      setIsLoading(false);
      return ;
    }
    const parsedData = JSON.parse(storedData);
    // console.log(parsedData);
    // 배열인지 아닌지 확해
    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return ;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });
    // console.log(maxId);
    
    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id, createdDate, emotionId, content
      }
    });
  };


  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  }

  if(isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider 
          value={{
            onCreate,
            onUpdate,
            onDelete
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            {/* 별표는 Switch default문 같은 것으로 위 경로들과 일치하지 않았을 때 마지막에 이 라우트 컴포넌트에 매칭됨 */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;
