import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App"; 

const Editor = () => {
    // const data = useContext(TodoContext);
    // console.log(data);
    const { onCreate } = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) { onSubmit(); }
        // if (e.key === 'Enter') { onSubmit(); }
    }

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return; // onCreate 함수를 호출하지 않는다
        }
        onCreate(content);
        setContent("");
    };

    return (
        <div className="Editor">
            <input
                ref={contentRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;