import { useReducer, useRef, useCallback, memo, useMemo } from 'react';
import styles from "./ContactEditor.module.css";

function reducer (state, action) {
    switch (action.type) {
        case "EDIT":
            return {
                ...state,
                [action.target.name]: action.target.value
            };
        case "SUBMIT":
            return { name: "", contact: ""};
        default:
            return state;
    }
}

const ContactEditor = ({ onCreate }) => {
    const nameRef = useRef();
    const contactRef = useRef();

    // useCallback을 사용하여 reducer 함수 메모이제이션
    const [info, dispatch] = useReducer(
        useCallback(reducer, []),
        {
            name: "",
            contact: "",
        }
    );

    // useCallback을 사용하여 handleChange 메모이제이션
    const handleChange = useCallback((e) => {
        dispatch({
            type: "EDIT",
            target: e.target,
        });
    }, []);

    const handleClick = useCallback((e) => {
        e.preventDefault();

        if (info.name && info.contact) {
            onCreate(info.name, info.contact);
            dispatch({
                type: "SUBMIT",
            });
        } else if (!info.name) {
            nameRef.current.focus();
        } else if (!info.contact) {
            contactRef.current.focus();
        }
    }, [info.name, info.contact, onCreate]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter') {
            handleClick(e);
        }
    }, [handleClick]);

    return (
        <form className={styles.form}>
            <h2>💡 Add Contact</h2>
            <div className={styles.wrap}>
                <input
                    ref={nameRef}
                    name="name"
                    placeholder="이름 ..." 
                    value={info.name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <input
                    ref={contactRef}
                    name="contact"
                    placeholder="연락처(이메일) ..."
                    value={info.contact}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <button
                type='submit'
                onClick={handleClick}
            >
                Add
            </button>
        </form>
    );
};

export default memo(ContactEditor);
