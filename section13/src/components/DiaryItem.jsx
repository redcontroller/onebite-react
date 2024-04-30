import {getEmotionImage} from '../util/get-emotion-image';
import Button from './Button';
import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
    const nav = useNavigate();
    const { onDelete } = useContext(DiaryDispatchContext);

    return (
        <div>
            <div className="DiaryItem">
                <div 
                onClick={() => nav(`/Diary/${id}`)}
                className={`img_section img_section_${emotionId}`}>
                    <img src={getEmotionImage(emotionId)} />
                </div>
                <div 
                onClick={() => nav(`/Diary/${id}`)}
                className="info_section">
                    <div className='created_date'>
                        {new Date(createdDate).toLocaleDateString()}
                    </div>
                    <div className='content'>{content}</div>
                </div>
                <div className="button_section">
                    <Button 
                        onClick={() => nav(`/edit/${id}`)}
                        text="수정하기" 
                    />
                    <Button 
                        onClick={() => onDelete(id)}
                        text="삭제하기"
                        type="NEGATIVE" 
                    />
                </div>
            </div>
        </div>
    );
};

export default DiaryItem;