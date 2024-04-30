import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// 맨 처음 Diary 컴포넌트가 렌더링되기 전에 최초 호출 시에는 undefined 반환
// 컴포넌트가 마운트된 이후에 useDiary의 useEffect가 실행되어짐 curDiaryItem의 값이 채워짐
const useDiary = (id) => {   
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect (() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );
        
        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.")
            // BrowserRouter 컴포넌트가 렌더링 된 이후에 사용할 수 있음
            // 컴포넌트가 마운트 되기 전에 사용할 수 없음
            // useEffect를 이용해서 마운트 된 이후에 호출해야 함
            nav('/', { replace: true });
        }
        
        setCurDiaryItem(currentDiaryItem);
        
    }, [id, data]);

    return curDiaryItem;
};

export default useDiary;