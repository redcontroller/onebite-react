import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import NotFound from './pages/NotFound';
import Edit from './pages/Edit';
// import { getEmotionImage  } from './util/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>      
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button> */}
      
      {/* <Header title={"Header"}
        leftChild={<Button text={'Left'} />}
        rightChild={<Button text={'Right'} />}
      />
      
      <Button
        text="123"
        onClick={() => console.log("123번 버튼 클릭!")}
      />
      <Button
        text="123"
        type={"POSITIVE"}
        onClick={() => console.log("123번 버튼 클릭!")}
      />
      <Button
        text="123"
        type={"NEGATIVE"}
        onClick={() => console.log("123번 버튼 클릭!")}
      /> */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        {/* 별표는 Switch default문 같은 것으로 위 경로들과 일치하지 않았을 때 마지막에 이 라우트 컴포넌트에 매칭됨 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
