import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

const New = () => {
    const nav = useNavigate();
    const { onCreate } = useContext(DiaryDispatchContext);
    // 커스텀 훅으로 중복되는 코드 분리해서 재사용하기
    usePageTitle("새 일기 쓰기");

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(), // 시간은 타임스탬프 형태로 저장한다.
            input.emotionId,
            input.content
        );
        nav('/', { replace: true}); // 첫 화면으로 가면서 뒤로가기는 방지
    };

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button
                    text={"< 뒤로 가기"} 
                    onClick={() => nav(-1)}
                />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;