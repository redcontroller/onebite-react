import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import View from "../components/View";
import useDiary from "../hooks/useDiary";
import getStringedDate from "../util/get-stringed-date";

const Diary = () => {
    const params = useParams();
    // console.log(params);
    const nav = useNavigate();
    
    // 컴포넌트가 마운트 되기 이전 useDiary는 useEffect로 인해 undefined가 될 수 있기 때문에 대응이 필요하다.
    const curDiaryItem = useDiary(params.id);
    // console.log(curDiaryItem);

    if (!curDiaryItem) {
        return <div>데이터 로딩중...!</div>
    }

    const {createdDate, emotionId, content} = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header 
                title={`${title} 기록`}
                leftChild={<Button 
                    onClick={() => nav(-1)}
                    text="< 뒤로가기"
                />}
                rightChild={<Button 
                    onClick={() => nav(`/edit/${params.id}`)}
                    text="수정하기" 
                />}
            />
            <View emotionId={emotionId} content={content} />
        </div>
    );
};

export default Diary;