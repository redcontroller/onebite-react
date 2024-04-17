import { useReducer, useRef } from 'react';
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
    const [info, dispatch] = useReducer(reducer, {
        name: "",
        contact: "",
    });

    const handleChange = (e) => {
        dispatch({
            type: "EDIT",
            target: e.target,
        });
    };

    const handleClick = (e) => {
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
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick(e);
        }
    };

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

export default ContactEditor;